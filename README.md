# Jeu de Devinettes & Énigmes

> Une application  de quiz interactif avec validation par intelligence artificielle, classement en ligne et animations immersives.

![Application Web](https://img.shields.io/badge/🌐-Application%20Web-7c4dff?style=flat-square)
![Claude AI](https://img.shields.io/badge/🤖-Claude%20AI-ff4081?style=flat-square)
![Firebase](https://img.shields.io/badge/🔥-Firebase-f9ca24?style=flat-square)
![Projet Académique](https://img.shields.io/badge/🎓-Projet%20Académique-00c853?style=flat-square)
![Équipe de 5](https://img.shields.io/badge/👥-Équipe%20de%205-f0932b?style=flat-square)

---

##  Description du projet

**Jeu de Devinettes & Énigmes** est une application web de quiz culturel et de réflexion jouable directement dans le navigateur, sans installation. Le joueur choisit un pseudo, une catégorie de questions et un niveau de difficulté, puis répond à une série de questions contre la montre.

Ce qui distingue ce jeu : les réponses sont validées par **l'intelligence artificielle Claude** d'Anthropic. Cela signifie que les fautes d'orthographe légères, les synonymes et les réponses partielles correctes sont acceptés intelligemment — le joueur n'est pas pénalisé pour une coquille.

Les scores sont sauvegardés en temps réel dans une base de données **Firebase Firestore**, permettant un classement partagé entre tous les joueurs du monde.

>  Ce projet a été réalisé dans le cadre d'un cours de développement web (Semestre II — KEYCE Informatique). Il couvre les technologies HTML, CSS, JavaScript, l'intégration d'API externe et la gestion collaborative avec Git.

---

## ✨ Fonctionnalités principales

| Fonctionnalité | Description |
|---|---|
| 🎮 **3 catégories de questions** | Devinettes, Charades et Énigmes — 180 questions au total, 20 par catégorie et par niveau. |
| 🎯 **3 niveaux de difficulté** | Facile, Moyen, Difficile — chaque niveau a son propre timer, nombre de vies et barème de points. |
| 🤖 **Validation par IA** | Claude AI valide les réponses avec tolérance : fautes légères, synonymes et mots-clés acceptés. |
| ⚡ **Bonus de rapidité** | Plus vous répondez vite, plus vous gagnez de points bonus. Jusqu'à +10 pts par question. |
| 🏆 **Classement en ligne** | Firebase Firestore synchronise les scores en temps réel. Filtres par période, niveau et catégorie. |
| 🌸 **Animations & sons** | Fleurs qui montent en cas de victoire, feuilles qui tombent en défaite, sons Web Audio API. |

---

## 📋 Règles du jeu

### Catégories de questions

- 💡 **Devinettes** — Une question dont il faut trouver la réponse par la logique ou la culture générale.
- 🔤 **Charades** — Une devinette par syllabes : "Mon premier est..., mon second est.., mon tout est....."
- 🔮 **Énigmes** — Un problème de réflexion plus ouvert qui demande de l'observation et du raisonnement.

### Niveaux de difficulté

| | 🟢 Facile | 🟡 Moyen | 🔴 Difficile |
|---|---|---|---|
| **Questions** | 10 | 15 | 20 |
| **Timer** | 45 sec / question | 35 sec / question | 25 sec / question |
| **Vies** | 1 | 3 | 5 |
| **Points / bonne réponse** | 10 pts | 15 pts | 20 pts |
| **Points / charade** | 15 pts | 20 pts | 25 pts |

> ⚠️ **Logique des vies :** Le niveau Facile a peu de vies car les questions sont simples. Le niveau Difficile en a plus car les questions demandent plus de réflexion. C'est une mécanique classique des jeux de quiz.

### Déroulement d'une partie

1. **Accueil** — Le joueur entre son pseudo, choisit une catégorie et un niveau de difficulté.
2. **Écran de bienvenue** — Affichage des règles de la partie avec un bouton "Je suis prêt" ou "Passer".
3. **Questions** — Les questions s'enchaînent une par une avec : timer animé, champ de réponse, bouton Indice (💡), bouton Passer (⏭).
4. **Validation IA** — Claude AI analyse la réponse du joueur : tolérance aux fautes, synonymes, mots-clés principaux acceptés.
5. **Fin de partie** — Quand toutes les vies sont perdues ou toutes les questions répondues. Le score est envoyé au classement Firebase.

### Système de score et bonus de rapidité

Le score final dépend du nombre de bonnes réponses et de la vitesse de réponse :

```
Score par question = pts_base + bonus_rapidité

bonus_rapidité = floor( (temps_restant / temps_total) × 10 )

Exemple (niveau Facile, 45 sec) :
  → Réponse en 5 sec  : bonus = floor(40/45 × 10) = +8 pts
  → Réponse en 20 sec : bonus = floor(25/45 × 10) = +5 pts
  → Réponse en 44 sec : bonus = floor(1/45  × 10) = +0 pts

⚠️  Aucun bonus si l'indice (💡) a été utilisé.
```

---

## 🗂️ Structure des fichiers

```
Projet/
│
├── index.html           → Page d'accueil : pseudo, catégorie, niveau
├── game.html            → Interface de jeu complète
├── leaderboard.html     → Classement des joueurs
├── README.md            → Ce fichier de documentation
│
├── css/
│   ├── style.css        → Thème global, animations, fond dégradé
│   ├── game.css         → Styles spécifiques à l'interface de jeu
│   └── leaderboard.css  → Styles du classement
│
├── js/
│   ├── game.js          → Logique du jeu (timer, vies, score, sons)
│   └── leaderboard.js   → Chargement et envoi des scores Firebase
│
├── P2/
│   └── data.js          → 180 questions (devinettes, charades, énigmes)
│
└── P4/
    └── validator.js     → Validation des réponses via Claude API
```

---

## ⚙️ Technologies utilisées

| Technologie | Rôle | Pourquoi ce choix |
|---|---|---|
| **HTML5** | Structure des 3 pages | Standard du web, sémantique claire |
| **CSS3** | Design, animations, responsive | Variables CSS, keyframes, flexbox/grid |
| **JavaScript ES6+** | Logique du jeu, timer, sons | Natif, aucune dépendance externe |
| **Web Audio API** | Sons du jeu (correct, faux, victoire) | Génération de sons sans fichiers audio |
| **Claude API (Anthropic)** | Validation intelligente des réponses | Tolérance aux fautes, synonymes, réponses partielles |
| **Firebase Firestore** | Base de données des scores en ligne | Gratuit, temps réel, aucun serveur à gérer |
| **Firebase Hosting** | Hébergement de l'application | Gratuit, HTTPS, CDN global |
| **Google Fonts (Poppins)** | Typographie | Lisible, moderne, adapté au jeu |

`HTML5` · `CSS3` · `JavaScript ES6` · `Web Audio API` · `Claude API` · `Firebase Firestore` · `Firebase Hosting` · `Git & GitHub`

---

## 👥 Répartition des tâches (équipe de 5)

| Membre | Module | Fichiers | Travail concret |
|---|---|---|---|
| **P1** | Accueil & Navigation | `index.html`, `style.css` | Page d'accueil, saisie pseudo, sélection catégorie/niveau, animations, thème global |
| **P2** | Interface de jeu | `game.html`, `game.js`, `game.css` | Écran bienvenue/règles, timer SVG, HUD (score/vies), feedback réponses, sons, animations victoire/défaite |
| **P3** | Contenu des questions | `P2/data.js` | Rédaction de 180 questions avec réponses et indices, structurées par catégorie et niveau |
| **P4** | Validation IA | `P4/validator.js` | Intégration Claude API, prompt tolérant, fallback local (Levenshtein) si API indisponible |
| **P5** | Classement & Scores | `leaderboard.html`, `leaderboard.js`, `leaderboard.css` | Connexion Firebase Firestore, podium top 3, tableau filtrable par période/niveau/catégorie |

---

## 🌿 Workflow Git

Chaque membre travaille sur sa propre branche et ouvre une **pull request** vers `main` quand son module est terminé.

```
main  ← branche principale (stable, toujours fonctionnelle)
├── feature/accueil          → P1 : index.html + style.css
├── feature/interface-jeu    → P2 : game.html + game.js + game.css
├── feature/questions        → P3 : P2/data.js
├── feature/validation-ia    → P4 : P4/validator.js
└── feature/classement       → P5 : leaderboard.*
```

Commandes Git de base à connaître :

```bash
# Créer et basculer sur sa branche
git checkout -b feature/ma-branche

# Sauvegarder son travail
git add .
git commit -m "feat: description claire de ce qui a été fait"

# Envoyer sur GitHub
git push origin feature/ma-branche

# Puis ouvrir une Pull Request sur GitHub → main
```

> ✅ **Bonne pratique :** Un commit = une fonctionnalité. Les messages de commit doivent être clairs et en français ou en anglais, mais cohérents dans l'équipe.

---

## 🚀 Lancer le projet en local

Le projet nécessite un **serveur HTTP local** (pas un simple double-clic sur le fichier) car Firebase et les modules ES6 sont bloqués en `file://`.

**Option 1 — Python (recommandé, aucune installation) :**

```bash
# Dans le dossier du projet :
python -m http.server 3000

# Puis ouvrir dans le navigateur :
# http://localhost:3000
```

**Option 2 — Extension VS Code :** Installer *Live Server* et cliquer "Go Live".

> ⚠️ **Prérequis :** Avoir créé la base de données Firestore sur [console.firebase.google.com](https://console.firebase.google.com) en **mode test** pour que le classement fonctionne.

---

*Projet académique — KEYCE Informatique, Semestre II | Technologies : HTML · CSS · JavaScript · Claude API · Firebase*
