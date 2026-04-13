import { initializeApp }                          from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import { getFirestore, collection, addDoc,
         getDocs, query, where, orderBy,
         limit, doc, updateDoc }                  from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey:            'AIzaSyBHeFi967-9U86kN-zS75PJK4vKvt5gtzA',
  authDomain:        'jeux-e3aaa.firebaseapp.com',
  projectId:         'jeux-e3aaa',
  storageBucket:     'jeux-e3aaa.firebasestorage.app',
  messagingSenderId: '335830262805',
  appId:             '1:335830262805:web:542182347c74c3a6e5da1c',
  measurementId:     'G-NWWP5W4JYX'
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);
const SCORES_COL = 'scores';

const CAT_LABELS = { devinette: '💡 Devinette', charade: '🔤 Charade', enigme: '🔮 Énigme' };

/* ══ ÉTAT ══ */
let allScores    = [];
let filterPeriod = 'all';
let filterLevel  = 'all';
let filterCat    = 'all';

/* ══ ÉLÉMENTS DOM ══ */
const lbLoading  = document.getElementById('lb-loading');
const lbEmpty    = document.getElementById('lb-empty');
const lbTable    = document.getElementById('lb-table');
const lbBody     = document.getElementById('lb-body');
const myBanner   = document.getElementById('my-score-banner');
const myScoreVal = document.getElementById('my-score-val');
const myRankVal  = document.getElementById('my-rank-val');
const btnRefresh = document.getElementById('btn-refresh');

/* ══ CHARGEMENT DES SCORES ══ */
async function loadScores() {
  showLoading(true);
  try {
    const q   = query(collection(db, SCORES_COL), orderBy('score', 'desc'), limit(100));
    const snap = await getDocs(q);
    allScores  = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    render();
  } catch (err) {
    console.warn('[leaderboard] Erreur Firebase:', err.message);
    allScores = getLocalScores();
    render();
  } finally {
    showLoading(false);
  }
}

/* ══ ENVOI DU SCORE ══ */
async function submitScore(entry) {
  try {
    const q    = query(collection(db, SCORES_COL),
                   where('pseudo',   '==', entry.pseudo),
                   where('level',    '==', entry.level),
                   where('category', '==', entry.category));
    const snap = await getDocs(q);

    if (!snap.empty) {
      const existing = snap.docs[0];
      if (entry.score > existing.data().score) {
        await updateDoc(doc(db, SCORES_COL, existing.id), entry);
      }
    } else {
      await addDoc(collection(db, SCORES_COL), entry);
    }
    saveLocalScore(entry);
  } catch (err) {
    console.warn('[leaderboard] Erreur envoi Firebase:', err.message);
    saveLocalScore(entry);
  }
}

/* ══ FALLBACK LOCAL (localStorage) ══ */
function saveLocalScore(entry) {
  const local = getLocalScores();
  const idx = local.findIndex(
    s => s.pseudo === entry.pseudo && s.level === entry.level && s.category === entry.category
  );
  if (idx >= 0) {
    if (entry.score > local[idx].score) local[idx] = entry;
  } else {
    local.push(entry);
  }
  local.sort((a, b) => b.score - a.score);
  localStorage.setItem('game_scores', JSON.stringify(local));
}

function getLocalScores() {
  try { return JSON.parse(localStorage.getItem('game_scores')) || []; }
  catch { return []; }
}

/* ══ FILTRAGE ══ */
function getFiltered() {
  const now = Date.now();
  return allScores.filter(s => {
    const ts = new Date(s.date).getTime();
    if (filterPeriod === 'day'   && now - ts > 86400000)    return false;
    if (filterPeriod === 'week'  && now - ts > 604800000)   return false;
    if (filterPeriod === 'month' && now - ts > 2592000000)  return false;
    if (filterLevel !== 'all'    && s.level    !== filterLevel) return false;
    if (filterCat   !== 'all'    && s.category !== filterCat)   return false;
    return true;
  }).sort((a, b) => b.score - a.score);
}

