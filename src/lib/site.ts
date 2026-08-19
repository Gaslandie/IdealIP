/**
 * Configuration centrale du site IdéalTP.
 * ⚠️ Les valeurs marquées « À CONFIRMER » sont des placeholders : à remplacer
 * par les vraies coordonnées / chiffres fournis par le client.
 */

export const site = {
  name: "IdéalTP",
  legalName: "IdéalTP — Topographie & Travaux Publics",
  baseline: "La précision au service de vos projets",
  slogan: "Mesurer • Implanter • Construire l’avenir",
  city: "Dubréka – Khorira",
  country: "Guinée",
  url: "https://idealtp.com", // À CONFIRMER (nom de domaine)
  email: "contact@idealtp.com", // À CONFIRMER
  phones: ["+224 621 58 92 23"],
  whatsapp: "224621589223", // Format international sans "+"
  facebook: "https://www.facebook.com/idealtp", // À CONFIRMER
  address: "Dubréka – Khorira, République de Guinée",
  horaires: "Lundi – samedi, 8h – 18h", // À CONFIRMER
  mapsUrl: "https://maps.google.com/?q=Dubréka+Khorira+Guinée", // À CONFIRMER
  delais: [
    "Dès que possible",
    "Sous 2 semaines",
    "Sous 1 mois",
    "Plus tard / à planifier",
  ],
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
] as const;

export type Service = {
  num: string;
  slug: string;
  title: string;
  excerpt: string;
  longText: string[];
  points: string[];
  livrables: string[];
  image: string;
};

export const services: Service[] = [
  {
    num: "01",
    slug: "topographie",
    title: "Topographie",
    excerpt:
      "Levés de terrain, nivellement et plans topographiques précis, réalisés avec des instruments calibrés et des points de référence contrôlés.",
    longText: [
      "Un levé topographique fiable donne une lecture précise du terrain avant tout choix technique. Nos équipes relèvent les limites, les altitudes, les ouvrages existants, les accès, les contraintes visibles et les points utiles au dimensionnement du projet.",
      "Sur site, nous travaillons avec station totale et récepteurs GNSS selon la nature du terrain, la superficie et le niveau de précision attendu. Les mesures sont contrôlées, recoupées et rattachées à des repères stables pour produire une base exploitable par l’architecte, l’ingénieur ou l’entreprise de construction.",
      "Les données sont ensuite traitées pour produire des plans clairs : courbes de niveau, profils, calculs de cubature et informations nécessaires aux études de plateforme, de voirie ou de fondation. Chaque livrable est préparé pour être compris sur le terrain comme au bureau.",
    ],
    points: ["Levés topographiques", "Nivellement", "Plans & profils", "Calculs de cubature"],
    livrables: [
      "Plan topographique coté au 1/500",
      "Fichier DWG/DXF exploitable",
      "Rapport de levé",
      "Carnet de points GPS",
    ],
    image: "/images/service-topographie.jpg",
  },
  {
    num: "02",
    slug: "lotissement",
    title: "Lotissement",
    excerpt:
      "Découpage parcellaire, bornage et plans de lotissement conformes, pour sécuriser le foncier des promoteurs et des collectivités.",
    longText: [
      "Un projet de lotissement demande une organisation foncière lisible, défendable et compatible avec les accès, les réseaux et les usages futurs. Nous partons du terrain réel pour proposer un découpage parcellaire cohérent, en tenant compte des limites existantes et des contraintes administratives.",
      "Le bornage matérialise les parcelles sur site et réduit les risques de contestation entre acquéreurs, voisins ou porteurs de projet. Chaque borne posée correspond à un point contrôlé et reporté dans les plans pour faciliter les vérifications ultérieures.",
      "Nous préparons les pièces techniques nécessaires au suivi du dossier : plan de masse, tableau de surfaces, repérage des voies, réserves éventuelles et documents utiles aux démarches foncières. Le résultat doit permettre au client de vendre, construire ou régulariser avec une base claire.",
    ],
    points: ["Découpage parcellaire", "Bornage", "Plans de masse", "Dossiers fonciers"],
    livrables: [
      "Plan de lotissement",
      "Plan de masse coté",
      "Tableau des parcelles et surfaces",
      "Procès-verbal de bornage",
      "Fichier DWG/DXF",
    ],
    image: "/images/service-lotissement.jpg",
  },
  {
    num: "03",
    slug: "implantation",
    title: "Implantation",
    excerpt:
      "Implantation d’ouvrages, d’axes et de bâtiments sur le terrain, avec un contrôle géométrique rigoureux à chaque phase du chantier.",
    longText: [
      "L’implantation transforme les plans en points précis sur le terrain. Elle conditionne l’alignement des bâtiments, la position des axes, les niveaux de référence et la bonne exécution des ouvrages dès le démarrage du chantier.",
      "Nous préparons l’intervention à partir des plans validés, puis matérialisons les points, axes et repères nécessaires aux équipes travaux. Les implantations sont contrôlées pour limiter les reprises, les décalages de fondation et les conflits entre lots techniques.",
      "Lorsque le chantier avance, nous pouvons intervenir pour des contrôles géométriques, des récolements ou des ajustements de niveaux. Cette présence permet de vérifier que l’ouvrage construit reste conforme à l’intention initiale.",
    ],
    points: ["Implantation de bâtiments", "Axes routiers", "Contrôle géométrique", "Récolement"],
    livrables: [
      "Plan d’implantation",
      "Liste des coordonnées des points",
      "Repères terrain matérialisés",
      "Rapport de contrôle géométrique",
      "Plan de récolement",
    ],
    image:
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=1600&q=80",
  },
  {
    num: "04",
    slug: "travaux-publics",
    title: "Travaux publics",
    excerpt:
      "Terrassement, voirie et aménagement de plateformes : nos équipes et nos engins interviennent de la préparation à la livraison.",
    longText: [
      "Les travaux publics exigent une préparation rigoureuse pour éviter les volumes mal estimés, les niveaux imprécis et les accès difficiles à maintenir. Nous intervenons sur les plateformes, pistes, voiries et aménagements de sites avec une lecture terrain issue de nos compétences topographiques.",
      "Avant les travaux, les niveaux et volumes sont étudiés pour organiser le terrassement, les déblais, les remblais et les pentes utiles à l’écoulement des eaux. Pendant l’exécution, le suivi permet de contrôler l’avancement et d’ajuster les zones sensibles.",
      "Cette approche relie la mesure et l’exécution : les engins travaillent à partir de repères fiables, les quantités sont mieux maîtrisées et le client dispose d’un suivi clair jusqu’à la livraison de la plateforme ou de la voirie.",
    ],
    points: ["Terrassement", "Voirie & assainissement", "Plateformes", "Aménagement de sites"],
    livrables: [
      "Plan de terrassement",
      "Calcul de cubature",
      "Profil en long et profils en travers",
      "Plan de plateforme",
      "Rapport de suivi de chantier",
    ],
    image: "/images/service-travaux-publics.jpg",
  },
];

