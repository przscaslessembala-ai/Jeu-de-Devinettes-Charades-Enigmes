/* game.js — Interface & logique du jeu | Auteur : P2 */

/* config niveaux */
const LEVEL_CONFIG = {
  facile:    { questions: 10, timer: 45, lives: 1, pts: 10,  ptsCharade: 15 },
  moyen:     { questions: 15, timer: 35, lives: 3, pts: 15,  ptsCharade: 20 },
  difficile: { questions: 20, timer: 25, lives: 5, pts: 20,  ptsCharade: 25 }
};

const CAT_LABELS = { devinette: '💡 Devinette', charade: '🔤 Charade', enigme: '🔮 Énigme' };
const LEVEL_LABELS = { facile: '🟢 Facile', moyen: '🟡 Moyen', difficile: '🔴 Difficile' };

/* état */
let pseudo, category, level, config;
let questions = [];
let currentIndex = 0;
let score = 0;
let lives = 0;
let timerInterval = null;
let timeLeft = 0;
let soundEnabled = true;
let correctCount = 0;
let totalTimeUsed = 0;
let hintUsed = false;
const CIRCUMFERENCE = 2 * Math.PI * 24; // ~150.8

/* éléments DOM */
const screenWelcome  = document.getElementById('screen-welcome');
const screenGame     = document.getElementById('screen-game');
const screenEnd      = document.getElementById('screen-end');
const welcomePseudo  = document.getElementById('welcome-pseudo');
const welcomeCat     = document.getElementById('welcome-cat');
const welcomeLevel   = document.getElementById('welcome-level');
const rulesList      = document.getElementById('rules-list');
const btnReady       = document.getElementById('btn-ready');
const btnSkip        = document.getElementById('btn-skip-rules');
const scoreDisplay   = document.getElementById('score-display');
const livesDisplay   = document.getElementById('lives-display');
const timerText      = document.getElementById('timer-text');
const ringProgress   = document.getElementById('ring-progress');
const progressBar    = document.getElementById('progress-bar');
const progressLabel  = document.getElementById('progress-label');
const questionNum    = document.getElementById('question-num');
const questionText   = document.getElementById('question-text');
const answerInput    = document.getElementById('answer-input');
const btnValidate    = document.getElementById('btn-validate');
const feedbackMsg    = document.getElementById('feedback-msg');
const btnHint        = document.getElementById('btn-hint');
const btnPass        = document.getElementById('btn-pass');
const btnEnd         = document.getElementById('btn-end');
const btnSound       = document.getElementById('btn-sound');
const hintBox        = document.getElementById('hint-box');
const endEmoji       = document.getElementById('end-emoji');
const endTitle       = document.getElementById('end-title');
const endSubtitle    = document.getElementById('end-subtitle');
const statScore      = document.getElementById('stat-score');
const statCorrect    = document.getElementById('stat-correct');
const statTime       = document.getElementById('stat-time');
const btnReplay      = document.getElementById('btn-replay');
const btnHome        = document.getElementById('btn-home');
const btnLb          = document.getElementById('btn-lb');

/* sons via Web Audio API */
let audioCtx = null;

const getAudioCtx = () => {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
};

const playTone = (freq, type, duration, vol = 0.3) => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch(e) {}
};

const soundCorrect = () => {
  playTone(523, 'sine', 0.15, 0.3);
  setTimeout(() => playTone(659, 'sine', 0.15, 0.3), 120);
  setTimeout(() => playTone(784, 'sine', 0.25, 0.3), 240);
};

const soundWrong = () => {
  playTone(200, 'sawtooth', 0.3, 0.4);
  setTimeout(() => playTone(150, 'sawtooth', 0.3, 0.4), 150);
};

const soundTick = () => playTone(880, 'square', 0.05, 0.1);

const soundVictory = () => {
  const notes = [523, 659, 784, 1047];
  notes.forEach((f, i) => setTimeout(() => playTone(f, 'sine', 0.3, 0.4), i * 150));
};

const soundGameOver = () => {
  const notes = [400, 300, 200, 150];
  notes.forEach((f, i) => setTimeout(() => playTone(f, 'sawtooth', 0.35, 0.45), i * 180));
};

const soundTimerUrgent = () => playTone(660, 'square', 0.08, 0.15);

/* init */
function init() {
  pseudo   = sessionStorage.getItem('pseudo')   || 'Joueur';
  category = sessionStorage.getItem('category') || 'devinette';
  level    = sessionStorage.getItem('level')    || 'facile';
  config   = LEVEL_CONFIG[level];

  const pool = QUESTIONS[category][level];
  questions = shuffle([...pool]).slice(0, config.questions);
  lives = config.lives;

  buildWelcomeScreen();
}