/* ══ RENDU ══ */
function render() {
  const filtered = getFiltered();

  if (filtered.length === 0) {
    lbTable.classList.add('hidden');
    lbEmpty.classList.remove('hidden');
    clearPodium();
    return;
  }

  lbEmpty.classList.add('hidden');
  lbTable.classList.remove('hidden');

  renderPodium(filtered);
  renderTable(filtered);
  renderMyScore(filtered);
}

function renderPodium(scores) {
  const order = [scores[1], scores[0], scores[2]];
  const ids   = ['pod-2', 'pod-1', 'pod-3'];

  ids.forEach((id, i) => {
    const s = order[i];
    document.getElementById(id + '-name').textContent  = s ? s.pseudo  : '—';
    document.getElementById(id + '-score').textContent = s ? s.score + ' pts' : '—';
  });
}

function clearPodium() {
  ['pod-1','pod-2','pod-3'].forEach(id => {
    document.getElementById(id + '-name').textContent  = '—';
    document.getElementById(id + '-score').textContent = '—';
  });
}

function renderTable(scores) {
  const myPseudo = sessionStorage.getItem('pseudo') || '';

  lbBody.innerHTML = scores.slice(0, 50).map((s, i) => {
    const rank = i + 1;
    const rankClass = rank <= 3 ? `rank-${rank}` : '';
    const rankIcon  = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;
    const isMe = s.pseudo === myPseudo ? 'is-me' : '';
    const dateStr = formatDate(s.date);

    return `
      <tr class="${isMe}">
        <td class="rank-cell ${rankClass}">${rankIcon}</td>
        <td>${escHtml(s.pseudo)}${isMe ? ' 👈' : ''}</td>
        <td class="score-cell">${s.score} pts</td>
        <td><span class="level-badge ${s.level}">${s.level}</span></td>
        <td>${CAT_LABELS[s.category] || s.category}</td>
        <td class="date-cell">${dateStr}</td>
      </tr>
    `;
  }).join('');
}

function renderMyScore(scores) {
  const myPseudo = sessionStorage.getItem('pseudo');
  const lastScore = parseInt(sessionStorage.getItem('lastScore'));

  if (!myPseudo || isNaN(lastScore)) { myBanner.classList.add('hidden'); return; }

  myScoreVal.textContent = lastScore;
  const rank = scores.findIndex(s => s.pseudo === myPseudo) + 1;
  myRankVal.textContent  = rank > 0 ? `🏅 Classé ${rank}e sur ${scores.length}` : '';
  myBanner.classList.remove('hidden');
}

/* ══ UTILITAIRES ══ */
function showLoading(on) {
  lbLoading.style.display = on ? 'flex' : 'none';
  if (on) {
    lbTable.classList.add('hidden');
    lbEmpty.classList.add('hidden');
  }
}

function formatDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit' });
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ══ FILTRES — ÉVÉNEMENTS ══ */
function setupFilters(groupId, onSelect) {
  document.getElementById(groupId).querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById(groupId).querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      onSelect(btn.dataset.value);
      render();
    });
  });
}

setupFilters('filter-period', v => filterPeriod = v);
setupFilters('filter-level',  v => filterLevel  = v);
setupFilters('filter-cat',    v => filterCat    = v);

btnRefresh.addEventListener('click', loadScores);

/* ══ PARTICULES CANVAS ══ */
(function initCanvas() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  const EMOJIS = ['🏆','⭐','🥇','🎯','✨','🌟','🎖'];
  const particles = [];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < 16; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 12 + Math.random() * 10,
      speedY: -(0.2 + Math.random() * 0.35),
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: 0.08 + Math.random() * 0.12,
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

/* ══ AUTO-SUBMIT DU SCORE SI ON VIENT D'UNE PARTIE ══ */
(async function autoSubmit() {
  const pseudo    = sessionStorage.getItem('pseudo');
  const lastScore = parseInt(sessionStorage.getItem('lastScore'));
  const level     = sessionStorage.getItem('lastLevel');
  const category  = sessionStorage.getItem('lastCategory');

  if (pseudo && !isNaN(lastScore) && level && category) {
    const entry = {
      pseudo,
      score: lastScore,
      level,
      category,
      date: new Date().toISOString()
    };
    await submitScore(entry);
    sessionStorage.removeItem('lastScore');
  }

  await loadScores();
})();
