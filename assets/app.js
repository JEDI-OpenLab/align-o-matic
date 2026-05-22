const bloomLevels = [
  {
    id: "connaitre",
    name: "Connaître",
    family: "surface",
    tone: "blue",
    short: "Restituer avec justesse une information, une procédure ou un repère appris.",
    verbs: [
      "assigner",
      "associer",
      "caractériser",
      "cataloguer",
      "citer",
      "collecter",
      "décrire",
      "définir",
      "délimiter",
      "désigner",
      "déterminer",
      "énumérer",
      "étiqueter",
      "identifier",
      "indiquer",
      "inventorier",
      "lister",
      "mémoriser",
      "nommer",
      "ordonner",
      "rappeler",
      "reconnaître",
      "reproduire",
      "sélectionner",
      "situer"
    ],
    example: "Identifier les principes de l'alignement pédagogique dans un syllabus.",
    activities: "Exposés courts, cartes de notions, tests éclairs, QCM d'entraînement, glossaires, quiz de prérequis.",
    evaluations: "QCM, vrai-faux, réponses brèves, étiquetage, restitution structurée."
  },
  {
    id: "comprendre",
    name: "Comprendre",
    family: "intermediaire",
    tone: "teal",
    short: "Interpréter, reformuler, expliquer un concept et rendre intelligible un raisonnement.",
    verbs: [
      "associer",
      "classer",
      "comparer",
      "conclure",
      "contextualiser",
      "convertir",
      "décrire",
      "démontrer",
      "différencier",
      "discuter",
      "distinguer",
      "estimer",
      "expliquer",
      "extrapoler",
      "illustrer",
      "inférer",
      "interpréter",
      "paraphraser",
      "prédire",
      "reformuler",
      "représenter",
      "résumer",
      "schématiser",
      "situer",
      "traduire"
    ],
    example: "Expliquer les relations entre objectifs, activités et évaluations dans une séquence.",
    activities: "Discussion guidée, carte conceptuelle, reformulation, comparaison d'exemples, questions-réponses, mini-débat.",
    evaluations: "Réponse développée, schéma commenté, exposé court, synthèse, explication argumentée."
  },
  {
    id: "appliquer",
    name: "Appliquer",
    family: "intermediaire",
    tone: "green",
    short: "Utiliser une méthode, suivre une procédure, accomplir une tâche selon des règles.",
    verbs: [
      "adapter",
      "administrer",
      "appliquer",
      "assembler",
      "calculer",
      "choisir",
      "classifier",
      "compléter",
      "construire",
      "démontrer",
      "employer",
      "exécuter",
      "expérimenter",
      "formuler",
      "gérer",
      "illustrer",
      "manipuler",
      "mesurer",
      "mettre en pratique",
      "modifier",
      "opérer",
      "planifier",
      "pratiquer",
      "produire",
      "rédiger",
      "résoudre",
      "simuler",
      "transférer",
      "utiliser"
    ],
    example: "Appliquer la recette de formulation à trois objectifs de cours.",
    activities: "Exercices corrigés, ateliers d'application, travaux pratiques, simulation simple, entraînement progressif.",
    evaluations: "Exercice de transfert, production encadrée, démonstration, résolution de problème guidée."
  },
  {
    id: "analyser",
    name: "Analyser",
    family: "profondeur",
    tone: "amber",
    short: "Repérer les éléments d'une situation, leurs relations, causes, tendances et tensions.",
    verbs: [
      "analyser",
      "attribuer",
      "catégoriser",
      "cibler",
      "comparer",
      "contraster",
      "corréler",
      "critiquer",
      "décomposer",
      "déduire",
      "détecter",
      "différencier",
      "distinguer",
      "diviser",
      "examiner",
      "expliquer",
      "faire ressortir",
      "identifier",
      "inférer",
      "interpréter",
      "mettre en relation",
      "modéliser",
      "nuancer",
      "organiser",
      "questionner",
      "relier",
      "tester"
    ],
    example: "Analyser les causes d'un défaut d'alignement dans une UE.",
    activities: "Étude de cas, jigsaw, analyse de textes, résolution de problèmes, confrontation entre pairs, recherche guidée.",
    evaluations: "Diagnostic argumenté, étude de cas, rapport analytique, carte de relations, oral de justification."
  },
  {
    id: "evaluer",
    name: "Évaluer",
    family: "profondeur",
    tone: "coral",
    short: "Porter un jugement fondé sur des critères, justifier une décision et valider une option.",
    verbs: [
      "apprécier",
      "argumenter",
      "choisir",
      "classer",
      "comparer",
      "conclure",
      "contrôler",
      "convaincre",
      "critiquer",
      "décider",
      "défendre",
      "déterminer",
      "estimer",
      "évaluer",
      "expliquer",
      "juger",
      "justifier",
      "mesurer",
      "persuader",
      "prédire",
      "recommander",
      "sélectionner",
      "soutenir",
      "tester",
      "valider",
      "vérifier"
    ],
    example: "Évaluer la pertinence d'une grille critériée au regard d'une compétence visée.",
    activities: "Débat, revue par les pairs, comparaison de productions, choix argumenté, analyse critique, jury simulé.",
    evaluations: "Avis argumenté, défense orale, rapport de recommandation, évaluation par les pairs, justification de décision."
  },
  {
    id: "creer",
    name: "Créer",
    family: "profondeur",
    tone: "ink",
    short: "Mobiliser les apprentissages pour produire un tout cohérent, nouveau ou adapté.",
    verbs: [
      "adapter",
      "agencer",
      "anticiper",
      "assembler",
      "combiner",
      "composer",
      "concevoir",
      "constituer",
      "construire",
      "créer",
      "développer",
      "élaborer",
      "formuler",
      "générer",
      "imaginer",
      "innover",
      "intégrer",
      "inventer",
      "mettre en place",
      "modifier",
      "organiser",
      "planifier",
      "préparer",
      "produire",
      "projeter",
      "proposer",
      "rédiger",
      "réorganiser",
      "schématiser",
      "structurer",
      "synthétiser"
    ],
    example: "Concevoir une séquence alignée incluant objectifs, activités, évaluation et rétroactions.",
    activities: "Projet, prototype, construction de cours par les étudiants, scénario, production originale, portfolio.",
    evaluations: "Projet individuel ou collectif, portfolio, prototype, dossier de conception, production authentique."
  }
];