function buildWelcomeScreen() {
  welcomePseudo.textContent = pseudo;
  welcomeCat.textContent    = CAT_LABELS[category];
  welcomeLevel.textContent  = LEVEL_LABELS[level];

  const rules = [
    `${config.questions} questions au total`,
    `${config.timer} secondes par question`,
    `${lives} vie${lives > 1 ? 's' : ''} disponible${lives > 1 ? 's' : ''}`,
    `${config.pts} points par bonne réponse`,
    category === 'charade' ? `${config.ptsCharade} pts (charades)` : null,
    `Bonus de rapidité : plus vite = plus de points`,
    `Le bouton "Indice" vous aide, mais sans bonus de rapidité`,
    `"Passer" = vie perdue`
  ].filter(Boolean);

  rulesList.innerHTML = rules.map(r => `<li>${r}</li>`).join('');
}

function startGame() {
  screenWelcome.classList.add('hidden');
  screenGame.classList.remove('hidden');
  currentIndex = 0;
  score = 0;
  correctCount = 0;
  totalTimeUsed = 0;
  updateHUD();
  showQuestion();
}

/* affichage question */
function showQuestion() {
  if (currentIndex >= questions.length) { endGame(true); return; }

  hintUsed = false;
  hintBox.classList.add('hidden');
  hintBox.textContent = '';
  feedbackMsg.textContent = '';
  feedbackMsg.className = 'feedback-msg';
  answerInput.value = '';
  answerInput.className = 'answer-input';
  answerInput.disabled = false;
  answerInput.focus();
  btnValidate.disabled = false;

  const q = questions[currentIndex];
  questionNum.textContent = `Question ${currentIndex + 1} / ${questions.length}`;
  questionText.textContent = q.question;

  const questionCard = document.getElementById('question-card');
  questionCard.style.animation = 'none';
  void questionCard.offsetWidth;
  questionCard.style.animation = 'questionSlide 0.4s cubic-bezier(.22,1,.36,1) both';

  updateProgress();
  startTimer();
}

/* timer */
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = config.timer;
  updateTimerUI();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerUI();

    if (timeLeft <= 5) soundTimerUrgent();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      onWrongAnswer(true);
    }
  }, 1000);
}

function updateTimerUI() {
  timerText.textContent = timeLeft;
  const offset = CIRCUMFERENCE * (1 - timeLeft / config.timer);
  ringProgress.style.strokeDashoffset = offset;

  ringProgress.classList.remove('warn', 'danger');
  if (timeLeft <= 5)  ringProgress.classList.add('danger');
  else if (timeLeft <= Math.floor(config.timer * 0.4)) ringProgress.classList.add('warn');
}

/* validation réponse */
async function validateAnswer() {
  const raw = answerInput.value.trim();
  if (!raw) { answerInput.classList.add('shake'); return; }

  clearInterval(timerInterval);
  const timeUsed = config.timer - timeLeft;
  totalTimeUsed += timeUsed;

  answerInput.disabled = true;
  btnValidate.disabled = true;
  feedbackMsg.className = 'feedback-msg';
  feedbackMsg.textContent = '🤖 Vérification en cours...';

  const q = questions[currentIndex];
  const isCorrect = await validateWithAI(raw, q.reponse);

  if (isCorrect) {
    onCorrectAnswer(timeUsed);
  } else {
    onWrongAnswer(false);
  }
}

function onCorrectAnswer(timeUsed) {
  const speedBonus = hintUsed ? 0 : Math.max(0, Math.floor((config.timer - timeUsed) / config.timer * 10));
  const pts = (category === 'charade' ? config.ptsCharade : config.pts) + speedBonus;
  score += pts;
  correctCount++;

  answerInput.classList.add('correct');
  feedbackMsg.className = 'feedback-msg correct';
  feedbackMsg.textContent = `✅ Correct ! +${pts} pts${speedBonus > 0 ? ` (dont +${speedBonus} bonus rapidité)` : ''}`;

  soundCorrect();
  showScorePop(`+${pts}`);
  updateHUD();

  setTimeout(() => {
    currentIndex++;
    showQuestion();
  }, 1200);
}

function onWrongAnswer(timeout = false) {
  lives--;
  answerInput.disabled = true;
  btnValidate.disabled = true;
  answerInput.classList.add('wrong');

  const correctAnswer = questions[currentIndex].reponse;
  const intro = timeout ? '⏰ Temps écoulé !' : '❌ Mauvaise réponse !';

  feedbackMsg.className = 'feedback-msg wrong';
  feedbackMsg.innerHTML = `${intro}<br><span class="correct-answer-reveal">✅ La bonne réponse était : <strong>${correctAnswer}</strong></span>`;

  soundWrong();
  updateHUD();

  const delay = lives <= 0 ? 2500 : 2800;

  setTimeout(() => {
    if (lives <= 0) {
      endGame(false);
    } else {
      currentIndex++;
      showQuestion();
    }
  }, delay);
}