export const methode = [
  {
    num: "01",
    title: "Étude du besoin",
    text:
      "Nous analysons votre terrain, vos plans disponibles et les contraintes du projet. Cette étape permet de définir la précision attendue, les livrables utiles et le calendrier d’intervention.",
  },
  {
    num: "02",
    title: "Intervention terrain",
    text:
      "L’équipe se déplace avec les instruments adaptés : station totale, GNSS et repères de contrôle. Les points sont relevés ou implantés avec des vérifications croisées pour limiter les écarts.",
  },
  {
    num: "03",
    title: "Traitement & plans",
    text:
      "Les mesures sont contrôlées, calculées puis mises en plan. Nous produisons des documents lisibles pour les bureaux d’études, les administrations et les équipes de chantier.",
  },
  {
    num: "04",
    title: "Livraison & suivi",
    text:
      "Les livrables sont remis avec les explications nécessaires à leur utilisation. Si le chantier évolue, nous pouvons revenir pour contrôler, compléter ou recaler les informations terrain.",
  },
] as const;

export const valeurs = [
  {
    title: "Précision",
    text: "Chaque mesure est vérifiée, chaque point contrôlé. Nos livrables sont exploitables directement par vos équipes techniques et vos administrations.",
  },
  {
    title: "Fiabilité",
    text: "Des délais tenus, des équipes présentes sur le terrain et un interlocuteur unique du premier levé jusqu’à la réception du chantier.",
  },
  {
    title: "Engagement",
    text: "Nous nous impliquons dans la réussite de votre projet : conseils, alternatives techniques et suivi après livraison font partie de la prestation.",
  },
] as const;

export const zonesIntervention = [
  "Dubréka",
  "Coyah",
  "Kindia",
  "Conakry",
  "Boffa",
  "Forécariah",
] as const;

export const moyens = [
  {
    titre: "Instruments de mesure",
    items: [
      "Station totale",
      "Récepteurs GNSS",
      "Niveau optique",
      "Jalons et prismes de contrôle",
    ],
  },
  {
    titre: "Traitement et plans",
    items: [
      "Calcul et compensation des levés",
      "Dessin sur logiciel de CAO",
      "Export DWG/DXF",
      "Calculs de cubature",
    ],
  },
  {
    titre: "Moyens de chantier",
    items: [
      "Engins de terrassement",
      "Équipes terrain encadrées",
      "Matériel de bornage",
      "Véhicules d’intervention",
    ],
  },
] as const;

