const recipes = [
  {
    title: "Cookies au Chocolat Classiques",
    emoji: "🍪",
    description: "Des cookies moelleux et croustillants avec des pépites de chocolat fondantes.",
    prepTime: "15 min",
    cookTime: "12 min",
    servings: "24 cookies",
    ingredients: [
      "200g de beurre ramolli",
      "150g de sucre blanc",
      "100g de sucre roux",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "280g de farine",
      "1 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "300g de pépites de chocolat"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Dans un bol, mélangez le beurre ramolli avec les deux sucres jusqu'à obtenir une texture crémeuse.",
      "Ajoutez les œufs un par un, puis l'extrait de vanille.",
      "Dans un autre bol, mélangez la farine, le bicarbonate et le sel.",
      "Incorporez progressivement le mélange sec au mélange humide.",
      "Ajoutez les pépites de chocolat et mélangez délicatement.",
      "Formez des boules de pâte et disposez-les sur une plaque recouverte de papier cuisson.",
      "Enfournez pour 10-12 minutes jusqu'à ce qu'ils soient dorés.",
      "Laissez refroidir 5 minutes avant de déguster."
    ]
  },
  {
    title: "Cookies Chocolat Blanc Macadamia",
    emoji: "🍪",
    description: "Des cookies fondants avec du chocolat blanc et des noix de macadamia croquantes.",
    prepTime: "15 min",
    cookTime: "12 min",
    servings: "20 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "200g de sucre roux",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "250g de farine",
      "1 cuillère à café de levure chimique",
      "1/2 cuillère à café de sel",
      "200g de pépites de chocolat blanc",
      "100g de noix de macadamia concassées"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Battez le beurre avec le sucre roux jusqu'à obtenir un mélange mousseux.",
      "Ajoutez l'œuf et la vanille, mélangez bien.",
      "Tamisez la farine, la levure et le sel, puis incorporez au mélange.",
      "Ajoutez les pépites de chocolat blanc et les noix de macadamia.",
      "Formez des boules de pâte et espacez-les sur une plaque.",
      "Enfournez 12 minutes jusqu'à ce que les bords soient dorés.",
      "Laissez refroidir sur la plaque 5 minutes.",
      "Transférez sur une grille et laissez refroidir complètement."
    ]
  },
  {
    title: "Cookies Double Chocolat",
    emoji: "🍪",
    description: "Des cookies ultra chocolatés avec du cacao et des chunks de chocolat noir.",
    prepTime: "20 min",
    cookTime: "10 min",
    servings: "18 cookies",
    ingredients: [
      "170g de beurre ramolli",
      "180g de sucre",
      "80g de sucre roux",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "220g de farine",
      "50g de cacao en poudre non sucré",
      "1 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "250g de chunks de chocolat noir 70%"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Fouettez le beurre avec les deux sucres jusqu'à obtenir un mélange crémeux.",
      "Incorporez les œufs un par un, puis la vanille.",
      "Dans un autre bol, mélangez la farine, le cacao, le bicarbonate et le sel.",
      "Ajoutez progressivement les ingrédients secs aux ingrédients humides.",
      "Incorporez les chunks de chocolat noir.",
      "Formez des boules généreuses et disposez-les sur une plaque.",
      "Enfournez 10 minutes (le centre doit rester légèrement mou).",
      "Laissez refroidir sur la plaque 10 minutes avant de servir."
    ]
  },
  {
    title: "Cookies Avoine & Raisins Secs",
    emoji: "🍪",
    description: "Des cookies rustiques et sains aux flocons d'avoine et raisins secs moelleux.",
    prepTime: "15 min",
    cookTime: "14 min",
    servings: "22 cookies",
    ingredients: [
      "175g de beurre ramolli",
      "150g de sucre roux",
      "100g de sucre blanc",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "180g de farine",
      "180g de flocons d'avoine",
      "1 cuillère à café de bicarbonate de soude",
      "1 cuillère à café de cannelle",
      "1/2 cuillère à café de sel",
      "150g de raisins secs"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Battez le beurre avec les sucres jusqu'à obtenir un mélange onctueux.",
      "Ajoutez les œufs et la vanille.",
      "Mélangez la farine, les flocons d'avoine, le bicarbonate, la cannelle et le sel.",
      "Incorporez les ingrédients secs au mélange humide.",
      "Ajoutez les raisins secs.",
      "Formez des boules et disposez sur une plaque beurrée.",
      "Enfournez 12-14 minutes jusqu'à ce qu'ils soient dorés.",
      "Laissez refroidir 5 minutes avant de déguster."
    ]
  },
  {
    title: "Cookies au Beurre de Cacahuète",
    emoji: "🍪",
    description: "Des cookies crémeux au beurre de cacahuète avec leur motif à la fourchette signature.",
    prepTime: "10 min",
    cookTime: "12 min",
    servings: "20 cookies",
    ingredients: [
      "250g de beurre de cacahuète crémeux",
      "150g de sucre blanc",
      "100g de sucre roux",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "150g de farine",
      "1/2 cuillère à café de bicarbonate de soude",
      "1/4 cuillère à café de sel"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Mélangez le beurre de cacahuète avec les deux sucres.",
      "Ajoutez l'œuf et la vanille, mélangez bien.",
      "Incorporez la farine, le bicarbonate et le sel.",
      "Formez des boules de pâte.",
      "Disposez sur une plaque et aplatissez légèrement avec une fourchette en formant un quadrillage.",
      "Enfournez 10-12 minutes.",
      "Laissez refroidir complètement."
    ]
  },
  {
    title: "Cookies aux Noix de Pécan",
    emoji: "🍪",
    description: "Des cookies croquants garnis de généreuses noix de pécan caramélisées.",
    prepTime: "20 min",
    cookTime: "13 min",
    servings: "18 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "180g de sucre roux",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "240g de farine",
      "1 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "200g de noix de pécan concassées",
      "100g de pépites de chocolat au lait"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Faites griller les noix de pécan 5 minutes au four.",
      "Battez le beurre avec le sucre roux.",
      "Ajoutez l'œuf et la vanille.",
      "Incorporez la farine, le bicarbonate et le sel.",
      "Ajoutez les noix de pécan et les pépites de chocolat.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 12-13 minutes.",
      "Laissez refroidir avant de servir."
    ]
  },
  {
    title: "Cookies Citron Pavot",
    emoji: "🍪",
    description: "Des cookies frais et acidulés au citron avec des graines de pavot croquantes.",
    prepTime: "18 min",
    cookTime: "11 min",
    servings: "20 cookies",
    ingredients: [
      "170g de beurre ramolli",
      "200g de sucre blanc",
      "1 œuf",
      "Zeste de 2 citrons",
      "2 cuillères à soupe de jus de citron",
      "250g de farine",
      "2 cuillères à soupe de graines de pavot",
      "1/2 cuillère à café de bicarbonate de soude",
      "1/4 cuillère à café de sel"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Battez le beurre avec le sucre jusqu'à obtenir un mélange léger.",
      "Ajoutez l'œuf, le zeste et le jus de citron.",
      "Mélangez la farine, les graines de pavot, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs au mélange humide.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 10-11 minutes.",
      "Laissez refroidir et saupoudrez de sucre glace si désiré."
    ]
  },
  {
    title: "Cookies Snickerdoodles",
    emoji: "🍪",
    description: "Des cookies tendres enrobés de cannelle et sucre, un classique américain.",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: "24 cookies",
    ingredients: [
      "170g de beurre ramolli",
      "200g de sucre blanc",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "280g de farine",
      "1 cuillère à café de crème de tartre",
      "1/2 cuillère à café de bicarbonate de soude",
      "1/4 cuillère à café de sel",
      "50g de sucre + 2 cuillères à café de cannelle pour l'enrobage"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Battez le beurre avec le sucre jusqu'à obtenir un mélange mousseux.",
      "Ajoutez les œufs et la vanille.",
      "Mélangez la farine, la crème de tartre, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Dans un bol, mélangez le sucre d'enrobage avec la cannelle.",
      "Formez des boules et roulez-les dans le mélange cannelle-sucre.",
      "Disposez sur une plaque et enfournez 8-10 minutes.",
      "Laissez refroidir sur la plaque."
    ]
  },
  {
    title: "Cookies Triple Chocolat",
    emoji: "🍪",
    description: "L'extase du chocolat avec trois types de chocolat pour les vrais gourmands.",
    prepTime: "20 min",
    cookTime: "11 min",
    servings: "20 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "180g de sucre roux",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "200g de farine",
      "40g de cacao en poudre",
      "1 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "100g de pépites de chocolat noir",
      "100g de pépites de chocolat au lait",
      "100g de pépites de chocolat blanc"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Battez le beurre avec le sucre roux.",
      "Ajoutez les œufs et la vanille.",
      "Mélangez la farine, le cacao, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les trois types de pépites de chocolat.",
      "Formez des boules généreuses.",
      "Enfournez 10-11 minutes.",
      "Laissez refroidir avant de déguster."
    ]
  },
  {
    title: "Cookies Caramel Beurre Salé",
    emoji: "🍪",
    description: "Des cookies fondants avec du caramel au beurre salé coulant.",
    prepTime: "25 min",
    cookTime: "12 min",
    servings: "18 cookies",
    ingredients: [
      "190g de beurre ramolli",
      "150g de sucre roux",
      "100g de sucre blanc",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "270g de farine",
      "1 cuillère à café de bicarbonate de soude",
      "1 cuillère à café de fleur de sel",
      "200g de caramels au beurre salé coupés en morceaux",
      "100g de pépites de chocolat au lait"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Battez le beurre avec les sucres.",
      "Ajoutez les œufs et la vanille.",
      "Mélangez la farine, le bicarbonate et la fleur de sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les morceaux de caramel et les pépites de chocolat.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 11-12 minutes.",
      "Saupoudrez de fleur de sel et laissez refroidir."
    ]
  },
  {
    title: "Cookies Avoine Chocolat",
    emoji: "🍪",
    description: "Le mariage parfait entre les flocons d'avoine et le chocolat fondant.",
    prepTime: "15 min",
    cookTime: "13 min",
    servings: "22 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "160g de sucre roux",
      "100g de sucre blanc",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "180g de farine",
      "160g de flocons d'avoine",
      "1 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "250g de pépites de chocolat noir"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Battez le beurre avec les sucres.",
      "Ajoutez les œufs et la vanille.",
      "Mélangez la farine, les flocons d'avoine, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les pépites de chocolat.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 12-13 minutes.",
      "Laissez refroidir avant de servir."
    ]
  },
  {
    title: "Cookies Noisettes Chocolat",
    emoji: "🍪",
    description: "Des cookies gourmands aux noisettes torréfiées et chocolat au lait.",
    prepTime: "20 min",
    cookTime: "12 min",
    servings: "20 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "170g de sucre roux",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "240g de farine",
      "1 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "150g de noisettes torréfiées concassées",
      "150g de pépites de chocolat au lait"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Faites torréfier les noisettes 8 minutes au four.",
      "Battez le beurre avec le sucre roux.",
      "Ajoutez les œufs et la vanille.",
      "Incorporez la farine, le bicarbonate et le sel.",
      "Ajoutez les noisettes et les pépites de chocolat.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 11-12 minutes.",
      "Laissez refroidir avant de déguster."
    ]
  },
  {
    title: "Cookies Amandes & Cerises",
    emoji: "🍪",
    description: "Des cookies raffinés aux amandes effilées et cerises séchées acidulées.",
    prepTime: "18 min",
    cookTime: "13 min",
    servings: "20 cookies",
    ingredients: [
      "170g de beurre ramolli",
      "180g de sucre blanc",
      "1 œuf",
      "1 cuillère à café d'extrait d'amande",
      "250g de farine",
      "1/2 cuillère à café de bicarbonate de soude",
      "1/4 cuillère à café de sel",
      "100g d'amandes effilées",
      "120g de cerises séchées coupées",
      "80g de chocolat blanc en morceaux"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Battez le beurre avec le sucre.",
      "Ajoutez l'œuf et l'extrait d'amande.",
      "Mélangez la farine, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les amandes, cerises et chocolat blanc.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 12-13 minutes.",
      "Laissez refroidir avant de servir."
    ]
  },
  {
    title: "Cookies M&M's Colorés",
    emoji: "🍪",
    description: "Des cookies festifs et colorés garnis de M&M's croquants.",
    prepTime: "12 min",
    cookTime: "11 min",
    servings: "24 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "150g de sucre blanc",
      "120g de sucre roux",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "280g de farine",
      "1 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "250g de M&M's"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Battez le beurre avec les sucres.",
      "Ajoutez les œufs et la vanille.",
      "Mélangez la farine, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les M&M's et mélangez délicatement.",
      "Formez des boules et ajoutez quelques M&M's sur le dessus.",
      "Enfournez 10-11 minutes.",
      "Laissez refroidir avant de déguster."
    ]
  },
  {
    title: "Cookies Oreo Cheesecake",
    emoji: "🍪",
    description: "Des cookies avec des morceaux d'Oreo et un cœur de cheesecake fondant.",
    prepTime: "25 min",
    cookTime: "14 min",
    servings: "18 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "150g de sucre blanc",
      "100g de sucre roux",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "260g de farine",
      "1 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "12 Oreos concassés",
      "150g de cream cheese pour le cœur"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Battez le beurre avec les sucres.",
      "Ajoutez les œufs et la vanille.",
      "Incorporez la farine, le bicarbonate et le sel.",
      "Ajoutez les Oreos concassés.",
      "Formez des boules et insérez une petite boule de cream cheese au centre.",
      "Refermez la pâte autour du cream cheese.",
      "Enfournez 13-14 minutes.",
      "Laissez refroidir avant de servir."
    ]
  },
  {
    title: "Cookies Noix de Coco",
    emoji: "🍪",
    description: "Des cookies moelleux à la noix de coco râpée avec du chocolat blanc.",
    prepTime: "15 min",
    cookTime: "12 min",
    servings: "20 cookies",
    ingredients: [
      "170g de beurre ramolli",
      "180g de sucre blanc",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "220g de farine",
      "120g de noix de coco râpée",
      "1 cuillère à café de levure chimique",
      "1/4 cuillère à café de sel",
      "150g de pépites de chocolat blanc"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Battez le beurre avec le sucre.",
      "Ajoutez les œufs et la vanille.",
      "Mélangez la farine, la noix de coco, la levure et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les pépites de chocolat blanc.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 11-12 minutes.",
      "Laissez refroidir avant de déguster."
    ]
  },
  {
    title: "Cookies au Gingembre",
    emoji: "🍪",
    description: "Des cookies épicés au gingembre frais et confit, parfaits pour l'hiver.",
    prepTime: "20 min",
    cookTime: "11 min",
    servings: "22 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "200g de sucre roux",
      "1 œuf",
      "60ml de mélasse",
      "260g de farine",
      "2 cuillères à café de gingembre moulu",
      "1 cuillère à café de cannelle",
      "1 cuillère à café de bicarbonate de soude",
      "1/4 cuillère à café de sel",
      "50g de gingembre confit haché"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Battez le beurre avec le sucre roux.",
      "Ajoutez l'œuf et la mélasse.",
      "Mélangez la farine, le gingembre moulu, la cannelle, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez le gingembre confit.",
      "Formez des boules et roulez dans du sucre cristallisé.",
      "Enfournez 10-11 minutes.",
      "Laissez refroidir avant de servir."
    ]
  },
  {
    title: "Cookies Pistache Chocolat Blanc",
    emoji: "🍪",
    description: "Des cookies raffinés à la pistache avec du chocolat blanc onctueux.",
    prepTime: "18 min",
    cookTime: "12 min",
    servings: "20 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "150g de sucre blanc",
      "2 œufs",
      "50g de pâte de pistache",
      "250g de farine",
      "1/2 cuillère à café de bicarbonate de soude",
      "1/4 cuillère à café de sel",
      "100g de pistaches concassées",
      "150g de pépites de chocolat blanc"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Battez le beurre avec le sucre.",
      "Ajoutez les œufs et la pâte de pistache.",
      "Mélangez la farine, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les pistaches concassées et le chocolat blanc.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 11-12 minutes.",
      "Laissez refroidir avant de déguster."
    ]
  },
  {
    title: "Cookies Brownie Fondants",
    emoji: "🍪",
    description: "Des cookies ultra fondants avec la texture d'un brownie et des chunks de chocolat.",
    prepTime: "15 min",
    cookTime: "9 min",
    servings: "16 cookies",
    ingredients: [
      "200g de chocolat noir 70%",
      "100g de beurre",
      "150g de sucre roux",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "80g de farine",
      "30g de cacao en poudre",
      "1/2 cuillère à café de levure chimique",
      "1/4 cuillère à café de sel",
      "100g de chunks de chocolat"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Faites fondre le chocolat avec le beurre au bain-marie.",
      "Ajoutez le sucre roux et mélangez.",
      "Incorporez les œufs un par un, puis la vanille.",
      "Ajoutez la farine, le cacao, la levure et le sel.",
      "Incorporez les chunks de chocolat.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 8-9 minutes (le centre doit rester fondant).",
      "Laissez refroidir 10 minutes avant de servir."
    ]
  },
  {
    title: "Cookies Pralines Roses",
    emoji: "🍪",
    description: "Des cookies lyonnais croquants aux pralines roses pour une touche française.",
    prepTime: "15 min",
    cookTime: "13 min",
    servings: "20 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "150g de sucre blanc",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "260g de farine",
      "1 cuillère à café de levure chimique",
      "1/4 cuillère à café de sel",
      "150g de pralines roses concassées"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Battez le beurre avec le sucre.",
      "Ajoutez l'œuf et la vanille.",
      "Mélangez la farine, la levure et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les pralines roses concassées.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 12-13 minutes.",
      "Laissez refroidir avant de déguster."
    ]
  },
  {
    title: "Cookies Spéculoos",
    emoji: "🍪",
    description: "Des cookies aux épices de Noël avec de la pâte à spéculoos fondante.",
    prepTime: "18 min",
    cookTime: "11 min",
    servings: "18 cookies",
    ingredients: [
      "170g de beurre ramolli",
      "150g de sucre roux",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "240g de farine",
      "1 cuillère à café de cannelle",
      "1/2 cuillère à café de bicarbonate de soude",
      "1/4 cuillère à café de sel",
      "200g de pâte à spéculoos pour fourrer"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Battez le beurre avec le sucre roux.",
      "Ajoutez l'œuf et la vanille.",
      "Mélangez la farine, la cannelle, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Formez des boules et aplatissez-les.",
      "Ajoutez une cuillère de pâte à spéculoos au centre et refermez.",
      "Enfournez 10-11 minutes.",
      "Laissez refroidir avant de servir."
    ]
  },
  {
    title: "Cookies Matcha Chocolat Blanc",
    emoji: "🍪",
    description: "Des cookies au thé vert matcha japonais et chocolat blanc onctueux.",
    prepTime: "15 min",
    cookTime: "11 min",
    servings: "20 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "170g de sucre blanc",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "240g de farine",
      "2 cuillères à soupe de poudre de matcha",
      "1/2 cuillère à café de bicarbonate de soude",
      "1/4 cuillère à café de sel",
      "180g de pépites de chocolat blanc"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Battez le beurre avec le sucre.",
      "Ajoutez l'œuf et la vanille.",
      "Tamisez la farine avec le matcha, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les pépites de chocolat blanc.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 10-11 minutes.",
      "Laissez refroidir avant de déguster."
    ]
  },
  {
    title: "Cookies Fruits Rouges",
    emoji: "🍪",
    description: "Des cookies fruités avec un mélange de framboises et myrtilles séchées.",
    prepTime: "15 min",
    cookTime: "12 min",
    servings: "20 cookies",
    ingredients: [
      "170g de beurre ramolli",
      "180g de sucre blanc",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "250g de farine",
      "1/2 cuillère à café de bicarbonate de soude",
      "1/4 cuillère à café de sel",
      "80g de framboises séchées",
      "80g de myrtilles séchées",
      "100g de chocolat blanc en morceaux"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Battez le beurre avec le sucre.",
      "Ajoutez l'œuf et la vanille.",
      "Mélangez la farine, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les fruits rouges séchés et le chocolat blanc.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 11-12 minutes.",
      "Laissez refroidir avant de servir."
    ]
  },
  {
    title: "Cookies Nutella Cœur Fondant",
    emoji: "🍪",
    description: "Des cookies avec un cœur de Nutella ultra fondant et gourmand.",
    prepTime: "20 min",
    cookTime: "10 min",
    servings: "16 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "150g de sucre roux",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "240g de farine",
      "30g de cacao en poudre",
      "1 cuillère à café de bicarbonate de soude",
      "1/4 cuillère à café de sel",
      "200g de Nutella pour le cœur"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Battez le beurre avec le sucre roux.",
      "Ajoutez l'œuf et la vanille.",
      "Mélangez la farine, le cacao, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Formez des boules de pâte et aplatissez-les.",
      "Ajoutez une cuillère de Nutella au centre et refermez la pâte.",
      "Enfournez 9-10 minutes.",
      "Laissez refroidir 5 minutes avant de déguster."
    ]
  },
  {
    title: "Cookies Caramel Pretzel Salé",
    emoji: "🍪",
    description: "Des cookies salés-sucrés avec caramel et bretzels croquants.",
    prepTime: "18 min",
    cookTime: "12 min",
    servings: "20 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "160g de sucre roux",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "260g de farine",
      "1 cuillère à café de bicarbonate de soude",
      "1 cuillère à café de fleur de sel",
      "150g de caramels mous coupés",
      "100g de bretzels concassés",
      "100g de pépites de chocolat au lait"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Battez le beurre avec le sucre roux.",
      "Ajoutez les œufs et la vanille.",
      "Mélangez la farine, le bicarbonate et la fleur de sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les caramels, bretzels et pépites de chocolat.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 11-12 minutes.",
      "Laissez refroidir avant de déguster."
    ]
  },
  {
    title: "Cookies Cookies & Cream",
    emoji: "🍪",
    description: "Des cookies vanille parsemés de morceaux d'Oreo croquants.",
    prepTime: "15 min",
    cookTime: "11 min",
    servings: "22 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "180g de sucre blanc",
      "2 œufs",
      "2 cuillères à café d'extrait de vanille",
      "280g de farine",
      "1 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "14 Oreos grossièrement concassés",
      "100g de pépites de chocolat blanc"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Battez le beurre avec le sucre.",
      "Ajoutez les œufs et la vanille.",
      "Mélangez la farine, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les Oreos concassés et les pépites de chocolat blanc.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 10-11 minutes.",
      "Laissez refroidir avant de servir."
    ]
  },
  {
    title: "Cookies Cacahuètes Caramel",
    emoji: "🍪",
    description: "Des cookies gourmands aux cacahuètes grillées et caramel fondant.",
    prepTime: "18 min",
    cookTime: "12 min",
    servings: "20 cookies",
    ingredients: [
      "150g de beurre de cacahuète",
      "100g de beurre ramolli",
      "170g de sucre roux",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "220g de farine",
      "1 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "120g de cacahuètes grillées salées",
      "150g de caramels coupés en morceaux"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Battez les deux beurres avec le sucre roux.",
      "Ajoutez l'œuf et la vanille.",
      "Mélangez la farine, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les cacahuètes et les morceaux de caramel.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 11-12 minutes.",
      "Laissez refroidir avant de déguster."
    ]
  },
  {
    title: "Cookies Churros Cannelle",
    emoji: "🍪",
    description: "Des cookies inspirés des churros espagnols, enrobés de cannelle et sucre.",
    prepTime: "15 min",
    cookTime: "11 min",
    servings: "20 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "180g de sucre blanc",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "250g de farine",
      "1 cuillère à café de bicarbonate de soude",
      "2 cuillères à café de cannelle",
      "1/4 cuillère à café de sel",
      "80g de sucre + 1 cuillère à soupe de cannelle pour l'enrobage"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Battez le beurre avec le sucre.",
      "Ajoutez l'œuf et la vanille.",
      "Mélangez la farine, le bicarbonate, la cannelle et le sel.",
      "Incorporez les ingrédients secs.",
      "Dans un bol, mélangez le sucre et la cannelle d'enrobage.",
      "Formez des boules et roulez-les dans le mélange cannelle-sucre.",
      "Enfournez 10-11 minutes.",
      "Laissez refroidir avant de servir."
    ]
  },
  {
    title: "Cookies Red Velvet",
    emoji: "🍪",
    description: "Des cookies moelleux red velvet avec des pépites de chocolat blanc.",
    prepTime: "18 min",
    cookTime: "11 min",
    servings: "20 cookies",
    ingredients: [
      "170g de beurre ramolli",
      "200g de sucre blanc",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "240g de farine",
      "30g de cacao en poudre",
      "1 cuillère à café de bicarbonate de soude",
      "1/4 cuillère à café de sel",
      "1 cuillère à soupe de colorant alimentaire rouge",
      "180g de pépites de chocolat blanc"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Battez le beurre avec le sucre.",
      "Ajoutez l'œuf, la vanille et le colorant rouge.",
      "Mélangez la farine, le cacao, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les pépites de chocolat blanc.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 10-11 minutes.",
      "Laissez refroidir avant de déguster."
    ]
  },
  {
    title: "Cookies Pumpkin Spice",
    emoji: "🍪",
    description: "Des cookies automnal à la purée de potiron et mélange d'épices douces.",
    prepTime: "20 min",
    cookTime: "13 min",
    servings: "22 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "180g de sucre roux",
      "150g de purée de potiron",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "280g de farine",
      "1 cuillère à café de bicarbonate de soude",
      "2 cuillères à café de cannelle",
      "1 cuillère à café de gingembre moulu",
      "1/2 cuillère à café de muscade",
      "1/4 cuillère à café de sel",
      "150g de pépites de chocolat blanc"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Battez le beurre avec le sucre roux.",
      "Ajoutez la purée de potiron, l'œuf et la vanille.",
      "Mélangez la farine, le bicarbonate, les épices et le sel.",
      "Incorporez les ingrédients secs.",
      "Ajoutez les pépites de chocolat blanc.",
      "Formez des boules et disposez sur une plaque.",
      "Enfournez 12-13 minutes.",
      "Laissez refroidir avant de servir."
    ]
  }
];

module.exports = recipes;