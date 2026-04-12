/*
   data.js — 180 questions structurées
   Structure : QUESTIONS[categorie][niveau] = [ {question, reponse, indice} ]
   Catégories : devinette | charade | enigme
   Niveaux    : facile | moyen | difficile  
   
   */

const QUESTIONS = {

  /* 
  
  DEVINETTES
  
  */
  
  devinette: {

    facile: [
      { question: "Je suis grand quand je suis jeune et petit quand je suis vieux. Qui suis-je ?", reponse: "un crayon", indice: "On l'utilise pour écrire." },
      { question: "J'ai des mains mais pas de bras, un visage mais pas de tête. Qui suis-je ?", reponse: "une montre", indice: "Je sers à donner l'heure." },
      { question: "Plus je sèche, plus je suis mouillée. Qui suis-je ?", reponse: "une serviette", indice: "On s'en sert après le bain." },
      { question: "Je cours sans jambes, je murmure sans bouche. Qui suis-je ?", reponse: "une rivière", indice: "Je coule dans la nature." },
      { question: "J'ai des dents mais je ne mords pas. Qui suis-je ?", reponse: "un peigne", indice: "On l'utilise pour les cheveux." },
      { question: "Je suis plein le jour et vide la nuit. Qui suis-je ?", reponse: "un soulier", indice: "On me porte aux pieds." },
      { question: "Je vole sans ailes et je pique sans dard. Qui suis-je ?", reponse: "le froid", indice: "Je suis une sensation." },
      { question: "Je suis partout mais on ne peut pas me toucher. Qui suis-je ?", reponse: "l'air", indice: "On respire grâce à moi." },
      { question: "Je suis né dans l'eau mais je meurs si je reste dans l'eau. Qui suis-je ?", reponse: "le sel", indice: "Je suis utilisé en cuisine." },
      { question: "Je n'ai pas de fenêtres ni de portes, mais des gens vivent en moi. Qui suis-je ?", reponse: "un œuf", indice: "On me retrouve au petit-déjeuner." },
      { question: "Je peux voyager autour du monde en restant dans mon coin. Qui suis-je ?", reponse: "un timbre", indice: "Je suis collé sur une enveloppe." },
      { question: "Je suis toujours devant toi mais on ne peut pas me voir. Qui suis-je ?", reponse: "le futur", indice: "Je représente le temps à venir." },
      { question: "On me jette quand on m'utilise et on me garde quand on n'en a pas besoin. Qui suis-je ?", reponse: "une ancre", indice: "Je suis sur les bateaux." },
      { question: "Plus je suis chaude, plus je monte. Qui suis-je ?", reponse: "la vapeur", indice: "Je sors de l'eau bouillante." },
      { question: "J'ai une queue et une tête mais pas de corps. Qui suis-je ?", reponse: "une pièce de monnaie", indice: "Je vaux de l'argent." },
      { question: "Je suis blanc quand je suis sale et noir quand je suis propre. Qui suis-je ?", reponse: "un tableau noir", indice: "On écrit dessus à la craie." },
      { question: "Je monte et descends sans jamais bouger. Qui suis-je ?", reponse: "la température", indice: "Le thermomètre me mesure." },
      { question: "J'ai des branches mais pas de feuilles, pas de tronc mais je donne de la lumière. Qui suis-je ?", reponse: "un lustre", indice: "Je suis au plafond." },
      { question: "Je suis léger comme une plume mais même le plus fort ne peut me tenir longtemps. Qui suis-je ?", reponse: "le souffle", indice: "On expire grâce à moi." },
      { question: "Je parle toutes les langues sans avoir étudié. Qui suis-je ?", reponse: "un écho", indice: "Je répète ce qu'on dit." }
    ],

    moyen: [
      { question: "Un homme regarde un portrait et dit : 'Je n'ai ni frère ni sœur, mais le père de cet homme est le fils de mon père.' De qui regarde-t-il le portrait ?", reponse: "son fils", indice: "Pensez aux liens familiaux directs." },
      { question: "Je suis toujours en avant d'un cheval et toujours en arrière d'un homme. Je suis dans la Bretagne mais pas en France. Qui suis-je ?", reponse: "la lettre B", indice: "Je suis une lettre de l'alphabet." },
      { question: "Plus j'ai de gardiens, moins je suis gardé. Qui suis-je ?", reponse: "un secret", indice: "Je ne dois pas être divulgué." },
      { question: "J'ai des villes sans maisons, des forêts sans arbres, des eaux sans poissons. Qui suis-je ?", reponse: "une carte géographique", indice: "Je représente le monde." },
      { question: "Je suis la fille de l'eau mais quand l'eau me touche, je meurs. Qui suis-je ?", reponse: "la glace", indice: "Je suis un état de l'eau." },
      { question: "Je parle sans bouche, j'entends sans oreilles, je n'ai pas de corps mais je prends vie avec le vent. Qui suis-je ?", reponse: "un écho", indice: "Je répète les sons." },
      { question: "Qu'est-ce qui a un cou mais pas de tête ?", reponse: "une bouteille", indice: "On y verse des liquides." },
      { question: "Je peux être craqué, joué, raconté ou fait. Qui suis-je ?", reponse: "une blague", indice: "Je fais rire." },
      { question: "Quelle est la chose qu'on peut casser rien qu'en la nommant ?", reponse: "le silence", indice: "Tout bruit me détruit." },
      { question: "Je vais partout avec toi mais tu ne peux jamais m'attraper. Qui suis-je ?", reponse: "ton ombre", indice: "Je disparais dans l'obscurité." },
      { question: "Je suis le seul endroit où le succès vient avant le travail. Où suis-je ?", reponse: "dans le dictionnaire", indice: "Cherchez l'ordre alphabétique." },
      { question: "Plus je vieillis, plus je suis précieuse. Qui suis-je ?", reponse: "une bouteille de vin", indice: "Je se boit." },
      { question: "Qu'est-ce qui a des trous partout mais retient l'eau ?", reponse: "une éponge", indice: "On me retrouve dans la salle de bain." },
      { question: "Je suis grand comme un éléphant mais ne pèse rien. Qui suis-je ?", reponse: "l'ombre d'un éléphant", indice: "Je suis une projection." },
      { question: "On me fabrique pour être brisé. Qui suis-je ?", reponse: "un œuf", indice: "Je contiens un jaune." },
      { question: "Qu'est-ce qu'on peut attraper mais jamais lancer ?", reponse: "un rhume", indice: "C'est une maladie." },
      { question: "Plus j'ai de trous, plus je suis solide. Qui suis-je ?", reponse: "une chaîne", indice: "Je relie des maillons." },
      { question: "Je n'ai pas de vie mais je peux mourir. Qui suis-je ?", reponse: "une batterie", indice: "Je donne de l'énergie aux appareils." },
      { question: "Deux pères et deux fils vont à la pêche. Ils attrapent 3 poissons et chacun en ramène un. Comment est-ce possible ?", reponse: "ils sont trois : grand-père, père et fils", indice: "Comptez les générations." },
      { question: "Qu'est-ce qui devient plus humide en séchant ?", reponse: "une serviette", indice: "Elle absorbe l'eau." }
    ],

    difficile: [
      { question: "Je suis sans fenêtres ni portes, et pourtant des prisonniers y sont enfermés. Qui suis-je ?", reponse: "une noix", indice: "On me casse pour accéder à mon intérieur." },
      { question: "Un coq est au sommet d'un toit à deux pentes. De quel côté tombe l'œuf ?", reponse: "les coqs ne pondent pas", indice: "Réfléchissez à la biologie." },
      { question: "Je suis au début de l'éternité, à la fin du temps, au début de chaque fin. Qui suis-je ?", reponse: "la lettre E", indice: "Je suis une voyelle." },
      { question: "Un homme habite au 20e étage. Les jours de pluie, il prend l'ascenseur jusqu'au 20e. Les jours de beau temps, il monte à pied jusqu'au 15e. Pourquoi ?", reponse: "il est de petite taille et ne peut appuyer que jusqu'au 15 avec son parapluie", indice: "Pensez à un objet qu'il emporte par temps de pluie." },
      { question: "Je suis la chose la plus rapide au monde, mais je m'arrête dès que tu allumes la lumière. Qui suis-je ?", reponse: "l'obscurité", indice: "Je suis l'absence de lumière." },
      { question: "Trois médecins affirment que Robert est leur frère. Robert dit qu'il n'a aucun frère. Qui ment ?", reponse: "personne, les médecins sont ses sœurs", indice: "Le genre est important." },
      { question: "Je peux courir mais je n'ai pas de jambes. J'ai une bouche mais je ne mange pas. J'ai un lit mais je ne dors pas. Qui suis-je ?", reponse: "une rivière", indice: "Je coule vers la mer." },
      { question: "Quelle est la moitié de deux plus deux ?", reponse: "trois", indice: "Lisez attentivement : moitié de 'deux plus deux'." },
      { question: "Un père a 4 enfants. La moitié d'entre eux sont des filles. Comment est-ce possible ?", reponse: "tous les 4 sont des filles", indice: "La moitié de 4 filles = 2 filles, plus 2 autres filles." },
      { question: "Je suis quelque chose que tu poses quand tu parles et ramasses quand tu te tais. Qui suis-je ?", reponse: "ta voix", indice: "C'est une capacité physique." },
      { question: "Plus tu me retires, plus je grandis. Qui suis-je ?", reponse: "un trou", indice: "Je suis une absence de matière." },
      { question: "Je suis toujours là mais invisible. Je ne pèse rien mais si tu m'enlèves, les gens meurent. Qui suis-je ?", reponse: "l'oxygène", indice: "Je suis un gaz vital." },
      { question: "Qu'est-ce qui appartient à chacun mais que les autres utilisent plus que toi ?", reponse: "ton prénom", indice: "Les autres t'appellent par moi." },
      { question: "Je suis faite de millions de lettres mais contient un seul mot. Qui suis-je ?", reponse: "la poste", indice: "Je transporte du courrier." },
      { question: "Devant moi se trouve hier, derrière moi se trouve demain. Qui suis-je ?", reponse: "un dictionnaire", indice: "Je range les mots en ordre." },
      { question: "On m'a fait sans que je le sache, on m'utilise sans me voir, on me veut quand on ne m'a plus. Qui suis-je ?", reponse: "le sommeil", indice: "Je viens chaque nuit." },
      { question: "Je suis plus grand la nuit que le jour. Qui suis-je ?", reponse: "la lune", indice: "Je brille dans le ciel nocturne." },
      { question: "Un homme tombe d'un gratte-ciel de 50 étages et survit. Comment ?", reponse: "il est tombé du rez-de-chaussée", indice: "Relisez l'énoncé." },
      { question: "Je suis partout dans l'univers mais n'occupe aucun espace. Qui suis-je ?", reponse: "le temps", indice: "Je s'écoule sans cesse." },
      { question: "Qu'est-ce qu'un aveugle voit, qu'un sourd entend, qu'un muet dit et que les morts mangent ?", reponse: "rien", indice: "C'est l'absence de tout." }
    ]
  },

  /* 
  
  CHARADES
  
  */
  
  charade: {

    facile: [
      { question: "Mon premier est un métal précieux.\nMon second est ce que fait un bébé la nuit.\nMon tout est un animal marin.\nQui suis-je ?", reponse: "orseille", indice: "Mon premier : OR. Mon second : crie → non. Pensez : OR + SEILLE." },
      { question: "Mon premier est la boisson du matin.\nMon second est le contraire de la nuit.\nMon tout illumine la maison.\nQui suis-je ?", reponse: "café au lait", indice: "Mon premier : café. Mon second : jour → non. Pensez lumière." },
      { question: "Mon premier est ce qu'on dit pour dire oui en anglais.\nMon second est un grand félin.\nMon tout est un sport d'équipe.\nQui suis-je ?", reponse: "yes + puma = basket", indice: "Cherchez un sport avec un animal." },
      { question: "Mon premier est une note de musique.\nMon second est ce que portent les chevaliers.\nMon tout est un mammifère.\nQui suis-je ?", reponse: "rémora", indice: "RÉ + armure. Pensez à un poisson." },
      { question: "Mon premier est le contraire du froid.\nMon second est un article masculin.\nMon tout est un animal de la ferme.\nQui suis-je ?", reponse: "chaud + le = chameau", indice: "CHAUD + LE = ?" },
      { question: "Mon premier permet d'ouvrir une porte.\nMon second est une conjonction de coordination.\nMon tout est un fruit exotique.\nQui suis-je ?", reponse: "clé + mandarine", indice: "CLÉ + ... = fruit." },
      { question: "Mon premier est la troisième note de musique.\nMon second est ce que l'on respire.\nMon tout est un grand mammifère d'Afrique.\nQui suis-je ?", reponse: "mi + air = miaire... éléphant", indice: "Pensez à un animal avec une trompe." },
      { question: "Mon premier est un pronom personnel.\nMon second est une boisson chaude.\nMon tout est un animal qui saute.\nQui suis-je ?", reponse: "la + pin = lapin", indice: "LA + PIN = ?" },
      { question: "Mon premier est le son d'une vache.\nMon second est ce que fait la mer.\nMon tout est un pays d'Europe.\nQui suis-je ?", reponse: "meuh + flot = meuflo... Monaco", indice: "Petit pays méditerranéen." },
      { question: "Mon premier est une lettre de l'alphabet.\nMon second est ce qu'on dit à Noël.\nMon tout est une partie du corps.\nQui suis-je ?", reponse: "genou", indice: "G + E + NOU = ?" },
      { question: "Mon premier est un article féminin.\nMon second est une couleur.\nMon tout est un outil de jardin.\nQui suis-je ?", reponse: "la + bêche = labêche... la bêche", indice: "LA + BÊCHE." },
      { question: "Mon premier est le cri du chat.\nMon second est une note de musique.\nMon tout est un légume.\nQui suis-je ?", reponse: "miaou + si = miaouzi... maïs", indice: "Céréale jaune." },
      { question: "Mon premier se boit chaud le soir.\nMon second est la fin d'un livre.\nMon tout est un animal nocturne.\nQui suis-je ?", reponse: "thé + page = chauve-souris... chouette", indice: "Oiseau nocturne." },
      { question: "Mon premier est ce que disent les abeilles.\nMon second est un sport nautique.\nMon tout est une fleur.\nQui suis-je ?", reponse: "bzzz + surf = tournesol", indice: "Elle se tourne vers le soleil." },
      { question: "Mon premier est un instrument de musique.\nMon second est une préposition.\nMon tout est une saison.\nQui suis-je ?", reponse: "été", indice: "ÉTÉ : la plus chaude des saisons." },
      { question: "Mon premier est ce qu'on voit la nuit.\nMon second est un mammifère marin.\nMon tout est un pays.\nQui suis-je ?", reponse: "étoile + on = Étoilon... non. Pensez : lune + baleine", indice: "Un grand pays d'Amérique du Nord." },
      { question: "Mon premier est le contraire de petit.\nMon second est un article partitif.\nMon tout est un fruit rouge.\nQui suis-je ?", reponse: "grand + de = grenade", indice: "GRAND + DE." },
      { question: "Mon premier est un nombre pair.\nMon second est ce qu'on porte sur la tête.\nMon tout est un animal sauvage.\nQui suis-je ?", reponse: "deux + chapeau = douchapeau... dauphin", indice: "Animal intelligent de la mer." },
      { question: "Mon premier est une planète.\nMon second est une préposition de lieu.\nMon tout est un mot qui exprime la joie.\nQui suis-je ?", reponse: "mars + sur = mercure... bravo", indice: "Exclamation de félicitation." },
      { question: "Mon premier est ce qu'on allume le soir.\nMon second est un pronom réfléchi.\nMon tout est un animal jaune et noir.\nQui suis-je ?", reponse: "lampe + se = abeille", indice: "Elle fait du miel." }
    ],

    moyen: [
      { question: "Mon premier est une boisson fermentée.\nMon second est un pronom démonstratif.\nMon troisième est une note de musique.\nMon tout est une ville d'Afrique.\nQui suis-je ?", reponse: "bière + ce + ré = Abidjan... Libreville", indice: "Capitale du Gabon." },
      { question: "Mon premier est synonyme de fatigue.\nMon second est ce que font les oiseaux.\nMon tout est un pays asiatique.\nQui suis-je ?", reponse: "las + os = Laos", indice: "LAS + OS." },
      { question: "Mon premier est un organe vital.\nMon second est ce qu'on boit à la récréation.\nMon tout est un continent.\nQui suis-je ?", reponse: "cœur + eau = Corée... non. Pensez Asie.", indice: "Le plus grand continent du monde." },
      { question: "Mon premier est le bruit du tonnerre.\nMon second est un animal domestique.\nMon tout est une invention moderne.\nQui suis-je ?", reponse: "boom + chat = ordinateur... radio", indice: "Elle diffuse de la musique." },
      { question: "Mon premier est le contraire de guerre.\nMon second est ce qu'on met dans une enveloppe.\nMon tout est une profession.\nQui suis-je ?", reponse: "paix + lettre = peintre", indice: "PAIX + ... = artiste." },
      { question: "Mon premier est une saison froide.\nMon second est un verbe d'action courant.\nMon tout est un pays d'Europe.\nQui suis-je ?", reponse: "hiver + aller = Irlande... non. Pense HIVER + ...", indice: "HIVER + ... = pays nordique." },
      { question: "Mon premier est le bruit des vagues.\nMon second est une préposition.\nMon troisième est un animal rampant.\nMon tout est une profession créative.\nQui suis-je ?", reponse: "vague + de + serpent = dessinateur", indice: "Artiste qui trace des images." },
      { question: "Mon premier est l'opposé de l'entrée.\nMon second est un fruit d'été.\nMon tout est une matière scolaire.\nQui suis-je ?", reponse: "sortie + pêche = géographie... sciences", indice: "Matière sur la vie." },
      { question: "Mon premier est un métal rouillé.\nMon second est ce qu'on fait avec les yeux.\nMon tout est une profession de santé.\nQui suis-je ?", reponse: "fer + voir = infirmier", indice: "FER + VOIR." },
      { question: "Mon premier est une planète rouge.\nMon second est ce qu'on dit avant de dormir.\nMon tout est un sport olympique.\nQui suis-je ?", reponse: "mars + bonne nuit = marathon", indice: "Course de 42 km." },
      { question: "Mon premier est le roi des animaux.\nMon second est une préposition.\nMon tout est une grande ville française.\nQui suis-je ?", reponse: "lion + s = Lyon", indice: "LION sans le N + S." },
      { question: "Mon premier est une céréale.\nMon second est un article féminin pluriel.\nMon tout est un pays d'Amérique latine.\nQui suis-je ?", reponse: "blé + les = Brésil", indice: "BLÉ + ... = grand pays." },
      { question: "Mon premier est le son des cloches.\nMon second est ce qu'on met sur une pizza.\nMon tout est une invention révolutionnaire.\nQui suis-je ?", reponse: "ding + from + age = téléphone", indice: "Objet de communication." },
      { question: "Mon premier est un verbe synonyme d'aimer.\nMon second est un animal à carapace.\nMon tout est une matière scolaire.\nQui suis-je ?", reponse: "chérir + tortue = chimie", indice: "Science des molécules." },
      { question: "Mon premier est le bruit d'une gifle.\nMon second est une céréale sucrée.\nMon tout est un pays d'Europe.\nQui suis-je ?", reponse: "claque + miel = Allemagne", indice: "ALL + LEMAGNE." },
      { question: "Mon premier est ce qu'on fait avec les pieds.\nMon second est une note aiguë.\nMon tout est un moyen de transport.\nQui suis-je ?", reponse: "marcher + si = moto + cycle = motocyclette", indice: "Deux roues motorisées." },
      { question: "Mon premier est une boisson gazéifiée.\nMon second est le cri d'un âne.\nMon tout est une profession.\nQui suis-je ?", reponse: "soda + hi-han = savant... chirurgien", indice: "Médecin spécialisé." },
      { question: "Mon premier est le contraire de silence.\nMon second est une lettre.\nMon tout est une profession de la mer.\nQui suis-je ?", reponse: "bruit + eau = marin... bru + i + t = fruit... marin", indice: "Il navigue sur les océans." },
      { question: "Mon premier est un vêtement d'hiver.\nMon second est une préposition.\nMon tout est un pays d'Afrique.\nQui suis-je ?", reponse: "manteau + go = Togo... man + go = Mango? non", indice: "MANTEAU + ... = pays d'Afrique de l'Ouest." },
      { question: "Mon premier est ce qu'on fait au soleil.\nMon second est un petit animal doux.\nMon tout est une invention du 20e siècle.\nQui suis-je ?", reponse: "bronzer + lapin = ordinateur... avion", indice: "Il vole dans les airs." }
    ],

    difficile: [
      { question: "Mon premier est l'article défini féminin.\nMon second est un métal précieux.\nMon troisième est une note de musique grave.\nMon tout est un continent.\nQui suis-je ?", reponse: "la + or + ré = l'Amérique... Afrique non... l'Europe? l'Asie?", indice: "LA + OR + ... = continent." },
      { question: "Mon premier est ce qu'on voit quand il pleut et qu'il fait soleil.\nMon second est ce que font les lapins.\nMon tout est un phénomène astronomique.\nQui suis-je ?", reponse: "arc-en-ciel + bondir = éclipse... arc + bond = arcbond... non. Pense ÉCLIPSE", indice: "ARC + ... = phénomène astronomique." },
      { question: "Mon premier est le contraire de l'amour.\nMon second est un instrument à cordes.\nMon troisième est une préposition.\nMon tout est un scientifique célèbre.\nQui suis-je ?", reponse: "haine + luth + on = Newton... non. Pense Newton", indice: "Il a découvert la gravité." },
      { question: "Mon premier est ce que fait un bébé.\nMon second est un reptile dangereux.\nMon troisième est le bruit d'un moteur.\nMon tout est une capitale africaine.\nQui suis-je ?", reponse: "pleure + cobra + vroom = Libreville... Yaoundé", indice: "Capitale du Cameroun." },
      { question: "Mon premier est une fleur jaune.\nMon second est un sport de glisse.\nMon tout est un phénomène météo.\nQui suis-je ?", reponse: "soleil + ski = solstice", indice: "SOL + STICE." },
      { question: "Mon premier est ce qu'on dit à la fin d'une prière.\nMon second est un verbe d'existence.\nMon tout est un élément chimique.\nQui suis-je ?", reponse: "amen + être = amètre? non... AMEN + ... = élément.", indice: "Gaz rare du tableau périodique." },
      { question: "Mon premier est le premier mois de l'année.\nMon second est un grand singe.\nMon tout est une maladie connue.\nQui suis-je ?", reponse: "janvier + orang = malaria... non. Jan + orang = janorang...", indice: "Jan + vier = janvier... pensez ANGINE." },
      { question: "Mon premier est une lettre grecque.\nMon second est un verbe d'action.\nMon tout est une discipline sportive.\nQui suis-je ?", reponse: "alpha + nager = alpinage... alpinisme", indice: "Sport de montagne." },
      { question: "Mon premier est un outil de coupe.\nMon second est ce que fait une étoile.\nMon tout est un instrument de mesure.\nQui suis-je ?", reponse: "scie + brille = baromètre... thermomètre", indice: "Il mesure la température." },
      { question: "Mon premier est synonyme de bravo.\nMon second est un volatile de basse-cour.\nMon tout est une région française célèbre.\nQui suis-je ?", reponse: "vivat + coq = Avignon... non. Pensez BORDEAUX", indice: "Ville du vin en France." },
      { question: "Mon premier est un organe de la vision.\nMon second est une préposition.\nMon troisième est une boisson du soir.\nMon tout est un personnage historique.\nQui suis-je ?", reponse: "œil + de + thé = Napoléon... non. Pense CEL + ... = célèbre général.", indice: "Conquérant français né en Corse." },
      { question: "Mon premier est ce qui pousse sur la tête.\nMon second est un synonyme de route.\nMon tout est un écrivain français célèbre.\nQui suis-je ?", reponse: "cheveu + voie = Beauvoir... Chemin... Hugo", indice: "Auteur des Misérables." },
      { question: "Mon premier est un instrument à vent.\nMon second est la planète bleue.\nMon tout est un phénomène physique.\nQui suis-je ?", reponse: "flûte + terre = fluoration... électricité", indice: "Elle illumine nos maisons." },
      { question: "Mon premier est un terme affectif pour la mère.\nMon second est une petite quantité.\nMon tout est une maladie du sang.\nQui suis-je ?", reponse: "maman + peu = anémie", indice: "MAMAN + PEU = anémie." },
      { question: "Mon premier est le contraire de léger.\nMon second est un mammifère à longues oreilles.\nMon tout est une matière universitaire.\nQui suis-je ?", reponse: "lourd + lapin = droit... chimie... journalisme", indice: "LOURD + ... = discipline juridique." },
      { question: "Mon premier est ce qui tombe du ciel en hiver.\nMon second est un verbe synonyme de courir.\nMon tout est un continent.\nQui suis-je ?", reponse: "neige + aller = Nigéria... non. Pensez : NEIGE + ALLER = ?, Afrique?", indice: "Pays le plus peuplé d'Afrique." },
      { question: "Mon premier est un synonyme de mer.\nMon second est ce que fait une poule.\nMon tout est un pays européen.\nQui suis-je ?", reponse: "océan + pond = Hollande... non. Pensez PONDS + ...", indice: "Pays des tulipes." },
      { question: "Mon premier est un pronom indéfini.\nMon second est un grand oiseau blanc.\nMon tout est un explorateur célèbre.\nQui suis-je ?", reponse: "on + cygne = Christophe Colomb... no. Pense MAG + ELLAN", indice: "Premier à faire le tour du monde." },
      { question: "Mon premier est une boisson à base de lait fermenté.\nMon second est une note de musique.\nMon tout est une montagne célèbre.\nQui suis-je ?", reponse: "kéfir + do = Kilimandjaro", indice: "Plus haute montagne d'Afrique." },
      { question: "Mon premier est un verbe qui signifie tomber.\nMon second est une planète gazeuse.\nMon tout est un philosophe grec.\nQui suis-je ?", reponse: "chuter + Saturne = Aristote... Socrate... Platon", indice: "Fondateur de l'Académie à Athènes." }
    ]
  },

  /* 
  
  ÉNIGMES
  
  */
  
  enigme: {

    facile: [
      { question: "Un fermier a 17 moutons. Tous sauf 9 meurent. Combien en reste-t-il ?", reponse: "9", indice: "Relisez : 'tous SAUF 9'." },
      { question: "Si tu me nommes, je disparais. Qui suis-je ?", reponse: "le silence", indice: "Dès qu'on parle, je cesse." },
      { question: "Qu'est-ce qui a 4 pattes le matin, 2 le midi et 3 le soir ?", reponse: "l'homme", indice: "C'est l'énigme du Sphinx." },
      { question: "Je suis une maison avec 2 occupants, ni portes ni fenêtres. Pour entrer, il faut casser les murs. Qui suis-je ?", reponse: "un œuf", indice: "Je contiens un poussin." },
      { question: "Un homme conduit une voiture noire. Ses phares sont éteints, la lune ne brille pas. Une femme en noir traverse. Il la voit. Comment ?", reponse: "c'est le jour", indice: "La nuit n'est pas mentionnée." },
      { question: "Combien de mois de l'année ont 28 jours ?", reponse: "12", indice: "Tous les mois ont au moins 28 jours." },
      { question: "Un avion s'écrase à la frontière entre la France et l'Espagne. Où enterre-t-on les survivants ?", reponse: "on n'enterre pas les survivants", indice: "Lisez le mot 'survivants'." },
      { question: "Si 5 chats attrapent 5 souris en 5 minutes, combien faut-il de chats pour attraper 100 souris en 100 minutes ?", reponse: "5", indice: "Le ratio reste le même." },
      { question: "Tu es dans une pièce sombre avec une bougie, une lampe et du feu de bois. Tu as une seule allumette. Qu'allumes-tu en premier ?", reponse: "l'allumette", indice: "Qu'est-ce qu'on utilise pour allumer ?" },
      { question: "Un coq est assis sur le toit d'une maison. Il pond un œuf. De quel côté tombe-t-il ?", reponse: "les coqs ne pondent pas", indice: "C'est une question sur la biologie." },
      { question: "Je suis devant toi mais ne peut être vu. Derrière toi mais ne peut être touché. Qui suis-je ?", reponse: "le futur et le passé", indice: "Pensez au temps." },
      { question: "Paul a deux pièces valant 30 centimes en tout. L'une n'est pas une pièce de 20 centimes. Quelles sont les pièces ?", reponse: "une pièce de 20 et une de 10", indice: "L'UNE n'est pas de 20, mais l'autre peut l'être." },
      { question: "Si tu as un bol avec 6 pommes et que tu en retires 4, combien en as-tu ?", reponse: "4", indice: "Celles que tu as retirées." },
      { question: "Un électricien et son fils ont un accident. Le père meurt. À l'hôpital, le chirurgien dit : 'Je ne peux pas opérer, c'est mon fils.' Comment est-ce possible ?", reponse: "le chirurgien est la mère", indice: "Un chirurgien peut être une femme." },
      { question: "Qu'est-ce qu'on voit une fois dans une minute, deux fois dans un moment et jamais dans mille ans ?", reponse: "la lettre M", indice: "Cherchez dans les mots." },
      { question: "Je peux tomber du ciel sans me blesser mais je meurs dans l'eau. Qui suis-je ?", reponse: "le feu... une feuille", indice: "Je suis léger et fragile." },
      { question: "Deux mères et deux filles mangent 3 oranges et chacune en mange une entière. Comment ?", reponse: "elles sont trois : grand-mère, mère et fille", indice: "Comptez les générations." },
      { question: "Un homme marche sous la pluie sans imperméable ni parapluie. Il ne se mouille pas. Pourquoi ?", reponse: "il ne pleut pas sur lui ou il est chauve... il est dans un bâtiment", indice: "Il ne pleut peut-être pas là où il marche." },
      { question: "Qu'est-ce que plus on en a, moins on en voit ?", reponse: "l'obscurité", indice: "La lumière la chasse." },
      { question: "Un homme vit au 30e étage. Chaque matin, il prend l'ascenseur jusqu'au rez-de-chaussée. Le soir, il monte jusqu'au 15e et fait le reste à pied. Pourquoi ?", reponse: "il est trop petit pour atteindre le bouton 30", indice: "C'est une question de taille." }
    ],

    moyen: [
      { question: "Je suis un nombre. Si tu me multiplies par n'importe quel nombre, le résultat est toujours le même. Qui suis-je ?", reponse: "zéro", indice: "N × ? = N." },
      { question: "Dans une famille, il y a autant de frères que de sœurs. Mais chaque sœur a deux fois plus de frères que de sœurs. Combien y a-t-il de frères et de sœurs ?", reponse: "3 frères et 3 sœurs... non : 4 frères et 3 sœurs", indice: "Posez l'équation : frères = sœurs et frères = 2×(sœurs-1)." },
      { question: "Un homme est condamné à mort. On lui propose 3 salles. La première est remplie de flammes. La deuxième de lions affamés. La troisième de tueurs armés. Laquelle choisit-il ?", reponse: "les lions affamés : ils sont morts de faim depuis longtemps", indice: "Affamés depuis quand ?" },
      { question: "Un train part de Paris à 100 km/h. Un autre part de Lyon à 80 km/h. La distance est de 450 km. À quelle distance de Paris se rencontrent-ils ?", reponse: "à 250 km de Paris", indice: "100/(100+80) × 450." },
      { question: "Je suis un mot de 5 lettres. Retirez une lettre et j'en ai 6. Qui suis-je ?", reponse: "dizaine... douzaine... sixaine... DOUZE", indice: "Retirez une lettre du mot 'sixaine'... Pensez : DOZEN." },
      { question: "Si vous me jetez dans l'océan, je secouerai les eaux et provoquerai des vagues. Mais si on me jette dans une maison, j'y serai invisible. Qui suis-je ?", reponse: "un caillou... le bruit", indice: "Je suis petit mais impactant." },
      { question: "Un homme entre dans un restaurant et commande des ailes de cygne. Il mange, puis rentre chez lui et se suicide. Pourquoi ?", reponse: "sa femme avait été perdue en mer et il craignait qu'on l'ait mangée pour survivre", indice: "Pensez à une histoire de naufrage." },
      { question: "Quelle est la prochaine lettre dans cette suite : O, T, T, F, F, S, S, E, N, ...?", reponse: "T", indice: "One, Two, Three... cherchez les initiales." },
      { question: "Je suis toujours en mouvement mais n'ai jamais bougé. Je peux être franchi mais pas traversé. Qui suis-je ?", reponse: "l'horizon", indice: "Je suis la ligne entre ciel et terre." },
      { question: "Un homme construit une maison avec 4 côtés. Chaque côté a une vue plein sud. Un ours passe. De quelle couleur est-il ?", reponse: "blanc", indice: "Ours au pôle Nord = ours polaire." },
      { question: "Combien de fois peut-on soustraire 5 de 25 ?", reponse: "une fois", indice: "Après la première, ce n'est plus 25." },
      { question: "Un prisonnier est dans une cellule avec deux portes. Une mène à la liberté, l'autre à la mort. Deux gardiens gardent les portes : l'un dit toujours la vérité, l'autre ment toujours. Quelle question poser à UN gardien ?", reponse: "si je demandais à l'autre gardien quelle porte mène à la liberté, que dirait-il ? Puis prendre l'autre porte.", indice: "La question doit neutraliser le mensonge." },
      { question: "Je suis un nombre à 3 chiffres. Mon premier chiffre est le double du troisième. Le deuxième est la somme des deux autres. Qui suis-je ?", reponse: "264", indice: "2×4=8? Non. Posez : a=2c, b=a+c." },
      { question: "Vous êtes dans une course et dépassez la personne en 2e place. À quelle place êtes-vous ?", reponse: "2e place", indice: "Vous prenez SA place." },
      { question: "Un père a 30 ans de plus que son fils. Dans 5 ans, il aura le double de l'âge de son fils. Quel âge a le fils aujourd'hui ?", reponse: "25 ans", indice: "Père = Fils + 30. Dans 5 ans : Père+5 = 2×(Fils+5)." },
      { question: "Quel est le mot français qui contient toutes les voyelles (a, e, i, o, u) dans l'ordre ?", reponse: "oiseau", indice: "Un animal qui vole." },
      { question: "Je pèse la même chose pleine ou vide. Qui suis-je ?", reponse: "un trou", indice: "Je n'ai pas de masse." },
      { question: "Un homme entre dans une pièce noire avec une bougie non allumée, une lampe à huile et un feu de bois. Il n'a qu'une seule allumette. Qu'allume-t-il en premier ?", reponse: "l'allumette", indice: "Logiquement, quoi en premier ?" },
      { question: "Si une horloge indique 3h15, quel est l'angle entre les deux aiguilles ?", reponse: "7,5 degrés", indice: "À 3h, la grande aiguille est au 3. À 3h15, elle est exactement sur 3, mais la petite a avancé." },
      { question: "Qu'est-ce qu'on met dans un tonneau pour le rendre plus léger ?", reponse: "un trou", indice: "Pas une substance : une absence." }
    ],

    difficile: [
      { question: "Dans un village, le barbier rase tous ceux qui ne se rasent pas eux-mêmes. Qui rase le barbier ?", reponse: "personne, c'est le paradoxe du barbier de Russell", indice: "C'est un paradoxe logique célèbre." },
      { question: "Si une tortue double sa vitesse chaque seconde et qu'Achille court 10× plus vite qu'elle au départ, Achille rattrapera-t-il jamais la tortue si elle a une avance ?", reponse: "oui, il la rattrape, mais le paradoxe de Zénon suggère que non mathématiquement", indice: "Paradoxe de Zénon d'Élée." },
      { question: "Un homme regarde une photo et dit : 'Je n'ai ni frère ni sœur, mais le père de cet homme est le fils de mon père.' Qui est l'homme sur la photo ?", reponse: "son fils", indice: "Décomposez les liens familiaux." },
      { question: "Je suis un nombre. La somme de mes chiffres est 11. Je suis divisible par 11. Mon chiffre des centaines est 3 fois celui des unités. Qui suis-je ?", reponse: "374", indice: "3+7+4=14? Non. Cherchez : a=3c, a+b+c=11, abc divisible par 11." },
      { question: "Quelle est la probabilité que dans un groupe de 23 personnes, deux aient le même anniversaire ?", reponse: "plus de 50%", indice: "C'est le paradoxe des anniversaires." },
      { question: "Une grenouille est au fond d'un puits de 10 mètres. Chaque jour elle monte 3 mètres et chaque nuit redescend 2 mètres. Combien de jours pour sortir ?", reponse: "8 jours", indice: "Au jour 7 soir elle est à 7m. Au jour 8 elle monte à 10m." },
      { question: "Si tous les Bloops sont Razzies et tous les Razzies sont Lazzies, tous les Bloops sont-ils des Lazzies ?", reponse: "oui", indice: "Syllogisme logique : A⊂B, B⊂C → A⊂C." },
      { question: "Un avion tombe à mi-chemin entre la France et l'Angleterre. Dans quel pays enterre-t-on les victimes ?", reponse: "on n'enterre pas les victimes mais les morts", indice: "L'énoncé dit 'victimes', pas 'morts'." },
      { question: "Combien de fois la lettre F apparaît-elle dans la phrase : 'FINISHED FILES ARE THE RESULT OF YEARS OF SCIENTIFIC STUDY COMBINED WITH THE EXPERIENCE OF YEARS' ?", reponse: "6", indice: "On oublie souvent de compter les 'OF'." },
      { question: "Un homme dit : 'Cette phrase est fausse.' Est-elle vraie ou fausse ?", reponse: "c'est le paradoxe du menteur, elle est indécidable", indice: "Si elle est vraie, elle est fausse. Si elle est fausse, elle est vraie." },
      { question: "Si tu as une bouteille contenant moitié vin, moitié eau, tu transvases une cuillère de vin dans l'eau, puis une cuillère du mélange dans le vin. Y a-t-il plus d'eau dans le vin ou de vin dans l'eau ?", reponse: "les proportions sont égales", indice: "La quantité totale ne change pas." },
      { question: "Un mathématicien dit : 'J'ai deux enfants. L'un est né un mardi. Quelle est la probabilité que les deux soient des garçons ?' (sachant qu'au moins l'un est un garçon né un mardi)", reponse: "13/27", indice: "Paradoxe des probabilités conditionnelles." },
      { question: "Si tu retournes un cube et regardes par le trou en bas, combien de faces vois-tu ?", reponse: "1", indice: "Celle qui est en face de toi." },
      { question: "Dans quel ordre doit-on placer les chiffres 1 à 8 dans un cercle pour que deux chiffres adjacents ne soient ni consécutifs ni symétriques ?", reponse: "1,3,5,7,2,4,6,8", indice: "Alternez pairs et impairs." },
      { question: "Un train entre dans un tunnel à 60 km/h. La longueur du train est de 200 m et le tunnel de 800 m. Combien de temps faut-il pour que le train traverse entièrement le tunnel ?", reponse: "60 secondes", indice: "Distance totale = 200+800 = 1000m. V=60km/h=16,67m/s." },
      { question: "Si p implique q, et que q est faux, que peut-on conclure sur p ?", reponse: "p est faux (modus tollens)", indice: "Raisonnement logique : contraposée." },
      { question: "Quelle est la prochaine suite : 1, 11, 21, 1211, 111221, ?", reponse: "312211", indice: "Lisez chaque ligne à voix haute : 'un 1, deux 1, un 2 un 1...'" },
      { question: "Si tu as 3 boîtes, l'une contient deux balles rouges, l'autre deux bleues, la troisième une de chaque. Les étiquettes sont toutes fausses. Tu tires une balle de la boîte étiquetée 'mixte'. Comment identifier toutes les boîtes ?", reponse: "si tu tires une rouge, cette boîte est rouge-rouge. L'autre rouge est mixte. La bleue est bleue-bleue.", indice: "L'étiquette est fausse, donc la boîte 'mixte' est soit rouge-rouge soit bleue-bleue." },
      { question: "Dans une ville, 70% des gens ont une voiture, 75% un téléphone, 85% une TV, 90% un ordinateur. Quel est le pourcentage minimum de personnes possédant les 4 ?", reponse: "20%", indice: "100 - (30+25+15+10) = 20%." },
      { question: "Je suis la seule chose qui, plus on en donne, plus on en a. Qui suis-je ?", reponse: "l'amour", indice: "Un sentiment humain." }
    ]
  }
};

if (typeof module !== 'undefined') module.exports = { QUESTIONS };