const matrixItems = [
  {
    title: "Niveaux de surface",
    objective: "Identifier, définir, reconnaître ou lister des notions essentielles.",
    activities: "Exposés courts, lectures ciblées, cartes de connaissances, quiz, tests de positionnement.",
    evaluation: "QCM, vrai-faux, réponses brèves, étiquetage, restitution structurée.",
    warning: "Ne pas évaluer une analyse critique si les étudiants n'ont fait que mémoriser."
  },
  {
    title: "Niveaux intermédiaires",
    objective: "Expliquer, comparer, appliquer une procédure ou utiliser une méthode dans un contexte donné.",
    activities: "Questionnement, débat, exercices de transfert, travaux pratiques, ateliers d'application.",
    evaluation: "Réponses développées, exercices contextualisés, démonstration, production accompagnée.",
    warning: "Vérifier que le format d'évaluation permet bien de voir l'application et pas seulement la restitution."
  },
  {
    title: "Niveaux profonds",
    objective: "Analyser, évaluer, justifier, concevoir, transférer ou produire une solution originale.",
    activities: "Études de cas, apprentissage par projet, simulation, recherche guidée, évaluation par les pairs.",
    evaluation: "Cas complexe, projet, portfolio, rapport argumenté, soutenance, évaluation authentique.",
    warning: "Prévoir des étapes d'entraînement, de rétroaction et de critères visibles avant l'évaluation finale."
  },
  {
    title: "Savoir-être",
    objective: "Valoriser une posture, participer, adopter un principe ou prendre une responsabilité.",
    activities: "Débat régulé, rôle, mise en situation, travail collectif, observation et retour réflexif.",
    evaluation: "Observation avec échelle, autoévaluation, traces de participation, portfolio réflexif.",
    warning: "Nommer les comportements observables pour éviter une évaluation d'impression."
  },
  {
    title: "Savoir-faire",
    objective: "Reproduire, manipuler, réaliser, adapter ou perfectionner un geste ou une méthode.",
    activities: "Démonstration, pratique guidée, entraînement par paliers, stage, simulation, retour expert.",
    evaluation: "Observation directe, démonstration, performance en contexte, grille de geste professionnel.",
    warning: "Un savoir-faire ne se valide pas durablement par une seule question de cours."
  },
  {
    title: "Évaluation formative",
    objective: "Permettre aux étudiants de se situer avant l'évaluation certificative.",
    activities: "Tests éclairs, correction type, rétroaction par les pairs, dépôt intermédiaire, brouillon commenté.",
    evaluation: "Rétroaction, autoévaluation, grille de progression, exercice non noté ou faiblement noté.",
    warning: "Sans rétroaction utilisable, l'évaluation formative devient une mini-évaluation sommative."
  }
];