/* hud */
function updateHUD() {
  scoreDisplay.textContent = score;
  livesDisplay.textContent = '❤️'.repeat(Math.max(0, lives));
}

function updateProgress() {
  const pct = (currentIndex / questions.length) * 100;
  progressBar.style.width = pct + '%';
  progressLabel.textContent = `${currentIndex} / ${questions.length}`;
}

/* score pop */
function showScorePop(text) {
  const el = document.createElement('div');
  el.className = 'score-pop';
  el.textContent = text;
  const rect = scoreDisplay.getBoundingClientRect();
  el.style.left = rect.left + 'px';
  el.style.top  = rect.top  + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

/* fin de partie */
function endGame(win) {
  clearInterval(timerInterval);
  screenGame.classList.add('hidden');
  screenEnd.classList.remove('hidden');

  const avgTime = correctCount > 0 ? Math.round(totalTimeUsed / correctCount) : 0;
  statScore.textContent   = score;
  statCorrect.textContent = correctCount;
  statTime.textContent    = avgTime + 's';

  if (win || correctCount >= Math.ceil(questions.length * 0.5)) {
    endEmoji.textContent = '🏆';
    endTitle.textContent = 'Bravo ' + pseudo + ' !';
    endTitle.className = 'win';
    endSubtitle.textContent = `Tu as terminé avec ${score} points. Excellent !`;
    soundVictory();
    launchVictoryAnim();
  } else {
    endEmoji.textContent = '😵';
    endTitle.textContent = 'Perdu...';
    endTitle.className = 'lose';
    endSubtitle.textContent = `Plus de vies. Tu avais ${score} points. Retente ta chance !`;
    soundGameOver();
    launchDefeatAnim();
  }

  sessionStorage.setItem('lastScore', score);
  sessionStorage.setItem('lastLevel', level);
  sessionStorage.setItem('lastCategory', category);
}

/* anim victoire */
function launchVictoryAnim() {
  const petals = ['🌸','🌺','🌼','🌻','🎉','✨','🏆','⭐','🎊','💐'];
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'petal-piece';
      el.textContent = petals[Math.floor(Math.random() * petals.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.bottom = '-50px';
      el.style.animationDuration = (1.5 + Math.random() * 2) + 's';
      el.style.animationDelay = '0s';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 3500);
    }, i * 80);
  }
}

/* anim défaite */
function launchDefeatAnim() {
  const pieces = ['🍂','🍁','💔','😢','🌧','⚡','🥀','😵','💀','🖤'];
  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.cssText = `
        left: ${Math.random() * 100}vw;
        top: -30px;
        width: auto; height: auto;
        background: none;
        font-size: 1.4rem;
      `;
      el.textContent = pieces[Math.floor(Math.random() * pieces.length)];
      el.style.animationDuration = (2 + Math.random() * 2) + 's';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }, i * 100);
  }
}

/* canvas fond */
(function initCanvas() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  const EMOJIS = ['❓','💡','🔮','🎯','⭐','🔤','🏆'];
  const particles = [];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < 18; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 12 + Math.random() * 10,
      speedY: -(0.25 + Math.random() * 0.4),
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: 0.1 + Math.random() * 0.15,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.globalAlpha = p.opacity;
      ctx.font = p.size + 'px serif';
      ctx.fillText(p.emoji, p.x, p.y);
      p.y += p.speedY;
      p.x += p.speedX;
      if (p.y < -30) { p.y = H + 30; p.x = Math.random() * W; }
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* utilitaire shuffle */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* événements */
btnReady.addEventListener('click', startGame);
btnSkip.addEventListener('click', startGame);

btnValidate.addEventListener('click', validateAnswer);
answerInput.addEventListener('keydown', e => { if (e.key === 'Enter') validateAnswer(); });

btnHint.addEventListener('click', () => {
  const q = questions[currentIndex];
  hintBox.textContent = '💡 ' + q.indice;
  hintBox.classList.remove('hidden');
  hintUsed = true;
});

btnPass.addEventListener('click', () => { clearInterval(timerInterval); onWrongAnswer(false); });
btnEnd.addEventListener('click', () => { clearInterval(timerInterval); endGame(false); });

btnSound.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  btnSound.textContent = soundEnabled ? '🔊' : '🔇';
  btnSound.classList.toggle('muted', !soundEnabled);
});

btnReplay.addEventListener('click', () => window.location.reload());
btnHome.addEventListener('click', () => { window.location.href = 'index.html'; });
btnLb.addEventListener('click', () => { window.location.href = 'leaderboard.html'; });

init();
