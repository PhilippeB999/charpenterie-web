/* ============================================================
   CharpenterieQuest — Donnees du programme DEP 5319 (Charpenterie-menuiserie)
   Contenu converti depuis la PWA source "Chantier Revision" (reviser-charpenterie-5319.html)
   vers le moteur web partage (format identique a SoudageQuest).
   Format moteur: COMPETENCIES[].tiers[].questions[] avec choices[{fr,en,correct}].
   Les questions QCM et vrai/faux sont des EXEMPLES a valider par les enseignants du programme.

   NOTES DE CONVERSION (a valider par l'enseignant) :
   - Les 3 "tableaux" de la source (Fondations / Intermediaire / Avance) sont devenus
     les 3 PALIERS de chaque competence (Debutant / Intermediaire / Avance).
   - Les 10 CATEGORIES thematiques de la source sont devenues les 10 COMPETENCES (quetes).
     Ce sont des REGROUPEMENTS THEMATIQUES, pas les modules officiels du ministere.
   - "code" est laisse VIDE (codes officiels des competences non integres).
   - "hours" sont des ESTIMATIONS illustratives, pas les heures officielles du programme.
   - Contenu BILINGUE FR/EN present dans la source, conserve integralement.
   ============================================================ */

const PROGRAM = {
  fr: { title: "Charpenterie-menuiserie", subtitle: "DEP 5319 — 1350 heures — 90 unites (a valider)" },
  en: { title: "Carpentry", subtitle: "DVS 5319 — 1350 hours — 90 credits (to validate)" }
};

function ch(fr, en, correct) { return { fr, en, correct: !!correct }; }

/* Question de type vrai/faux: affirmation a juger. */
function tf(fr, en, isTrue) { return { type: "tf", fr, en, isTrue: !!isTrue }; }

/* Question de type "association de termes" (non utilisee ici, presente pour compatibilite moteur). */
function pair(term_fr, term_en, def_fr, def_en) { return { term_fr, term_en, def_fr, def_en }; }
function match(fr, en, pairs) { return { type: "match", fr, en, pairs }; }

/* Question de type "situation complexe" (non utilisee ici, presente pour compatibilite moteur). */
function scenario(fr, en, choices) { return { type: "scenario", fr, en, choices }; }

/* Paliers de difficulte d'une quete (Debutant -> Intermediaire -> Avance). */
const TIER_META = [
  { level: 1, name_fr: "Debutant", name_en: "Beginner", icon: "🌱" },
  { level: 2, name_fr: "Intermediaire", name_en: "Intermediate", icon: "⚙️" },
  { level: 3, name_fr: "Avance", name_en: "Advanced", icon: "🏆" }
];

/* Chaque competence = une "quete". order = ordre de deblocage. */
const COMPETENCIES = [
 {
  "id": "charp01",
  "order": 1,
  "code": "",
  "hours": 30,
  "title_fr": "Santé et sécurité",
  "title_en": "Health & Safety",
  "icon": "🦺",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Que signifie l'acronyme SIMDUT ?",
      "en": "What does the acronym WHMIS stand for?",
      "choices": [
       {
        "fr": "Système d'information sur les matières dangereuses utilisées au travail",
        "en": "Workplace Hazardous Materials Information System",
        "correct": true
       },
       {
        "fr": "Système intégré de mesures et d'unités de travail",
        "en": "Work Health and Material Inspection Standard",
        "correct": false
       },
       {
        "fr": "Service d'inspection et de manutention utilitaire du travail",
        "en": "Worker Handling and Material Instruction Service",
        "correct": false
       },
       {
        "fr": "Système d'identification des matériaux utilisés en toiture",
        "en": "Weather Hazard and Material Impact Scale",
        "correct": false
       }
      ],
      "explFr": "Le SIMDUT informe les travailleurs sur les dangers des produits utilisés au travail.",
      "explEn": "WHMIS informs workers about hazards of products used at work."
     },
     {
      "type": "tf",
      "fr": "Le port du harnais de protection contre les chutes est généralement obligatoire au-delà de 3 mètres, en l'absence de garde-corps.",
      "en": "A fall-protection harness is generally required above 3 meters when no guardrail is present.",
      "isTrue": true,
      "explFr": "Au Québec, la protection contre les chutes est généralement exigée au-delà de 3 mètres.",
      "explEn": "In Quebec, fall protection is generally required beyond 3 meters."
     },
     {
      "fr": "Quel équipement de protection individuelle est essentiel avec une scie circulaire ?",
      "en": "Which piece of personal protective equipment is essential when using a circular saw?",
      "choices": [
       {
        "fr": "Lunettes de sécurité",
        "en": "Safety glasses",
        "correct": true
       },
       {
        "fr": "Gants de travail épais",
        "en": "Heavy work gloves",
        "correct": false
       },
       {
        "fr": "Un tablier de plastique",
        "en": "A plastic apron",
        "correct": false
       },
       {
        "fr": "Des protecteurs auditifs uniquement",
        "en": "Hearing protection only",
        "correct": false
       }
      ],
      "explFr": "Les lunettes protègent les yeux des copeaux et débris projetés.",
      "explEn": "Glasses protect the eyes from flying chips and debris."
     },
     {
      "fr": "Que doit-on vérifier avant d'utiliser une échelle sur un chantier ?",
      "en": "What should you check before using a ladder on a job site?",
      "choices": [
       {
        "fr": "Son état général et la stabilité de sa base sur une surface de niveau",
        "en": "Its overall condition and that its base is stable on level ground",
        "correct": true
       },
       {
        "fr": "Le nom du fabricant inscrit sur l'étiquette",
        "en": "The manufacturer's name printed on the label",
        "correct": false
       },
       {
        "fr": "La distance entre chaque échelon",
        "en": "The distance between each rung",
        "correct": false
       },
       {
        "fr": "Le poids maximal inscrit sur la boîte d'origine",
        "en": "The maximum weight printed on the original box",
        "correct": false
       }
      ],
      "explFr": "Une échelle endommagée ou instable est une cause fréquente de chute.",
      "explEn": "A damaged or unstable ladder is a frequent cause of falls."
     },
     {
      "fr": "Quel est le rôle principal du garde-corps sur un chantier en hauteur ?",
      "en": "What is the main role of a guardrail at height on a job site?",
      "choices": [
       {
        "fr": "Prévenir les chutes de personnes et d'objets",
        "en": "Prevent falls of people and objects",
        "correct": true
       },
       {
        "fr": "Marquer les limites du chantier pour les visiteurs",
        "en": "Mark the site boundaries for visitors",
        "correct": false
       },
       {
        "fr": "Servir de support pour les affiches de sécurité",
        "en": "Serve as a support for safety signage",
        "correct": false
       },
       {
        "fr": "Faciliter le transport des matériaux en hauteur",
        "en": "Make it easier to transport materials at height",
        "correct": false
       }
      ],
      "explFr": "Le garde-corps est une mesure de protection collective contre les chutes.",
      "explEn": "A guardrail is a collective fall-protection measure."
     },
     {
      "fr": "Tu dois travailler à 4 mètres de hauteur sur une plateforme sans garde-corps. Que dois-tu faire avant de commencer ?",
      "en": "You must work 4 meters up on a platform with no guardrail. What must you do before starting?",
      "choices": [
       {
        "fr": "Porter un harnais relié à un point d'ancrage certifié",
        "en": "Wear a harness connected to a certified anchor point",
        "correct": true
       },
       {
        "fr": "Installer un ruban de signalisation autour de la zone",
        "en": "Put up caution tape around the area",
        "correct": false
       },
       {
        "fr": "Travailler plus lentement pour rester prudent",
        "en": "Work more slowly to stay careful",
        "correct": false
       },
       {
        "fr": "Demander à un collègue de rester à proximité",
        "en": "Ask a coworker to stay nearby",
        "correct": false
       }
      ],
      "explFr": "Sans garde-corps, un système de protection contre les chutes relié à un point d'ancrage certifié est requis.",
      "explEn": "Without a guardrail, a fall-protection system connected to a certified anchor point is required."
     },
     {
      "type": "tf",
      "fr": "Un extincteur portatif de type ABC peut être utilisé sur un feu de bois, un feu électrique et un feu de liquide inflammable.",
      "en": "A portable ABC-type fire extinguisher can be used on a wood fire, an electrical fire, and a flammable liquid fire.",
      "isTrue": true,
      "explFr": "L'extincteur ABC est polyvalent et couvre ces trois classes de feu courantes.",
      "explEn": "The ABC extinguisher is versatile and covers these three common fire classes."
     },
     {
      "fr": "Sur cette photo, à quoi servent les mousquetons attachés au harnais du travailleur ?",
      "en": "In this photo, what are the carabiners attached to the worker's harness used for?",
      "choices": [
       {
        "fr": "Relier la personne aux cordes de façon sécuritaire",
        "en": "Safely connecting the person to the ropes",
        "correct": true
       },
       {
        "fr": "Ajuster la tension du casque de protection",
        "en": "Adjusting the tension of the hard hat",
        "correct": false
       },
       {
        "fr": "Fixer les outils à la ceinture de travail",
        "en": "Fastening tools to the work belt",
        "correct": false
       },
       {
        "fr": "Servir de poignée pour grimper plus facilement",
        "en": "Serving as a handhold for climbing more easily",
        "correct": false
       }
      ],
      "explFr": "Les mousquetons permettent de connecter solidement le harnais aux cordes et points d'ancrage.",
      "explEn": "Carabiners securely connect the harness to the ropes and anchor points."
     },
     {
      "type": "tf",
      "fr": "Sur cette photo, le travailleur porte un casque de protection.",
      "en": "In this photo, the worker is wearing a hard hat.",
      "isTrue": true,
      "explFr": "Un casque (rose/rouge) est bien visible sur la tête du travailleur suspendu.",
      "explEn": "A helmet (pink/red) is clearly visible on the suspended worker's head."
     },
     {
      "fr": "Que signifie le « cadenassage » (lockout/tagout) d'un équipement ?",
      "en": "What does \"lockout/tagout\" of equipment mean?",
      "choices": [
       {
        "fr": "Isoler et verrouiller une source d'énergie avant un entretien",
        "en": "Isolating and locking out an energy source before maintenance",
        "correct": true
       },
       {
        "fr": "Inspecter visuellement l'équipement chaque matin",
        "en": "Visually inspecting the equipment each morning",
        "correct": false
       },
       {
        "fr": "Enregistrer l'équipement dans un registre d'inventaire",
        "en": "Logging the equipment in an inventory register",
        "correct": false
       },
       {
        "fr": "Fixer une étiquette de garantie sur l'équipement",
        "en": "Attaching a warranty tag to the equipment",
        "correct": false
       }
      ],
      "explFr": "Le cadenassage empêche un démarrage accidentel pendant l'entretien ou la réparation.",
      "explEn": "Lockout/tagout prevents accidental startup during maintenance or repair."
     },
     {
      "fr": "Que doit-on faire, si possible, avant d'utiliser un extincteur sur un feu d'origine électrique ?",
      "en": "What should be done, if possible, before using an extinguisher on an electrical fire?",
      "choices": [
       {
        "fr": "Couper l'alimentation électrique",
        "en": "Cut the power supply",
        "correct": true
       },
       {
        "fr": "Ventiler la pièce en ouvrant les fenêtres",
        "en": "Ventilate the room by opening windows",
        "correct": false
       },
       {
        "fr": "Éloigner les matériaux inflammables voisins",
        "en": "Move nearby flammable materials away",
        "correct": false
       },
       {
        "fr": "Avertir les occupants de l'étage supérieur",
        "en": "Warn occupants on the floor above",
        "correct": false
       }
      ],
      "explFr": "Couper l'alimentation réduit le risque de choc électrique et facilite l'extinction.",
      "explEn": "Cutting the power reduces the risk of electric shock and makes extinguishing easier."
     },
     {
      "fr": "Selon la règle du « 4 pour 1 », comment doit-on positionner la base d'une échelle droite ?",
      "en": "According to the \"4-to-1\" rule, how should the base of a straight ladder be positioned?",
      "choices": [
       {
        "fr": "Un pied d'écart à la base pour chaque 4 pieds de hauteur utilisée",
        "en": "One foot of base offset for every 4 feet of working height",
        "correct": true
       },
       {
        "fr": "Un angle fixe de 4 degrés par rapport au mur",
        "en": "A fixed 4-degree angle relative to the wall",
        "correct": false
       },
       {
        "fr": "Quatre points d'ancrage pour chaque échelle installée",
        "en": "Four anchor points for every ladder installed",
        "correct": false
       },
       {
        "fr": "Une distance de 4 pieds entre l'échelle et la porte la plus proche",
        "en": "A 4-foot distance between the ladder and the nearest door",
        "correct": false
       }
      ],
      "explFr": "Ce ratio assure un angle sécuritaire d'environ 75° pour prévenir le basculement.",
      "explEn": "This ratio ensures a safe angle of about 75° to prevent tipping."
     },
     {
      "fr": "Que signifie un pictogramme SIMDUT en forme de losange rouge avec une flamme ?",
      "en": "What does a WHMIS diamond-shaped red pictogram with a flame indicate?",
      "choices": [
       {
        "fr": "Une matière inflammable",
        "en": "A flammable material",
        "correct": true
       },
       {
        "fr": "Un équipement sous garantie",
        "en": "Equipment under warranty",
        "correct": false
       },
       {
        "fr": "Une zone de chantier réservée",
        "en": "A restricted job site zone",
        "correct": false
       },
       {
        "fr": "Un produit d'origine biologique uniquement",
        "en": "A product of purely biological origin",
        "correct": false
       }
      ],
      "explFr": "Le pictogramme à la flamme signale un risque d'inflammabilité.",
      "explEn": "The flame pictogram signals a flammability hazard."
     },
     {
      "fr": "Dans un espace clos (espace confiné), quel est un danger souvent invisible ?",
      "en": "In a confined space, what is an often-invisible hazard?",
      "choices": [
       {
        "fr": "Une atmosphère dangereuse (manque d'oxygène ou gaz toxiques)",
        "en": "A hazardous atmosphere (lack of oxygen or toxic gases)",
        "correct": true
       },
       {
        "fr": "Un éclairage insuffisant pour lire les instructions",
        "en": "Insufficient lighting to read instructions",
        "correct": false
       },
       {
        "fr": "La présence d'outils mal rangés au sol",
        "en": "Poorly stored tools left on the floor",
        "correct": false
       },
       {
        "fr": "Un espace trop petit pour se retourner",
        "en": "A space too small to turn around in",
        "correct": false
       }
      ],
      "explFr": "L'air d'un espace clos doit être testé, car un danger atmosphérique peut être invisible et inodore.",
      "explEn": "The air in a confined space must be tested, since an atmospheric hazard can be invisible and odorless."
     },
     {
      "fr": "Que doit-on porter pour se protéger de la poussière de silice lors du découpage de béton ou de maçonnerie ?",
      "en": "What should be worn to protect against silica dust when cutting concrete or masonry?",
      "choices": [
       {
        "fr": "Un appareil de protection respiratoire approprié",
        "en": "Appropriate respiratory protection",
        "correct": true
       },
       {
        "fr": "Un tablier résistant à la chaleur",
        "en": "A heat-resistant apron",
        "correct": false
       },
       {
        "fr": "Des bottes à embout d'acier",
        "en": "Steel-toe boots",
        "correct": false
       },
       {
        "fr": "Un dossard réfléchissant",
        "en": "A reflective safety vest",
        "correct": false
       }
      ],
      "explFr": "L'inhalation de poussière de silice cristalline peut causer des maladies pulmonaires graves.",
      "explEn": "Inhaling crystalline silica dust can cause serious lung disease."
     },
     {
      "type": "tf",
      "fr": "Un cadenas de verrouillage (cadenassage) ne devrait être retiré que par la personne qui l'a installé.",
      "en": "A lockout padlock should only be removed by the person who installed it.",
      "isTrue": true,
      "explFr": "Ce principe évite qu'un équipement soit remis en marche pendant que quelqu'un y travaille encore.",
      "explEn": "This principle prevents equipment from being restarted while someone is still working on it."
     },
     {
      "type": "tf",
      "fr": "Il est sécuritaire de travailler seul dans un espace clos sans surveillance ni communication avec l'extérieur.",
      "en": "It is safe to work alone in a confined space without supervision or communication with the outside.",
      "isTrue": false,
      "explFr": "Une personne à l'extérieur doit surveiller et pouvoir intervenir en cas de problème.",
      "explEn": "A person outside must monitor the space and be able to respond if a problem occurs."
     },
     {
      "type": "tf",
      "fr": "Le port de protecteurs auditifs est recommandé lors de l'utilisation prolongée d'outils bruyants comme une scie circulaire.",
      "en": "Hearing protection is recommended during prolonged use of loud tools like a circular saw.",
      "isTrue": true,
      "explFr": "Une exposition prolongée au bruit peut causer des dommages auditifs permanents.",
      "explEn": "Prolonged noise exposure can cause permanent hearing damage."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Tu travailles seul sur un chantier isolé, à 4,5 m de hauteur, avec un harnais relié à un point d'ancrage. Que dois-tu vérifier EN PLUS avant de commencer ?",
      "en": "You're working alone at 4.5 m up on an isolated site, harnessed to an anchor point. What must you ALSO verify before starting?",
      "choices": [
       {
        "fr": "Qu'un mécanisme de vérification périodique (appel ou visite) est en place en cas d'incident",
        "en": "That a periodic check-in mechanism (call or visit) is in place in case of an incident",
        "correct": true
       },
       {
        "fr": "Que le harnais est de la bonne couleur",
        "en": "That the harness is the right color",
        "correct": false
       },
       {
        "fr": "Que personne ne te voit travailler",
        "en": "That no one can see you working",
        "correct": false
       },
       {
        "fr": "Rien, un harnais bien ajusté couvre déjà cette exigence",
        "en": "Nothing, a properly fitted harness already covers this requirement",
        "correct": false
       }
      ],
      "explFr": "Le travail isolé exige un moyen de communication ou de vérification régulière, en plus des mesures de protection contre les chutes.",
      "explEn": "Working alone requires a communication or regular check-in method, in addition to fall-protection measures."
     },
     {
      "type": "tf",
      "fr": "Un extincteur de type ABC ne doit jamais être utilisé sur un feu électrique, car il pourrait causer une électrocution.",
      "en": "A type ABC extinguisher should never be used on an electrical fire because it could cause electrocution.",
      "isTrue": false,
      "explFr": "L'extincteur ABC (poudre polyvalente) est justement conçu pour être utilisé sur les feux électriques, contrairement à l'eau.",
      "explEn": "The ABC extinguisher (multipurpose powder) is precisely designed for electrical fires, unlike water."
     },
     {
      "fr": "Avant d'entrer dans un espace clos (comme une fosse septique ou un réservoir), quelle est la première étape obligatoire ?",
      "en": "Before entering a confined space (like a septic tank or a reservoir), what is the mandatory first step?",
      "choices": [
       {
        "fr": "Obtenir un permis d'entrée et tester l'atmosphère (oxygène, gaz)",
        "en": "Obtain an entry permit and test the atmosphere (oxygen, gases)",
        "correct": true
       },
       {
        "fr": "Entrer rapidement pour limiter le temps d'exposition",
        "en": "Enter quickly to limit exposure time",
        "correct": false
       },
       {
        "fr": "Ouvrir toutes les fenêtres du bâtiment voisin",
        "en": "Open all the windows of the neighboring building",
        "correct": false
       },
       {
        "fr": "Une simple inspection visuelle rapide avant d'entrer",
        "en": "A quick visual inspection before entering",
        "correct": false
       }
      ],
      "explFr": "Un espace clos peut contenir une atmosphère dangereuse invisible ; un permis et un test d'air sont exigés avant l'entrée.",
      "explEn": "A confined space may contain an invisible hazardous atmosphere; a permit and air test are required before entry."
     },
     {
      "fr": "Quelle est la bonne séquence pour cadenasser (LOTO) une machine avant un entretien ?",
      "en": "What is the correct sequence to lock out/tag out (LOTO) a machine before maintenance?",
      "choices": [
       {
        "fr": "Arrêter la machine, couper l'énergie, cadenasser, vérifier l'absence d'énergie résiduelle",
        "en": "Stop the machine, cut the energy source, lock it out, verify no residual energy remains",
        "correct": true
       },
       {
        "fr": "Cadenasser d'abord, puis arrêter la machine",
        "en": "Lock it out first, then stop the machine",
        "correct": false
       },
       {
        "fr": "Couper l'énergie seulement, sans cadenas",
        "en": "Cut the energy only, without a lock",
        "correct": false
       },
       {
        "fr": "Avertir un collègue et commencer l'entretien immédiatement",
        "en": "Warn a coworker and start maintenance immediately",
        "correct": false
       }
      ],
      "explFr": "Le cadenassage suit une séquence stricte pour éliminer tout risque de démarrage ou d'énergie résiduelle.",
      "explEn": "Lockout/tagout follows a strict sequence to eliminate any risk of restart or residual energy."
     },
     {
      "type": "tf",
      "fr": "L'exposition au bruit en milieu de travail est généralement limitée à une moyenne de 85 dB(A) sur un quart de travail de 8 heures.",
      "en": "Workplace noise exposure is generally limited to an average of 85 dB(A) over an 8-hour shift.",
      "isTrue": true,
      "explFr": "Au-delà de cette limite pondérée, des protecteurs auditifs et des mesures de réduction du bruit sont requis.",
      "explEn": "Beyond this weighted limit, hearing protection and noise-reduction measures are required."
     },
     {
      "fr": "Une excavation de plus de 1,2 m de profondeur, où des travailleurs doivent entrer, nécessite généralement :",
      "en": "An excavation deeper than 1.2 m that workers must enter generally requires:",
      "choices": [
       {
        "fr": "Un étançonnement, un talutage ou une autre protection contre les éboulements",
        "en": "Shoring, sloping, or another protection against cave-ins",
        "correct": true
       },
       {
        "fr": "Une couverture de plastique tendue au-dessus de l'excavation",
        "en": "A plastic cover stretched over the excavation",
        "correct": false
       },
       {
        "fr": "Un ruban de signalisation installé autour du périmètre",
        "en": "Caution tape installed around the perimeter",
        "correct": false
       },
       {
        "fr": "Une inspection visuelle effectuée une fois par semaine",
        "en": "A visual inspection performed once a week",
        "correct": false
       }
      ],
      "explFr": "Les excavations profondes exigent une protection contre les éboulements, car le sol peut s'effondrer sans avertissement.",
      "explEn": "Deep excavations require cave-in protection, since soil can collapse without warning."
     },
     {
      "type": "tf",
      "fr": "Sur un échafaudage, une planche de plancher qui dépasse son support de plus de la limite prescrite doit être coupée ou soutenue davantage.",
      "en": "On a scaffold, a plank that overhangs its support beyond the prescribed limit must be cut or given additional support.",
      "isTrue": true,
      "explFr": "Un dépassement excessif peut faire basculer la planche sous le poids d'un travailleur.",
      "explEn": "Excessive overhang can cause the plank to tip under a worker's weight."
     },
     {
      "fr": "Selon la hiérarchie des mesures de prévention, quelle option est à privilégier avant le port d'un équipement de protection individuelle (EPI) ?",
      "en": "According to the hierarchy of prevention measures, which option should be prioritized before personal protective equipment (PPE)?",
      "choices": [
       {
        "fr": "L'élimination du danger ou son remplacement par une méthode plus sécuritaire",
        "en": "Eliminating the hazard or replacing it with a safer method",
        "correct": true
       },
       {
        "fr": "Choisir un EPI de couleur voyante",
        "en": "Choosing brightly colored PPE",
        "correct": false
       },
       {
        "fr": "Informer les travailleurs après l'accident",
        "en": "Informing workers after the accident",
        "correct": false
       },
       {
        "fr": "Le remplacement de l'EPI par un modèle plus récent",
        "en": "Replacing the PPE with a newer model",
        "correct": false
       }
      ],
      "explFr": "La hiérarchie priorise l'élimination et les mesures collectives avant les protections individuelles.",
      "explEn": "The hierarchy prioritizes elimination and collective measures before personal protection."
     },
     {
      "type": "tf",
      "fr": "Travailler seul sur un chantier isolé nécessite un moyen de communication permettant d'alerter les secours en cas d'urgence.",
      "en": "Working alone on an isolated site requires a means of communication to alert help in case of an emergency.",
      "isTrue": true,
      "explFr": "C'est une exigence de base pour le travail en isolement.",
      "explEn": "This is a basic requirement for isolated work."
     },
     {
      "fr": "Un travailleur doit couper une pièce près d'une scie à table alors que le protecteur de lame a été retiré par un collègue. Quelle est la bonne action ?",
      "en": "A worker must cut a piece near a table saw whose blade guard was removed by a coworker. What is the correct action?",
      "choices": [
       {
        "fr": "Refuser de travailler et faire réinstaller le protecteur avant de continuer",
        "en": "Refuse to work and have the guard reinstalled before continuing",
        "correct": true
       },
       {
        "fr": "Couper prudemment sans protecteur pour ne pas retarder le travail",
        "en": "Cut carefully without the guard to avoid delaying work",
        "correct": false
       },
       {
        "fr": "Utiliser des gants épais à la place du protecteur",
        "en": "Use thick gloves instead of the guard",
        "correct": false
       },
       {
        "fr": "Demander à un collègue de tenir la pièce à mains nues",
        "en": "Ask a coworker to hold the piece bare-handed",
        "correct": false
       }
      ],
      "explFr": "Un protecteur de lame retiré représente un danger grave ; il doit être remis en place avant toute utilisation.",
      "explEn": "A removed blade guard is a serious hazard; it must be reinstalled before any use."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un travailleur doit installer un point d'ancrage temporaire pour une ligne de vie verticale. Quelle caractéristique est essentielle pour ce point d'ancrage certifié à usage unique ?",
      "en": "A worker must install a temporary anchor point for a vertical lifeline. What characteristic is essential for this single-user certified anchor point?",
      "choices": [
       {
        "fr": "Une capacité de résistance certifiée (généralement de l'ordre de plusieurs tonnes) et une installation selon les spécifications du fabricant",
        "en": "A certified resistance capacity (generally on the order of several tons) and installation per manufacturer specifications",
        "correct": true
       },
       {
        "fr": "Une couleur orange vif visible de loin sur le chantier",
        "en": "A bright orange color visible from a distance on site",
        "correct": false
       },
       {
        "fr": "Un emplacement facilement accessible, même sans structure porteuse",
        "en": "An easily accessible location, even without a load-bearing structure",
        "correct": false
       },
       {
        "fr": "Une capacité réduite de moitié si le travailleur est très expérimenté",
        "en": "A capacity reduced by half if the worker is very experienced",
        "correct": false
       }
      ],
      "explFr": "Un point d'ancrage doit pouvoir absorber la force d'arrêt d'une chute avec une marge de sécurité, selon les normes applicables.",
      "explEn": "An anchor point must be able to absorb a fall-arrest force with a safety margin, per applicable standards."
     },
     {
      "type": "tf",
      "fr": "Un système d'arrêt de chute (harnais + longe) et un système de retenue (restriction) remplissent exactement la même fonction et sont interchangeables.",
      "en": "A fall-arrest system (harness + lanyard) and a restraint (travel-restriction) system serve exactly the same function and are interchangeable.",
      "isTrue": false,
      "explFr": "Le système de retenue empêche d'atteindre le bord (aucune chute possible), alors que le système d'arrêt de chute freine une chute déjà amorcée ; ils ne sont pas conçus de la même façon.",
      "explEn": "A restraint system prevents reaching the edge (no fall possible), while a fall-arrest system stops a fall already in progress; they are not designed the same way."
     },
     {
      "fr": "Lors d'un travail à chaud (soudage/meulage) près de matériaux combustibles, quelle mesure est la plus importante en plus de l'extincteur à proximité ?",
      "en": "During hot work (welding/grinding) near combustible materials, what measure is most important besides having an extinguisher nearby?",
      "choices": [
       {
        "fr": "Un permis de travail à chaud avec surveillance pendant et après les travaux (ronde de surveillance incendie)",
        "en": "A hot-work permit with fire-watch monitoring during and after the work",
        "correct": true
       },
       {
        "fr": "Une planification des travaux uniquement en dehors des heures de pointe",
        "en": "Scheduling the work only outside of peak hours",
        "correct": false
       },
       {
        "fr": "Le retrait des lunettes de sécurité pour mieux voir l'ouvrage",
        "en": "Removing safety glasses to see the work better",
        "correct": false
       },
       {
        "fr": "Une simple vérification visuelle des lieux avant de commencer",
        "en": "A simple visual check of the area before starting",
        "correct": false
       }
      ],
      "explFr": "Un feu peut se déclarer de façon différée après l'arrêt des travaux ; une surveillance post-travaux est essentielle.",
      "explEn": "A fire can start with a delay after work stops; post-work monitoring is essential."
     },
     {
      "fr": "Deux travailleurs cadenassent la même machine pour des tâches distinctes. Quelle pratique de cadenassage multiple est appropriée ?",
      "en": "Two workers lock out the same machine for separate tasks. What multi-lockout practice is appropriate?",
      "choices": [
       {
        "fr": "Chaque travailleur appose son propre cadenas personnel (souvent via une station de cadenassage collectif)",
        "en": "Each worker applies their own personal lock (often via a group lockout station)",
        "correct": true
       },
       {
        "fr": "Un seul cadenas suffit si les deux travailleurs se connaissent",
        "en": "One lock is enough if the two workers know each other",
        "correct": false
       },
       {
        "fr": "Le premier travailleur retire son cadenas dès qu'il a terminé sa tâche",
        "en": "The first worker removes their lock as soon as their own task is done",
        "correct": false
       },
       {
        "fr": "Le cadenassage multiple est réservé aux grandes entreprises seulement",
        "en": "Multiple lockout is reserved for large companies only",
        "correct": false
       }
      ],
      "explFr": "Chaque personne doit contrôler son propre cadenas ; la machine ne redémarre que lorsque tous les cadenas sont retirés.",
      "explEn": "Each person must control their own lock; the machine only restarts once every lock has been removed."
     },
     {
      "type": "tf",
      "fr": "Selon la hiérarchie des mesures de prévention, des mesures administratives (comme la formation ou la rotation du personnel) sont généralement considérées moins efficaces que des mesures d'ingénierie (comme un garde-corps fixe).",
      "en": "According to the hierarchy of prevention measures, administrative measures (like training or staff rotation) are generally considered less effective than engineering measures (like a fixed guardrail).",
      "isTrue": true,
      "explFr": "Les mesures d'ingénierie éliminent ou réduisent le danger à la source, alors que les mesures administratives dépendent du comportement humain.",
      "explEn": "Engineering measures eliminate or reduce the hazard at the source, while administrative measures depend on human behavior."
     },
     {
      "fr": "Un travailleur ressent des étourdissements en sortant d'un espace clos après y avoir travaillé 20 minutes sans ventilation forcée. Quelle est la cause la plus probable ?",
      "en": "A worker feels dizzy exiting a confined space after working there 20 minutes without forced ventilation. What is the most likely cause?",
      "choices": [
       {
        "fr": "Une atmosphère appauvrie en oxygène ou contaminée par des gaz",
        "en": "An oxygen-depleted or gas-contaminated atmosphere",
        "correct": true
       },
       {
        "fr": "Le manque de sommeil de la veille uniquement",
        "en": "Only lack of sleep the night before",
        "correct": false
       },
       {
        "fr": "Une réaction normale sans lien avec l'espace clos",
        "en": "A normal reaction unrelated to the confined space",
        "correct": false
       },
       {
        "fr": "Le port du casque de sécurité trop serré",
        "en": "A safety helmet worn too tightly",
        "correct": false
       }
      ],
      "explFr": "Les espaces clos peuvent accumuler des gaz dangereux ou manquer d'oxygène ; des symptômes comme des étourdissements exigent une évacuation immédiate et un test d'air.",
      "explEn": "Confined spaces can accumulate hazardous gases or lack oxygen; symptoms like dizziness require immediate evacuation and air testing."
     },
     {
      "fr": "Sur un chantier, un talutage (pente du sol) est choisi plutôt qu'un étançonnement pour protéger une excavation. Quel facteur influence le plus l'angle de talutage sécuritaire ?",
      "en": "On a site, sloping (soil grading) is chosen instead of shoring to protect an excavation. What factor most influences the safe sloping angle?",
      "choices": [
       {
        "fr": "Le type de sol (classification selon sa cohésion et sa stabilité)",
        "en": "The soil type (classification based on cohesion and stability)",
        "correct": true
       },
       {
        "fr": "La couleur générale du sol excavé",
        "en": "The general color of the excavated soil",
        "correct": false
       },
       {
        "fr": "L'heure de la journée où débutent les travaux",
        "en": "The time of day the work begins",
        "correct": false
       },
       {
        "fr": "Le nombre de travailleurs présents sur le chantier",
        "en": "The number of workers present on site",
        "correct": false
       }
      ],
      "explFr": "Un sol instable (comme du sable) exige une pente beaucoup plus douce qu'un sol cohésif et stable.",
      "explEn": "Unstable soil (like sand) requires a much gentler slope than cohesive, stable soil."
     },
     {
      "type": "tf",
      "fr": "Un travailleur exposé à un niveau de bruit dépassant la limite pondérée sur 8 heures doit porter une protection auditive, mais l'employeur doit aussi explorer des mesures de réduction du bruit à la source.",
      "en": "A worker exposed to a noise level exceeding the 8-hour weighted limit must wear hearing protection, but the employer must also explore measures to reduce noise at the source.",
      "isTrue": true,
      "explFr": "La protection individuelle est un dernier recours ; la réduction à la source demeure prioritaire selon la hiérarchie des mesures.",
      "explEn": "Personal protection is a last resort; reduction at the source remains the priority under the hierarchy of controls."
     },
     {
      "fr": "Comparé à un extincteur de type ABC, quel avantage spécifique un extincteur de type K offre-t-il sur un feu de graisse de cuisson à haute température ?",
      "en": "Compared to a type ABC extinguisher, what specific advantage does a type K extinguisher offer on a high-temperature cooking grease fire?",
      "choices": [
       {
        "fr": "Un agent qui refroidit et forme une pellicule saponifiée empêchant la reprise du feu (réaction de saponification)",
        "en": "An agent that cools and forms a saponified film preventing flare-back (saponification reaction)",
        "correct": true
       },
       {
        "fr": "Un jet à plus longue portée pour les feux extérieurs",
        "en": "A longer-reach spray for outdoor fires",
        "correct": false
       },
       {
        "fr": "Une pression de sortie plus élevée pour les feux électriques",
        "en": "Higher discharge pressure for electrical fires",
        "correct": false
       },
       {
        "fr": "Une capacité supérieure pour les feux de bois empilé",
        "en": "A greater capacity for stacked wood fires",
        "correct": false
       }
      ],
      "explFr": "L'agent du type K réagit chimiquement avec l'huile chaude (saponification), formant une pellicule qui refroidit et empêche la reprise du feu, contrairement à la poudre ABC qui peut causer un jaillissement dangereux sur une friteuse.",
      "explEn": "Type K agent reacts chemically with hot oil (saponification), forming a film that cools and prevents flare-back, unlike ABC powder which can cause a dangerous splatter on a fryer."
     },
     {
      "type": "tf",
      "fr": "Un plan de sauvetage spécifique doit être établi avant l'entrée dans un espace clos, même si un permis d'entrée a déjà été délivré.",
      "en": "A specific rescue plan must be established before entering a confined space, even if an entry permit has already been issued.",
      "isTrue": true,
      "explFr": "Le permis d'entrée ne remplace pas la planification du sauvetage en cas d'urgence à l'intérieur de l'espace.",
      "explEn": "The entry permit does not replace rescue planning in case of an emergency inside the space."
     }
    ]
   }
  ]
 },
 {
  "id": "charp02",
  "order": 2,
  "code": "",
  "hours": 90,
  "title_fr": "Outils manuels et électriques",
  "title_en": "Hand & Power Tools",
  "icon": "🛠️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel outil sert à vérifier qu'une surface est parfaitement horizontale ?",
      "en": "Which tool checks that a surface is perfectly horizontal?",
      "choices": [
       {
        "fr": "Niveau",
        "en": "Level",
        "correct": true
       },
       {
        "fr": "Équerre",
        "en": "Square",
        "correct": false
       },
       {
        "fr": "Cordeau à tracer",
        "en": "Chalk line",
        "correct": false
       },
       {
        "fr": "Vernier",
        "en": "Caliper",
        "correct": false
       }
      ],
      "explFr": "Le niveau à bulle indique l'horizontalité (ou la verticalité) d'une surface.",
      "explEn": "A spirit level indicates whether a surface is horizontal (or vertical)."
     },
     {
      "fr": "À quoi sert un cordeau à tracer (chalk line) ?",
      "en": "What is a chalk line used for?",
      "choices": [
       {
        "fr": "Tracer une ligne droite de référence sur une longue distance",
        "en": "Snapping a straight reference line over a long distance",
        "correct": true
       },
       {
        "fr": "Vérifier l'angle exact d'un coin de mur",
        "en": "Checking the exact angle of a wall corner",
        "correct": false
       },
       {
        "fr": "Répartir la poussière de bois sur le plancher",
        "en": "Spreading sawdust evenly on the floor",
        "correct": false
       },
       {
        "fr": "Ajuster la tension d'une corde de retenue",
        "en": "Adjusting the tension of a tie-down rope",
        "correct": false
       }
      ],
      "explFr": "Le cordeau enduit de craie laisse une ligne droite quand on le pince.",
      "explEn": "The chalk-coated line leaves a straight mark when snapped."
     },
     {
      "fr": "Quel outil permet de mesurer et vérifier un angle de 90° ?",
      "en": "Which tool measures and checks a 90° angle?",
      "choices": [
       {
        "fr": "Équerre de charpentier",
        "en": "Framing square",
        "correct": true
       },
       {
        "fr": "Ruban à mesurer gradué",
        "en": "Graduated tape measure",
        "correct": false
       },
       {
        "fr": "Niveau à bulle standard",
        "en": "Standard spirit level",
        "correct": false
       },
       {
        "fr": "Marteau à panne fendue",
        "en": "Claw hammer",
        "correct": false
       }
      ],
      "explFr": "L'équerre de charpentier sert à tracer et vérifier des angles droits.",
      "explEn": "A framing square is used to mark and check right angles."
     },
     {
      "fr": "Quelle est la fonction principale d'une scie sauteuse ?",
      "en": "What is the main function of a jigsaw?",
      "choices": [
       {
        "fr": "Effectuer des coupes courbes ou complexes",
        "en": "Making curved or intricate cuts",
        "correct": true
       },
       {
        "fr": "Percer des trous profonds et alignés",
        "en": "Drilling deep, aligned holes",
        "correct": false
       },
       {
        "fr": "Aplanir une surface de bois rugueuse",
        "en": "Flattening a rough wood surface",
        "correct": false
       },
       {
        "fr": "Assembler deux pièces par pression",
        "en": "Joining two pieces together by pressure",
        "correct": false
       }
      ],
      "explFr": "Sa lame étroite permet de suivre des tracés non rectilignes.",
      "explEn": "Its narrow blade allows it to follow non-straight lines."
     },
     {
      "type": "tf",
      "fr": "On peut changer la lame ou la mèche d'un outil électrique sans le débrancher, tant qu'on fait attention.",
      "en": "You can change a power tool's blade or bit without unplugging it, as long as you're careful.",
      "isTrue": false,
      "explFr": "Il faut toujours débrancher l'outil pour éviter un démarrage accidentel et prévenir les blessures.",
      "explEn": "You should always unplug the tool to avoid accidental startup and prevent injury."
     },
     {
      "fr": "Une scie circulaire recule brusquement vers l'utilisateur (rebond) principalement lorsque...",
      "en": "A circular saw kicks back suddenly toward the user mainly when...",
      "choices": [
       {
        "fr": "La lame se coince dans le bois pendant la coupe",
        "en": "The blade binds or pinches in the wood during the cut",
        "correct": true
       },
       {
        "fr": "La lame est trop aiguisée pour le matériau coupé",
        "en": "The blade is too sharp for the material being cut",
        "correct": false
       },
       {
        "fr": "L'outil est réglé à une vitesse trop faible",
        "en": "The tool is set to too low a speed",
        "correct": false
       },
       {
        "fr": "Le bois a été coupé dans le mauvais sens du grain",
        "en": "The wood was cut against the wrong grain direction",
        "correct": false
       }
      ],
      "explFr": "Le rebond survient typiquement quand la lame se coince ou que le bois se referme sur elle.",
      "explEn": "Kickback typically occurs when the blade binds or the wood closes in on it."
     },
     {
      "type": "tf",
      "fr": "Une mèche à bois et une mèche à métal sont interchangeables sans perte de performance.",
      "en": "A wood bit and a metal bit are interchangeable without any loss of performance.",
      "isTrue": false,
      "explFr": "Chaque mèche est conçue pour un matériau précis ; les utiliser à l'inverse réduit l'efficacité et peut les endommager.",
      "explEn": "Each bit is designed for a specific material; swapping their use reduces efficiency and can damage them."
     },
     {
      "fr": "Quel type de scie le travailleur utilise-t-il sur cette photo ?",
      "en": "What type of saw is the worker using in this photo?",
      "choices": [
       {
        "fr": "Une scie à onglet",
        "en": "A miter saw",
        "correct": true
       },
       {
        "fr": "Une scie à chaîne",
        "en": "A chainsaw",
        "correct": false
       },
       {
        "fr": "Une scie à table",
        "en": "A table saw",
        "correct": false
       },
       {
        "fr": "Une scie sauteuse",
        "en": "A jigsaw",
        "correct": false
       }
      ],
      "explFr": "La scie à onglet (miter saw) jaune permet des coupes angulaires précises, comme celle illustrée.",
      "explEn": "The yellow miter saw allows precise angled cuts, as shown here."
     },
     {
      "type": "tf",
      "fr": "Le travailleur sur cette photo porte des lunettes de sécurité.",
      "en": "The worker in this photo is wearing safety glasses.",
      "isTrue": true,
      "explFr": "Des lunettes de protection transparentes sont clairement visibles sur son visage.",
      "explEn": "Clear protective glasses are clearly visible on his face."
     },
     {
      "fr": "Quel outil est conçu pour enfoncer rapidement des clous à l'aide d'air comprimé ?",
      "en": "Which tool is designed to quickly drive nails using compressed air?",
      "choices": [
       {
        "fr": "Le cloueur pneumatique",
        "en": "The pneumatic nail gun",
        "correct": true
       },
       {
        "fr": "La perceuse à colonne",
        "en": "The drill press",
        "correct": false
       },
       {
        "fr": "Le rabot électrique",
        "en": "The electric planer",
        "correct": false
       },
       {
        "fr": "La toupie",
        "en": "The router",
        "correct": false
       }
      ],
      "explFr": "Le cloueur pneumatique utilise l'air comprimé pour enfoncer les clous rapidement.",
      "explEn": "The pneumatic nail gun uses compressed air to drive nails quickly."
     },
     {
      "fr": "Quel est un avantage de la vis par rapport au clou pour un assemblage de bois ?",
      "en": "What is an advantage of a screw over a nail for a wood joint?",
      "choices": [
       {
        "fr": "Une meilleure résistance à l'arrachement grâce à son filetage",
        "en": "Better resistance to pull-out thanks to its threads",
        "correct": true
       },
       {
        "fr": "Une installation légèrement plus rapide dans la plupart des cas",
        "en": "Installation that is somewhat faster in most cases",
        "correct": false
       },
       {
        "fr": "Un coût généralement inférieur à celui d'un clou",
        "en": "A generally lower cost than a nail",
        "correct": false
       },
       {
        "fr": "Une meilleure résistance aux chocs latéraux",
        "en": "Better resistance to sideways impact",
        "correct": false
       }
      ],
      "explFr": "Le filetage de la vis lui donne une meilleure prise dans le bois qu'un clou lisse.",
      "explEn": "A screw's threads grip the wood better than a smooth nail."
     },
     {
      "fr": "À quoi sert un rabot électrique ?",
      "en": "What is an electric planer used for?",
      "choices": [
       {
        "fr": "Aplanir ou amincir une surface de bois",
        "en": "Flattening or thinning a wood surface",
        "correct": true
       },
       {
        "fr": "Percer des trous",
        "en": "Drilling holes",
        "correct": false
       },
       {
        "fr": "Poncer une surface",
        "en": "Sanding a surface",
        "correct": false
       },
       {
        "fr": "Couper des tuyaux",
        "en": "Cutting pipes",
        "correct": false
       }
      ],
      "explFr": "Le rabot retire de fines couches de bois pour aplanir ou ajuster l'épaisseur d'une pièce.",
      "explEn": "A planer removes thin layers of wood to flatten or adjust a piece's thickness."
     },
     {
      "fr": "Quel outil sert à créer des rainures ou des moulures décoratives dans le bois ?",
      "en": "Which tool is used to create grooves or decorative moldings in wood?",
      "choices": [
       {
        "fr": "La toupie (router)",
        "en": "The router",
        "correct": true
       },
       {
        "fr": "Le niveau laser",
        "en": "The laser level",
        "correct": false
       },
       {
        "fr": "La scie à chaîne",
        "en": "The chainsaw",
        "correct": false
       },
       {
        "fr": "Le pistolet à calfeutrer",
        "en": "The caulking gun",
        "correct": false
       }
      ],
      "explFr": "La toupie, équipée de fraises variées, façonne des rainures et des profils décoratifs.",
      "explEn": "The router, fitted with various bits, shapes grooves and decorative profiles."
     },
     {
      "fr": "Pourquoi utilise-t-on des serre-joints lors d'un assemblage collé ?",
      "en": "Why are clamps used during a glued assembly?",
      "choices": [
       {
        "fr": "Pour maintenir les pièces fermement ensemble pendant le séchage de la colle",
        "en": "To hold the pieces firmly together while the glue dries",
        "correct": true
       },
       {
        "fr": "Pour appliquer une couche uniforme de colle",
        "en": "To apply an even layer of glue",
        "correct": false
       },
       {
        "fr": "Pour vérifier que les pièces sont bien d'équerre",
        "en": "To check that the pieces are properly square",
        "correct": false
       },
       {
        "fr": "Pour protéger le bois contre l'humidité ambiante",
        "en": "To protect the wood from ambient moisture",
        "correct": false
       }
      ],
      "explFr": "Une pression constante pendant le séchage assure un joint collé solide.",
      "explEn": "Constant pressure during drying ensures a strong glued joint."
     },
     {
      "fr": "Quel type de mèche/embout utilise-t-on typiquement pour visser dans le bois ?",
      "en": "What type of bit is typically used to drive a screw into wood?",
      "choices": [
       {
        "fr": "Un embout adapté à la tête de la vis (ex. Robertson, Phillips)",
        "en": "A bit matching the screw head (e.g., square, Phillips)",
        "correct": true
       },
       {
        "fr": "Une mèche conçue pour percer la maçonnerie",
        "en": "A bit designed for drilling masonry",
        "correct": false
       },
       {
        "fr": "Une mèche à trois pointes pour le verre",
        "en": "A three-point bit for glass",
        "correct": false
       },
       {
        "fr": "Une lame plate destinée au sciage",
        "en": "A flat blade meant for sawing",
        "correct": false
       }
      ],
      "explFr": "Un embout mal adapté endommage la tête de vis et glisse facilement.",
      "explEn": "A mismatched bit damages the screw head and slips easily."
     },
     {
      "type": "tf",
      "fr": "Un ciseau à bois doit toujours être poussé en dirigeant le tranchant vers soi pour plus de précision.",
      "en": "A wood chisel should always be pushed with the edge directed toward oneself for more precision.",
      "isTrue": false,
      "explFr": "Le tranchant doit toujours être dirigé loin du corps pour éviter les blessures.",
      "explEn": "The edge should always be directed away from the body to avoid injury."
     },
     {
      "type": "tf",
      "fr": "Une scie réciproque (sabre saw) est utile pour des démolitions ou des coupes dans des endroits difficiles d'accès.",
      "en": "A reciprocating (sabre) saw is useful for demolition or cutting in hard-to-reach areas.",
      "isTrue": true,
      "explFr": "Sa lame étroite et son mouvement de va-et-vient conviennent aux coupes grossières et exiguës.",
      "explEn": "Its narrow blade and back-and-forth motion suit rough cuts in tight spaces."
     },
     {
      "type": "tf",
      "fr": "Un cloueur pneumatique laissé branché à l'air comprimé sans surveillance ne présente aucun risque.",
      "en": "A pneumatic nail gun left connected to compressed air unattended poses no risk.",
      "isTrue": false,
      "explFr": "Un outil sous pression laissé branché peut se déclencher accidentellement et causer des blessures graves.",
      "explEn": "A pressurized tool left connected can accidentally fire and cause serious injury."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pour couper du contreplaqué fini sans éclater la surface, quel type de lame de scie circulaire choisir ?",
      "en": "To cut finished plywood without splintering the surface, which circular saw blade should you choose?",
      "choices": [
       {
        "fr": "Une lame à grand nombre de dents fines (finition)",
        "en": "A blade with many fine teeth (finish blade)",
        "correct": true
       },
       {
        "fr": "Une lame à peu de dents pour coupe rapide",
        "en": "A blade with few teeth for fast cutting",
        "correct": false
       },
       {
        "fr": "Une lame à bois de chauffage",
        "en": "A firewood-cutting blade",
        "correct": false
       },
       {
        "fr": "N'importe quelle lame convient également",
        "en": "Any blade works equally well",
        "correct": false
       }
      ],
      "explFr": "Un grand nombre de dents fines réduit l'éclatement sur les matériaux finis comme le contreplaqué.",
      "explEn": "A high tooth count with fine teeth reduces splintering on finished materials like plywood."
     },
     {
      "type": "tf",
      "fr": "Le rebond (kickback) d'une scie circulaire se produit souvent lorsque le trait de scie se referme et pince la lame.",
      "en": "Circular saw kickback often occurs when the kerf closes and pinches the blade.",
      "isTrue": true,
      "explFr": "Un couteau diviseur ou un espacement adéquat aide à prévenir ce pincement.",
      "explEn": "A riving knife or proper spacing helps prevent this pinching."
     },
     {
      "fr": "Lorsqu'on utilise une toupie (routeur) à main levée sur le contour extérieur d'une pièce, dans quel sens doit-on la déplacer ?",
      "en": "When using a hand-held router on the outer edge of a piece, in which direction should you move it?",
      "choices": [
       {
        "fr": "Dans le sens contraire à la rotation de la mèche (habituellement de gauche à droite face à la pièce)",
        "en": "Against the rotation direction of the bit (usually left to right facing the piece)",
        "correct": true
       },
       {
        "fr": "Dans le même sens que la rotation, pour une coupe plus rapide",
        "en": "In the same direction as the rotation, for a faster cut",
        "correct": false
       },
       {
        "fr": "Dans n'importe quel sens, selon la préférence de l'opérateur",
        "en": "In any direction, based on operator preference",
        "correct": false
       },
       {
        "fr": "De droite à gauche, selon la préférence de la plupart des droitiers",
        "en": "Right to left, based on most right-handed users' preference",
        "correct": false
       }
      ],
      "explFr": "Avancer contre la rotation de la mèche donne un meilleur contrôle et évite que l'outil ne s'emballe le long de la pièce.",
      "explEn": "Feeding against the bit's rotation gives better control and prevents the tool from grabbing along the piece."
     },
     {
      "fr": "Un tournevis électrique perce une tête de vis avant qu'elle soit bien enfoncée dans du mélèze dur. Quel réglage ajuster en premier ?",
      "en": "A power driver strips a screw head before it's fully seated in hard larch. Which setting should you adjust first?",
      "choices": [
       {
        "fr": "Augmenter le réglage du embrayage (couple) ou utiliser une vitesse plus basse avec plus de pression contrôlée",
        "en": "Increase the clutch (torque) setting or use a lower speed with more controlled pressure",
        "correct": true
       },
       {
        "fr": "Passer immédiatement à une perceuse à percussion plus puissante",
        "en": "Immediately switch to a more powerful hammer drill",
        "correct": false
       },
       {
        "fr": "Remplacer l'embout par un embout de couleur différente",
        "en": "Replace the bit with one of a different color",
        "correct": false
       },
       {
        "fr": "Vérifier uniquement la tension de la batterie utilisée",
        "en": "Only check the voltage of the battery being used",
        "correct": false
       }
      ],
      "explFr": "Un couple mal réglé ou une vitesse excessive fait souvent déraper l'embout hors de la tête de vis.",
      "explEn": "A poorly set clutch or excessive speed often causes the bit to slip out of the screw head."
     },
     {
      "type": "tf",
      "fr": "Un outil à double isolation ne nécessite pas de fiche à trois broches (mise à la terre) pour être utilisé de façon sécuritaire.",
      "en": "A double-insulated tool does not need a three-prong (grounded) plug to be used safely.",
      "isTrue": true,
      "explFr": "La double isolation protège l'utilisateur sans dépendre d'une mise à la terre.",
      "explEn": "Double insulation protects the user without relying on a ground connection."
     },
     {
      "fr": "Un cloueur pneumatique exige 90 PSI pour fonctionner correctement. Le compresseur affiche 70 PSI en fonctionnement continu. Que se passe-t-il probablement ?",
      "en": "A pneumatic nailer requires 90 PSI to work correctly. The compressor shows 70 PSI under continuous use. What likely happens?",
      "choices": [
       {
        "fr": "Les clous ne s'enfoncent pas complètement par manque de pression",
        "en": "The nails won't be driven fully due to insufficient pressure",
        "correct": true
       },
       {
        "fr": "L'outil fonctionnera un peu plus lentement, sans autre conséquence",
        "en": "The tool will simply run a bit slower, with no other consequence",
        "correct": false
       },
       {
        "fr": "Le cloueur va exploser immédiatement",
        "en": "The nailer will immediately explode",
        "correct": false
       },
       {
        "fr": "Le bois deviendra plus dur à percer",
        "en": "The wood will become harder to drill",
        "correct": false
       }
      ],
      "explFr": "Une pression insuffisante réduit la force d'enfoncement et laisse les clous ressortis (surélevés).",
      "explEn": "Insufficient pressure reduces driving force and leaves nails proud (raised)."
     },
     {
      "fr": "Pour paraître (raboter à la main) un joint dans du bois franc dur, quel angle de biseau de ciseau est généralement approprié ?",
      "en": "For paring a joint by hand in hard hardwood, which chisel bevel angle is generally appropriate?",
      "choices": [
       {
        "fr": "Un angle plus prononcé (environ 30°) pour plus de résistance du tranchant",
        "en": "A steeper angle (about 30°) for more edge durability",
        "correct": true
       },
       {
        "fr": "Un angle très plat (5°) pour couper plus vite",
        "en": "A very flat angle (5°) to cut faster",
        "correct": false
       },
       {
        "fr": "L'angle affecte seulement la vitesse de coupe, pas la durabilité",
        "en": "Angle only affects cutting speed, not edge durability",
        "correct": false
       },
       {
        "fr": "Un angle plat de 15°, pour couper plus rapidement dans le bois dur",
        "en": "A flat 15° angle, to cut faster in hardwood",
        "correct": false
       }
      ],
      "explFr": "Un angle plus prononcé résiste mieux à l'écaillage dans le bois dur, au prix d'un tranchant légèrement moins vif.",
      "explEn": "A steeper angle resists chipping better in hardwood, at the cost of a slightly less keen edge."
     },
     {
      "type": "tf",
      "fr": "Le couteau diviseur (riving knife) d'une scie à table sert principalement à empêcher le bois de se refermer sur la lame après la coupe.",
      "en": "A table saw's riving knife mainly prevents the wood from closing back onto the blade after the cut.",
      "isTrue": true,
      "explFr": "Cela réduit grandement le risque de rebond (kickback).",
      "explEn": "This greatly reduces the risk of kickback."
     },
     {
      "fr": "Pour une rallonge électrique de 30 mètres alimentant un outil de forte puissance, quel facteur est le plus important à considérer ?",
      "en": "For a 30-meter extension cord powering a high-power tool, what is the most important factor to consider?",
      "choices": [
       {
        "fr": "Le calibre (gauge) du fil, pour éviter une chute de tension excessive",
        "en": "The wire gauge, to avoid excessive voltage drop",
        "correct": true
       },
       {
        "fr": "La couleur de la gaine protectrice du fil",
        "en": "The color of the cord's protective sheath",
        "correct": false
       },
       {
        "fr": "Le nombre de nœuds présents dans le fil",
        "en": "The number of knots present in the cord",
        "correct": false
       },
       {
        "fr": "Le poids total de la rallonge uniquement",
        "en": "Only the total weight of the extension cord",
        "correct": false
       }
      ],
      "explFr": "Sur une longue distance, un calibre trop petit cause une chute de tension qui peut endommager l'outil.",
      "explEn": "Over a long distance, too small a gauge causes a voltage drop that can damage the tool."
     },
     {
      "type": "tf",
      "fr": "Un gabarit d'affûtage permet d'obtenir un angle de tranchant plus constant qu'un affûtage entièrement à main levée.",
      "en": "A honing guide produces a more consistent edge angle than fully freehand sharpening.",
      "isTrue": true,
      "explFr": "Le gabarit fixe l'angle, réduisant la variabilité d'un passage à l'autre.",
      "explEn": "The guide fixes the angle, reducing variability from pass to pass."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une scie à onglet radiale laisse des marques de brûlure sur une coupe d'érable dur. Quelle combinaison de facteurs est la cause la plus probable ?",
      "en": "A radial miter saw leaves burn marks on a hard maple cut. What combination of factors is the most likely cause?",
      "choices": [
       {
        "fr": "Une lame émoussée combinée à une vitesse d'avance trop lente",
        "en": "A dull blade combined with too slow a feed rate",
        "correct": true
       },
       {
        "fr": "Une lame trop neuve et une vitesse d'avance trop rapide",
        "en": "A too-new blade and too fast a feed rate",
        "correct": false
       },
       {
        "fr": "Le bois est trop sec pour être coupé",
        "en": "The wood is too dry to be cut",
        "correct": false
       },
       {
        "fr": "La température de la pièce est trop basse",
        "en": "The room temperature is too low",
        "correct": false
       }
      ],
      "explFr": "Une lame émoussée génère plus de friction et de chaleur, surtout si la pièce reste trop longtemps en contact avec les dents.",
      "explEn": "A dull blade generates more friction and heat, especially if the workpiece stays in contact with the teeth too long."
     },
     {
      "type": "tf",
      "fr": "Un embrayage (couple) de perceuse-visseuse mal calibré pour une application donnée peut causer soit un vissage insuffisant, soit un bris de la tête de vis, selon le réglage.",
      "en": "A drill-driver clutch poorly calibrated for a given application can cause either under-driving or screw-head breakage, depending on the setting.",
      "isTrue": true,
      "explFr": "Un couple trop faible laisse la vis ressortie, un couple trop élevé peut briser la tête ou endommager le matériau.",
      "explEn": "Too low a torque leaves the screw proud, too high a torque can break the head or damage the material."
     },
     {
      "fr": "Pourquoi une scie à table sans couteau diviseur (riving knife) présente-t-elle un risque de rebond (kickback) nettement plus élevé lors d'une coupe en long (rip cut) ?",
      "en": "Why does a table saw without a riving knife present a significantly higher kickback risk during a rip cut?",
      "choices": [
       {
        "fr": "Le bois peut se refermer sur la lame après la coupe et être projeté violemment vers l'opérateur",
        "en": "The wood can close back onto the blade after the cut and be violently thrown toward the operator",
        "correct": true
       },
       {
        "fr": "La lame chauffe plus rapidement sans couteau diviseur",
        "en": "The blade heats up faster without a riving knife",
        "correct": false
       },
       {
        "fr": "Le couteau diviseur sert uniquement à guider visuellement la coupe",
        "en": "The riving knife only serves as a visual cutting guide",
        "correct": false
       },
       {
        "fr": "Le risque est légèrement plus élevé, mais seulement pour les débutants",
        "en": "The risk is slightly higher, but only for beginners",
        "correct": false
       }
      ],
      "explFr": "Sans couteau diviseur, les contraintes internes du bois peuvent refermer le trait de scie et pincer l'arrière de la lame, provoquant un rebond.",
      "explEn": "Without a riving knife, internal wood stresses can close the kerf and pinch the back of the blade, causing kickback."
     },
     {
      "fr": "Une toupie de table entraîne une pièce mince qui vibre excessivement pendant le passage. Quelle solution règle le mieux ce problème sans compromettre la sécurité ?",
      "en": "A router table causes a thin workpiece to vibrate excessively during the pass. Which solution best addresses this without compromising safety?",
      "choices": [
       {
        "fr": "Utiliser des presseurs (feather boards) pour stabiliser la pièce contre le guide et la table",
        "en": "Use feather boards to stabilize the workpiece against the fence and table",
        "correct": true
       },
       {
        "fr": "Retirer le guide pour donner plus de liberté à la pièce",
        "en": "Remove the fence to give the workpiece more freedom",
        "correct": false
       },
       {
        "fr": "Augmenter fortement la vitesse de rotation de la mèche",
        "en": "Greatly increase the bit's rotation speed",
        "correct": false
       },
       {
        "fr": "Pousser la pièce plus rapidement pour limiter le contact",
        "en": "Push the workpiece faster to limit contact",
        "correct": false
       }
      ],
      "explFr": "Les presseurs maintiennent une pression constante et sécuritaire, réduisant les vibrations sans exposer les mains près de la mèche.",
      "explEn": "Feather boards maintain constant, safe pressure, reducing vibration without exposing hands near the bit."
     },
     {
      "type": "tf",
      "fr": "La sélection d'un calibre de rallonge électrique dépend à la fois de la longueur du câble et de l'intensité (ampérage) de l'outil utilisé.",
      "en": "Selecting an extension cord gauge depends on both the cable's length and the amperage of the tool being used.",
      "isTrue": true,
      "explFr": "Plus le câble est long et l'ampérage élevé, plus un calibre de fil épais (chiffre AWG plus bas) est nécessaire pour limiter la chute de tension.",
      "explEn": "The longer the cable and the higher the amperage, the thicker the wire gauge needed (lower AWG number) to limit voltage drop."
     },
     {
      "fr": "Un rabot à main laisse des ondulations régulières sur une planche malgré un tranchant bien affûté. Quelle est la cause la plus probable ?",
      "en": "A hand plane leaves regular ripples on a board despite a well-sharpened edge. What is the most likely cause?",
      "choices": [
       {
        "fr": "Le fer n'est pas également avancé (parallèle) par rapport à la semelle, ou le contre-fer est mal ajusté",
        "en": "The blade isn't evenly set (parallel) relative to the sole, or the cap iron is misadjusted",
        "correct": true
       },
       {
        "fr": "Le bois est trop résineux pour être raboté",
        "en": "The wood is too resinous to be planed",
        "correct": false
       },
       {
        "fr": "Le rabot est trop lourd pour la tâche",
        "en": "The plane is too heavy for the task",
        "correct": false
       },
       {
        "fr": "La cause est généralement liée à un bois encore trop humide",
        "en": "The cause is generally related to wood that is still too damp",
        "correct": false
       }
      ],
      "explFr": "Un fer mal aligné ou un contre-fer mal réglé produit une épaisseur de copeau irrégulière, créant des ondulations.",
      "explEn": "A misaligned blade or poorly set cap iron produces uneven shaving thickness, creating ripples."
     },
     {
      "fr": "Quelle est la conséquence probable d'utiliser une mèche à bois émoussée dans une perceuse à percussion réglée en mode percussion ?",
      "en": "What is the likely consequence of using a dull wood bit in a hammer drill set to hammer mode?",
      "choices": [
       {
        "fr": "Un risque accru de bris de la mèche et un trou de mauvaise qualité, le mode percussion n'étant pas conçu pour le bois",
        "en": "An increased risk of bit breakage and a poor-quality hole, since hammer mode isn't designed for wood",
        "correct": true
       },
       {
        "fr": "Une performance parfaitement identique à celle d'une mèche neuve",
        "en": "Performance exactly identical to that of a brand-new bit",
        "correct": false
       },
       {
        "fr": "Un perçage sensiblement plus rapide et plus propre qu'à l'habitude",
        "en": "Noticeably faster and cleaner drilling than usual",
        "correct": false
       },
       {
        "fr": "Une conséquence limitée à un perçage légèrement plus lent",
        "en": "A consequence limited to slightly slower drilling",
        "correct": false
       }
      ],
      "explFr": "Le mode percussion est conçu pour la maçonnerie ; l'utiliser avec une mèche à bois émoussée aggrave les dommages et la casse.",
      "explEn": "Hammer mode is designed for masonry; using it with a dull wood bit worsens damage and breakage."
     },
     {
      "type": "tf",
      "fr": "Un touret à affûter (grinder) utilisé sans refroidissement adéquat peut faire perdre sa trempe (dureté) à l'acier d'un outil de coupe.",
      "en": "A bench grinder used without adequate cooling can cause a cutting tool's steel to lose its temper (hardness).",
      "isTrue": true,
      "explFr": "La surchauffe change la structure métallurgique de l'acier, rendant le tranchant plus mou et moins durable.",
      "explEn": "Overheating changes the steel's metallurgical structure, making the edge softer and less durable."
     },
     {
      "fr": "Pourquoi un cloueur pneumatique à cycle unique (single-fire) est-il souvent privilégié en formation, plutôt qu'un mode à répétition (bump-fire) ?",
      "en": "Why is a single-fire pneumatic nailer often preferred in training, rather than a bump-fire (contact-trip) mode?",
      "choices": [
       {
        "fr": "Il réduit le risque de tir accidentel par rebond ou contact non intentionnel",
        "en": "It reduces the risk of accidental firing from bounce or unintended contact",
        "correct": true
       },
       {
        "fr": "Il enfonce les clous plus profondément, mais seulement à haute pression",
        "en": "It drives nails deeper, but only at high pressure",
        "correct": false
       },
       {
        "fr": "Il fonctionne à une pression d'air inférieure",
        "en": "It operates at lower air pressure",
        "correct": false
       },
       {
        "fr": "La différence de sécurité se limite au bruit produit par l'outil",
        "en": "The safety difference is limited to the noise the tool produces",
        "correct": false
       }
      ],
      "explFr": "Le mode à cycle unique exige une action délibérée pour chaque clou, réduisant les tirs accidentels.",
      "explEn": "Single-fire mode requires a deliberate action for each nail, reducing accidental discharges."
     },
     {
      "type": "tf",
      "fr": "Le calibrage régulier d'une équerre de charpente (framing square) est important, car un choc ou une chute peut fausser son angle de 90°.",
      "en": "Regularly checking a framing square's calibration is important, since an impact or fall can throw off its 90° angle.",
      "isTrue": true,
      "explFr": "Une équerre légèrement faussée peut introduire une erreur cumulative importante sur un ouvrage complet.",
      "explEn": "A slightly out-of-true square can introduce a significant cumulative error across an entire project."
     }
    ]
   }
  ]
 },
 {
  "id": "charp03",
  "order": 3,
  "code": "",
  "hours": 120,
  "title_fr": "Plans, devis et calculs",
  "title_en": "Plans, Specs & Calculations",
  "icon": "📐",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Sur un plan de construction, que représente l'échelle 1:50 ?",
      "en": "On a construction drawing, what does a 1:50 scale represent?",
      "choices": [
       {
        "fr": "1 unité mesurée sur le plan correspond à 50 unités réelles",
        "en": "1 unit measured on the drawing equals 50 real units",
        "correct": true
       },
       {
        "fr": "Le plan a été réduit à 50 % de sa taille originale",
        "en": "The drawing has been reduced to 50% of its original size",
        "correct": false
       },
       {
        "fr": "Le bâtiment comporte 50 pièces distinctes",
        "en": "The building contains 50 distinct rooms",
        "correct": false
       },
       {
        "fr": "Chaque page du plan couvre 50 mètres carrés",
        "en": "Each drawing page covers 50 square meters",
        "correct": false
       }
      ],
      "explFr": "Une échelle 1:50 signifie que chaque unité mesurée sur le plan vaut 50 fois cette unité en réalité.",
      "explEn": "A 1:50 scale means each measured unit on the plan equals 50 times that unit in reality."
     },
     {
      "fr": "Combien de pouces y a-t-il dans un pied ?",
      "en": "How many inches are there in a foot?",
      "choices": [
       {
        "fr": "12",
        "en": "12",
        "correct": true
       },
       {
        "fr": "10",
        "en": "10",
        "correct": false
       },
       {
        "fr": "16",
        "en": "16",
        "correct": false
       },
       {
        "fr": "100",
        "en": "100",
        "correct": false
       }
      ],
      "explFr": "Un pied (foot) équivaut à 12 pouces.",
      "explEn": "One foot equals 12 inches."
     },
     {
      "fr": "Que représente un devis dans un projet de construction ?",
      "en": "What does a specification (devis) represent in a construction project?",
      "choices": [
       {
        "fr": "Un document décrivant les matériaux, exigences et conditions du projet",
        "en": "A document describing the materials, requirements, and conditions of the project",
        "correct": true
       },
       {
        "fr": "Un tableau résumant uniquement les coûts de main-d'œuvre",
        "en": "A table summarizing only labor costs",
        "correct": false
       },
       {
        "fr": "Un permis officiel délivré par la municipalité",
        "en": "An official permit issued by the municipality",
        "correct": false
       },
       {
        "fr": "Un contrat signé entre le client et la banque",
        "en": "A contract signed between the client and the bank",
        "correct": false
       }
      ],
      "explFr": "Le devis complète les plans en précisant les exigences techniques.",
      "explEn": "The specification complements the drawings by detailing technical requirements."
     },
     {
      "fr": "Avec des solives espacées de 16 po centre en centre, environ combien de solives faut-il pour un mur de 16 pieds ?",
      "en": "With joists spaced 16 in. on center, roughly how many joists are needed for a 16-foot wall?",
      "choices": [
       {
        "fr": "Environ 13",
        "en": "About 13",
        "correct": true
       },
       {
        "fr": "Environ 5",
        "en": "About 5",
        "correct": false
       },
       {
        "fr": "Environ 32",
        "en": "About 32",
        "correct": false
       },
       {
        "fr": "Environ 8",
        "en": "About 8",
        "correct": false
       }
      ],
      "explFr": "16 pi = 192 po ÷ 16 po = 12 intervalles, donc 13 solives.",
      "explEn": "16 ft = 192 in. ÷ 16 in. = 12 spaces, so 13 joists."
     },
     {
      "type": "tf",
      "fr": "L'abréviation « c. à c. » sur un plan de charpente signifie « centre à centre ».",
      "en": "The abbreviation \"o.c.\" on a framing plan means \"on center\".",
      "isTrue": true,
      "explFr": "« Centre à centre » indique la distance entre les centres de deux éléments consécutifs.",
      "explEn": "\"On center\" indicates the distance between the centers of two consecutive members."
     },
     {
      "fr": "Un mur mesure 24 pieds de long. Avec des poteaux espacés à 16 po centre en centre, incluant un poteau à chaque extrémité, combien de poteaux complets faut-il ?",
      "en": "A wall is 24 feet long. With studs spaced 16 in. on center, including one stud at each end, how many full studs are needed?",
      "choices": [
       {
        "fr": "19",
        "en": "19",
        "correct": true
       },
       {
        "fr": "18",
        "en": "18",
        "correct": false
       },
       {
        "fr": "24",
        "en": "24",
        "correct": false
       },
       {
        "fr": "16",
        "en": "16",
        "correct": false
       }
      ],
      "explFr": "24 pi = 288 po ÷ 16 po = 18 intervalles, donc 19 poteaux (un de plus que le nombre d'intervalles).",
      "explEn": "24 ft = 288 in. ÷ 16 in. = 18 spaces, so 19 studs (one more than the number of spaces)."
     },
     {
      "type": "tf",
      "fr": "Sur un plan, une ligne pointillée représente généralement un élément caché ou situé au-dessus (comme une poutre).",
      "en": "On a drawing, a dashed line generally represents a hidden element or one located above (like a beam).",
      "isTrue": true,
      "explFr": "Les lignes pointillées sont une convention de dessin pour les éléments non visibles directement.",
      "explEn": "Dashed lines are a drafting convention for elements not directly visible."
     },
     {
      "fr": "Que fait le travailleur sur cette photo ?",
      "en": "What is the worker doing in this photo?",
      "choices": [
       {
        "fr": "Il mesure une pièce de bois à l'aide d'un ruban à mesurer",
        "en": "Measuring a piece of wood with a tape measure",
        "correct": true
       },
       {
        "fr": "Il ajuste l'angle d'une scie à onglet",
        "en": "Adjusting the angle of a miter saw",
        "correct": false
       },
       {
        "fr": "Il vérifie le niveau d'un mur avec une bulle",
        "en": "Checking a wall's level with a bubble level",
        "correct": false
       },
       {
        "fr": "Il trace une ligne avec un cordeau à craie",
        "en": "Snapping a line with a chalk line",
        "correct": false
       }
      ],
      "explFr": "Le ruban à mesurer jaune, avec ses chiffres bien visibles, sert à prendre des mesures précises.",
      "explEn": "The yellow tape measure, with its clearly visible numbers, is used to take precise measurements."
     },
     {
      "type": "tf",
      "fr": "Le ruban à mesurer utilisé sur cette photo est gradué en centimètres.",
      "en": "The tape measure used in this photo is graduated in centimeters.",
      "isTrue": true,
      "explFr": "Les graduations visibles (autour de 170 à 224) correspondent à une échelle en centimètres.",
      "explEn": "The visible markings (around 170 to 224) correspond to a centimeter scale."
     },
     {
      "fr": "Que représente une vue en coupe (section) sur un plan de construction ?",
      "en": "What does a cross-section view represent on a construction drawing?",
      "choices": [
       {
        "fr": "Une vue montrant l'intérieur d'un élément comme s'il était tranché",
        "en": "A view showing the inside of an element as if it were sliced open",
        "correct": true
       },
       {
        "fr": "Une vue de dessus montrant l'ensemble du terrain",
        "en": "A top-down view showing the entire lot",
        "correct": false
       },
       {
        "fr": "Une liste détaillée des matériaux requis",
        "en": "A detailed list of required materials",
        "correct": false
       },
       {
        "fr": "Un résumé des étapes de construction prévues",
        "en": "A summary of the planned construction steps",
        "correct": false
       }
      ],
      "explFr": "La coupe révèle l'assemblage interne d'un mur, d'un plancher ou d'une fondation.",
      "explEn": "A section reveals the internal assembly of a wall, floor, or foundation."
     },
     {
      "fr": "Sur un plan à l'échelle 1:100, une longueur de 5 cm sur le papier correspond à quelle longueur réelle ?",
      "en": "On a 1:100 scale drawing, a 5 cm length on paper corresponds to what real length?",
      "choices": [
       {
        "fr": "5 m",
        "en": "5 m",
        "correct": true
       },
       {
        "fr": "50 m",
        "en": "50 m",
        "correct": false
       },
       {
        "fr": "0,5 m",
        "en": "0.5 m",
        "correct": false
       },
       {
        "fr": "100 m",
        "en": "100 m",
        "correct": false
       }
      ],
      "explFr": "5 cm x 100 = 500 cm, soit 5 mètres.",
      "explEn": "5 cm x 100 = 500 cm, which is 5 meters."
     },
     {
      "fr": "Que représente la légende (liste des symboles) sur un plan de construction ?",
      "en": "What does the legend (symbol list) represent on a construction drawing?",
      "choices": [
       {
        "fr": "L'explication des symboles et abréviations utilisés",
        "en": "The explanation of the symbols and abbreviations used",
        "correct": true
       },
       {
        "fr": "Le calendrier détaillé des travaux à réaliser",
        "en": "The detailed schedule of work to be performed",
        "correct": false
       },
       {
        "fr": "La signature officielle de l'architecte",
        "en": "The architect's official signature",
        "correct": false
       },
       {
        "fr": "Le résumé des normes municipales applicables",
        "en": "The summary of applicable municipal bylaws",
        "correct": false
       }
      ],
      "explFr": "La légende permet d'interpréter correctement les symboles présents sur le plan.",
      "explEn": "The legend allows the symbols on the drawing to be correctly interpreted."
     },
     {
      "fr": "Comment calcule-t-on l'aire (superficie) d'une pièce rectangulaire de 12 pi par 10 pi ?",
      "en": "How do you calculate the area of a rectangular room measuring 12 ft by 10 ft?",
      "choices": [
       {
        "fr": "12 x 10 = 120 pi²",
        "en": "12 x 10 = 120 sq ft",
        "correct": true
       },
       {
        "fr": "12 + 10 = 22 pi²",
        "en": "12 + 10 = 22 sq ft",
        "correct": false
       },
       {
        "fr": "12 x 10 x 10 = 1200 pi²",
        "en": "12 x 10 x 10 = 1200 sq ft",
        "correct": false
       },
       {
        "fr": "12 x 10 / 2 = 60 pi²",
        "en": "12 x 10 / 2 = 60 sq ft",
        "correct": false
       }
      ],
      "explFr": "L'aire d'un rectangle s'obtient en multipliant la longueur par la largeur.",
      "explEn": "The area of a rectangle is found by multiplying length by width."
     },
     {
      "fr": "Pourquoi ajoute-t-on généralement un facteur de perte (waste factor) lors du calcul des matériaux nécessaires ?",
      "en": "Why is a waste factor generally added when calculating required materials?",
      "choices": [
       {
        "fr": "Pour compenser les pertes dues aux coupes et aux erreurs",
        "en": "To compensate for losses from cuts and mistakes",
        "correct": true
       },
       {
        "fr": "Pour respecter une exigence esthétique du client",
        "en": "To meet an aesthetic requirement from the client",
        "correct": false
       },
       {
        "fr": "Pour augmenter artificiellement la durée du chantier",
        "en": "To artificially extend the length of the project",
        "correct": false
       },
       {
        "fr": "Pour justifier un délai de livraison plus long",
        "en": "To justify a longer delivery timeline",
        "correct": false
       }
      ],
      "explFr": "Les coupes et les erreurs occasionnent toujours une certaine perte de matériaux.",
      "explEn": "Cuts and mistakes always cause some material loss."
     },
     {
      "fr": "Qu'est-ce qu'une élévation sur un plan de construction ?",
      "en": "What is an elevation on a construction drawing?",
      "choices": [
       {
        "fr": "Une vue verticale d'une façade du bâtiment",
        "en": "A vertical view of a building facade",
        "correct": true
       },
       {
        "fr": "Une liste des matériaux utilisés en fondation",
        "en": "A list of materials used in the foundation",
        "correct": false
       },
       {
        "fr": "Un calcul du volume total du bâtiment",
        "en": "A calculation of the building's total volume",
        "correct": false
       },
       {
        "fr": "Un résumé des permis nécessaires",
        "en": "A summary of the required permits",
        "correct": false
       }
      ],
      "explFr": "L'élévation montre l'apparence extérieure d'une façade, avec ses portes et fenêtres.",
      "explEn": "The elevation shows the exterior appearance of a facade, with its doors and windows."
     },
     {
      "type": "tf",
      "fr": "Un plan de fondation montre généralement l'emplacement des semelles et des murs de fondation.",
      "en": "A foundation plan generally shows the location of footings and foundation walls.",
      "isTrue": true,
      "explFr": "C'est la fonction principale d'un plan de fondation.",
      "explEn": "That is the main purpose of a foundation plan."
     },
     {
      "type": "tf",
      "fr": "Le système impérial (pieds et pouces) n'est jamais utilisé dans la construction résidentielle au Québec.",
      "en": "The imperial system (feet and inches) is never used in residential construction in Quebec.",
      "isTrue": false,
      "explFr": "Le système impérial demeure couramment utilisé en chantier, souvent en parallèle du système métrique.",
      "explEn": "The imperial system remains commonly used on job sites, often alongside the metric system."
     },
     {
      "type": "tf",
      "fr": "Un « pied-planche » (board foot) est une unité couramment utilisée pour mesurer le volume de bois de sciage.",
      "en": "A \"board foot\" is a unit commonly used to measure the volume of dimensional lumber.",
      "isTrue": true,
      "explFr": "Le pied-planche est une unité de volume standard dans l'industrie du bois.",
      "explEn": "The board foot is a standard volume unit in the lumber industry."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Sur un plan à l'échelle 1:50, un mur mesure 8 cm sur le dessin, incluant une porte qui occupe 1,5 cm de cette longueur. Quelle est la longueur réelle du mur, porte exclue ?",
      "en": "On a 1:50 scale drawing, a wall measures 8 cm on the drawing, including a door that takes up 1.5 cm of that length. What is the wall's real length, excluding the door?",
      "choices": [
       {
        "fr": "3,25 mètres",
        "en": "3.25 meters",
        "correct": true
       },
       {
        "fr": "4 mètres",
        "en": "4 meters",
        "correct": false
       },
       {
        "fr": "3,5 mètres",
        "en": "3.5 meters",
        "correct": false
       },
       {
        "fr": "2,5 mètres",
        "en": "2.5 meters",
        "correct": false
       }
      ],
      "explFr": "8 cm × 50 = 400 cm = 4 m au total ; la porte (1,5 cm × 50 = 75 cm = 0,75 m) doit être soustraite : 4 − 0,75 = 3,25 m.",
      "explEn": "8 cm × 50 = 400 cm = 4 m total; the door (1.5 cm × 50 = 75 cm = 0.75 m) must be subtracted: 4 − 0.75 = 3.25 m."
     },
     {
      "type": "tf",
      "fr": "Un symbole de porte sur un plan indique généralement aussi le sens d'ouverture (direction du battant).",
      "en": "A door symbol on a plan usually also indicates the swing direction (leaf direction).",
      "isTrue": true,
      "explFr": "L'arc du symbole montre la trajectoire d'ouverture du battant.",
      "explEn": "The symbol's arc shows the swing path of the door leaf."
     },
     {
      "fr": "Un projet utilise 2 pièces de bois de 2 po × 6 po × 8 pi et 1 pièce de 2 po × 4 po × 12 pi. Combien de pieds-planche (board feet) cela représente-t-il au total ?",
      "en": "A project uses 2 pieces of lumber measuring 2 in × 6 in × 8 ft and 1 piece measuring 2 in × 4 in × 12 ft. How many board feet does this represent in total?",
      "choices": [
       {
        "fr": "24 pi-planche",
        "en": "24 board feet",
        "correct": true
       },
       {
        "fr": "22 pi-planche",
        "en": "22 board feet",
        "correct": false
       },
       {
        "fr": "16 pi-planche",
        "en": "16 board feet",
        "correct": false
       },
       {
        "fr": "32 pi-planche",
        "en": "32 board feet",
        "correct": false
       }
      ],
      "explFr": "2 × [(2×6×8)/12 = 8] = 16 ; plus (2×4×12)/12 = 8 ; total = 16 + 8 = 24 pi-planche.",
      "explEn": "2 × [(2×6×8)/12 = 8] = 16; plus (2×4×12)/12 = 8; total = 16 + 8 = 24 board feet."
     },
     {
      "fr": "Quelle est la principale différence entre une vue en coupe et une élévation sur un plan ?",
      "en": "What is the main difference between a section view and an elevation on a drawing?",
      "choices": [
       {
        "fr": "La coupe montre l'intérieur d'un élément tranché, l'élévation montre une façade extérieure complète",
        "en": "A section shows the sliced interior of an element, while an elevation shows a full exterior face",
        "correct": true
       },
       {
        "fr": "Les deux termes désignent des vues utilisées seulement en structure",
        "en": "Both terms refer to views used only in structural drawings",
        "correct": false
       },
       {
        "fr": "L'élévation montre surtout l'aménagement intérieur des pièces",
        "en": "An elevation mainly shows the interior room layout",
        "correct": false
       },
       {
        "fr": "La coupe sert surtout à indiquer l'orientation du bâtiment",
        "en": "A section is mainly used to indicate the building's orientation",
        "correct": false
       }
      ],
      "explFr": "La coupe révèle l'assemblage interne, alors que l'élévation illustre l'apparence d'une façade.",
      "explEn": "A section reveals internal assembly, while an elevation illustrates the appearance of a facade."
     },
     {
      "type": "tf",
      "fr": "En cas de conflit entre les plans et le devis (spécifications écrites), le devis a généralement préséance.",
      "en": "In case of conflict between the drawings and the specifications (written specs), the specs generally take precedence.",
      "isTrue": true,
      "explFr": "C'est une convention courante en construction, bien qu'il faille toujours valider avec le professionnel concerné.",
      "explEn": "This is a common construction convention, though it should always be confirmed with the relevant professional."
     },
     {
      "fr": "Pour un mur de 40 pieds linéaires nécessitant une lisse basse en une seule longueur, avec 10 % de perte prévue, combien de pieds de matériau commander ?",
      "en": "For a 40-linear-foot wall needing a bottom plate, with 10% waste allowance, how many feet of material should be ordered?",
      "choices": [
       {
        "fr": "44 pieds",
        "en": "44 feet",
        "correct": true
       },
       {
        "fr": "40 pieds",
        "en": "40 feet",
        "correct": false
       },
       {
        "fr": "50 pieds",
        "en": "50 feet",
        "correct": false
       },
       {
        "fr": "36 pieds",
        "en": "36 feet",
        "correct": false
       }
      ],
      "explFr": "40 pi × 1,10 = 44 pi, pour couvrir les pertes de coupe.",
      "explEn": "40 ft × 1.10 = 44 ft, to cover cutting waste."
     },
     {
      "fr": "La flèche nord sur un plan de site sert principalement à :",
      "en": "The north arrow on a site plan mainly serves to:",
      "choices": [
       {
        "fr": "Orienter le bâtiment par rapport au soleil et aux vents dominants",
        "en": "Orient the building relative to the sun and prevailing winds",
        "correct": true
       },
       {
        "fr": "Indiquer l'emplacement de la cuisine",
        "en": "Indicate the location of the kitchen",
        "correct": false
       },
       {
        "fr": "Remplacer l'échelle du plan",
        "en": "Replace the drawing's scale",
        "correct": false
       },
       {
        "fr": "Montrer la hauteur du bâtiment",
        "en": "Show the building's height",
        "correct": false
       }
      ],
      "explFr": "L'orientation influence l'ensoleillement des pièces et l'efficacité énergétique.",
      "explEn": "Orientation affects room sunlight exposure and energy efficiency."
     },
     {
      "type": "tf",
      "fr": "Un numéro de rappel de détail (callout) sur un plan renvoie à un dessin plus précis situé ailleurs dans les documents.",
      "en": "A detail callout number on a drawing refers to a more precise drawing located elsewhere in the documents.",
      "isTrue": true,
      "explFr": "Cela permet d'agrandir une zone complexe sans surcharger le plan principal.",
      "explEn": "This allows a complex area to be enlarged without cluttering the main drawing."
     },
     {
      "fr": "Une pièce mesure 3/8 po et une autre 1/4 po. Une fois assemblées, on doit retrancher 1/8 po pour l'ajustement final. Quelle est la dimension finale, réduite à sa plus simple expression ?",
      "en": "One piece measures 3/8 in and another 1/4 in. Once assembled, 1/8 in must be trimmed off for the final fit. What is the final dimension, reduced to its simplest form?",
      "choices": [
       {
        "fr": "1/2 po",
        "en": "1/2 in",
        "correct": true
       },
       {
        "fr": "5/8 po",
        "en": "5/8 in",
        "correct": false
       },
       {
        "fr": "3/8 po",
        "en": "3/8 in",
        "correct": false
       },
       {
        "fr": "5/16 po",
        "en": "5/16 in",
        "correct": false
       }
      ],
      "explFr": "3/8 + 1/4 = 5/8 po ; 5/8 − 1/8 = 4/8 = 1/2 po.",
      "explEn": "3/8 + 1/4 = 5/8 in; 5/8 − 1/8 = 4/8 = 1/2 in."
     },
     {
      "type": "tf",
      "fr": "Une modification effectuée sur le chantier qui change la portée des travaux prévus au contrat nécessite généralement un avis de changement (change order).",
      "en": "A field modification that changes the scope of work in the contract generally requires a change order.",
      "isTrue": true,
      "explFr": "Cela protège à la fois l'entrepreneur et le client sur le plan des coûts et des responsabilités.",
      "explEn": "This protects both the contractor and the client regarding costs and responsibilities."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un plan à l'échelle 1/4 po = 1 pi montre un mur mesurant 5 po sur le dessin. Quelle est sa longueur réelle ?",
      "en": "A drawing at 1/4 in = 1 ft scale shows a wall measuring 5 in on the drawing. What is its real length?",
      "choices": [
       {
        "fr": "20 pieds",
        "en": "20 feet",
        "correct": true
       },
       {
        "fr": "5 pieds",
        "en": "5 feet",
        "correct": false
       },
       {
        "fr": "80 pieds",
        "en": "80 feet",
        "correct": false
       },
       {
        "fr": "1,25 pied",
        "en": "1.25 feet",
        "correct": false
       }
      ],
      "explFr": "5 po ÷ (1/4 po par pied) = 5 × 4 = 20 pieds.",
      "explEn": "5 in ÷ (1/4 in per foot) = 5 × 4 = 20 feet."
     },
     {
      "type": "tf",
      "fr": "Sur un plan de fondation, une ligne pointillée représente généralement un élément caché ou situé sous la ligne de coupe, comme une semelle sous le niveau du sol.",
      "en": "On a foundation plan, a dashed line generally represents a hidden element or one located below the cut line, such as a footing below grade.",
      "isTrue": true,
      "explFr": "Les lignes pleines représentent les éléments visibles au niveau de la coupe, les pointillées les éléments cachés.",
      "explEn": "Solid lines represent elements visible at the cut plane, dashed lines represent hidden elements."
     },
     {
      "fr": "Un projet nécessite 340 pieds-planche de bois de charpente. Le bois est vendu en pièces de 2 po × 6 po × 10 pi. Combien de pièces complètes faut-il commander (arrondi au nombre entier supérieur) ?",
      "en": "A project needs 340 board feet of framing lumber. The lumber is sold in pieces measuring 2 in × 6 in × 10 ft. How many full pieces must be ordered (rounded up)?",
      "choices": [
       {
        "fr": "35 pièces",
        "en": "35 pieces",
        "correct": true
       },
       {
        "fr": "34 pièces",
        "en": "34 pieces",
        "correct": false
       },
       {
        "fr": "17 pièces",
        "en": "17 pieces",
        "correct": false
       },
       {
        "fr": "68 pièces",
        "en": "68 pieces",
        "correct": false
       }
      ],
      "explFr": "Une pièce = (2×6×10)/12 = 10 pi-planche. 340 ÷ 10 = 34 pièces exactement, mais on arrondit généralement à 35 pour prévoir les pertes.",
      "explEn": "One piece = (2×6×10)/12 = 10 board feet. 340 ÷ 10 = 34 pieces exactly, but 35 is typically ordered to allow for waste."
     },
     {
      "fr": "Dans un devis descriptif, la clause générale précise que les matériaux doivent être « équivalents ou approuvés ». Que signifie cette clause pour l'entrepreneur ?",
      "en": "In a written specification, a general clause states materials must be \"equal or approved.\" What does this clause mean for the contractor?",
      "choices": [
       {
        "fr": "Un produit de remplacement peut être proposé s'il respecte des critères équivalents, sous réserve d'approbation du professionnel",
        "en": "A substitute product may be proposed if it meets equivalent criteria, subject to the professional's approval",
        "correct": true
       },
       {
        "fr": "N'importe quel produit moins cher peut être librement substitué sans avis",
        "en": "Any cheaper product can be freely substituted without notice",
        "correct": false
       },
       {
        "fr": "Seul le produit nommé explicitement dans le devis peut être utilisé",
        "en": "Only the product explicitly named in the spec can be used",
        "correct": false
       },
       {
        "fr": "La clause s'applique seulement aux projets financés publiquement",
        "en": "The clause only applies to publicly funded projects",
        "correct": false
       }
      ],
      "explFr": "Cette clause permet une certaine flexibilité tout en maintenant un contrôle qualité via l'approbation du professionnel.",
      "explEn": "This clause allows some flexibility while maintaining quality control through the professional's approval."
     },
     {
      "type": "tf",
      "fr": "Si une cote inscrite sur un plan et une mesure prise à l'échelle sur ce même plan donnent des résultats différents, l'entrepreneur peut choisir librement laquelle utiliser selon sa préférence.",
      "en": "If a dimension written on a drawing and a scaled measurement on that same drawing give different results, the contractor can freely choose which one to use based on preference.",
      "isTrue": false,
      "explFr": "La cote inscrite est la référence fiable, mais toute divergence importante devrait être signalée au professionnel plutôt que résolue unilatéralement par l'entrepreneur.",
      "explEn": "The written dimension is the reliable reference, but any significant discrepancy should be flagged to the professional rather than resolved unilaterally by the contractor."
     },
     {
      "fr": "Un plancher rectangulaire mesure 32 pi × 24 pi. Le devis exige un panneau de sous-plancher de 4 pi × 8 pi avec 10 % de perte. Combien de panneaux complets commander ?",
      "en": "A rectangular floor measures 32 ft × 24 ft. The spec requires 4 ft × 8 ft subfloor panels with 10% waste. How many full panels should be ordered?",
      "choices": [
       {
        "fr": "27 panneaux",
        "en": "27 panels",
        "correct": true
       },
       {
        "fr": "24 panneaux",
        "en": "24 panels",
        "correct": false
       },
       {
        "fr": "32 panneaux",
        "en": "32 panels",
        "correct": false
       },
       {
        "fr": "22 panneaux",
        "en": "22 panels",
        "correct": false
       }
      ],
      "explFr": "Surface = 32×24 = 768 pi². Un panneau couvre 32 pi². 768/32 = 24 panneaux, ×1,10 ≈ 26,4, arrondi à 27.",
      "explEn": "Area = 32×24 = 768 sq ft. One panel covers 32 sq ft. 768/32 = 24 panels, ×1.10 ≈ 26.4, rounded up to 27."
     },
     {
      "fr": "Deux plans (architecture et structure) montrent des dimensions différentes pour le même mur. Quelle est la démarche appropriée ?",
      "en": "Two drawings (architectural and structural) show different dimensions for the same wall. What is the appropriate course of action?",
      "choices": [
       {
        "fr": "Signaler l'incohérence au professionnel responsable pour clarification avant de poursuivre",
        "en": "Report the inconsistency to the responsible professional for clarification before proceeding",
        "correct": true
       },
       {
        "fr": "Utiliser systématiquement le plan d'architecture sans vérifier",
        "en": "Always use the architectural drawing without checking",
        "correct": false
       },
       {
        "fr": "Faire une moyenne entre les deux dimensions",
        "en": "Average the two dimensions",
        "correct": false
       },
       {
        "fr": "Continuer les travaux selon sa propre estimation",
        "en": "Proceed with the work based on your own estimate",
        "correct": false
       }
      ],
      "explFr": "Une incohérence entre documents doit toujours être clarifiée par le professionnel avant de procéder, pour éviter des erreurs coûteuses.",
      "explEn": "An inconsistency between documents must always be clarified by the professional before proceeding, to avoid costly errors."
     },
     {
      "type": "tf",
      "fr": "Un avenant (addendum) émis pendant la période d'appel d'offres modifie officiellement les documents contractuels d'origine.",
      "en": "An addendum issued during the tender period officially modifies the original contract documents.",
      "isTrue": true,
      "explFr": "Les soumissionnaires doivent tenir compte de tous les addenda émis avant de déposer leur soumission.",
      "explEn": "Bidders must account for all addenda issued before submitting their bid."
     },
     {
      "fr": "Une pièce de bois doit être coupée à 47 & 5/8 po, mais la scie ne peut lire que des graduations en seizièmes. À quelle graduation équivalente doit-on régler la coupe ?",
      "en": "A piece of lumber must be cut to 47 & 5/8 in, but the saw can only read sixteenths graduations. To which equivalent graduation should the cut be set?",
      "choices": [
       {
        "fr": "47 & 10/16 po (soit l'équivalent exact de 47 & 5/8 po)",
        "en": "47 & 10/16 in (the exact equivalent of 47 & 5/8 in)",
        "correct": true
       },
       {
        "fr": "47 & 3/16 po",
        "en": "47 & 3/16 in",
        "correct": false
       },
       {
        "fr": "47 & 1/4 po",
        "en": "47 & 1/4 in",
        "correct": false
       },
       {
        "fr": "47 & 3/8 po",
        "en": "47 & 3/8 in",
        "correct": false
       }
      ],
      "explFr": "5/8 po converti en seizièmes est 10/16 po (5/8 = 10/16), la graduation exacte à utiliser sur la scie.",
      "explEn": "5/8 in converted to sixteenths is 10/16 in (5/8 = 10/16), the exact graduation to use on the saw."
     },
     {
      "type": "tf",
      "fr": "Un plan « tel que construit » (as-built) documente les modifications réellement réalisées sur le chantier, qui peuvent différer du plan original.",
      "en": "An as-built drawing documents the modifications actually made on site, which may differ from the original plan.",
      "isTrue": true,
      "explFr": "Ce document est essentiel pour l'entretien futur et pour toute rénovation subséquente du bâtiment.",
      "explEn": "This document is essential for future maintenance and any subsequent renovation of the building."
     }
    ]
   }
  ]
 },
 {
  "id": "charp04",
  "order": 4,
  "code": "",
  "hours": 90,
  "title_fr": "Nivellement et échafaudage",
  "title_en": "Leveling & Scaffolding",
  "icon": "🪜",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel instrument permet de projeter une ligne de niveau sur de longues distances avec précision ?",
      "en": "Which instrument projects a level line accurately over long distances?",
      "choices": [
       {
        "fr": "Niveau laser",
        "en": "Laser level",
        "correct": true
       },
       {
        "fr": "Niveau à bulle",
        "en": "Spirit level",
        "correct": false
       },
       {
        "fr": "Équerre",
        "en": "Square",
        "correct": false
       },
       {
        "fr": "Ruban à mesurer",
        "en": "Tape measure",
        "correct": false
       }
      ],
      "explFr": "Le niveau laser projette un plan ou une ligne de référence sur de grandes distances.",
      "explEn": "A laser level projects a reference plane or line over large distances."
     },
     {
      "fr": "Avant de monter sur un échafaudage, que doit-on vérifier en premier ?",
      "en": "Before climbing a scaffold, what should be checked first?",
      "choices": [
       {
        "fr": "Que la base est stable, de niveau, et que les composantes sont bien verrouillées",
        "en": "That the base is stable, level, and that all components are securely locked",
        "correct": true
       },
       {
        "fr": "Que les planches ont été repeintes récemment",
        "en": "That the planks have been recently repainted",
        "correct": false
       },
       {
        "fr": "Que le poids total des outils est inférieur à 50 kg",
        "en": "That the total tool weight is under 50 kg",
        "correct": false
       },
       {
        "fr": "Que la météo est ensoleillée pour la journée",
        "en": "That the weather is sunny for the day",
        "correct": false
       }
      ],
      "explFr": "Une base instable est la cause principale de basculement d'échafaudage.",
      "explEn": "An unstable base is the main cause of scaffold tip-overs."
     },
     {
      "fr": "Que signifie « mise à niveau » d'une structure ?",
      "en": "What does \"leveling\" a structure mean?",
      "choices": [
       {
        "fr": "Ajuster une surface pour qu'elle soit parfaitement horizontale",
        "en": "Adjusting a surface so it is perfectly horizontal",
        "correct": true
       },
       {
        "fr": "Renforcer une surface avant d'y appliquer une charge",
        "en": "Reinforcing a surface before applying a load to it",
        "correct": false
       },
       {
        "fr": "Calculer la surface totale d'une pièce",
        "en": "Calculating a room's total floor area",
        "correct": false
       },
       {
        "fr": "Identifier les matériaux nécessaires à un mur",
        "en": "Identifying the materials needed for a wall",
        "correct": false
       }
      ],
      "explFr": "Le nivellement assure une base horizontale essentielle à la stabilité.",
      "explEn": "Leveling ensures a horizontal base essential to stability."
     },
     {
      "fr": "Que vérifie un fil à plomb (plumb bob) ?",
      "en": "What does a plumb bob check?",
      "choices": [
       {
        "fr": "La verticalité d'un élément",
        "en": "The verticality of an element",
        "correct": true
       },
       {
        "fr": "L'horizontalité d'un élément",
        "en": "The horizontality of an element",
        "correct": false
       },
       {
        "fr": "La température",
        "en": "The temperature",
        "correct": false
       },
       {
        "fr": "La distance entre deux points",
        "en": "The distance between two points",
        "correct": false
       }
      ],
      "explFr": "Le fil à plomb utilise la gravité pour indiquer une ligne parfaitement verticale.",
      "explEn": "A plumb bob uses gravity to indicate a perfectly vertical line."
     },
     {
      "type": "tf",
      "fr": "Un garde-corps suffit toujours à lui seul, peu importe la hauteur de l'échafaudage, sans système antichute additionnel.",
      "en": "A guardrail is always sufficient on its own, no matter the scaffold height, without an additional fall-arrest system.",
      "isTrue": false,
      "explFr": "Au-delà de certaines hauteurs (ex. 3 m), un système de protection contre les chutes doit compléter le garde-corps.",
      "explEn": "Beyond certain heights (e.g., 3 m), a fall-protection system must complement the guardrail."
     },
     {
      "fr": "Après avoir mis de niveau un premier point de référence, comment transfère-t-on ce niveau à un point éloigné avec précision ?",
      "en": "After leveling a first reference point, how do you accurately transfer that level to a distant point?",
      "choices": [
       {
        "fr": "À l'aide d'un niveau laser ou d'un tuyau de niveau rempli d'eau",
        "en": "Using a laser level or a water-filled leveling hose",
        "correct": true
       },
       {
        "fr": "En reproduisant approximativement la hauteur à l'œil",
        "en": "By roughly eyeballing the height",
        "correct": false
       },
       {
        "fr": "En mesurant uniquement la distance horizontale au ruban",
        "en": "By measuring only the horizontal distance with a tape",
        "correct": false
       },
       {
        "fr": "En orientant une boussole vers le nord magnétique",
        "en": "By orienting a compass toward magnetic north",
        "correct": false
       }
      ],
      "explFr": "Le niveau laser ou le tuyau de niveau permettent un transfert précis sur de longues distances.",
      "explEn": "A laser level or water level hose allow accurate transfer over long distances."
     },
     {
      "type": "tf",
      "fr": "Un niveau à bulle mal calibré peut donner une fausse indication même si la bulle semble centrée.",
      "en": "A poorly calibrated spirit level can give a false reading even if the bubble appears centered.",
      "isTrue": true,
      "explFr": "Un outil mal calibré doit être vérifié périodiquement, sinon il peut induire en erreur.",
      "explEn": "A poorly calibrated tool should be checked periodically, or it can be misleading."
     },
     {
      "fr": "Où se trouvent les deux travailleurs sur cette photo ?",
      "en": "Where are the two workers located in this photo?",
      "choices": [
       {
        "fr": "Sur un échafaudage, en hauteur",
        "en": "On a scaffold, up high",
        "correct": true
       },
       {
        "fr": "Sur le toit d'une maison",
        "en": "On a house roof",
        "correct": false
       },
       {
        "fr": "Dans une fosse d'excavation",
        "en": "In an excavation pit",
        "correct": false
       },
       {
        "fr": "Sur une échelle simple",
        "en": "On a simple ladder",
        "correct": false
       }
      ],
      "explFr": "La structure tubulaire avec plateformes et garde-corps visible sur la photo est un échafaudage.",
      "explEn": "The tubular structure with platforms and guardrails shown in the photo is a scaffold."
     },
     {
      "type": "tf",
      "fr": "Les deux travailleurs sur cette photo portent un casque de protection.",
      "en": "Both workers in this photo are wearing a hard hat.",
      "isTrue": true,
      "explFr": "Un casque est visible sur la tête de chacun des deux travailleurs.",
      "explEn": "A helmet is visible on both workers' heads."
     },
     {
      "fr": "À quoi servent les « chaises d'implantation » (batter boards) sur un chantier ?",
      "en": "What are batter boards used for on a job site?",
      "choices": [
       {
        "fr": "Établir et conserver des lignes de référence précises pour l'implantation d'un bâtiment",
        "en": "Establishing and preserving precise reference lines for laying out a building",
        "correct": true
       },
       {
        "fr": "Supporter temporairement le poids de la charpente du toit",
        "en": "Temporarily supporting the weight of the roof framing",
        "correct": false
       },
       {
        "fr": "Remplacer les semelles de fondation en sol instable",
        "en": "Replacing foundation footings on unstable soil",
        "correct": false
       },
       {
        "fr": "Mesurer la température du sol avant l'excavation",
        "en": "Measuring soil temperature before excavation",
        "correct": false
       }
      ],
      "explFr": "Les chaises d'implantation permettent de retracer les lignes exactes du bâtiment en tout temps.",
      "explEn": "Batter boards allow the exact building lines to be re-established at any time."
     },
     {
      "fr": "Qu'est-ce qu'un niveau de chantier (transit/théodolite) permet de faire, en plus du nivellement ?",
      "en": "What can a transit/theodolite do in addition to leveling?",
      "choices": [
       {
        "fr": "Mesurer des angles horizontaux et verticaux avec précision",
        "en": "Precisely measure horizontal and vertical angles",
        "correct": true
       },
       {
        "fr": "Couper le bois selon un angle prédéterminé",
        "en": "Cut wood at a predetermined angle",
        "correct": false
       },
       {
        "fr": "Sceller les joints d'un coffrage de béton",
        "en": "Seal the joints of concrete formwork",
        "correct": false
       },
       {
        "fr": "Peser les matériaux livrés sur le chantier",
        "en": "Weigh materials delivered to the site",
        "correct": false
       }
      ],
      "explFr": "Le théodolite combine nivellement et mesure d'angles pour l'arpentage de précision.",
      "explEn": "A theodolite combines leveling and angle measurement for precise surveying."
     },
     {
      "fr": "Que signifie une étiquette verte apposée sur un échafaudage après inspection ?",
      "en": "What does a green tag on a scaffold indicate after inspection?",
      "choices": [
       {
        "fr": "L'échafaudage a été inspecté et est sécuritaire à utiliser",
        "en": "The scaffold has been inspected and is safe to use",
        "correct": true
       },
       {
        "fr": "L'échafaudage appartient à une entreprise en particulier",
        "en": "The scaffold belongs to a specific company",
        "correct": false
       },
       {
        "fr": "L'échafaudage doit être repeint avant la prochaine utilisation",
        "en": "The scaffold must be repainted before its next use",
        "correct": false
       },
       {
        "fr": "L'échafaudage a été récemment déplacé sur le chantier",
        "en": "The scaffold was recently moved on site",
        "correct": false
       }
      ],
      "explFr": "Le système de couleurs (vert/jaune/rouge) indique rapidement l'état sécuritaire d'un échafaudage.",
      "explEn": "The color-tag system (green/yellow/red) quickly indicates a scaffold's safety status."
     },
     {
      "fr": "Pourquoi tend-on un cordeau (string line) entre deux piquets lors de l'implantation d'un mur ?",
      "en": "Why is a string line stretched between two stakes when laying out a wall?",
      "choices": [
       {
        "fr": "Pour obtenir une ligne droite de référence sur toute la longueur",
        "en": "To provide a straight reference line along the full length",
        "correct": true
       },
       {
        "fr": "Pour indiquer l'emplacement des prises électriques",
        "en": "To mark the location of electrical outlets",
        "correct": false
       },
       {
        "fr": "Pour mesurer la profondeur d'une tranchée",
        "en": "To measure the depth of a trench",
        "correct": false
       },
       {
        "fr": "Pour délimiter la zone de stationnement des camions",
        "en": "To mark off the truck parking area",
        "correct": false
       }
      ],
      "explFr": "Le cordeau tendu garantit l'alignement rectiligne d'un mur ou d'une fondation.",
      "explEn": "A taut string line ensures the straight alignment of a wall or foundation."
     },
     {
      "fr": "Que doit-on vérifier concernant la capacité portante avant d'utiliser un échafaudage ?",
      "en": "What must be checked regarding load capacity before using a scaffold?",
      "choices": [
       {
        "fr": "La capacité maximale indiquée par le fabricant, pour ne pas la dépasser",
        "en": "The maximum capacity specified by the manufacturer, so it isn't exceeded",
        "correct": true
       },
       {
        "fr": "Le nombre total de planches utilisées dans la structure",
        "en": "The total number of planks used in the structure",
        "correct": false
       },
       {
        "fr": "La couleur des composantes métalliques de l'échafaudage",
        "en": "The color of the scaffold's metal components",
        "correct": false
       },
       {
        "fr": "La date de fabrication inscrite sur les pièces",
        "en": "The manufacturing date printed on the parts",
        "correct": false
       }
      ],
      "explFr": "Dépasser la capacité portante peut causer l'effondrement de l'échafaudage.",
      "explEn": "Exceeding the load capacity can cause the scaffold to collapse."
     },
     {
      "fr": "Quelle est l'utilité principale d'un niveau laser rotatif sur un grand chantier ?",
      "en": "What is the main benefit of a rotating laser level on a large job site?",
      "choices": [
       {
        "fr": "Assurer l'alignement vertical et horizontal sur de grandes surfaces",
        "en": "Ensuring vertical and horizontal alignment over large areas",
        "correct": true
       },
       {
        "fr": "Remplacer entièrement le besoin de mesurer manuellement",
        "en": "Fully eliminating the need for manual measurement",
        "correct": false
       },
       {
        "fr": "Servir uniquement d'outil de démonstration en formation",
        "en": "Serving only as a training demonstration tool",
        "correct": false
       },
       {
        "fr": "Couper des matériaux rigides avec précision",
        "en": "Precisely cutting rigid materials",
        "correct": false
       }
      ],
      "explFr": "Le faisceau rotatif projette une référence continue visible sur toute la surface du chantier.",
      "explEn": "The rotating beam projects a continuous reference visible across the whole site."
     },
     {
      "type": "tf",
      "fr": "Une échelle droite doit être positionnée selon un écart à la base d'environ le quart de la hauteur utilisée.",
      "en": "A straight ladder should be positioned with a base offset of about one quarter of the height used.",
      "isTrue": true,
      "explFr": "C'est la règle du 4 pour 1, qui donne un angle sécuritaire d'environ 75°.",
      "explEn": "This is the 4-to-1 rule, which gives a safe angle of about 75°."
     },
     {
      "type": "tf",
      "fr": "Un échafaudage portant une étiquette rouge peut être utilisé sans restriction.",
      "en": "A scaffold tagged with a red label can be used without restriction.",
      "isTrue": false,
      "explFr": "Une étiquette rouge signifie que l'échafaudage est dangereux et ne doit pas être utilisé.",
      "explEn": "A red tag means the scaffold is dangerous and must not be used."
     },
     {
      "type": "tf",
      "fr": "Le nivellement au laser permet de transférer un point de référence sur de longues distances plus rapidement qu'avec un niveau à bulle traditionnel.",
      "en": "Laser leveling allows a reference point to be transferred over long distances faster than with a traditional spirit level.",
      "isTrue": true,
      "explFr": "Le faisceau laser couvre instantanément de grandes distances, contrairement au report manuel avec un niveau à bulle.",
      "explEn": "The laser beam instantly covers long distances, unlike manually transferring a point with a spirit level."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pour établir un niveau constant sur une longue distance à l'intérieur d'un bâtiment, quel outil est le plus efficace ?",
      "en": "To establish a consistent level over a long distance inside a building, which tool is most efficient?",
      "choices": [
       {
        "fr": "Un niveau laser rotatif",
        "en": "A rotary laser level",
        "correct": true
       },
       {
        "fr": "Un niveau à bulle de 24 pouces",
        "en": "A 24-inch bubble level",
        "correct": false
       },
       {
        "fr": "Un fil à plomb",
        "en": "A plumb bob",
        "correct": false
       },
       {
        "fr": "Une équerre combinée",
        "en": "A combination square",
        "correct": false
       }
      ],
      "explFr": "Le laser rotatif projette une référence de niveau constante sur toute la pièce.",
      "explEn": "The rotary laser projects a constant level reference throughout the room."
     },
     {
      "type": "tf",
      "fr": "Un échafaudage doit être vérifié à l'aide d'un niveau pour être à la fois d'aplomb et de niveau avant utilisation.",
      "en": "A scaffold must be checked with a level to be both plumb and level before use.",
      "isTrue": true,
      "explFr": "Un échafaudage non stable augmente considérablement le risque de chute ou de renversement.",
      "explEn": "An unstable scaffold greatly increases the risk of falling or tipping."
     },
     {
      "fr": "Une rampe monte de 1,2 m sur une distance horizontale de 8 m. Le code exige une pente maximale de 1:12 (environ 8,3 %) pour une rampe accessible. Cette rampe respecte-t-elle cette exigence ?",
      "en": "A ramp rises 1.2 m over a horizontal distance of 8 m. Code requires a maximum slope of 1:12 (about 8.3%) for an accessible ramp. Does this ramp meet that requirement?",
      "choices": [
       {
        "fr": "Non, sa pente de 15 % dépasse la limite de 8,3 %",
        "en": "No, its 15% slope exceeds the 8.3% limit",
        "correct": true
       },
       {
        "fr": "Oui, sa pente de 15 % respecte la limite",
        "en": "Yes, its 15% slope meets the limit",
        "correct": false
       },
       {
        "fr": "Oui, car seule la hauteur totale compte, pas le pourcentage",
        "en": "Yes, since only the total rise matters, not the percentage",
        "correct": false
       },
       {
        "fr": "Non, car la limite applicable ici est plutôt de 5 %",
        "en": "No, because the applicable limit here is actually 5%",
        "correct": false
       }
      ],
      "explFr": "Pente = 1,2/8 = 15 %, ce qui dépasse la limite d'environ 8,3 % (1:12) exigée pour une rampe accessible.",
      "explEn": "Slope = 1.2/8 = 15%, exceeding the roughly 8.3% (1:12) limit required for an accessible ramp."
     },
     {
      "fr": "Selon les pratiques courantes, à partir de quelle hauteur de plateforme d'échafaudage un garde-corps est-il généralement requis ?",
      "en": "According to common practice, at what scaffold platform height is a guardrail generally required?",
      "choices": [
       {
        "fr": "Environ 3 mètres ou plus",
        "en": "About 3 meters or more",
        "correct": true
       },
       {
        "fr": "Seulement au-delà de 6 mètres, selon une pratique moins courante",
        "en": "Only beyond 6 meters, per a less common practice",
        "correct": false
       },
       {
        "fr": "Seulement au-delà de 10 mètres",
        "en": "Only beyond 10 meters",
        "correct": false
       },
       {
        "fr": "Uniquement à l'intérieur d'un bâtiment",
        "en": "Only inside a building",
        "correct": false
       }
      ],
      "explFr": "Au-delà de cette hauteur, le risque de chute grave justifie une protection collective.",
      "explEn": "Beyond this height, the risk of serious falls justifies collective protection."
     },
     {
      "type": "tf",
      "fr": "Les stabilisateurs (outriggers) d'un échafaudage augmentent sa base d'appui et réduisent le risque de renversement.",
      "en": "Scaffold outriggers increase its footprint and reduce the risk of tipping over.",
      "isTrue": true,
      "explFr": "Une base plus large améliore la stabilité, surtout en hauteur.",
      "explEn": "A wider base improves stability, especially at height."
     },
     {
      "fr": "Un niveau à eau (tuyau rempli d'eau) fonctionne selon quel principe physique ?",
      "en": "A water level (water-filled tube) works based on which physical principle?",
      "choices": [
       {
        "fr": "Les vases communicants : l'eau trouve le même niveau aux deux extrémités",
        "en": "Communicating vessels: water finds the same level at both ends",
        "correct": true
       },
       {
        "fr": "La pression atmosphérique variable selon l'altitude",
        "en": "Atmospheric pressure varying with altitude",
        "correct": false
       },
       {
        "fr": "La tension de surface de l'eau",
        "en": "The surface tension of water",
        "correct": false
       },
       {
        "fr": "La densité de l'air ambiant",
        "en": "The density of the surrounding air",
        "correct": false
       }
      ],
      "explFr": "L'eau cherche toujours son propre niveau, peu importe la forme du contenant.",
      "explEn": "Water always seeks its own level, regardless of the container's shape."
     },
     {
      "fr": "Quel est le rôle principal des piquets de repère (chaises d'implantation / batter boards) lors du traçage d'une fondation ?",
      "en": "What is the main role of batter boards when laying out a foundation?",
      "choices": [
       {
        "fr": "Maintenir des lignes de référence précises pour l'excavation et le coulage",
        "en": "Maintaining precise reference lines for excavation and pouring",
        "correct": true
       },
       {
        "fr": "Servir uniquement de décoration au chantier",
        "en": "Serving only as site decoration",
        "correct": false
       },
       {
        "fr": "Remplacer le besoin d'un niveau",
        "en": "Replacing the need for a level",
        "correct": false
       },
       {
        "fr": "Empêcher la pluie d'atteindre le sol",
        "en": "Preventing rain from reaching the ground",
        "correct": false
       }
      ],
      "explFr": "Elles permettent de retrouver rapidement les lignes de fondation après l'excavation.",
      "explEn": "They allow foundation lines to be quickly re-established after excavation."
     },
     {
      "type": "tf",
      "fr": "Un système d'étiquetage d'échafaudage (par exemple vert/jaune/rouge) indique son statut sécuritaire à un moment donné.",
      "en": "A scaffold tagging system (e.g., green/yellow/red) indicates its safety status at a given time.",
      "isTrue": true,
      "explFr": "Cela permet à tous les travailleurs de savoir rapidement si l'échafaudage est sécuritaire à utiliser.",
      "explEn": "This lets all workers quickly know whether the scaffold is safe to use."
     },
     {
      "fr": "En utilisant un point de repère (benchmark) à une élévation connue de 100,00 m, une lecture de mire de 1,25 m au repère et de 0,80 m au point visé donnent quelle élévation au point visé ?",
      "en": "Using a benchmark at a known elevation of 100.00 m, a rod reading of 1.25 m at the benchmark and 0.80 m at the target point give what elevation at the target point?",
      "choices": [
       {
        "fr": "100,45 m",
        "en": "100.45 m",
        "correct": true
       },
       {
        "fr": "99,55 m",
        "en": "99.55 m",
        "correct": false
       },
       {
        "fr": "101,25 m",
        "en": "101.25 m",
        "correct": false
       },
       {
        "fr": "100,80 m",
        "en": "100.80 m",
        "correct": false
       }
      ],
      "explFr": "Hauteur d'instrument = 100,00 + 1,25 = 101,25 m ; élévation du point = 101,25 − 0,80 = 100,45 m.",
      "explEn": "Instrument height = 100.00 + 1.25 = 101.25 m; point elevation = 101.25 − 0.80 = 100.45 m."
     },
     {
      "type": "tf",
      "fr": "Sur un sol meuble, il faut placer des semelles (madriers) sous les pieds d'un échafaudage pour répartir la charge.",
      "en": "On soft ground, mudsills (planks) must be placed under scaffold legs to distribute the load.",
      "isTrue": true,
      "explFr": "Sans cela, les pieds peuvent s'enfoncer inégalement et déstabiliser la structure.",
      "explEn": "Without this, the legs can sink unevenly and destabilize the structure."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un niveau laser rotatif affiche une lecture de 1,850 m sur une mire tenue à un point A, et de 1,620 m à un point B. Quelle est la différence d'élévation entre A et B ?",
      "en": "A rotary laser shows a reading of 1.850 m on a rod held at point A, and 1.620 m at point B. What is the elevation difference between A and B?",
      "choices": [
       {
        "fr": "B est 0,230 m plus haut que A",
        "en": "B is 0.230 m higher than A",
        "correct": true
       },
       {
        "fr": "A est 0,230 m plus haut que B",
        "en": "A is 0.230 m higher than B",
        "correct": false
       },
       {
        "fr": "Les deux points sont à la même élévation",
        "en": "Both points are at the same elevation",
        "correct": false
       },
       {
        "fr": "B est 3,470 m plus haut que A",
        "en": "B is 3.470 m higher than A",
        "correct": false
       }
      ],
      "explFr": "Une lecture de mire plus faible signifie que le point est plus élevé (moins de tige visible sous le rayon) : 1,850 − 1,620 = 0,230 m plus haut à B.",
      "explEn": "A smaller rod reading means the point is higher (less rod visible below the beam): 1.850 − 1.620 = 0.230 m higher at B."
     },
     {
      "type": "tf",
      "fr": "Un échafaudage à cadres (frame scaffold) monté sur un sol en pente doit utiliser des vérins (screw jacks) réglables plutôt que des cales de bois empilées pour compenser la dénivellation.",
      "en": "A frame scaffold erected on sloped ground should use adjustable screw jacks rather than stacked wood blocks to compensate for the grade difference.",
      "isTrue": true,
      "explFr": "Les vérins offrent un réglage fin et sécuritaire, alors que des cales empilées peuvent glisser ou basculer.",
      "explEn": "Screw jacks provide fine, safe adjustment, while stacked blocks can slip or tip."
     },
     {
      "fr": "Un terrain descend de 2,4 m sur une distance horizontale de 60 m. Exprimée en degrés (approximation pour petits angles), à quoi correspond approximativement cette pente ?",
      "en": "A slope of land drops 2.4 m over a horizontal distance of 60 m. Expressed in degrees (small-angle approximation), what does this slope roughly correspond to?",
      "choices": [
       {
        "fr": "Environ 2,3° (pente de 4 %)",
        "en": "About 2.3° (4% slope)",
        "correct": true
       },
       {
        "fr": "Environ 45°",
        "en": "About 45°",
        "correct": false
       },
       {
        "fr": "Environ 90°",
        "en": "About 90°",
        "correct": false
       },
       {
        "fr": "Environ 24°",
        "en": "About 24°",
        "correct": false
       }
      ],
      "explFr": "Pente = 2,4/60 = 0,04 (4 %) ; pour de petits angles, l'angle en degrés ≈ pente × 57,3 ≈ 2,3°.",
      "explEn": "Slope = 2.4/60 = 0.04 (4%); for small angles, angle in degrees ≈ slope × 57.3 ≈ 2.3°."
     },
     {
      "fr": "Un échafaudage suspendu (swing stage) présente des exigences de sécurité différentes d'un échafaudage à cadres au sol principalement parce que :",
      "en": "A suspended (swing stage) scaffold has different safety requirements from a ground-supported frame scaffold mainly because:",
      "choices": [
       {
        "fr": "Il dépend entièrement de câbles et de points d'ancrage en hauteur, exigeant une double protection contre les chutes",
        "en": "It depends entirely on cables and elevated anchor points, requiring backup fall protection",
        "correct": true
       },
       {
        "fr": "Il nécessite un garde-corps seulement pour les plateformes larges",
        "en": "It only requires a guardrail for wide platforms",
        "correct": false
       },
       {
        "fr": "Il est systématiquement plus stable qu'un échafaudage au sol",
        "en": "It is systematically more stable than a ground scaffold",
        "correct": false
       },
       {
        "fr": "Il ne peut légalement être utilisé qu'à l'intérieur d'un bâtiment",
        "en": "It can legally only be used inside a building",
        "correct": false
       }
      ],
      "explFr": "En cas de défaillance du système de suspension, un harnais individuel relié à une ligne de vie indépendante est essentiel.",
      "explEn": "In case the suspension system fails, an individual harness connected to an independent lifeline is essential."
     },
     {
      "type": "tf",
      "fr": "Lors de l'implantation d'un bâtiment, une erreur d'équerrage (angle non parfaitement à 90°) aux coins peut être vérifiée en comparant les diagonales du rectangle formé par les piquets.",
      "en": "When laying out a building, a squaring error (angle not perfectly 90°) at the corners can be checked by comparing the diagonals of the rectangle formed by the stakes.",
      "isTrue": true,
      "explFr": "Si les deux diagonales sont égales, les coins sont carrés (méthode dite du 3-4-5 étendue ou comparaison des diagonales).",
      "explEn": "If both diagonals are equal, the corners are square (an extended 3-4-5 method or diagonal comparison)."
     },
     {
      "fr": "Pour vérifier qu'un mur de fondation est d'aplomb sur toute sa hauteur de 2,4 m à l'aide d'un niveau à bulle de 60 cm, quelle est la meilleure pratique ?",
      "en": "To verify a 2.4 m foundation wall is plumb along its full height using a 60 cm bubble level, what is the best practice?",
      "choices": [
       {
        "fr": "Prendre plusieurs lectures superposées sur la hauteur, en vérifiant l'alignement à chaque segment",
        "en": "Take several overlapping readings up the height, checking alignment at each segment",
        "correct": true
       },
       {
        "fr": "Une seule lecture au centre du mur suffit pour les murs courts",
        "en": "A single reading at the wall's center is enough for short walls",
        "correct": false
       },
       {
        "fr": "Utiliser uniquement un fil à plomb, plus précis pour ce cas",
        "en": "Only use a plumb bob, which is more precise for this case",
        "correct": false
       },
       {
        "fr": "Vérifier seulement le haut du mur",
        "en": "Only check the top of the wall",
        "correct": false
       }
      ],
      "explFr": "Un niveau plus court que le mur exige plusieurs lectures superposées pour détecter un désaplomb sur toute la hauteur.",
      "explEn": "A level shorter than the wall requires multiple overlapping readings to detect any out-of-plumb condition along the full height."
     },
     {
      "fr": "Un échafaudage de 3 plateformes empilées doit être contreventé (tied) à la structure du bâtiment. Pourquoi cette exigence augmente-t-elle avec la hauteur ?",
      "en": "A scaffold with 3 stacked platforms must be tied to the building structure. Why does this requirement increase with height?",
      "choices": [
       {
        "fr": "Le bras de levier et l'effet du vent sur une structure haute et étroite augmentent le risque de renversement",
        "en": "The leverage and wind effect on a tall, narrow structure increase the risk of tipping",
        "correct": true
       },
       {
        "fr": "Les échafaudages hauts se contreventent seulement à l'intérieur",
        "en": "Taller scaffolds are only tied down when used indoors",
        "correct": false
       },
       {
        "fr": "Le contreventement sert uniquement à faciliter l'accès",
        "en": "Tying is only for easier access",
        "correct": false
       },
       {
        "fr": "La hauteur ne change rien à la stabilité",
        "en": "Height doesn't change stability at all",
        "correct": false
       }
      ],
      "explFr": "Plus l'échafaudage est haut par rapport à sa base, plus il devient instable sous une charge latérale comme le vent.",
      "explEn": "The taller the scaffold relative to its base, the more unstable it becomes under a lateral load like wind."
     },
     {
      "type": "tf",
      "fr": "La méthode du 3-4-5 (ou un multiple comme 6-8-10) permet de vérifier un angle droit en se basant sur le théorème de Pythagore.",
      "en": "The 3-4-5 method (or a multiple like 6-8-10) verifies a right angle based on the Pythagorean theorem.",
      "isTrue": true,
      "explFr": "Si les côtés mesurent 3 et 4 unités et que la diagonale mesure exactement 5 unités, l'angle est droit.",
      "explEn": "If the sides measure 3 and 4 units and the diagonal measures exactly 5 units, the angle is a right angle."
     },
     {
      "fr": "Une lecture de mire arrière (backsight) de 2,105 m est prise sur un point d'élévation connue de 45,500 m. Une lecture avant (foresight) de 0,988 m est ensuite prise sur un nouveau point. Quelle est l'élévation de ce nouveau point ?",
      "en": "A backsight rod reading of 2.105 m is taken on a known-elevation point of 45.500 m. A foresight reading of 0.988 m is then taken on a new point. What is the elevation of this new point?",
      "choices": [
       {
        "fr": "46,617 m",
        "en": "46.617 m",
        "correct": true
       },
       {
        "fr": "44,383 m",
        "en": "44.383 m",
        "correct": false
       },
       {
        "fr": "48,593 m",
        "en": "48.593 m",
        "correct": false
       },
       {
        "fr": "42,407 m",
        "en": "42.407 m",
        "correct": false
       }
      ],
      "explFr": "Hauteur d'instrument = 45,500 + 2,105 = 47,605 m ; élévation du nouveau point = 47,605 − 0,988 = 46,617 m.",
      "explEn": "Instrument height = 45.500 + 2.105 = 47.605 m; new point elevation = 47.605 − 0.988 = 46.617 m."
     },
     {
      "type": "tf",
      "fr": "Un échafaudage doit être ré-inspecté après tout événement pouvant affecter son intégrité, comme un vent fort ou un impact, même s'il a été inspecté récemment.",
      "en": "A scaffold must be re-inspected after any event that could affect its integrity, such as strong wind or an impact, even if it was recently inspected.",
      "isTrue": true,
      "explFr": "Les conditions changeantes peuvent compromettre la stabilité d'une structure jugée sécuritaire auparavant.",
      "explEn": "Changing conditions can compromise the stability of a structure previously judged safe."
     }
    ]
   }
  ]
 },
 {
  "id": "charp05",
  "order": 5,
  "code": "",
  "hours": 150,
  "title_fr": "Coffrages et béton",
  "title_en": "Formwork & Concrete",
  "icon": "🧱",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "À quoi sert un coffrage en construction ?",
      "en": "What is formwork used for in construction?",
      "choices": [
       {
        "fr": "Contenir le béton frais et lui donner sa forme jusqu'au durcissement",
        "en": "Containing fresh concrete and shaping it until it hardens",
        "correct": true
       },
       {
        "fr": "Isoler thermiquement les fondations contre le gel",
        "en": "Thermally insulating the foundation against frost",
        "correct": false
       },
       {
        "fr": "Décorer la surface extérieure d'un mur de fondation",
        "en": "Decorating the exterior surface of a foundation wall",
        "correct": false
       },
       {
        "fr": "Supporter temporairement le poids de la toiture",
        "en": "Temporarily supporting the roof's weight",
        "correct": false
       }
      ],
      "explFr": "Le coffrage est un moule temporaire retiré après durcissement du béton.",
      "explEn": "Formwork is a temporary mold removed after the concrete hardens."
     },
     {
      "fr": "Que signifie « décoffrage » ?",
      "en": "What does \"stripping formwork\" mean?",
      "choices": [
       {
        "fr": "Retirer les coffrages une fois le béton suffisamment durci",
        "en": "Removing the forms once the concrete is sufficiently cured",
        "correct": true
       },
       {
        "fr": "Couler le béton frais dans le coffrage préparé",
        "en": "Pouring fresh concrete into the prepared formwork",
        "correct": false
       },
       {
        "fr": "Installer les panneaux de coffrage avant le coulage",
        "en": "Installing the form panels before pouring",
        "correct": false
       },
       {
        "fr": "Mélanger les différents composants du béton",
        "en": "Mixing the various concrete components",
        "correct": false
       }
      ],
      "explFr": "Le décoffrage doit attendre que le béton ait atteint une résistance suffisante.",
      "explEn": "Stripping must wait until the concrete has reached sufficient strength."
     },
     {
      "fr": "Pourquoi utilise-t-on des tiges d'ancrage (form ties) dans un coffrage de mur ?",
      "en": "Why are form ties used in wall formwork?",
      "choices": [
       {
        "fr": "Pour maintenir l'écartement et la solidité des deux faces du coffrage",
        "en": "To maintain the spacing and strength of both form faces",
        "correct": true
       },
       {
        "fr": "Pour accélérer le durcissement du béton frais",
        "en": "To speed up the curing of the fresh concrete",
        "correct": false
       },
       {
        "fr": "Pour empêcher l'eau de pluie d'atteindre le coffrage",
        "en": "To keep rainwater from reaching the formwork",
        "correct": false
       },
       {
        "fr": "Pour faciliter le retrait des panneaux après le coulage",
        "en": "To make panel removal easier after pouring",
        "correct": false
       }
      ],
      "explFr": "Les tiges résistent à la pression exercée par le béton frais.",
      "explEn": "The ties resist the pressure exerted by the fresh concrete."
     },
     {
      "fr": "Que doit-on vérifier avant de couler le béton dans un coffrage ?",
      "en": "What should be checked before pouring concrete into formwork?",
      "choices": [
       {
        "fr": "L'alignement, le niveau et l'étanchéité du coffrage",
        "en": "The alignment, level, and tightness of the formwork",
        "correct": true
       },
       {
        "fr": "La couleur du bois utilisé pour les panneaux",
        "en": "The color of the wood used for the panels",
        "correct": false
       },
       {
        "fr": "Le nombre d'ouvriers présents sur le chantier",
        "en": "The number of workers present on site",
        "correct": false
       },
       {
        "fr": "La météo prévue pour le lendemain uniquement",
        "en": "The weather forecast for the following day only",
        "correct": false
       }
      ],
      "explFr": "Un coffrage mal aligné ou non étanche cause des défauts structuraux ou des fuites.",
      "explEn": "Misaligned or leaky formwork causes structural defects or leaks."
     },
     {
      "type": "tf",
      "fr": "Une semelle (footing) de fondation sert à répartir le poids de la structure sur le sol.",
      "en": "A foundation footing distributes the structure's weight onto the soil.",
      "isTrue": true,
      "explFr": "La semelle élargit la surface d'appui pour réduire la pression au sol.",
      "explEn": "The footing widens the bearing surface to reduce ground pressure."
     },
     {
      "fr": "Quel facteur influence le plus le temps de cure nécessaire avant le décoffrage d'un mur de fondation ?",
      "en": "Which factor most influences the curing time needed before stripping a foundation wall's formwork?",
      "choices": [
       {
        "fr": "La température ambiante et l'humidité",
        "en": "Ambient temperature and humidity",
        "correct": true
       },
       {
        "fr": "La couleur du coffrage utilisé",
        "en": "The color of the formwork used",
        "correct": false
       },
       {
        "fr": "Le nombre total d'ouvriers présents",
        "en": "The total number of workers present",
        "correct": false
       },
       {
        "fr": "L'heure exacte du coulage",
        "en": "The exact time of the pour",
        "correct": false
       }
      ],
      "explFr": "Le froid ralentit considérablement la prise et la cure du béton.",
      "explEn": "Cold weather considerably slows concrete setting and curing."
     },
     {
      "type": "tf",
      "fr": "Un excès d'eau dans le mélange de béton (rapport eau/ciment trop élevé) augmente généralement sa résistance finale.",
      "en": "Excess water in the concrete mix (too high a water/cement ratio) generally increases its final strength.",
      "isTrue": false,
      "explFr": "Un excès d'eau réduit généralement la résistance finale du béton durci.",
      "explEn": "Excess water generally reduces the final strength of the cured concrete."
     },
     {
      "fr": "Que voit-on principalement sur cette photo ?",
      "en": "What is mainly shown in this photo?",
      "choices": [
       {
        "fr": "Un système de coffrage avec garde-corps de sécurité",
        "en": "A formwork system with safety guardrails",
        "correct": true
       },
       {
        "fr": "Une charpente de toit en fermes préfabriquées",
        "en": "A prefabricated roof truss framework",
        "correct": false
       },
       {
        "fr": "Un mur déjà isolé et recouvert de gypse",
        "en": "An already insulated wall covered with gypsum board",
        "correct": false
       },
       {
        "fr": "Une fenêtre fraîchement installée dans l'ouverture",
        "en": "A window freshly installed in the opening",
        "correct": false
       }
      ],
      "explFr": "Les grands panneaux de bois assemblés avec une structure tubulaire forment un coffrage, ici équipé de garde-corps.",
      "explEn": "The large wood panels assembled with a tubular structure form formwork, here equipped with guardrails."
     },
     {
      "type": "tf",
      "fr": "Le système illustré comprend un garde-corps pour protéger les travailleurs en hauteur.",
      "en": "The system shown includes a guardrail to protect workers at height.",
      "isTrue": true,
      "explFr": "La rampe jaune tubulaire visible en haut du coffrage est un garde-corps.",
      "explEn": "The yellow tubular rail visible at the top of the formwork is a guardrail."
     },
     {
      "fr": "Pourquoi installe-t-on des joints de contrôle dans une dalle de béton ?",
      "en": "Why are control joints installed in a concrete slab?",
      "choices": [
       {
        "fr": "Pour orienter la fissuration due au retrait à un endroit prévu",
        "en": "To direct shrinkage cracking to a predetermined location",
        "correct": true
       },
       {
        "fr": "Pour décorer la surface visible de la dalle",
        "en": "To decorate the slab's visible surface",
        "correct": false
       },
       {
        "fr": "Pour empêcher complètement toute utilisation de la dalle",
        "en": "To completely prevent any use of the slab",
        "correct": false
       },
       {
        "fr": "Pour remplacer l'armature d'acier requise",
        "en": "To replace the required steel rebar",
        "correct": false
       }
      ],
      "explFr": "Le béton se contracte en séchant ; le joint de contrôle guide la fissure à un endroit prévu et discret.",
      "explEn": "Concrete shrinks as it cures; the control joint guides the crack to a planned, inconspicuous spot."
     },
     {
      "fr": "Que détermine principalement la dimension d'une semelle de fondation ?",
      "en": "What mainly determines the size of a foundation footing?",
      "choices": [
       {
        "fr": "La capacité portante du sol et la charge totale à supporter",
        "en": "The soil's bearing capacity and the total load to support",
        "correct": true
       },
       {
        "fr": "La couleur du béton demandée par le client",
        "en": "The concrete color requested by the client",
        "correct": false
       },
       {
        "fr": "La saison durant laquelle les travaux débutent",
        "en": "The season in which the work begins",
        "correct": false
       },
       {
        "fr": "Le nombre de fenêtres prévues au bâtiment",
        "en": "The number of windows planned for the building",
        "correct": false
       }
      ],
      "explFr": "La semelle doit répartir la charge sur une surface suffisante selon la portance du sol.",
      "explEn": "The footing must spread the load over a surface adequate for the soil's bearing capacity."
     },
     {
      "fr": "Pourquoi place-t-on un pare-vapeur sous une dalle de béton posée sur le sol ?",
      "en": "Why is a vapor barrier placed under a concrete slab on grade?",
      "choices": [
       {
        "fr": "Pour empêcher l'humidité du sol de migrer à travers la dalle",
        "en": "To prevent ground moisture from migrating through the slab",
        "correct": true
       },
       {
        "fr": "Pour améliorer l'apparence esthétique du béton",
        "en": "To improve the concrete's aesthetic appearance",
        "correct": false
       },
       {
        "fr": "Pour accélérer artificiellement le séchage du béton",
        "en": "To artificially speed up the concrete's drying",
        "correct": false
       },
       {
        "fr": "Pour remplacer l'armature d'acier normalement requise",
        "en": "To replace the steel rebar normally required",
        "correct": false
       }
      ],
      "explFr": "Le pare-vapeur bloque la remontée d'humidité provenant du sol.",
      "explEn": "The vapor barrier blocks moisture rising from the ground."
     },
     {
      "fr": "Que sont les boulons d'ancrage noyés dans une fondation de béton ?",
      "en": "What are anchor bolts embedded in a concrete foundation?",
      "choices": [
       {
        "fr": "Des tiges filetées qui permettront de fixer la lisse d'assise à la fondation",
        "en": "Threaded rods used to fasten the sill plate to the foundation",
        "correct": true
       },
       {
        "fr": "Des outils utilisés uniquement pour couler le béton",
        "en": "Tools used only for pouring concrete",
        "correct": false
       },
       {
        "fr": "Des accessoires purement décoratifs sans fonction structurale",
        "en": "Purely decorative accessories with no structural function",
        "correct": false
       },
       {
        "fr": "Des tuyaux servant à drainer l'eau de pluie",
        "en": "Pipes used to drain rainwater",
        "correct": false
       }
      ],
      "explFr": "Les boulons d'ancrage relient solidement l'ossature de bois à la fondation de béton.",
      "explEn": "Anchor bolts securely connect the wood framing to the concrete foundation."
     },
     {
      "fr": "Pourquoi le maintien de l'humidité (cure humide) est-il important après la coulée du béton ?",
      "en": "Why is keeping concrete moist (wet curing) important after pouring?",
      "choices": [
       {
        "fr": "Pour permettre une hydratation adéquate du ciment et atteindre la résistance prévue",
        "en": "To allow proper cement hydration and reach the intended strength",
        "correct": true
       },
       {
        "fr": "Pour refroidir rapidement le béton fraîchement coulé",
        "en": "To quickly cool the freshly poured concrete",
        "correct": false
       },
       {
        "fr": "Pour modifier la couleur naturelle du béton durci",
        "en": "To alter the natural color of the cured concrete",
        "correct": false
       },
       {
        "fr": "Pour réduire le nombre d'ouvriers nécessaires",
        "en": "To reduce the number of workers needed",
        "correct": false
       }
      ],
      "explFr": "Un séchage trop rapide nuit à l'hydratation complète du ciment et affaiblit le béton.",
      "explEn": "Drying too fast interferes with complete cement hydration and weakens the concrete."
     },
     {
      "fr": "Quel est le rôle principal de l'armature d'acier (rebar) dans le béton ?",
      "en": "What is the main role of steel rebar in concrete?",
      "choices": [
       {
        "fr": "Renforcer la résistance à la traction, que le béton seul ne possède pas bien",
        "en": "Reinforcing tensile strength, which concrete alone lacks",
        "correct": true
       },
       {
        "fr": "Remplacer entièrement le besoin d'utiliser du béton",
        "en": "Fully replacing the need for concrete",
        "correct": false
       },
       {
        "fr": "Accélérer artificiellement le temps de séchage",
        "en": "Artificially speeding up the drying time",
        "correct": false
       },
       {
        "fr": "Servir uniquement de repère visuel pour l'inspection",
        "en": "Serving only as a visual marker for inspection",
        "correct": false
       }
      ],
      "explFr": "Le béton résiste bien à la compression mais peu à la traction ; l'armature compense cette faiblesse.",
      "explEn": "Concrete resists compression well but not tension; rebar compensates for this weakness."
     },
     {
      "type": "tf",
      "fr": "Le béton est très résistant à la compression mais relativement faible en traction, d'où l'utilité de l'armature.",
      "en": "Concrete is very strong in compression but relatively weak in tension, which is why rebar is useful.",
      "isTrue": true,
      "explFr": "C'est la raison fondamentale pour laquelle on combine béton et acier d'armature.",
      "explEn": "This is the fundamental reason concrete and reinforcing steel are combined."
     },
     {
      "type": "tf",
      "fr": "Un béton coulé par temps très froid ne nécessite aucune précaution particulière.",
      "en": "Concrete poured in very cold weather requires no special precautions.",
      "isTrue": false,
      "explFr": "Le gel peut empêcher une hydratation adéquate ; des mesures de protection thermique sont nécessaires.",
      "explEn": "Freezing can prevent proper hydration; thermal protection measures are required."
     },
     {
      "type": "tf",
      "fr": "Les joints d'expansion permettent d'absorber les mouvements dus à la dilatation thermique du béton.",
      "en": "Expansion joints allow movement caused by thermal expansion of concrete to be absorbed.",
      "isTrue": true,
      "explFr": "Ils évitent que le béton ne se fissure de façon incontrôlée lors des variations de température.",
      "explEn": "They prevent concrete from cracking uncontrollably during temperature changes."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Une semelle de fondation mesure 20 m de long, 0,5 m de large et 0,3 m d'épaisseur, avec 10 % de perte prévue. Combien de m³ de béton faut-il commander ?",
      "en": "A footing measures 20 m long, 0.5 m wide, and 0.3 m thick, with 10% waste allowed. How many m³ of concrete should be ordered?",
      "choices": [
       {
        "fr": "3,3 m³",
        "en": "3.3 m³",
        "correct": true
       },
       {
        "fr": "3 m³",
        "en": "3 m³",
        "correct": false
       },
       {
        "fr": "6 m³",
        "en": "6 m³",
        "correct": false
       },
       {
        "fr": "3,6 m³",
        "en": "3.6 m³",
        "correct": false
       }
      ],
      "explFr": "Volume = 20 × 0,5 × 0,3 = 3 m³ ; avec 10 % de perte : 3 × 1,10 = 3,3 m³.",
      "explEn": "Volume = 20 × 0.5 × 0.3 = 3 m³; with 10% waste: 3 × 1.10 = 3.3 m³."
     },
     {
      "type": "tf",
      "fr": "Un béton qui sèche trop rapidement en surface, sans mûrissement humide adéquat, peut développer des fissures de retrait et une résistance réduite.",
      "en": "Concrete that dries too quickly at the surface, without adequate moist curing, can develop shrinkage cracks and reduced strength.",
      "isTrue": true,
      "explFr": "Le mûrissement humide permet à l'hydratation du ciment de se poursuivre correctement.",
      "explEn": "Moist curing allows cement hydration to continue properly."
     },
     {
      "fr": "Pourquoi espace-t-on les tiges d'ancrage (form ties) selon un patron précis dans un coffrage de mur ?",
      "en": "Why are form ties spaced according to a precise pattern in a wall formwork?",
      "choices": [
       {
        "fr": "Pour résister uniformément à la pression latérale du béton frais",
        "en": "To uniformly resist the lateral pressure of fresh concrete",
        "correct": true
       },
       {
        "fr": "Pour des raisons esthétiques seulement",
        "en": "For aesthetic reasons only",
        "correct": false
       },
       {
        "fr": "Pour réduire le poids total du coffrage",
        "en": "To reduce the total weight of the formwork",
        "correct": false
       },
       {
        "fr": "Elles servent surtout à faciliter le décoffrage rapide",
        "en": "They mainly serve to speed up form stripping",
        "correct": false
       }
      ],
      "explFr": "La pression du béton frais est considérable ; un espacement inadéquat peut faire éclater le coffrage.",
      "explEn": "Fresh concrete pressure is considerable; inadequate spacing can cause formwork blowout."
     },
     {
      "fr": "Quel est le rôle principal de l'enrobage (cover) minimal de béton autour de l'armature ?",
      "en": "What is the main role of the minimum concrete cover around reinforcement?",
      "choices": [
       {
        "fr": "Protéger l'acier contre la corrosion et le feu",
        "en": "Protect the steel against corrosion and fire",
        "correct": true
       },
       {
        "fr": "Alourdir la structure",
        "en": "Add weight to the structure",
        "correct": false
       },
       {
        "fr": "Faciliter le décoffrage uniquement",
        "en": "Only ease form stripping",
        "correct": false
       },
       {
        "fr": "Accélérer la prise du béton",
        "en": "Speed up concrete set",
        "correct": false
       }
      ],
      "explFr": "Un enrobage insuffisant expose l'armature à l'humidité et à l'air, causant la corrosion.",
      "explEn": "Insufficient cover exposes reinforcement to moisture and air, causing corrosion."
     },
     {
      "type": "tf",
      "fr": "Le béton à air entraîné améliore sa résistance aux cycles de gel-dégel.",
      "en": "Air-entrained concrete improves its resistance to freeze-thaw cycles.",
      "isTrue": true,
      "explFr": "Les microbulles d'air absorbent l'expansion de l'eau qui gèle dans le béton.",
      "explEn": "The tiny air bubbles absorb the expansion of freezing water within the concrete."
     },
     {
      "fr": "Pourquoi la pression latérale du béton frais sur un coffrage augmente-t-elle avec la hauteur de coulée et la vitesse de coulage ?",
      "en": "Why does the lateral pressure of fresh concrete on formwork increase with pour height and pouring speed?",
      "choices": [
       {
        "fr": "Parce que le béton frais se comporte temporairement comme un fluide dont la pression hydrostatique croît avec la hauteur",
        "en": "Because fresh concrete temporarily behaves like a fluid whose hydrostatic pressure increases with height",
        "correct": true
       },
       {
        "fr": "Parce que le béton devient plus léger en hauteur",
        "en": "Because concrete becomes lighter at height",
        "correct": false
       },
       {
        "fr": "Parce que le béton devient plus léger à mesure que la coulée monte",
        "en": "Because concrete becomes lighter as the pour rises",
        "correct": false
       },
       {
        "fr": "La vitesse de coulage influence seulement le temps de finition",
        "en": "Pouring speed only affects finishing time",
        "correct": false
       }
      ],
      "explFr": "Avant la prise, le béton exerce une pression semblable à un fluide, proportionnelle à la hauteur non durcie.",
      "explEn": "Before setting, concrete exerts fluid-like pressure proportional to the height of unset material."
     },
     {
      "fr": "Quel est le principal objectif des joints de contrôle dans une dalle de béton ?",
      "en": "What is the main purpose of control joints in a concrete slab?",
      "choices": [
       {
        "fr": "Créer un plan de faiblesse pour orienter les fissures de retrait",
        "en": "Create a plane of weakness to direct shrinkage cracking",
        "correct": true
       },
       {
        "fr": "Décorer la surface de la dalle",
        "en": "Decorate the slab surface",
        "correct": false
       },
       {
        "fr": "Empêcher toute fissuration de façon absolue",
        "en": "Absolutely prevent any cracking",
        "correct": false
       },
       {
        "fr": "Réduire l'épaisseur totale de la dalle",
        "en": "Reduce the slab's overall thickness",
        "correct": false
       }
      ],
      "explFr": "Le béton se fissure en séchant ; les joints dirigent ces fissures à des endroits prévus et discrets.",
      "explEn": "Concrete cracks as it dries; joints direct this cracking to planned, inconspicuous locations."
     },
     {
      "type": "tf",
      "fr": "La vibration du béton frais aide à éliminer les bulles d'air emprisonnées et à réduire le nid d'abeille (honeycombing).",
      "en": "Vibrating fresh concrete helps remove trapped air bubbles and reduce honeycombing.",
      "isTrue": true,
      "explFr": "La vibration consolide le béton autour de l'armature et dans les coins du coffrage.",
      "explEn": "Vibration consolidates the concrete around reinforcement and into formwork corners."
     },
     {
      "fr": "Quelle est la règle générale approximative pour la longueur de chevauchement (overlap) d'un épissage de barres d'armature ?",
      "en": "What is the general approximate rule for the overlap length of a rebar splice?",
      "choices": [
       {
        "fr": "Environ 40 fois le diamètre de la barre, selon le type d'acier et l'application",
        "en": "About 40 times the bar diameter, depending on steel type and application",
        "correct": true
       },
       {
        "fr": "Environ 10 cm, une valeur fixe pour toutes les barres courantes",
        "en": "About 10 cm, a fixed value for all common bar sizes",
        "correct": false
       },
       {
        "fr": "Un chevauchement minimal d'environ 5 cm suffit généralement",
        "en": "A minimal overlap of about 5 cm is generally enough",
        "correct": false
       },
       {
        "fr": "La moitié du diamètre de la barre seulement",
        "en": "Only half the bar diameter",
        "correct": false
       }
      ],
      "explFr": "Cette règle du pouce assure un transfert de charge adéquat entre les barres, à valider selon les plans d'ingénierie.",
      "explEn": "This rule of thumb ensures adequate load transfer between bars, to be confirmed against engineering drawings."
     },
     {
      "type": "tf",
      "fr": "Le temps de décoffrage dépend du gain de résistance du béton, influencé par la température et le type de ciment.",
      "en": "Form-stripping time depends on the concrete's strength gain, influenced by temperature and cement type.",
      "isTrue": true,
      "explFr": "Un décoffrage trop hâtif peut endommager un béton qui n'a pas atteint une résistance suffisante.",
      "explEn": "Stripping forms too early can damage concrete that hasn't reached sufficient strength."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une dalle de 12 m × 8 m doit être coulée à une épaisseur de 100 mm (0,1 m). Combien de camions-malaxeurs de 7 m³ seront nécessaires (arrondi au nombre entier supérieur) ?",
      "en": "A 12 m × 8 m slab must be poured at a 100 mm (0.1 m) thickness. How many 7 m³ ready-mix trucks will be needed (rounded up)?",
      "choices": [
       {
        "fr": "2 camions",
        "en": "2 trucks",
        "correct": true
       },
       {
        "fr": "1 camion",
        "en": "1 truck",
        "correct": false
       },
       {
        "fr": "3 camions",
        "en": "3 trucks",
        "correct": false
       },
       {
        "fr": "14 camions",
        "en": "14 trucks",
        "correct": false
       }
      ],
      "explFr": "Volume = 12 × 8 × 0,1 = 9,6 m³ ; 9,6 ÷ 7 ≈ 1,37, donc 2 camions complets sont nécessaires.",
      "explEn": "Volume = 12 × 8 × 0.1 = 9.6 m³; 9.6 ÷ 7 ≈ 1.37, so 2 full truckloads are needed."
     },
     {
      "type": "tf",
      "fr": "Le rapport eau-ciment est l'un des facteurs les plus déterminants de la résistance finale et de la durabilité du béton durci.",
      "en": "The water-cement ratio is one of the most determining factors of hardened concrete's final strength and durability.",
      "isTrue": true,
      "explFr": "Un excès d'eau affaiblit la matrice de ciment en durcissant, même si le béton frais est plus facile à mettre en place.",
      "explEn": "Excess water weakens the cement matrix as it hardens, even though the fresh concrete is easier to place."
     },
     {
      "fr": "Un mur de fondation de 2,4 m de hauteur est coulé en une seule opération continue à un rythme rapide. Quel risque cela présente-t-il pour le coffrage, comparé à un coulage par étapes ?",
      "en": "A 2.4 m tall foundation wall is poured in one continuous fast operation. What risk does this present for the formwork, compared to pouring in stages?",
      "choices": [
       {
        "fr": "Une pression latérale maximale plus élevée pouvant excéder la capacité du coffrage",
        "en": "A higher maximum lateral pressure that could exceed the formwork's capacity",
        "correct": true
       },
       {
        "fr": "Un risque limité à un temps de séchage légèrement plus long",
        "en": "A risk limited to a slightly longer drying time",
        "correct": false
       },
       {
        "fr": "Un durcissement plus rapide du béton",
        "en": "Faster concrete hardening",
        "correct": false
       },
       {
        "fr": "Une réduction automatique du besoin d'armature",
        "en": "An automatic reduction in the need for reinforcement",
        "correct": false
       }
      ],
      "explFr": "Un coulage rapide et continu accumule une pression hydrostatique plus élevée avant que le béton du bas ne commence à prendre.",
      "explEn": "A fast, continuous pour builds up higher hydrostatic pressure before the bottom concrete begins to set."
     },
     {
      "fr": "Le béton d'une fondation doit atteindre une résistance suffisante avant le décoffrage. Par temps froid (5 °C), que se passe-t-il généralement par rapport à un coulage à 20 °C ?",
      "en": "Foundation concrete must reach sufficient strength before form removal. In cold weather (5°C), what generally happens compared to a pour at 20°C?",
      "choices": [
       {
        "fr": "Le gain de résistance est significativement ralenti, exigeant un temps de décoffrage plus long",
        "en": "Strength gain is significantly slowed, requiring a longer form-removal time",
        "correct": true
       },
       {
        "fr": "Le béton durcit à une vitesse comparable, été comme hiver",
        "en": "Concrete hardens at a similar rate in summer and winter",
        "correct": false
       },
       {
        "fr": "La température affecte seulement la couleur de surface du béton",
        "en": "Temperature only affects the concrete's surface color",
        "correct": false
       },
       {
        "fr": "Le décoffrage peut se faire après 24 heures, été comme hiver",
        "en": "Forms can be removed after 24 hours, in both summer and winter",
        "correct": false
       }
      ],
      "explFr": "L'hydratation du ciment ralentit au froid ; des mesures de protection thermique sont souvent nécessaires en hiver.",
      "explEn": "Cement hydration slows in cold weather; thermal protection measures are often needed in winter."
     },
     {
      "type": "tf",
      "fr": "Un essai d'affaissement (slump test) sur le chantier permet d'évaluer la consistance (fluidité) du béton frais livré, mais pas directement sa résistance finale.",
      "en": "A slump test on site evaluates the consistency (workability) of the delivered fresh concrete, but not directly its final strength.",
      "isTrue": true,
      "explFr": "La résistance finale est généralement confirmée par des essais de compression sur des cylindres échantillonnés.",
      "explEn": "Final strength is generally confirmed through compression tests on sampled cylinders."
     },
     {
      "fr": "Une semelle isolée doit supporter une charge ponctuelle importante sur un sol de faible portance. Quel ajustement de conception est le plus logique ?",
      "en": "An isolated footing must support a significant point load on low-bearing-capacity soil. What design adjustment is most logical?",
      "choices": [
       {
        "fr": "Augmenter la surface de la semelle pour répartir la charge sur une plus grande superficie",
        "en": "Increase the footing's area to spread the load over a larger surface",
        "correct": true
       },
       {
        "fr": "Réduire l'épaisseur de la semelle pour économiser du béton",
        "en": "Reduce the footing's thickness to save concrete",
        "correct": false
       },
       {
        "fr": "Retirer l'armature pour simplifier la construction",
        "en": "Remove the reinforcement to simplify construction",
        "correct": false
       },
       {
        "fr": "Un ajustement mineur du dosage en ciment, sans autre modification",
        "en": "A minor adjustment to the cement dosage, with no other change",
        "correct": false
       }
      ],
      "explFr": "Une plus grande surface réduit la pression appliquée au sol par unité de surface, restant sous sa capacité portante.",
      "explEn": "A larger area reduces the pressure applied to the soil per unit area, staying under its bearing capacity."
     },
     {
      "fr": "Pourquoi une reprise de bétonnage (cold joint) mal préparée entre deux coulées représente-t-elle un point faible structural ?",
      "en": "Why does a poorly prepared cold joint between two concrete pours represent a structural weak point?",
      "choices": [
       {
        "fr": "L'adhérence entre les deux coulées est réduite si la surface n'est pas nettoyée, rugueuse et parfois traitée avec un adhésif",
        "en": "Bonding between the two pours is reduced if the surface isn't cleaned, roughened, and sometimes treated with a bonding agent",
        "correct": true
       },
       {
        "fr": "Le béton frais adhère bien tant que la surface reste humide",
        "en": "Fresh concrete bonds well as long as the surface stays damp",
        "correct": false
       },
       {
        "fr": "Une reprise de bétonnage affecte seulement l'apparence de surface",
        "en": "A cold joint only affects the surface appearance",
        "correct": false
       },
       {
        "fr": "Le nettoyage de la surface accélère seulement le temps de prise",
        "en": "Cleaning the surface only speeds up the setting time",
        "correct": false
       }
      ],
      "explFr": "Une surface lisse, sale ou contaminée par de la laitance nuit à l'adhérence entre les deux coulées de béton.",
      "explEn": "A smooth, dirty, or laitance-contaminated surface impairs bonding between the two concrete pours."
     },
     {
      "type": "tf",
      "fr": "Le retrait de séchage (drying shrinkage) du béton se poursuit pendant plusieurs mois après le coulage, bien au-delà de la prise initiale.",
      "en": "Concrete's drying shrinkage continues for several months after pouring, well beyond the initial set.",
      "isTrue": true,
      "explFr": "C'est pourquoi les joints de contrôle et un espacement adéquat des armatures restent importants longtemps après le coulage.",
      "explEn": "This is why control joints and adequate reinforcement spacing remain important long after pouring."
     },
     {
      "fr": "Une colonne de béton armé montre une fissuration verticale après plusieurs années. Quelle cause est la plus préoccupante et nécessite une évaluation par un ingénieur ?",
      "en": "A reinforced concrete column shows vertical cracking after several years. Which cause is most concerning and requires an engineer's evaluation?",
      "choices": [
       {
        "fr": "Une possible surcharge structurale ou corrosion de l'armature interne faisant éclater le béton",
        "en": "A possible structural overload or internal reinforcement corrosion causing the concrete to spall",
        "correct": true
       },
       {
        "fr": "Une simple fissure de surface totalement sans lien avec la structure",
        "en": "A simple surface crack entirely unrelated to the structure",
        "correct": false
       },
       {
        "fr": "Un changement normal de la couleur naturelle du béton avec le temps",
        "en": "A normal change in the concrete's natural color over time",
        "correct": false
       },
       {
        "fr": "Un nettoyage récent de la colonne effectué à l'eau sous pression",
        "en": "A recent cleaning of the column done with pressurized water",
        "correct": false
       }
      ],
      "explFr": "La corrosion de l'armature fait gonfler l'acier et peut fissurer ou faire éclater le béton environnant, un signe à prendre au sérieux.",
      "explEn": "Reinforcement corrosion causes the steel to expand and can crack or spall the surrounding concrete, a sign to take seriously"
     },
     {
      "type": "tf",
      "fr": "Un béton à haute performance (faible rapport eau-ciment, adjuvants) peut atteindre une résistance élevée plus rapidement, mais exige souvent une manipulation plus attentive sur le chantier.",
      "en": "High-performance concrete (low water-cement ratio, admixtures) can reach high strength faster, but often requires more careful handling on site.",
      "isTrue": true,
      "explFr": "Ces mélanges sont souvent moins maniables et plus sensibles aux conditions de mise en place et de mûrissement.",
      "explEn": "These mixes are often less workable and more sensitive to placement and curing conditions."
     }
    ]
   }
  ]
 },
 {
  "id": "charp06",
  "order": 6,
  "code": "",
  "hours": 150,
  "title_fr": "Charpente de planchers",
  "title_en": "Floor Framing",
  "icon": "🪵",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel élément supporte directement le revêtement de plancher (subfloor) ?",
      "en": "Which element directly supports the subfloor?",
      "choices": [
       {
        "fr": "Les solives de plancher",
        "en": "Floor joists",
        "correct": true
       },
       {
        "fr": "Les chevrons",
        "en": "Rafters",
        "correct": false
       },
       {
        "fr": "Les poteaux muraux",
        "en": "Wall studs",
        "correct": false
       },
       {
        "fr": "Les pannes",
        "en": "Purlins",
        "correct": false
       }
      ],
      "explFr": "Les solives forment l'ossature horizontale qui reçoit le revêtement.",
      "explEn": "Joists form the horizontal framework that receives the sheathing."
     },
     {
      "fr": "Quelle pièce forme le contour d'une charpente de plancher et supporte les extrémités des solives ?",
      "en": "Which member forms the perimeter of a floor frame and supports the joist ends?",
      "choices": [
       {
        "fr": "La lisse/solive de rive (rim joist)",
        "en": "The rim joist",
        "correct": true
       },
       {
        "fr": "Le chevron de toiture",
        "en": "The roof rafter",
        "correct": false
       },
       {
        "fr": "Le poteau mural",
        "en": "The wall stud",
        "correct": false
       },
       {
        "fr": "La panne intermédiaire",
        "en": "The intermediate purlin",
        "correct": false
       }
      ],
      "explFr": "La solive de rive ferme le périmètre et rigidifie l'ensemble.",
      "explEn": "The rim joist closes the perimeter and stiffens the assembly."
     },
     {
      "fr": "Quel matériau est couramment utilisé comme revêtement de plancher structural ?",
      "en": "Which material is commonly used as structural subfloor sheathing?",
      "choices": [
       {
        "fr": "Contreplaqué ou OSB",
        "en": "Plywood or OSB",
        "correct": true
       },
       {
        "fr": "Plaque de gypse peinte",
        "en": "Painted gypsum board",
        "correct": false
       },
       {
        "fr": "Laine minérale en natte",
        "en": "Batt mineral wool",
        "correct": false
       },
       {
        "fr": "Membrane de polyéthylène",
        "en": "Polyethylene membrane",
        "correct": false
       }
      ],
      "explFr": "Le contreplaqué et l'OSB offrent la rigidité nécessaire au support des charges.",
      "explEn": "Plywood and OSB provide the rigidity needed to support loads."
     },
     {
      "fr": "Pourquoi espace-t-on les solives de façon standardisée (ex. 16 po c. à c.) ?",
      "en": "Why are joists spaced in a standardized way (e.g., 16 in. o.c.)?",
      "choices": [
       {
        "fr": "Pour assurer une capacité portante uniforme et faciliter la pose des matériaux standards",
        "en": "To ensure uniform load capacity and ease installation of standard materials",
        "correct": true
       },
       {
        "fr": "Pour réduire au minimum la quantité totale de clous utilisés",
        "en": "To minimize the total number of nails used",
        "correct": false
       },
       {
        "fr": "Par tradition, sans lien avec les dimensions des matériaux",
        "en": "By tradition, unrelated to material dimensions",
        "correct": false
       },
       {
        "fr": "Pour uniformiser la couleur du bois utilisé",
        "en": "To make the wood color uniform",
        "correct": false
       }
      ],
      "explFr": "L'espacement standard correspond aussi aux dimensions des panneaux de 4x8 pieds.",
      "explEn": "Standard spacing also matches the dimensions of 4x8-foot sheet panels."
     },
     {
      "type": "tf",
      "fr": "L'entremise (bridging/blocking) placée entre les solives sert uniquement à décorer le dessous du plancher, sans rôle structural.",
      "en": "Bridging/blocking placed between joists is purely decorative and has no structural role.",
      "isTrue": false,
      "explFr": "L'entremise empêche le gauchissement des solives et aide à répartir les charges entre elles.",
      "explEn": "Bridging prevents joist warping and helps distribute loads between them."
     },
     {
      "fr": "Pour un plancher de 20 pieds de long avec des solives espacées à 16 po c. à c., combien de solives faut-il (extrémités incluses) ?",
      "en": "For a 20-foot-long floor with joists spaced 16 in. o.c., how many joists are needed (ends included)?",
      "choices": [
       {
        "fr": "16",
        "en": "16",
        "correct": true
       },
       {
        "fr": "15",
        "en": "15",
        "correct": false
       },
       {
        "fr": "20",
        "en": "20",
        "correct": false
       },
       {
        "fr": "12",
        "en": "12",
        "correct": false
       }
      ],
      "explFr": "20 pi = 240 po ÷ 16 po = 15 intervalles, donc 16 solives.",
      "explEn": "20 ft = 240 in. ÷ 16 in. = 15 spaces, so 16 joists."
     },
     {
      "type": "tf",
      "fr": "Une solive de plancher fendue sur toute sa longueur peut être laissée telle quelle si elle est encore en place.",
      "en": "A floor joist split along its full length can be left as is if it's still in place.",
      "isTrue": false,
      "explFr": "Une solive fendue compromet la capacité portante et doit être réparée ou remplacée (ex. par renfort ou sistering).",
      "explEn": "A split joist compromises load capacity and must be repaired or replaced (e.g., via reinforcement or sistering)."
     },
     {
      "fr": "Quel élément est pointé par la flèche dans cette charpente de plancher ?",
      "en": "Which element is pointed out by the arrow in this floor frame?",
      "choices": [
       {
        "fr": "La lisse d'assise (sill plate)",
        "en": "The sill plate",
        "correct": true
       },
       {
        "fr": "La solive de rive",
        "en": "The rim joist",
        "correct": false
       },
       {
        "fr": "Le contreplaqué (subfloor)",
        "en": "The plywood (subfloor)",
        "correct": false
       },
       {
        "fr": "La solive de plancher",
        "en": "The floor joist",
        "correct": false
       }
      ],
      "explFr": "La lisse d'assise est la pièce fixée sur la fondation qui reçoit la charpente de plancher.",
      "explEn": "The sill plate is the member fixed to the foundation that receives the floor framing."
     },
     {
      "type": "tf",
      "fr": "Cette installation comprend un entremise (bridging) adéquat entre les solives, comme illustré.",
      "en": "This installation includes adequate bridging between the joists, as illustrated.",
      "isTrue": true,
      "explFr": "Les pièces croisées installées entre les solives représentent un entremise en X, une méthode courante.",
      "explEn": "The crossed pieces installed between the joists represent X-bridging, a common method."
     },
     {
      "fr": "Qu'est-ce qu'une solive en I (I-joist) par rapport à une solive de bois massif ?",
      "en": "What is an I-joist compared to a solid-lumber joist?",
      "choices": [
       {
        "fr": "Une solive fabriquée en usine avec des semelles et une âme, offrant une portée accrue",
        "en": "A factory-made joist with flanges and a web, offering greater span",
        "correct": true
       },
       {
        "fr": "Une solive réservée exclusivement à la construction de toits",
        "en": "A joist used exclusively in roof construction",
        "correct": false
       },
       {
        "fr": "Une solive faite entièrement de métal galvanisé",
        "en": "A joist made entirely of galvanized metal",
        "correct": false
       },
       {
        "fr": "Une solive standard mais coupée à une longueur réduite",
        "en": "A standard joist simply cut to a shorter length",
        "correct": false
       }
      ],
      "explFr": "Sa forme en I optimise la matière et permet de plus grandes portées avec moins de bois.",
      "explEn": "Its I-shape optimizes material use and allows greater spans with less wood."
     },
     {
      "fr": "Que signifie un « porte-à-faux » (cantilever) dans une charpente de plancher ?",
      "en": "What does a \"cantilever\" mean in floor framing?",
      "choices": [
       {
        "fr": "Une section de plancher qui dépasse son support sans colonne en dessous",
        "en": "A floor section that extends beyond its support with no column underneath",
        "correct": true
       },
       {
        "fr": "Un type de clou utilisé uniquement pour les planchers",
        "en": "A type of nail used only for floors",
        "correct": false
       },
       {
        "fr": "Un espace réservé à l'installation future de fenêtres",
        "en": "A space reserved for future window installation",
        "correct": false
       },
       {
        "fr": "Une solive dont l'extrémité a été accidentellement brisée",
        "en": "A joist whose end has been accidentally broken",
        "correct": false
       }
      ],
      "explFr": "Le porte-à-faux permet à des solives de se prolonger au-delà du mur porteur, en équilibre.",
      "explEn": "A cantilever lets joists extend past the bearing wall, balanced beyond the support."
     },
     {
      "fr": "Pourquoi renforce-t-on parfois une solive existante en y ajoutant une pièce parallèle (sistering) ?",
      "en": "Why is an existing joist sometimes reinforced by adding a parallel piece (sistering)?",
      "choices": [
       {
        "fr": "Pour augmenter sa capacité portante ou réparer un défaut",
        "en": "To increase its load capacity or repair a defect",
        "correct": true
       },
       {
        "fr": "Pour améliorer uniquement l'apparence du dessous du plancher",
        "en": "Only to improve the underside's appearance",
        "correct": false
       },
       {
        "fr": "Pour réduire le poids total de la charpente",
        "en": "To reduce the total weight of the framing",
        "correct": false
       },
       {
        "fr": "Pour raccourcir la portée totale du plancher",
        "en": "To shorten the floor's overall span",
        "correct": false
       }
      ],
      "explFr": "Le sistering ajoute de la résistance à une solive affaiblie ou sous-dimensionnée.",
      "explEn": "Sistering adds strength to a weakened or undersized joist."
     },
     {
      "fr": "Quel élément supporte les solives sur une grande portée, au milieu d'un plancher ?",
      "en": "What member supports joists over a long span, in the middle of a floor?",
      "choices": [
       {
        "fr": "Une poutre (girder/beam) supportée par des colonnes",
        "en": "A girder/beam supported by columns",
        "correct": true
       },
       {
        "fr": "Le pare-vapeur installé sous le plancher",
        "en": "The vapor barrier installed under the floor",
        "correct": false
       },
       {
        "fr": "La moulure de plinthe posée en finition",
        "en": "The baseboard molding installed as trim",
        "correct": false
       },
       {
        "fr": "Le bardeau utilisé sur la toiture",
        "en": "The shingle used on the roof",
        "correct": false
       }
      ],
      "explFr": "La poutre centrale réduit la portée nécessaire des solives en leur offrant un appui intermédiaire.",
      "explEn": "The center girder reduces the joists' required span by giving them intermediate support."
     },
     {
      "fr": "Que peut causer un espacement excessif entre les fixations du sous-plancher ?",
      "en": "What can excessive spacing between subfloor fasteners cause?",
      "choices": [
       {
        "fr": "Un plancher qui craque ou fléchit sous la charge",
        "en": "A floor that squeaks or flexes under load",
        "correct": true
       },
       {
        "fr": "Une meilleure isolation thermique du plancher",
        "en": "Better thermal insulation for the floor",
        "correct": false
       },
       {
        "fr": "Une solidité globale accrue de la structure",
        "en": "Increased overall structural strength",
        "correct": false
       },
       {
        "fr": "Une réduction du bruit de circulation",
        "en": "Reduced noise from foot traffic",
        "correct": false
       }
      ],
      "explFr": "Un sous-plancher mal fixé bouge sous la charge, ce qui cause craquements et flexion.",
      "explEn": "A poorly fastened subfloor moves under load, causing squeaks and flexing."
     },
     {
      "fr": "Quel encadrement particulier est nécessaire autour d'une ouverture de cage d'escalier dans un plancher ?",
      "en": "What special framing is needed around a stairwell opening in a floor?",
      "choices": [
       {
        "fr": "Des solives d'encadrement (trimmer/header joists) pour reprendre la charge des solives coupées",
        "en": "Trimmer/header joists to carry the load of the cut joists",
        "correct": true
       },
       {
        "fr": "Un renforcement uniquement au niveau du plafond",
        "en": "Reinforcement only at the ceiling level",
        "correct": false
       },
       {
        "fr": "Une simple couche additionnelle de contreplaqué",
        "en": "A simple extra layer of plywood",
        "correct": false
       },
       {
        "fr": "Un pare-vapeur renforcé autour de l'ouverture",
        "en": "A reinforced vapor barrier around the opening",
        "correct": false
       }
      ],
      "explFr": "Les solives interrompues par l'ouverture doivent être reprises par des solives d'encadrement.",
      "explEn": "Joists interrupted by the opening must be carried by trimmer and header joists."
     },
     {
      "type": "tf",
      "fr": "Les solives en I (I-joists) sont fabriquées en usine et permettent souvent de plus grandes portées que le bois massif.",
      "en": "I-joists are factory-made and often allow greater spans than solid lumber.",
      "isTrue": true,
      "explFr": "Leur conception optimisée en fait un choix courant pour les grandes portées.",
      "explEn": "Their optimized design makes them a common choice for long spans."
     },
     {
      "type": "tf",
      "fr": "Un plancher qui craque est toujours causé par un problème d'isolation.",
      "en": "A squeaky floor is always caused by an insulation problem.",
      "isTrue": false,
      "explFr": "Un craquement est généralement causé par un mouvement entre le sous-plancher et les solives, pas par l'isolation.",
      "explEn": "A squeak is usually caused by movement between the subfloor and joists, not by insulation."
     },
     {
      "type": "tf",
      "fr": "L'espace autour d'une cage d'escalier dans un plancher nécessite un encadrement (trimmer/header joists) spécifique.",
      "en": "The space around a stairwell opening in a floor requires specific trimmer/header joist framing.",
      "isTrue": true,
      "explFr": "Cet encadrement reprend la charge des solives interrompues par l'ouverture.",
      "explEn": "This framing carries the load of the joists interrupted by the opening."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Quel facteur N'INFLUENCE PAS directement la portée maximale permise d'un solive de plancher ?",
      "en": "Which factor does NOT directly influence the maximum allowable span of a floor joist?",
      "choices": [
       {
        "fr": "La couleur de la peinture appliquée sur le bois",
        "en": "The color of paint applied to the wood",
        "correct": true
       },
       {
        "fr": "L'espacement entre les solives",
        "en": "The spacing between joists",
        "correct": false
       },
       {
        "fr": "L'essence et le grade du bois",
        "en": "The wood species and grade",
        "correct": false
       },
       {
        "fr": "La charge prévue sur le plancher",
        "en": "The expected load on the floor",
        "correct": false
       }
      ],
      "explFr": "La couleur n'a aucun effet structural ; les trois autres facteurs déterminent la portée admissible selon les tables.",
      "explEn": "Color has no structural effect; the other three factors determine allowable span per span tables."
     },
     {
      "type": "tf",
      "fr": "Le blocage (bridging/blocking) entre solives aide à prévenir leur rotation et à mieux répartir les charges concentrées.",
      "en": "Blocking between joists helps prevent their rotation and better distributes concentrated loads.",
      "isTrue": true,
      "explFr": "Le blocage relie les solives entre elles pour un comportement plus rigide de l'ensemble.",
      "explEn": "Blocking ties joists together for stiffer overall behavior."
     },
     {
      "fr": "Quel est un avantage important d'un solive en I manufacturé (I-joist) par rapport au bois massif dimensionnel ?",
      "en": "What is an important advantage of a manufactured I-joist compared to solid dimensional lumber?",
      "choices": [
       {
        "fr": "Des portées plus grandes avec moins de variation dimensionnelle (retrait, gauchissement)",
        "en": "Greater spans with less dimensional variation (shrinkage, warping)",
        "correct": true
       },
       {
        "fr": "Un coût généralement moindre pour les très courtes portées",
        "en": "Generally lower cost for very short spans",
        "correct": false
       },
       {
        "fr": "Il nécessite un blocage seulement aux appuis d'extrémité",
        "en": "It only requires blocking at the end supports",
        "correct": false
       },
       {
        "fr": "Il peut être coupé n'importe où sans perte de résistance",
        "en": "It can be cut anywhere without loss of strength",
        "correct": false
       }
      ],
      "explFr": "Les solives en I offrent stabilité dimensionnelle et grandes portées, mais ont des zones de coupe à respecter (âme).",
      "explEn": "I-joists offer dimensional stability and long spans, but have cutting zones that must be respected (web)."
     },
     {
      "fr": "En général, un porte-à-faux (cantilever) de plancher ne devrait pas dépasser environ quelle fraction de la portée retenue (backspan), sauf indication contraire de l'ingénieur ?",
      "en": "In general, a floor cantilever should not exceed about what fraction of the backspan, unless otherwise specified by an engineer?",
      "choices": [
       {
        "fr": "Environ le quart (1/4) de la portée retenue",
        "en": "About one quarter (1/4) of the backspan",
        "correct": true
       },
       {
        "fr": "La totalité de la portée retenue",
        "en": "The entire backspan",
        "correct": false
       },
       {
        "fr": "Dix fois la portée retenue",
        "en": "Ten times the backspan",
        "correct": false
       },
       {
        "fr": "Une limite variable selon la couleur du bois utilisé",
        "en": "A variable limit depending on the wood's color",
        "correct": false
       }
      ],
      "explFr": "Cette règle générale limite les déflexions et soulèvements excessifs ; les cas particuliers exigent une vérification technique.",
      "explEn": "This general rule limits excessive deflection and uplift; special cases require engineering verification."
     },
     {
      "type": "tf",
      "fr": "Une entaille (encoche) pratiquée dans le tiers central de la portée d'une solive l'affaiblit davantage qu'une entaille près d'un appui.",
      "en": "A notch cut in the middle third of a joist's span weakens it more than a notch near a support.",
      "isTrue": true,
      "explFr": "Les contraintes de flexion sont maximales au centre de la portée ; on évite généralement d'y entailler.",
      "explEn": "Bending stresses are greatest at midspan; notching there is generally avoided."
     },
     {
      "fr": "Pour un espacement de solives de 12 po centre en centre plutôt que 16 po, quel impact sur le choix du panneau de sous-plancher ?",
      "en": "For a joist spacing of 12 in on-center instead of 16 in, what impact does this have on subfloor panel choice?",
      "choices": [
       {
        "fr": "Un panneau plus mince peut généralement suffire grâce à l'appui plus rapproché",
        "en": "A thinner panel can generally suffice thanks to the closer support",
        "correct": true
       },
       {
        "fr": "Le panneau doit obligatoirement être deux fois plus épais",
        "en": "The panel must be exactly twice as thick",
        "correct": false
       },
       {
        "fr": "L'espacement des solives affecte seulement l'apparence du plafond",
        "en": "Joist spacing only affects the ceiling's appearance",
        "correct": false
       },
       {
        "fr": "Il faut utiliser un panneau plus mince pour réduire les coûts",
        "en": "A thinner panel must be used to reduce costs",
        "correct": false
       }
      ],
      "explFr": "Un appui plus rapproché réduit la portée du panneau entre solives, permettant parfois une épaisseur moindre.",
      "explEn": "Closer support reduces the panel's span between joists, sometimes allowing a lesser thickness."
     },
     {
      "fr": "Un plancher de 26 pieds de large est charpenté avec des solives à 16 po centre en centre. Combien de solives sont nécessaires (en incluant les deux extrémités), arrondi à la solive complète supérieure ?",
      "en": "A 26-foot-wide floor is framed with joists at 16 in on-center. How many joists are needed (including both end joists), rounded up to the next full joist?",
      "choices": [
       {
        "fr": "21 solives",
        "en": "21 joists",
        "correct": true
       },
       {
        "fr": "20 solives",
        "en": "20 joists",
        "correct": false
       },
       {
        "fr": "19 solives",
        "en": "19 joists",
        "correct": false
       },
       {
        "fr": "22 solives",
        "en": "22 joists",
        "correct": false
       }
      ],
      "explFr": "26 pi = 312 po ; 312/16 = 19,5 espaces, arrondi à 20 espaces complets, donc 21 solives en incluant les deux extrémités.",
      "explEn": "26 ft = 312 in; 312/16 = 19.5 spaces, rounded up to 20 full spaces, so 21 joists including both ends."
     },
     {
      "type": "tf",
      "fr": "Le solive de rive (rim joist) transfère les charges du plancher vers les murs ou la fondation en dessous.",
      "en": "The rim joist transfers floor loads down to the walls or foundation below.",
      "isTrue": true,
      "explFr": "Il ferme aussi l'extrémité de la structure de plancher et sert d'ancrage pour le revêtement.",
      "explEn": "It also closes the end of the floor structure and serves as an anchor for cladding."
     },
     {
      "fr": "Que signifie une limite de flèche de L/360 pour un plancher résidentiel ?",
      "en": "What does an L/360 deflection limit mean for a residential floor?",
      "choices": [
       {
        "fr": "La déflexion maximale permise est la portée divisée par 360",
        "en": "The maximum allowed deflection is the span divided by 360",
        "correct": true
       },
       {
        "fr": "Le plancher doit avoir une épaisseur de 360 millimètres",
        "en": "The floor must be 360 millimeters thick",
        "correct": false
       },
       {
        "fr": "La portée maximale est de 360 pieds",
        "en": "The maximum span is 360 feet",
        "correct": false
       },
       {
        "fr": "Le plancher doit peser 360 kg par mètre carré",
        "en": "The floor must weigh 360 kg per square meter",
        "correct": false
       }
      ],
      "explFr": "Pour une portée de 12 pi (144 po), la flèche maximale serait de 144/360 = 0,4 po.",
      "explEn": "For a 12 ft (144 in) span, the maximum deflection would be 144/360 = 0.4 in."
     },
     {
      "type": "tf",
      "fr": "Doubler les solives sous une cloison parallèle est une pratique courante pour supporter le poids additionnel de cette cloison.",
      "en": "Doubling joists under a parallel partition wall is common practice to support that wall's added weight.",
      "isTrue": true,
      "explFr": "Cela évite une flexion excessive du plancher sous la cloison.",
      "explEn": "This prevents excessive floor deflection under the partition."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une solive en I manufacturée présente un trou percé dans son âme (web) à un endroit non indiqué par le fabricant. Quelle est la conséquence potentielle la plus grave ?",
      "en": "A manufactured I-joist has a hole drilled in its web at a location not indicated by the manufacturer. What is the most serious potential consequence?",
      "choices": [
       {
        "fr": "Une réduction importante de la capacité portante de la solive, pouvant mener à une défaillance structurale",
        "en": "A significant reduction in the joist's load capacity, potentially leading to structural failure",
        "correct": true
       },
       {
        "fr": "Une conséquence limitée aux solives situées près des appuis",
        "en": "A consequence limited to joists located near the supports",
        "correct": false
       },
       {
        "fr": "Une amélioration notable de la ventilation sous le plancher",
        "en": "A noticeable improvement in under-floor ventilation",
        "correct": false
       },
       {
        "fr": "Un effet purement esthétique sans impact structural",
        "en": "A purely cosmetic effect with no structural impact",
        "correct": false
       }
      ],
      "explFr": "Les zones de perçage permises sont précisément indiquées par le fabricant ; les percer ailleurs peut compromettre gravement la résistance.",
      "explEn": "Permitted drilling zones are precisely specified by the manufacturer; drilling elsewhere can seriously compromise strength."
     },
     {
      "type": "tf",
      "fr": "Un plancher qui vibre de façon perceptible sous la marche, même s'il respecte la limite de flèche statique L/360, peut tout de même être inconfortable en raison de critères de vibration distincts.",
      "en": "A floor that noticeably vibrates underfoot, even if it meets the static L/360 deflection limit, can still be uncomfortable due to separate vibration criteria.",
      "isTrue": true,
      "explFr": "Le confort vibratoire dépend aussi de la fréquence naturelle du plancher, un critère distinct de la flèche statique.",
      "explEn": "Vibration comfort also depends on the floor's natural frequency, a criterion distinct from static deflection."
     },
     {
      "fr": "Une solive de plancher de 2 po × 10 po en épinette porte une portée de 14 pieds, proche de sa limite selon les tables. Quelle modification augmenterait le plus efficacement sa capacité portante sans changer sa portée ?",
      "en": "A 2×10 spruce floor joist spans 14 feet, near its table limit. What modification would most effectively increase its load capacity without changing its span?",
      "choices": [
       {
        "fr": "Réduire l'espacement centre en centre entre les solives (par ex. de 16 po à 12 po)",
        "en": "Reduce the on-center spacing between joists (e.g., from 16 in to 12 in)",
        "correct": true
       },
       {
        "fr": "Peindre la solive d'une couleur plus foncée",
        "en": "Paint the joist a darker color",
        "correct": false
       },
       {
        "fr": "Retirer le blocage entre les solives",
        "en": "Remove the blocking between joists",
        "correct": false
       },
       {
        "fr": "Augmenter la température ambiante du sous-sol",
        "en": "Increase the basement's ambient temperature",
        "correct": false
       }
      ],
      "explFr": "Un espacement plus rapproché distribue la charge sur davantage de solives, augmentant la capacité portante globale du plancher.",
      "explEn": "Closer spacing distributes the load over more joists, increasing the floor's overall load capacity."
     },
     {
      "fr": "Un plancher en porte-à-faux de 3 pieds doit supporter un balcon avec charge de neige. La portée retenue (backspan) à l'intérieur est de 10 pieds. Ce porte-à-faux respecte-t-il généralement la règle du quart de portée ?",
      "en": "A 3-foot cantilevered floor must support a balcony with snow load. The interior backspan is 10 feet. Does this cantilever generally meet the quarter-span rule?",
      "choices": [
       {
        "fr": "Non, car 3 pieds dépasse le quart de 10 pieds (2,5 pieds) ; une vérification technique est requise",
        "en": "No, since 3 feet exceeds a quarter of 10 feet (2.5 feet); an engineering check is required",
        "correct": true
       },
       {
        "fr": "Oui, car 3 pieds est inférieur à 10 pieds",
        "en": "Yes, since 3 feet is less than 10 feet",
        "correct": false
       },
       {
        "fr": "Oui, tant que la charge reste inférieure à celle d'un balcon standard",
        "en": "Yes, as long as the load stays below that of a standard balcony",
        "correct": false
       },
       {
        "fr": "Cela dépend uniquement de l'essence de bois des solives",
        "en": "This depends only on the joist wood species",
        "correct": false
       }
      ],
      "explFr": "1/4 de 10 pi = 2,5 pi ; un porte-à-faux de 3 pi dépasse cette règle générale, surtout avec une charge de neige additionnelle.",
      "explEn": "1/4 of 10 ft = 2.5 ft; a 3 ft cantilever exceeds this general rule, especially with additional snow load."
     },
     {
      "type": "tf",
      "fr": "Une solive massive percée en son centre (dans le tiers central de sa hauteur) pour le passage d'un tuyau peut perdre une part importante de sa résistance en flexion, même si le trou semble petit.",
      "en": "A solid joist drilled through its center (within the middle third of its depth) for a pipe run can lose a significant amount of bending strength, even if the hole seems small.",
      "isTrue": true,
      "explFr": "La fibre centrale résiste principalement au cisaillement, mais un perçage mal positionné peut tout de même affaiblir la solive.",
      "explEn": "The center fiber mainly resists shear, but a poorly positioned hole can still weaken the joist."
     },
     {
      "fr": "Un plancher de 40 pi × 30 pi utilise des solives en I à 19,2 po centre en centre plutôt qu'à 16 po. Quel est l'avantage principal de cet espacement légèrement plus large avec des solives en I ?",
      "en": "A 40 ft × 30 ft floor uses I-joists at 19.2 in on-center rather than 16 in. What is the main advantage of this slightly wider spacing with I-joists?",
      "choices": [
       {
        "fr": "Une réduction du nombre de solives nécessaires tout en respectant les tables de portée du fabricant",
        "en": "Fewer joists needed while still meeting the manufacturer's span tables",
        "correct": true
       },
       {
        "fr": "Une augmentation automatique de la résistance au feu",
        "en": "An automatic increase in fire resistance",
        "correct": false
       },
       {
        "fr": "Une élimination complète du besoin de sous-plancher",
        "en": "Complete elimination of the need for a subfloor",
        "correct": false
       },
       {
        "fr": "Un espacement réservé uniquement aux planchers commerciaux",
        "en": "Spacing reserved only for commercial floors",
        "correct": false
       }
      ],
      "explFr": "19,2 po (multiple de 4) reste souvent conforme aux tables du fabricant tout en réduisant le nombre de solives et le coût.",
      "explEn": "19.2 in (a multiple of 4) often remains within manufacturer tables while reducing joist count and cost."
     },
     {
      "fr": "Un plancher supportant une charge concentrée inhabituelle (comme un coffre-fort lourd) nécessite quelle démarche avant l'installation ?",
      "en": "A floor supporting an unusually concentrated load (like a heavy safe) requires what approach before installation?",
      "choices": [
       {
        "fr": "Une vérification par un ingénieur pour s'assurer que la structure existante peut supporter cette charge ponctuelle",
        "en": "An engineer's review to confirm the existing structure can support this point load",
        "correct": true
       },
       {
        "fr": "Une vérification requise si le coffre-fort dépasse environ 500 kg",
        "en": "A review is required if the safe exceeds about 500 kg",
        "correct": false
       },
       {
        "fr": "Ajouter simplement plus de clous aux solives existantes",
        "en": "Simply adding more nails to the existing joists",
        "correct": false
       },
       {
        "fr": "Peindre les solives pour les renforcer",
        "en": "Painting the joists to reinforce them",
        "correct": false
       }
      ],
      "explFr": "Les planchers résidentiels sont conçus pour des charges réparties standards ; une charge concentrée inhabituelle exige une vérification spécifique.",
      "explEn": "Residential floors are designed for standard distributed loads; an unusually concentrated load requires specific verification."
     },
     {
      "type": "tf",
      "fr": "Le sous-plancher collé-vissé (glued and screwed) au lieu de simplement cloué réduit les grincements et améliore la rigidité globale du plancher.",
      "en": "Subflooring that is glued and screwed instead of just nailed reduces squeaking and improves the floor's overall stiffness.",
      "isTrue": true,
      "explFr": "La colle empêche le mouvement relatif entre le panneau et la solive, une cause fréquente de grincement.",
      "explEn": "The adhesive prevents relative movement between the panel and joist, a frequent cause of squeaking"
     },
     {
      "fr": "Une poutrelle (poutre) de plancher supportant plusieurs solives montre une flèche visible au centre après plusieurs années. Quelle est la première étape appropriée ?",
      "en": "A floor beam supporting multiple joists shows visible sag at midspan after several years. What is the first appropriate step?",
      "choices": [
       {
        "fr": "Faire évaluer la poutre par un professionnel avant toute intervention structurale",
        "en": "Have the beam evaluated by a professional before any structural intervention",
        "correct": true
       },
       {
        "fr": "Ajouter immédiatement du poids supplémentaire pour tester sa limite",
        "en": "Immediately add extra weight to test its limit",
        "correct": false
       },
       {
        "fr": "Ignorer le problème s'il n'y a pas de bruit de craquement",
        "en": "Ignore the problem if there's no cracking sound",
        "correct": false
       },
       {
        "fr": "Couper la poutre en deux pour l'inspecter",
        "en": "Cut the beam in half to inspect it",
        "correct": false
       }
      ],
      "explFr": "Une flèche visible peut indiquer une surcharge, une dégradation du bois ou un sous-dimensionnement ; une évaluation professionnelle est essentielle avant d'intervenir.",
      "explEn": "Visible sag can indicate overload, wood degradation, or undersizing; a professional evaluation is essential before intervening."
     },
     {
      "type": "tf",
      "fr": "Un plancher de sous-sol construit directement sur une dalle de béton humide sans pare-vapeur adéquat risque de développer de la moisissure sous le revêtement de sol.",
      "en": "A basement floor built directly on a damp concrete slab without an adequate vapor barrier risks developing mold under the floor covering.",
      "isTrue": true,
      "explFr": "L'humidité ascensionnelle du béton peut rester emprisonnée sous un revêtement non protégé, favorisant la moisissure.",
      "explEn": "Rising moisture from the concrete can become trapped under an unprotected floor covering, promoting mold growth."
     }
    ]
   }
  ]
 },
 {
  "id": "charp07",
  "order": 7,
  "code": "",
  "hours": 180,
  "title_fr": "Charpente de murs",
  "title_en": "Wall Framing",
  "icon": "🏗️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Comment appelle-t-on la pièce horizontale du bas d'un mur ossaturé, fixée au plancher ?",
      "en": "What is the horizontal member at the bottom of a framed wall, fixed to the floor, called?",
      "choices": [
       {
        "fr": "La lisse basse",
        "en": "The bottom/sole plate",
        "correct": true
       },
       {
        "fr": "Le chevron",
        "en": "The rafter",
        "correct": false
       },
       {
        "fr": "La panne",
        "en": "The purlin",
        "correct": false
       },
       {
        "fr": "Le linteau",
        "en": "The header",
        "correct": false
       }
      ],
      "explFr": "La lisse basse (sole plate) ancre le mur au plancher.",
      "explEn": "The sole plate anchors the wall to the floor."
     },
     {
      "fr": "Quel élément structural est placé au-dessus d'une ouverture pour en supporter la charge ?",
      "en": "Which structural member is placed above an opening to carry the load?",
      "choices": [
       {
        "fr": "Le linteau",
        "en": "The header",
        "correct": true
       },
       {
        "fr": "La lisse basse",
        "en": "The sole plate",
        "correct": false
       },
       {
        "fr": "Le contreventement",
        "en": "The bracing",
        "correct": false
       },
       {
        "fr": "La sablière",
        "en": "The top plate",
        "correct": false
       }
      ],
      "explFr": "Le linteau transfère la charge au-dessus d'une porte ou fenêtre vers les poteaux adjacents.",
      "explEn": "The header transfers the load above a door or window to adjacent studs."
     },
     {
      "fr": "Que sont les « poteaux nains » (cripple studs) ?",
      "en": "What are \"cripple studs\"?",
      "choices": [
       {
        "fr": "De courts poteaux situés au-dessus ou au-dessous des ouvertures",
        "en": "Short studs located above or below openings",
        "correct": true
       },
       {
        "fr": "Les poteaux principaux situés aux coins du mur",
        "en": "The main studs located at the wall's corners",
        "correct": false
       },
       {
        "fr": "Des poteaux réservés uniquement aux murs porteurs",
        "en": "Studs used only in load-bearing walls",
        "correct": false
       },
       {
        "fr": "Des poteaux utilisés seulement dans les cloisons intérieures",
        "en": "Studs used only in interior partitions",
        "correct": false
       }
      ],
      "explFr": "Les poteaux nains complètent l'ossature autour des fenêtres et portes.",
      "explEn": "Cripple studs fill out the framing around windows and doors."
     },
     {
      "fr": "Quelle est la dimension réelle approximative d'un poteau mural en bois de type « 2x4 » ?",
      "en": "What is the approximate actual (dressed) size of a \"2x4\" wood stud?",
      "choices": [
       {
        "fr": "Environ 1,5 po x 3,5 po",
        "en": "About 1.5 in. x 3.5 in.",
        "correct": true
       },
       {
        "fr": "Environ 2 po x 4 po, sa dimension nominale d'origine",
        "en": "About 2 in. x 4 in., its original nominal size",
        "correct": false
       },
       {
        "fr": "1 po x 3 po",
        "en": "1 in. x 3 in.",
        "correct": false
       },
       {
        "fr": "3 po x 5 po",
        "en": "3 in. x 5 in.",
        "correct": false
       }
      ],
      "explFr": "Le bois raboté perd de la matière par rapport à sa dimension nominale.",
      "explEn": "Dressed lumber loses material compared to its nominal size."
     },
     {
      "type": "tf",
      "fr": "Le contreventement (bracing) dans un mur à ossature sert à empêcher le mur de se déformer latéralement (racking).",
      "en": "Bracing in a framed wall is used to prevent the wall from racking (lateral deformation).",
      "isTrue": true,
      "explFr": "Le contreventement rigidifie le mur contre les forces latérales (vent, séisme).",
      "explEn": "Bracing stiffens the wall against lateral forces (wind, seismic)."
     },
     {
      "fr": "Pourquoi utilise-t-on souvent plus d'un poteau plein (king stud) de chaque côté d'une grande ouverture (ex. porte-fenêtre) ?",
      "en": "Why is more than one king stud often used on each side of a large opening (e.g., a patio door)?",
      "choices": [
       {
        "fr": "Pour renforcer le support de la charge du linteau sur une grande portée",
        "en": "To reinforce support for the header's load over a wide span",
        "correct": true
       },
       {
        "fr": "Pour réduire la quantité totale de bois nécessaire",
        "en": "To reduce the total amount of wood needed",
        "correct": false
       },
       {
        "fr": "Pour accélérer l'installation de l'ouverture",
        "en": "To speed up installation of the opening",
        "correct": false
       },
       {
        "fr": "Pour améliorer uniquement l'apparence du mur fini",
        "en": "Only to improve the finished wall's appearance",
        "correct": false
       }
      ],
      "explFr": "Une portée plus large exige un support renforcé pour transférer la charge du linteau vers la fondation.",
      "explEn": "A wider span requires reinforced support to transfer the header's load down to the foundation."
     },
     {
      "type": "tf",
      "fr": "Plus une ouverture (porte ou fenêtre) est large, plus le linteau doit généralement être robuste (plus grand ou plus épais).",
      "en": "The wider an opening (door or window), the generally more robust (larger or thicker) the header must be.",
      "isTrue": true,
      "explFr": "Une plus grande portée impose une charge plus importante sur le linteau, qui doit être dimensionné en conséquence.",
      "explEn": "A wider span imposes a greater load on the header, which must be sized accordingly."
     },
     {
      "fr": "Sur cette photo, quel matériau recouvre l'ossature des murs extérieurs ?",
      "en": "In this photo, what material covers the exterior wall framing?",
      "choices": [
       {
        "fr": "Un panneau de revêtement (OSB)",
        "en": "OSB sheathing panels",
        "correct": true
       },
       {
        "fr": "Une plaque de gypse peinte",
        "en": "Painted gypsum board",
        "correct": false
       },
       {
        "fr": "Un panneau de laine minérale",
        "en": "Mineral wool panels",
        "correct": false
       },
       {
        "fr": "Un bardage de vinyle extérieur",
        "en": "Exterior vinyl siding",
        "correct": false
       }
      ],
      "explFr": "Les panneaux beiges à texture de copeaux compressés sont des panneaux OSB, un revêtement structural courant.",
      "explEn": "The beige panels with a compressed-chip texture are OSB panels, a common structural sheathing."
     },
     {
      "type": "tf",
      "fr": "On peut voir du contreventement diagonal installé dans certaines ouvertures sur cette photo.",
      "en": "Diagonal bracing can be seen installed in some of the openings in this photo.",
      "isTrue": true,
      "explFr": "Des pièces de bois diagonales sont visibles à l'intérieur de certaines ouvertures, formant un contreventement.",
      "explEn": "Diagonal wood pieces are visible inside some openings, forming bracing."
     },
     {
      "fr": "Qu'est-ce qu'un mur porteur (load-bearing wall) ?",
      "en": "What is a load-bearing wall?",
      "choices": [
       {
        "fr": "Un mur qui supporte une charge structurale provenant du toit ou d'un étage supérieur",
        "en": "A wall that supports a structural load from the roof or an upper floor",
        "correct": true
       },
       {
        "fr": "Un mur uniquement destiné à la décoration intérieure",
        "en": "A wall used only for interior decoration",
        "correct": false
       },
       {
        "fr": "Un mur situé uniquement sur le périmètre extérieur du bâtiment",
        "en": "A wall located only on the building's exterior perimeter",
        "correct": false
       },
       {
        "fr": "Un mur construit sans lisse basse ni sablière",
        "en": "A wall built with no sole plate or top plate",
        "correct": false
       }
      ],
      "explFr": "Retirer un mur porteur sans le remplacer par un support adéquat peut compromettre la structure.",
      "explEn": "Removing a load-bearing wall without adequate replacement support can compromise the structure."
     },
     {
      "fr": "Qu'est-ce qu'un « coin californien » (mur d'angle à 3 poteaux) dans une ossature de mur ?",
      "en": "What is a \"California corner\" (3-stud corner) in wall framing?",
      "choices": [
       {
        "fr": "Une méthode d'assemblage des poteaux d'angle qui laisse de l'espace pour l'isolation",
        "en": "A corner-stud arrangement that leaves room for insulation",
        "correct": true
       },
       {
        "fr": "Un type de fenêtre à ouverture coulissante",
        "en": "A type of sliding window",
        "correct": false
       },
       {
        "fr": "Une technique de peinture appliquée en fin de chantier",
        "en": "A painting technique applied at the end of a project",
        "correct": false
       },
       {
        "fr": "Un type de toiture à faible pente",
        "en": "A type of low-slope roof",
        "correct": false
       }
      ],
      "explFr": "Cette méthode facilite l'isolation du coin, souvent difficile d'accès avec un coin plein traditionnel.",
      "explEn": "This method eases insulating the corner, often hard to reach with a traditional solid corner."
     },
     {
      "fr": "Pourquoi les joints de la sablière double (lisse haute) doivent-ils être décalés entre les murs adjacents ?",
      "en": "Why should double top-plate joints be staggered between adjacent walls?",
      "choices": [
       {
        "fr": "Pour lier structuralement les murs ensemble aux coins et intersections",
        "en": "To structurally tie the walls together at corners and intersections",
        "correct": true
       },
       {
        "fr": "Pour faciliter uniquement le transport des matériaux",
        "en": "Only to make transporting materials easier",
        "correct": false
       },
       {
        "fr": "Parce que le bois est vendu en longueurs fixes",
        "en": "Because lumber is sold in fixed lengths",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme purement esthétique",
        "en": "To meet a purely aesthetic standard",
        "correct": false
       }
      ],
      "explFr": "Le chevauchement des joints crée une continuité structurale entre les murs.",
      "explEn": "Overlapping the joints creates structural continuity between the walls."
     },
     {
      "fr": "Que signifie établir une « ligne de plaque » avant de monter un mur ?",
      "en": "What does laying out the plates mean before building a wall?",
      "choices": [
       {
        "fr": "Marquer sur les lisses l'emplacement exact des poteaux, ouvertures et intersections",
        "en": "Marking the exact location of studs, openings, and intersections on the plates",
        "correct": true
       },
       {
        "fr": "Peindre les lisses avant l'assemblage du mur",
        "en": "Painting the plates before assembling the wall",
        "correct": false
       },
       {
        "fr": "Calculer uniquement le prix total des matériaux",
        "en": "Only calculating the total material cost",
        "correct": false
       },
       {
        "fr": "Vérifier les prévisions météo avant de commencer",
        "en": "Checking the weather forecast before starting",
        "correct": false
       }
      ],
      "explFr": "Ce marquage assure un assemblage précis et cohérent avec les plans.",
      "explEn": "This marking ensures precise assembly consistent with the plans."
     },
     {
      "fr": "Qu'est-ce qu'un pare-feu (fire blocking) dans une ossature de mur ?",
      "en": "What is fire blocking in wall framing?",
      "choices": [
       {
        "fr": "Une pièce de bois qui bloque la propagation du feu et de la fumée dans les cavités murales",
        "en": "A wood piece that blocks fire and smoke from spreading through wall cavities",
        "correct": true
       },
       {
        "fr": "Un revêtement extérieur uniquement résistant aux intempéries",
        "en": "An exterior cladding that only resists weather",
        "correct": false
       },
       {
        "fr": "Un type de peinture ignifuge appliquée en finition",
        "en": "A type of fire-resistant paint applied as a finish",
        "correct": false
       },
       {
        "fr": "Un système d'alarme relié à la caserne de pompiers",
        "en": "An alarm system connected to the fire station",
        "correct": false
       }
      ],
      "explFr": "Le pare-feu compartimente les cavités murales pour ralentir la propagation d'un incendie.",
      "explEn": "Fire blocking compartmentalizes wall cavities to slow fire spread."
     },
     {
      "fr": "Quelle est la différence principale entre un mur porteur et une cloison ?",
      "en": "What is the main difference between a load-bearing wall and a partition wall?",
      "choices": [
       {
        "fr": "La cloison ne supporte aucune charge structurale, seulement son propre poids",
        "en": "A partition supports no structural load, only its own weight",
        "correct": true
       },
       {
        "fr": "La cloison est généralement plus haute qu'un mur porteur",
        "en": "A partition is generally taller than a bearing wall",
        "correct": false
       },
       {
        "fr": "Le mur porteur comporte des poteaux plus rapprochés qu'une cloison",
        "en": "A load-bearing wall has more closely spaced studs than a partition",
        "correct": false
       },
       {
        "fr": "Les deux types de murs utilisent le même espacement de poteaux",
        "en": "Both wall types use the same stud spacing",
        "correct": false
       }
      ],
      "explFr": "La cloison sert à diviser l'espace sans reprendre de charge structurale.",
      "explEn": "A partition divides space without carrying any structural load."
     },
     {
      "type": "tf",
      "fr": "Il est généralement risqué de retirer ou modifier un mur porteur sans prévoir un support de remplacement adéquat.",
      "en": "It is generally risky to remove or modify a load-bearing wall without providing adequate replacement support.",
      "isTrue": true,
      "explFr": "Un linteau ou une poutre doit reprendre la charge auparavant supportée par le mur.",
      "explEn": "A header or beam must carry the load previously supported by the wall."
     },
     {
      "type": "tf",
      "fr": "Une cloison (mur non porteur) intérieure peut généralement être déplacée plus facilement qu'un mur porteur.",
      "en": "An interior partition (non-load-bearing wall) can generally be moved more easily than a load-bearing wall.",
      "isTrue": true,
      "explFr": "Comme elle ne supporte pas de charge structurale, son déplacement est structurellement plus simple.",
      "explEn": "Since it carries no structural load, moving it is structurally simpler."
     },
     {
      "type": "tf",
      "fr": "Le pare-feu dans les murs n'a aucune utilité réelle et est purement décoratif.",
      "en": "Fire blocking in walls has no real purpose and is purely decorative.",
      "isTrue": false,
      "explFr": "Le pare-feu ralentit la propagation du feu et de la fumée dans les cavités murales, un rôle sécuritaire important.",
      "explEn": "Fire blocking slows the spread of fire and smoke through wall cavities, an important safety role."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Un mur à ossature standard utilise un espacement de poteaux de 16 po centre en centre. Quel est le principal avantage de cet espacement standard ?",
      "en": "A standard-framed wall uses 16 in on-center stud spacing. What is the main benefit of this standard spacing?",
      "choices": [
       {
        "fr": "Il correspond aux dimensions standard des panneaux de 4 pi, réduisant les pertes de matériel",
        "en": "It matches the standard 4 ft panel dimensions, reducing material waste",
        "correct": true
       },
       {
        "fr": "Il double automatiquement la résistance globale du mur",
        "en": "It automatically doubles the wall's overall strength",
        "correct": false
       },
       {
        "fr": "Il élimine complètement le besoin d'installer une sablière",
        "en": "It completely eliminates the need for a top plate",
        "correct": false
       },
       {
        "fr": "Il rend le mur entièrement imperméable à l'eau",
        "en": "It makes the wall fully waterproof",
        "correct": false
       }
      ],
      "explFr": "16 po divise également 48 po (4 pi), alignant les joints de panneaux sur les poteaux.",
      "explEn": "16 in evenly divides 48 in (4 ft), aligning panel joints on studs."
     },
     {
      "type": "tf",
      "fr": "Le poteau nain (jack stud/trimmer) et le poteau plein (king stud) travaillent ensemble pour supporter le linteau d'une ouverture.",
      "en": "The jack stud (trimmer) and king stud work together to support the header of an opening.",
      "isTrue": true,
      "explFr": "Le poteau nain porte directement le linteau, tandis que le poteau plein stabilise l'ensemble sur toute la hauteur du mur.",
      "explEn": "The jack stud directly bears the header, while the king stud stabilizes the assembly the full wall height."
     },
     {
      "fr": "La dimension d'un linteau (header) au-dessus d'une fenêtre est principalement déterminée par :",
      "en": "The size of a header above a window is primarily determined by:",
      "choices": [
       {
        "fr": "La largeur de l'ouverture et la charge qu'il doit supporter",
        "en": "The width of the opening and the load it must carry",
        "correct": true
       },
       {
        "fr": "La couleur du revêtement extérieur",
        "en": "The color of the exterior cladding",
        "correct": false
       },
       {
        "fr": "Le nombre de fenêtres dans la maison",
        "en": "The number of windows in the house",
        "correct": false
       },
       {
        "fr": "La hauteur totale du mur uniquement",
        "en": "Only the total wall height",
        "correct": false
       }
      ],
      "explFr": "Plus l'ouverture est large et la charge élevée, plus le linteau doit être robuste (souvent vérifié par table de portée).",
      "explEn": "The wider the opening and the higher the load, the more robust the header must be (often checked against a span table)."
     },
     {
      "fr": "Quel élément résiste principalement aux forces de racking (déformation en parallélogramme) dans un mur à ossature ?",
      "en": "What element mainly resists racking forces (parallelogram-shaped deformation) in a framed wall?",
      "choices": [
       {
        "fr": "Le revêtement structural (contreplaqué/OSB) ou un contreventement diagonal",
        "en": "Structural sheathing (plywood/OSB) or diagonal bracing",
        "correct": true
       },
       {
        "fr": "La peinture appliquée sur les poteaux",
        "en": "Paint applied to the studs",
        "correct": false
       },
       {
        "fr": "Le nombre de fenêtres présentes",
        "en": "The number of windows present",
        "correct": false
       },
       {
        "fr": "La sablière simple seulement",
        "en": "A single top plate alone",
        "correct": false
       }
      ],
      "explFr": "Le revêtement structural ou le contreventement transforme le mur en un panneau rigide résistant aux forces latérales.",
      "explEn": "Structural sheathing or bracing turns the wall into a rigid panel resisting lateral forces."
     },
     {
      "type": "tf",
      "fr": "Le chevauchement de la sablière double aux coins et intersections aide à lier structurellement les murs ensemble.",
      "en": "Overlapping the double top plate at corners and intersections helps structurally tie the walls together.",
      "isTrue": true,
      "explFr": "Ce chevauchement crée une continuité qui distribue les charges entre les murs perpendiculaires.",
      "explEn": "This overlap creates continuity that distributes loads between perpendicular walls."
     },
     {
      "fr": "Un mur de 30 pieds de long est charpenté à 16 po centre en centre, en commençant et finissant par un poteau. Combien de poteaux réguliers sont nécessaires, arrondis au poteau complet supérieur (sans compter les poteaux d'ouvertures) ?",
      "en": "A 30-foot-long wall is framed at 16 in on-center, starting and ending with a stud. How many regular studs are needed, rounded up to the next full stud (not counting opening studs)?",
      "choices": [
       {
        "fr": "24 poteaux",
        "en": "24 studs",
        "correct": true
       },
       {
        "fr": "23 poteaux",
        "en": "23 studs",
        "correct": false
       },
       {
        "fr": "22 poteaux",
        "en": "22 studs",
        "correct": false
       },
       {
        "fr": "25 poteaux",
        "en": "25 studs",
        "correct": false
       }
      ],
      "explFr": "30 pi = 360 po ; 360/16 = 22,5 espaces, arrondi à 23 espaces complets, donc 24 poteaux en incluant les deux extrémités.",
      "explEn": "30 ft = 360 in; 360/16 = 22.5 spaces, rounded up to 23 full spaces, so 24 studs including both ends."
     },
     {
      "fr": "Quel indice suggère souvent qu'un mur intérieur est porteur (structural) plutôt que simplement une cloison ?",
      "en": "What clue often suggests an interior wall is load-bearing rather than a simple partition?",
      "choices": [
       {
        "fr": "Les solives du plancher ou du toit au-dessus reposent perpendiculairement sur ce mur",
        "en": "The floor or roof joists above rest perpendicular to this wall",
        "correct": true
       },
       {
        "fr": "Le mur est peint d'une couleur différente",
        "en": "The wall is painted a different color",
        "correct": false
       },
       {
        "fr": "Le mur contient une prise électrique",
        "en": "The wall contains an electrical outlet",
        "correct": false
       },
       {
        "fr": "Le mur est situé près du centre géométrique de la maison",
        "en": "The wall is located near the house's geometric center",
        "correct": false
       }
      ],
      "explFr": "Un mur porteur reçoit typiquement les solives perpendiculaires qui transfèrent leur charge vers le bas.",
      "explEn": "A bearing wall typically receives perpendicular joists that transfer their load downward."
     },
     {
      "type": "tf",
      "fr": "Les poteaux courts (cripple studs) se trouvent généralement au-dessus des linteaux ou sous les appuis de fenêtre.",
      "en": "Cripple studs are generally found above headers or below window sills.",
      "isTrue": true,
      "explFr": "Ils transmettent la charge entre la sablière ou le linteau et les éléments porteurs adjacents.",
      "explEn": "They transmit load between the top plate or header and adjacent bearing elements."
     },
     {
      "fr": "Quel est le rôle principal d'un mur de contreventement (shear wall) dans une structure ?",
      "en": "What is the main role of a shear wall in a structure?",
      "choices": [
       {
        "fr": "Résister aux forces latérales causées par le vent ou les séismes",
        "en": "Resist lateral forces caused by wind or earthquakes",
        "correct": true
       },
       {
        "fr": "Supporter uniquement le poids de la toiture",
        "en": "Only support the weight of the roof",
        "correct": false
       },
       {
        "fr": "Servir de mur décoratif seulement",
        "en": "Serve only as a decorative wall",
        "correct": false
       },
       {
        "fr": "Remplacer le besoin d'une fondation",
        "en": "Replace the need for a foundation",
        "correct": false
       }
      ],
      "explFr": "Le mur de contreventement transfère les forces latérales vers la fondation de façon sécuritaire.",
      "explEn": "A shear wall safely transfers lateral forces down to the foundation."
     },
     {
      "type": "tf",
      "fr": "La sablière double (double top plate) aide à distribuer les charges et à lier les murs aux coins et intersections.",
      "en": "The double top plate helps distribute loads and tie walls together at corners and intersections.",
      "isTrue": true,
      "explFr": "Cette continuité structurale est essentielle à la solidité globale de l'ossature.",
      "explEn": "This structural continuity is essential to the overall strength of the frame."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un mur porteur du rez-de-chaussée doit être retiré pour agrandir une pièce, à l'étage supérieur reposant dessus. Quelle est l'étape structurale essentielle avant la démolition ?",
      "en": "A ground-floor bearing wall must be removed to enlarge a room, with the upper floor resting on it. What is the essential structural step before demolition?",
      "choices": [
       {
        "fr": "Installer un support temporaire (étançons) puis un linteau/poutre dimensionné par un professionnel pour reprendre la charge",
        "en": "Install temporary shoring, then a header/beam sized by a professional to carry the load",
        "correct": true
       },
       {
        "fr": "Retirer le mur directement, en travaillant rapidement pour limiter les risques",
        "en": "Remove the wall directly, working quickly to limit the risk",
        "correct": false
       },
       {
        "fr": "Ajouter simplement une cloison décorative après coup",
        "en": "Simply add a decorative partition afterward",
        "correct": false
       },
       {
        "fr": "Une précaution requise si le mur dépasse environ 12 pieds de long",
        "en": "A precaution is needed if the wall exceeds about 12 feet in length",
        "correct": false
       }
      ],
      "explFr": "Un mur porteur transfère une charge structurale ; sa suppression exige un support temporaire puis permanent correctement dimensionné.",
      "explEn": "A bearing wall transfers structural load; its removal requires temporary then properly sized permanent support."
     },
     {
      "type": "tf",
      "fr": "Un linteau surdimensionné (plus fort que nécessaire) n'est jamais problématique, alors qu'un linteau sous-dimensionné peut causer une flèche excessive ou une défaillance.",
      "en": "An oversized header (stronger than necessary) is never problematic, while an undersized header can cause excessive deflection or failure.",
      "isTrue": false,
      "explFr": "Un linteau exagérément massif peut alourdir inutilement la structure et compliquer l'assemblage, bien que le risque principal demeure le sous-dimensionnement.",
      "explEn": "An excessively massive header can needlessly add weight and complicate assembly, though the main risk remains undersizing."
     },
     {
      "fr": "Un mur de refend (porteur intérieur) au 2e étage ne repose pas directement sur un mur porteur ou une poutre au 1er étage. Quelle est la conséquence probable si rien n'est corrigé ?",
      "en": "A 2nd-floor bearing partition does not sit directly above a bearing wall or beam on the 1st floor. What is the likely consequence if nothing is corrected?",
      "choices": [
       {
        "fr": "Une charge non prévue est transférée au plancher du dessous, pouvant causer une flèche excessive ou une défaillance",
        "en": "An unplanned load is transferred to the floor below, potentially causing excessive deflection or failure",
        "correct": true
       },
       {
        "fr": "Un problème mineur, réglé simplement en ajoutant un tapis épais",
        "en": "A minor problem, solved simply by adding a thick rug",
        "correct": false
       },
       {
        "fr": "Le plancher devient automatiquement plus résistant",
        "en": "The floor automatically becomes stronger",
        "correct": false
       },
       {
        "fr": "Cela améliore l'insonorisation entre les étages",
        "en": "This improves soundproofing between floors",
        "correct": false
       }
      ],
      "explFr": "Les charges des murs porteurs doivent idéalement s'aligner verticalement (ou être reprises par des éléments dimensionnés) jusqu'à la fondation.",
      "explEn": "Bearing wall loads should ideally align vertically (or be picked up by properly sized elements) all the way to the foundation."
     },
     {
      "fr": "Un mur de contreventement en OSB montre des clous mal espacés et trop enfoncés (surenfoncés) lors d'une inspection. Quel est l'impact principal sur sa performance ?",
      "en": "A structural OSB shear wall shows unevenly spaced, overdriven nails during inspection. What is the main impact on its performance?",
      "choices": [
       {
        "fr": "Une réduction de sa capacité à résister aux forces latérales (racking), car le panneau perd sa capacité de transfert de charge aux clous",
        "en": "A reduced ability to resist lateral (racking) forces, since the panel loses load-transfer capacity at the nails",
        "correct": true
       },
       {
        "fr": "Un impact limité à l'apparence du panneau, sans effet structural",
        "en": "An impact limited to the panel's appearance, with no structural effect",
        "correct": false
       },
       {
        "fr": "Une amélioration de l'étanchéité à l'air uniquement",
        "en": "Only improved air-tightness",
        "correct": false
       },
       {
        "fr": "Une augmentation automatique de la valeur R du mur",
        "en": "An automatic increase in the wall's R-value",
        "correct": false
       }
      ],
      "explFr": "Des clous surenfoncés déchirent la fibre du panneau, réduisant la capacité du mur de contreventement à transférer les efforts de cisaillement.",
      "explEn": "Overdriven nails tear the panel's fibers, reducing the shear wall's ability to transfer shear forces."
     },
     {
      "type": "tf",
      "fr": "Un mur à ossature de 2 étages avec des poteaux continus sur toute la hauteur (balloon framing) se comporte différemment, en matière de retrait du bois, qu'un mur à plateforme (platform framing) où chaque étage est construit séparément.",
      "en": "A two-story wall with studs running continuously the full height (balloon framing) behaves differently, in terms of wood shrinkage, than platform framing where each story is built separately.",
      "isTrue": true,
      "explFr": "Le platform framing accumule le retrait à chaque plancher (plus de bois horizontal empilé), alors que le balloon framing le répartit différemment le long des poteaux continus.",
      "explEn": "Platform framing accumulates shrinkage at each floor (more stacked horizontal wood), while balloon framing distributes it differently along the continuous studs."
     },
     {
      "fr": "Un mur extérieur de 9 pieds de haut avec des poteaux 2×6 doit résister à une charge de vent latérale importante en zone exposée. Quel élément contribue le PLUS à sa résistance au racking ?",
      "en": "A 9-foot-tall exterior wall with 2×6 studs must resist significant lateral wind load in an exposed area. Which element contributes MOST to its racking resistance?",
      "choices": [
       {
        "fr": "Le revêtement structural bien cloué selon le patron prescrit (clouage rapproché en bordure)",
        "en": "Properly nailed structural sheathing per the prescribed pattern (tight edge nailing)",
        "correct": true
       },
       {
        "fr": "La couleur de la peinture extérieure",
        "en": "The color of the exterior paint",
        "correct": false
       },
       {
        "fr": "Le nombre de fenêtres présentes dans le mur",
        "en": "The number of windows in the wall",
        "correct": false
       },
       {
        "fr": "L'espacement des poteaux uniquement, sans égard au revêtement",
        "en": "Stud spacing alone, regardless of sheathing",
        "correct": false
       }
      ],
      "explFr": "Le clouage du revêtement structural, surtout en bordure des panneaux, détermine en grande partie la capacité de résistance latérale du mur.",
      "explEn": "Sheathing nailing, especially at panel edges, largely determines the wall's lateral resistance capacity."
     },
     {
      "fr": "Un mur porteur au sous-sol doit être remplacé section par section pour une rénovation, sans jamais retirer tout le support simultanément. Pourquoi cette méthode est-elle privilégiée ?",
      "en": "A basement bearing wall must be replaced section by section during a renovation, never removing all support at once. Why is this method preferred?",
      "choices": [
       {
        "fr": "Pour maintenir en tout temps un chemin de charge continu vers la fondation et éviter un effondrement",
        "en": "To maintain a continuous load path to the foundation at all times and prevent collapse",
        "correct": true
       },
       {
        "fr": "Parce que c'est plus rapide que de tout retirer d'un coup",
        "en": "Because it's faster than removing everything at once",
        "correct": false
       },
       {
        "fr": "Parce que le code l'exige uniquement pour des raisons esthétiques",
        "en": "Because code requires it only for aesthetic reasons",
        "correct": false
       },
       {
        "fr": "Cette méthode sert surtout à réduire la quantité de débris",
        "en": "This method mainly serves to reduce the amount of debris",
        "correct": false
       }
      ],
      "explFr": "Retirer tout le support d'un coup interromprait le chemin de charge, risquant un effondrement soudain de la structure au-dessus.",
      "explEn": "Removing all support at once would interrupt the load path, risking sudden collapse of the structure above."
     },
     {
      "type": "tf",
      "fr": "Les ancrages sismiques ou parasismiques (hold-downs) reliant les murs de contreventement à la fondation résistent principalement aux forces de soulèvement (uplift) causées par le renversement latéral.",
      "en": "Seismic or wind hold-down anchors connecting shear walls to the foundation mainly resist uplift forces caused by lateral overturning.",
      "isTrue": true,
      "explFr": "Sous une force latérale importante, un coin du mur tend à se soulever ; le hold-down retient ce coin ancré à la fondation.",
      "explEn": "Under significant lateral force, one corner of the wall tends to lift; the hold-down keeps that corner anchored to the foundation."
     },
     {
      "fr": "Un poteau d'angle (corner post) à trois poteaux est utilisé plutôt qu'un poteau simple. Quel est l'avantage principal de cette configuration ?",
      "en": "A three-stud corner post assembly is used instead of a single stud. What is the main advantage of this configuration?",
      "choices": [
       {
        "fr": "Elle fournit une surface de clouage pour le revêtement intérieur des deux côtés du coin tout en maintenant la structure",
        "en": "It provides a nailing surface for interior finish on both sides of the corner while maintaining the structure",
        "correct": true
       },
       {
        "fr": "Elle réduit le nombre total de matériaux utilisés",
        "en": "It reduces the total amount of material used",
        "correct": false
       },
       {
        "fr": "Elle élimine le besoin de sablière au coin",
        "en": "It eliminates the need for a top plate at the corner",
        "correct": false
       },
       {
        "fr": "Elle sert uniquement à des fins esthétiques",
        "en": "It serves only aesthetic purposes",
        "correct": false
       }
      ],
      "explFr": "Le poteau d'angle traditionnel assure un support structural tout en offrant une surface pour fixer le revêtement intérieur des deux murs adjacents.",
      "explEn": "The traditional corner post provides structural support while offering a nailing surface for interior finish on both adjoining walls."
     },
     {
      "type": "tf",
      "fr": "Un mur à ossature métallique légère (acier) exige des considérations différentes d'un mur en bois pour la fixation, la conduction thermique et la connexion des éléments.",
      "en": "A light-gauge steel-framed wall requires different considerations than a wood wall for fastening, thermal conduction, and member connections.",
      "isTrue": true,
      "explFr": "L'acier conduit davantage la chaleur (pont thermique accru) et utilise généralement des vis autotaraudeuses plutôt que des clous.",
      "explEn": "Steel conducts more heat (increased thermal bridging) and generally uses self-tapping screws rather than nails."
     }
    ]
   }
  ]
 },
 {
  "id": "charp08",
  "order": 8,
  "code": "",
  "hours": 150,
  "title_fr": "Toitures",
  "title_en": "Roofing",
  "icon": "🏠",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Comment exprime-t-on généralement la pente d'un toit ?",
      "en": "How is roof slope generally expressed?",
      "choices": [
       {
        "fr": "En rapport de levée sur portée (ex. 4/12)",
        "en": "As a rise-over-run ratio (e.g., 4/12)",
        "correct": true
       },
       {
        "fr": "En pourcentage d'humidité relative du bois",
        "en": "As a percentage of relative wood moisture",
        "correct": false
       },
       {
        "fr": "En degrés Celsius mesurés au faîte",
        "en": "In degrees Celsius measured at the ridge",
        "correct": false
       },
       {
        "fr": "En mètres carrés de surface totale",
        "en": "In square meters of total area",
        "correct": false
       }
      ],
      "explFr": "Le rapport levée/portée indique la pente, par ex. 4 po de levée pour 12 po de portée.",
      "explEn": "The rise/run ratio indicates the slope, e.g., 4 in. of rise per 12 in. of run."
     },
     {
      "fr": "Quelle pièce forme la pointe supérieure d'une charpente de toit, où se rejoignent les chevrons ?",
      "en": "Which member forms the top ridge of a roof frame where rafters meet?",
      "choices": [
       {
        "fr": "La panne faîtière (ridge board)",
        "en": "The ridge board",
        "correct": true
       },
       {
        "fr": "La sablière du mur porteur",
        "en": "The bearing wall's top plate",
        "correct": false
       },
       {
        "fr": "Le linteau de l'ouverture",
        "en": "The opening's header",
        "correct": false
       },
       {
        "fr": "L'entremise entre solives",
        "en": "The bridging between joists",
        "correct": false
       }
      ],
      "explFr": "La panne faîtière reçoit les chevrons opposés au sommet du toit.",
      "explEn": "The ridge board receives the opposing rafters at the top of the roof."
     },
     {
      "fr": "Quel matériau est couramment posé sous le bardeau pour protéger contre l'infiltration d'eau ?",
      "en": "Which material is commonly installed under shingles to protect against water infiltration?",
      "choices": [
       {
        "fr": "Membrane de sous-couche",
        "en": "Underlayment membrane",
        "correct": true
       },
       {
        "fr": "Isolant en vrac soufflé",
        "en": "Blown loose-fill insulation",
        "correct": false
       },
       {
        "fr": "Pare-vapeur en polyéthylène",
        "en": "Polyethylene vapor barrier",
        "correct": false
       },
       {
        "fr": "Plaque de gypse hydrofuge",
        "en": "Moisture-resistant gypsum board",
        "correct": false
       }
      ],
      "explFr": "La membrane de sous-couche protège le support avant la pose des bardeaux.",
      "explEn": "The underlayment protects the deck before shingles are installed."
     },
     {
      "fr": "Que mesure le « débord de toit » (overhang) ?",
      "en": "What does the roof \"overhang\" measure?",
      "choices": [
       {
        "fr": "La distance horizontale du toit qui dépasse le mur extérieur",
        "en": "The horizontal distance the roof extends beyond the exterior wall",
        "correct": true
       },
       {
        "fr": "La hauteur totale mesurée entre le sol et le faîte",
        "en": "The total height measured from the ground to the ridge",
        "correct": false
       },
       {
        "fr": "L'angle formé entre deux versants du toit",
        "en": "The angle formed between two roof slopes",
        "correct": false
       },
       {
        "fr": "La largeur totale de la façade principale",
        "en": "The total width of the main facade",
        "correct": false
       }
      ],
      "explFr": "Le débord protège les murs de la pluie et procure de l'ombre.",
      "explEn": "The overhang protects the walls from rain and provides shade."
     },
     {
      "type": "tf",
      "fr": "Une ferme de toit (roof truss) ne sert qu'à l'esthétique et ne supporte aucune charge structurale.",
      "en": "A roof truss is purely decorative and carries no structural load.",
      "isTrue": false,
      "explFr": "La ferme de toit supporte la charge du toit grâce à une structure triangulée, une forme rigide.",
      "explEn": "The roof truss carries the roof load through a triangulated, rigid structure."
     },
     {
      "fr": "Un toit a une pente de 6/12. Sur une portée horizontale (run) de 12 pieds, quelle est approximativement la levée (rise) totale ?",
      "en": "A roof has a 6/12 slope. Over a 12-foot horizontal run, what is the approximate total rise?",
      "choices": [
       {
        "fr": "6 pieds",
        "en": "6 feet",
        "correct": true
       },
       {
        "fr": "12 pieds",
        "en": "12 feet",
        "correct": false
       },
       {
        "fr": "3 pieds",
        "en": "3 feet",
        "correct": false
       },
       {
        "fr": "18 pieds",
        "en": "18 feet",
        "correct": false
       }
      ],
      "explFr": "Une pente de 6/12 signifie 6 po de levée par 12 po de portée, soit une levée égale à la moitié du run.",
      "explEn": "A 6/12 slope means 6 in. of rise per 12 in. of run, i.e., rise equal to half the run."
     },
     {
      "type": "tf",
      "fr": "Plus le chiffre du rapport de pente est élevé (ex. 9/12 comparé à 4/12), plus le toit est abrupt (raide).",
      "en": "The higher the slope ratio number (e.g., 9/12 compared to 4/12), the steeper the roof.",
      "isTrue": true,
      "explFr": "Un chiffre de levée plus élevé pour une même portée de 12 po donne une pente plus abrupte.",
      "explEn": "A higher rise number for the same 12-in. run gives a steeper slope."
     },
     {
      "fr": "Que représente la structure triangulée en bois visible sur cette photo ?",
      "en": "What does the triangulated wood structure shown in this photo represent?",
      "choices": [
       {
        "fr": "Une ferme de toit (roof truss)",
        "en": "A roof truss",
        "correct": true
       },
       {
        "fr": "Un mur à ossature de bois",
        "en": "A wood-framed wall",
        "correct": false
       },
       {
        "fr": "Un coffrage temporaire de béton",
        "en": "Temporary concrete formwork",
        "correct": false
       },
       {
        "fr": "Une charpente de plancher standard",
        "en": "A standard floor frame",
        "correct": false
       }
      ],
      "explFr": "La forme triangulée répétée, assemblée avec des plaques métalliques, est caractéristique d'une ferme de toit.",
      "explEn": "The repeated triangulated shape, assembled with metal plates, is characteristic of a roof truss."
     },
     {
      "type": "tf",
      "fr": "Les fermes de toit sur cette photo sont assemblées avec des plaques de connecteurs métalliques.",
      "en": "The roof trusses in this photo are assembled with metal connector plates.",
      "isTrue": true,
      "explFr": "Les plaques métalliques perforées visibles aux joints servent à assembler solidement les pièces de la ferme.",
      "explEn": "The perforated metal plates visible at the joints are used to solidly assemble the truss members."
     },
     {
      "fr": "Qu'est-ce qu'une « vallée » (valley) sur un toit ?",
      "en": "What is a \"valley\" on a roof?",
      "choices": [
       {
        "fr": "L'intersection intérieure entre deux versants de toit qui forme un angle rentrant",
        "en": "The inner intersection between two roof slopes forming an inward angle",
        "correct": true
       },
       {
        "fr": "Le point le plus élevé où se rejoignent les chevrons",
        "en": "The highest point where the rafters meet",
        "correct": false
       },
       {
        "fr": "La partie du toit qui dépasse le mur extérieur",
        "en": "The part of the roof that overhangs the exterior wall",
        "correct": false
       },
       {
        "fr": "Un type de bardeau réservé aux climats froids",
        "en": "A type of shingle reserved for cold climates",
        "correct": false
       }
      ],
      "explFr": "La vallée concentre l'écoulement de l'eau et exige une étanchéité renforcée.",
      "explEn": "The valley concentrates water runoff and requires reinforced waterproofing."
     },
     {
      "fr": "Quelle est la différence entre un toit à deux versants (gable) et un toit à quatre versants (hip) ?",
      "en": "What is the difference between a gable roof and a hip roof?",
      "choices": [
       {
        "fr": "Le toit à quatre versants a des pentes sur les quatre côtés, sans pignon vertical",
        "en": "The hip roof has slopes on all four sides, with no vertical gable end",
        "correct": true
       },
       {
        "fr": "Le toit à deux versants comporte des chevrons plus courts",
        "en": "The gable roof has shorter rafters",
        "correct": false
       },
       {
        "fr": "Le toit à quatre versants a une pente unique sur chaque face",
        "en": "The hip roof has a single slope on each face",
        "correct": false
       },
       {
        "fr": "Les deux types de toits sont structurellement identiques",
        "en": "Both roof types are structurally identical",
        "correct": false
       }
      ],
      "explFr": "Le toit à quatre versants (hip) élimine le pignon vertical présent sur un toit à deux versants (gable).",
      "explEn": "The hip roof eliminates the vertical gable end present on a gable roof."
     },
     {
      "fr": "Pourquoi installe-t-on une membrane « ice and water shield » près des rives de toit dans les climats froids ?",
      "en": "Why is an \"ice and water shield\" membrane installed near roof eaves in cold climates?",
      "choices": [
       {
        "fr": "Pour prévenir les infiltrations causées par les barrages de glace (ice dams)",
        "en": "To prevent leaks caused by ice dams",
        "correct": true
       },
       {
        "fr": "Pour améliorer uniquement l'apparence du toit fini",
        "en": "Only to improve the finished roof's appearance",
        "correct": false
       },
       {
        "fr": "Pour remplacer complètement le besoin de poser des bardeaux",
        "en": "To fully eliminate the need to install shingles",
        "correct": false
       },
       {
        "fr": "Pour réduire le bruit de la pluie sur le toit",
        "en": "To reduce the sound of rain on the roof",
        "correct": false
       }
      ],
      "explFr": "Cette membrane auto-adhésive scelle le support contre l'eau qui reflue sous la glace accumulée.",
      "explEn": "This self-adhering membrane seals the deck against water backing up under accumulated ice."
     },
     {
      "fr": "Quel est le rôle d'un larmier (drip edge) métallique installé aux rives du toit ?",
      "en": "What is the role of metal drip edge installed at the roof eaves?",
      "choices": [
       {
        "fr": "Diriger l'eau loin de la bordure du toit et protéger le support",
        "en": "Directing water away from the roof edge and protecting the deck",
        "correct": true
       },
       {
        "fr": "Supporter une partie du poids de la charpente du toit",
        "en": "Supporting part of the roof framing's weight",
        "correct": false
       },
       {
        "fr": "Servir de système principal de ventilation de l'entretoit",
        "en": "Serving as the attic's main ventilation system",
        "correct": false
       },
       {
        "fr": "Remplacer la fonction structurale de la panne faîtière",
        "en": "Replacing the ridge board's structural function",
        "correct": false
       }
      ],
      "explFr": "Le larmier empêche l'eau de s'infiltrer sous les bardeaux à la bordure du toit.",
      "explEn": "Drip edge prevents water from getting under the shingles at the roof edge."
     },
     {
      "fr": "Quel type d'évent de toiture est généralement installé le long du faîte ?",
      "en": "What type of roof vent is generally installed along the ridge?",
      "choices": [
       {
        "fr": "Un évent de faîte (ridge vent)",
        "en": "A ridge vent",
        "correct": true
       },
       {
        "fr": "Un évent de soffite uniquement",
        "en": "A soffit vent only",
        "correct": false
       },
       {
        "fr": "Une cheminée décorative",
        "en": "A decorative chimney",
        "correct": false
       },
       {
        "fr": "Un puits de lumière",
        "en": "A skylight",
        "correct": false
       }
      ],
      "explFr": "L'évent de faîte laisse échapper l'air chaud accumulé au sommet de l'entretoit.",
      "explEn": "The ridge vent lets warm air accumulated at the top of the attic escape."
     },
     {
      "fr": "Que désigne un « birdsmouth » (encoche d'appui) dans la taille d'un chevron ?",
      "en": "What does a \"birdsmouth\" cut refer to in rafter framing?",
      "choices": [
       {
        "fr": "Une encoche taillée pour que le chevron repose bien à plat sur la sablière",
        "en": "A notch cut so the rafter sits flat on the top plate",
        "correct": true
       },
       {
        "fr": "Le sommet pointu du chevron qui rejoint le faîte",
        "en": "The pointed top of the rafter that meets the ridge",
        "correct": false
       },
       {
        "fr": "Un type particulier de bardeau architectural",
        "en": "A special type of architectural shingle",
        "correct": false
       },
       {
        "fr": "Une ouverture prévue pour le passage d'un conduit",
        "en": "An opening provided for a duct to pass through",
        "correct": false
       }
      ],
      "explFr": "L'encoche permet un appui stable et une bonne surface de contact avec la sablière.",
      "explEn": "The notch allows a stable bearing and good contact surface with the top plate."
     },
     {
      "type": "tf",
      "fr": "Un toit à quatre versants (hip roof) n'a pas de pignon vertical, contrairement à un toit à deux versants (gable roof).",
      "en": "A hip roof has no vertical gable end, unlike a gable roof.",
      "isTrue": true,
      "explFr": "C'est la caractéristique distinctive du toit à quatre versants.",
      "explEn": "This is the distinguishing feature of a hip roof."
     },
     {
      "type": "tf",
      "fr": "Les évents de faîte et de soffite travaillent ensemble pour créer une circulation d'air continue dans l'entretoit.",
      "en": "Ridge and soffit vents work together to create continuous airflow in the attic.",
      "isTrue": true,
      "explFr": "L'air frais entre par le soffite et l'air chaud s'échappe par le faîte, créant une circulation naturelle.",
      "explEn": "Cool air enters through the soffit and warm air escapes through the ridge, creating natural circulation."
     },
     {
      "type": "tf",
      "fr": "L'accumulation de glace en bordure de toit (barrage de glace) est sans danger et ne cause jamais de dommages.",
      "en": "Ice accumulation at the roof edge (ice damming) is harmless and never causes damage.",
      "isTrue": false,
      "explFr": "Un barrage de glace peut forcer l'eau à refouler sous les bardeaux et causer des infiltrations.",
      "explEn": "An ice dam can force water back under the shingles and cause leaks."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Un toit a une pente de 50 %. Quelle est sa pente exprimée en fraction usuelle (montée sur 12 po de course) ?",
      "en": "A roof has a 50% slope. What is its slope expressed in the usual fraction form (rise per 12 in of run)?",
      "choices": [
       {
        "fr": "6/12",
        "en": "6/12",
        "correct": true
       },
       {
        "fr": "5/12",
        "en": "5/12",
        "correct": false
       },
       {
        "fr": "50/12",
        "en": "50/12",
        "correct": false
       },
       {
        "fr": "12/6",
        "en": "12/6",
        "correct": false
       }
      ],
      "explFr": "Une pente de 50 % signifie une montée de 0,5 po par po de course, soit 6 po par 12 po de course : 6/12.",
      "explEn": "A 50% slope means 0.5 in of rise per in of run, or 6 in per 12 in of run: 6/12."
     },
     {
      "type": "tf",
      "fr": "Un faîtage (ridge) sous forme de poutre structurale porte réellement le poids du toit, contrairement à une simple planche de faîte non structurale.",
      "en": "A structural ridge beam actually carries the roof's weight, unlike a simple non-structural ridge board.",
      "isTrue": true,
      "explFr": "La planche de faîte sert surtout de point d'assemblage, alors que la poutre de faîte porte une charge.",
      "explEn": "A ridge board mainly serves as an assembly point, while a ridge beam carries a load."
     },
     {
      "fr": "Pour une pente de 8/12 et une course horizontale de 6 pieds, quelle est approximativement la longueur du chevron (arrondie) ?",
      "en": "For an 8/12 slope and a 6-foot horizontal run, what is the approximate rafter length (rounded)?",
      "choices": [
       {
        "fr": "Environ 7,2 pieds",
        "en": "About 7.2 feet",
        "correct": true
       },
       {
        "fr": "Environ 6,5 pieds, à peine plus que la course horizontale",
        "en": "About 6.5 feet, barely more than the horizontal run",
        "correct": false
       },
       {
        "fr": "Environ 14 pieds",
        "en": "About 14 feet",
        "correct": false
       },
       {
        "fr": "Environ 4,8 pieds",
        "en": "About 4.8 feet",
        "correct": false
       }
      ],
      "explFr": "Le facteur de longueur pour une pente 8/12 est d'environ 1,2 ; 6 pi × 1,2 ≈ 7,2 pi.",
      "explEn": "The length factor for an 8/12 slope is about 1.2; 6 ft × 1.2 ≈ 7.2 ft."
     },
     {
      "fr": "Quel est un avantage clé d'une ferme de toit préfabriquée (truss) comparé à une charpente conventionnelle (stick framing) ?",
      "en": "What is a key advantage of a prefabricated roof truss compared to conventional stick framing?",
      "choices": [
       {
        "fr": "Des portées plus grandes sans mur porteur central et une installation généralement plus rapide",
        "en": "Longer spans without a central bearing wall, and generally faster installation",
        "correct": true
       },
       {
        "fr": "Un coût généralement inférieur pour les petits projets seulement",
        "en": "Generally lower cost for small projects only",
        "correct": false
       },
       {
        "fr": "Elle élimine automatiquement le besoin de ventiler le grenier",
        "en": "It automatically eliminates the need to ventilate the attic",
        "correct": false
       },
       {
        "fr": "Elle peut être modifiée librement sur le chantier sans ingénieur",
        "en": "It can be freely modified on site without an engineer",
        "correct": false
       }
      ],
      "explFr": "Les fermes sont conçues en usine pour des portées optimisées, mais ne doivent jamais être modifiées sans approbation technique.",
      "explEn": "Trusses are factory-engineered for optimized spans, but should never be modified without technical approval."
     },
     {
      "type": "tf",
      "fr": "Le papier de sous-couche (underlayment) sert de deuxième barrière contre l'eau, sous le revêtement principal du toit.",
      "en": "Roofing underlayment acts as a secondary water barrier beneath the main roof covering.",
      "isTrue": true,
      "explFr": "Si le revêtement principal est endommagé ou infiltré, la sous-couche offre une protection supplémentaire.",
      "explEn": "If the main covering is damaged or infiltrated, the underlayment provides extra protection."
     },
     {
      "fr": "Quel est le rôle du solin de vallée (valley flashing) à l'intersection de deux pentes de toit ?",
      "en": "What is the role of valley flashing at the intersection of two roof slopes?",
      "choices": [
       {
        "fr": "Diriger l'eau qui converge vers la vallée de manière étanche",
        "en": "Safely direct the water converging into the valley",
        "correct": true
       },
       {
        "fr": "Décorer visuellement l'intersection des pentes",
        "en": "Visually decorate the slope intersection",
        "correct": false
       },
       {
        "fr": "Remplacer le besoin de bardeaux dans la vallée",
        "en": "Replace the need for shingles in the valley",
        "correct": false
       },
       {
        "fr": "Empêcher la neige de fondre",
        "en": "Prevent snow from melting",
        "correct": false
       }
      ],
      "explFr": "La vallée concentre un grand volume d'eau ; un solin bien posé prévient les infiltrations.",
      "explEn": "The valley concentrates a large volume of water; properly installed flashing prevents leaks."
     },
     {
      "fr": "Pourquoi installe-t-on une membrane pare-glace (ice and water shield) aux avant-toits dans les climats froids ?",
      "en": "Why is an ice-and-water shield membrane installed at the eaves in cold climates?",
      "choices": [
       {
        "fr": "Pour protéger contre les infiltrations causées par les barrages de glace (ice dams)",
        "en": "To protect against leaks caused by ice dams",
        "correct": true
       },
       {
        "fr": "Pour améliorer uniquement l'apparence du toit",
        "en": "Only to improve the roof's appearance",
        "correct": false
       },
       {
        "fr": "Parce que le code l'exige seulement dans les climats chauds",
        "en": "Because code requires it only in warm climates",
        "correct": false
       },
       {
        "fr": "Pour remplacer le besoin de gouttières",
        "en": "To replace the need for gutters",
        "correct": false
       }
      ],
      "explFr": "La glace accumulée à l'avant-toit peut forcer l'eau de fonte sous les bardeaux ; cette membrane empêche l'infiltration.",
      "explEn": "Ice accumulated at the eave can force meltwater under the shingles; this membrane prevents infiltration."
     },
     {
      "type": "tf",
      "fr": "Une surtoiture (overframing) consiste à construire une nouvelle structure de toit par-dessus une toiture existante.",
      "en": "Overframing involves building a new roof structure over an existing roof.",
      "isTrue": true,
      "explFr": "C'est une technique parfois utilisée pour changer la pente ou l'apparence d'un toit existant.",
      "explEn": "This is a technique sometimes used to change the slope or appearance of an existing roof."
     },
     {
      "fr": "Quelle est une règle générale approximative pour le ratio de ventilation d'un grenier (surface de ventilation par rapport à la surface du plafond) ?",
      "en": "What is a general approximate rule for attic ventilation ratio (vent area relative to ceiling area)?",
      "choices": [
       {
        "fr": "Environ 1/300, avec pare-vapeur adéquat (ou 1/150 sans pare-vapeur)",
        "en": "About 1/300, with a proper vapor barrier (or 1/150 without one)",
        "correct": true
       },
       {
        "fr": "Une ventilation nécessaire seulement dans les climats humides",
        "en": "Ventilation is only necessary in humid climates",
        "correct": false
       },
       {
        "fr": "La totalité de la surface du plafond",
        "en": "The entire ceiling area",
        "correct": false
       },
       {
        "fr": "Environ 1/1000, une valeur réservée aux toits plats seulement",
        "en": "About 1/1000, a value reserved for flat roofs only",
        "correct": false
       }
      ],
      "explFr": "Ce ratio général aide à prévenir l'accumulation d'humidité et la formation de glace, à ajuster selon le climat.",
      "explEn": "This general ratio helps prevent moisture buildup and ice formation, to be adjusted per climate."
     },
     {
      "type": "tf",
      "fr": "Un toit en croupe (hip roof) n'a pas de pignons (extrémités verticales triangulaires), contrairement à un toit à deux versants (gable).",
      "en": "A hip roof has no gable ends (triangular vertical ends), unlike a gable roof.",
      "isTrue": true,
      "explFr": "Toutes les faces d'un toit en croupe descendent en pente vers les murs.",
      "explEn": "All faces of a hip roof slope down toward the walls."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un toit à pente 4/12 rencontre un toit à pente 8/12 à une vallée. Quelle complexité additionnelle cela crée-t-il pour la coupe des chevrons de vallée ?",
      "en": "A 4/12 pitch roof meets an 8/12 pitch roof at a valley. What additional complexity does this create for cutting the valley rafters?",
      "choices": [
       {
        "fr": "Une vallée inégale (pentes différentes) exige des calculs d'angles spécifiques, différents d'une vallée à pentes égales",
        "en": "An unequal-pitch valley requires specific angle calculations, different from an equal-pitch valley",
        "correct": true
       },
       {
        "fr": "Une complexité limitée à la pose du solin, pas au calcul des angles",
        "en": "A complexity limited to installing the flashing, not the angle calculations",
        "correct": false
       },
       {
        "fr": "Cela élimine le besoin de solin de vallée",
        "en": "This eliminates the need for valley flashing",
        "correct": false
       },
       {
        "fr": "La vallée devient automatiquement plus courte",
        "en": "The valley automatically becomes shorter",
        "correct": false
       }
      ],
      "explFr": "Une vallée entre deux pentes différentes (vallée irrégulière) exige un calcul d'angle distinct de la méthode standard pour pentes égales.",
      "explEn": "A valley between two different pitches (an irregular valley) requires an angle calculation distinct from the standard equal-pitch method."
     },
     {
      "type": "tf",
      "fr": "Un système de ventilation de toit mal équilibré, avec beaucoup plus d'évents de faîtage que d'évents de soffite, peut réduire l'efficacité de la circulation d'air et même aspirer de l'air conditionné par des fissures.",
      "en": "A poorly balanced roof ventilation system, with far more ridge vents than soffit vents, can reduce airflow efficiency and even draw conditioned air through gaps.",
      "isTrue": true,
      "explFr": "Un déséquilibre entre l'entrée (soffite) et la sortie (faîtage) nuit à l'effet de cheminée recherché.",
      "explEn": "An imbalance between intake (soffit) and exhaust (ridge) undermines the desired stack effect."
     },
     {
      "fr": "Une ferme de toit préfabriquée montre une membrure inférieure fissurée après une modification non autorisée sur le chantier (perçage pour un conduit). Quelle est la démarche appropriée ?",
      "en": "A prefabricated roof truss shows a cracked bottom chord after an unauthorized on-site modification (drilling for ductwork). What is the appropriate course of action?",
      "choices": [
       {
        "fr": "Consulter l'ingénieur ou le fabricant de la ferme pour une réparation ou un renfort approprié",
        "en": "Consult the truss engineer or manufacturer for proper repair or reinforcement",
        "correct": true
       },
       {
        "fr": "Ignorer la fissure si elle semble petite",
        "en": "Ignore the crack if it looks small",
        "correct": false
       },
       {
        "fr": "Renforcer soi-même avec des clous supplémentaires sans validation technique",
        "en": "Reinforce it yourself with extra nails without technical validation",
        "correct": false
       },
       {
        "fr": "Remplacer uniquement la section visible sans vérifier le reste de la ferme",
        "en": "Replace only the visible section without checking the rest of the truss",
        "correct": false
       }
      ],
      "explFr": "Les fermes sont conçues selon des calculs précis ; toute modification ou dommage doit être validé par un professionnel avant réparation.",
      "explEn": "Trusses are engineered to precise calculations; any modification or damage must be validated by a professional before repair."
     },
     {
      "fr": "Un toit plat (faible pente) accumule de l'eau stagnante (ponding) après chaque pluie, malgré une pente minimale prévue. Quelle est la cause la plus probable ?",
      "en": "A low-slope roof accumulates standing water (ponding) after every rain, despite a planned minimum slope. What is the most likely cause?",
      "choices": [
       {
        "fr": "Un affaissement structural local ou un drain obstrué créant une zone basse imprévue",
        "en": "Localized structural sag or a clogged drain creating an unplanned low spot",
        "correct": true
       },
       {
        "fr": "La membrane est conçue pour retenir l'eau durant les grosses pluies seulement",
        "en": "The membrane is designed to retain water only during heavy rain",
        "correct": false
       },
       {
        "fr": "L'eau stagnante est normale et sans conséquence sur tout type de toit plat",
        "en": "Standing water is normal and has no consequence on any flat roof",
        "correct": false
       },
       {
        "fr": "Le ponding est lié uniquement à la couleur de la membrane",
        "en": "Ponding is related only to the membrane's color",
        "correct": false
       }
      ],
      "explFr": "L'eau stagnante accélère la dégradation de la membrane et indique souvent un problème de pente ou de drainage à corriger.",
      "explEn": "Standing water accelerates membrane degradation and often indicates a slope or drainage problem that needs correcting."
     },
     {
      "type": "tf",
      "fr": "Le calcul de la longueur d'un chevron de vallée irrégulière (pentes différentes de chaque côté) est plus complexe que celui d'un chevron de vallée à pentes égales et nécessite souvent des tables spécialisées ou des calculs trigonométriques.",
      "en": "Calculating the length of an irregular valley rafter (different pitches on each side) is more complex than an equal-pitch valley rafter and often requires specialized tables or trigonometric calculations.",
      "isTrue": true,
      "explFr": "Les angles de coupe et la longueur varient selon chaque pente, contrairement à une vallée standard à pentes égales.",
      "explEn": "Cutting angles and length vary with each pitch, unlike a standard equal-pitch valley."
     },
     {
      "fr": "Une charpente de toit en fermes est conçue pour une charge de neige de 2,4 kPa. La région est reclassée à 3,2 kPa après une révision du code. Quelle est la conséquence pour les fermes existantes ?",
      "en": "A truss roof is designed for a 2.4 kPa snow load. The region is reclassified to 3.2 kPa after a code revision. What is the consequence for the existing trusses?",
      "choices": [
       {
        "fr": "Les fermes existantes pourraient être sous-dimensionnées et nécessiter une évaluation ou un renforcement structural",
        "en": "The existing trusses could be undersized and require structural evaluation or reinforcement",
        "correct": true
       },
       {
        "fr": "Une conséquence limitée aux fermes situées près du faîtage",
        "en": "A consequence limited to trusses located near the ridge",
        "correct": false
       },
       {
        "fr": "La charge de neige affecte surtout l'espacement des pannes",
        "en": "Snow load mainly affects purlin spacing",
        "correct": false
       },
       {
        "fr": "Il suffit simplement de repeindre la toiture après la révision",
        "en": "The roof simply needs repainting after the revision",
        "correct": false
       }
      ],
      "explFr": "Une charge de conception augmentée peut dépasser la capacité des fermes existantes, nécessitant une vérification par un ingénieur.",
      "explEn": "An increased design load can exceed the capacity of existing trusses, requiring an engineer's review."
     },
     {
      "fr": "Une membrane de toit plat montre des cloques (bulles) après quelques années. Quelle est une cause fréquente de ce problème ?",
      "en": "A flat roof membrane shows blisters after a few years. What is a frequent cause of this problem?",
      "choices": [
       {
        "fr": "De l'humidité ou de l'air emprisonné sous la membrane qui se dilate avec la chaleur",
        "en": "Moisture or air trapped under the membrane that expands with heat",
        "correct": true
       },
       {
        "fr": "Une pente beaucoup trop excessive du toit plat",
        "en": "A far too excessive slope on the flat roof",
        "correct": false
       },
       {
        "fr": "Un excès de ventilation naturelle sous le toit",
        "en": "Excessive natural ventilation under the roof",
        "correct": false
       },
       {
        "fr": "Une couleur de membrane jugée trop pâle",
        "en": "A membrane color judged to be too light",
        "correct": false
       }
      ],
      "explFr": "L'air ou l'humidité emprisonnés se dilatent sous l'effet du soleil, soulevant la membrane en cloques.",
      "explEn": "Trapped air or moisture expands under sun exposure, lifting the membrane into blisters."
     },
     {
      "type": "tf",
      "fr": "Un pare-vapeur mal positionné dans un assemblage de toit (du mauvais côté de l'isolant selon le climat) peut piéger l'humidité et causer de la pourriture dans la charpente du toit.",
      "en": "A vapor barrier misplaced in a roof assembly (on the wrong side of the insulation for the climate) can trap moisture and cause rot in the roof framing.",
      "isTrue": true,
      "explFr": "Le positionnement du pare-vapeur doit toujours correspondre au climat et à la direction dominante de diffusion de vapeur.",
      "explEn": "Vapor barrier placement must always match the climate and the dominant direction of vapor diffusion."
     },
     {
      "fr": "Un chevron de 2×8 à 24 po centre en centre est jugé insuffisant pour une nouvelle charge de neige régionale plus élevée. Quelle solution technique est couramment envisagée sans reconstruire tout le toit ?",
      "en": "A 2×8 rafter at 24 in on-center is deemed insufficient for a higher new regional snow load. What technical solution is commonly considered without rebuilding the entire roof?",
      "choices": [
       {
        "fr": "Un renforcement (sistering) avec des chevrons additionnels ou une réduction de l'espacement, selon l'avis d'un ingénieur",
        "en": "Reinforcing (sistering) with additional rafters or reducing spacing, based on an engineer's advice",
        "correct": true
       },
       {
        "fr": "Peindre les chevrons d'une couleur plus résistante",
        "en": "Painting the rafters a more resistant color",
        "correct": false
       },
       {
        "fr": "Ignorer le problème tant que le bulletin météo ne prévoit pas de neige",
        "en": "Ignoring the problem as long as the forecast shows no snow",
        "correct": false
       },
       {
        "fr": "Retirer l'isolant du grenier pour alléger la structure",
        "en": "Removing attic insulation to lighten the structure",
        "correct": false
       }
      ],
      "explFr": "Le sistering ou la réduction d'espacement peut augmenter la capacité portante sans reconstruction complète, sous réserve d'une validation technique.",
      "explEn": "Sistering or reducing spacing can increase load capacity without a full rebuild, subject to technical validation."
     },
     {
      "type": "tf",
      "fr": "Un solin de mur latéral (step flashing) mal entrelacé avec le bardeau peut permettre à l'eau de s'infiltrer même si le toit semble visuellement en bon état.",
      "en": "Step flashing improperly interwoven with shingles can allow water infiltration even if the roof appears visually sound.",
      "isTrue": true,
      "explFr": "Chaque pièce de solin doit être intercalée correctement avec chaque rangée de bardeaux pour créer un chemin d'évacuation d'eau continu.",
      "explEn": "Each flashing piece must be properly interlaced with each shingle course to create a continuous water-shedding path."
     }
    ]
   }
  ]
 },
 {
  "id": "charp09",
  "order": 9,
  "code": "",
  "hours": 90,
  "title_fr": "Isolation et ventilation",
  "title_en": "Insulation & Ventilation",
  "icon": "🌬️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Que mesure la valeur R d'un isolant ?",
      "en": "What does the R-value of insulation measure?",
      "choices": [
       {
        "fr": "Sa résistance thermique",
        "en": "Its thermal resistance",
        "correct": true
       },
       {
        "fr": "Son poids",
        "en": "Its weight",
        "correct": false
       },
       {
        "fr": "Sa résistance au feu",
        "en": "Its fire resistance",
        "correct": false
       },
       {
        "fr": "Son prix",
        "en": "Its price",
        "correct": false
       }
      ],
      "explFr": "Plus la valeur R est élevée, plus l'isolant résiste au passage de la chaleur.",
      "explEn": "The higher the R-value, the more the insulation resists heat flow."
     },
     {
      "fr": "Pourquoi la ventilation du toit (soffite/évent de faîte) est-elle importante ?",
      "en": "Why is roof ventilation (soffit/ridge vents) important?",
      "choices": [
       {
        "fr": "Pour évacuer l'humidité et prévenir la formation de glace et de moisissure",
        "en": "To remove moisture and prevent ice damming and mold",
        "correct": true
       },
       {
        "fr": "Pour refroidir uniquement l'intérieur en période estivale",
        "en": "Only to cool the interior during summer",
        "correct": false
       },
       {
        "fr": "Pour améliorer seulement l'apparence extérieure du toit",
        "en": "Only to improve the roof's outward appearance",
        "correct": false
       },
       {
        "fr": "Pour réduire le poids total de la charpente",
        "en": "To reduce the total weight of the framing",
        "correct": false
       }
      ],
      "explFr": "Une bonne circulation d'air limite l'accumulation d'humidité dans le grenier.",
      "explEn": "Good airflow limits moisture buildup in the attic."
     },
     {
      "fr": "Quel type d'isolant est appliqué par pulvérisation et prend de l'expansion ?",
      "en": "Which type of insulation is spray-applied and expands?",
      "choices": [
       {
        "fr": "Mousse de polyuréthane giclée",
        "en": "Spray polyurethane foam",
        "correct": true
       },
       {
        "fr": "Laine minérale en natte",
        "en": "Batt mineral wool",
        "correct": false
       },
       {
        "fr": "Polystyrène rigide",
        "en": "Rigid polystyrene",
        "correct": false
       },
       {
        "fr": "Cellulose en vrac",
        "en": "Loose-fill cellulose",
        "correct": false
       }
      ],
      "explFr": "La mousse giclée épouse les formes et scelle les infiltrations d'air.",
      "explEn": "Spray foam conforms to shapes and seals air leaks."
     },
     {
      "fr": "Quelle conséquence peut avoir un manque de ventilation dans un grenier ?",
      "en": "What can result from insufficient attic ventilation?",
      "choices": [
       {
        "fr": "Accumulation d'humidité, moisissure et formation de glaçons (dams)",
        "en": "Moisture buildup, mold, and ice damming",
        "correct": true
       },
       {
        "fr": "Amélioration générale de la performance isolante",
        "en": "A general improvement in insulation performance",
        "correct": false
       },
       {
        "fr": "Réduction notable du bruit ambiant à l'intérieur",
        "en": "A noticeable reduction in indoor ambient noise",
        "correct": false
       },
       {
        "fr": "Diminution des coûts de chauffage en hiver",
        "en": "Lower heating costs in winter",
        "correct": false
       }
      ],
      "explFr": "Un grenier mal ventilé favorise la condensation et la dégradation de la charpente.",
      "explEn": "A poorly ventilated attic promotes condensation and framing damage."
     },
     {
      "type": "tf",
      "fr": "On installe un pare-vapeur du côté chaud d'un mur isolé (climat froid) pour empêcher l'humidité de l'air intérieur de migrer et de condenser dans le mur.",
      "en": "A vapor barrier is installed on the warm side of an insulated wall (cold climate) to prevent indoor air moisture from migrating and condensing in the wall.",
      "isTrue": true,
      "explFr": "Le pare-vapeur limite la condensation à l'intérieur de la structure du mur.",
      "explEn": "The vapor barrier limits condensation inside the wall assembly."
     },
     {
      "fr": "Dans un mur mal isolé où l'air chaud humide de l'intérieur peut atteindre une surface froide, quel phénomène risque de se produire ?",
      "en": "In a poorly insulated wall where warm, moist indoor air can reach a cold surface, what phenomenon is likely to occur?",
      "choices": [
       {
        "fr": "De la condensation pouvant mener à de la moisissure",
        "en": "Condensation that can lead to mold",
        "correct": true
       },
       {
        "fr": "Une amélioration mesurable de la valeur R du mur",
        "en": "A measurable improvement in the wall's R-value",
        "correct": false
       },
       {
        "fr": "Une réduction du bruit provenant de l'extérieur",
        "en": "A reduction in noise coming from outside",
        "correct": false
       },
       {
        "fr": "Un léger changement de couleur de la surface intérieure seulement",
        "en": "Only a slight color change on the interior surface",
        "correct": false
       }
      ],
      "explFr": "L'air chaud humide qui rencontre une surface froide condense, ce qui peut mener à des moisissures.",
      "explEn": "Warm, moist air meeting a cold surface condenses, which can lead to mold."
     },
     {
      "type": "tf",
      "fr": "Une valeur R plus élevée signifie une meilleure performance isolante contre la perte de chaleur.",
      "en": "A higher R-value means better insulating performance against heat loss.",
      "isTrue": true,
      "explFr": "La valeur R mesure la résistance thermique : plus elle est élevée, meilleure est l'isolation.",
      "explEn": "R-value measures thermal resistance: the higher it is, the better the insulation."
     },
     {
      "fr": "Quel élément est pointé par la flèche dans cette coupe de mur isolé (côté extérieur) ?",
      "en": "Which element is pointed out by the arrow in this insulated wall section (exterior side)?",
      "choices": [
       {
        "fr": "Le panneau de revêtement extérieur (sheathing)",
        "en": "The exterior sheathing panel",
        "correct": true
       },
       {
        "fr": "L'isolant entre les poteaux",
        "en": "The insulation between the studs",
        "correct": false
       },
       {
        "fr": "Le pare-vapeur intérieur",
        "en": "The interior vapor barrier",
        "correct": false
       },
       {
        "fr": "Le gypse du côté intérieur",
        "en": "The interior-side gypsum board",
        "correct": false
       }
      ],
      "explFr": "Le panneau extérieur (sheathing) est la première couche structurale côté extérieur, avant le revêtement.",
      "explEn": "The exterior sheathing panel is the first structural layer on the outside, before the cladding."
     },
     {
      "type": "tf",
      "fr": "La ventilation du toit est adéquate dans cette illustration : l'air circule librement du soffite au faîte.",
      "en": "Roof ventilation is adequate in this illustration: air flows freely from the soffit to the ridge.",
      "isTrue": false,
      "explFr": "L'isolant illustré bloque directement l'évent de soffite, empêchant la circulation de l'air.",
      "explEn": "The insulation shown directly blocks the soffit vent, preventing air circulation."
     },
     {
      "fr": "Quelle est la différence principale entre la mousse à cellules ouvertes et à cellules fermées ?",
      "en": "What is the main difference between open-cell and closed-cell spray foam?",
      "choices": [
       {
        "fr": "La mousse à cellules fermées est plus dense et offre une valeur R plus élevée par pouce",
        "en": "Closed-cell foam is denser and offers a higher R-value per inch",
        "correct": true
       },
       {
        "fr": "La mousse à cellules ouvertes coûte généralement plus cher au pouce de R",
        "en": "Open-cell foam generally costs more per R per inch",
        "correct": false
       },
       {
        "fr": "Les deux types de mousse offrent une performance comparable par pouce",
        "en": "Both foam types offer comparable performance per inch",
        "correct": false
       },
       {
        "fr": "La mousse à cellules fermées sert principalement à l'extérieur",
        "en": "Closed-cell foam is mainly used outdoors",
        "correct": false
       }
      ],
      "explFr": "La structure plus dense de la mousse à cellules fermées améliore sa performance thermique par pouce.",
      "explEn": "The denser structure of closed-cell foam improves its thermal performance per inch."
     },
     {
      "fr": "Qu'est-ce qu'un « pont thermique » (thermal bridging) dans une construction ?",
      "en": "What is \"thermal bridging\" in construction?",
      "choices": [
       {
        "fr": "Un chemin qui permet à la chaleur de s'échapper plus facilement, souvent à travers les éléments structuraux",
        "en": "A path that allows heat to escape more easily, often through structural elements",
        "correct": true
       },
       {
        "fr": "Un type d'isolant liquide appliqué au pinceau",
        "en": "A type of liquid insulation applied with a brush",
        "correct": false
       },
       {
        "fr": "Un système de chauffage central intégré au mur",
        "en": "A central heating system built into the wall",
        "correct": false
       },
       {
        "fr": "Une membrane pare-air installée côté extérieur seulement",
        "en": "An air barrier membrane installed only on the exterior side",
        "correct": false
       }
      ],
      "explFr": "Les poteaux de bois ou d'acier conduisent la chaleur plus facilement que l'isolant, créant un pont thermique.",
      "explEn": "Wood or steel studs conduct heat more easily than insulation, creating a thermal bridge."
     },
     {
      "fr": "Que signifie l'indice STC (sound transmission class) d'un mur ou plancher ?",
      "en": "What does the STC (sound transmission class) rating of a wall or floor indicate?",
      "choices": [
       {
        "fr": "Sa capacité à réduire la transmission du bruit",
        "en": "Its ability to reduce sound transmission",
        "correct": true
       },
       {
        "fr": "Sa capacité à résister à la propagation du feu",
        "en": "Its ability to resist fire spread",
        "correct": false
       },
       {
        "fr": "Sa résistance thermique globale mesurée en R",
        "en": "Its overall thermal resistance measured in R-value",
        "correct": false
       },
       {
        "fr": "Son prix moyen au pied carré installé",
        "en": "Its average installed price per square foot",
        "correct": false
       }
      ],
      "explFr": "Plus l'indice STC est élevé, plus l'assemblage bloque efficacement le bruit.",
      "explEn": "The higher the STC rating, the more effectively the assembly blocks sound."
     },
     {
      "fr": "À quoi sert un ventilateur récupérateur de chaleur (VRC/HRV) dans une maison bien isolée et étanche ?",
      "en": "What is a heat recovery ventilator (HRV) used for in a well-insulated, airtight house?",
      "choices": [
       {
        "fr": "Renouveler l'air intérieur tout en récupérant une partie de la chaleur de l'air évacué",
        "en": "Renewing indoor air while recovering some heat from the exhausted air",
        "correct": true
       },
       {
        "fr": "Isoler davantage les murs extérieurs de la maison",
        "en": "Further insulating the home's exterior walls",
        "correct": false
       },
       {
        "fr": "Remplacer complètement le système de chauffage principal",
        "en": "Fully replacing the main heating system",
        "correct": false
       },
       {
        "fr": "Climatiser la maison uniquement durant l'été",
        "en": "Cooling the home only during summer",
        "correct": false
       }
      ],
      "explFr": "Le VRC assure un renouvellement d'air sain tout en limitant les pertes de chaleur.",
      "explEn": "The HRV ensures healthy air renewal while limiting heat loss."
     },
     {
      "fr": "Pourquoi isole-t-on et scelle-t-on la trappe d'accès au grenier ?",
      "en": "Why is the attic access hatch insulated and sealed?",
      "choices": [
       {
        "fr": "Pour éviter les pertes de chaleur et les infiltrations d'air à cet endroit souvent négligé",
        "en": "To prevent heat loss and air leaks at this often-overlooked spot",
        "correct": true
       },
       {
        "fr": "Pour empêcher uniquement l'entrée d'insectes dans le grenier",
        "en": "Only to keep insects from entering the attic",
        "correct": false
       },
       {
        "fr": "Pour respecter une exigence purement esthétique",
        "en": "To meet a purely aesthetic requirement",
        "correct": false
       },
       {
        "fr": "Pour faciliter l'accès rapide en cas d'urgence",
        "en": "To allow quick access in case of emergency",
        "correct": false
       }
      ],
      "explFr": "Une trappe non scellée est une source fréquente de pertes de chaleur importantes.",
      "explEn": "An unsealed hatch is a frequent source of significant heat loss."
     },
     {
      "fr": "Qu'est-ce que l'isolation continue appliquée sur l'extérieur d'un mur ?",
      "en": "What is continuous insulation applied to the exterior of a wall?",
      "choices": [
       {
        "fr": "Une couche d'isolant sans interruption qui réduit les ponts thermiques causés par les poteaux",
        "en": "An uninterrupted insulation layer that reduces thermal bridging from the studs",
        "correct": true
       },
       {
        "fr": "Un isolant installé uniquement entre les poteaux muraux",
        "en": "Insulation installed only between the wall studs",
        "correct": false
       },
       {
        "fr": "Un type de peinture isolante appliquée en finition",
        "en": "A type of insulating paint applied as a finish",
        "correct": false
       },
       {
        "fr": "Une membrane pare-vapeur posée côté intérieur seulement",
        "en": "A vapor barrier membrane installed only on the interior side",
        "correct": false
       }
      ],
      "explFr": "En couvrant les poteaux, l'isolation continue réduit les pertes de chaleur à travers l'ossature.",
      "explEn": "By covering the studs, continuous insulation reduces heat loss through the framing."
     },
     {
      "type": "tf",
      "fr": "Une valeur R plus élevée par pouce d'épaisseur signifie généralement un isolant plus performant thermiquement.",
      "en": "A higher R-value per inch of thickness generally means a thermally better-performing insulation.",
      "isTrue": true,
      "explFr": "La valeur R par pouce permet de comparer l'efficacité de différents isolants.",
      "explEn": "R-value per inch allows comparison of the efficiency of different insulation types."
     },
     {
      "type": "tf",
      "fr": "L'étanchéité à l'air (air sealing) n'a aucun lien avec l'efficacité énergétique d'un bâtiment.",
      "en": "Air sealing has no connection to a building's energy efficiency.",
      "isTrue": false,
      "explFr": "Les fuites d'air non contrôlées peuvent causer des pertes énergétiques importantes, même avec un bon isolant.",
      "explEn": "Uncontrolled air leaks can cause significant energy loss, even with good insulation."
     },
     {
      "type": "tf",
      "fr": "Un système de ventilation récupérateur de chaleur (VRC) permet de renouveler l'air tout en limitant les pertes énergétiques.",
      "en": "A heat recovery ventilator (HRV) renews indoor air while limiting energy loss.",
      "isTrue": true,
      "explFr": "C'est précisément le rôle d'un VRC dans une maison étanche à l'air.",
      "explEn": "This is precisely the role of an HRV in an airtight house."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Deux couches d'isolant, l'une de R-12 et l'autre de R-8, sont installées ensemble dans un mur. La couche de R-8 est légèrement comprimée lors de l'installation, réduisant sa valeur réelle à R-6. Quelle est la résistance thermique totale réelle ?",
      "en": "Two insulation layers, one R-12 and one R-8, are installed together in a wall. The R-8 layer is slightly compressed during installation, reducing its real value to R-6. What is the real total thermal resistance?",
      "choices": [
       {
        "fr": "R-18",
        "en": "R-18",
        "correct": true
       },
       {
        "fr": "R-20",
        "en": "R-20",
        "correct": false
       },
       {
        "fr": "R-14",
        "en": "R-14",
        "correct": false
       },
       {
        "fr": "R-4",
        "en": "R-4",
        "correct": false
       }
      ],
      "explFr": "La compression réduit la couche de R-8 à R-6 ; la résistance totale devient 12 + 6 = R-18 plutôt que R-20.",
      "explEn": "Compression reduces the R-8 layer to R-6; the total resistance becomes 12 + 6 = R-18 rather than R-20."
     },
     {
      "type": "tf",
      "fr": "Dans un climat froid, le pare-vapeur doit généralement être installé du côté chaud (intérieur) de l'isolant.",
      "en": "In a cold climate, the vapor barrier should generally be installed on the warm (interior) side of the insulation.",
      "isTrue": true,
      "explFr": "Cela empêche la vapeur d'eau intérieure de migrer vers le froid et de condenser dans le mur.",
      "explEn": "This prevents interior water vapor from migrating toward the cold side and condensing within the wall."
     },
     {
      "fr": "Quelle est la principale différence fonctionnelle entre l'étanchéité à l'air (air sealing) et l'isolation thermique ?",
      "en": "What is the main functional difference between air sealing and thermal insulation?",
      "choices": [
       {
        "fr": "L'étanchéité bloque les fuites d'air, l'isolation ralentit le transfert de chaleur par conduction",
        "en": "Air sealing blocks air leaks, while insulation slows heat transfer by conduction",
        "correct": true
       },
       {
        "fr": "Ce sont deux termes identiques pour la même chose",
        "en": "These are two identical terms for the same thing",
        "correct": false
       },
       {
        "fr": "L'isolation bloque surtout l'air, la chaleur y étant secondaire",
        "en": "Insulation mainly blocks air, with heat being secondary",
        "correct": false
       },
       {
        "fr": "L'étanchéité à l'air remplace l'isolation dans les climats doux",
        "en": "Air sealing replaces insulation in mild climates",
        "correct": false
       }
      ],
      "explFr": "Les deux mesures sont complémentaires : l'une arrête les courants d'air, l'autre ralentit la conduction thermique.",
      "explEn": "The two measures are complementary: one stops air currents, the other slows heat conduction."
     },
     {
      "fr": "Un isolant en fibre de verre compressé à la moitié de son épaisseur nominale dans une cavité trop petite subit généralement quel effet ?",
      "en": "Fiberglass insulation compressed to half its nominal thickness in a too-small cavity generally experiences what effect?",
      "choices": [
       {
        "fr": "Une réduction de sa valeur R effective",
        "en": "A reduction in its effective R-value",
        "correct": true
       },
       {
        "fr": "Une augmentation notable de sa valeur R effective",
        "en": "A notable increase in its effective R-value",
        "correct": false
       },
       {
        "fr": "Un effet uniquement sur sa couleur apparente",
        "en": "An effect only on its visible color",
        "correct": false
       },
       {
        "fr": "Une amélioration de sa seule résistance au feu",
        "en": "Only an improvement in its fire resistance",
        "correct": false
       }
      ],
      "explFr": "La compression réduit l'épaisseur d'air emprisonné, diminuant la performance thermique réelle de l'isolant.",
      "explEn": "Compression reduces the trapped air thickness, lowering the insulation's real thermal performance."
     },
     {
      "type": "tf",
      "fr": "Les ponts thermiques à travers les éléments d'ossature (poteaux, solives) réduisent la valeur R effective globale d'un mur.",
      "en": "Thermal bridging through framing members (studs, joists) reduces a wall's overall effective R-value.",
      "isTrue": true,
      "explFr": "Le bois conduit la chaleur mieux que l'isolant, créant des zones de perte thermique accrue.",
      "explEn": "Wood conducts heat better than insulation, creating zones of increased heat loss."
     },
     {
      "fr": "Quelle est la principale différence entre un VRC (ventilateur récupérateur de chaleur) et un VRE (ventilateur récupérateur d'énergie) ?",
      "en": "What is the main difference between an HRV (heat recovery ventilator) and an ERV (energy recovery ventilator)?",
      "choices": [
       {
        "fr": "Le VRE transfère aussi une partie de l'humidité entre l'air entrant et sortant, contrairement au VRC",
        "en": "An ERV also transfers some humidity between incoming and outgoing air, unlike an HRV",
        "correct": true
       },
       {
        "fr": "Le VRC fonctionne seulement en été, contrairement au VRE",
        "en": "An HRV only operates during summer, unlike an ERV",
        "correct": false
       },
       {
        "fr": "Le VRE est destiné uniquement aux climats très chauds",
        "en": "An ERV is intended only for very hot climates",
        "correct": false
       },
       {
        "fr": "Les deux appareils fonctionnent de façon strictement identique",
        "en": "Both devices function in a strictly identical way",
        "correct": false
       }
      ],
      "explFr": "Le VRE gère à la fois la chaleur et l'humidité, ce qui peut être avantageux selon le climat et la saison.",
      "explEn": "An ERV manages both heat and humidity, which can be beneficial depending on climate and season."
     },
     {
      "fr": "Quel phénomène permet à l'air de circuler naturellement des évents de soffite vers l'évent de faîtage dans un grenier ?",
      "en": "What phenomenon allows air to naturally flow from soffit vents to the ridge vent in an attic?",
      "choices": [
       {
        "fr": "L'effet de cheminée (l'air chaud monte et s'échappe par le haut)",
        "en": "The stack effect (warm air rises and escapes at the top)",
        "correct": true
       },
       {
        "fr": "La pression atmosphérique constante",
        "en": "Constant atmospheric pressure",
        "correct": false
       },
       {
        "fr": "L'humidité ambiante uniquement",
        "en": "Ambient humidity alone",
        "correct": false
       },
       {
        "fr": "Les ventilateurs mécaniques installés par défaut",
        "en": "Mechanical fans installed by default",
        "correct": false
       }
      ],
      "explFr": "L'air chaud du grenier monte et sort par le faîtage, aspirant de l'air frais par les évents de soffite.",
      "explEn": "Warm attic air rises and exits at the ridge, drawing fresh air in through the soffit vents."
     },
     {
      "type": "tf",
      "fr": "Un matelas isolant standard perd de son efficacité s'il est comprimé lors de l'installation.",
      "en": "A standard insulation batt loses effectiveness if compressed during installation.",
      "isTrue": true,
      "explFr": "L'épaisseur d'air emprisonné détermine en grande partie la performance thermique de l'isolant.",
      "explEn": "The thickness of trapped air largely determines the insulation's thermal performance."
     },
     {
      "fr": "Un mur de 8 pieds de haut sur 20 pieds de long doit être isolé avec des matelas de 15 po × 8 pi. Combien de matelas complets sont nécessaires au minimum ?",
      "en": "An 8-foot-high, 20-foot-long wall must be insulated with 15 in × 8 ft batts. At minimum, how many full batts are needed?",
      "choices": [
       {
        "fr": "16 matelas",
        "en": "16 batts",
        "correct": true
       },
       {
        "fr": "20 matelas",
        "en": "20 batts",
        "correct": false
       },
       {
        "fr": "8 matelas",
        "en": "8 batts",
        "correct": false
       },
       {
        "fr": "13 matelas",
        "en": "13 batts",
        "correct": false
       }
      ],
      "explFr": "20 pi = 240 po ; 240/15 = 16 matelas côte à côte pour couvrir la longueur du mur.",
      "explEn": "20 ft = 240 in; 240/15 = 16 batts side by side to cover the wall's length."
     },
     {
      "type": "tf",
      "fr": "Le pare-vapeur en polyéthylène doit être scellé à toutes les pénétrations pour rester efficace comme barrière continue.",
      "en": "The polyethylene vapor barrier must be sealed at all penetrations to remain effective as a continuous barrier.",
      "isTrue": true,
      "explFr": "Une seule brèche non scellée peut permettre à l'humidité de migrer et de causer des dommages.",
      "explEn": "A single unsealed gap can allow moisture to migrate and cause damage."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un mur affiche un R-24 nominal (isolant seul), mais son R effectif mesuré est de R-18 en raison des ponts thermiques créés par l'ossature. Quelle solution réduit le plus efficacement cet écart ?",
      "en": "A wall shows a nominal R-24 (insulation alone), but its measured effective R is R-18 due to thermal bridging from the framing. What solution most effectively reduces this gap?",
      "choices": [
       {
        "fr": "Ajouter une couche d'isolant continu (rigide) par-dessus l'ossature pour interrompre le pont thermique",
        "en": "Add a layer of continuous (rigid) insulation over the framing to break the thermal bridge",
        "correct": true
       },
       {
        "fr": "Augmenter uniquement l'épaisseur de l'isolant entre les poteaux",
        "en": "Only increase the insulation thickness between the studs",
        "correct": false
       },
       {
        "fr": "Peindre le mur d'une couleur plus foncée",
        "en": "Paint the wall a darker color",
        "correct": false
       },
       {
        "fr": "Retirer le pare-air, ce qui améliore surtout l'étanchéité globale",
        "en": "Remove the air barrier, which mainly improves overall air-tightness",
        "correct": false
       }
      ],
      "explFr": "L'isolant continu couvre les poteaux eux-mêmes, réduisant significativement l'effet du pont thermique du bois.",
      "explEn": "Continuous insulation covers the studs themselves, significantly reducing the wood's thermal bridging effect."
     },
     {
      "type": "tf",
      "fr": "Un pare-air et un pare-vapeur remplissent des fonctions différentes : le premier bloque le mouvement d'air, le second ralentit la diffusion de vapeur d'eau à travers les matériaux, même si un même matériau peut parfois remplir les deux rôles.",
      "en": "An air barrier and a vapor barrier serve different functions: the first blocks air movement, the second slows water vapor diffusion through materials, even though a single material can sometimes serve both roles.",
      "isTrue": true,
      "explFr": "L'air peut transporter beaucoup plus d'humidité que la diffusion de vapeur seule, rendant le contrôle de l'air souvent prioritaire.",
      "explEn": "Air can carry far more moisture than diffusion alone, often making air control the higher priority."
     },
     {
      "fr": "Un grenier isolé à R-50 montre des zones de givre au sous-face du toit en hiver, concentrées près des solives de plafond. Quelle est la cause la plus probable ?",
      "en": "An R-50 insulated attic shows frost patches on the roof underside in winter, concentrated near the ceiling joists. What is the most likely cause?",
      "choices": [
       {
        "fr": "Une compression ou un manque d'isolant au-dessus des solives, créant un pont thermique localisé où l'air chaud humide se condense",
        "en": "Compressed or missing insulation above the joists, creating a localized thermal bridge where warm humid air condenses",
        "correct": true
       },
       {
        "fr": "Le R-50 est généralement insuffisant pour les climats très froids",
        "en": "R-50 is generally insufficient for very cold climates",
        "correct": false
       },
       {
        "fr": "La ventilation du grenier est nécessairement l'unique cause possible",
        "en": "Attic ventilation is necessarily the only possible cause",
        "correct": false
       },
       {
        "fr": "Le givre observé est lié surtout à la couleur des bardeaux",
        "en": "The observed frost is mainly related to the shingle color",
        "correct": false
       }
      ],
      "explFr": "Un manque d'isolant au-dessus des solives crée des zones plus froides où l'humidité intérieure peut se condenser et geler.",
      "explEn": "Insufficient insulation above the joists creates colder zones where interior humidity can condense and freeze."
     },
     {
      "fr": "Une maison hermétique (test d'infiltrométrie très bas) sans ventilation mécanique adéquate risque principalement quel problème ?",
      "en": "A very airtight house (very low blower-door test result) without adequate mechanical ventilation mainly risks what problem?",
      "choices": [
       {
        "fr": "Une accumulation d'humidité et de polluants intérieurs, faute de renouvellement d'air suffisant",
        "en": "A buildup of indoor humidity and pollutants due to insufficient air renewal",
        "correct": true
       },
       {
        "fr": "Une facture de chauffage plus élevée seulement en climat tempéré",
        "en": "Higher heating bills only in a temperate climate",
        "correct": false
       },
       {
        "fr": "Un risque de gel des tuyaux uniquement",
        "en": "Only a risk of frozen pipes",
        "correct": false
       },
       {
        "fr": "Un risque limité aux maisons construites avant les années 1980",
        "en": "A risk limited to homes built before the 1980s",
        "correct": false
       }
      ],
      "explFr": "Une maison très étanche nécessite une ventilation mécanique (comme un VRC) pour renouveler l'air et évacuer l'humidité et les polluants.",
      "explEn": "A very airtight house needs mechanical ventilation (like an HRV) to renew air and remove humidity and pollutants."
     },
     {
      "type": "tf",
      "fr": "Le point de rosée (température à laquelle la vapeur d'eau se condense) peut se situer à l'intérieur même d'un assemblage de mur, ce qui rend l'emplacement du pare-vapeur particulièrement important selon le climat.",
      "en": "The dew point (temperature at which water vapor condenses) can occur within the wall assembly itself, which makes vapor barrier placement particularly important depending on the climate.",
      "isTrue": true,
      "explFr": "Si le point de rosée se situe dans une zone où l'humidité peut s'accumuler sans s'évacuer, cela peut causer de la moisissure ou de la pourriture.",
      "explEn": "If the dew point falls in a zone where moisture can accumulate without escaping, this can cause mold or rot."
     },
     {
      "fr": "Une maison en climat froid utilise un pare-vapeur en polyéthylène du côté intérieur ET un revêtement extérieur peu perméable à la vapeur. Quel problème cela peut-il créer ?",
      "en": "A house in a cold climate uses a polyethylene vapor barrier on the interior AND a vapor-impermeable exterior cladding. What problem can this create?",
      "choices": [
       {
        "fr": "Un assemblage qui ne peut sécher ni vers l'intérieur ni vers l'extérieur, piégeant l'humidité qui s'infiltre malgré tout",
        "en": "An assembly that can't dry to either the interior or exterior, trapping any moisture that gets in regardless",
        "correct": true
       },
       {
        "fr": "Un problème mineur, réglé en peignant le mur d'une couleur pâle",
        "en": "A minor problem, solved by painting the wall a light color",
        "correct": false
       },
       {
        "fr": "Une amélioration automatique de la valeur R du mur",
        "en": "An automatic increase in the wall's R-value",
        "correct": false
       },
       {
        "fr": "Une réduction du besoin de ventilation mécanique",
        "en": "A reduced need for mechanical ventilation",
        "correct": false
       }
      ],
      "explFr": "Un mur doit généralement pouvoir sécher dans au moins une direction ; deux barrières imperméables des deux côtés créent un risque d'humidité emprisonnée.",
      "explEn": "A wall should generally be able to dry in at least one direction; two impermeable barriers on both sides create a risk of trapped moisture."
     },
     {
      "fr": "Un audit énergétique révèle des infiltrations d'air majeures autour des boîtes électriques et des fissures au plafond du dernier étage. Quelle est la priorité technique avant d'ajouter de l'isolant ?",
      "en": "An energy audit reveals major air leaks around electrical boxes and cracks in the top-floor ceiling. What is the technical priority before adding more insulation?",
      "choices": [
       {
        "fr": "Sceller ces fuites d'air en premier, car l'isolant seul ne bloque pas efficacement les courants d'air",
        "en": "Seal these air leaks first, since insulation alone doesn't effectively block air currents",
        "correct": true
       },
       {
        "fr": "Ignorer les fuites d'air tant que la facture reste sous la moyenne",
        "en": "Ignore the air leaks as long as the bill stays below average",
        "correct": false
       },
       {
        "fr": "Ajouter uniquement plus d'isolant sans se soucier de l'étanchéité à l'air",
        "en": "Only add more insulation without addressing air-tightness",
        "correct": false
       },
       {
        "fr": "Retirer complètement l'isolant existant d'abord",
        "en": "Completely remove the existing insulation first",
        "correct": false
       }
      ],
      "explFr": "L'air qui circule à travers l'isolant emporte la chaleur par convection, rendant le scellement des fuites une priorité avant d'ajouter de l'isolant.",
      "explEn": "Air moving through insulation carries heat away by convection, making air-sealing a priority before adding more insulation."
     },
     {
      "type": "tf",
      "fr": "Un système de ventilation mécanique déséquilibré (plus d'air extrait que d'air fourni) peut créer une pression négative dans la maison, risquant de tirer des gaz de combustion d'un appareil à combustion (refoulement).",
      "en": "An unbalanced mechanical ventilation system (more air exhausted than supplied) can create negative pressure in the house, risking backdrafting of combustion gases from a fuel-burning appliance.",
      "isTrue": true,
      "explFr": "Une pression négative excessive peut renverser le tirage naturel d'une cheminée, un enjeu de sécurité important.",
      "explEn": "Excessive negative pressure can reverse a chimney's natural draft, an important safety concern."
     },
     {
      "fr": "Une isolation en mousse pulvérisée (spray foam) à cellules fermées offre, en plus d'une valeur R élevée par pouce, quelle propriété additionnelle utile ?",
      "en": "Closed-cell spray foam insulation, in addition to a high R-value per inch, offers what additional useful property?",
      "choices": [
       {
        "fr": "Elle agit aussi comme pare-air et, selon l'épaisseur, comme pare-vapeur",
        "en": "It also acts as an air barrier and, depending on thickness, as a vapor barrier",
        "correct": true
       },
       {
        "fr": "Elle bloque l'air seulement après plusieurs semaines de cure",
        "en": "It only blocks air after several weeks of curing",
        "correct": false
       },
       {
        "fr": "Elle nécessite un pare-vapeur séparé seulement en cellules ouvertes",
        "en": "It only requires a separate vapor barrier in its open-cell form",
        "correct": false
       },
       {
        "fr": "Elle offre surtout une meilleure résistance aux insectes",
        "en": "It mainly offers better resistance to insects",
        "correct": false
       }
      ],
      "explFr": "La mousse à cellules fermées est imperméable à l'air et à une certaine épaisseur, elle limite aussi le passage de la vapeur.",
      "explEn": "Closed-cell foam is impermeable to air, and at a certain thickness, it also limits vapor passage."
     },
     {
      "type": "tf",
      "fr": "Le calcul de la résistance thermique effective d'un mur (effective R-value) doit tenir compte de la proportion de surface occupée par l'ossature (facteur de pontage thermique), pas seulement de la valeur R nominale de l'isolant entre les poteaux.",
      "en": "Calculating a wall's effective R-value must account for the proportion of area occupied by framing (thermal bridging factor), not just the insulation's nominal R-value between studs.",
      "isTrue": true,
      "explFr": "Les poteaux occupent souvent 20 à 25 % de la surface d'un mur et conduisent davantage la chaleur que l'isolant.",
      "explEn": "Studs often occupy 20 to 25% of a wall's area and conduct heat more readily than insulation."
     }
    ]
   }
  ]
 },
 {
  "id": "charp10",
  "order": 10,
  "code": "",
  "hours": 120,
  "title_fr": "Finition extérieure et intérieure",
  "title_en": "Exterior & Interior Finishing",
  "icon": "🎨",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel matériau est couramment utilisé comme revêtement extérieur pour protéger et décorer une façade ?",
      "en": "Which material is commonly used as exterior cladding to protect and decorate a facade?",
      "choices": [
       {
        "fr": "Le bardage (clin, vinyle, bois, fibrociment)",
        "en": "Cladding (lap siding, vinyl, wood, fiber cement)",
        "correct": true
       },
       {
        "fr": "Le gypse hydrofuge intérieur",
        "en": "Moisture-resistant interior gypsum board",
        "correct": false
       },
       {
        "fr": "La laine minérale en natte",
        "en": "Batt mineral wool",
        "correct": false
       },
       {
        "fr": "Le pare-vapeur en polyéthylène",
        "en": "Polyethylene vapor barrier",
        "correct": false
       }
      ],
      "explFr": "Le bardage protège l'enveloppe du bâtiment contre les intempéries.",
      "explEn": "Cladding protects the building envelope from the weather."
     },
     {
      "fr": "Que sont les moulures dans la finition intérieure ?",
      "en": "What are moldings in interior finishing?",
      "choices": [
       {
        "fr": "Des éléments décoratifs et de finition posés aux jonctions (plinthes, cadrages)",
        "en": "Decorative finishing elements installed at joints (baseboards, casings)",
        "correct": true
       },
       {
        "fr": "Des poutres structurales intégrées à la charpente",
        "en": "Structural beams integrated into the framing",
        "correct": false
       },
       {
        "fr": "Des isolants installés à l'intérieur des murs",
        "en": "Insulation materials installed inside the walls",
        "correct": false
       },
       {
        "fr": "Des membranes d'étanchéité posées sous le revêtement",
        "en": "Waterproofing membranes installed under the cladding",
        "correct": false
       }
      ],
      "explFr": "Les moulures dissimulent les joints et embellissent les surfaces.",
      "explEn": "Moldings conceal joints and enhance surfaces."
     },
     {
      "fr": "Quel outil aide à obtenir des joints d'onglet précis pour les moulures ?",
      "en": "Which tool helps achieve precise miter joints for moldings?",
      "choices": [
       {
        "fr": "La scie à onglet",
        "en": "The miter saw",
        "correct": true
       },
       {
        "fr": "La scie à chaîne",
        "en": "The chainsaw",
        "correct": false
       },
       {
        "fr": "Le marteau-piqueur",
        "en": "The jackhammer",
        "correct": false
       },
       {
        "fr": "La perceuse à colonne",
        "en": "The drill press",
        "correct": false
       }
      ],
      "explFr": "La scie à onglet permet des coupes angulaires précises et répétables.",
      "explEn": "The miter saw allows precise, repeatable angled cuts."
     },
     {
      "fr": "Que signifie « araser » un joint en finition ?",
      "en": "What does it mean to \"flush\" a joint in finishing work?",
      "choices": [
       {
        "fr": "Mettre à niveau ou égaliser une surface ou un joint",
        "en": "Leveling or evening out a surface or joint",
        "correct": true
       },
       {
        "fr": "Appliquer une couche uniforme de peinture",
        "en": "Applying an even coat of paint",
        "correct": false
       },
       {
        "fr": "Poncer légèrement une surface avant la finition",
        "en": "Lightly sanding a surface before finishing",
        "correct": false
       },
       {
        "fr": "Percer un trou de petit diamètre",
        "en": "Drilling a small-diameter hole",
        "correct": false
       }
      ],
      "explFr": "Araser rend deux surfaces parfaitement affleurantes l'une avec l'autre.",
      "explEn": "Flushing makes two surfaces perfectly even with each other."
     },
     {
      "type": "tf",
      "fr": "Le solin (flashing) posé autour des portes et fenêtres est purement décoratif et n'a aucun rôle contre l'infiltration d'eau.",
      "en": "Flashing installed around doors and windows is purely decorative and has no role against water infiltration.",
      "isTrue": false,
      "explFr": "Le solin détourne l'eau loin des joints vulnérables autour des portes et fenêtres.",
      "explEn": "Flashing directs water away from vulnerable joints around doors and windows."
     },
     {
      "fr": "Pourquoi installe-t-on généralement le solin AVANT le bardage lors de la finition extérieure autour d'une fenêtre ?",
      "en": "Why is flashing generally installed BEFORE the cladding during exterior finishing around a window?",
      "choices": [
       {
        "fr": "Pour que l'eau s'écoule par-dessus le solin et non derrière",
        "en": "So water sheds over the flashing rather than behind it",
        "correct": true
       },
       {
        "fr": "Parce que l'ordre d'installation dépend seulement du type de bardage",
        "en": "Because installation order depends only on the type of cladding",
        "correct": false
       },
       {
        "fr": "Pour accélérer uniquement la vitesse d'installation",
        "en": "Only to speed up the installation process",
        "correct": false
       },
       {
        "fr": "Pour respecter une préférence esthétique du client",
        "en": "To match the client's aesthetic preference",
        "correct": false
       }
      ],
      "explFr": "L'ordre des couches (solin sous le bardage) garantit que l'eau s'écoule vers l'extérieur, pas derrière le mur.",
      "explEn": "The layering order (flashing under the cladding) ensures water sheds outward, not behind the wall."
     },
     {
      "type": "tf",
      "fr": "Le calfeutrant (caulking) peut remplacer complètement le solin autour d'une fenêtre.",
      "en": "Caulking can completely replace flashing around a window.",
      "isTrue": false,
      "explFr": "Le calfeutrant complète l'étanchéité mais ne remplace pas le rôle structural du solin pour détourner l'eau.",
      "explEn": "Caulking supplements weatherproofing but does not replace flashing's structural role in diverting water."
     },
     {
      "fr": "Quelle opération de finition est illustrée sur cette photo ?",
      "en": "What finishing operation is shown in this photo?",
      "choices": [
       {
        "fr": "Le ponçage d'une surface de bois",
        "en": "Sanding a wood surface",
        "correct": true
       },
       {
        "fr": "La pose d'un solin métallique",
        "en": "Installing metal flashing",
        "correct": false
       },
       {
        "fr": "L'installation d'une moulure décorative",
        "en": "Installing decorative molding",
        "correct": false
       },
       {
        "fr": "Le calfeutrage d'un cadre de fenêtre",
        "en": "Caulking a window frame",
        "correct": false
       }
      ],
      "explFr": "L'outil orange est une ponceuse orbitale, utilisée pour lisser la surface du bois avant la finition.",
      "explEn": "The orange tool is an orbital sander, used to smooth the wood surface before finishing."
     },
     {
      "type": "tf",
      "fr": "L'outil utilisé sur cette photo est une ponceuse électrique.",
      "en": "The tool used in this photo is an electric sander.",
      "isTrue": true,
      "explFr": "La ponceuse orbitale visible est tenue dans la main du travailleur.",
      "explEn": "The visible orbital sander is held in the worker's hand."
     },
     {
      "fr": "Quel type de revêtement extérieur est fabriqué à partir de fibres de bois et de ciment ?",
      "en": "What type of exterior cladding is made from wood fibers and cement?",
      "choices": [
       {
        "fr": "Le fibrociment",
        "en": "Fiber cement",
        "correct": true
       },
       {
        "fr": "Le vinyle",
        "en": "Vinyl",
        "correct": false
       },
       {
        "fr": "L'aluminium seulement",
        "en": "Aluminum only",
        "correct": false
       },
       {
        "fr": "Le gypse",
        "en": "Gypsum",
        "correct": false
       }
      ],
      "explFr": "Le fibrociment combine durabilité et résistance aux intempéries.",
      "explEn": "Fiber cement combines durability with weather resistance."
     },
     {
      "fr": "Pourquoi utilise-t-on différents types de calfeutrant selon l'application ?",
      "en": "Why are different types of caulking used depending on the application?",
      "choices": [
       {
        "fr": "Parce que chaque type offre une flexibilité, une adhérence et une durabilité adaptées à un usage précis",
        "en": "Because each type offers flexibility, adhesion, and durability suited to a specific use",
        "correct": true
       },
       {
        "fr": "Parce que la couleur est le seul facteur qui varie réellement",
        "en": "Because color is the only factor that really varies",
        "correct": false
       },
       {
        "fr": "Parce que tous les calfeutrants sont interchangeables sans distinction",
        "en": "Because all caulking products are interchangeable with no distinction",
        "correct": false
       },
       {
        "fr": "Parce que le calfeutrant est requis seulement pour les joints verticaux",
        "en": "Because caulking is only required for vertical joints",
        "correct": false
       }
      ],
      "explFr": "Un calfeutrant mal choisi peut se fissurer ou se décoller rapidement selon les conditions.",
      "explEn": "The wrong caulking can crack or peel quickly depending on conditions."
     },
     {
      "fr": "Quelle est la différence entre la peinture et la teinture (stain) pour le bois extérieur ?",
      "en": "What is the difference between paint and stain for exterior wood?",
      "choices": [
       {
        "fr": "La teinture pénètre le bois et en laisse voir le grain, contrairement à la peinture qui forme une couche opaque",
        "en": "Stain penetrates the wood and lets the grain show, unlike paint which forms an opaque layer",
        "correct": true
       },
       {
        "fr": "La peinture protège surtout contre les rayons ultraviolets uniquement",
        "en": "Paint mainly protects against ultraviolet rays only",
        "correct": false
       },
       {
        "fr": "La teinture ne peut être appliquée qu'à l'intérieur d'un bâtiment",
        "en": "Stain can only be applied inside a building",
        "correct": false
       },
       {
        "fr": "Les deux produits offrent un résultat visuel semi-opaque similaire",
        "en": "Both products give a similar semi-opaque visual result",
        "correct": false
       }
      ],
      "explFr": "Le choix dépend de l'effet recherché : opaque et coloré (peinture) ou naturel (teinture).",
      "explEn": "The choice depends on the desired look: opaque and colored (paint) or natural (stain)."
     },
     {
      "fr": "Que faut-il vérifier avant d'installer une porte intérieure préaccrochée ?",
      "en": "What should be checked before installing a pre-hung interior door?",
      "choices": [
       {
        "fr": "Que le cadre est d'aplomb et que l'ouverture est de la bonne dimension",
        "en": "That the frame is plumb and the opening is the correct size",
        "correct": true
       },
       {
        "fr": "Que la couleur de la porte correspond à celle des murs",
        "en": "That the door's color matches the walls",
        "correct": false
       },
       {
        "fr": "Que le poids total de la maison a été calculé",
        "en": "That the house's total weight has been calculated",
        "correct": false
       },
       {
        "fr": "Que le type de toiture est compatible avec la porte",
        "en": "That the roof type is compatible with the door",
        "correct": false
       }
      ],
      "explFr": "Un cadre hors d'aplomb causera des problèmes de fonctionnement de la porte.",
      "explEn": "An out-of-plumb frame will cause the door to function poorly."
     },
     {
      "fr": "Selon les pratiques courantes, quelle hauteur minimale approximative doit avoir un garde-corps de galerie élevée ?",
      "en": "According to common practice, what is the approximate minimum height for a guardrail on an elevated deck?",
      "choices": [
       {
        "fr": "Environ 36 à 42 pouces, selon la hauteur de la surface et le code applicable",
        "en": "About 36 to 42 inches, depending on the surface height and applicable code",
        "correct": true
       },
       {
        "fr": "Environ 12 pouces, pour une galerie de faible hauteur seulement",
        "en": "About 12 inches, for a low-height deck only",
        "correct": false
       },
       {
        "fr": "Environ 6 pouces, pour une galerie de plain-pied uniquement",
        "en": "About 6 inches, for a ground-level deck only",
        "correct": false
       },
       {
        "fr": "Environ 60 pouces, pour les galeries commerciales seulement",
        "en": "About 60 inches, for commercial decks only",
        "correct": false
       }
      ],
      "explFr": "Cette plage protège adéquatement contre les chutes tout en respectant les codes courants.",
      "explEn": "This range adequately protects against falls while meeting common codes."
     },
     {
      "fr": "Pourquoi pose-t-on un fond de joint (backer rod) avant d'appliquer du calfeutrant dans un joint profond ?",
      "en": "Why is a backer rod placed before applying caulking in a deep joint?",
      "choices": [
       {
        "fr": "Pour contrôler la profondeur du calfeutrant et améliorer sa performance",
        "en": "To control the caulking's depth and improve its performance",
        "correct": true
       },
       {
        "fr": "Pour remplacer complètement le besoin d'appliquer du calfeutrant",
        "en": "To completely eliminate the need for caulking",
        "correct": false
       },
       {
        "fr": "Pour décorer visuellement le joint une fois terminé",
        "en": "To visually decorate the joint once finished",
        "correct": false
       },
       {
        "fr": "Pour accélérer uniquement le séchage du calfeutrant",
        "en": "Only to speed up the caulking's drying",
        "correct": false
       }
      ],
      "explFr": "Le fond de joint limite l'adhérence aux deux côtés seulement, ce qui améliore la flexibilité du joint.",
      "explEn": "The backer rod limits adhesion to just the two sides, improving the joint's flexibility."
     },
     {
      "type": "tf",
      "fr": "Un garde-corps de galerie surélevée doit respecter une hauteur minimale pour la sécurité des occupants.",
      "en": "A guardrail on an elevated deck must meet a minimum height for occupant safety.",
      "isTrue": true,
      "explFr": "Une hauteur insuffisante augmente le risque de chute.",
      "explEn": "Insufficient height increases the risk of falling."
     },
     {
      "type": "tf",
      "fr": "Le fibrociment est un matériau couramment utilisé comme revêtement extérieur durable.",
      "en": "Fiber cement is a material commonly used as durable exterior cladding.",
      "isTrue": true,
      "explFr": "Sa résistance aux intempéries en fait un choix populaire en construction.",
      "explEn": "Its weather resistance makes it a popular choice in construction."
     },
     {
      "type": "tf",
      "fr": "La teinture pour bois forme une couche opaque qui cache complètement le grain du bois, comme la peinture.",
      "en": "Wood stain forms an opaque layer that completely hides the wood grain, like paint.",
      "isTrue": false,
      "explFr": "Contrairement à la peinture, la teinture pénètre le bois et en laisse voir le grain.",
      "explEn": "Unlike paint, stain penetrates the wood and lets the grain show through."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Un mur de 24 pieds de long nécessite un revêtement à clin avec des planches de 12 pieds de long, avec 10 % de perte prévue. Combien de pieds linéaires de planches commander (par rangée) ?",
      "en": "A 24-foot-long wall needs lap siding using 12-foot boards, with 10% waste allowed. How many linear feet of boards should be ordered (per row)?",
      "choices": [
       {
        "fr": "Environ 26,4 pieds",
        "en": "About 26.4 feet",
        "correct": true
       },
       {
        "fr": "24 pieds",
        "en": "24 feet",
        "correct": false
       },
       {
        "fr": "12 pieds",
        "en": "12 feet",
        "correct": false
       },
       {
        "fr": "36 pieds",
        "en": "36 feet",
        "correct": false
       }
      ],
      "explFr": "24 pi × 1,10 = 26,4 pi de matériel à commander pour compenser les pertes de coupe.",
      "explEn": "24 ft × 1.10 = 26.4 ft of material to order to cover cutting waste."
     },
     {
      "type": "tf",
      "fr": "L'application d'un scellant (back-priming) à l'arrière des planches de revêtement améliore leur résistance à l'humidité.",
      "en": "Back-priming the rear of siding boards improves their resistance to moisture.",
      "isTrue": true,
      "explFr": "Le dos des planches est souvent négligé, mais tout aussi exposé à l'humidité que la face visible.",
      "explEn": "The back of boards is often overlooked but is just as exposed to moisture as the visible face."
     },
     {
      "fr": "Quel est le rôle principal de l'espace de drainage (rain screen) derrière un revêtement extérieur ?",
      "en": "What is the main role of the drainage gap (rain screen) behind exterior cladding?",
      "choices": [
       {
        "fr": "Permettre à l'eau infiltrée de s'évacuer et à l'humidité de sécher",
        "en": "Allow infiltrated water to drain and moisture to dry out",
        "correct": true
       },
       {
        "fr": "Isoler thermiquement le mur à lui seul",
        "en": "Thermally insulate the wall on its own",
        "correct": false
       },
       {
        "fr": "Empêcher complètement toute lumière d'y pénétrer",
        "en": "Completely prevent any light from entering",
        "correct": false
       },
       {
        "fr": "Remplacer entièrement le rôle du pare-air",
        "en": "Fully replace the role of the air barrier",
        "correct": false
       }
      ],
      "explFr": "L'espace permet à l'eau qui s'infiltre inévitablement de s'écouler plutôt que de rester emprisonnée contre le mur.",
      "explEn": "The gap allows water that inevitably gets in to drain away rather than stay trapped against the wall."
     },
     {
      "fr": "Pourquoi respecte-t-on un patron d'espacement précis pour les fixations (clous/vis) d'un moulurage extérieur ?",
      "en": "Why is a precise fastener spacing pattern followed for exterior trim (nails/screws)?",
      "choices": [
       {
        "fr": "Pour assurer une fixation adéquate qui résiste au vent et aux mouvements du matériau",
        "en": "To ensure adequate fastening that resists wind and material movement",
        "correct": true
       },
       {
        "fr": "Pour des raisons esthétiques seulement, sans impact structural",
        "en": "For aesthetic reasons only, with no structural impact",
        "correct": false
       },
       {
        "fr": "Parce que l'espacement affecte seulement l'apparence finale",
        "en": "Because spacing only affects the final appearance",
        "correct": false
       },
       {
        "fr": "Pour réduire le nombre total de fixations à zéro",
        "en": "To reduce the total number of fasteners to zero",
        "correct": false
       }
      ],
      "explFr": "Un espacement inadéquat peut causer un décollement du matériau sous le vent ou lors de la dilatation/contraction.",
      "explEn": "Inadequate spacing can cause the material to come loose under wind load or during expansion/contraction."
     },
     {
      "type": "tf",
      "fr": "Un calfeutrant appliqué sur un joint humide ou sale adhérera moins bien et risque de se décoller prématurément.",
      "en": "Caulking applied to a wet or dirty joint will adhere less well and risks peeling off prematurely.",
      "isTrue": true,
      "explFr": "La propreté et la sécheresse du support sont essentielles à une bonne adhérence.",
      "explEn": "Cleanliness and dryness of the substrate are essential for good adhesion."
     },
     {
      "fr": "Lors de l'installation d'une porte intérieure, quel dégagement doit-on généralement prévoir sous le battant, au-dessus du revêtement de sol fini ?",
      "en": "When installing an interior door, what clearance should generally be allowed under the leaf, above the finished floor covering?",
      "choices": [
       {
        "fr": "Un petit dégagement d'environ 1/2 à 3/4 po pour le battant, ajusté selon le revêtement de sol",
        "en": "A small clearance of about 1/2 to 3/4 in for the leaf, adjusted for the floor covering",
        "correct": true
       },
       {
        "fr": "Un dégagement d'environ 2 pouces, pour faciliter le nettoyage",
        "en": "A clearance of about 2 inches, to ease cleaning underneath",
        "correct": false
       },
       {
        "fr": "Un dégagement de 6 pouces minimum",
        "en": "A minimum clearance of 6 inches",
        "correct": false
       },
       {
        "fr": "Le dégagement dépend uniquement de la couleur de la porte",
        "en": "Clearance depends only on the door's color",
        "correct": false
       }
      ],
      "explFr": "Un dégagement approprié permet le mouvement du battant tout en tenant compte de l'épaisseur du revêtement de sol fini.",
      "explEn": "Proper clearance allows the leaf to swing while accounting for the finished floor covering thickness."
     },
     {
      "fr": "Quel est l'ordre correct de progression du grain de papier abrasif avant l'application d'un fini ?",
      "en": "What is the correct grit progression order for sandpaper before applying a finish?",
      "choices": [
       {
        "fr": "Du grain le plus grossier vers le plus fin",
        "en": "From the coarsest grit to the finest",
        "correct": true
       },
       {
        "fr": "Du grain le plus fin vers le plus grossier",
        "en": "From the finest grit to the coarsest",
        "correct": false
       },
       {
        "fr": "L'ordre dépend uniquement du type de bois poncé",
        "en": "Order depends only on the type of wood being sanded",
        "correct": false
       },
       {
        "fr": "Utiliser un seul grain fin, pour économiser du papier abrasif",
        "en": "Use a single fine grit, to save on sandpaper",
        "correct": false
       }
      ],
      "explFr": "Commencer grossier enlève les défauts rapidement, puis affiner progressivement donne une surface lisse et uniforme.",
      "explEn": "Starting coarse removes defects quickly, then progressively finer grits give a smooth, even surface."
     },
     {
      "type": "tf",
      "fr": "Un fini à base d'huile prend généralement plus de temps à durcir complètement qu'un fini à base d'eau.",
      "en": "An oil-based finish generally takes longer to fully cure than a water-based finish.",
      "isTrue": true,
      "explFr": "Les finis à l'huile durcissent par un processus d'oxydation plus lent que l'évaporation des finis à l'eau.",
      "explEn": "Oil-based finishes cure through a slower oxidation process compared to the evaporation of water-based finishes."
     },
     {
      "fr": "Pourquoi scribe-t-on (ajuste-t-on précisément) une plinthe le long d'un plancher irrégulier ?",
      "en": "Why is a baseboard scribed (precisely fitted) along an uneven floor?",
      "choices": [
       {
        "fr": "Pour épouser les irrégularités du sol et éviter un espace visible disgracieux",
        "en": "To follow the floor's irregularities and avoid an unsightly visible gap",
        "correct": true
       },
       {
        "fr": "Pour affaiblir intentionnellement la plinthe",
        "en": "To intentionally weaken the baseboard",
        "correct": false
       },
       {
        "fr": "Parce que le scribage est purement décoratif et sans autre effet",
        "en": "Because scribing is purely decorative with no other effect",
        "correct": false
       },
       {
        "fr": "Pour réduire la longueur totale de la plinthe",
        "en": "To reduce the baseboard's total length",
        "correct": false
       }
      ],
      "explFr": "Le scribage assure un contact uniforme avec un sol qui n'est jamais parfaitement plat.",
      "explEn": "Scribing ensures uniform contact with a floor that is never perfectly flat."
     },
     {
      "type": "tf",
      "fr": "Appliquer deux couches de fini offre généralement une meilleure durabilité et protection qu'une seule couche.",
      "en": "Applying two coats of finish generally offers better durability and protection than a single coat.",
      "isTrue": true,
      "explFr": "Une deuxième couche comble les zones plus minces laissées par la première et renforce la protection globale.",
      "explEn": "A second coat fills in thinner spots left by the first and strengthens overall protection."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un revêtement à clin en fibrociment est installé directement contre le pare-air sans espace de drainage. Quel problème cela peut-il causer à long terme ?",
      "en": "Fiber cement lap siding is installed directly against the air barrier with no drainage gap. What problem can this cause long term?",
      "choices": [
       {
        "fr": "L'humidité infiltrée ne peut pas s'évacuer efficacement, favorisant la pourriture ou la détérioration du mur",
        "en": "Infiltrated moisture cannot drain effectively, promoting rot or wall deterioration",
        "correct": true
       },
       {
        "fr": "Un problème mineur, réglé simplement par une couche de peinture",
        "en": "A minor problem, simply solved with a coat of paint",
        "correct": false
       },
       {
        "fr": "Une amélioration automatique de l'isolation du mur",
        "en": "An automatic improvement in wall insulation",
        "correct": false
       },
       {
        "fr": "Le revêtement devient plus facile à installer sans espace",
        "en": "The siding becomes easier to install without a gap",
        "correct": false
       }
      ],
      "explFr": "Même un revêtement résistant à l'eau laisse parfois passer un peu d'humidité aux joints ; un espace de drainage permet à cette eau de s'évacuer.",
      "explEn": "Even water-resistant siding can let some moisture in at the joints; a drainage gap lets this water escape."
     },
     {
      "type": "tf",
      "fr": "Un calfeutrant de qualité inférieure utilisé sur un joint soumis à un mouvement important (dilatation/contraction saisonnière) risque de se fissurer prématurément, même s'il est bien appliqué.",
      "en": "A lower-quality caulk used on a joint subject to significant movement (seasonal expansion/contraction) risks cracking prematurely, even if applied correctly.",
      "isTrue": true,
      "explFr": "La flexibilité et l'élasticité du produit doivent correspondre à l'amplitude de mouvement prévue du joint.",
      "explEn": "The product's flexibility and elasticity must match the joint's expected range of movement."
     },
     {
      "fr": "Une porte extérieure préaccrochée est installée légèrement hors d'équerre, mais semble fonctionner correctement au moment de la pose. Quel problème risque d'apparaître avec le temps ?",
      "en": "A pre-hung exterior door is installed slightly out of square, but seems to work fine at installation. What problem is likely to appear over time?",
      "choices": [
       {
        "fr": "Un frottement croissant, un mauvais alignement du pêne, ou une usure prématurée de la quincaillerie",
        "en": "Increasing friction, poor latch alignment, or premature hardware wear",
        "correct": true
       },
       {
        "fr": "Un problème mineur, réglé facilement en ajustant les pentures",
        "en": "A minor problem, easily fixed by adjusting the hinges",
        "correct": false
       },
       {
        "fr": "Une amélioration de l'étanchéité du cadre",
        "en": "Improved frame air-tightness",
        "correct": false
       },
       {
        "fr": "Un gain d'isolation thermique automatique",
        "en": "An automatic gain in thermal insulation",
        "correct": false
       }
      ],
      "explFr": "Les mouvements saisonniers du bâtiment peuvent aggraver un défaut d'équerrage initial, causant des problèmes fonctionnels avec le temps.",
      "explEn": "Seasonal building movement can worsen an initial squaring defect, causing functional problems over time."
     },
     {
      "fr": "Un plancher de bois franc est installé sans joint de dilatation périphérique adéquat contre les murs. Quel est le risque principal, surtout en été humide ?",
      "en": "Hardwood flooring is installed without an adequate perimeter expansion gap against the walls. What is the main risk, especially in a humid summer?",
      "choices": [
       {
        "fr": "Le bois peut se dilater et se soulever (cupping/buckling) faute d'espace pour son mouvement naturel",
        "en": "The wood can expand and buckle, lacking room for its natural movement",
        "correct": true
       },
       {
        "fr": "Le bois bouge surtout durant la première année suivant l'installation",
        "en": "Wood mainly moves during the first year after installation",
        "correct": false
       },
       {
        "fr": "Le plancher devient automatiquement plus résistant à l'usure",
        "en": "The floor automatically becomes more wear-resistant",
        "correct": false
       },
       {
        "fr": "Cela améliore l'isolation acoustique du plancher",
        "en": "This improves the floor's acoustic insulation",
        "correct": false
       }
      ],
      "explFr": "Le bois franc absorbe l'humidité ambiante et se dilate ; un espace périphérique est essentiel pour absorber ce mouvement.",
      "explEn": "Hardwood absorbs ambient humidity and expands; a perimeter gap is essential to absorb this movement."
     },
     {
      "type": "tf",
      "fr": "Une teinture semi-transparente appliquée sur un bois exotique très dense et huileux peut avoir une adhérence réduite si le bois n'est pas d'abord nettoyé pour retirer les huiles naturelles de surface.",
      "en": "A semi-transparent stain applied to a very dense, oily exotic wood can have reduced adhesion if the wood isn't first cleaned to remove natural surface oils.",
      "isTrue": true,
      "explFr": "Certaines essences exotiques exsudent des huiles naturelles qui peuvent empêcher une bonne adhérence du fini si elles ne sont pas retirées.",
      "explEn": "Some exotic species exude natural oils that can prevent good finish adhesion if not removed."
     },
     {
      "fr": "Un escalier intérieur est construit avec des girons et contremarches légèrement irréguliers d'une marche à l'autre. Quel est le principal risque associé à cette irrégularité ?",
      "en": "An interior staircase is built with slightly irregular tread depths and riser heights from step to step. What is the main risk associated with this irregularity?",
      "choices": [
       {
        "fr": "Un risque accru de trébuchement, car les usagers s'attendent à une régularité constante entre les marches",
        "en": "An increased risk of tripping, since users expect consistent regularity between steps",
        "correct": true
       },
       {
        "fr": "Un risque limité aux usagers portant des chaussures à talons hauts",
        "en": "A risk limited to users wearing high-heeled shoes",
        "correct": false
       },
       {
        "fr": "Une amélioration de l'esthétique de l'escalier",
        "en": "An improvement in the staircase's appearance",
        "correct": false
       },
       {
        "fr": "Une réduction du coût total des matériaux",
        "en": "A reduction in total material cost",
        "correct": false
       }
      ],
      "explFr": "Le corps humain mémorise un rythme de marche constant ; une irrégularité, même petite, augmente significativement le risque de chute.",
      "explEn": "The human body memorizes a constant walking rhythm; even a small irregularity significantly increases fall risk."
     },
     {
      "fr": "Un fini à l'huile appliqué en couche trop épaisse sur un plancher de bois franc reste collant plusieurs jours après l'application prévue pour le séchage. Quelle est la cause la plus probable ?",
      "en": "An oil finish applied too thickly on a hardwood floor stays tacky for days beyond the expected drying time. What is the most likely cause?",
      "choices": [
       {
        "fr": "Une couche trop épaisse ralentit l'évaporation des solvants et l'oxydation en profondeur du produit",
        "en": "A too-thick coat slows solvent evaporation and deep oxidation of the product",
        "correct": true
       },
       {
        "fr": "Le bois est responsable seulement s'il a été poncé trop finement",
        "en": "The wood is responsible only if it was sanded too finely",
        "correct": false
       },
       {
        "fr": "La température ambiante affecte surtout l'odeur pendant le séchage",
        "en": "Ambient temperature mainly affects the odor during drying",
        "correct": false
       },
       {
        "fr": "Le produit est nécessairement défectueux",
        "en": "The product is necessarily defective",
        "correct": false
       }
      ],
      "explFr": "Une couche trop épaisse emprisonne les solvants sous une pellicule superficielle déjà partiellement durcie, ralentissant le séchage global.",
      "explEn": "A too-thick coat traps solvents beneath an already partially cured surface film, slowing overall drying."
     },
     {
      "type": "tf",
      "fr": "Une moulure de finition installée sans tenir compte du sens du fil du bois et de son mouvement saisonnier peut se fissurer aux joints d'onglet (coins) avec le temps.",
      "en": "Finish trim installed without accounting for wood grain direction and seasonal movement can crack at mitered joints (corners) over time.",
      "isTrue": true,
      "explFr": "Le mouvement différentiel du bois selon les saisons peut ouvrir des joints d'onglet mal conçus ou mal fixés.",
      "explEn": "Differential wood movement across seasons can open poorly designed or poorly fastened miter joints."
     },
     {
      "fr": "Un revêtement extérieur en bois est peint immédiatement après l'installation, sans période d'acclimatation ni vérification du taux d'humidité du bois. Quel problème peut en résulter ?",
      "en": "Wood exterior siding is painted immediately after installation, without an acclimation period or checking the wood's moisture content. What problem can result?",
      "choices": [
       {
        "fr": "Le bois encore humide peut sécher sous la peinture et causer un décollement ou une fissuration prématurée du fini",
        "en": "Wood that's still damp can dry under the paint and cause premature peeling or cracking of the finish",
        "correct": true
       },
       {
        "fr": "Un problème mineur, réglé en appliquant une deuxième couche rapidement",
        "en": "A minor problem, fixed by quickly applying a second coat",
        "correct": false
       },
       {
        "fr": "Le bois devient automatiquement imperméable après la peinture",
        "en": "The wood automatically becomes waterproof after painting",
        "correct": false
       },
       {
        "fr": "Cela améliore la durabilité du bois sans condition",
        "en": "This improves wood durability unconditionally",
        "correct": false
       }
      ],
      "explFr": "Le bois doit atteindre un taux d'humidité stable et approprié avant la peinture pour éviter des problèmes d'adhérence liés au séchage sous le fini.",
      "explEn": "Wood must reach a stable, appropriate moisture content before painting to avoid adhesion problems related to drying beneath the finish."
     },
     {
      "type": "tf",
      "fr": "La ventilation adéquate d'une pièce fraîchement peinte ou vernie accélère le durcissement du fini tout en réduisant l'exposition aux vapeurs de solvants pour les occupants.",
      "en": "Adequate ventilation of a freshly painted or varnished room speeds up the finish's curing while reducing occupants' exposure to solvent vapors.",
      "isTrue": true,
      "explFr": "Le renouvellement d'air aide à évacuer les solvants qui s'évaporent, ce qui profite à la fois à la santé et au séchage du fini.",
      "explEn": "Air renewal helps remove evaporating solvents, benefiting both health and the finish's drying."
     }
    ]
   }
  ]
 }
];

const UI_TEXT = {
  fr: {
    appName: "CharpenterieQuest",
    tagline: "Deviens maitre charpentier-menuisier — DEP 5319",
    start: "Commencer l'aventure",
    yourName: "Ton prénom",
    chooseAvatar: "Choisis ton avatar",
    map: "Mon parcours",
    badges: "Badges",
    trophies: "Trophées",
    leaderboard: "Palmarès",
    profile: "Profil",
    level: "Niveau",
    xp: "XP",
    locked: "Verrouillé",
    completeToUnlock: "Termine la quête précédente pour déverrouiller",
    startQuest: "Démarrer la quête",
    retryQuest: "Reprendre la quête",
    question: "Question",
    of: "sur",
    submit: "Valider",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bonne réponse!",
    incorrect: "Ce n'est pas ça...",
    questResult: "Résultat de la quête",
    score: "Score",
    passed: "Quête réussie! 🎉",
    failed: "Pas encore réussi — réessaie pour débloquer le badge (seuil: 70%)",
    backToMap: "Retour à la carte",
    newBadge: "Nouveau badge!",
    newTrophy: "Nouveau trophée!",
    hours: "heures",
    switchLang: "EN",
    privacy: "Confidentialité",
    resetProgress: "Réinitialiser tout",
    confirmReset: "Tout réinitialiser? Ton avatar, tes badges, trophées et toute ta progression seront effacés. Cette action est irréversible.",
    installApp: "Installer l'application",
    rank: "Rang",
    you: "Toi",
    leaderboardNote: "Classement local (démo) — un vrai palmarès de classe nécessite un serveur partagé.",
    completedQuests: "quêtes complétées",
    chooseVehicle: "Choisis ta machine",
    myVehicle: "Ta machine",
    vehicleGrows: "Évolue avec ton expérience",
    maxSize: "Taille maximale atteinte!",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    tfPrompt: "Vrai ou faux?",
    masteredLabel: "compétences maîtrisées",
    tierLabel: "Palier",
    matchPrompt: "Touche un terme, puis sa définition qui correspond.",
    scenarioLabel: "Mise en situation",
    masteryUnlocked: "Compétence maîtrisée — badge débloqué!",
    accessCodeTitle: "Code d'accès",
    accessCodePrompt: "Entre le code d'accès fourni par ton enseignant pour continuer.",
    accessCodeTrialOver: "Ton essai gratuit de 7 jours est terminé. Entre le code d'accès fourni par ton centre de formation pour continuer.",
    accessCodePlaceholder: "Code d'accès",
    accessCodeSubmit: "Valider",
    accessCodeChecking: "Vérification...",
    accessCodeInvalid: "Code invalide ou inactif. Vérifie auprès de ton enseignant.",
    accessCodeOffline: "Connexion Internet requise pour valider ton code la première fois. Réessaie une fois connecté.",
    accessCodeNotConfigured: "L'application n'est pas encore configurée. Contacte ton enseignant.",
    welcomeHeading: "Comment ça marche",
    welcomeIntro: "Avant de commencer, voici un survol rapide de l'application.",
    welcomeSteps: [
      { icon: "🗺️", title: "Mon parcours", text: "Chaque compétence du programme est une quête sur la carte. Termine-les dans l'ordre pour avancer." },
      { icon: "📝", title: "Questions", text: "Réponds à des questions à choix multiples et vrai/faux liées à chaque compétence." },
      { icon: "🎖️", title: "Badges", text: "Réussis une quête à 70% ou plus pour débloquer son badge." },
      { icon: "🏆", title: "Trophées", text: "Décroche des trophées spéciaux pour tes exploits et ta progression." },
      { icon: "📊", title: "Palmarès", text: "Compare ton avancement avec celui du reste de la classe." },
      { icon: "👷", title: "Ton avatar", text: "Choisis ton avatar — il évolue à mesure que tu gagnes de l'expérience." }
    ]
  },
  en: {
    appName: "CarpentryQuest",
    tagline: "Become a master carpenter — DVS 5319",
    start: "Start the adventure",
    yourName: "Your first name",
    chooseAvatar: "Choose your avatar",
    map: "My path",
    badges: "Badges",
    trophies: "Trophies",
    leaderboard: "Leaderboard",
    profile: "Profile",
    level: "Level",
    xp: "XP",
    locked: "Locked",
    completeToUnlock: "Complete the previous quest to unlock",
    startQuest: "Start quest",
    retryQuest: "Retry quest",
    question: "Question",
    of: "of",
    submit: "Submit",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite...",
    questResult: "Quest Result",
    score: "Score",
    passed: "Quest passed! 🎉",
    failed: "Not passed yet — try again to unlock the badge (threshold: 70%)",
    backToMap: "Back to map",
    newBadge: "New badge!",
    newTrophy: "New trophy!",
    hours: "hours",
    switchLang: "FR",
    privacy: "Privacy",
    resetProgress: "Reset everything",
    confirmReset: "Reset everything? Your avatar, badges, trophies and all progress will be erased. This cannot be undone.",
    installApp: "Install the app",
    rank: "Rank",
    you: "You",
    leaderboardNote: "Local (demo) ranking — a real class leaderboard needs a shared server.",
    completedQuests: "quests completed",
    chooseVehicle: "Choose your machine",
    myVehicle: "Your machine",
    vehicleGrows: "Evolves with your experience",
    maxSize: "Maximum size reached!",
    trueLabel: "True",
    falseLabel: "False",
    tfPrompt: "True or false?",
    masteredLabel: "competencies mastered",
    tierLabel: "Tier",
    matchPrompt: "Tap a term, then its matching definition.",
    scenarioLabel: "Scenario",
    masteryUnlocked: "Competency mastered — badge unlocked!",
    accessCodeTitle: "Access code",
    accessCodePrompt: "Enter the access code given by your teacher to continue.",
    accessCodeTrialOver: "Your free 7-day trial has ended. Enter the access code provided by your training center to continue.",
    accessCodePlaceholder: "Access code",
    accessCodeSubmit: "Submit",
    accessCodeChecking: "Checking...",
    accessCodeInvalid: "Invalid or inactive code. Check with your teacher.",
    accessCodeOffline: "Internet connection required to validate your code the first time. Try again once connected.",
    accessCodeNotConfigured: "The app isn't configured yet. Contact your teacher.",
    welcomeHeading: "How it works",
    welcomeIntro: "Before you start, here's a quick overview of the app.",
    welcomeSteps: [
      { icon: "🗺️", title: "My path", text: "Each program competency is a quest on the map. Complete them in order to move forward." },
      { icon: "📝", title: "Questions", text: "Answer multiple-choice and true/false questions tied to each competency." },
      { icon: "🎖️", title: "Badges", text: "Pass a quest with 70% or more to unlock its badge." },
      { icon: "🏆", title: "Trophies", text: "Earn special trophies for your achievements and progress." },
      { icon: "📊", title: "Leaderboard", text: "Compare your progress with the rest of the class." },
      { icon: "👷", title: "Your avatar", text: "Choose your avatar — it evolves as you earn experience." }
    ]
  }
};

/* ---- Paliers de niveau (basés sur XP total) ---- */
const LEVELS = [
  { min: 0,    name_fr: "Novice",       name_en: "Novice",     avatarStage: 0 },
  { min: 200,  name_fr: "Apprenti(e)",  name_en: "Apprentice", avatarStage: 2 },
  { min: 500,  name_fr: "Compétent(e)", name_en: "Competent",  avatarStage: 4 },
  { min: 1000, name_fr: "Chevronné(e)", name_en: "Seasoned",   avatarStage: 6 },
  { min: 2000, name_fr: "Expert(e)",    name_en: "Expert",     avatarStage: 9 },
  { min: 3500, name_fr: "Maître",       name_en: "Master",     avatarStage: 11 }
];

/* ---- Personnages d'avatar (ouvriers de chantier / camionneurs) ----
   Chaque personnage est dessiné en SVG dans app.js (fonction AVATAR_SVG).
   "accent" = couleur par défaut du casque/gilet, modifiable via la
   sélection de couleur. */
const AVATAR_CHARACTERS = [
 {
  "id": "dragon",
  "name_fr": "Dragon",
  "name_en": "Dragon",
  "title_fr": "Le Sage",
  "title_en": "The Sage",
  "stages": [
   "🥚",
   "🥚",
   "🦎",
   "🦎",
   "🐲",
   "🐲",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉"
  ]
 },
 {
  "id": "licorne",
  "name_fr": "Licorne",
  "name_en": "Unicorn",
  "title_fr": "La Guérisseuse",
  "title_en": "The Healer",
  "stages": [
   "🥚",
   "🥚",
   "🐴",
   "🐴",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄"
  ]
 },
 {
  "id": "phenix",
  "name_fr": "Phénix",
  "name_en": "Phoenix",
  "title_fr": "Le Résilient",
  "title_en": "The Resilient One",
  "stages": [
   "🥚",
   "🥚",
   "🐣",
   "🐣",
   "🐦",
   "🐦",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅"
  ]
 },
 {
  "id": "griffon",
  "name_fr": "Griffon",
  "name_en": "Griffin",
  "title_fr": "Le Courageux",
  "title_en": "The Brave One",
  "stages": [
   "🥚",
   "🥚",
   "🐱",
   "🐱",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁"
  ]
 }
];

const AVATAR_COLORS = [
  { id: "jaune",  hex: "#f7b500", name_fr: "Jaune sécurité", name_en: "Safety Yellow" },
  { id: "orange", hex: "#ff7a1a", name_fr: "Orange chantier", name_en: "Site Orange" },
  { id: "vert",   hex: "#3bb54a", name_fr: "Vert forêt", name_en: "Forest Green" },
  { id: "bleu",   hex: "#2a7de1", name_fr: "Bleu acier", name_en: "Steel Blue" },
  { id: "rouge",  hex: "#e13c3c", name_fr: "Rouge feu", name_en: "Fire Red" }
];

/* ---- Machines de l'élève (grossissent avec le XP) ----
   Le dessin SVG de chaque machine est dans app.js (fonction vehicleSVG). */
const VEHICLE_TYPES = [
  { id: "camion", name_fr: "Camion à benne", name_en: "Dump Truck" },
  { id: "pelle", name_fr: "Pelle mécanique", name_en: "Excavator" },
  { id: "bouteur", name_fr: "Bouteur", name_en: "Bulldozer" },
  { id: "chargeuse", name_fr: "Chargeuse", name_en: "Loader" }
];

/* La hauteur affichée (en pixels) interpole entre minHeight et maxHeight
   selon le XP actuel de l'élève (voir vehicleHeight() dans app.js). La
   largeur est calculée automatiquement pour respecter les proportions
   propres à chaque machine (voir VEHICLE_VIEWBOX dans app.js). */
const VEHICLE_GROWTH = { minHeight: 78, maxHeight: 178, maxXP: 3500 };

/* ---- Commandes de cabine (questions basées sur une image) ----
   Chaque machine a 4 commandes numérotées, dessinées par cabinSVG()
   dans app.js aux coordonnées cx/cy (viewBox 0 0 360 220). Ces mêmes
   coordonnées servent à la fois à dessiner l'illustration et à
   positionner les zones cliquables des questions de type "hotspot" —
   l'image et les questions restent donc toujours alignées.
   Configuration générique à titre pédagogique — la disposition réelle
   varie selon le fabricant et le modèle (à valider par l'enseignant). */
const CABIN_CONTROLS = {
  pelle: [
    { num: 1, cx: 100, cy: 168, kind: "joystick",
      label_fr: "Joystick gauche", label_en: "Left joystick",
      desc_fr: "Contrôle la rotation de la tourelle et le godet",
      desc_en: "Controls turret rotation and the bucket" },
    { num: 2, cx: 210, cy: 168, kind: "joystick",
      label_fr: "Joystick droit", label_en: "Right joystick",
      desc_fr: "Contrôle la flèche et le bras (balancier)",
      desc_en: "Controls the boom and the stick (arm)" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédales de translation", label_en: "Travel pedals",
      desc_fr: "Font avancer ou reculer les chenilles",
      desc_en: "Move the tracks forward or backward" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  bouteur: [
    { num: 1, cx: 110, cy: 172, kind: "lever",
      label_fr: "Levier de la lame", label_en: "Blade control lever",
      desc_fr: "Lève, abaisse et incline la lame",
      desc_en: "Raises, lowers and tilts the blade" },
    { num: 2, cx: 210, cy: 172, kind: "lever",
      label_fr: "Manettes de direction (chenilles)", label_en: "Steering clutch levers",
      desc_fr: "Contrôlent la direction en ralentissant une chenille à la fois",
      desc_en: "Control steering by slowing one track at a time" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale de frein", label_en: "Brake pedal",
      desc_fr: "Ralentit ou immobilise la machine",
      desc_en: "Slows or stops the machine" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  chargeuse: [
    { num: 1, cx: 210, cy: 168, kind: "lever",
      label_fr: "Levier de commande du godet", label_en: "Bucket control lever",
      desc_fr: "Lève, abaisse et bascule le godet",
      desc_en: "Raises, lowers and tilts the bucket" },
    { num: 2, cx: 110, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues",
      desc_en: "Controls the direction of the wheels" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale d'accélérateur", label_en: "Accelerator pedal",
      desc_fr: "Contrôle le régime moteur et la vitesse",
      desc_en: "Controls engine speed and travel speed" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  niveleuse: [
    { num: 1, cx: 190, cy: 172, kind: "lever",
      label_fr: "Leviers de la lame", label_en: "Blade control levers",
      desc_fr: "Ajustent l'angle, la hauteur et l'inclinaison de la lame",
      desc_en: "Adjust the blade's angle, height and tilt" },
    { num: 2, cx: 100, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues avant",
      desc_en: "Controls the direction of the front wheels" },
    { num: 3, cx: 255, cy: 172, kind: "switch",
      label_fr: "Commande d'articulation du châssis", label_en: "Frame articulation control",
      desc_fr: "Articule le châssis pour resserrer le rayon de braquage",
      desc_en: "Articulates the frame to tighten the turning radius" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ]
};

/* ---- Trophées (méta-réussites) ---- */
const TROPHIES = [
  { id: "t_first", name_fr: "Premier pas", name_en: "First Step", icon: "🥉",
    desc_fr: "Réussir ton premier palier de compétence", desc_en: "Pass your first competency tier",
    check: (state) => Object.keys(state.completed).length >= 1 },
  { id: "t_half", name_fr: "Mi-parcours", name_en: "Halfway There", icon: "🥈",
    desc_fr: "Maîtriser 10 compétences (palier Avancé)", desc_en: "Master 10 competencies (Advanced tier)",
    check: (state) => (state.badges || []).length >= 10 },
  { id: "t_all", name_fr: "Diplômé virtuel", name_en: "Virtual Graduate", icon: "🏆",
    desc_fr: "Maîtriser les 20 compétences du programme", desc_en: "Master all 20 competencies of the program",
    check: (state) => (state.badges || []).length >= 20 },
  { id: "t_perfect", name_fr: "Sans faute", name_en: "Flawless", icon: "💯",
    desc_fr: "Obtenir 100% à un palier", desc_en: "Score 100% on a tier",
    check: (state) => Object.values(state.completed).some(s => s.score === 100) },
  { id: "t_safety", name_fr: "Zone sécurité", name_en: "Safety Zone", icon: "🦺",
    desc_fr: "Réussir le palier Débutant du module Santé et sécurité", desc_en: "Pass the Beginner tier of the Health & Safety module",
    check: (state) => state.completed["c02_1"] && state.completed["c02_1"].score >= 70 },
  { id: "t_streak", name_fr: "Assidu", name_en: "Dedicated", icon: "🔥",
    desc_fr: "Se connecter 3 jours différents", desc_en: "Log in on 3 different days",
    check: (state) => (state.loginDays || []).length >= 3 },
  { id: "t_podium", name_fr: "Sur le podium", name_en: "On the Podium", icon: "🏅",
    desc_fr: "Atteindre le top 3 du palmarès", desc_en: "Reach the top 3 of the leaderboard",
    check: (state) => (LEADERBOARD_SEED.filter(p => p.xp > state.xp).length) < 3 },
  { id: "t_matcher", name_fr: "Bon association", name_en: "Great Match", icon: "🧩",
    desc_fr: "Réussir 15 questions d'association de termes", desc_en: "Complete 15 term-matching questions",
    check: (state) => (state.matchesCompleted || 0) >= 15 }
];

/* ---- Palmarès (données d'exemple — classe fictive) ----
   À remplacer par de vraies données élèves lorsqu'un backend
   partagé sera branché (voir README). */
const LEADERBOARD_SEED = [
  { name: "Mia-Rose T.", xp: 3120, avatarChar: "operatrice_bouteur", avatarColor: "vert" },
  { name: "Xavier L.", xp: 2450, avatarChar: "contremaitre", avatarColor: "bleu" },
  { name: "Sam D.", xp: 1780, avatarChar: "camionneur", avatarColor: "orange" },
  { name: "Alicia P.", xp: 1290, avatarChar: "camionneuse", avatarColor: "rouge" },
  { name: "Kevin R.", xp: 860, avatarChar: "contremaitre", avatarColor: "jaune" },
  { name: "Noémie B.", xp: 430, avatarChar: "mecanicienne", avatarColor: "bleu" },
  { name: "Tommy G.", xp: 120, avatarChar: "camionneur", avatarColor: "vert" }
];