const checklistItems = [
  {
    title: "Les objectifs sont formulés du point de vue des étudiants.",
    detail: "La phrase dit ce qu'ils seront capables de faire, pas seulement ce que l'enseignant va présenter."
  },
  {
    title: "Chaque objectif contient un verbe observable.",
    detail: "Le verbe permet de concevoir une activité et une évaluation sans deviner l'intention."
  },
  {
    title: "Le niveau de Bloom est cohérent avec l'ambition du cours.",
    detail: "Mémorisation, compréhension, application, analyse, évaluation ou création sont explicitement choisis."
  },
  {
    title: "Les contenus sont au service des objectifs.",
    detail: "Les chapitres, ressources et supports ne sont pas seulement empilés par habitude ou contrainte."
  },
  {
    title: "Les activités permettent de s'entraîner à la performance attendue.",
    detail: "Les étudiants pratiquent ce qu'ils devront produire, expliquer, analyser, juger ou concevoir."
  },
  {
    title: "L'évaluation observe bien l'objectif annoncé.",
    detail: "Le format ne mesure pas un niveau plus bas ou une compétence différente de celle visée."
  },
  {
    title: "Des critères et indicateurs sont connus avant l'évaluation.",
    detail: "Les étudiants savent à quelles qualités leur production ou leur action sera rapportée."
  },
  {
    title: "Des occasions de rétroaction existent avant l'évaluation finale.",
    detail: "Les erreurs servent à réguler les apprentissages, pas seulement à sanctionner à la fin."
  },
  {
    title: "Les outils numériques ont une fonction pédagogique claire.",
    detail: "Forum, wiki, plateforme ou document collaboratif soutiennent un objectif identifiable."
  },
  {
    title: "Le syllabus rend la cohérence visible.",
    detail: "Objectifs, activités, évaluations, calendrier, ressources et critères sont articulés."
  },
  {
    title: "L'alignement peut être expliqué aux étudiants.",
    detail: "La logique du cours est suffisamment claire pour être présentée au début et remobilisée ensuite."
  },
  {
    title: "Le dispositif peut être ajusté en cours de route.",
    detail: "Les retours et traces d'apprentissage permettent de repérer un décalage et de corriger."
  }
];

const levelSelect = document.querySelector("#levelSelect");
const verbSelect = document.querySelector("#verbSelect");
const objectInput = document.querySelector("#objectInput");
const contextInput = document.querySelector("#contextInput");
const objectiveOutput = document.querySelector("#objectiveOutput");
const copyObjective = document.querySelector("#copyObjective");

const renderSelects = () => {
  bloomLevels.forEach((level) => {
    const option = document.createElement("option");
    option.value = level.id;
    option.textContent = level.name;
    levelSelect.append(option);
  });
  levelSelect.value = "analyser";
  syncVerbs();
};

const getCurrentLevel = () => bloomLevels.find((level) => level.id === levelSelect.value) || bloomLevels[0];

const syncVerbs = () => {
  const level = getCurrentLevel();
  verbSelect.innerHTML = "";
  level.verbs.slice(0, 16).forEach((verb) => {
    const option = document.createElement("option");
    option.value = verb;
    option.textContent = verb;
    verbSelect.append(option);
  });
  const preferred = {
    connaitre: "identifier",
    comprendre: "expliquer",
    appliquer: "appliquer",
    analyser: "analyser",
    evaluer: "évaluer",
    creer: "concevoir"
  };
  verbSelect.value = preferred[level.id] || level.verbs[0];
  updateObjective();
};

const capitalise = (value) => value.charAt(0).toUpperCase() + value.slice(1);

