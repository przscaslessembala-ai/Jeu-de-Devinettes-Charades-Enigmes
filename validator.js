/* validator.js — Validation IA des réponses | Auteur : P5 */

const CLAUDE_API_KEY = CONFIG.ANTHROPIC_API_KEY;
const CLAUDE_MODEL   = "claude-3-haiku-20240307";
const CLAUDE_URL     = "https://api.anthropic.com/v1/messages";

/* valide la réponse via Claude, fallback local si erreur réseau */
const validateWithAI = async (userAnswer, expectedAnswer) => {
  if (!userAnswer || !expectedAnswer) return false;

  const prompt = `Tu es un correcteur très indulgent pour un jeu de devinettes en français destiné à des enfants et adultes.

La réponse attendue est : "${expectedAnswer}"
La réponse du joueur est : "${userAnswer}"

Règles d'acceptation (sois TRÈS tolérant) :
- Accepte si le joueur donne le mot-clé principal (ex: "vin" pour "bouteille de vin")
- Accepte les réponses partielles qui contiennent l'idée principale
- Accepte les synonymes, pluriels/singuliers, masculin/féminin
- Accepte les fautes d'orthographe mineures
- Accepte si la réponse est incluse dans la réponse attendue ou vice-versa
- Refuse SEULEMENT si la réponse est complètement hors sujet ou fausse

Réponds UNIQUEMENT par "OUI" ou "NON". Aucun autre texte.`;

  try {
    const response = await fetch(CLAUDE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": CLAUDE_API_KEY,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: CLAUDE_MODEL,
        max_tokens: 10,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!response.ok) {
      console.warn("[validator] API error:", response.status, "— fallback local");
      return localFallback(userAnswer, expectedAnswer);
    }

    const data  = await response.json();
    const reply = data?.content?.[0]?.text?.trim().toUpperCase();
    return reply === "OUI";

  } catch (err) {
    console.warn("[validator] Fetch failed:", err.message, "— fallback local");
    return localFallback(userAnswer, expectedAnswer);
  }
};

/* fallback local : tolérance par mots-clés et distance Levenshtein */
const localFallback = (userAnswer, expectedAnswer) => {
  const a = normalize(userAnswer);
  const b = normalize(expectedAnswer);
  if (a === b) return true;
  if (b.includes(a) || a.includes(b)) return true;
  if (levenshtein(a, b) <= 2) return true;

  const wordsB    = b.split(/\s+/).filter(w => w.length > 2);
  const wordsA    = a.split(/\s+/).filter(w => w.length > 2);
  const mainWord  = wordsB.reduce((longest, w) => w.length > longest.length ? w : longest, "");
  if (mainWord && (a.includes(mainWord) || levenshtein(a, mainWord) <= 1)) return true;
  if (wordsA.some(wa => wordsB.some(wb => levenshtein(wa, wb) <= 1))) return true;

  return false;
};

/* normalisation : minuscules, sans accents, sans ponctuation */
const normalize = str => str.toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9\s]/g, "")
  .trim();

/* distance de Levenshtein entre deux chaînes */
const levenshtein = (a, b) => {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => i === 0 ? j : j === 0 ? i : 0)
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
};