// À CONFIRMER — chiffres à valider avec le client
export const stats = [
  { value: 12, suffix: "+", label: "années d’expérience", note: "Sur le terrain en Guinée" },
  { value: 250, suffix: "+", label: "chantiers réalisés", note: "Privés et institutionnels" },
  { value: 1800, suffix: " ha", label: "de terrain lotis", note: "Découpés et bornés" },
  { value: 100, suffix: "%", label: "de projets suivis", note: "Du levé à la réception" },
];

export type Realisation = {
  slug: string;
  title: string;
  category: "Topographie" | "Lotissement" | "Implantation" | "Travaux publics";
  location: string;
  year: string;
  cover: string;
  gallery: string[];
  summary: string;
  contexte: string;
  mission: string;
  resultat: string;
  servicesSlugs: string[];
  surface?: string;
  duree?: string;
};

// Alimenté par le back-office à terme. Photos réelles à intégrer.
export const realisations: Realisation[] = [
  {
    slug: "lotissement-khorira",
    title: "Lotissement résidentiel de Khorira",
    category: "Lotissement",
    location: "Dubréka",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540039671641-ad99d86c68d0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=1600&q=80",
    ],
    summary:
      "Découpage, bornage et plan de masse d’un ensemble résidentiel organisé autour de voies lisibles et de parcelles contrôlées.",
    contexte:
      "Le promoteur souhaitait transformer une réserve foncière de Khorira en lots résidentiels commercialisables, avec des limites claires, des accès cohérents et un dossier technique exploitable pour les démarches foncières.\n\nLe terrain présentait des variations de niveau, des emprises voisines déjà occupées et plusieurs pistes existantes à intégrer dans le plan de masse sans fragiliser la circulation future.",
    mission:
      "IdéalTP a réalisé le levé topographique complet du site à la station totale et au GNSS, puis a établi le découpage parcellaire en tenant compte des accès, des pentes et des réserves nécessaires aux voies.\n\nLes équipes ont matérialisé les limites par bornage, contrôlé les surfaces de chaque lot et produit les plans de lotissement, tableaux de parcelles et fichiers DWG nécessaires au suivi administratif.",
    resultat:
      "Le client dispose d’un plan de masse cohérent, de parcelles identifiées sur le terrain et d’une base technique claire pour la commercialisation et la régularisation foncière.",
    servicesSlugs: ["topographie", "lotissement"],
    surface: "12 ha",
    duree: "6 semaines",
  },
  {
    slug: "leve-topographique-kagbelen",
    title: "Levé topographique de site industriel",
    category: "Topographie",
    location: "Kagbelen",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540039671641-ad99d86c68d0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=1600&q=80",
    ],
    summary:
      "Levé altimétrique et plan topographique d’un site industriel destiné aux études de plateforme, d’accès et de drainage.",
    contexte:
      "Un bureau d’études avait besoin d’une base fiable pour dimensionner une plateforme industrielle, vérifier les écoulements et préparer les profils de voirie autour du futur site.\n\nLa parcelle combinait zones remaniées, talus, points bas et ouvrages existants. Les altitudes, les ouvrages et les limites utiles devaient être relevés avec suffisamment de précision pour éviter des reprises d’étude.",
    mission:
      "IdéalTP a implanté des repères de contrôle, réalisé le levé au GNSS et à la station totale, puis densifié les points dans les zones de rupture de pente et autour des ouvrages sensibles.\n\nLes données ont été traitées pour produire un plan topographique coté, des courbes de niveau, des profils et des premières cubatures utiles aux arbitrages de terrassement.",
    resultat:
      "Le bureau d’études a pu travailler sur une base homogène, avec des niveaux vérifiés et des fichiers exploitables pour les études de plateforme, de voirie et d’assainissement.",
    servicesSlugs: ["topographie", "travaux-publics"],
    surface: "8 ha",
    duree: "10 jours",
  },
  {
    slug: "implantation-batiment-conakry",
    title: "Implantation d’un ensemble de bâtiments",
    category: "Implantation",
    location: "Conakry",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1600&q=80",
    ],
    summary:
      "Implantation d’axes, de niveaux et de repères de contrôle pour sécuriser le démarrage d’un chantier de bâtiments.",
    contexte:
      "L’entreprise de construction devait engager les fondations de plusieurs bâtiments sur une emprise contrainte, avec peu de marge pour les décalages entre plans, limites et réseaux voisins.\n\nLes plans d’exécution prévoyaient des axes précis, des altitudes de plateforme et des réservations à coordonner avant l’arrivée des équipes gros œuvre.",
    mission:
      "IdéalTP a préparé les coordonnées à partir des plans validés, contrôlé les repères existants, puis implanté les axes principaux, les angles de bâtiments et les niveaux de référence avec station totale.\n\nDes passages de contrôle ont permis de vérifier les fonds de fouille, les alignements et les écarts avant coulage, puis d’établir un récolement des points sensibles.",
    resultat:
      "Le chantier a démarré sur des repères partagés par les équipes terrain, avec moins d’incertitudes sur les axes, les niveaux et la conformité géométrique des premiers ouvrages.",
    servicesSlugs: ["implantation", "topographie"],
    surface: "4 bâtiments",
    duree: "3 semaines",
  },
  {
    slug: "terrassement-voirie-dubreka",
    title: "Terrassement et voirie d’accès",
    category: "Travaux publics",
    location: "Dubréka",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540039671641-ad99d86c68d0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1600&q=80",
    ],
    summary:
      "Préparation de plateforme, cubatures et exécution d’une voirie d’accès avec contrôle des pentes et des niveaux.",
    contexte:
      "Le maître d’ouvrage devait rendre accessible une parcelle en pente avant les travaux de construction, tout en maîtrisant les volumes de déblais et remblais.\n\nLa piste existante était irrégulière, exposée au ruissellement et insuffisante pour le passage régulier des engins et des camions.",
    mission:
      "IdéalTP a relevé le terrain naturel, calculé les cubatures, défini les niveaux de plateforme et matérialisé les axes de la voirie avant l’intervention des engins.\n\nPendant le terrassement, les équipes ont contrôlé les pentes, les largeurs, les altitudes et les points de raccordement afin de maintenir une exécution conforme au plan.",
    resultat:
      "La plateforme et la voirie d’accès ont été livrées avec des niveaux maîtrisés, une circulation plus stable et un suivi clair des volumes réellement exécutés.",
    servicesSlugs: ["travaux-publics", "topographie", "implantation"],
    surface: "1,4 km",
    duree: "5 semaines",
  },
  {
    slug: "bornage-parcelles-coyah",
    title: "Bornage et régularisation de parcelles",
    category: "Lotissement",
    location: "Coyah",
    year: "2023",
    cover:
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?auto=format&fit=crop&w=1600&q=80",
    ],
    summary:
      "Vérification de limites, bornage contradictoire et production de plans pour régulariser un ensemble de parcelles.",
    contexte:
      "Plusieurs propriétaires avaient besoin de clarifier les limites de parcelles voisines avant dépôt de dossiers et préparation de futures constructions.\n\nLe terrain comportait des repères anciens, des clôtures partielles et des occupations proches des limites supposées, ce qui imposait une intervention prudente et documentée.",
    mission:
      "IdéalTP a repris les documents disponibles, contrôlé les repères sur site, réalisé les levés complémentaires et comparé les limites théoriques avec la situation existante.\n\nLes bornes ont été posées après validation des points retenus, puis les plans et tableaux de coordonnées ont été préparés pour accompagner la régularisation foncière.",
    resultat:
      "Les propriétaires disposent de limites matérialisées, de plans lisibles et d’éléments techniques cohérents pour poursuivre leurs démarches en réduisant les risques de contestation.",
    servicesSlugs: ["lotissement", "topographie"],
    surface: "18 parcelles",
    duree: "2 semaines",
  },
];

export type Actualite = {
  slug: string;
  date: string;
  dateISO: string;
  category: string;
  title: string;
  excerpt: string;
};

export const actualites: Actualite[] = [
  {
    slug: "nouveaux-equipements",
    date: "12 juin 2026",
    dateISO: "2026-06-12",
    category: "Équipement",
    title: "IdéalTP renforce son parc d’instruments topographiques",
    excerpt:
      "De nouvelles stations totales et récepteurs GNSS viennent réduire les délais de levé sur les chantiers de grande superficie.",
  },
  {
    slug: "lotissement-khorira-livre",
    date: "28 avril 2026",
    dateISO: "2026-04-28",
    category: "Chantier",
    title: "Livraison du lotissement de Khorira",
    excerpt:
      "Plus de 300 parcelles bornées et remises aux acquéreurs, avec un dossier foncier complet pour chaque lot.",
  },
  {
    slug: "equipe-terrain",
    date: "05 mars 2026",
    dateISO: "2026-03-05",
    category: "Entreprise",
    title: "Une équipe terrain renforcée pour la saison sèche",
    excerpt:
      "Techniciens topographes et conducteurs d’engins rejoignent IdéalTP pour absorber la hausse des demandes d’implantation.",
  },
];