const updateObjective = () => {
  const verb = verbSelect.value;
  const object = objectInput.value.trim() || "un objet d'apprentissage";
  const context = contextInput.value.trim();
  const contextPart = context ? ` ${context}` : "";
  const connector = /^[aeiouyhàâäéèêëîïôöùûü]/i.test(verb) ? "d'" : "de ";
  objectiveOutput.textContent = `À la fin de la séquence, les étudiants seront en mesure ${connector}${verb} ${object}${contextPart}.`;
};

const renderBloom = () => {
  const grid = document.querySelector("#bloomGrid");
  grid.innerHTML = "";
  bloomLevels.forEach((level) => {
    const article = document.createElement("article");
    article.className = "bloom-card";
    article.dataset.family = level.family;
    article.dataset.tone = level.tone;
    article.innerHTML = `
      <header>
        <small>${level.family === "surface" ? "Apprentissage de surface" : level.family === "intermediaire" ? "Apprentissage intermédiaire" : "Apprentissage en profondeur"}</small>
        <h3>${level.name}</h3>
      </header>
      <div class="card-body">
        <p>${level.short}</p>
        <ul class="verb-list">${level.verbs.slice(0, 18).map((verb) => `<li>${capitalise(verb)}</li>`).join("")}</ul>
      </div>
      <p class="card-example"><strong>Exemple :</strong> ${level.example}</p>
    `;
    grid.append(article);
  });
};

const renderMatrix = () => {
  const grid = document.querySelector("#matrixGrid");
  grid.innerHTML = matrixItems
    .map(
      (item) => `
        <article class="matrix-card">
          <h3>${item.title}</h3>
          <dl>
            <div>
              <dt>Objectif type</dt>
              <dd>${item.objective}</dd>
            </div>
            <div>
              <dt>Activités pertinentes</dt>
              <dd>${item.activities}</dd>
            </div>
            <div>
              <dt>Évaluations possibles</dt>
              <dd>${item.evaluation}</dd>
            </div>
            <div>
              <dt>Point de vigilance</dt>
              <dd>${item.warning}</dd>
            </div>
          </dl>
        </article>
      `
    )
    .join("");
};

const renderChecklist = () => {
  const checklist = document.querySelector("#checklist");
  checklist.innerHTML = "";
  const saved = JSON.parse(localStorage.getItem("alignomatic-checklist") || "[]");
  checklistItems.forEach((item, index) => {
    const label = document.createElement("label");
    label.className = "check-item";
    label.innerHTML = `
      <input type="checkbox" data-check="${index}" ${saved.includes(index) ? "checked" : ""}>
      <span>${item.title}<small>${item.detail}</small></span>
    `;
    checklist.append(label);
  });
  updateAuditScore();
};

const updateAuditScore = () => {
  const checked = [...document.querySelectorAll("[data-check]:checked")].map((input) => Number(input.dataset.check));
  localStorage.setItem("alignomatic-checklist", JSON.stringify(checked));
  const percent = Math.round((checked.length / checklistItems.length) * 100);
  document.querySelector("#auditScore").textContent = `${percent}%`;
  document.querySelector("#auditBar").style.width = `${percent}%`;
  const label = document.querySelector("#auditLabel");
  if (percent < 35) label.textContent = "Alignement à construire";
  else if (percent < 70) label.textContent = "Alignement en consolidation";
  else if (percent < 92) label.textContent = "Alignement solide";
  else label.textContent = "Alignement explicite et robuste";
};

const bindEvents = () => {
  levelSelect.addEventListener("change", syncVerbs);
  verbSelect.addEventListener("change", updateObjective);
  objectInput.addEventListener("input", updateObjective);
  contextInput.addEventListener("input", updateObjective);

  copyObjective.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(objectiveOutput.textContent);
      copyObjective.textContent = "Copie";
      window.setTimeout(() => {
        copyObjective.textContent = "Copier";
      }, 1400);
    } catch {
      objectiveOutput.focus();
    }
  });

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      document.querySelectorAll(".bloom-card").forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.family !== filter;
      });
    });
  });

  document.querySelector("#checklist").addEventListener("change", updateAuditScore);
  document.querySelector("#resetChecklist").addEventListener("click", () => {
    localStorage.removeItem("alignomatic-checklist");
    document.querySelectorAll("[data-check]").forEach((input) => {
      input.checked = false;
    });
    updateAuditScore();
  });
};

renderSelects();
renderBloom();
renderMatrix();
renderChecklist();
bindEvents();
