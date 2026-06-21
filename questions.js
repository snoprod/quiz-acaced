const QUESTIONS = [
  {
    "id": "chien_1",
    "theme": "chiens",
    "n": 1,
    "q": "Qu'est-ce qu'un vice rédhibitoire ?",
    "c": {
      "a": "C'est un terme qui est seulement pertinent dans le contexte d'une vente d'animaux de pure race.",
      "b": "Il désigne un vice caché et antérieur à l'action de vente.",
      "c": "Il est susceptible d'annuler un contrat de vente seulement s'il est diagnostiqué dans des délais bien précis.",
      "d": "Il existe une liste de vices rédhibitoires pour toutes les espèces de carnivores domestiques.",
      "e": "Les vices rédhibitoires sont toujours des maladies génétiques."
    }
  },
  {
    "id": "chien_2",
    "theme": "chiens",
    "n": 2,
    "q": "Vers quel âge un chien de grande race atteint-il généralement la maturité sexuelle ?",
    "c": {
      "a": "Entre 5 et 6 mois.",
      "b": "Entre 12 et 15 mois.",
      "c": "Entre 6 et 8 mois."
    }
  },
  {
    "id": "chien_3",
    "theme": "chiens",
    "n": 3,
    "q": "Quand un chien est-il considéré comme errant ou en divagation ?",
    "c": {
      "a": "S'il se trouve à plus de 200 mètres de son maître.",
      "b": "S'il se trouve à plus de 200 mètres de son lieu d'habitation.",
      "c": "S'il se trouve à plus de 100 mètres de son maître.",
      "d": "S'il est livré à son seul instinct, sauf lors d'une action de chasse.",
      "e": "S'il se trouve à plus de 50 mètres de son lieu d'habitation."
    }
  },
  {
    "id": "chien_4",
    "theme": "chiens",
    "n": 4,
    "q": "Quels sont les rôles de la Société Centrale Canine ?",
    "c": {
      "a": "Répertorier les origines des races canines.",
      "b": "Organiser des expositions internationales.",
      "c": "Tenir le Livre des Origines Français.",
      "d": "Améliorer et reconstituer les rôles du chien dans la société.",
      "e": "Définir les standards des races étrangères."
    }
  },
  {
    "id": "chien_5",
    "theme": "chiens",
    "n": 5,
    "q": "Quelles dents apparaissent en dents définitives uniquement et non en déciduales chez le chien ?",
    "c": {
      "a": "Les incisives.",
      "b": "Les canines.",
      "c": "Les prémolaires.",
      "d": "Les molaires."
    }
  },
  {
    "id": "chien_6",
    "theme": "chiens",
    "n": 6,
    "q": "Quelles sont les affirmations correctes concernant le registre du suivi sanitaire et de santé ?",
    "c": {
      "a": "Il n'est pas obligatoire pour les élevages.",
      "b": "Il contient des informations concernant l'état de santé des animaux.",
      "c": "Il détaille les procédures d'hygiène des locaux.",
      "d": "Il est révisé tous les ans durant la visite sanitaire.",
      "e": "Il contient les détails des interventions vétérinaires réalisées sur les animaux."
    }
  },
  {
    "id": "chien_7",
    "theme": "chiens",
    "n": 7,
    "q": "Quels chiens sont de catégorie 1 ?",
    "c": {
      "a": "Les chiens de race American Staffordshire Terrier.",
      "b": "Les chiens d'apparence de race Rottweiler.",
      "c": "Les chiens d'apparence de race Mastiff.",
      "d": "Les Boerbulls.",
      "e": "Les chiens de race Tosa."
    }
  },
  {
    "id": "chien_8",
    "theme": "chiens",
    "n": 8,
    "q": "Quelles maladies sont des vices rédhibitoires du chien ?",
    "c": {
      "a": "Le FIV.",
      "b": "L'atrophie rétinienne.",
      "c": "La rage.",
      "d": "La parvovirose.",
      "e": "L'herpèsvirose."
    }
  },
  {
    "id": "chien_9",
    "theme": "chiens",
    "n": 9,
    "q": "Quel terme désigne le début des chaleurs lors du cycle sexuel de la chienne ?",
    "c": {
      "a": "Le pro-oestrus.",
      "b": "L'oestrus.",
      "c": "L'anoestrus."
    }
  },
  {
    "id": "chien_10",
    "theme": "chiens",
    "n": 10,
    "q": "Selon la classification de Jean-Pierre Mégnin, quel est le morphotype d'un chien possédant un ventre très relevé, une silhouette très fine et une tête très allongée ?",
    "c": {
      "a": "Molossoïde.",
      "b": "Braccoïde.",
      "c": "Lupoïde.",
      "d": "Graïoïde."
    }
  },
  {
    "id": "chien_11",
    "theme": "chiens",
    "n": 11,
    "q": "Comment appelle-t-on les besoins nutritionnels journaliers liés aux facteurs race, stade physiologique, état de santé, tempérament et milieu ?",
    "c": {
      "a": "Le Besoin Énergétique d'Entretien.",
      "b": "Le Besoin Énergétique de Base.",
      "c": "Le Besoin Énergétique de Production."
    }
  },
  {
    "id": "chien_12",
    "theme": "chiens",
    "n": 12,
    "q": "Quelles sont les affirmations correctes concernant l'espérance de vie du chien ?",
    "c": {
      "a": "Les chiens de petite taille vivent souvent plus longtemps que les chiens de grande taille.",
      "b": "Les chiens de grande taille vivent souvent plus longtemps que les chiens de petite taille.",
      "c": "En moyenne, l'espérance de vie d'un chien est de 22 ans.",
      "d": "En moyenne, l'espérance de vie d'un chien est de 18 ans.",
      "e": "En moyenne, l'espérance de vie d'un chien est de 12 ans."
    }
  },
  {
    "id": "chien_13",
    "theme": "chiens",
    "n": 13,
    "q": "Quelles sont les affirmations correctes concernant la reproduction chez le chien ?",
    "c": {
      "a": "Le chien est une espèce à ovulation spontanée.",
      "b": "Le chien est une espèce à ovulation provoquée.",
      "c": "L'ovulation est systématique à chaque cycle sexuel.",
      "d": "L'ovulation est déclenchée par la stimulation du vagin."
    }
  },
  {
    "id": "chien_14",
    "theme": "chiens",
    "n": 14,
    "q": "Quels troubles comportementaux proviennent souvent d'un développement inapproprié chez le chien ?",
    "c": {
      "a": "Une incapacité à se retrouver seul ou séparé de son maître.",
      "b": "Des phobies face à des évènements du quotidien.",
      "c": "Une anorexie soudaine.",
      "d": "Une hyperactivité constante.",
      "e": "Une malpropreté soudaine."
    }
  },
  {
    "id": "chien_15",
    "theme": "chiens",
    "n": 15,
    "q": "Quelles sont les affirmations correctes concernant la classification des races canines ?",
    "c": {
      "a": "Elle est créée et entretenue par la SCC.",
      "b": "Les races canines sont divisées en 12 groupes.",
      "c": "Les races sont classées selon leur origine.",
      "d": "Chaque groupe est souvent subdivisés en plusieurs sections.",
      "e": "Les races sont classées selon leur fonction et certains aspects morphologiques."
    }
  },
  {
    "id": "chien_16",
    "theme": "chiens",
    "n": 16,
    "q": "Quelles affirmations reflètent le statut juridique de l'animal ?",
    "c": {
      "a": "Les animaux ne sont pas assimilés à des choses.",
      "b": "Les animaux sont des êtres doués d'intelligence.",
      "c": "La dignité des animaux est reconnue et protégée par la loi.",
      "d": "Les animaux sont soumis au régime des biens.",
      "e": "Les animaux sont des êtres doués de sensibilité."
    }
  },
  {
    "id": "chien_17",
    "theme": "chiens",
    "n": 17,
    "q": "Par quelles méthodes peut-on déterminer le jour de l'ovulation chez la chienne ?",
    "c": {
      "a": "En effectuant des tests d'urine.",
      "b": "En observant le comportement de la chienne.",
      "c": "En effectuant des prises de sang.",
      "d": "En observant sa prise de nourriture et en surveillant sa température.",
      "e": "En établissant un calendrier des chaleurs."
    }
  },
  {
    "id": "chien_18",
    "theme": "chiens",
    "n": 18,
    "q": "Quel comportement un chien à la tenue, la tête et les oreilles droites et la queue basse affiche-t-il ?",
    "c": {
      "a": "Un comportement d'affection.",
      "b": "Un comportement d'appel au jeu.",
      "c": "Un comportement d'agressivité offensive.",
      "d": "Un comportement de décontraction.",
      "e": "Un comportement de soumission."
    }
  },
  {
    "id": "chien_19",
    "theme": "chiens",
    "n": 19,
    "q": "Par quel titre d'inscription au LOF un chien dont aucun des parents ne possède un pédigrée est-il concerné ?",
    "c": {
      "a": "Inscription à titre propre.",
      "b": "Inscription au titre des origines.",
      "c": "Inscription à titre initial.",
      "d": "Inscription au livre d'attente.",
      "e": "Inscription au titre de la descendance."
    }
  },
  {
    "id": "chien_20",
    "theme": "chiens",
    "n": 20,
    "q": "A partir de quel effectif une structure hébergeant des chiens devient-elle une ICPE ?",
    "c": {
      "a": "10 chiens de plus de 7 mois.",
      "b": "9 chiens de plus de 4 mois.",
      "c": "10 chiens de plus de 4 mois."
    }
  },
  {
    "id": "chien_21",
    "theme": "chiens",
    "n": 21,
    "q": "Quelles sont les affirmations correctes concernant le règlement sanitaire ?",
    "c": {
      "a": "Il n'est pas obligatoire pour les élevages de moins de 10 chiens ou chats.",
      "b": "Il est conçu avec le soutien du vétérinaire sanitaire.",
      "c": "Il détaille les règles d'hygiène pour le personnel et le public."
    }
  },
  {
    "id": "chien_22",
    "theme": "chiens",
    "n": 22,
    "q": "À partir de quel âge un chien doit-il être identifié ?",
    "c": {
      "a": "Dès 8 semaines.",
      "b": "Dès 3 mois.",
      "c": "Dès 4 mois.",
      "d": "Dès 6 mois.",
      "e": "Dès 1 an."
    }
  },
  {
    "id": "chien_23",
    "theme": "chiens",
    "n": 23,
    "q": "Quelles lois sont les mêmes pour les chiens catégorisés, quelle que soit la catégorie ?",
    "c": {
      "a": "Les chiens catégorisés ne peuvent pas être importés en France.",
      "b": "Les chiens catégorisés ne peuvent pas être détenus par des personnes possédant un casier judiciaire.",
      "c": "Les chiens catégorisés doivent toujours être tenus en laisse et porter une muselière sur la voie publique.",
      "d": "Les chiens catégorisés doivent être stérilisés.",
      "e": "Les chiens catégorisés doivent être vaccinés contre la rage."
    }
  },
  {
    "id": "chien_24",
    "theme": "chiens",
    "n": 24,
    "q": "Quels facteurs doivent être pris en compte pour calculer la ration journalière d'un chien ?",
    "c": {
      "a": "Sa race.",
      "b": "Le volume d'eau consommé quotidiennement.",
      "c": "Son état physiologique.",
      "d": "Son activité.",
      "e": "Ses préférences alimentaires."
    }
  },
  {
    "id": "chien_25",
    "theme": "chiens",
    "n": 25,
    "q": "Quelles sont les affirmations correctes concernant la reproduction du chien ?",
    "c": {
      "a": "Chaque chienne peut mettre bas à 2 portées par an maximum.",
      "b": "La reproduction entre une mère et son fils est interdite en France.",
      "c": "A partir d'un certain âge, une chienne n'a plus le droit de se reproduire, sauf avis vétérinaire contraire.",
      "d": "Il est interdit de faire reproduire une chienne à son premier cycle sexuel.",
      "e": "Il est possible de faire reproduire une chienne à son premier cycle sexuel avec un avis vétérinaire favorable."
    }
  },
  {
    "id": "chien_26",
    "theme": "chiens",
    "n": 26,
    "q": "Quelles sont les affirmations correctes concernant le transport ?",
    "c": {
      "a": "Les petits de moins de 8 semaines sans leur mère ne sont pas aptes au transport.",
      "b": "Un chat et un chien issus du même foyer peuvent être transportés dans le même conteneur.",
      "c": "Un animal convalescent peut être transporté si le voyage ne risque pas d'engendrer des souffrances supplémentaires et avec l'accord d'un vétérinaire.",
      "d": "Dans sa caisse de transport, un animal doit pouvoir se tenir debout sans que sa tête ne touche le plafond.",
      "e": "Des nouveaux nés de 48 h peuvent être transportés seulement s'ils sont accompagnés de leur mère."
    }
  },
  {
    "id": "chien_27",
    "theme": "chiens",
    "n": 27,
    "q": "Quelles sont les affirmations correctes concernant la dentition du chien ?",
    "c": {
      "a": "Les incisives et les canines déciduales apparaissent pendant le premier mois.",
      "b": "Toutes les prémolaires déciduales apparaissent vers 4 mois.",
      "c": "Les molaires déciduales apparaissent vers 2 mois.",
      "d": "Les molaires définitives apparaissent entre 4 et 7 mois.",
      "e": "Les prémolaires définitives apparaissent souvent avant les canines définitives."
    }
  },
  {
    "id": "chien_28",
    "theme": "chiens",
    "n": 28,
    "q": "Quelle est la température corporelle normale chez le chien ?",
    "c": {
      "a": "Entre 35°C et 37°C.",
      "b": "Entre 38°C et 39°C.",
      "c": "Entre 39°C et 40°C."
    }
  },
  {
    "id": "chien_29",
    "theme": "chiens",
    "n": 29,
    "q": "Qu'est-ce qu'une interruption de gestation par ovario-hystérectomie ?",
    "c": {
      "a": "C'est une méthode d'interruption de gestation chirurgicale.",
      "b": "Après cette intervention, la chienne ne pourra plus jamais avoir de petits.",
      "c": "C'est une ablation des ovaires.",
      "d": "C'est une ablation des ovaires et de l'utérus.",
      "e": "Elle peut être effectuée de manière chimique."
    }
  },
  {
    "id": "chien_30",
    "theme": "chiens",
    "n": 30,
    "q": "De quel groupe les chiens de berger et de bouvier font-ils partie ?",
    "c": {
      "a": "Du groupe 1.",
      "b": "Du groupe 2.",
      "c": "Du groupe 3."
    }
  },
  {
    "id": "chien_31",
    "theme": "chiens",
    "n": 31,
    "q": "Quelles maladies sont des zoonoses ?",
    "c": {
      "a": "La teigne.",
      "b": "La parvovirose.",
      "c": "La toxoplasmose.",
      "d": "La rage.",
      "e": "Le typhus."
    }
  },
  {
    "id": "chien_32",
    "theme": "chiens",
    "n": 32,
    "q": "Quelles maladies sont des vices rédhibitoires du chien ?",
    "c": {
      "a": "La maladie d'Aujeski.",
      "b": "La maladie de Carré.",
      "c": "L'hépatite de Rubarth.",
      "d": "La toux du chenil.",
      "e": "La panleucopénie."
    }
  },
  {
    "id": "chien_33",
    "theme": "chiens",
    "n": 33,
    "q": "Quelles sont les affirmations correctes concernant les normes de logement pour le chien ?",
    "c": {
      "a": "Les chiens doivent toujours avoir accès à une aire extérieure.",
      "b": "Les chiens doivent toujours avoir accès à une niche située dans l'aire extérieure.",
      "c": "Les chiens doivent être logés en groupes sociaux et harmonieux.",
      "d": "Les chiens doivent bénéficier d'interactions sociales positives avec des humains au moins 5 fois par semaine.",
      "e": "Les chiens doivent toujours disposer de jouets et de couchage appropriés dans leur boxe."
    }
  },
  {
    "id": "chien_34",
    "theme": "chiens",
    "n": 34,
    "q": "Ou une ICPE peut-elle être implantée ?",
    "c": {
      "a": "A au mois 50 m de puits.",
      "b": "A au moins 100 m d'habitations.",
      "c": "A au moins 200 m de terrains de camping aérés.",
      "d": "A au moins 200 m de lieux de baignade.",
      "e": "A au moins 500 m en amont de piscicultures."
    }
  },
  {
    "id": "chien_35",
    "theme": "chiens",
    "n": 35,
    "q": "Pendant quelle période de développement un chien est-il le plus apte à apprendre et à retenir un nouveau comportement ?",
    "c": {
      "a": "Pendant la période néonatale.",
      "b": "Pendant la période de transition.",
      "c": "Pendant la période de socialisation.",
      "d": "Pendant la puberté.",
      "e": "À l'âge adulte."
    }
  },
  {
    "id": "chien_36",
    "theme": "chiens",
    "n": 36,
    "q": "Quelles activités sont concernées par les règles sanitaires et de protection animale ?",
    "c": {
      "a": "Les élevages, sauf ceux de moins de chiens ou chats de moins de 4 mois.",
      "b": "Les pensions.",
      "c": "Les pensions, seulement si elles hébergent plus de 10 chiens de + de 4 mois."
    }
  },
  {
    "id": "chien_37",
    "theme": "chiens",
    "n": 37,
    "q": "Quelles sont les règles que doit suivre un propriétaire de chien catégorisé ?",
    "c": {
      "a": "Il doit toujours obtenir une attestation d'aptitude auprès d'un éducateur canin.",
      "b": "Il doit toujours obtenir un permis de détention.",
      "c": "Il doit toujours souscrire à une assurance responsabilité civile.",
      "d": "Il doit toujours faire entraîner son chien par un éducateur canin.",
      "e": "Il doit toujours emmener son chien pour une évaluation comportementale annuelle auprès d'un vétérinaire agréé."
    }
  },
  {
    "id": "chien_38",
    "theme": "chiens",
    "n": 38,
    "q": "Quelles sont les méthodes à préférer pour l'éducation du chien ?",
    "c": {
      "a": "L'apprentissage par renforcement négatif pour les comportements indésirables.",
      "b": "Commencer l'apprentissage dès la puberté.",
      "c": "Toujours récompenser les bonnes actions.",
      "d": "Faire preuve de cohérence dans ses réactions et ses demandes.",
      "e": "L'apprentissage par répétition."
    }
  },
  {
    "id": "chien_39",
    "theme": "chiens",
    "n": 39,
    "q": "Quelles sont les affirmations correctes concernant la leptospirose ?",
    "c": {
      "a": "Elle se transmet dans l'urine de rongeurs.",
      "b": "C'est une maladie virale.",
      "c": "C'est une zoonose."
    }
  },
  {
    "id": "chien_40",
    "theme": "chiens",
    "n": 40,
    "q": "Dans quel cas une courette en plein air n'est-elle pas requise ?",
    "c": {
      "a": "Pour les élevages.",
      "b": "Pour les activités de garde si la garde ne dure pas plus de 24 heures.",
      "c": "Pour toutes les installations construites et déclarées en 2025."
    }
  },
  {
    "id": "chien_41",
    "theme": "chiens",
    "n": 41,
    "q": "Dans quel cas un certificat d'agrément du véhicule de transport est-il nécessaire ?",
    "c": {
      "a": "Pour tous les transports commerciaux.",
      "b": "Pour tous les transports commerciaux de courte durée.",
      "c": "Pour tous les transports de longue durée.",
      "d": "Pour les transports commerciaux de plus de 12 heures en France.",
      "e": "Pour tous les transports commerciaux de plus de 65 km."
    }
  },
  {
    "id": "chien_42",
    "theme": "chiens",
    "n": 42,
    "q": "Quels sont des exemples de groupes de races canines ?",
    "c": {
      "a": "Chiens d'endurance et de sport.",
      "b": "Teckels.",
      "c": "Chiens de type Spitz et de type primitif.",
      "d": "Braques.",
      "e": "Chiens de garde - Chiens de protection - Chiens de défense."
    }
  },
  {
    "id": "chien_43",
    "theme": "chiens",
    "n": 43,
    "q": "Quelles sont les dimensions minimales obligatoires pour un enclos ou boxe pour chiens ?",
    "c": {
      "a": "5m² ou 10m² pour les chiens de plus de 70 cm au garrot.",
      "b": "2m² ou 5m² pour les chiens de plus de 70 cm au garrot.",
      "c": "10m² pour tous les chiens.",
      "d": "1m de hauteur au plafond.",
      "e": "2m de hauteur au plafond."
    }
  },
  {
    "id": "chien_44",
    "theme": "chiens",
    "n": 44,
    "q": "Quelle période de développement se déroule de la naissance aux deux premières semaines de vie du chiot ?",
    "c": {
      "a": "La période prénatale.",
      "b": "La période néonatale.",
      "c": "La période de socialisation."
    }
  },
  {
    "id": "chien_45",
    "theme": "chiens",
    "n": 45,
    "q": "Que signifie un état d'engraissement de niveau 2 chez le chien ?",
    "c": {
      "a": "Le chien est à son poids idéal.",
      "b": "Le chien ne possède aucune masse graisseuse et peu ou pas de masse musculaire.",
      "c": "Le poids du chien est 15 à 20% inférieur à son poids idéal.",
      "d": "Le poids du chien est 20 à 40% supérieur à son poids idéal.",
      "e": "Les os sont difficilement palpables."
    }
  },
  {
    "id": "chien_46",
    "theme": "chiens",
    "n": 46,
    "q": "Quels sont les avantages et les inconvénients des croquettes industrielles ?",
    "c": {
      "a": "L'origine et la qualité des ingrédients est connue, car elles sont expliquées sur le paquet.",
      "b": "Elles demandent souvent une consommation d'eau plus importante.",
      "c": "Elles sont faciles à stocker car elles peuvent être gardées dans leur emballage d'origine.",
      "d": "Elles n'offrent pas souvent une nutrition complète et équilibrée."
    }
  },
  {
    "id": "chien_47",
    "theme": "chiens",
    "n": 47,
    "q": "Quand l'évaluation comportementale d'un chien d'un niveau de dangerosité 2 doit-elle être renouvelée ?",
    "c": {
      "a": "Tous les ans.",
      "b": "Tous les 2 ans.",
      "c": "Tous les 3 ans.",
      "d": "Tous les 4 ans.",
      "e": "Elle ne doit pas être renouvelée."
    }
  },
  {
    "id": "chien_48",
    "theme": "chiens",
    "n": 48,
    "q": "À quelle période de son cycle sexuel une chienne ovule-t-elle ?",
    "c": {
      "a": "Entre le 3ème et le 7ème jour de dioestrus.",
      "b": "À partir du 4ème jour d'oestrus et seulement s'il y a copulation.",
      "c": "L'ovulation est spontanée pendant la première semaine de pro-oestrus.",
      "d": "Entre le 5ème et le 11ème jour d'oestrus.",
      "e": "Une chienne ovule pendant toute la durée du meteostrus."
    }
  },
  {
    "id": "chien_49",
    "theme": "chiens",
    "n": 49,
    "q": "Quel vaccin est toujours obligatoire chez le chien ?",
    "c": {
      "a": "Le vaccin contre la rage.",
      "b": "Les vaccins contre tous les vices rédhibitoires viraux dans le cas d'une vente.",
      "c": "Les vaccins contre les dangers sanitaires de première et de deuxième catégories.",
      "d": "Les vaccins contre les dangers sanitaires de première catégorie.",
      "e": "Il n'y a aucun vaccin qui est toujours obligatoire."
    }
  },
  {
    "id": "chien_50",
    "theme": "chiens",
    "n": 50,
    "q": "Quelles sont les affirmations correctes concernant la teigne ?",
    "c": {
      "a": "Elle est causée par un parasite.",
      "b": "Elle provoque des démangeaisons intenses.",
      "c": "C'est une zoonose.",
      "d": "C'est une maladie bactérienne.",
      "e": "Elle provoque des lésions cutanées circulaires."
    }
  },
  {
    "id": "chien_51",
    "theme": "chiens",
    "n": 51,
    "q": "Quelles sont les affirmations correctes concernant la reproduction consanguine ?",
    "c": {
      "a": "Elle doit être pratiquée très consciencieusement pour éviter le développement de tares.",
      "b": "Elle est surtout pratiquée pour conserver des caractères spécifiques au sein d'une race.",
      "c": "L'Out-breeding est une méthode de reproduction par mariage consanguin.",
      "d": "Le In-breeding est une méthode de reproduction par mariage consanguin qui consiste à marier des individus étroitement apparentés.",
      "e": "La reproduction consanguine est une pratique illégale en France."
    }
  },
  {
    "id": "chien_52",
    "theme": "chiens",
    "n": 52,
    "q": "Quelles dents de lait sont les premières à apparaître chez le chien ?",
    "c": {
      "a": "Les incisives.",
      "b": "Les canines.",
      "c": "Les prémolaires.",
      "d": "Les molaires."
    }
  },
  {
    "id": "chien_53",
    "theme": "chiens",
    "n": 53,
    "q": "Quelles sont les affirmations correctes concernant la reproduction chez le chien ?",
    "c": {
      "a": "L'accouplement chez le chien est très rapide et ne dure que quelques secondes.",
      "b": "Pendant la saillie, l'éjaculation a lieu en 4 phases distinctes.",
      "c": "De la semence peut être congelée et conservée en vue d'une fécondation par insémination artificielle."
    }
  },
  {
    "id": "chien_54",
    "theme": "chiens",
    "n": 54,
    "q": "Quels comportements un chien se soumettant à un individu agressif peut-il montrer ?",
    "c": {
      "a": "Une échine basse.",
      "b": "Des dents visibles.",
      "c": "Des coussinets humides.",
      "d": "Des oreilles hautes et droites.",
      "e": "Une patte avant levée."
    }
  },
  {
    "id": "chien_55",
    "theme": "chiens",
    "n": 55,
    "q": "Quels sont des exemples d'inscription au LOF pour les chiens ?",
    "c": {
      "a": "Inscription à titre initial.",
      "b": "Inscription à titre individuel.",
      "c": "Inscription au titre de l'exportation.",
      "d": "Inscription au titre de l'ascendance.",
      "e": "Inscription au titre de la descendance."
    }
  },
  {
    "id": "chien_56",
    "theme": "chiens",
    "n": 56,
    "q": "Quel est le document utilisé pour la gestion et la traçabilité des flux d'animaux au sein d'une pension canine ?",
    "c": {
      "a": "Le passeport sanitaire et d'affluence.",
      "b": "Le carnet des flux.",
      "c": "Le registre des entrées et sorties."
    }
  },
  {
    "id": "chien_57",
    "theme": "chiens",
    "n": 57,
    "q": "Quel est le délai de suspicion pour la dysplasie coxo-fémorale ?",
    "c": {
      "a": "Il n'y en a pas, car ce n'est pas un vice rédhibitoire.",
      "b": "Il n'y en a pas, car c'est une maladie génétique avec un délai de suspicion non fixé.",
      "c": "5 jours.",
      "d": "8 jours.",
      "e": "30 jours."
    }
  },
  {
    "id": "chien_58",
    "theme": "chiens",
    "n": 58,
    "q": "Quelles sont les deux subdivisions du groupe de races canines « Chiens d'arrêt » ?",
    "c": {
      "a": "Chiens d'arrêt et de rapport.",
      "b": "Chiens d'arrêt européens.",
      "c": "Chiens d'arrêt et de recherche au sang.",
      "d": "Chiens d'arrêt continentaux.",
      "e": "Chiens d'arrêt britanniques et irlandais."
    }
  },
  {
    "id": "chien_59",
    "theme": "chiens",
    "n": 59,
    "q": "Quels sont des signes de complications pendant la mise bas chez la chienne ?",
    "c": {
      "a": "La mise bas dure plus de 20 heures.",
      "b": "L'intervalle entre deux naissances excède 2 heures.",
      "c": "Un chiot est engagé depuis 2 minutes sans expulsion.",
      "d": "La chienne effectue des efforts intenses depuis 30 minutes sans expulsion.",
      "e": "La chienne perd un liquide vulvaire hémorragique et malodorant."
    }
  },
  {
    "id": "chien_60",
    "theme": "chiens",
    "n": 60,
    "q": "Quelles sont les affirmations correctes concernant la boisson chez le chien ?",
    "c": {
      "a": "L'eau doit toujours être offerte à volonté chez le chien.",
      "b": "Il est toujours préférable d'offrir de l'eau minérale à un chien.",
      "c": "Un chien doit consommer davantage d'eau lorsqu'il se nourrit de nourriture faite maison.",
      "d": "Un chien doit consommer environ 10 ml d'eau par kilo par jour.",
      "e": "Un chien doit consommer environ 60 ml d'eau par kilo par jour."
    }
  },
  {
    "id": "chien_61",
    "theme": "chiens",
    "n": 61,
    "q": "Que risque un éleveur vendant un chiot non-LOF et non identifié ?",
    "c": {
      "a": "Rien, car l'identification d'un animal pour une cession n'est pas obligatoire.",
      "b": "Rien, car l'identification d'un animal pour une cession n'est obligatoire que pour les animaux de race.",
      "c": "Une amende de 450 €.",
      "d": "Une amende de 750 €."
    }
  },
  {
    "id": "chien_62",
    "theme": "chiens",
    "n": 62,
    "q": "Quels sont les rôles de la Fédération Cynologique Internationale ?",
    "c": {
      "a": "Définir les standards des races étrangères.",
      "b": "Organiser des expositions dans les pays membres.",
      "c": "Améliorer les races de chiens françaises.",
      "d": "Promouvoir les rôles du chien dans la société.",
      "e": "Entretenir le livre généalogique du chien."
    }
  },
  {
    "id": "chien_63",
    "theme": "chiens",
    "n": 63,
    "q": "Quels sont les attributs morphologiques d'un chien de type médioligne ?",
    "c": {
      "a": "Une silhouette trapue.",
      "b": "Un stop peu prononcé et un chanfrein très long.",
      "c": "Des proportions équilibrées.",
      "d": "Des pattes longues et très fines.",
      "e": "Des lignes de chanfrein et de front égales et parallèles."
    }
  },
  {
    "id": "chien_64",
    "theme": "chiens",
    "n": 64,
    "q": "Quelles sont les affirmations correctes concernant la température dans des locaux hébergeant des chiens ?",
    "c": {
      "a": "La température idéale pour les chiens est de 20°C environ, quel que soit leur stade physiologique.",
      "b": "La température est contrôlée et enregistrée de préférence avec un thermomètre hygromètre.",
      "c": "La température influe sur la prise de nourriture chez le chien."
    }
  },
  {
    "id": "chien_65",
    "theme": "chiens",
    "n": 65,
    "q": "A partir de quel âge un chiot peut-il être retiré de sa mère en élevage ?",
    "c": {
      "a": "4 semaines.",
      "b": "12 semaines.",
      "c": "10 semaines.",
      "d": "8 semaines.",
      "e": "6 semaines."
    }
  },
  {
    "id": "chien_66",
    "theme": "chiens",
    "n": 66,
    "q": "Quelle est la teneur en saumon d'une pâtée pour chiens avec la mention « riche en saumon » sur son emballage ?",
    "c": {
      "a": "Plus de 26% de saumon.",
      "b": "Entre 14% et 26% de saumon.",
      "c": "Moins de 4% de saumon."
    }
  },
  {
    "id": "chien_67",
    "theme": "chiens",
    "n": 67,
    "q": "Dans quels cas un chien doit-il obligatoirement être identifié ?",
    "c": {
      "a": "Lors de tout voyage, en France ou à l'international et quel que soit son âge.",
      "b": "Lors de toute cession, à titre gratuit ou onéreux.",
      "c": "Dès qu'il a atteint l'âge adulte.",
      "d": "Si c'est un chien catégorisé.",
      "e": "Dans la semaine suivant sa naissance, si c'est un chien de race."
    }
  },
  {
    "id": "chien_68",
    "theme": "chiens",
    "n": 68,
    "q": "De quel groupe les races de chiens de type Pinscher et Schnauzer font-ils partie ?",
    "c": {
      "a": "Du groupe 2.",
      "b": "Du groupe 5.",
      "c": "Du groupe 7.",
      "d": "Du groupe 9.",
      "e": "Du groupe 10."
    }
  },
  {
    "id": "chien_69",
    "theme": "chiens",
    "n": 69,
    "q": "Quelles sont les affirmations correctes concernant la période de développement dite « de transition » chez le chien ?",
    "c": {
      "a": "Pendant cette période, les chiots sont sourds et aveugles.",
      "b": "Elle débute une fois que le chiot peut se tenir debout de manière stable.",
      "c": "Elle débute avec l'ouverture des yeux.",
      "d": "Pendant cette période, les chiots commencent leur sevrage alimentaire et affectif.",
      "e": "Le chiot peut réguler sa température et les premières dents de lait apparaissent."
    }
  },
  {
    "id": "chien_70",
    "theme": "chiens",
    "n": 70,
    "q": "Quelles sont les affirmations correctes concernant l'évaluation comportementale des chiens catégorisés ?",
    "c": {
      "a": "Elle est toujours obligatoire pour les chiens catégorisés.",
      "b": "Elle n'est obligatoire que pour les chiens de catégorie 1.",
      "c": "Elle peut parfois être obligatoire pour des chiens non catégorisés.",
      "d": "Elle définit 3 niveaux de dangerosité du chien.",
      "e": "Elle doit toujours être renouvelée."
    }
  },
  {
    "id": "chien_71",
    "theme": "chiens",
    "n": 71,
    "q": "Quelles activités peuvent se soumettre à une seule visite vétérinaire par an ?",
    "c": {
      "a": "Les élevages de moins de 10 chats de plus de 4 mois.",
      "b": "Les activités de garde de chiens et de chats.",
      "c": "Les refuges."
    }
  },
  {
    "id": "chien_72",
    "theme": "chiens",
    "n": 72,
    "q": "À l'âge adulte, combien de dents le chien possède-t-il ?",
    "c": {
      "a": "Entre 38 et 44 dents selon les races.",
      "b": "38 dents.",
      "c": "40 dents.",
      "d": "42 dents.",
      "e": "44 dents."
    }
  },
  {
    "id": "chien_73",
    "theme": "chiens",
    "n": 73,
    "q": "Quelles sont les affirmations correctes concernant la vermifugation et le déparasitage chez le chien ?",
    "c": {
      "a": "Un chiot de moins de 2 mois doit être traité toutes les semaines.",
      "b": "Une femelle reproductrice doit être traitée avant la saillie et avant et après la mise bas.",
      "c": "Une chienne en gestation ne doit jamais être traitée.",
      "d": "Un chiot de 2 à 6 mois doit être traité tous les mois.",
      "e": "Un chiot de plus de 12 mois doit être traité tous les 6 mois."
    }
  },
  {
    "id": "chien_74",
    "theme": "chiens",
    "n": 74,
    "q": "Quelles sont les affirmations correctes concernant la parvovirose ?",
    "c": {
      "a": "C'est un vice rédhibitoire.",
      "b": "C'est une maladie bactérienne.",
      "c": "Il n'existe pas de vaccin.",
      "d": "C'est une maladie très grave et souvent mortelle.",
      "e": "Elle est souvent causée par des morsures de tiques."
    }
  },
  {
    "id": "chien_75",
    "theme": "chiens",
    "n": 75,
    "q": "Par quels moyens une gestation est-elle généralement diagnostiquée chez une chienne ?",
    "c": {
      "a": "Par palpation.",
      "b": "Par un test urinaire.",
      "c": "Par échographie.",
      "d": "Par radiographie.",
      "e": "Par un test sanguin."
    }
  },
  {
    "id": "chien_76",
    "theme": "chiens",
    "n": 76,
    "q": "Qu'est-ce que le délai de rédhibition ?",
    "c": {
      "a": "C'est le temps pendant lequel un vice infectieux donné doit être détecté pour pouvoir contester le contrat de vente.",
      "b": "C'est le temps pendant lequel l'acheteur peut porter plainte contre le vendeur.",
      "c": "Il est de 30 jours.",
      "d": "Sa durée dépend du vice rédhibitoire."
    }
  },
  {
    "id": "chien_77",
    "theme": "chiens",
    "n": 77,
    "q": "Quand la vaccination contre la rage est-elle obligatoire pour un chien ?",
    "c": {
      "a": "Pour tout voyage à l'étranger.",
      "b": "Pour tout voyage de plus de 8 heures.",
      "c": "Pour les chiens de catégorie 1.",
      "d": "Pour les chiens de catégorie 2.",
      "e": "La vaccination contre la rage est toujours obligatoire."
    }
  },
  {
    "id": "chien_78",
    "theme": "chiens",
    "n": 78,
    "q": "Quelles sont les affirmations correctes concernant le coup de chaleur chez le chien ?",
    "c": {
      "a": "Le chien doit être immergé dans de l'eau froide dès que possible pour réduire la température.",
      "b": "Pendant un coup de chaleur, les fréquences cardiaque et respiratoire du chien sont souvent élevées.",
      "c": "Un chien peut souffrir d'un coup de chaleur lorsque sa température corporelle est au-dessus de 38°C.",
      "d": "Une visite chez le vétérinaire n'est pas nécessaire si la température corporelle du chien redescend après un coup de chaleur.",
      "e": "Les muqueuses d'un chien souffrant d'un coup de chaleur peuvent être rouge vif."
    }
  },
  {
    "id": "chien_79",
    "theme": "chiens",
    "n": 79,
    "q": "Vers quels âges un chiot débute et termine-t-il son sevrage alimentaire ?",
    "c": {
      "a": "Début vers 2 à 3 semaines, fin vers 4 à 5 semaines.",
      "b": "Début vers 3 à 4 semaines, fin vers 7 à 8 semaines.",
      "c": "Début vers 6 à 7 semaines, fin vers 12 à 14 semaines."
    }
  },
  {
    "id": "chien_80",
    "theme": "chiens",
    "n": 80,
    "q": "A quel régime un élevage de 22 chiens est-il soumis ?",
    "c": {
      "a": "C'est une ICPE soumise à déclaration.",
      "b": "C'est une ICPE soumise à enregistrement.",
      "c": "C'est une ICPE soumise à autorisation."
    }
  },
  {
    "id": "chien_81",
    "theme": "chiens",
    "n": 81,
    "q": "Quels sont des exemples de sels minéraux ?",
    "c": {
      "a": "Les protéines.",
      "b": "Le sodium.",
      "c": "Le phosphore.",
      "d": "Le potassium.",
      "e": "Le fer."
    }
  },
  {
    "id": "chien_82",
    "theme": "chiens",
    "n": 82,
    "q": "Quelle est l'affirmation correcte concernant l'ectopie testiculaire ?",
    "c": {
      "a": "C'est un vice rédhibitoire qui ne concerne que les animaux de plus de 8 mois.",
      "b": "C'est une maladie virale.",
      "c": "C'est un vice rédhibitoire dont le délai de suspicion n'est pas fixé."
    }
  },
  {
    "id": "chien_83",
    "theme": "chiens",
    "n": 83,
    "q": "Quelles sont les affirmations correctes concernant le titre d'inscription au LOF qui concerne un chien dont la race est fortement représentée ?",
    "c": {
      "a": "C'est une inscription au titre de la descendance.",
      "b": "C'est une inscription à titre temporaire.",
      "c": "Un tel chien peut être inscrit à un livre d'attente pendant 3 générations successives, la quatrième génération pouvant être inscrite au LOF.",
      "d": "Un tel chien peut être inscrit à un livre d'attente pendant 4 générations successives, la cinquième génération pouvant être inscrite au LOF.",
      "e": "C'est un type d'inscription qui permet de garder une grande variabilité génétique pour la race."
    }
  },
  {
    "id": "chien_84",
    "theme": "chiens",
    "n": 84,
    "q": "Quel est le taux d'hygrométrie idéal pour le chien ?",
    "c": {
      "a": "50%.",
      "b": "65%.",
      "c": "80%."
    }
  },
  {
    "id": "chien_85",
    "theme": "chiens",
    "n": 85,
    "q": "Quelles sont les affirmations correctes concernant la toux du chenil ?",
    "c": {
      "a": "C'est une maladie d'origine virale ou bactérienne.",
      "b": "C'est un danger sanitaire.",
      "c": "Il n'existe pas de vaccin.",
      "d": "La contamination peut se faire par voie aérienne.",
      "e": "Elle présente surtout un danger chez les jeunes chiens."
    }
  },
  {
    "id": "chien_86",
    "theme": "chiens",
    "n": 86,
    "q": "Quelle est l'affirmation correcte concernant les animaux entrants dans un établissement ?",
    "c": {
      "a": "Ils doivent être logés en local d'observation pendant une durée déterminée avec le vétérinaire sanitaire.",
      "b": "Ils doivent obligatoirement être logés en local d'observation pendant 7 jours ouvrés.",
      "c": "Ils peuvent être logés dans le local d'infirmerie."
    }
  },
  {
    "id": "chien_87",
    "theme": "chiens",
    "n": 87,
    "q": "De quel groupe les chiens nordiques et de traineau font-ils partie ?",
    "c": {
      "a": "Du groupe 4.",
      "b": "Du groupe 5.",
      "c": "Du groupe 6.",
      "d": "Du groupe « Chiens courants, chiens de recherche au sang et races apparentées ».",
      "e": "Du groupe « Chiens de type Spitz et de type primitif »."
    }
  },
  {
    "id": "chien_88",
    "theme": "chiens",
    "n": 88,
    "q": "Que risque un maître qui tente de vendre son chien d'apparence de race Mastiff ?",
    "c": {
      "a": "Rien, car ce n'est pas un chien catégorisé.",
      "b": "Rien, car c'est un chien de la deuxième catégorie.",
      "c": "750 € d'amende.",
      "d": "3500 € d'amende et 3 mois de prison.",
      "e": "15 000 € d'amende et 6 mois de prison."
    }
  },
  {
    "id": "chien_89",
    "theme": "chiens",
    "n": 89,
    "q": "Quels évènements font généralement partie de la période de développement dite « de socialisation » ?",
    "c": {
      "a": "La disparition du réflexe de fouissement.",
      "b": "Le début de l'élimination autonome.",
      "c": "L'acquisition des autocontrôles.",
      "d": "Les premières sécrétions d'hormones sexuelles.",
      "e": "Les premiers signes sociaux et de communication."
    }
  },
  {
    "id": "chien_90",
    "theme": "chiens",
    "n": 90,
    "q": "Quelles sont les affirmations correctes concernant le pro-oestrus chez la chienne ?",
    "c": {
      "a": "Il dure de 3 à 17 jours.",
      "b": "La femelle accepte le mâle et l'accouplement.",
      "c": "C'est la période pendant laquelle l'ovulation a lieu.",
      "d": "On observe souvent des pertes vulvaires hémorragiques chez la femelle.",
      "e": "C'est la période qui correspond à la gestation."
    }
  },
  {
    "id": "chien_91",
    "theme": "chiens",
    "n": 91,
    "q": "À partir de quel âge un chien peut-il être cédé ?",
    "c": {
      "a": "Si la cession est à titre gratuit, il n'y a pas d'âge minimal pour une cession.",
      "b": "L'âge minimal de cession dépend de la race du chien.",
      "c": "Un chien n'étant pas de race peut être cédé à partir de 8 semaines.",
      "d": "Un chien de race ne peut être cédé qu'à partir de 12 semaines.",
      "e": "Pour une cession à titre onéreux, un chien de race ne peut pas être cédé avant 8 semaines."
    }
  },
  {
    "id": "chien_92",
    "theme": "chiens",
    "n": 92,
    "q": "Quelle est l'affirmation exacte concernant l'herpèsvirose canin ?",
    "c": {
      "a": "C'est une zoonose.",
      "b": "Il se transmet par morsure de tique.",
      "c": "Il existe un vaccin, mais uniquement pour les chiennes gestantes.",
      "d": "Il provoque des éternuements et de la toux.",
      "e": "Il est souvent mortel pour tous les chiens, quel que soit leur âge."
    }
  },
  {
    "id": "chien_93",
    "theme": "chiens",
    "n": 93,
    "q": "Quelles sont les affirmations correctes concernant la photopériode ?",
    "c": {
      "a": "La photopériode influe sur le système hormonal et sur la reproduction chez le chien.",
      "b": "La photopériode doit être différente selon le stade physiologique du chien.",
      "c": "Un chien doit idéalement bénéficier de 8 heures d'éclairage en continu par jour."
    }
  },
  {
    "id": "chien_94",
    "theme": "chiens",
    "n": 94,
    "q": "Quelles sont les affirmations correctes concernant l'anatomie du chien ?",
    "c": {
      "a": "Le museau du chien est composé de 2 éléments principaux.",
      "b": "Le nombre d'os dépend de la race.",
      "c": "Les chiens mâles ont un os de plus que les femelles."
    }
  },
  {
    "id": "chien_95",
    "theme": "chiens",
    "n": 95,
    "q": "Quels aliments sont à proscrire pour les chiens ?",
    "c": {
      "a": "L'avocat.",
      "b": "La pomme de terre cuite.",
      "c": "Les gros os crus.",
      "d": "Les grains de raisin.",
      "e": "Le chocolat."
    }
  },
  {
    "id": "chien_96",
    "theme": "chiens",
    "n": 96,
    "q": "Quelles sont les affirmations correctes concernant le transport ?",
    "c": {
      "a": "Pour un transport commercial, le type d'autorisation de transport requis dépend de la durée et du temps de trajet.",
      "b": "Le TAV est obligatoire pour tout transport commercial.",
      "c": "Le transporteur doit être titulaire du TAV pour tout transport commercial de plus de 65 km.",
      "d": "La présence d'un convoyeur n'est pas toujours requise pour les transports commerciaux.",
      "e": "Une autorisation de transport est requise pour les transports non commerciaux de longue durée."
    }
  },
  {
    "id": "chien_97",
    "theme": "chiens",
    "n": 97,
    "q": "Quelle est l'affirmation correcte concernant la notion de divagation chez le chien ?",
    "c": {
      "a": "Un chien n'est pas considéré comme en divagation s'il se trouve à plus de 100m de son maître pendant une activité de chasse.",
      "b": "Un chien n'est pas considéré comme en divagation s'il se trouve à plus de 100m de son lieu d'habitation ou de son maître s'il est identifié par puce électronique.",
      "c": "Un chien est considéré comme en divagation s'il se trouve à plus de 50m de son maître hors de son propre lieu d'habitation."
    }
  },
  {
    "id": "chien_98",
    "theme": "chiens",
    "n": 98,
    "q": "Quel type d'inscription est un exemple d'inscription au LOF ?",
    "c": {
      "a": "Inscription au livre d'attente.",
      "b": "Inscription sur les collatéraux.",
      "c": "Inscription à titre individuel."
    }
  },
  {
    "id": "chien_99",
    "theme": "chiens",
    "n": 99,
    "q": "À quel morphotype le Carlin et le Bouledogue français appartiennent-ils ?",
    "c": {
      "a": "Aux dolicéphales.",
      "b": "Aux mésocéphales.",
      "c": "Aux brachycéphales."
    }
  },
  {
    "id": "chien_100",
    "theme": "chiens",
    "n": 100,
    "q": "Quels sont des signes d'une mise bas imminente chez la chienne ?",
    "c": {
      "a": "Une chute de température.",
      "b": "Une augmentation de température.",
      "c": "Des pertes vulvaires hémorragiques.",
      "d": "Des pertes vulvaires incolores."
    }
  },
  {
    "id": "chien_101",
    "theme": "chiens",
    "n": 101,
    "q": "Quelle est l'affirmation correcte concernant la cession d'animaux ?",
    "c": {
      "a": "Une chienne reproductrice d'élevage réformée ne peut être cédée que si elle est stérilisée (sauf contre-indication vétérinaire).",
      "b": "Un chat trouvé errant peut être adopté par les personnes l'ayant trouvé seulement s'il n'est pas identifié.",
      "c": "Un furet de 5 jours peut être cédé seulement si sa mère n'est pas disponible pour s'en occuper."
    }
  },
  {
    "id": "chien_102",
    "theme": "chiens",
    "n": 102,
    "q": "Que risque un maître promenant son chien de catégorie 2 sans muselière et sans laisse sur la voie publique ?",
    "c": {
      "a": "Rien, car c'est un chien de catégorie 2.",
      "b": "150 € d'amende.",
      "c": "450 € d'amende.",
      "d": "750 € d'amende."
    }
  },
  {
    "id": "chien_103",
    "theme": "chiens",
    "n": 103,
    "q": "A partir de quel âge doit-on obtenir un accord vétérinaire pour continuer la reproduction d'une chienne ?",
    "c": {
      "a": "6 ans.",
      "b": "8 ans.",
      "c": "7 ans."
    }
  },
  {
    "id": "chien_104",
    "theme": "chiens",
    "n": 104,
    "q": "Quelles sont les affirmations correctes concernant le retournement d'estomac chez le chien ?",
    "c": {
      "a": "C'est une urgence vétérinaire.",
      "b": "Il est plus fréquent chez les petites races.",
      "c": "Il peut causer des vomissements.",
      "d": "Il peut causer des diarrhées.",
      "e": "Il peut causer un gonflement de l'abdomen."
    }
  },
  {
    "id": "chien_105",
    "theme": "chiens",
    "n": 105,
    "q": "Quelles sont les affirmations correctes concernant la stérilisation chez le chien ?",
    "c": {
      "a": "La stérilisation chirurgicale est toujours permanente.",
      "b": "La stérilisation chimique comporte moins de risques de santé sur le long terme que la stérilisation chirurgicale.",
      "c": "La castration chimique est possible pour les mâles.",
      "d": "La castration permet d'éliminer les comportements sexuels gênants chez le mâle, quel que soit son âge.",
      "e": "La stérilisation chirurgicale peut augmenter le risque de tumeurs mammaires, en particulier si elle est effectuée avant l'âge de la puberté."
    }
  },
  {
    "id": "chien_106",
    "theme": "chiens",
    "n": 106,
    "q": "Quelles sont les affirmations correctes concernant les glucides ?",
    "c": {
      "a": "Ils sont peu digestes pour les animaux strictement carnivores.",
      "b": "Ce sont des oligo-éléments.",
      "c": "Ils représentent la source d'énergie principale de l'organisme.",
      "d": "On les retrouve surtout dans les légumes verts.",
      "e": "Ils participent à la santé de la thyroïde."
    }
  },
  {
    "id": "chien_107",
    "theme": "chiens",
    "n": 107,
    "q": "Combien existe-t-il de vices rédhibitoires pour le chien ?",
    "c": {
      "a": "4.",
      "b": "6.",
      "c": "8."
    }
  },
  {
    "id": "chien_108",
    "theme": "chiens",
    "n": 108,
    "q": "À quel âge la dentition définitive du chien est-elle en place ?",
    "c": {
      "a": "Vers 16 à 18 mois.",
      "b": "Vers 12 à 14 mois.",
      "c": "Vers 10 à 12 mois.",
      "d": "Vers 8 à 10 mois.",
      "e": "Vers 6 à 7 mois."
    }
  },
  {
    "id": "chien_109",
    "theme": "chiens",
    "n": 109,
    "q": "Quelles sont les affirmations correctes concernant les infrastructures hébergeant des chiens ?",
    "c": {
      "a": "Si elles hébergent 300 chiens, ce sont des ICPE soumises à déclaration.",
      "b": "Si elles hébergent 10 chiens, elle doit être implantée à au moins 100 m d'un stade.",
      "c": "Si elles hébergent 63 chiens, ce sont des ICPE soumises à enregistrement.",
      "d": "Si ce sont des ICPE, elles doivent forcément être implantées à au moins 35 m d'un rivage.",
      "e": "Si ce sont des ICPE, elles doivent forcément être implantées à au moins 250 m d'une plage."
    }
  },
  {
    "id": "chien_110",
    "theme": "chiens",
    "n": 110,
    "q": "Quels vaccins peuvent être effectués dès 8 semaines chez le chien ?",
    "c": {
      "a": "Le vaccin contre la piroplasmose.",
      "b": "Le vaccin contre la rage.",
      "c": "Le vaccin contre l'herpèsvirose.",
      "d": "Le vaccin contre la toux du chenil.",
      "e": "Le vaccin contre la maladie de Carré, l'hépatite de Rubarth, la parvovirose et la leptospirose."
    }
  },
  {
    "id": "chien_111",
    "theme": "chiens",
    "n": 111,
    "q": "Un chien a une patte cassée mais son maître refuse de le faire soigner. Selon le code pénal, que risque le maître ?",
    "c": {
      "a": "Jusqu'à 450 € d'amende.",
      "b": "Jusqu'à 750 € d'amende.",
      "c": "Jusqu'à 1500 € d'amende."
    }
  },
  {
    "id": "chien_112",
    "theme": "chiens",
    "n": 112,
    "q": "De quel groupe de races canines les chiens dont la fonction étaient à l'origine la chasse souterraine en raison de leurs courtes pattes font-ils partie ?",
    "c": {
      "a": "Du groupe 3 : Terriers.",
      "b": "Du groupe 4 : Teckels.",
      "c": "Du groupe 8 : Chiens rapporteurs de gibier - Chiens leveurs de gibier - Chiens d'eau."
    }
  },
  {
    "id": "chien_113",
    "theme": "chiens",
    "n": 113,
    "q": "Quelles sont les affirmations correctes concernant l'obtention d'un pédigrée pour un chien ?",
    "c": {
      "a": "Un examen de confirmation n'est pas toujours obligatoire pour les chiens.",
      "b": "Un examen de confirmation doit être effectué lorsque l'animal a fini sa croissance.",
      "c": "Un examen de confirmation est obligatoire et doit être effectué à partir de 8 semaines.",
      "d": "Il existe 3 types d'inscription au LOF.",
      "e": "Il existe 4 types d'inscription au LOF."
    }
  },
  {
    "id": "chien_114",
    "theme": "chiens",
    "n": 114,
    "q": "À quel âge la période de socialisation se déroule-t-elle chez le chiot ?",
    "c": {
      "a": "De la naissance à la 4ème semaine.",
      "b": "De la 2ème à la 4ème semaine.",
      "c": "De la 3ème à la 8ème semaine (-12).",
      "d": "De la 3ème à la 12ème semaine.",
      "e": "De la 8ème semaine à la puberté."
    }
  },
  {
    "id": "chien_115",
    "theme": "chiens",
    "n": 115,
    "q": "Quelle est la durée moyenne de gestation chez la chienne ?",
    "c": {
      "a": "De 40 à 45 jours.",
      "b": "De 48 à 56 jours.",
      "c": "De 57 à 68 jours.",
      "d": "De 69 à 78 jours."
    }
  },
  {
    "id": "chien_116",
    "theme": "chiens",
    "n": 116,
    "q": "Quelles sont les affirmations correctes concernant l'élevage ?",
    "c": {
      "a": "Un individu ne travaillant pas en pure race est considéré éleveur dès la première portée vendue.",
      "b": "Un individu travaillant en pure race est considéré éleveur dès la deuxième portée vendue.",
      "c": "Un éleveur est uniquement autorisé à vendre des animaux issus de son propre élevage."
    }
  },
  {
    "id": "chien_117",
    "theme": "chiens",
    "n": 117,
    "q": "Qu'est-ce que l'éclampsie ?",
    "c": {
      "a": "C'est un vice rédhibitoire chez le chien.",
      "b": "C'est une maladie virale commune chez les jeunes chiots.",
      "c": "C'est une maladie commune aux chiennes ayant récemment mis bas.",
      "d": "C'est une urgence vétérinaire.",
      "e": "Elle correspond à une chute brutale du taux de protéines dans l'organisme."
    }
  },
  {
    "id": "chien_118",
    "theme": "chiens",
    "n": 118,
    "q": "En général, quel est le délai de vermifugation et de déparasitage pour un chien adulte ?",
    "c": {
      "a": "Tous les mois.",
      "b": "Tous les 1 à 2 mois.",
      "c": "Tous les 3 à 6 mois.",
      "d": "Tous les 6 à 12 mois.",
      "e": "Tous les ans."
    }
  },
  {
    "id": "chien_119",
    "theme": "chiens",
    "n": 119,
    "q": "Quelle zoonose bactérienne contractée après une morsure de tique provoque des troubles nerveux en son stade avancé ?",
    "c": {
      "a": "La parvovirose.",
      "b": "La maladie de Lyme.",
      "c": "La dirofilariose."
    }
  },
  {
    "id": "chien_120",
    "theme": "chiens",
    "n": 120,
    "q": "Quels sont les signes d'un comportement d'agressivité défensive chez le chien ?",
    "c": {
      "a": "L'arrière-train est baissé.",
      "b": "Les oreilles sont rabattues vers l'avant.",
      "c": "Le poil est hérissé.",
      "d": "Les babines sont retroussées.",
      "e": "La queue est rabattue entre les pattes arrière."
    }
  },
  {
    "id": "chien_121",
    "theme": "chiens",
    "n": 121,
    "q": "Quelles sont les affirmations correctes concernant les surfaces de boxes de pension ?",
    "c": {
      "a": "Le bois est préférable pour les murs et le sol.",
      "b": "Le boxe doit offrir beaucoup de recoins et d'angles pour permettre à l'animal de se cacher s'il en a besoin.",
      "c": "Le sol peut être recouvert de sable ou de terre.",
      "d": "Les murs doivent être lisses.",
      "e": "Le carrelage est une bonne idée de revêtement pour le sol."
    }
  },
  {
    "id": "chien_122",
    "theme": "chiens",
    "n": 122,
    "q": "De quel groupe les Bichons, les Caniches et les Carlins font-ils partie ?",
    "c": {
      "a": "Du groupe 4.",
      "b": "Du groupe 6.",
      "c": "Du groupe 9.",
      "d": "Du groupe « Chiens d'agrément et de compagnie ».",
      "e": "Du groupe « Chiens de compagnie et races miniatures »."
    }
  },
  {
    "id": "chien_123",
    "theme": "chiens",
    "n": 123,
    "q": "Que risque un propriétaire de chien d'apparence de race Rottweiler ?",
    "c": {
      "a": "Une amende, si le chien n'est pas stérilisé.",
      "b": "Une amende, si le chien n'est pas déclaré en mairie.",
      "c": "Une amende, si le chien accède à un lieu public avec ou sans laisse ou muselière.",
      "d": "Une amende et une peine de prison, si le propriétaire est mineur."
    }
  },
  {
    "id": "chien_124",
    "theme": "chiens",
    "n": 124,
    "q": "Quels sont les rôles des clubs de races canines en France ?",
    "c": {
      "a": "Protéger les rôles du chien dans la société.",
      "b": "Former des éleveurs.",
      "c": "Délivrer des pédigrées.",
      "d": "Appliquer les standards de race.",
      "e": "Conserver et améliorer les races."
    }
  },
  {
    "id": "chien_125",
    "theme": "chiens",
    "n": 125,
    "q": "À quelle étape du cycle sexuel de la chienne l'acceptation du mâle, une augmentation du taux de progestérone et un éclaircissement des pertes vulvaires correspondent-ils ?",
    "c": {
      "a": "Au pro-oestrus.",
      "b": "À l'oestrus.",
      "c": "Au meteoestrus.",
      "d": "À l'anoestrus.",
      "e": "À l'interoestrus."
    }
  },
  {
    "id": "chien_126",
    "theme": "chiens",
    "n": 126,
    "q": "Quelles sont les affirmations correctes concernant le transport d'animaux à l'international ?",
    "c": {
      "a": "Un certificat de bonne santé vétérinaire est toujours requis 48 heures avant le départ.",
      "b": "Pour les transports par avion, seule l'identification par puce électronique est acceptée.",
      "c": "La vaccination antirabique est considérée valable 1 mois après l'injection.",
      "d": "Le passeport est la seule preuve valide qu'un animal est vacciné contre la rage.",
      "e": "Les chiens transportés doivent toujours être identifiés."
    }
  },
  {
    "id": "chien_127",
    "theme": "chiens",
    "n": 127,
    "q": "Comment appelle-t-on un chien dont la mâchoire du dessus est plus longue que celle du dessous ?",
    "c": {
      "a": "Un chien grignard.",
      "b": "Un chien bégu.",
      "c": "Un chien avec un prognathisme inférieur.",
      "d": "Un chien avec un prognathisme supérieur."
    }
  },
  {
    "id": "chien_128",
    "theme": "chiens",
    "n": 128,
    "q": "Quelle est l'affirmation correcte concernant l'alimentation chez le chien ?",
    "c": {
      "a": "30% de son alimentation doit être composé de protéines.",
      "b": "50% de son alimentation doit être composée de protéines.",
      "c": "80% de son alimentation doivent être composés de protéines."
    }
  },
  {
    "id": "chien_129",
    "theme": "chiens",
    "n": 129,
    "q": "Quelles sont les affirmations correctes concernant la gestation chez la chienne ?",
    "c": {
      "a": "La durée de gestation varie selon les races.",
      "b": "La durée de gestation est généralement plus longue chez les plus petites races.",
      "c": "La durée de gestation est généralement plus courte pour les grosses portées.",
      "d": "Les chiennes donnent naissance à 3 à 5 petits en moyenne, quelle que soit la race.",
      "e": "La durée de gestation moyenne est d'une soixantaine de jours."
    }
  },
  {
    "id": "chien_130",
    "theme": "chiens",
    "n": 130,
    "q": "Combien existe-t-il de niveaux d'état corporel permettant d'évaluer l'état d'engraissement d'un chien ?",
    "c": {
      "a": "3.",
      "b": "5.",
      "c": "7."
    }
  },
  {
    "id": "chien_131",
    "theme": "chiens",
    "n": 131,
    "q": "Quels sont des exemples de modes de sélection génétique ?",
    "c": {
      "a": "La sélection sur la descendance.",
      "b": "La sélection sur l'ascendance.",
      "c": "La sélection exclusive.",
      "d": "La sélection individuelle.",
      "e": "La sélection sur la compatibilité."
    }
  },
  {
    "id": "chien_132",
    "theme": "chiens",
    "n": 132,
    "q": "Quels sont des exemples de signaux d'apaisement chez le chien ?",
    "c": {
      "a": "Le remuage de la queue.",
      "b": "Le détournement du regard.",
      "c": "Le halètement (après un exercice).",
      "d": "L'étirement.",
      "e": "Le clignement des yeux."
    }
  },
  {
    "id": "chien_133",
    "theme": "chiens",
    "n": 133,
    "q": "Quelles maladies sont des exemples de maladies parasitaires chez le chien ?",
    "c": {
      "a": "La leptospirose.",
      "b": "La piroplasmose.",
      "c": "La parvovirose.",
      "d": "La mammite.",
      "e": "La gale."
    }
  },
  {
    "id": "chien_134",
    "theme": "chiens",
    "n": 134,
    "q": "Quels sont des exemples d'ectoparasites ?",
    "c": {
      "a": "Les cestodes.",
      "b": "Les puces.",
      "c": "Les protozoaires.",
      "d": "Les acariens.",
      "e": "Les ténias."
    }
  },
  {
    "id": "chien_135",
    "theme": "chiens",
    "n": 135,
    "q": "Quelles sont les affirmations correctes concernant le colostrum ?",
    "c": {
      "a": "C'est le premier lait produit par la mère qui est riche en anticorps.",
      "b": "Il est produit par la mère pendant 1 semaine après la mise bas.",
      "c": "Il doit être bu par les chiots dès que possible après leur naissance.",
      "d": "Il doit être bu par les chiots jusqu'à ce qu'ils soient sevrés.",
      "e": "Il peut être prélevé, conservé et proposé au biberon jusqu'à 72 heures après la naissance."
    }
  },
  {
    "id": "chien_136",
    "theme": "chiens",
    "n": 136,
    "q": "Quelles sont les affirmations correctes concernant le zinc ?",
    "c": {
      "a": "Il fait partie des sels minéraux.",
      "b": "Il fait partie des oligo-éléments.",
      "c": "Il aide à l'absorption du calcium.",
      "d": "On le retrouve surtout dans les huiles végétales et les fruits secs.",
      "e": "Il participe au renouvellement de la peau."
    }
  },
  {
    "id": "chien_137",
    "theme": "chiens",
    "n": 137,
    "q": "Quelles sont les races canines associées au groupe 10 ?",
    "c": {
      "a": "Lévriers.",
      "b": "Terriers.",
      "c": "Épagneuls.",
      "d": "Spitz.",
      "e": "Chiens de montagne et de bouvier suisse."
    }
  },
  {
    "id": "chien_138",
    "theme": "chiens",
    "n": 138,
    "q": "Quelles sont les affirmations correctes concernant un chien d'apparence de race Tosa ?",
    "c": {
      "a": "C'est un chien de catégorie 1.",
      "b": "C'est un chien de catégorie 2.",
      "c": "Sa stérilisation n'est pas obligatoire.",
      "d": "Il ne doit jamais monter dans les transports en commun.",
      "e": "Il peut stationner dans des parties communes d'immeubles collectifs avec le port de la laisse et de la muselière."
    }
  },
  {
    "id": "chien_139",
    "theme": "chiens",
    "n": 139,
    "q": "Quels sont les attributs morphologiques d'un chien au profil convexiligne ?",
    "c": {
      "a": "Un stop très accentué, un museau retroussé et une face écrasée.",
      "b": "Un stop très marqué et un front et chanfrein qui sont parallèles.",
      "c": "Un stop effacé, un chanfrein abaissé et un front bombé."
    }
  },
  {
    "id": "chien_140",
    "theme": "chiens",
    "n": 140,
    "q": "Quelles sont les affirmations correctes concernant les manières de diagnostiquer une gestation chez une chienne ?",
    "c": {
      "a": "Une gestation peut être diagnostiquée par radiographie dès la deuxième semaine de grossesse.",
      "b": "Un diagnostic par palpations abdominales doit toujours être effectué par un vétérinaire.",
      "c": "Des changements comportementaux et corporels peuvent indiquer une gestation."
    }
  },
  {
    "id": "chien_141",
    "theme": "chiens",
    "n": 141,
    "q": "Quel est l'un des rôles de la fourrière ?",
    "c": {
      "a": "Placer les animaux non réclamés à l'adoption.",
      "b": "Rechercher les propriétaires des animaux saisis.",
      "c": "Stériliser les animaux saisis s'ils ne sont pas réclamés."
    }
  },
  {
    "id": "chien_142",
    "theme": "chiens",
    "n": 142,
    "q": "Quelles sont les affirmations correctes concernant une inscription au LOF au titre de la descendance ?",
    "c": {
      "a": "Elle ne concerne que les chiens dont les parents sont LOF confirmés.",
      "b": "Elle concerne les chiens inscrits à un livre généalogique étranger.",
      "c": "Pour une inscription au titre de la descendance, un éleveur peut choisir entre faire une déclaration de saillie ou une déclaration de naissance.",
      "d": "Un numéro d'identification est obligatoire pour inscrire un chien au titre de la descendance."
    }
  },
  {
    "id": "chien_143",
    "theme": "chiens",
    "n": 143,
    "q": "Quel est le régime alimentaire du chien ?",
    "c": {
      "a": "Le chien est une espèce strictement carnivore.",
      "b": "Le chien est une espèce omnivore.",
      "c": "Le chien est une espèce carnivore."
    }
  },
  {
    "id": "chien_144",
    "theme": "chiens",
    "n": 144,
    "q": "Quelles sont les affirmations correctes concernant la reproduction chez le chien ?",
    "c": {
      "a": "La chienne doit obligatoirement être vaccinée et vermifugée avant toute saillie.",
      "b": "Il est préférable de mettre un couple en contact plusieurs jours avant la date de saillie.",
      "c": "Le mâle adopte la position de lordose pendant l'accouplement.",
      "d": "Il ne faut pas séparer un couple pendant la période d'accolement.",
      "e": "Une chienne ne peut pas être fécondée en dehors de la période d'ovulation."
    }
  },
  {
    "id": "chien_145",
    "theme": "chiens",
    "n": 145,
    "q": "Quels sont des exemples de socialisation inter-spécifique ?",
    "c": {
      "a": "Un chiot qui joue avec sa mère.",
      "b": "Un chiot qui joue avec un chaton.",
      "c": "Un chiot qui joue avec ses frères et sœurs.",
      "d": "Un chiot qui joue avec un autre chien qui ne fait pas partie de son environnement.",
      "e": "Un chiot qui joue avec son maître."
    }
  },
  {
    "id": "chien_146",
    "theme": "chiens",
    "n": 146,
    "q": "Où la dépouille d'un chien de 50 kg peut-elle être incinérée ?",
    "c": {
      "a": "Chez le vétérinaire.",
      "b": "Chez un service d'équarrissage.",
      "c": "Chez un crématorium animalier."
    }
  },
  {
    "id": "chien_147",
    "theme": "chiens",
    "n": 147,
    "q": "Quelles sont les affirmations correctes concernant l'identification du chien ?",
    "c": {
      "a": "Un chien peut être identifié par puce électronique qu'à partir de 4 mois.",
      "b": "Un chien doit obligatoirement être identifié pour une cession à titre onéreux.",
      "c": "Un chien doit obligatoirement être identifié pour une cession à titre gratuit."
    }
  },
  {
    "id": "chien_148",
    "theme": "chiens",
    "n": 148,
    "q": "Quelles races canines sont des races de catégorie 2 ?",
    "c": {
      "a": "Les chiens d'apparence de race Rottweiler.",
      "b": "Les chiens de race Mastiff.",
      "c": "Les chiens de race Tosa.",
      "d": "Les chiens de race Rottweiler.",
      "e": "Les Pitbulls."
    }
  },
  {
    "id": "chien_149",
    "theme": "chiens",
    "n": 149,
    "q": "Qu'est-ce que l'anoestrus chez la chienne ?",
    "c": {
      "a": "C'est la période de repos sexuel hors saison sexuelle.",
      "b": "C'est la période de repos sexuel pendant la saison sexuelle.",
      "c": "C'est la période qui précède l'ovulation, pendant laquelle la femelle refuse l'accouplement.",
      "d": "Il dure 1 à 3 semaines en moyenne.",
      "e": "Il dure 2 à 9 mois en moyenne."
    }
  },
  {
    "id": "chien_150",
    "theme": "chiens",
    "n": 150,
    "q": "Quel est l'organisme responsable de la création et de l'entretien des origines et standards des races canines ?",
    "c": {
      "a": "Le Livre Officiel des Origines Français.",
      "b": "Le Livre des Origines Français.",
      "c": "Le Livre Officiel des Origines et des Standards.",
      "d": "Le Livre des Origines et des Standards Français.",
      "e": "Le livre des Standards Français."
    }
  },
  {
    "id": "chien_151",
    "theme": "chiens",
    "n": 151,
    "q": "Quel secteur n'est pas obligatoire pour refuge ?",
    "c": {
      "a": "Un local pour les sains et sevrés.",
      "b": "Une maternité.",
      "c": "Une infirmerie.",
      "d": "Un local d'isolement."
    }
  },
  {
    "id": "chien_152",
    "theme": "chiens",
    "n": 152,
    "q": "Quel comportement un chien qui se tient droit et a les poils hérissés et les babines retroussées affiche-t-il ?",
    "c": {
      "a": "Un comportement de soumission.",
      "b": "Un comportement de dominance.",
      "c": "Un comportement d'agressivité défensive."
    }
  },
  {
    "id": "chien_153",
    "theme": "chiens",
    "n": 153,
    "q": "Quelles sont les affirmations correctes concernant la période de développement dite « néonatale » ?",
    "c": {
      "a": "C'est la période pendant laquelle le chiot développe les réflexes de pétrissement.",
      "b": "Elle se termine lorsque le chiot peut se tenir debout.",
      "c": "C'est la période pendant laquelle le chiot devient capable de réguler sa propre température.",
      "d": "C'est la période pendant laquelle le chiot développe les réflexes labial et périnéal.",
      "e": "Le chiot doit rester au nid avec sa mère."
    }
  },
  {
    "id": "chien_154",
    "theme": "chiens",
    "n": 154,
    "q": "Comment peut-on apprendre la propreté à un chiot ?",
    "c": {
      "a": "Il faut organiser des sorties régulières.",
      "b": "Il faut le punir lorsqu'il a un accident pour qu'il comprenne que ce n'est pas un comportement autorisé.",
      "c": "Il est préférable d'utiliser des tapis de propreté au début de l'apprentissage.",
      "d": "Il faut toujours féliciter le chien lorsqu'il fait ses besoins correctement.",
      "e": "Il faut organiser au moins une sortie par jour au minimum."
    }
  },
  {
    "id": "chien_155",
    "theme": "chiens",
    "n": 155,
    "q": "Qu'est-ce que l'acquisition des autocontrôles chez le chiot ?",
    "c": {
      "a": "C'est lorsque le chiot apprend à réguler sa température seul.",
      "b": "C'est lorsque le chiot apprend à faire ses besoins seul, sans l'aide de sa mère.",
      "c": "C'est lorsque le chiot apprend à adapter ses émotions et ses réactions face à différents stimuli."
    }
  },
  {
    "id": "chien_156",
    "theme": "chiens",
    "n": 156,
    "q": "Quelles sont les affirmations correctes concernant le registre des entrées et sorties ?",
    "c": {
      "a": "Il n'est obligatoire que pour les élevages.",
      "b": "Il ne concerne que les chiens et les chats.",
      "c": "Les volumes contenant des informations sur un animal vivant doivent être conservés 1 an après la sortie de l'animal.",
      "d": "Les données doivent y être consignées en temps réel.",
      "e": "Les données doivent y être consignées de manière indélébile."
    }
  },
  {
    "id": "chien_157",
    "theme": "chiens",
    "n": 157,
    "q": "Quelle est l'affirmation correcte concernant l'espérance de vie du chien ?",
    "c": {
      "a": "Elle dépend seulement du niveau d'activité et de l'hygiène de vie de l'animal.",
      "b": "Les petites races ont souvent une espérance de vie plus longue que les grandes races.",
      "c": "Les grandes races ont souvent une espérance de vie plus longue que les petites races."
    }
  },
  {
    "id": "chien_158",
    "theme": "chiens",
    "n": 158,
    "q": "Quelles sont les affirmations correctes concernant les troubles comportementaux chez le chien adulte ?",
    "c": {
      "a": "Ils peuvent être causés par un traumatisme durant sa période juvénile.",
      "b": "Ils peuvent être causés par un problème de santé.",
      "c": "Ils s'atténuent toujours d'eux-mêmes si le maître s'occupe bien du chien.",
      "d": "Ils peuvent nécessiter l'aide d'un vétérinaire ou d'un comportementaliste canin.",
      "e": "Certains symptômes sont l'automutilation ou de la malpropreté."
    }
  },
  {
    "id": "chien_159",
    "theme": "chiens",
    "n": 159,
    "q": "Quel est le délai de suspicion pour l'hépatite de Rubarth ?",
    "c": {
      "a": "Il n'y en a pas, car ce n'est pas un vice rédhibitoire.",
      "b": "C'est une maladie génétique avec un délai de suspicion non fixé.",
      "c": "6 jours.",
      "d": "10 jours.",
      "e": "15 jours."
    }
  },
  {
    "id": "chien_160",
    "theme": "chiens",
    "n": 160,
    "q": "De quel groupe de races canines les chiens dont la fonction étaient à l'origine la garde, la protection et la défense ?",
    "c": {
      "a": "Du groupe 2.",
      "b": "Du groupe 5.",
      "c": "Du groupe 9.",
      "d": "Du groupe « Chiens de type Pinscher et Schnauzer - Molossoïdes - Chiens de montagne et de Bouvier Suisses ».",
      "e": "Du groupe « Chiens de type Spitz et de type primitif »."
    }
  },
  {
    "id": "chien_161",
    "theme": "chiens",
    "n": 161,
    "q": "Quelles sont les affirmations correctes concernant l'alimentation ?",
    "c": {
      "a": "La gestation est le stade physiologique le plus demandeur en énergie.",
      "b": "L'eau fait partie des besoins nutritionnels.",
      "c": "La race d'un animal influe sur ses besoins nutritionnels.",
      "d": "L'environnement d'un animal influe sur ses besoins nutritionnels.",
      "e": "Des petits sevrés et non sevrés ont les mêmes besoins nutritionnels."
    }
  },
  {
    "id": "chien_162",
    "theme": "chiens",
    "n": 162,
    "q": "Quelles sont les affirmations correctes concernant la vaccination antirabique chez le chien ?",
    "c": {
      "a": "Elle n'est pas obligatoire pour les voyages à l'étranger pour certaines races.",
      "b": "Elle est obligatoire pour tous les chiens catégorisés.",
      "c": "Elle peut être effectuée dès l'âge de 8 semaines.",
      "d": "Si un chien catégorisé n'est pas vacciné contre la rage, son maître risque une amende de 450€.",
      "e": "Si un chien catégorisé n'est pas vacciné contre la rage, son maître risque 3 mois de prison."
    }
  },
  {
    "id": "chien_163",
    "theme": "chiens",
    "n": 163,
    "q": "Quelle est l'affirmation correcte concernant l'éducation du chien ?",
    "c": {
      "a": "On peut commencer le dressage pendant la période de socialisation.",
      "b": "Il est impossible de dresser un chien une fois qu'il a atteint l'âge adulte.",
      "c": "Il faut éviter de commencer à dresser un chiot avant l'âge de 10 semaines."
    }
  },
  {
    "id": "chien_164",
    "theme": "chiens",
    "n": 164,
    "q": "Que risque un individu cédant un chien non identifié à titre gratuit ?",
    "c": {
      "a": "Rien, si le chien n'est pas catégorisé.",
      "b": "Rien, si le vendeur peut prouver qu'il s'agit bien d'un don à titre gratuit.",
      "c": "750 € d'amende.",
      "d": "1500 € d'amende.",
      "e": "Rien, si la situation est régularisée sous 1 mois."
    }
  },
  {
    "id": "chien_165",
    "theme": "chiens",
    "n": 165,
    "q": "Quelles sont les affirmations correctes concernant la vaccination du chien ?",
    "c": {
      "a": "Le vaccin antirabique est toujours obligatoire, les autres ne le sont pas.",
      "b": "Le vaccin contre la rage et le vaccin contre la piroplasmose sont obligatoires pour les chiens catégorisés.",
      "c": "Le vaccin contre la rage est obligatoire pour les voyages à l'étranger.",
      "d": "Si un chien non catégorisé n'est pas amené à voyager à l'étranger, aucun vaccin n'est obligatoire.",
      "e": "Le vaccin contre l'herpès virose est obligatoire pour les femelles gestantes."
    }
  },
  {
    "id": "chien_166",
    "theme": "chiens",
    "n": 166,
    "q": "Selon l'OIE, quelles affirmations représentent des libertés fondamentales des animaux ?",
    "c": {
      "a": "Vivre en l'absence de faim, de soif ou de malnutrition.",
      "b": "Vivre au sein d'un groupe social en accord avec leur espèce.",
      "c": "Vivre en l'absence de peur ou de détresse.",
      "d": "Avoir la liberté d'exercer des comportements normaux propres à leur espèce.",
      "e": "Vivre de manière à être protégé des climats extrêmes."
    }
  },
  {
    "id": "chien_167",
    "theme": "chiens",
    "n": 167,
    "q": "Quelles sont les affirmations correctes concernant l'atrophie rétinienne ?",
    "c": {
      "a": "C'est un vice rédhibitoire qui ne concerne que les animaux de plus de 6 mois.",
      "b": "C'est une maladie virale.",
      "c": "C'est une maladie bactérienne.",
      "d": "Il n'existe pas de vaccin.",
      "e": "C'est un vice rédhibitoire dont le délai de suspicion n'est pas fixé."
    }
  },
  {
    "id": "chien_168",
    "theme": "chiens",
    "n": 168,
    "q": "À quelles étapes du développement du chien l'ouverture des yeux correspondent-elles ?",
    "c": {
      "a": "Au début de la période de transition.",
      "b": "À la fin de la période néonatale.",
      "c": "Au début de la période de sociabilisation.",
      "d": "À la fin de la période de transition.",
      "e": "À la fin de la période de sociabilisation."
    }
  },
  {
    "id": "chien_169",
    "theme": "chiens",
    "n": 169,
    "q": "Quelles sont les affirmations correctes concernant le régime alimentaire du chien ?",
    "c": {
      "a": "Le chien est une espèce strictement carnivore.",
      "b": "Le chien est une espèce carnivore à tendance omnivore.",
      "c": "Un tiers de son alimentation doit être composé de protéines.",
      "d": "Un tiers de son alimentation doit être composé de glucides.",
      "e": "Le chien est une espèce omnivore."
    }
  },
  {
    "id": "chien_170",
    "theme": "chiens",
    "n": 170,
    "q": "Comment peut-on apprendre la marche en laisse à un chiot ?",
    "c": {
      "a": "Commencer de préférence par un trajet régulier avant de le modifier.",
      "b": "Toujours garder la même vitesse de marche les premières semaines d'apprentissage.",
      "c": "Préférer les colliers qui sont plus adaptés que les harnais pour les chiots."
    }
  },
  {
    "id": "chien_171",
    "theme": "chiens",
    "n": 171,
    "q": "Quelles sont les affirmations correctes concernant la prophylaxie sanitaire ?",
    "c": {
      "a": "Elle décrit la fréquence et le mode opératoire de nettoyage et de désinfection.",
      "b": "Elle a pour but d'obtenir un bon équilibre de microbisme ambiant afin de préserver la santé des animaux.",
      "c": "C'est une action sanitaire visant l'élimination de micro-organismes potentiellement dangereux pour la santé des animaux.",
      "d": "C'est la totalité des pratiques d'hygiène exercées au sein d'un établissement.",
      "e": "C'est une technique de raisonnement des déplacements au sein de locaux ayant pour but de limiter les risques de contaminations croisées."
    }
  },
  {
    "id": "chien_172",
    "theme": "chiens",
    "n": 172,
    "q": "Quelles sont les affirmations correctes concernant le comportement de soumission chez le chien ?",
    "c": {
      "a": "Il n'existe pas vraiment de comportement de soumission chez le chien.",
      "b": "Il peut être observé lorsqu'un chien est face à un individu agressif.",
      "c": "La tête et le regard sont souvent détournés et les oreilles sont rabattues vers l'arrière.",
      "d": "Les oreilles sont rabattues vers l'avant, le museau est froncé et les babines retroussées."
    }
  },
  {
    "id": "chien_173",
    "theme": "chiens",
    "n": 173,
    "q": "Combien existe-t-il de types d'inscription pour l'obtention d'un pédigrée canin ?",
    "c": {
      "a": "1 type d'inscription.",
      "b": "2 types d'inscription.",
      "c": "3 types d'inscription.",
      "d": "4 types d'inscription.",
      "e": "5 types d'inscription."
    }
  },
  {
    "id": "chien_174",
    "theme": "chiens",
    "n": 174,
    "q": "Quand un chien peut-il être considéré en surpoids ?",
    "c": {
      "a": "Quand son poids est au moins 40% supérieur à son poids optimal.",
      "b": "Quand seules les deux dernières côtes flottantes sont visibles.",
      "c": "Quand ses os sont difficilement palpables.",
      "d": "Quand le pli abdominal n'est pas discernable."
    }
  },
  {
    "id": "chien_175",
    "theme": "chiens",
    "n": 175,
    "q": "Quelles sont les affirmations correctes concernant un chien adulte causant des dégâts lorsqu'il est laissé seul ?",
    "c": {
      "a": "C'est peut-être un signe d'un trouble du développement.",
      "b": "C'est un symptôme du syndrome de privation sensorielle.",
      "c": "C'est peut-être un signe que le chien a mal été sevré."
    }
  },
  {
    "id": "chien_176",
    "theme": "chiens",
    "n": 176,
    "q": "Par quels moyens peut-on généralement vérifier qu'un animal reçoit un apport nutritionnel qui lui est adapté ?",
    "c": {
      "a": "L'appétit de l'animal.",
      "b": "L'aspect des selles.",
      "c": "L'état de la peau et du pelage.",
      "d": "La qualité du sommeil de l'animal.",
      "e": "Le poids de l'animal."
    }
  },
  {
    "id": "chien_177",
    "theme": "chiens",
    "n": 177,
    "q": "Quelle est l'affirmation correcte dans le cas où une personne donne son chien adulte à un ami ?",
    "c": {
      "a": "L'adoptant doit mettre à jour les données d'identification de l'animal.",
      "b": "Le donneur doit avoir un numéro de SIREN.",
      "c": "Le donneur n'est pas tenu de fournir une attestation de cession."
    }
  },
  {
    "id": "chien_178",
    "theme": "chiens",
    "n": 178,
    "q": "Quelles sont les affirmations correctes concernant le logement du chien en refuge ?",
    "c": {
      "a": "Les chiens doivent être isolés des uns des autres autant que possible pour éviter les conflits et la propagation de maladies.",
      "b": "Les chiens doivent avoir accès à une zone extérieure seulement si la surface de leur boxe est inférieure à 5m².",
      "c": "Les chiens doivent toujours avoir accès à une aire extérieure.",
      "d": "La surface minimale des enclos par chien de -70cm au garrot est de 5 m2.",
      "e": "La surface minimale des enclos par chien de +70cm au garrot est de 15 m2."
    }
  },
  {
    "id": "chien_179",
    "theme": "chiens",
    "n": 179,
    "q": "Quelles sont des sous-catégories du groupe 10 de races canines ?",
    "c": {
      "a": "Chiens nus.",
      "b": "Lévriers à poil dur.",
      "c": "Lévriers à poil court.",
      "d": "Molossoïdes de petite taille.",
      "e": "Lévriers à poil ras."
    }
  },
  {
    "id": "chien_180",
    "theme": "chiens",
    "n": 180,
    "q": "Quelles sont les affirmations correctes concernant le syndrome de privation sensorielle ?",
    "c": {
      "a": "Les symptômes sont une hyperactivité constante et une difficulté à se trouver seul.",
      "b": "Il peut être causé par un mauvais sevrage alimentaire.",
      "c": "Il peut être causé par un manque de stimuli pendant la période juvénile du chien.",
      "d": "Il cause des phobies extrêmes face à des événements du quotidien.",
      "e": "Il est facile à traiter chez le chien adulte."
    }
  },
  {
    "id": "chien_181",
    "theme": "chiens",
    "n": 181,
    "q": "Qu'est-ce qu'une zoonose ?",
    "c": {
      "a": "Une maladie transmissible entre l'homme et l'animal.",
      "b": "Une maladie transmissible entre des animaux de races différentes.",
      "c": "Une maladie transmissible entre des animaux de la même espèce."
    }
  },
  {
    "id": "chien_182",
    "theme": "chiens",
    "n": 182,
    "q": "Selon la classification de Jean-Pierre Mégnin, quel est le morphotype d'un chien trapu et massif avec un cou court, de longues et épaisses babines et des oreilles courtes et tombantes ?",
    "c": {
      "a": "Molossoïde.",
      "b": "Braccoïde.",
      "c": "Lupoïde.",
      "d": "Graïoïde."
    }
  },
  {
    "id": "chien_183",
    "theme": "chiens",
    "n": 183,
    "q": "Quelles sont les affirmations correctes concernant la photopériode ?",
    "c": {
      "a": "Elle influe sur le système hormonal du chien.",
      "b": "Elle peut être contrôlée avec des sources de lumière artificielles.",
      "c": "La durée d'éclairage quotidien doit être de 12 à 14 heures.",
      "d": "La durée d'éclairage ne doit pas forcément être continue tant que l'on respecte la durée nécessaire par jour.",
      "e": "Elle doit obligatoirement être contrôlée par une source de lumière naturelle."
    }
  },
  {
    "id": "chien_184",
    "theme": "chiens",
    "n": 184,
    "q": "Quelles sont les affirmations correctes concernant l'herpèsvirose canine ?",
    "c": {
      "a": "Elle peut être évitée grâce à un vaccin à administrer aux jeunes chiots.",
      "b": "Elle n'est pas très grave chez les adultes.",
      "c": "Elle peut causer la mort des fœtus.",
      "d": "Il n'existe pas de vaccin pour les chiens."
    }
  },
  {
    "id": "chien_185",
    "theme": "chiens",
    "n": 185,
    "q": "Qui est tenu de faire identifier un chien lors d'une cession ?",
    "c": {
      "a": "S'il s'agit d'une cession à titre gratuit, l'adoptant doit faire identifier le chien.",
      "b": "S'il s'agit d'une vente, le vendeur doit faire identifier le chien, sauf s'il s'agit d'un refuge auquel cas l'adoptant doit faire identifier le chien.",
      "c": "S'il s'agit d'une cession à titre gratuit, le donneur doit faire identifier le chien, qu'il s'agisse d'un particulier ou d'un professionnel."
    }
  },
  {
    "id": "chien_186",
    "theme": "chiens",
    "n": 186,
    "q": "Quelles sont les affirmations correctes concernant le plan de nettoyage ?",
    "c": {
      "a": "Il est obligatoire pour tous les établissements quel que soit l'effectif.",
      "b": "Il détaille les durées de périodes d'isolement pour les animaux entrants.",
      "c": "Il fait partie du règlement sanitaire.",
      "d": "Il indique les responsables des opérations de nettoyage et de désinfection.",
      "e": "Il ne concerne que les établissements hébergeant des carnivores domestiques."
    }
  },
  {
    "id": "chien_187",
    "theme": "chiens",
    "n": 187,
    "q": "Pour une hydratation idéale, combien d'eau un chien doit-il consommer par kilo et par jour ?",
    "c": {
      "a": "10 à 20 ml.",
      "b": "30 à 40 ml.",
      "c": "50 à 70 ml.",
      "d": "100 à 110 ml.",
      "e": "150 à 200 ml."
    }
  },
  {
    "id": "chien_188",
    "theme": "chiens",
    "n": 188,
    "q": "Quelles sont les affirmations correctes concernant la vermifugation du chien adulte ?",
    "c": {
      "a": "Un chien doit être traité tous les mois.",
      "b": "Un chien doit être traité en moyenne tous les 3 à 6 mois, selon ses besoins.",
      "c": "Une chienne gestante ne doit jamais être traitée car le produit peut causer des problèmes pour les fœtus.",
      "d": "Un chien doit être traité tous les ans.",
      "e": "Tous les animaux au sein d'un même foyer doivent être traités."
    }
  },
  {
    "id": "chien_189",
    "theme": "chiens",
    "n": 189,
    "q": "Quelles sont les affirmations correctes concernant les normes d'un enclos canin ?",
    "c": {
      "a": "Il doit être de 10m² au minimum.",
      "b": "Le sol doit être lisse et plat.",
      "c": "Il doit contenir une couchette.",
      "d": "Il doit contenir des jouets.",
      "e": "Il doit être de 2m de haut au minimum."
    }
  },
  {
    "id": "chien_190",
    "theme": "chiens",
    "n": 190,
    "q": "À quel morphotype le Pékinois appartient-il ?",
    "c": {
      "a": "Au type brachymorphe.",
      "b": "Au type médioligne.",
      "c": "Au type longiligne.",
      "d": "Au type bréviligne.",
      "e": "Au type braccoïde."
    }
  },
  {
    "id": "chien_191",
    "theme": "chiens",
    "n": 191,
    "q": "Quelles sont les affirmations correctes concernant le transport ?",
    "c": {
      "a": "Les carnivores domestiques doivent être vaccinés contre la rage pour tout transport à l'international.",
      "b": "Un transport de courte durée désigne tout voyage de moins de 65 km.",
      "c": "Un chien transporté à titre commercial doit être abreuvé au minimum toutes les 12 heures.",
      "d": "Un furet transporté à titre commercial doit être nourri au minimum toutes les 24 heures.",
      "e": "La présence du transporteur est requise sur tout transport commercial de longue durée."
    }
  },
  {
    "id": "chien_192",
    "theme": "chiens",
    "n": 192,
    "q": "Quelles sont les affirmations correctes concernant la période de transition chez le chiot ?",
    "c": {
      "a": "Elle se déroule de la deuxième à la huitième semaine.",
      "b": "Elle précède la période de socialisation.",
      "c": "C'est la période pendant laquelle les premières dents du chien apparaissent.",
      "d": "Elle débute lorsque le chien peut se tenir debout de manière stable."
    }
  },
  {
    "id": "chien_193",
    "theme": "chiens",
    "n": 193,
    "q": "Quelles sont les affirmations correctes concernant le colostrum ?",
    "c": {
      "a": "Il est riche en anticorps.",
      "b": "Il permet de diminuer les risques d'éclampsie.",
      "c": "Il doit être consommé par les petits dès la naissance.",
      "d": "La femelle ne le produit que pendant 24 à 72 heures après la mise bas.",
      "e": "L'organisme des chiots ne l'assimile plus 48 heures après leur naissance."
    }
  },
  {
    "id": "chien_194",
    "theme": "chiens",
    "n": 194,
    "q": "Quelles sont les affirmations correctes concernant la température dans un élevage ?",
    "c": {
      "a": "Les chiens adultes supportent mieux les températures basses que les températures trop hautes.",
      "b": "Les chiens adultes supportent mieux les hautes températures que les températures basses.",
      "c": "Le nid des nouveau-nés doit être chauffé à au moins 20°C.",
      "d": "La température idéale pour les chiens adultes est de 15 à 20°C.",
      "e": "La température influe sur les prises de nourriture."
    }
  },
  {
    "id": "chien_195",
    "theme": "chiens",
    "n": 195,
    "q": "Que peuvent signifier des muqueuses blanches chez le chien ?",
    "c": {
      "a": "Une anémie.",
      "b": "Des troubles hépatiques.",
      "c": "Une infection.",
      "d": "Une hypoxémie."
    }
  },
  {
    "id": "chien_196",
    "theme": "chiens",
    "n": 196,
    "q": "Quelles sont les affirmations correctes concernant les emballages de nourriture industrielle ?",
    "c": {
      "a": "La composition des aliments doit lister les ingrédients par ordre d'importance après cuisson.",
      "b": "Les lipides sont des constituants analytiques.",
      "c": "Les cendres brutes correspondent aux minéraux restants après la combustion d'un aliment.",
      "d": "Les fibres sont considérées comme une matière première.",
      "e": "Les protéines brutes sont des composants analytiques."
    }
  },
  {
    "id": "chien_197",
    "theme": "chiens",
    "n": 197,
    "q": "Quelles races de chiens sont dites « mésocéphales » ?",
    "c": {
      "a": "Le Colley.",
      "b": "L'Épagneul Breton.",
      "c": "Le Carlin.",
      "d": "Le Malinois.",
      "e": "Le lévrier."
    }
  },
  {
    "id": "chien_198",
    "theme": "chiens",
    "n": 198,
    "q": "Quelle est la cause possible d'un chien adulte destructeur et constamment hyperactif ?",
    "c": {
      "a": "C'est forcément un signe d'un mauvais développement.",
      "b": "Cela peut être un symptôme d'anxiété de séparation.",
      "c": "Cela peut être un symptôme du syndrome Hs-Ha."
    }
  },
  {
    "id": "chien_199",
    "theme": "chiens",
    "n": 199,
    "q": "Quelle est l'affirmation correcte dans le cas où une personne vend un chien à un ami ?",
    "c": {
      "a": "Le vendeur n'est pas tenu de fournir le carnet de santé de l'animal.",
      "b": "L'animal doit être âgé de 12 semaines au minimum.",
      "c": "Le vendeur doit obligatoirement demander des arrhes."
    }
  },
  {
    "id": "chien_200",
    "theme": "chiens",
    "n": 200,
    "q": "Quelles sont les affirmations correctes concernant les tiques ?",
    "c": {
      "a": "Ce sont des endoparasites.",
      "b": "Ce sont des ectoparasites.",
      "c": "Elles sont vecteurs de la dirofilariose chez le chien.",
      "d": "Elles sont des vecteurs de la maladie de Lyme chez le chien."
    }
  },
  {
    "id": "chien_201",
    "theme": "chiens",
    "n": 201,
    "q": "Comment peut-on définir une race ?",
    "c": {
      "a": "Un ensemble d'individus ayant la même origine.",
      "b": "Un ensemble d'individus partageant les mêmes caractères morphologiques.",
      "c": "Un ensemble d'individus pouvant à l'origine se reproduire entre eux."
    }
  },
  {
    "id": "chien_202",
    "theme": "chiens",
    "n": 202,
    "q": "Quelles sont les affirmations correctes concernant le Pitbulls ?",
    "c": {
      "a": "Ce sont des chiens d'apparence de race American Staffordshire Terrier.",
      "b": "Ce sont des chiens d'apparence de race Mastiff.",
      "c": "Ce ne sont pas des chiens de race.",
      "d": "Ce sont des chiens de catégorie 1.",
      "e": "Ce sont des chiens de catégorie 2."
    }
  },
  {
    "id": "chien_203",
    "theme": "chiens",
    "n": 203,
    "q": "Quelles sont les affirmations correctes concernant l'interoestrus chez le chien ?",
    "c": {
      "a": "C'est la période de repos sexuel hors saison sexuelle.",
      "b": "C'est la période de repos sexuel en saison sexuelle.",
      "c": "Elle dure environ 6 mois chez le chien.",
      "d": "Elle dure environ 2 mois chez le chien."
    }
  },
  {
    "id": "chien_204",
    "theme": "chiens",
    "n": 204,
    "q": "Quelle affirmation est un type d'inscription pour l'obtention d'un pédigrée chez le chien ?",
    "c": {
      "a": "Inscription au titre des collatéraux.",
      "b": "Inscription à titre personnel.",
      "c": "Inscription à titre individuel.",
      "d": "Inscription au titre des origines.",
      "e": "Inscription au livre d'attente."
    }
  },
  {
    "id": "chien_205",
    "theme": "chiens",
    "n": 205,
    "q": "Comment le chien communique-t-il avec d'autres chiens ?",
    "c": {
      "a": "Grâce aux phéromones.",
      "b": "Grâce aux sons.",
      "c": "Grâce aux odeurs.",
      "d": "Grâce au langage corporel."
    }
  },
  {
    "id": "chien_206",
    "theme": "chiens",
    "n": 206,
    "q": "Quelles sont les affirmations correctes concernant les actions de nettoyage et de désinfection ?",
    "c": {
      "a": "Toutes les surfaces en contact avec les animaux doivent être nettoyées et désinfectées au minimum 1 fois par jour.",
      "b": "Un lot d'équipement de nettoyage peut être utilisé dans tous les locaux d'une structure tant qu'il est remplacé de manière hebdomadaire.",
      "c": "Le nettoyage s'effectue toujours avant la désinfection.",
      "d": "Le nettoyage permet d'éliminer les micro-organismes invisibles à l'œil nu.",
      "e": "Le nettoyage permet l'élimination les souillures d'origine organique ou minérale."
    }
  },
  {
    "id": "chien_207",
    "theme": "chiens",
    "n": 207,
    "q": "Quand les chiots doivent-ils être vermifugés ?",
    "c": {
      "a": "Tous les 15 jours jusqu'à la puberté.",
      "b": "Tous les mois pour les chiots de 2 à 6 mois.",
      "c": "Tous les 3 mois pour les chiots de 3 à 5 mois.",
      "d": "Toutes les 3 semaines pour les chiots de 6 à 12 mois."
    }
  },
  {
    "id": "chien_208",
    "theme": "chiens",
    "n": 208,
    "q": "À quelle période la fécondation de l'ovule se passe-t-elle chez la chienne ?",
    "c": {
      "a": "Durant la période d'oestrus.",
      "b": "Durant toute la période des chaleurs.",
      "c": "Durant la période d'anoestrus."
    }
  },
  {
    "id": "chien_209",
    "theme": "chiens",
    "n": 209,
    "q": "Quelle période de développement de la vie du chiot se déroule entre sa deuxième et troisième semaine de vie ?",
    "c": {
      "a": "C'est la période de socialisation.",
      "b": "C'est la période d'imprégnation.",
      "c": "C'est la période de transition."
    }
  },
  {
    "id": "chien_210",
    "theme": "chiens",
    "n": 210,
    "q": "Vers quel âge un chien de petite race atteint-il généralement la puberté ?",
    "c": {
      "a": "Vers 4 mois.",
      "b": "Vers 6 mois.",
      "c": "Vers 8 à 10 mois."
    }
  },
  {
    "id": "chien_211",
    "theme": "chiens",
    "n": 211,
    "q": "Quelles maladies sont catégorisées ?",
    "c": {
      "a": "La tularémie.",
      "b": "L'herpèsvirose de la carpe Koï.",
      "c": "La chlamydiose.",
      "d": "Le botulisme.",
      "e": "La maladie de Lyme."
    }
  },
  {
    "id": "chien_212",
    "theme": "chiens",
    "n": 212,
    "q": "Quelles sont les affirmations correctes concernant l'évaluation comportementale des chiens catégorisés ?",
    "c": {
      "a": "Elle est obligatoire pour les chiens catégorisés à partir de 12 mois.",
      "b": "Elle permet d'évaluer la catégorie du chien (catégorie 1 ou 2).",
      "c": "Elle permet d'évaluer le niveau de dangerosité du chien.",
      "d": "L'intervalle de renouvellement dépend du niveau de dangerosité du chien.",
      "e": "L'intervalle de renouvellement dépend de la catégorie du chien (catégorie 1 ou 2)."
    }
  },
  {
    "id": "chien_213",
    "theme": "chiens",
    "n": 213,
    "q": "Quel amende risque un individu qui possède un chien non identifié ?",
    "c": {
      "a": "150 €.",
      "b": "750 €.",
      "c": "1000 €.",
      "d": "Il ne risque aucune amende."
    }
  },
  {
    "id": "chien_214",
    "theme": "chiens",
    "n": 214,
    "q": "Quand et comment une gestation peut-elle être diagnostiquée chez la chienne ?",
    "c": {
      "a": "Par échographie vers le 45ème jour de gestation.",
      "b": "Par échographie vers le 25ème jour de gestation.",
      "c": "Par palpation abdominale vers le 10ème jour de gestation.",
      "d": "Par palpation abdominale vers le 20ème jour de gestation."
    }
  },
  {
    "id": "chien_215",
    "theme": "chiens",
    "n": 215,
    "q": "Quelles sont les affirmations correctes concernant la parvovirose ?",
    "c": {
      "a": "Ce n'est pas une zoonose.",
      "b": "Un vaccin peut être administré dès 12 semaines.",
      "c": "C'est un danger sanitaire.",
      "d": "Elle touche tous les carnivores domestiques.",
      "e": "Elle cause une gastro-entérite hémorragique et de la fièvre."
    }
  },
  {
    "id": "chien_216",
    "theme": "chiens",
    "n": 216,
    "q": "Quelle est la teneur en bœuf d'un aliment pour furet appelé « Miam Furet bœuf » ?",
    "c": {
      "a": "Moins de 4% de bœuf.",
      "b": "Plus de 26% de bœuf.",
      "c": "Entre 14% et 26% de bœuf.",
      "d": "100% de bœuf.",
      "e": "Entre 4% et 14% de bœuf."
    }
  },
  {
    "id": "chien_217",
    "theme": "chiens",
    "n": 217,
    "q": "Quel est le délai de suspicion pour la parvovirose ?",
    "c": {
      "a": "Il n'y en a pas, car ce n'est pas un vice rédhibitoire.",
      "b": "Il n'y en a pas, car c'est une maladie génétique.",
      "c": "5 jours.",
      "d": "6 jours.",
      "e": "8 jours."
    }
  },
  {
    "id": "chien_218",
    "theme": "chiens",
    "n": 218,
    "q": "Quelles sont les affirmations correctes concernant la période de développement dite « de socialisation » ? (CHAT-tronc commun)",
    "c": {
      "a": "Elle s'étend de la troisième à la douzième semaine de vie du chiot.",
      "b": "Elle s'étend de la deuxième à la huitième semaine de vie du chiot.",
      "c": "C'est la période pendant laquelle le chiot est sevré au niveau alimentaire.",
      "d": "Elle débute avec l'ouverture des oreilles."
    }
  },
  {
    "id": "chien_219",
    "theme": "chiens",
    "n": 219,
    "q": "Quelles sont les affirmations correctes concernant la période durant laquelle la chienne accepte l'accouplement ?",
    "c": {
      "a": "C'est la période des chaleurs.",
      "b": "C'est une période qui dure de 2 à 4 jours.",
      "c": "C'est une période qui dure de 3 à 21 jours.",
      "d": "C'est la période appelée dioestrus."
    }
  },
  {
    "id": "chien_220",
    "theme": "chiens",
    "n": 220,
    "q": "De combien d'os le crâne du chien est-il composé ?",
    "c": {
      "a": "5 os.",
      "b": "7 os.",
      "c": "9 os.",
      "d": "11 os.",
      "e": "12 os."
    }
  },
  {
    "id": "chien_221",
    "theme": "chiens",
    "n": 221,
    "q": "Comment les locaux d'un refuge doivent-ils être conçus ?",
    "c": {
      "a": "Pour limiter les nuisances sonores.",
      "b": "Pour permettre au public d'interagir facilement avec les animaux en vue d'une adoption éventuelle.",
      "c": "Pour maîtriser les reproductions.",
      "d": "Pour faciliter les opérations de nettoyage.",
      "e": "Pour permettre autant d'interactions sociales inter-spécifiques que possible pour le bien-être des animaux."
    }
  },
  {
    "id": "chien_222",
    "theme": "chiens",
    "n": 222,
    "q": "Quelle est l'affirmation correcte concernant l'accès aux transports en commun aux chiens catégorisés ?",
    "c": {
      "a": "Il est interdit pour tous les chiens catégorisés.",
      "b": "Il est interdit pour les chiens de catégorie 1.",
      "c": "Il est interdit pour les chiens de catégorie 2.",
      "d": "Il est autorisé avec le port de la laisse et de la muselière pour tous les chiens catégorisés."
    }
  },
  {
    "id": "chien_223",
    "theme": "chiens",
    "n": 223,
    "q": "Quelle est l'affirmation correcte concernant l'intoxication alimentaire chez le chien ?",
    "c": {
      "a": "Il faut faire vomir le chien.",
      "b": "Il n'y a souvent aucun symptôme.",
      "c": "Il faut garder le chien à jeun pendant 24 heures puis l'emmener chez le vétérinaire.",
      "d": "Il faut contacter le centre antipoison si possible."
    }
  },
  {
    "id": "chien_224",
    "theme": "chiens",
    "n": 224,
    "q": "Qu'est-ce que l'accolement ?",
    "c": {
      "a": "C'est une phase de l'accouplement chez le chien.",
      "b": "Il peut durer jusqu'à 30 minutes.",
      "c": "Il faut souvent aider les partenaires à se séparer pour éviter une fracture de l'os pénien."
    }
  },
  {
    "id": "chien_225",
    "theme": "chiens",
    "n": 225,
    "q": "Quelles races de chiens possèdent un profil convexiligne ?",
    "c": {
      "a": "Le Husky.",
      "b": "Le Bedlington Terrier.",
      "c": "Le Bouledogue français.",
      "d": "Le Bull Terrier.",
      "e": "Le Berger Allemand."
    }
  },
  {
    "id": "chat_1",
    "theme": "chats",
    "n": 1,
    "q": "Pour une vente, dans quels cas un vendeur doit-il avoir un numéro SIREN ?",
    "c": {
      "a": "Dès une première portée en pure race.",
      "b": "Dès une deuxième portée en pure race.",
      "c": "Dès une première portée non racée.",
      "d": "Dès une deuxième portée non racée."
    }
  },
  {
    "id": "chat_2",
    "theme": "chats",
    "n": 2,
    "q": "Quelle est l'affirmation correcte concernant un chat en divagation ayant été saisi par la fourrière ?",
    "c": {
      "a": "Un chat en divagation ayant été saisi par les services de la fourrière ne pourra jamais être proposé à l'adoption dans un refuge s'il est identifié.",
      "b": "Un chat identifié et en divagation ayant été saisi par les services de la fourrière pourra être proposé à l'adoption dans un refuge si ses maîtres ne se manifestent pas sous 5 jours ouvrés.",
      "c": "Un chat non identifié et en divagation ayant été saisi par les services de la fourrière pourra être proposé à l'adoption dans un refuge si ses maîtres ne se manifestent pas sous 8 jours ouvrés."
    }
  },
  {
    "id": "chat_3",
    "theme": "chats",
    "n": 3,
    "q": "Quelle est l'affirmation correcte concernant le FIV ?",
    "c": {
      "a": "C'est une maladie bactérienne.",
      "b": "C'est un vice rédhibitoire dont le délai de suspicion est de 5 jours.",
      "c": "C'est un vice rédhibitoire dont le délai de suspicion n'est pas fixé."
    }
  },
  {
    "id": "chat_4",
    "theme": "chats",
    "n": 4,
    "q": "Quelles sont les affirmations correctes concernant les normes de logement pour le chat ?",
    "c": {
      "a": "Les chatons non sevrés peuvent cohabiter avec leur mère sur une surface de 2m².",
      "b": "Les chatons non sevrés doivent cohabiter avec leur mère sur une surface de 2m² + 1m² par chaton.",
      "c": "Les chatons de plus de 8 semaines peuvent cohabiter avec leur mère sur une surface de 2m².",
      "d": "Les chatons de 2 semaines doivent cohabiter avec leur mère sur une surface de 2m² + 1m² par chaton.",
      "e": "Les chatons de 3 semaines peuvent cohabiter avec leur mère sur une surface de 2m²."
    }
  },
  {
    "id": "chat_5",
    "theme": "chats",
    "n": 5,
    "q": "Vers quel âge le chat atteint-il la maturité sexuelle ?",
    "c": {
      "a": "La femelle et le mâle atteignent la puberté vers 6 à 8 mois.",
      "b": "Le mâle atteint la puberté vers 8 à 10 mois.",
      "c": "La femelle atteint la puberté vers 10 à 12 mois."
    }
  },
  {
    "id": "chat_6",
    "theme": "chats",
    "n": 6,
    "q": "Quel secteur n'est pas obligatoire pour refuge ?",
    "c": {
      "a": "Un local pour les sains et sevrés.",
      "b": "Une maternité.",
      "c": "Une infirmerie.",
      "d": "Un local d'isolement."
    }
  },
  {
    "id": "chat_7",
    "theme": "chats",
    "n": 7,
    "q": "Quelles sont les affirmations correctes concernant l'identification du chat ?",
    "c": {
      "a": "En dehors d'une cession, d'un voyage ou d'une demande de pédigrée, l'identification du chat n'est pas obligatoire.",
      "b": "Les propriétaires de chats nés en 2020 doivent toujours les faire identifier une fois que l'animal a atteint un certain âge.",
      "c": "Un chat de race doit être identifié dans les deux semaines suivant sa naissance pour obtenir son pédigrée."
    }
  },
  {
    "id": "chat_8",
    "theme": "chats",
    "n": 8,
    "q": "Quelles sont les affirmations correctes concernant la dentition du chat ?",
    "c": {
      "a": "Les prémolaires et les molaires n'apparaissent qu'en dents définitives.",
      "b": "Les incisives et les canines définitives apparaissent en même temps.",
      "c": "Les molaires définitives apparaissent vers 4 à 5 mois.",
      "d": "À 5 mois, les canines et incisives définitives sont généralement en place.",
      "e": "Les prémolaires sont les dernières dents définitives à apparaître."
    }
  },
  {
    "id": "chat_9",
    "theme": "chats",
    "n": 9,
    "q": "Quel est le morphotype d'un chat au corps massif, aux membres courts, à la tête ronde et la face écrasée ?",
    "c": {
      "a": "Le type bréviligne.",
      "b": "Le type brachymorphe.",
      "c": "Le type molossoïde.",
      "d": "Le type cobby."
    }
  },
  {
    "id": "chat_10",
    "theme": "chats",
    "n": 10,
    "q": "Comment peut-on diagnostiquer une gestation chez la chatte ?",
    "c": {
      "a": "Par échographie, dès le 10ème jour de grossesse.",
      "b": "Par échographie, dès le 45ème jour de grossesse.",
      "c": "Par échographie, dès le 25ème jour de grossesse.",
      "d": "Par radiographie, dès le 25ème jour de grossesse.",
      "e": "Par radiographie, dès le 40ème jour de grossesse."
    }
  },
  {
    "id": "chat_11",
    "theme": "chats",
    "n": 11,
    "q": "Quelles sont les affirmations correctes concernant la ration ménagère ?",
    "c": {
      "a": "C'est la ration quotidienne d'aliments et de boisson.",
      "b": "Elle permet d'offrir des aliments plus appétents et de meilleure qualité.",
      "c": "Elle permet souvent un meilleur équilibre alimentaire.",
      "d": "C'est la nourriture faite maison à partir d'aliments frais.",
      "e": "Elle limite davantage les problèmes buccodentaires que les croquettes industrielles."
    }
  },
  {
    "id": "chat_12",
    "theme": "chats",
    "n": 12,
    "q": "Quelles sont les affirmations correctes concernant les robes de chats ?",
    "c": {
      "a": "Les robes écailles de tortue et calico sont des robes dites « bicolores ».",
      "b": "Le mink, le sépia et le tortie sont des appellations de robes félines.",
      "c": "Les robes dont les patrons sont à mi-chemin entre le solide et le colourpoint sont des robes dites « tabby ».",
      "d": "Le van, le bicolore et l'arlequin sont des exemples de robes dites « tabby ».",
      "e": "Certaines robes n'existent que pour des races spécifiques."
    }
  },
  {
    "id": "chat_13",
    "theme": "chats",
    "n": 13,
    "q": "Quel comportement un chat recroquevillé avec la queue cachée entre ses pattes arrière affiche-t-il ?",
    "c": {
      "a": "Un comportement de douleur.",
      "b": "Un comportement d'agressivité offensive.",
      "c": "Un comportement d'agressivité défensive."
    }
  },
  {
    "id": "chat_14",
    "theme": "chats",
    "n": 14,
    "q": "Quelle est l'affirmation correcte concernant les normes de logement pour les chatons de plus de 8 semaines, dans des établissements de vente et à titre dérogatoire ?",
    "c": {
      "a": "Les chatons de plus de 8 semaines peuvent être logés avec leur mère sur une surface de 1.5m².",
      "b": "Les chatons de plus de 8 semaines peuvent être logés sans leur mère sur une surface de 1m².",
      "c": "Les chatons de plus de 8 semaines doivent être logés sans leur mère sur une surface de 2m²."
    }
  },
  {
    "id": "chat_15",
    "theme": "chats",
    "n": 15,
    "q": "Quelle est la durée moyenne des chaleurs chez la chatte ?",
    "c": {
      "a": "5 à 7 jours.",
      "b": "7 à 12 jours.",
      "c": "14 à 30 jours."
    }
  },
  {
    "id": "chat_16",
    "theme": "chats",
    "n": 16,
    "q": "Qui peut faire appel à la fourrière pour la saisie d'un animal ?",
    "c": {
      "a": "Un particulier, s'il a aperçu un animal inconnu sur son propre terrain.",
      "b": "Le maire, s'il a aperçu un animal errant sur sa commune.",
      "c": "Un particulier, s'il a été mordu par un chien inconnu sur son propre terrain.",
      "d": "La police, à la suite d'une plainte d'un particulier ayant été mordu par un chien sur la voie publique.",
      "e": "Un gendarme, s'il a aperçu un animal errant."
    }
  },
  {
    "id": "chat_17",
    "theme": "chats",
    "n": 17,
    "q": "Dans un élevage, à partir de quel âge un chaton peut-il être séparé de sa mère ?",
    "c": {
      "a": "6 semaines.",
      "b": "8 semaines.",
      "c": "12 semaines."
    }
  },
  {
    "id": "chat_18",
    "theme": "chats",
    "n": 18,
    "q": "Quelles sont les affirmations correctes concernant l'espérance de vie du chat ?",
    "c": {
      "a": "Les chats sauvages vivent souvent plus longtemps que les chats domestiques.",
      "b": "La stérilisation influe sur l'espérance de vie du chat.",
      "c": "Les chats errants ont une espérance de vie d'environ 6 à 10 ans.",
      "d": "Les chats de races ont une espérance de vie plus courte que les chats croisés.",
      "e": "Les chats domestiques d'intérieur peuvent souvent vivre plus de 20 ans."
    }
  },
  {
    "id": "chat_19",
    "theme": "chats",
    "n": 19,
    "q": "Quelle est l'organisation sociale du chat ?",
    "c": {
      "a": "Le chat est un animal qui supporte très bien la solitude.",
      "b": "Les chats vivent en groupe à l'état sauvage.",
      "c": "Le chat est très territorial.",
      "d": "À l'état sauvage, les chats peuvent s'entendre en groupe de manière pacifique.",
      "e": "Le chat est un animal indépendant."
    }
  },
  {
    "id": "chat_20",
    "theme": "chats",
    "n": 20,
    "q": "Quelles sont les affirmations correctes concernant la péritonite infectieuse féline ?",
    "c": {
      "a": "C'est une zoonose.",
      "b": "C'est un vice rédhibitoire.",
      "c": "Un vaccin peut être administré vers 8 semaines.",
      "d": "Un vaccin peut être administré vers 12 semaines.",
      "e": "Sans traitement, elle est toujours mortelle dès l'apparition des symptômes."
    }
  },
  {
    "id": "chat_21",
    "theme": "chats",
    "n": 21,
    "q": "Quand le règlement sanitaire peut-il être révisé ?",
    "c": {
      "a": "1 fois par an, seulement pour toute activité n'accueillant pas plus de 10 chiens de plus de 4 mois.",
      "b": "2 fois par an pour un éleveur ne possédant que 5 reproducteurs de plus de 4 mois et 3 chats réformés.",
      "c": "2 fois par ans, pendant la visite sanitaire, pour tous les établissements."
    }
  },
  {
    "id": "chat_22",
    "theme": "chats",
    "n": 22,
    "q": "Quel organisme répertorie les standards et races de chats ?",
    "c": {
      "a": "Le Livre des Origines Français.",
      "b": "Le Livre des Origines Félines.",
      "c": "Le Livre Officiel des Origines Français.",
      "d": "Le Livre Officiel des Origines Félines."
    }
  },
  {
    "id": "chat_23",
    "theme": "chats",
    "n": 23,
    "q": "Quelle est l'affirmation correcte concernant le FELV ?",
    "c": {
      "a": "C'est un vice rédhibitoire et une maladie virale dont le délai de suspicion est de 15 jours.",
      "b": "C'est un vice rédhibitoire et une maladie bactérienne dont le délai de suspicion est de 15 jours.",
      "c": "C'est un vice rédhibitoire et une maladie virale dont le délai de rédhibition est de 15 jours.",
      "d": "C'est un vice rédhibitoire et une maladie bactérienne dont le délai de rédhibition est de 21 jours.",
      "e": "C'est un vice rédhibitoire et une maladie virale dont le délai de rédhibition est de 21 jours."
    }
  },
  {
    "id": "chat_24",
    "theme": "chats",
    "n": 24,
    "q": "En combien de caractères les races de chats sont-elles divisées ?",
    "c": {
      "a": "3.",
      "b": "5.",
      "c": "10."
    }
  },
  {
    "id": "chat_25",
    "theme": "chats",
    "n": 25,
    "q": "Quelles sont les informations correctes concernant la reproduction chez le chat ?",
    "c": {
      "a": "Les périodes d'activité sexuelle dépendent de la température.",
      "b": "La chatte ovule uniquement s'il y a accouplement.",
      "c": "Une chatte ne produit qu'un seul ovule par période de reproduction.",
      "d": "Une chatte peut être gestante de chatons issus de mâles différents.",
      "e": "Dans notre climat, les chaleurs se succèdent sans interruption."
    }
  },
  {
    "id": "chat_26",
    "theme": "chats",
    "n": 26,
    "q": "À partir de combien de jours la vaccination antirabique est-elle valable ?",
    "c": {
      "a": "7 jours.",
      "b": "15 jours.",
      "c": "21 jours.",
      "d": "28 jours."
    }
  },
  {
    "id": "chat_27",
    "theme": "chats",
    "n": 27,
    "q": "Quelles sont les affirmations correctes concernant la boisson chez le chat ?",
    "c": {
      "a": "Un chat consommant quotidiennement 60ml d'eau par kilo est à un niveau d'hydratation idéal.",
      "b": "Un chat domestique allant à l'extérieur peut consommer moins d'eau fraîche qu'un chat d'intérieur.",
      "c": "Il est inutile de proposer de l'eau à un chat qui se nourrit uniquement de pâtée.",
      "d": "Il est inutile de proposer de l'eau à un chat qui refuse de boire dans une gamelle."
    }
  },
  {
    "id": "chat_28",
    "theme": "chats",
    "n": 28,
    "q": "Quelles sont les affirmations correctes concernant les normes de logement pour le chat ?",
    "c": {
      "a": "Des plateformes en hauteur à différents niveaux sont obligatoires.",
      "b": "La surface des plateformes n'est pas comptabilisée dans la surface minimale obligatoire du boxe.",
      "c": "Sauf dérogation, les chats doivent toujours être logés seuls.",
      "d": "Les boxes de chats doivent toujours contenir une litière."
    }
  },
  {
    "id": "chat_29",
    "theme": "chats",
    "n": 29,
    "q": "Quelles étapes de développement du chaton se déroulent généralement entre la deuxième et la huitième semaine de vie ?",
    "c": {
      "a": "Le chaton atteint la maturité sexuelle.",
      "b": "Le chaton apprend la morsure inhibée.",
      "c": "Le chaton complète son sevrage alimentaire.",
      "d": "Le chaton complète son sevrage affectif.",
      "e": "Le chaton apprend l'élimination autonome."
    }
  },
  {
    "id": "chat_30",
    "theme": "chats",
    "n": 30,
    "q": "Quelles sont les informations correctes concernant la reproduction du chat ?",
    "c": {
      "a": "A partir de 8 ans, une chatte ne doit plus se reproduire.",
      "b": "Il est interdit de faire reproduire une chatte tout au long de sa vie.",
      "c": "Une chatte ayant subi 3 césariennes dans sa vie ne doit plus se reproduire.",
      "d": "Une chatte de 6 mois peut être mise à la reproduction.",
      "e": "La reproduction entre une chatte et son petit est autorisée."
    }
  },
  {
    "id": "chat_31",
    "theme": "chats",
    "n": 31,
    "q": "Quelles sont les affirmations correctes concernant la rage ?",
    "c": {
      "a": "La rage est une zoonose.",
      "b": "Les espèces domestiques pouvant contracter la rage sont les chiens et les chats.",
      "c": "La rage est un danger sanitaire de deuxième catégorie.",
      "d": "La rage est une maladie virale.",
      "e": "Les chiens et les chats peuvent être vaccinés contre la rage dès 8 semaines."
    }
  },
  {
    "id": "chat_32",
    "theme": "chats",
    "n": 32,
    "q": "À partir de quel âge un chat né en 2018 doit-il être identifié ?",
    "c": {
      "a": "Dès 8 semaines.",
      "b": "Dès 3 mois.",
      "c": "Dès 4 mois.",
      "d": "Dès 7 mois.",
      "e": "Il n'est pas obligatoire de faire identifier un chat né en 2018."
    }
  },
  {
    "id": "chat_33",
    "theme": "chats",
    "n": 33,
    "q": "Quel est le nom de l'organe permettant au chat d'identifier les phéromones ?",
    "c": {
      "a": "L'organe voméronasal.",
      "b": "L'organe nasopharyngé.",
      "c": "L'organe nasolabial.",
      "d": "L'organe de Jacobson.",
      "e": "L'organe de Ferguson."
    }
  },
  {
    "id": "chat_34",
    "theme": "chats",
    "n": 34,
    "q": "Quels signes traduisent un comportement décontracté chez le chat ?",
    "c": {
      "a": "Une queue à la verticale.",
      "b": "Des frottements ou des pétrissements.",
      "c": "Des pupilles contractées.",
      "d": "Une tenue droite et une tête haute.",
      "e": "Une queue basse ou à l'horizontale."
    }
  },
  {
    "id": "chat_35",
    "theme": "chats",
    "n": 35,
    "q": "Quelle est l'affirmation correcte concernant l'oestrus chez la chatte ?",
    "c": {
      "a": "Le mâle est attiré par la femelle, mais elle refuse l'accouplement.",
      "b": "L'ovulation a lieu de manière spontanée pendant cette période.",
      "c": "Il dure de 7 à 12 jours.",
      "d": "La chatte est souvent plus solitaire voire agressive.",
      "e": "C'est la période qui correspond au début des chaleurs."
    }
  },
  {
    "id": "chat_36",
    "theme": "chats",
    "n": 36,
    "q": "Quelles sont les règles sanitaires minimales à respecter pour tous les établissements d'élevage, quel que soit l'effectif ?",
    "c": {
      "a": "Conserver les volumes du registre d'entrées et sorties 5 ans après la dernière sortie d'un animal.",
      "b": "Disposer d'une maternité.",
      "c": "Se soumettre à des visites sanitaires.",
      "d": "Disposer d'un conteneur étanche à température négative pour le stockage des cadavres.",
      "e": "Attribuer un vétérinaire sanitaire."
    }
  },
  {
    "id": "chat_37",
    "theme": "chats",
    "n": 37,
    "q": "Quand une déclaration de naissance est-elle requise pour l'inscription d'une portée de chaton au LOOF ?",
    "c": {
      "a": "Une déclaration de naissance n'est pas requise si les deux parents sont inscrits au LOOF.",
      "b": "Une déclaration de naissance n'est jamais requise pour les chats.",
      "c": "Dans le mois suivant la naissance.",
      "d": "Dans les 2 mois suivant la naissance.",
      "e": "Dans les 3 mois suivant la naissance."
    }
  },
  {
    "id": "chat_38",
    "theme": "chats",
    "n": 38,
    "q": "Quelles appellations correspondent à des effets de poil de chat ?",
    "c": {
      "a": "L'effet smoke.",
      "b": "L'effet chinchilla.",
      "c": "L'effet ombré.",
      "d": "L'effet chamois.",
      "e": "L'effet shaded."
    }
  },
  {
    "id": "chat_39",
    "theme": "chats",
    "n": 39,
    "q": "Vers quel âge la chatte atteint-elle la maturité sexuelle ?",
    "c": {
      "a": "La femelle atteint souvent la maturité sexuelle après le mâle.",
      "b": "La femelle atteint souvent la maturité sexuelle avant le mâle.",
      "c": "Vers 6 à 7 mois.",
      "d": "Vers 4 à 10 mois.",
      "e": "Vers 12 à 14 mois."
    }
  },
  {
    "id": "chat_40",
    "theme": "chats",
    "n": 40,
    "q": "Quelles sont les affirmations correctes concernant la chlamydiose ?",
    "c": {
      "a": "C'est une maladie parasitaire.",
      "b": "C'est une maladie bactérienne.",
      "c": "C'est une zoonose.",
      "d": "Elle est surtout dangereuse pour les jeunes chats ou les animaux immunodéprimés.",
      "e": "Il n'existe pas de vaccin."
    }
  },
  {
    "id": "chat_41",
    "theme": "chats",
    "n": 41,
    "q": "Quelles sont les obligations pour tout transport commercial de longue durée ?",
    "c": {
      "a": "La présence d'un convoyeur titulaire du TAV.",
      "b": "Une autorisation de transport de type I.",
      "c": "Une autorisation de transport de type II.",
      "d": "Les documents de transport.",
      "e": "Le passeport de chaque carnivore domestique transporté."
    }
  },
  {
    "id": "chat_42",
    "theme": "chats",
    "n": 42,
    "q": "Quel symptôme peut indiquer une panleucopénie féline ?",
    "c": {
      "a": "Une toux sévère.",
      "b": "Une gastro-entérite hémorragique sévère.",
      "c": "Une atteinte oculaire sévère."
    }
  },
  {
    "id": "chat_43",
    "theme": "chats",
    "n": 43,
    "q": "Quelles sont les affirmations correctes concernant la stérilisation du chat mâle ?",
    "c": {
      "a": "Une stérilisation trop précoce d'un mâle peut n'avoir aucun effet sur ses comportements sexuels gênants.",
      "b": "La castration chimique permet d'éliminer les risques de cancer des testicules.",
      "c": "La castration chimique s'effectue par implant sous cutané.",
      "d": "La castration chirurgicale s'effectue toujours par l'ablation des testicules.",
      "e": "La castration chimique et la castration chirurgicale permettent de diminuer ou d'éliminer l'agressivité ou les risques de fugue."
    }
  },
  {
    "id": "chat_44",
    "theme": "chats",
    "n": 44,
    "q": "Quelles sont les affirmations correctes concernant la période de transition chez le chaton ?",
    "c": {
      "a": "Elle s'étend de la deuxième à la quatrième semaine.",
      "b": "Elle débute avec l'ouverture des yeux.",
      "c": "C'est la période de développement la plus brève et qui est pratiquement inexistante chez de nombreux chatons.",
      "d": "C'est la période qui marque le début du sevrage alimentaire.",
      "e": "Elle se termine lorsque les autocontrôles sont acquis."
    }
  },
  {
    "id": "chat_45",
    "theme": "chats",
    "n": 45,
    "q": "Quelles sont les affirmations exactes concernant la reproduction de la chatte ?",
    "c": {
      "a": "Une chatte doit être soumise à un examen vétérinaire à partir de 6 ans.",
      "b": "Une chatte doit obligatoirement être stérilisée à partir de 6 ans.",
      "c": "Une chatte d'élevage réformée doit obligatoirement être stérilisée.",
      "d": "Une chatte peut continuer à se reproduire après 7 ans s'il n'y a aucune contre-indication vétérinaire."
    }
  },
  {
    "id": "chat_46",
    "theme": "chats",
    "n": 46,
    "q": "Quels sont les éléments devant obligatoirement figurer sur un paquet de croquettes industrielles ?",
    "c": {
      "a": "L'origine des ingrédients.",
      "b": "Le mode d'emploi ou d'utilisation.",
      "c": "La traçabilité du paquet.",
      "d": "Les valeurs nutritionnelles en kilocalories.",
      "e": "La composition des aliments."
    }
  },
  {
    "id": "chat_47",
    "theme": "chats",
    "n": 47,
    "q": "Quels sont les attributs d'un chat au caractère dit « sentimental » ?",
    "c": {
      "a": "Un chat s'adaptant facilement au comportement de ses maîtres et appréciant la vie de famille.",
      "b": "Un chat demandant beaucoup l'attention de ses maîtres.",
      "c": "Un chat préférant la sieste et les caresses."
    }
  },
  {
    "id": "chat_48",
    "theme": "chats",
    "n": 48,
    "q": "Quels comportements sont souvent observés dans un contexte de chasse ?",
    "c": {
      "a": "Le comportement d'agressivité offensive.",
      "b": "Le comportement de prédation.",
      "c": "Le chat est immobile et plaqué au sol.",
      "d": "Les oreilles sont plaquées vers l'arrière.",
      "e": "Les griffes sont souvent sorties."
    }
  },
  {
    "id": "chat_49",
    "theme": "chats",
    "n": 49,
    "q": "A quel stade de la gestation une chatte doit-elle être installée en maternité ?",
    "c": {
      "a": "1 mois avant la date de mise-bas prévue.",
      "b": "1 semaine avant la date de mise-bas prévue.",
      "c": "Dès les premières contractions."
    }
  },
  {
    "id": "chat_50",
    "theme": "chats",
    "n": 50,
    "q": "Quelles sont les affirmations correctes concernant la reproduction chez le chat ?",
    "c": {
      "a": "La chatte doit idéalement être vaccinée et vermifugée avant toute saillie.",
      "b": "La période réfractaire après l'accouplement dure en moyenne 5 minutes.",
      "c": "L'insémination artificielle ne peut pas être pratiquée chez le chat.",
      "d": "Plus une chatte s'accouple, plus l'ovulation a de chances de se déclencher.",
      "e": "Une chatte peut être fécondée durant le post-oestrus."
    }
  },
  {
    "id": "chat_51",
    "theme": "chats",
    "n": 51,
    "q": "Comment un animal reproducteur est-il sélectionné lors d'une sélection sur les collatéraux ?",
    "c": {
      "a": "Selon les qualités de ses parents proches.",
      "b": "Selon ses propres qualités.",
      "c": "Selon les qualités de ses portées précédentes.",
      "d": "Selon les qualités de ses frères et sœurs.",
      "e": "Selon les qualités de ses parents sur 5 générations précédentes."
    }
  },
  {
    "id": "chat_52",
    "theme": "chats",
    "n": 52,
    "q": "Dans quels cas un chat doit-il obligatoirement être identifié ?",
    "c": {
      "a": "Pour une demande de pédigrée, seulement si un des deux parents ne possède pas de pédigrée.",
      "b": "Lors d'une cession, à titre gratuit ou onéreux, pour un chat de race.",
      "c": "Si le chat est né en avril 2011.",
      "d": "Lors d'un voyage non commercial à l'international.",
      "e": "Lors d'une cession, à titre gratuit ou onéreux, pour un chat sans pédigrée."
    }
  },
  {
    "id": "chat_53",
    "theme": "chats",
    "n": 53,
    "q": "Quels sont les deux nutriments essentiels propres au régime alimentaire du chat ?",
    "c": {
      "a": "Le magnésium.",
      "b": "La cystéine.",
      "c": "La taurine.",
      "d": "L'acide folique.",
      "e": "L'acide arachidonique."
    }
  },
  {
    "id": "chat_54",
    "theme": "chats",
    "n": 54,
    "q": "Quelles sont les affirmations correctes concernant des chatons nouveau-nés ?",
    "c": {
      "a": "Les chatons doivent boire le colostrum pendant environ 4 semaines.",
      "b": "Un nouveau-né délaissé par la mère à la naissance doit être frictionné à l'aide d'un torchon jusqu'aux premières respirations.",
      "c": "Le nid des nouveau-nés doit faire au moins 20°C.",
      "d": "Un supplément alimentaire autre que le lait de la mère doit être offerts aux nouveau-nés dès la naissance s'il s'agit d'une portée nombreuse.",
      "e": "Le poids des nouveau-nés doit doubler dans la semaine suivant la naissance."
    }
  },
  {
    "id": "chat_55",
    "theme": "chats",
    "n": 55,
    "q": "Quel est le délai de suspicion pour la panleucopénie féline ?",
    "c": {
      "a": "Il n'y en a pas, car ce n'est pas un vice rédhibitoire.",
      "b": "Un délai de suspicion n'est pas fixé pour cette maladie.",
      "c": "5 jours.",
      "d": "8 jours.",
      "e": "30 jours."
    }
  },
  {
    "id": "chat_56",
    "theme": "chats",
    "n": 56,
    "q": "Quelle est l'obligation correcte concernant la vente d'un animal ?",
    "c": {
      "a": "Le vendeur doit faire signer à l'acheteur un certificat d'engagement et de connaissances au moins 5 jours avant la cession.",
      "b": "La mère de l'animal cédé doit être présentée physiquement à l'acheteur.",
      "c": "Il est formellement interdit de vendre des animaux par petite annonce lorsqu'on ne dispose pas d'un numéro de SIREN."
    }
  },
  {
    "id": "chat_57",
    "theme": "chats",
    "n": 57,
    "q": "Dans quels cas un examen de confirmation est-il requis pour l'inscription d'un chat au LOOF ?",
    "c": {
      "a": "Si le chat n'a pas encore terminé sa croissance.",
      "b": "Si l'un des deux parents n'est pas inscrit au LOOF.",
      "c": "Si aucun des parents n'est inscrit au LOOF.",
      "d": "Pour proposer la semence d'un chat mâle aux niveaux national et international.",
      "e": "Pour inscrire le chat à des championnats félins organisés par le LOOF."
    }
  },
  {
    "id": "chat_58",
    "theme": "chats",
    "n": 58,
    "q": "Quelles sont les affirmations correctes concernant le type de marquage qui consiste en un chat frottant son museau contre des objets ?",
    "c": {
      "a": "C'est un comportement apaisant.",
      "b": "C'est le « marquage social ».",
      "c": "Ce n'est pas un type de marquage territorial.",
      "d": "C'est le « marquage facial ».",
      "e": "C'est le type de marquage le plus commun dans une bonne relation inter-spécifique."
    }
  },
  {
    "id": "chat_59",
    "theme": "chats",
    "n": 59,
    "q": "Quelles sont les affirmations correctes concernant la période de repos sexuel chez le chat ?",
    "c": {
      "a": "La période de repos sexuel entre deux chaleurs est l'interoestrus.",
      "b": "L'interoestrus intervient généralement pendant les saisons à la photopériode courte.",
      "c": "La période de repos sexuel entre deux chaleurs est l'anoestrus.",
      "d": "L'interoestrus dure environ 2 à 4 semaines après un cycle anovulatoire.",
      "e": "L'anoestrus dure environ 1 mois."
    }
  },
  {
    "id": "chat_60",
    "theme": "chats",
    "n": 60,
    "q": "Que signifie un état d'engraissement de niveau 3 chez le chat ?",
    "c": {
      "a": "Le chat est très mince.",
      "b": "Le chat est à son poids idéal.",
      "c": "Le chat est obèse.",
      "d": "Le chat est en surpoids."
    }
  },
  {
    "id": "chat_61",
    "theme": "chats",
    "n": 61,
    "q": "Pour la vente d'un animal, que garantit le vendeur à l'acheteur ?",
    "c": {
      "a": "Un certificat sanitaire.",
      "b": "Une preuve que les vaccinations de base ont été effectuées.",
      "c": "Une attestation de vente.",
      "d": "Un certificat de bonne santé.",
      "e": "Une preuve que l'animal a bien été identifié."
    }
  },
  {
    "id": "chat_62",
    "theme": "chats",
    "n": 62,
    "q": "Combien de dents un chat adulte possède-t-il ?",
    "c": {
      "a": "Le nombre de dents dépend de la race.",
      "b": "26 dents.",
      "c": "30 dents.",
      "d": "28 dents.",
      "e": "42 dents."
    }
  },
  {
    "id": "chat_63",
    "theme": "chats",
    "n": 63,
    "q": "Quelles teintes de robes sont officiellement reconnues par le LOOF ?",
    "c": {
      "a": "Le bleu.",
      "b": "Le taupe.",
      "c": "Le chocolat.",
      "d": "Le cendre.",
      "e": "L'acajou."
    }
  },
  {
    "id": "chat_64",
    "theme": "chats",
    "n": 64,
    "q": "Quelles sont les affirmations correctes concernant la reproduction chez le chat ?",
    "c": {
      "a": "Le chat est une espèce à ovulation spontanée.",
      "b": "Le chat est une espèce à ovulation provoquée.",
      "c": "L'ovulation est systématique à chaque cycle sexuel.",
      "d": "L'ovulation est déclenchée par stimulation du vagin."
    }
  },
  {
    "id": "chat_65",
    "theme": "chats",
    "n": 65,
    "q": "Qu'est-ce que le « trou immunitaire » chez le chat ?",
    "c": {
      "a": "C'est la période entre la naissance et le moment où les anticorps de la mère commencent à faire effet.",
      "b": "C'est la période entre l'injection d'un vaccin et le moment où il est efficace.",
      "c": "C'est la période pendant laquelle les anticorps transmis par la mère ne peuvent plus lutter contre les infections mais peuvent toujours neutraliser l'efficacité des vaccins."
    }
  },
  {
    "id": "chat_66",
    "theme": "chats",
    "n": 66,
    "q": "Quelle est la teneur en poulet d'une pâtée pour chats avec la mention « au poulet » sur son emballage ?",
    "c": {
      "a": "Moins de 4% de poulet.",
      "b": "Plus de 26% de poulet.",
      "c": "Entre 4% et 14% de poulet."
    }
  },
  {
    "id": "chat_67",
    "theme": "chats",
    "n": 67,
    "q": "Quels sont les attributs d'un chat de morphotype semi-cobby ?",
    "c": {
      "a": "Une tête triangulaire.",
      "b": "Une forte ossature.",
      "c": "Un corps très svelte.",
      "d": "Un museau court voire écrasé.",
      "e": "De grandes oreilles pointues."
    }
  },
  {
    "id": "chat_68",
    "theme": "chats",
    "n": 68,
    "q": "Quelles sont les affirmations exactes concernant le comportement d'agressivité défensive chez le chat ?",
    "c": {
      "a": "C'est un comportement souvent observé en cas de grosse frayeur.",
      "b": "Les oreilles sont souvent rabattues vers l'arrière.",
      "c": "Le chat est recroquevillé pour paraître plus petit.",
      "d": "Les pupilles sont dilatées.",
      "e": "Le chat a souvent le poil hérissé."
    }
  },
  {
    "id": "chat_69",
    "theme": "chats",
    "n": 69,
    "q": "Quelles sont les affirmations correctes concernant le coryza ?",
    "c": {
      "a": "Il n'existe pas de vaccin.",
      "b": "C'est une maladie bactérienne.",
      "c": "Elle peut être transmissible par voie aérienne.",
      "d": "Elle cause souvent des troubles respiratoires.",
      "e": "Elle cause souvent des troubles digestifs."
    }
  },
  {
    "id": "chat_70",
    "theme": "chats",
    "n": 70,
    "q": "Quels sont des exemples de socialisation intra-spécifique ?",
    "c": {
      "a": "Un chaton non sevré qui joue avec sa mère.",
      "b": "Un chaton sevré qui joue avec un lapin.",
      "c": "Un chat qui joue avec un humain qui ne fait pas partie de son environnement quotidien.",
      "d": "Un chaton qui joue avec son maître.",
      "e": "Un chat adulte qui joue avec un autre chat qui ne fait pas partie de son foyer ou avec qui il n'est pas apparenté."
    }
  },
  {
    "id": "chat_71",
    "theme": "chats",
    "n": 71,
    "q": "Quelles sont les affirmations correctes concernant le transport ?",
    "c": {
      "a": "Un transport routier n'excédant pas 12 heures sur le territoire national est exempté de l'obligation d'agrément du véhicule de transport.",
      "b": "Le passeport de l'animal est toujours obligatoire lors d'un transport commercial.",
      "c": "L'autorisation de transport de type 2 est valable 5 ans.",
      "d": "Un certificat sanitaire est toujours requis lors d'un transport international.",
      "e": "La vaccination antirabique n'est pas requise pour un transport international au sein de l'Union Européenne."
    }
  },
  {
    "id": "chat_72",
    "theme": "chats",
    "n": 72,
    "q": "Quand un chat est-il considéré comme errant ou en divagation ?",
    "c": {
      "a": "S'il est identifié et se trouve à plus de 1000m d'habitations ou de son maître.",
      "b": "S'il est non identifié et se trouve à plus de 1000m d'habitations ou de son maître.",
      "c": "S'il est identifié et se trouve à plus de 200m d'habitations.",
      "d": "S'il est non identifié et se trouve à plus de 200m d'habitations.",
      "e": "S'il se trouve à plus de 100m d'habitations."
    }
  },
  {
    "id": "chat_73",
    "theme": "chats",
    "n": 73,
    "q": "Quelle est l'affirmation exacte concernant la mise bas chez la chatte ?",
    "c": {
      "a": "Une augmentation de la température corporelle peut indiquer une mise bas imminente.",
      "b": "Il faut toujours laisser la chatte seule durant une mise bas pour éviter de la stresser.",
      "c": "Les placentas peuvent être expulsés pendant ou à la fin de la mise bas."
    }
  },
  {
    "id": "chat_74",
    "theme": "chats",
    "n": 74,
    "q": "Quelles sont les affirmations correctes concernant le cycle d'alternance jour / nuit pour le chat ?",
    "c": {
      "a": "12 à 14 heures d'éclairage en discontinu par jour est acceptable mais pas idéal.",
      "b": "12 heures d'éclairage en continu par jour est idéal.",
      "c": "Un éclairage de source artificielle est préféré dans les élevages."
    }
  },
  {
    "id": "chat_75",
    "theme": "chats",
    "n": 75,
    "q": "Quelles maladies peuvent être évitées grâce à un protocole de vermifugation et de déparasitage régulier ?",
    "c": {
      "a": "Une maladie causée par des cestodes.",
      "b": "La dirofilariose.",
      "c": "La chlamydiose.",
      "d": "Une maladie causée par une bactérie.",
      "e": "La maladie de Lyme."
    }
  },
  {
    "id": "chat_76",
    "theme": "chats",
    "n": 76,
    "q": "Quelles sont les informations obligatoires pour une annonce de cession ?",
    "c": {
      "a": "La description physique des animaux (couleur de la robe, motifs, etc.).",
      "b": "Le nombre de petits dans la portée.",
      "c": "Les vaccins et tests effectués (FIV, FELV, etc.).",
      "d": "La mention claire d'appartenance à une race pour les animaux de pure race.",
      "e": "Si les animaux sont entiers ou stérilisés."
    }
  },
  {
    "id": "chat_77",
    "theme": "chats",
    "n": 77,
    "q": "Quelles races de chats possèdent un morphotype oriental ?",
    "c": {
      "a": "Le Chartreux.",
      "b": "Le Cornish Rex.",
      "c": "Le Persan.",
      "d": "Le Siamois.",
      "e": "L'Exotic Shorthair."
    }
  },
  {
    "id": "chat_78",
    "theme": "chats",
    "n": 78,
    "q": "Quelles sont les affirmations correctes concernant le marquage chez le chat ?",
    "c": {
      "a": "Les dépôts d'excréments sont utilisés comme délimitation de territoire.",
      "b": "La toilette permet au chat d'éliminer des odeurs étrangères à la sienne.",
      "c": "Le marquage par griffades est un comportement agressif.",
      "d": "Le marquage par griffades est également un mode de communication visuel.",
      "e": "Le marquage par griffades est préféré pour recouvrir des odeurs fortes."
    }
  },
  {
    "id": "chat_79",
    "theme": "chats",
    "n": 79,
    "q": "Quelles sont les affirmations correctes concernant la reproduction du chat ?",
    "c": {
      "a": "La puberté correspond aux premiers comportements sexuels.",
      "b": "L'âge de la puberté et de la maturité sexuelle est le même chez le chat.",
      "c": "Un chat pubère n'est pas forcément fertile.",
      "d": "L'âge de la maturité sexuelle est le même chez toutes les races de chats.",
      "e": "La production des premières cellules reproductives accompagne souvent la puberté."
    }
  },
  {
    "id": "chat_80",
    "theme": "chats",
    "n": 80,
    "q": "Quelles sont les affirmations correctes concernant le pro-oestrus chez la chatte ?",
    "c": {
      "a": "Il dure de 3 à 17 jours.",
      "b": "Il dure de 0 à 2 jours.",
      "c": "La femelle accepte l'accouplement.",
      "d": "C'est une phase du cycle sexuel qui passe inaperçue chez de nombreuses chattes.",
      "e": "L'ovulation a lieu durant cette phase du cycle sexuel."
    }
  },
  {
    "id": "chat_81",
    "theme": "chats",
    "n": 81,
    "q": "Quelles sont les affirmations correctes concernant l'eau ?",
    "c": {
      "a": "Il n'est pas nécessaire de proposer de l'eau supplémentaire à un animal qui ne se nourrit que de pâtée ou d'aliments frais.",
      "b": "L'eau permet la dispersion des nutriments dans l'organisme.",
      "c": "L'eau doit toujours être proposée à volonté pour un animal en bonne santé."
    }
  },
  {
    "id": "chat_82",
    "theme": "chats",
    "n": 82,
    "q": "Quelles sont les affirmations correctes concernant l'identification du chat ?",
    "c": {
      "a": "Un chat doit toujours être identifié par puce électronique pour un voyage en avion.",
      "b": "Un chat doit toujours être identifié par puce électronique pour un voyage en avion, sauf s'il possède déjà une identification par tatouage.",
      "c": "Un chat identifié par tatouage n'a pas besoin d'être identifié par puce électronique s'il n'est pas amené à voyager.",
      "d": "Un chat identifié par tatouage doit être identifié par puce électronique s'il est né en 2010.",
      "e": "Un chat identifié par tatouage doit être identifié par puce électronique s'il est né en 2020."
    }
  },
  {
    "id": "chat_83",
    "theme": "chats",
    "n": 83,
    "q": "Quand la demande d'inscription au LOOF doit-elle être effectuée pour une portée de chatons ?",
    "c": {
      "a": "Dans les 2 mois suivant la naissance.",
      "b": "Dans les 6 mois suivant la naissance.",
      "c": "Dans les 8 mois suivant la naissance."
    }
  },
  {
    "id": "chat_84",
    "theme": "chats",
    "n": 84,
    "q": "Quelles sont les affirmations exactes concernant la période réfractaire chez le chat ?",
    "c": {
      "a": "La période réfractaire est l'une des phases du cycle sexuel de la chatte.",
      "b": "Elle dure environ 30 minutes chez la femelle.",
      "c": "La période réfractaire succède un accouplement.",
      "d": "La période réfractaire désigne l'intervalle entre deux saillies.",
      "e": "Durant cette période, la chatte peut se montrer agressive, se rouler par terre ou se lécher la vulve."
    }
  },
  {
    "id": "chat_85",
    "theme": "chats",
    "n": 85,
    "q": "Quelle zoonose parasitaire est rarement problématique chez les chats mais peut s'avérer très dangereuse pour les femmes enceintes ?",
    "c": {
      "a": "La dirofilariose.",
      "b": "La toxoplasmose.",
      "c": "La chlamydiose."
    }
  },
  {
    "id": "chat_86",
    "theme": "chats",
    "n": 86,
    "q": "Quelles sont les sanctions encourues dans le contexte du transport ?",
    "c": {
      "a": "Un défaut d'autorisation de transport peut être puni de 750€ d'amende.",
      "b": "Un défaut de présence d'un convoyeur peut être puni de 450€ d'amende.",
      "c": "Un défaut d'autorisation de transport peut être puni de 6 mois de prison.",
      "d": "Un défaut de présence d'un convoyeur peut être puni de 750€ d'amende.",
      "e": "Un défaut d'autorisation de transport peut être puni de 7500€ d'amende."
    }
  },
  {
    "id": "chat_87",
    "theme": "chats",
    "n": 87,
    "q": "Qu'est-ce qu'une robe dite « colourpoint » ?",
    "c": {
      "a": "C'est une robe tachetée ou tigrée.",
      "b": "C'est une robe composée d'au moins trois couleurs.",
      "c": "C'est une robe blanche accompagnée de couleurs plus sombres aux extrémités."
    }
  },
  {
    "id": "chat_88",
    "theme": "chats",
    "n": 88,
    "q": "Quelles sont les affirmations correctes concernant le type de reproduction du chat ?",
    "c": {
      "a": "Le chat est une espèce à monoestrus saisonnier.",
      "b": "Le chat est une espèce à monoestrus.",
      "c": "Le chat est une espèce à polyoestrus saisonnier.",
      "d": "Le chat est une espèce à polyoestrus."
    }
  },
  {
    "id": "chat_89",
    "theme": "chats",
    "n": 89,
    "q": "Quand un chat est-il considéré comme en surpoids ?",
    "c": {
      "a": "Lorsque son poids est au moins 15% supérieur à son poids optimal.",
      "b": "Lorsque ses os ne sont pas palpables.",
      "c": "Lorsque sa taille est peu, mais toujours discernable.",
      "d": "Lorsque son poids est 20% supérieur à son poids optimal.",
      "e": "Lorsque son poids est 15 à 20% supérieur à son poids optimal."
    }
  },
  {
    "id": "chat_90",
    "theme": "chats",
    "n": 90,
    "q": "Quelles sont les affirmations correctes concernant l'interruption de gestation chez la chatte ?",
    "c": {
      "a": "L'interruption de gestation par méthode chimique est possible à partir du 40ème jour de gestation.",
      "b": "L'interruption de gestation chirurgicale est effectuée par ovariectomie.",
      "c": "Une chatte ayant subi une interruption de gestation chirurgicale ne peut plus avoir de petits.",
      "d": "L'interruption de gestation doit être effectuée le plus tard possible durant la grossesse pour assurer sa réussite.",
      "e": "L'interruption de gestation n'est jamais conseillée."
    }
  },
  {
    "id": "chat_91",
    "theme": "chats",
    "n": 91,
    "q": "Quelles sont les obligations pour la cession d'un chat de race ?",
    "c": {
      "a": "L'animal doit être vacciné contre la rage.",
      "b": "L'animal doit être traité contre les parasites.",
      "c": "L'animal doit être identifié.",
      "d": "L'animal doit être mis sous quarantaine pendant 7 jours dès son arrivée dans son nouveau domicile.",
      "e": "L'animal doit être âgé d'au moins 8 semaines."
    }
  },
  {
    "id": "chat_92",
    "theme": "chats",
    "n": 92,
    "q": "Quelles races de chat sont à préférer pour des maîtres ayant beaucoup de temps à consacrer à leurs animaux pour jouer et se promener ?",
    "c": {
      "a": "Les races de type « communicatif ».",
      "b": "Les races de type « sentimental ».",
      "c": "Les races de type « exubérant ».",
      "d": "Les races de type « démonstratif ».",
      "e": "Les races de type « expressif »."
    }
  },
  {
    "id": "chat_93",
    "theme": "chats",
    "n": 93,
    "q": "Quels aliments peuvent être toxiques pour les chats ?",
    "c": {
      "a": "L'ail et l'oignon.",
      "b": "Le riz bien cuit.",
      "c": "La carotte cuite.",
      "d": "La viande crue.",
      "e": "L'avocat."
    }
  },
  {
    "id": "chat_94",
    "theme": "chats",
    "n": 94,
    "q": "Dans quelles situations un chat doit-il obligatoirement être identifié ?",
    "c": {
      "a": "Un chat né en 2010 étant proposé à l'adoption à titre gratuit.",
      "b": "Un chaton de 2 mois, trouvé et recueilli par un couple de particuliers.",
      "c": "Un chat de famille né en 2010.",
      "d": "Un chat de 11 mois, trouvé et recueilli par un couple de particuliers.",
      "e": "Un chat de famille né en 2013."
    }
  },
  {
    "id": "chat_95",
    "theme": "chats",
    "n": 95,
    "q": "Que peut signifier un pelage terne et non uniforme ?",
    "c": {
      "a": "Un coryza.",
      "b": "Une carence alimentaire.",
      "c": "Une maladie fongique cutanée.",
      "d": "La présence d'un ectoparasite.",
      "e": "Une hypothermie."
    }
  },
  {
    "id": "chat_96",
    "theme": "chats",
    "n": 96,
    "q": "Quelles sont les affirmations correctes concernant le convoyeur ?",
    "c": {
      "a": "Le convoyeur peut également être conducteur du véhicule de transport.",
      "b": "Sa présence n'est pas requise pendant un transport non commercial de longue durée.",
      "c": "Si un animal est transporté en cage de transport sans jamais être manipulé sur un transport commercial de longue durée, la présence d'un convoyeur n'est pas obligatoire.",
      "d": "Le convoyeur désigne la personne effectuant le transport d'un animal, pour son compte ou le compte d'un tiers.",
      "e": "Sa présence n'est pas requise pour tout transport de moins de 65 km."
    }
  },
  {
    "id": "chat_97",
    "theme": "chats",
    "n": 97,
    "q": "Quelles dents de lait sont les premières à apparaître chez le chat ?",
    "c": {
      "a": "Les incisives.",
      "b": "Les canines.",
      "c": "Les prémolaires.",
      "d": "Les molaires."
    }
  },
  {
    "id": "chat_98",
    "theme": "chats",
    "n": 98,
    "q": "Quels comportements peuvent être observés chez le chat dans un contexte conflictuel ?",
    "c": {
      "a": "Une queue haute.",
      "b": "Une queue basse et relevée au niveau du jarret.",
      "c": "Des oreilles aplaties vers l'avant.",
      "d": "Des soufflements.",
      "e": "De longs miaulements rauques."
    }
  },
  {
    "id": "chat_99",
    "theme": "chats",
    "n": 99,
    "q": "Quelles sont les affirmations correctes concernant l'éclampsie ?",
    "c": {
      "a": "Les symptômes sont généralement des tremblements et des convulsions.",
      "b": "Les symptômes sont généralement des diarrhées hémorragiques.",
      "c": "Elle peut survenir dans les 2 à 3 semaines après une mise bas.",
      "d": "Elle peut être évitée grâce à un régime alimentaire très riche.",
      "e": "Les animaux les plus à risque sont les femelles en oestrus."
    }
  },
  {
    "id": "chat_100",
    "theme": "chats",
    "n": 100,
    "q": "Contre quelles maladies existe-t-il un vaccin disponible dès 8 semaines pour le chat ?",
    "c": {
      "a": "La rage.",
      "b": "Le FIV.",
      "c": "Le typhus.",
      "d": "La maladie de Lyme.",
      "e": "La leucose féline."
    }
  },
  {
    "id": "chat_101",
    "theme": "chats",
    "n": 101,
    "q": "Quel est l'effectif d'un établissement devant se soumettre aux autocontrôles ?",
    "c": {
      "a": "Plus de 9 chiens et / ou chats de plus de 4 mois.",
      "b": "Moins de 10 chiens et / ou chats de plus de 4 mois.",
      "c": "Tous les établissements doivent se soumettre aux autocontrôles."
    }
  },
  {
    "id": "chat_102",
    "theme": "chats",
    "n": 102,
    "q": "Quels sont les rôles du LOOF ?",
    "c": {
      "a": "Délivrer les pédigrées.",
      "b": "Promouvoir et protéger le rôle du chat dans la société.",
      "c": "Élever et faire se reproduire certaines races de chats.",
      "d": "Former les éleveurs.",
      "e": "Promouvoir les races félines."
    }
  },
  {
    "id": "chat_103",
    "theme": "chats",
    "n": 103,
    "q": "Quels sont des exemples de types de marquage ?",
    "c": {
      "a": "Le marquage tactile.",
      "b": "Le marquage urinaire.",
      "c": "Le marquage par contact.",
      "d": "Le marquage par griffades.",
      "e": "Le marquage par toilettage."
    }
  },
  {
    "id": "chat_104",
    "theme": "chats",
    "n": 104,
    "q": "Quelle est la durée moyenne de gestation chez la chatte ?",
    "c": {
      "a": "50 à 57 jours.",
      "b": "57 à 63 jours.",
      "c": "64 à 69 jours."
    }
  },
  {
    "id": "chat_105",
    "theme": "chats",
    "n": 105,
    "q": "Quelle maladie virale est souvent asymptomatique chez les adultes mais peut causer une incapacité à téter, des troubles respiratoires et de la fièvre chez les chatons ?",
    "c": {
      "a": "Le FIV.",
      "b": "Le typhus.",
      "c": "La chlamydiose.",
      "d": "L'herpèsvirose.",
      "e": "La mammite."
    }
  },
  {
    "id": "chat_106",
    "theme": "chats",
    "n": 106,
    "q": "Qu'est-ce que le rapport Ca/P dans l'alimentation ?",
    "c": {
      "a": "Le rapport entre le calcium et le phosphore.",
      "b": "Le rapport entre le calcium et le potassium.",
      "c": "Il joue un rôle majeur dans la formation des os.",
      "d": "Il joue un rôle majeur dans le renouvellement des cellules."
    }
  },
  {
    "id": "chat_107",
    "theme": "chats",
    "n": 107,
    "q": "À quel caractère un chat très calme et préférant la sieste au jeu appartient-il ?",
    "c": {
      "a": "Aux « tranquilles ».",
      "b": "Aux « paisibles ».",
      "c": "Aux « indépendants ».",
      "d": "Aux « patients ».",
      "e": "Aux « sages »."
    }
  },
  {
    "id": "chat_108",
    "theme": "chats",
    "n": 108,
    "q": "Quelle est la température ambiante idéale pour le chat adulte ?",
    "c": {
      "a": "25 à 30°C.",
      "b": "15 à 20°C.",
      "c": "10 à 15°C."
    }
  },
  {
    "id": "chat_109",
    "theme": "chats",
    "n": 109,
    "q": "Quelles sont les affirmations correctes concernant la période néonatale chez le chaton ?",
    "c": {
      "a": "Elle s'étend de la naissance aux 10 premiers jours du chaton.",
      "b": "Elle se termine avec l'ouverture des oreilles.",
      "c": "Durant cette période, le chaton est sourd et aveugle.",
      "d": "Durant cette période, le chaton commence à pouvoir se tenir debout.",
      "e": "Durant cette période, le chaton ne peut pas faire ses besoins de manière autonome."
    }
  },
  {
    "id": "chat_110",
    "theme": "chats",
    "n": 110,
    "q": "Quelles sont les affirmations correctes concernant la vermifugation et le déparasitage chez le chat ?",
    "c": {
      "a": "Un chat adulte doit être traité tous les mois.",
      "b": "Un chat d'intérieur peut être traité moins souvent qu'un chat d'extérieur.",
      "c": "Un chaton de 6 à 12 mois doit être traité tous les 3 mois.",
      "d": "Un chaton ne peut être traité qu'à partir de 4 semaines.",
      "e": "Un chaton de moins de 8 semaines n'a pas besoin d'être traité si la mère a bien été traitée pendant et après la gestation."
    }
  },
  {
    "id": "chat_111",
    "theme": "chats",
    "n": 111,
    "q": "Un chat errant et identifié est recueilli par une fourrière. De combien de temps la fourrière dispose-t-elle pour retrouver ses propriétaires ?",
    "c": {
      "a": "5 jours ouvrés.",
      "b": "8 jours ouvrés.",
      "c": "10 jours ouvrés."
    }
  },
  {
    "id": "chat_112",
    "theme": "chats",
    "n": 112,
    "q": "Quelles maladies sont des vices rédhibitoires du chat ?",
    "c": {
      "a": "La PIF.",
      "b": "La rage.",
      "c": "La maladie de Carré.",
      "d": "La leucose féline.",
      "e": "La dysplasie de la hanche."
    }
  },
  {
    "id": "chat_113",
    "theme": "chats",
    "n": 113,
    "q": "Quelles sont les affirmations correctes concernant la troisième paupière du chat ?",
    "c": {
      "a": "Elle se situe dans le coin interne de l'œil.",
      "b": "Certaines races de chats ne possèdent pas cette troisième paupière.",
      "c": "Elle est aussi appelée « membrane rémittente ».",
      "d": "C'est une membrane rose et translucide.",
      "e": "Une troisième paupière constamment visible est très souvent le signe d'un problème de santé."
    }
  },
  {
    "id": "chat_114",
    "theme": "chats",
    "n": 114,
    "q": "Quelles sont les affirmations correctes concernant l'alimentation du chat ?",
    "c": {
      "a": "Le chat digère mal les glucides.",
      "b": "Le chat digère mal les fibres.",
      "c": "Le chat a besoin de 40 nutriments essentiels.",
      "d": "La majorité des besoins énergétiques du chat doit être couverte par des lipides.",
      "e": "La castration influe sur les besoins nutritionnels du chat mâle."
    }
  },
  {
    "id": "chat_115",
    "theme": "chats",
    "n": 115,
    "q": "Quels cycles peuvent succéder à une saillie chez le chat ?",
    "c": {
      "a": "Un nouveau cycle de chaleurs.",
      "b": "Un cycle de gestation.",
      "c": "Un cycle anovulatoire.",
      "d": "Un cycle ovulatoire.",
      "e": "Un cycle de pseudo-gestation."
    }
  },
  {
    "id": "chat_116",
    "theme": "chats",
    "n": 116,
    "q": "Quelle est l'affirmation correcte concernant la sélection génétique ?",
    "c": {
      "a": "La retrempe est illégale en France.",
      "b": "L'out-breeding est illégal en France.",
      "c": "Le in-breeding est illégal en France.",
      "d": "Le line-breeding est illégal en France."
    }
  },
  {
    "id": "chat_117",
    "theme": "chats",
    "n": 117,
    "q": "Quels profils sont des exemples de morphotypes félins ?",
    "c": {
      "a": "Le type longiligne.",
      "b": "Le type graïoïde.",
      "c": "Le type concaviligne.",
      "d": "Le type bréviligne.",
      "e": "Le type dolicéphale."
    }
  },
  {
    "id": "chat_118",
    "theme": "chats",
    "n": 118,
    "q": "Qu'est-ce que le flehmen ?",
    "c": {
      "a": "C'est un muscle situé dans le palais du chat qui fait parvenir les phéromones à l'organe d'identification des phéromones.",
      "b": "C'est un comportement qui permet l'identification des phéromones chez le chat.",
      "c": "C'est un type de marquage et de dépôt de phéromones chez le chat."
    }
  },
  {
    "id": "chat_119",
    "theme": "chats",
    "n": 119,
    "q": "Quelles sont les dimensions minimales des boxes pour chats ?",
    "c": {
      "a": "1m² par chat.",
      "b": "1.5m² par chat.",
      "c": "2m² par chat."
    }
  },
  {
    "id": "chat_120",
    "theme": "chats",
    "n": 120,
    "q": "Quels sont les symptômes courants d'une contamination par vers intestinaux ?",
    "c": {
      "a": "Des vomissements.",
      "b": "Des ballonnements.",
      "c": "Une perte de poids.",
      "d": "De la constipation.",
      "e": "Des troubles respiratoires."
    }
  },
  {
    "id": "chat_121",
    "theme": "chats",
    "n": 121,
    "q": "Comment le sol des boxes de refuge doivent-ils être conçus ?",
    "c": {
      "a": "La moquette est une bonne idée de revêtement car elle assure une bonne isolation thermique et évite les glissements.",
      "b": "Il peut être conçu légèrement incliné pour faciliter l'évacuation des eaux de lavage.",
      "c": "Il peut être conçu sur différents niveaux pour offrir à l'animal des options différentes de température au sol."
    }
  },
  {
    "id": "chat_122",
    "theme": "chats",
    "n": 122,
    "q": "Quelle maladie est un vice rédhibitoire du chat ?",
    "c": {
      "a": "La toxoplasmose.",
      "b": "Le coryza.",
      "c": "Le typhus."
    }
  },
  {
    "id": "chat_123",
    "theme": "chats",
    "n": 123,
    "q": "Vers quel âge la dentition définitive du chat est-elle en place ?",
    "c": {
      "a": "Vers 4 mois.",
      "b": "Vers 6 mois.",
      "c": "Vers 8 mois."
    }
  },
  {
    "id": "chat_124",
    "theme": "chats",
    "n": 124,
    "q": "Quelles sont les affirmations exactes concernant le comportement du chat ?",
    "c": {
      "a": "Il n'existe pas de comportement de soumission chez le chat.",
      "b": "Des oreilles aplaties vers l'avant et des pupilles dilatées traduisent souvent un comportement de prédation.",
      "c": "Le ronronnement est toujours une expression de bien-être.",
      "d": "Le pétrissement est un comportement utilisé exclusivement dans une relation intra-spécifique.",
      "e": "Le pétrissement est une expression de bien-être."
    }
  },
  {
    "id": "chat_125",
    "theme": "chats",
    "n": 125,
    "q": "En général, quand une femelle reproductrice doit-elle être vermifugée et déparasitée ?",
    "c": {
      "a": "Dans les 24 heures précédant la mise bas.",
      "b": "Toutes les 2 semaines pendant la gestation.",
      "c": "Au moment de la saillie et au début de la gestation.",
      "d": "2 et 4 semaines après la mise bas.",
      "e": "1 à 2 semaines avant la saillie ou au début de la gestation."
    }
  },
  {
    "id": "chat_126",
    "theme": "chats",
    "n": 126,
    "q": "Quelles sont les affirmations correctes concernant le transport ?",
    "c": {
      "a": "Le terme « voyage » désigne les moments où un animal est en transit à bord du moyen de transport.",
      "b": "Un passeport animalier est toujours obligatoire pour le passage d'une frontière pour les chats.",
      "c": "Un passeport animalier est toujours obligatoire pour le passage d'une frontière pour les furets.",
      "d": "Une autorisation de transport est toujours nécessaire pour les voyages commerciaux.",
      "e": "La présence d'un convoyeur à bord du moyen de transport n'est pas toujours obligatoire pour les voyages commerciaux."
    }
  },
  {
    "id": "chat_127",
    "theme": "chats",
    "n": 127,
    "q": "Quelle est l'affirmation correcte concernant l'inscription d'un chat au LOOF ?",
    "c": {
      "a": "Un examen de confirmation est obligatoire.",
      "b": "Il existe 4 types d'inscription au LOOF.",
      "c": "Un chat peut être inscrit au LOOF uniquement si ses deux parents sont également inscrits au LOOF."
    }
  },
  {
    "id": "chat_128",
    "theme": "chats",
    "n": 128,
    "q": "Quel est le régime alimentaire du chat ?",
    "c": {
      "a": "Le chat est une espèce carnivore à tendance omnivore.",
      "b": "Le chat est une espèce strictement carnivore.",
      "c": "Le chat est une espèce omnivore."
    }
  },
  {
    "id": "chat_129",
    "theme": "chats",
    "n": 129,
    "q": "À quel âge en moyenne un chat atteint-il l'âge adulte ?",
    "c": {
      "a": "Entre 10 et 12 mois.",
      "b": "Entre 12 et 14 mois.",
      "c": "Entre 12 à 18 mois.",
      "d": "Entre 18 et 21 mois.",
      "e": "Entre 18 et 24 mois."
    }
  },
  {
    "id": "chat_130",
    "theme": "chats",
    "n": 130,
    "q": "Quel est le niveau d'engraissement d'un chat dont le poids est 30% inférieur à son poids optimal ?",
    "c": {
      "a": "Niveau 3 allant sur niveau 2.",
      "b": "Niveau 3.",
      "c": "Niveau 1.",
      "d": "Niveau 2 allant sur niveau 1."
    }
  },
  {
    "id": "chat_131",
    "theme": "chats",
    "n": 131,
    "q": "Qu'est-ce que l'homozygotie en génétique ?",
    "c": {
      "a": "Un animal est homozygote pour un caractère spécifique si deux allèles de deux mêmes gènes sont identiques.",
      "b": "Un animal est homozygote pour un caractère spécifique si deux allèles de deux mêmes gènes sont différents.",
      "c": "Elle assure une descendance d'individus à caractères fixés.",
      "d": "Elle assure une descendance d'individus à caractères variés."
    }
  },
  {
    "id": "chat_132",
    "theme": "chats",
    "n": 132,
    "q": "Quelle est l'affirmation correcte concernant la notion d'errance chez le chat ?",
    "c": {
      "a": "Un chat n'est jamais considéré comme errant tant qu'il est identifié.",
      "b": "Un chat est considéré comme errant s'il se trouve à plus de 1000m d'habitations et seulement s'il n'est pas identifié.",
      "c": "Un chat se trouvant à plus de 5km de son lieu d'habitation et à 100m de son maître n'est pas considéré comme errant, qu'il soit identifié ou non."
    }
  },
  {
    "id": "chat_133",
    "theme": "chats",
    "n": 133,
    "q": "Quels chats doivent obligatoirement être identifiés ?",
    "c": {
      "a": "Un chat né en 2010.",
      "b": "Un chat né en janvier 2011.",
      "c": "Un chat né en janvier 2012.",
      "d": "Un chat né en mai 2013.",
      "e": "Un chat né en décembre 2012."
    }
  },
  {
    "id": "chat_134",
    "theme": "chats",
    "n": 134,
    "q": "Quelle est l'affirmation exacte concernant une chatte venant d'atteindre la puberté ?",
    "c": {
      "a": "Une chatte pubère est toujours fertile dès ses premières chaleurs.",
      "b": "Il est interdit de faire reproduire une chatte à son premier cycle sexuel.",
      "c": "Il est interdit de faire reproduire une chatte avant ses trois premières chaleurs."
    }
  },
  {
    "id": "chat_135",
    "theme": "chats",
    "n": 135,
    "q": "Quelle est la température corporelle normale du chat ?",
    "c": {
      "a": "Entre 34 et 35°C.",
      "b": "Entre 36 et 37°C.",
      "c": "Entre 37 et 38°C.",
      "d": "Entre 38 et 39°C.",
      "e": "Entre 39 et 40°C."
    }
  },
  {
    "id": "chat_136",
    "theme": "chats",
    "n": 136,
    "q": "Quelles sont les affirmations correctes concernant les vitamines ?",
    "c": {
      "a": "Les vitamines liposolubles peuvent être toxiques à hautes doses.",
      "b": "Les vitamines liposolubles sont évacuées dans les urines et par la sueur.",
      "c": "La vitamine K est une vitamine liposoluble.",
      "d": "La vitamine A n'est pas une vitamine liposoluble.",
      "e": "Les vitamines B sont des vitamines liposolubles."
    }
  },
  {
    "id": "chat_137",
    "theme": "chats",
    "n": 137,
    "q": "À quoi correspond un poil de chat à l'effet dit « tipped » ?",
    "c": {
      "a": "Seule l'extrémité du poil est plus foncée.",
      "b": "Un huitième de la longueur du poil est plus foncé.",
      "c": "La moitié de la longueur du poil est plus foncé."
    }
  },
  {
    "id": "chat_138",
    "theme": "chats",
    "n": 138,
    "q": "Quel est le taux d'hygrométrie idéal pour le chat ?",
    "c": {
      "a": "De 40 à 70% selon la race.",
      "b": "45%.",
      "c": "65%."
    }
  },
  {
    "id": "chat_139",
    "theme": "chats",
    "n": 139,
    "q": "Quels sont des signes de complications pendant et après la mise bas chez la chatte ?",
    "c": {
      "a": "Tous les placentas ne sont pas expulsés dans les 2 heures suivant la fin de la mise bas.",
      "b": "Une mise bas en cours depuis plus de 10 heures.",
      "c": "Un intervalle de plus de 2 heures entre deux expulsions.",
      "d": "Des écoulements vulvaires rouges-bruns sans odeur dans les semaines suivant la mise bas.",
      "e": "Un chaton est engagé dans le col de l'utérus et en cours d'expulsion depuis plus de 15 minutes."
    }
  },
  {
    "id": "chat_140",
    "theme": "chats",
    "n": 140,
    "q": "Quelle est l'affirmation correcte concernant la stérilisation de la chatte ?",
    "c": {
      "a": "Seule la stérilisation chirurgicale permet de diminuer les risques de santé au niveau de l'utérus et des mamelles.",
      "b": "L'ovariectomie est une méthode de stérilisation chimique.",
      "c": "La stérilisation chirurgicale s'effectue généralement par l'ablation des ovaires et de l'utérus."
    }
  },
  {
    "id": "chat_141",
    "theme": "chats",
    "n": 141,
    "q": "Qui est autorisé à pratiquer une stérilisation chirurgicale ?",
    "c": {
      "a": "Un vétérinaire et un propriétaire d'élevage, si l'animal provient de son propre élevage.",
      "b": "Un vétérinaire et un propriétaire d'élevage, si l'animal provient de son propre élevage et sous l'accord du vétérinaire attitré de l'élevage.",
      "c": "Seulement un vétérinaire."
    }
  },
  {
    "id": "chat_142",
    "theme": "chats",
    "n": 142,
    "q": "Combien existe-t-il de vices rédhibitoires pour le chat ?",
    "c": {
      "a": "3.",
      "b": "4.",
      "c": "6."
    }
  },
  {
    "id": "chat_143",
    "theme": "chats",
    "n": 143,
    "q": "Quels morphotypes félins sont des sous catégories du type médioligne ?",
    "c": {
      "a": "Le type cobby.",
      "b": "Le type oriental.",
      "c": "Le type foreign.",
      "d": "Le type semi-cobby.",
      "e": "Le type semi-foreign."
    }
  },
  {
    "id": "chat_144",
    "theme": "chats",
    "n": 144,
    "q": "Quel trouble du développement peut expliquer un chat supportant très mal les contacts ou la présence des humains ?",
    "c": {
      "a": "Des sur-manipulations pendant son développement.",
      "b": "Un sevrage affectif trop précoce.",
      "c": "Un manque de stimulation pendant son développement."
    }
  },
  {
    "id": "chat_145",
    "theme": "chats",
    "n": 145,
    "q": "Quelle maladie est causée par des ectoparasites ?",
    "c": {
      "a": "La toxoplasmose.",
      "b": "La gale.",
      "c": "La teigne."
    }
  },
  {
    "id": "chat_146",
    "theme": "chats",
    "n": 146,
    "q": "Quelles sont les affirmations correctes concernant la sectorisation des zones ?",
    "c": {
      "a": "Le local de quarantaine permet l'isolement des animaux entrants.",
      "b": "Un local d'isolement n'est pas obligatoire si l'établissement possède une infirmerie.",
      "c": "Un animal entrant d'apparence saine peut être logé dans le local des animaux sains et sevrés.",
      "d": "Une nurserie n'est pas nécessaire dans un établissement de pension.",
      "e": "Les jeunes animaux sevrés doivent être gardés dans la nurserie."
    }
  },
  {
    "id": "chat_147",
    "theme": "chats",
    "n": 147,
    "q": "Quels sont les rôles des clubs de race félines ?",
    "c": {
      "a": "Faire appliquer les standards de race.",
      "b": "Délivrer les pédigrées.",
      "c": "Définir les standards de race.",
      "d": "Assurer la conservation et l'amélioration des races félines qu'ils représentent.",
      "e": "Former les juges de concours félins."
    }
  },
  {
    "id": "chat_148",
    "theme": "chats",
    "n": 148,
    "q": "Dans un contexte domestique, comment améliorer les chances d'une cohabitation harmonieuse entre plusieurs chats ?",
    "c": {
      "a": "Il est préférable d'adopter un nouveau chat lorsque le chat résident a moins de 5 ans.",
      "b": "Il est préférable d'adopter des chats de race ou de tempérament similaires.",
      "c": "Une cohabitation harmonieuse est souvent assurée entre un mâle et une femelle du même âge.",
      "d": "Il faut toujours présenter un nouvel individu de manière très progressive.",
      "e": "Une cohabitation harmonieuse est souvent assurée entre des chats apparentés."
    }
  },
  {
    "id": "chat_149",
    "theme": "chats",
    "n": 149,
    "q": "Quelle est l'affirmation correcte concernant la communication chez le chat ?",
    "c": {
      "a": "Le chat communique principalement de manière visuelle.",
      "b": "Le chat communique principalement de manière tactile.",
      "c": "Le chat communique principalement de manière chimique."
    }
  },
  {
    "id": "chat_150",
    "theme": "chats",
    "n": 150,
    "q": "Quel terme désigne la période des chaleurs chez la chatte ?",
    "c": {
      "a": "Le pro-oestrus.",
      "b": "L'oestrus.",
      "c": "L'interoestérus.",
      "d": "Le polyoestrus.",
      "e": "L'anoestrus."
    }
  },
  {
    "id": "chat_151",
    "theme": "chats",
    "n": 151,
    "q": "Quel est l'organisme qui gère l'immatriculation et l'identification des carnivores domestiques ?",
    "c": {
      "a": "La DDCSPP.",
      "b": "Les services vétérinaires.",
      "c": "L'I-CAD."
    }
  },
  {
    "id": "chat_152",
    "theme": "chats",
    "n": 152,
    "q": "Quand un chaton est-il sevré au niveau alimentaire ?",
    "c": {
      "a": "Vers 4 semaines.",
      "b": "Pendant la période de transition.",
      "c": "Pendant la période d'imprégnation.",
      "d": "Vers 8 semaines."
    }
  },
  {
    "id": "chat_153",
    "theme": "chats",
    "n": 153,
    "q": "Qu'est-ce qu'une robe dite « tortie » ?",
    "c": {
      "a": "Une robe bicolore.",
      "b": "Une robe tricolore.",
      "c": "Une robe colourpoint.",
      "d": "Une robe tabby.",
      "e": "Une robe mink."
    }
  },
  {
    "id": "chat_154",
    "theme": "chats",
    "n": 154,
    "q": "Que faut-il faire dans le cas d'une intoxication alimentaire chez le chat ?",
    "c": {
      "a": "Il faut toujours faire vomir le chat.",
      "b": "Il faut toujours faire boire le chat.",
      "c": "Il faut contacter le centre antipoison.",
      "d": "Il faut toujours emmener le chat chez le vétérinaire.",
      "e": "Il faut offrir au chat une nourriture à base de glucides (riz cuit par exemple)."
    }
  },
  {
    "id": "chat_155",
    "theme": "chats",
    "n": 155,
    "q": "Quel comportement un chat se faisant plus petit, ayant les oreilles aplaties vers l'avant et les pupilles dilatées affiche-t-il ?",
    "c": {
      "a": "Un comportement d'agressivité défensive.",
      "b": "Un comportement d'agressivité offensive.",
      "c": "Un comportement de soumission.",
      "d": "Un comportement de prédation.",
      "e": "Un comportement de tension défensive."
    }
  },
  {
    "id": "chat_156",
    "theme": "chats",
    "n": 156,
    "q": "Que sont les éléments essentiels dans l'alimentation ?",
    "c": {
      "a": "Ce sont des éléments qui doivent obligatoirement être apportés par la nourriture.",
      "b": "Ce sont des oligo-éléments.",
      "c": "Ce sont des sels minéraux.",
      "d": "Les lipides sont des éléments essentiels.",
      "e": "La vitamine D est un élément essentiel."
    }
  },
  {
    "id": "chat_157",
    "theme": "chats",
    "n": 157,
    "q": "À partir de quel âge les chatons doivent commencer à bénéficier de nourriture autre que le lait maternel ?",
    "c": {
      "a": "Dès 4 semaines.",
      "b": "Dès 8 semaines.",
      "c": "Dès 3 semaines."
    }
  },
  {
    "id": "chat_158",
    "theme": "chats",
    "n": 158,
    "q": "Dans un contexte domestique, comment améliorer les chances d'une cohabitation harmonieuse entre plusieurs chats ?",
    "c": {
      "a": "Adopter des chats d'un âge similaire.",
      "b": "Adopter un nouveau chat lorsque le chat résident a plus de 2 ans.",
      "c": "Adopter un nouveau chat lorsque le chat résident a moins de 2 ans.",
      "d": "Placer les deux chats dans un endroit confiné pour qu'ils fassent connaissance."
    }
  },
  {
    "id": "chat_159",
    "theme": "chats",
    "n": 159,
    "q": "De combien d'os le squelette du chat est-il composé ?",
    "c": {
      "a": "Cela dépend de la race du chat.",
      "b": "Environ 250.",
      "c": "Environ 300.",
      "d": "Cela dépend de l'âge du chat."
    }
  },
  {
    "id": "chat_160",
    "theme": "chats",
    "n": 160,
    "q": "Quelles sont les affirmations correctes concernant les endoparasites chez le chat ?",
    "c": {
      "a": "Ils sont très communs chez les chatons.",
      "b": "Ils sont le plus souvent à l'origine de troubles respiratoires.",
      "c": "Ils peuvent être éviter grâce à un protocole de déparasitage externe régulier.",
      "d": "Ils peuvent être éviter grâce à un protocole de vermifugation régulier.",
      "e": "Les giardias et les trichures sont des exemples d'endoparasites."
    }
  },
  {
    "id": "chat_161",
    "theme": "chats",
    "n": 161,
    "q": "Quelles sont les sanctions pénales correctes ?",
    "c": {
      "a": "La maltraitance volontaire d'un animal est punie de 450€ d'amende.",
      "b": "L'atteinte involontaire à la vie d'un animal est punie de 7500€ d'amende.",
      "c": "L'atteinte volontaire à la vie d'un animal est punie d'une amende et de 6 mois d'emprisonnement."
    }
  },
  {
    "id": "chat_162",
    "theme": "chats",
    "n": 162,
    "q": "Quelles sont les affirmations correctes concernant l'interruption de gestation chez la chatte ?",
    "c": {
      "a": "Elle n'est possible que pour les chattes ayant déjà eu une portée.",
      "b": "Elle est seulement possible par méthode chimique.",
      "c": "Par méthode chirurgicale, elle n'est possible que par ovario-hystérectomie.",
      "d": "Par méthode chimique, elle est possible jusqu'au 50ème jour de gestation.",
      "e": "Si elle est effectuée trop tard, elle peut causer un traumatisme pour la femelle."
    }
  },
  {
    "id": "chat_163",
    "theme": "chats",
    "n": 163,
    "q": "Comment s'appelle la troisième paupière du chat ?",
    "c": {
      "a": "La membrane nycthémérale.",
      "b": "La membrane nictitante.",
      "c": "La membrane épirétinienne."
    }
  },
  {
    "id": "chat_164",
    "theme": "chats",
    "n": 164,
    "q": "Quelles sont les affirmations correctes concernant l'organisation sociale du chat ?",
    "c": {
      "a": "Le chat n'apprécie jamais une compagnie.",
      "b": "Le chat n'est pas un animal grégaire.",
      "c": "Dans un contexte domestique, plusieurs chats peuvent cohabiter de manière paisible.",
      "d": "Les chats mâles errants se regroupent en période de reproduction pour chercher les femelles.",
      "e": "Les chattes errantes préfèrent toujours s'isoler pour mettre bas."
    }
  },
  {
    "id": "chat_165",
    "theme": "chats",
    "n": 165,
    "q": "Quels sont des signes qu'un chat a atteint la puberté ?",
    "c": {
      "a": "L'odeur de l'urine des femelles devient plus forte.",
      "b": "La voix des chats mâles mue.",
      "c": "La femelle peut commencer ses premières chaleurs.",
      "d": "On observe souvent un changement de régime alimentaire."
    }
  },
  {
    "id": "chat_166",
    "theme": "chats",
    "n": 166,
    "q": "Que permettent les standards de race ?",
    "c": {
      "a": "D'établir les besoins nutritionnels exacts d'une race donnée.",
      "b": "De rappeler les défauts inhérents à une race donnée.",
      "c": "De juger la compatibilité de deux individus en vue d'un accouplement.",
      "d": "De définir les critères morphologiques d'une race donnée.",
      "e": "De définir les critères comportementaux d'une race donnée."
    }
  },
  {
    "id": "chat_167",
    "theme": "chats",
    "n": 167,
    "q": "À partir de quelle température le chat est-il considéré comme en hypothermie ?",
    "c": {
      "a": "Lorsqu'elle est inférieure à 39°C.",
      "b": "Lorsqu'elle est inférieure à 38°C.",
      "c": "Lorsqu'elle est supérieure à 39°C."
    }
  },
  {
    "id": "chat_168",
    "theme": "chats",
    "n": 168,
    "q": "Quelle est l'affirmation correcte concernant l'espérance de vie du chat ?",
    "c": {
      "a": "Elle dépend du milieu du chat.",
      "b": "Elle ne dépend pas de la race du chat.",
      "c": "Les chats stérilisés vivent toujours moins longtemps que les chats entiers."
    }
  },
  {
    "id": "chat_169",
    "theme": "chats",
    "n": 169,
    "q": "Pour l'inscription d'un chat au LOOF, quand la déclaration de naissance doit-elle être soumise ?",
    "c": {
      "a": "Dans la semaine suivant la naissance.",
      "b": "Dans le mois suivant la naissance.",
      "c": "Dans le mois qui précède la naissance.",
      "d": "Dans les 2 mois suivant la naissance.",
      "e": "Au moment de la saillie puis dans le mois suivant la naissance."
    }
  },
  {
    "id": "chat_170",
    "theme": "chats",
    "n": 170,
    "q": "Quelles sont les affirmations correctes concernant les troubles du développement chez le chat ?",
    "c": {
      "a": "Ils sont facilement rectifiables à l'âge adulte.",
      "b": "Ils peuvent être confondus avec les symptômes d'une maladie.",
      "c": "Ils peuvent engendrer des troubles du comportement plus ou moins graves à l'âge adulte.",
      "d": "Ils peuvent nécessiter de faire appel à un vétérinaire ou à un comportementaliste félin."
    }
  },
  {
    "id": "chat_171",
    "theme": "chats",
    "n": 171,
    "q": "Quels sont des exemples d'exercice illégal de la médecine vétérinaire ?",
    "c": {
      "a": "Un éleveur procédant à la vaccination de ses propres animaux.",
      "b": "Un élève en médecine vétérinaire délivrant des prescriptions sans être inscrit au tableau de l'ordre des vétérinaires.",
      "c": "Un particulier pratiquant des injections d'insuline sur son animal, sous l'accord et la prescription d'un vétérinaire."
    }
  },
  {
    "id": "chat_172",
    "theme": "chats",
    "n": 172,
    "q": "Comment l'ovulation est-elle déclenchée chez la chatte ?",
    "c": {
      "a": "Elle est déclenchée à intervalles réguliers, au cours de son cycle sexuel.",
      "b": "Elle est uniquement déclenchée par le coït.",
      "c": "Elle est déclenchée spontanément, mais l'ovulation a plus de chances d'aboutir s'il y a coït."
    }
  },
  {
    "id": "chat_173",
    "theme": "chats",
    "n": 173,
    "q": "Quel organisme est responsable de la délivrance et de la gestion des pédigrées félins ?",
    "c": {
      "a": "Le LOF.",
      "b": "Le LOOF.",
      "c": "La FCI."
    }
  },
  {
    "id": "chat_174",
    "theme": "chats",
    "n": 174,
    "q": "Comment le chat apprend-il ?",
    "c": {
      "a": "Par mimétisme.",
      "b": "Par renforcement négatif.",
      "c": "Par répétitions d'actions.",
      "d": "Contrairement au chien, il n'est pas sensible aux intonations de voix.",
      "e": "Comme le chien, il peut comprendre les demandes si les mots utilisés sont clairs, courts et simples."
    }
  },
  {
    "id": "chat_175",
    "theme": "chats",
    "n": 175,
    "q": "Quelles sont les affirmations correctes concernant le British Shorthair ?",
    "c": {
      "a": "C'est une race de chat au caractère « sentimental ».",
      "b": "C'est une race de chat au caractère « paisible ».",
      "c": "C'est un chat de type foreign.",
      "d": "C'est un chat de type semi-cobby.",
      "e": "C'est un chat de type longiligne."
    }
  },
  {
    "id": "chat_176",
    "theme": "chats",
    "n": 176,
    "q": "Quelles sont les affirmations correctes concernant les agents biologiques pathogènes ?",
    "c": {
      "a": "Les agents biologiques des groupes 3 et 4 peuvent causer une maladie grave chez l'homme et présenter un danger sérieux pour les travailleurs.",
      "b": "La teigne est une maladie issue d'une bactérie du groupe 2.",
      "c": "Le groupe 2 ressence les agents biologiques non pathogènes.",
      "d": "Les ectoparasites et les champignons sont des exemples d'agents biologiques pathogènes.",
      "e": "Les parasites internes et les virus sont des exemples d'agents biologiques pathogènes."
    }
  },
  {
    "id": "chat_177",
    "theme": "chats",
    "n": 177,
    "q": "Quelles sont les affirmations correctes concernant les plateformes en hauteur dans un enclos félin ?",
    "c": {
      "a": "Leur surface est comptabilisée dans la surface minimale qui est de 5m².",
      "b": "Leur surface n'est pas comptabilisée dans la surface minimale de l'enclos.",
      "c": "Elles offrent un espace d'observation pour le chat.",
      "d": "Elles permettent de séparer les chats dans un même enclos.",
      "e": "Leur surface est comptabilisée dans la surface minimale de l'enclos, qui est de 2m²."
    }
  },
  {
    "id": "chat_178",
    "theme": "chats",
    "n": 178,
    "q": "Quelles sont les affirmations correctes concernant l'insémination artificielle chez le chat ?",
    "c": {
      "a": "Elle n'est possible que pour les chattes ayant déjà eu une portée.",
      "b": "Elle est possible par voie intra-vaginale.",
      "c": "Elle est uniquement possible avec de la semence fraîche.",
      "d": "Elle est possible par voie intra-utérine."
    }
  },
  {
    "id": "chat_179",
    "theme": "chats",
    "n": 179,
    "q": "Quels sont les bons réflexes à avoir avec un chat s'étant brûlé ?",
    "c": {
      "a": "Immédiatement recouvrir la plaie pour éviter que le chat ne se lèche.",
      "b": "Immédiatement nettoyer la plaie avec un désinfectant.",
      "c": "Immédiatement passer la plaie sous l'eau froide.",
      "d": "Poser un bandage sec sur la plaie.",
      "e": "Poser un bandage mouillé de sérum physiologique sur la plaie."
    }
  },
  {
    "id": "chat_180",
    "theme": "chats",
    "n": 180,
    "q": "Quelles maladies félines sont des zoonoses ?",
    "c": {
      "a": "L'herpèsvirose.",
      "b": "La Péritonite Infectieuse Féline.",
      "c": "La toxoplasmose.",
      "d": "La chlamydiose.",
      "e": "La dirofilariose."
    }
  },
  {
    "id": "chat_181",
    "theme": "chats",
    "n": 181,
    "q": "Quels établissements doivent être recensés dans la Base Nationale des Opérateurs ?",
    "c": {
      "a": "Les familles d'accueil des refuges et associations.",
      "b": "Les éleveurs canins, sauf ceux produisant moins d'une portée par an.",
      "c": "Les éleveurs félins inscrits dans un livre généalogique, sauf ceux produisant moins d'une portée par an.",
      "d": "Les animaleries spécialisées en oiseaux et en poissons.",
      "e": "Les éducateurs canins."
    }
  },
  {
    "id": "chat_182",
    "theme": "chats",
    "n": 182,
    "q": "Quels sont les bons réflexes à avoir si une chatte ne s'occupe pas de son petit après la mise bas ?",
    "c": {
      "a": "Il ne faut surtout pas le toucher.",
      "b": "Il faut attendre que tous les chatons soient expulsés.",
      "c": "Il faut le frictionner pour stimuler ses premières respirations.",
      "d": "Il faut le porter à la mamelle.",
      "e": "Il faut lui faire boire le colostrum au biberon s'il ne peut pas téter."
    }
  },
  {
    "id": "chat_183",
    "theme": "chats",
    "n": 183,
    "q": "Que doit-on faire pour inscrire une portée de chatons au LOOF ?",
    "c": {
      "a": "Il faut faire une déclaration de saillie.",
      "b": "Il faut faire une déclaration de naissance.",
      "c": "Il faut que le chat soit identifié.",
      "d": "Il faut que le chat soit vacciné.",
      "e": "Il faut prouver que les géniteurs sont déjà inscrits au LOOF."
    }
  },
  {
    "id": "chat_184",
    "theme": "chats",
    "n": 184,
    "q": "Quelles sont les affirmations correctes concernant la période d'imprégnation chez le chat ?",
    "c": {
      "a": "C'est une période pendant laquelle le chaton apprend et retient le plus facilement des nouveaux comportements.",
      "b": "Elle débute avec l'ouverture des yeux.",
      "c": "Elle dure de la deuxième à la huitième semaine.",
      "d": "Il faut commencer à vacciner le chaton dès le début de la période d'imprégnation.",
      "e": "Pendant cette période, le chat commence à pouvoir faire ses besoins de manière autonome."
    }
  },
  {
    "id": "chat_185",
    "theme": "chats",
    "n": 185,
    "q": "Quelles sont les affirmations correctes concernant la stérilisation de la chatte ?",
    "c": {
      "a": "La stérilisation chimique ne diminue pas le risque de tumeurs mammaires.",
      "b": "La stérilisation chirurgicale s'effectue le plus souvent par l'ablation de l'utérus.",
      "c": "La stérilisation chimique permet de supprimer les périodes de chaleurs.",
      "d": "La stérilisation chirurgicale permet de supprimer les périodes de chaleurs.",
      "e": "Tous les types de stérilisation sont irréversibles."
    }
  },
  {
    "id": "chat_186",
    "theme": "chats",
    "n": 186,
    "q": "Quelle est la personne détentrice du TAV et chargée du bien-être des animaux à bord du véhicule de transport ?",
    "c": {
      "a": "Le convoyeur.",
      "b": "Le transporteur.",
      "c": "Le conducteur."
    }
  },
  {
    "id": "chat_187",
    "theme": "chats",
    "n": 187,
    "q": "Quels sont les délais recommandés pour la vermifugation et le déparasitage du chaton ?",
    "c": {
      "a": "Tous les mois jusqu'à ses 2 mois.",
      "b": "Tous les 3 mois de ses 6 à 12 mois.",
      "c": "Toutes les 2 semaines de ses 2 à 6 mois.",
      "d": "Toutes les semaines jusqu'à ses 3 semaines.",
      "e": "Tous les mois de ses 2 à 6 mois."
    }
  },
  {
    "id": "chat_188",
    "theme": "chats",
    "n": 188,
    "q": "Quels aliments peuvent être toxiques pour les chats ?",
    "c": {
      "a": "Les olives.",
      "b": "Les fruits secs.",
      "c": "Le raisin frais dénoyauté.",
      "d": "Le poireau.",
      "e": "La pomme."
    }
  },
  {
    "id": "chat_189",
    "theme": "chats",
    "n": 189,
    "q": "Quelles sont les affirmations correctes concernant le surpoids chez le chat ?",
    "c": {
      "a": "Il est souvent la cause d'une maladie.",
      "b": "Il est souvent dû à une alimentation trop riche.",
      "c": "Il peut causer de nombreuses pathologies au niveau du cœur.",
      "d": "Il peut être facilité par certains facteurs, comme la stérilisation.",
      "e": "Il rend le chat plus sensible aux infections."
    }
  },
  {
    "id": "chat_190",
    "theme": "chats",
    "n": 190,
    "q": "Quelles sont les affirmations correctes concernant le stress chez le chat ?",
    "c": {
      "a": "Il peut être causé par le bruit.",
      "b": "Il peut être évité en isolant l'animal le plus possible.",
      "c": "Il influe sur leur sociabilité.",
      "d": "Il doit être traité par des produits vétérinaires."
    }
  },
  {
    "id": "chat_191",
    "theme": "chats",
    "n": 191,
    "q": "Qu'atteste le pédigrée ?",
    "c": {
      "a": "La généalogie d'un animal.",
      "b": "L'appartenance d'un animal à une race donnée.",
      "c": "Pour les animaux de travail et de sport, la fonction de l'animal."
    }
  },
  {
    "id": "chat_192",
    "theme": "chats",
    "n": 192,
    "q": "Quelles sont les affirmations correctes concernant la gale chez le chat ?",
    "c": {
      "a": "Certains types de gales du chat sont des zoonoses.",
      "b": "Elle est à l'origine de lésions cutanées de forme circulaire.",
      "c": "Il existe 3 sortes de gale différentes chez le chat."
    }
  },
  {
    "id": "chat_193",
    "theme": "chats",
    "n": 193,
    "q": "Quelles sont les affirmations correctes concernant le fait de manipuler un jeune chaton trop souvent ?",
    "c": {
      "a": "C'est conseillé, cela aide sa socialisation intra-spécifique.",
      "b": "C'est conseillé, cela aide sa socialisation inter-spécifique.",
      "c": "Ce n'est pas conseillé, cela peut engendrer des troubles du comportement à l'âge adulte."
    }
  },
  {
    "id": "chat_194",
    "theme": "chats",
    "n": 194,
    "q": "Quelle est l'affirmation correcte concernant la reproduction chez le chat ?",
    "c": {
      "a": "En élevage, il est nécessaire de connaître le jour de l'ovulation chez la femelle.",
      "b": "Des saillies multiples offrent de grandes chances d'aboutir à une fécondation de l'ovule.",
      "c": "Les saillies sont possibles uniquement de mars à octobre."
    }
  },
  {
    "id": "chat_195",
    "theme": "chats",
    "n": 195,
    "q": "Quels sont les bons réflexes à avoir avec un chat ayant été mordu par un serpent ?",
    "c": {
      "a": "Empêcher le chat de bouger.",
      "b": "Nettoyer et désinfecter la plaie.",
      "c": "Appliquer une compresse chaude sur la plaie.",
      "d": "Appliquer une compresse froide sur la plaie.",
      "e": "Stimuler le chat afin qu'il reste éveillé et actif avant l'intervention d'un vétérinaire."
    }
  },
  {
    "id": "chat_196",
    "theme": "chats",
    "n": 196,
    "q": "Qu'est-ce que le principe de la marche en avant ?",
    "c": {
      "a": "C'est une technique de prophylaxie sanitaire.",
      "b": "Elle consiste à se déplacer des zones à risque aux zones sensibles sans revenir sur ses pas.",
      "c": "C'est une technique obligatoire pour toutes les structures hébergeant des animaux.",
      "d": "Elle permet d'éviter les risques de contaminations croisées.",
      "e": "C'est une technique de nettoyage et de désinfection."
    }
  },
  {
    "id": "chat_197",
    "theme": "chats",
    "n": 197,
    "q": "Quelles sont les affirmations correctes concernant la période de transition chez le chat ?",
    "c": {
      "a": "Pendant cette période, les sens auditifs, visuels et olfactifs du chaton se développent.",
      "b": "Elle débute avec l'ouverture des oreilles.",
      "c": "Elle se termine par la maîtrise de la station debout.",
      "d": "Elle précède la période d'imprégnation.",
      "e": "Elle se termine vers l'âge de deux semaines."
    }
  },
  {
    "id": "chat_198",
    "theme": "chats",
    "n": 198,
    "q": "Quelles sont les affirmations correctes concernant l'ovulation chez la chatte ?",
    "c": {
      "a": "Elle apparaît environ 20 à 50 heures après le coït.",
      "b": "Elle apparaît systématiquement 2 à 3 jours après le début des chaleurs.",
      "c": "Elle est uniquement déclenchée par stimulation vaginale.",
      "d": "Elle apparaît environ 72 heures après le coït."
    }
  },
  {
    "id": "chat_199",
    "theme": "chats",
    "n": 199,
    "q": "Quelles teintes de robes sont officiellement reconnues par le LOOF ?",
    "c": {
      "a": "Le blanc.",
      "b": "Le gris.",
      "c": "L'ambre.",
      "d": "Le sépia.",
      "e": "Le noir."
    }
  },
  {
    "id": "chat_200",
    "theme": "chats",
    "n": 200,
    "q": "Quelles sont les affirmations correctes concernant la vermifugation et le déparasitage chez le chat ?",
    "c": {
      "a": "La vermifugation permet de prévenir ou d'éliminer les endoparasites.",
      "b": "La vermifugation permet de prévenir ou d'éliminer les ectoparasites.",
      "c": "Le déparasitage permet de prévenir ou d'éliminer les ectoparasites.",
      "d": "Le déparasitage permet de prévenir ou d'éliminer les endoparasites.",
      "e": "Il s'agit toujours de deux traitements différents."
    }
  },
  {
    "id": "chat_201",
    "theme": "chats",
    "n": 201,
    "q": "Quelles sont les affirmations correctes concernant les véhicules de transport ?",
    "c": {
      "a": "Les surfaces en contact avec les animaux doivent être nettoyées et désinfectées tous les jours.",
      "b": "Les transporteurs doivent toujours utiliser leur propre matériel.",
      "c": "Les véhicules doivent être équipés de manière à ce que le conducteur puisse toujours garder un œil sur les animaux transportés.",
      "d": "Pour un transport en voiture, les plus grandes espèces peuvent voyager à l'avant de la voiture si elles sont attachées avec un dispositif adapté.",
      "e": "Les véhicules ne doivent pas avoir plus de deux niveaux de chargement."
    }
  },
  {
    "id": "chat_202",
    "theme": "chats",
    "n": 202,
    "q": "Quelles sont les affirmations correctes concernant la panleucopénie féline ?",
    "c": {
      "a": "Elle est également appelée « Typhus ».",
      "b": "Elle est également appelée « Coryza ».",
      "c": "C'est un vice rédhibitoire.",
      "d": "C'est une zoonose.",
      "e": "Elle est à l'origine de troubles respiratoires sévères."
    }
  },
  {
    "id": "chat_203",
    "theme": "chats",
    "n": 203,
    "q": "À quel âge peut-on observer les premiers comportements sexuels chez le chat mâle ?",
    "c": {
      "a": "Vers 3 semaines.",
      "b": "Vers 1 mois.",
      "c": "Vers 2 à 3 mois.",
      "d": "Vers 3 à 4 mois."
    }
  },
  {
    "id": "chat_204",
    "theme": "chats",
    "n": 204,
    "q": "Quelle est l'affirmation correcte concernant la période réfractaire chez le chat ?",
    "c": {
      "a": "Elle n'affecte que la femelle.",
      "b": "Elle a lieu si l'ovule n'est pas fécondé après accouplement.",
      "c": "C'est le repos entre deux expulsions de chatons, pendant la mise bas.",
      "d": "Elle dure de 1 à 3 semaines chez la chatte.",
      "e": "Elle dure jusqu'à 1 heure chez la chatte."
    }
  },
  {
    "id": "chat_205",
    "theme": "chats",
    "n": 205,
    "q": "Combien existe-t-il de types d'inscription au LOOF ?",
    "c": {
      "a": "1.",
      "b": "2.",
      "c": "3.",
      "d": "4.",
      "e": "5."
    }
  },
  {
    "id": "chat_206",
    "theme": "chats",
    "n": 206,
    "q": "En génétique, qu'est-ce que le phénotype ?",
    "c": {
      "a": "C'est la composition des allèles de tous les gènes d'un individu.",
      "b": "C'est l'ensemble des traits observables sur un individu.",
      "c": "C'est une portion d'ADN contenant un caractère génétique spécifique."
    }
  },
  {
    "id": "chat_207",
    "theme": "chats",
    "n": 207,
    "q": "Quelles sont les affirmations correctes concernant un chat très inactif qui préfère s'isoler ?",
    "c": {
      "a": "C'est peut-être un signe de trouble du développement.",
      "b": "C'est peut-être un symptôme d'une maladie.",
      "c": "Il faut le forcer au contact, pour qu'il apprenne qu'il n'y a aucun risque.",
      "d": "Il est préférable de l'emmener immédiatement chez le vétérinaire.",
      "e": "Il est préférable de l'emmener chez le vétérinaire si ce comportement est nouveau et dure plusieurs jours."
    }
  },
  {
    "id": "chat_208",
    "theme": "chats",
    "n": 208,
    "q": "Quelles sont les méthodes de stérilisation chirurgicale des chattes ?",
    "c": {
      "a": "La ligature des trompes.",
      "b": "L'ablation des ovaires.",
      "c": "L'ovario-hystérectomie.",
      "d": "L'implant sous-cutané.",
      "e": "L'ovariectomie."
    }
  },
  {
    "id": "chat_209",
    "theme": "chats",
    "n": 209,
    "q": "À quelles étapes du développement du chat la maîtrise de la station debout correspondent-elles ?",
    "c": {
      "a": "Au début de la période de transition.",
      "b": "À la fin de la période néonatale.",
      "c": "Au début de la période d'imprégnation.",
      "d": "À la fin de la période de transition.",
      "e": "À la fin de la période d'imprégnation."
    }
  },
  {
    "id": "chat_210",
    "theme": "chats",
    "n": 210,
    "q": "Quelle est l'affirmation correcte concernant la maladie de Lyme chez le chat ?",
    "c": {
      "a": "Il n'existe pas de vaccin pour les chats.",
      "b": "Le chat peut être vacciné dès 8 semaines.",
      "c": "C'est une maladie qui n'affecte pas les chats."
    }
  },
  {
    "id": "chat_211",
    "theme": "chats",
    "n": 211,
    "q": "Quelles sont les affirmations correctes concernant la vitamine C ?",
    "c": {
      "a": "C'est une vitamine hydrosoluble.",
      "b": "On la retrouve principalement dans la viande et le poisson.",
      "c": "Elle peut être synthétisée au niveau de la peau au contact du soleil.",
      "d": "Elle participe au développement des défenses immunitaires.",
      "e": "Elle participe à la production de globules rouges."
    }
  },
  {
    "id": "chat_212",
    "theme": "chats",
    "n": 212,
    "q": "Quelles teintes de robes sont officiellement reconnues par le LOOF ?",
    "c": {
      "a": "Le fauve.",
      "b": "Le roux.",
      "c": "Le mauve.",
      "d": "Le perle.",
      "e": "Le crème."
    }
  },
  {
    "id": "chat_213",
    "theme": "chats",
    "n": 213,
    "q": "Quel vice rédhibitoire félin possède un délai de suspicion de 21 jours ?",
    "c": {
      "a": "La leucose féline.",
      "b": "La péritonite infectieuse féline.",
      "c": "Le typhus.",
      "d": "Le FIV.",
      "e": "La leucopénie infectieuse."
    }
  },
  {
    "id": "chat_214",
    "theme": "chats",
    "n": 214,
    "q": "Que signifie le fait qu'un chat est une espèce à « polyoestrus » ?",
    "c": {
      "a": "Plusieurs ovulations peuvent se succéder au cours d'une même période de reproduction.",
      "b": "Les périodes d'activité sexuelle dépendent de la photopériode.",
      "c": "L'ovulation est uniquement déclenchée par stimulation vaginale."
    }
  },
  {
    "id": "chat_215",
    "theme": "chats",
    "n": 215,
    "q": "Quelles sont des astuces d'apprentissage de la propreté à un chaton ?",
    "c": {
      "a": "Il est préférable de placer la litière, les gamelles et le couchage au même endroit.",
      "b": "Il faut nettoyer la litière au moins une fois tous les 2 jours.",
      "c": "Il faut éviter de nettoyer les accidents à l'eau de javel.",
      "d": "S'il y a plusieurs chats, il est recommandé de proposer une litière par chat au maximum.",
      "e": "Il faut placer le chaton dans sa litière après les repas, la sieste et le jeu."
    }
  },
  {
    "id": "chat_216",
    "theme": "chats",
    "n": 216,
    "q": "Que risque un individu exerçant une activité de pension animale sans certificat de capacités valide ?",
    "c": {
      "a": "Jusqu'à 2000€ d'amende.",
      "b": "Jusqu'à 5500€ d'amende.",
      "c": "Jusqu'à 7500€ d'amende."
    }
  },
  {
    "id": "chat_217",
    "theme": "chats",
    "n": 217,
    "q": "Quelles sont les affirmations correctes concernant le logement du chat dans un établissement professionnel ?",
    "c": {
      "a": "Les chats doivent passer du temps ensemble dans un grand espace pour faciliter leur socialisation intra-spécifique.",
      "b": "Le personnel de l'établissement doit obligatoirement interagir avec les chats tous les jours.",
      "c": "Les chats doivent seulement disposer d'une litière, de nourriture et d'eau dans leur boxe.",
      "d": "Les jeunes chatons non sevrés vivant avec leur mère ne doivent pas être manipulés par le personnel de l'établissement.",
      "e": "Les chats doivent toujours disposer de plusieurs niveaux de plateformes dans leur boxe."
    }
  },
  {
    "id": "chat_218",
    "theme": "chats",
    "n": 218,
    "q": "Comment le chat peut-il identifier des phéromones ?",
    "c": {
      "a": "Grâce au flehmen.",
      "b": "Grâce au marquage.",
      "c": "Grâce à l'organe de Jacobson.",
      "d": "Par léchage.",
      "e": "Grâce au colostrum."
    }
  },
  {
    "id": "chat_219",
    "theme": "chats",
    "n": 219,
    "q": "Quel est le morphotype d'un chat au corps très élancé et à l'ossature fine, avec une tête triangulaire et un long museau fin ?",
    "c": {
      "a": "Bréviligne.",
      "b": "Long et puissant.",
      "c": "Bracoïde.",
      "d": "Oriental.",
      "e": "Semi-cobby."
    }
  },
  {
    "id": "chat_220",
    "theme": "chats",
    "n": 220,
    "q": "Quelle maladie est causée par le parvovirus félin ?",
    "c": {
      "a": "Le typhus.",
      "b": "Le coryza.",
      "c": "La leucose féline."
    }
  },
  {
    "id": "chat_221",
    "theme": "chats",
    "n": 221,
    "q": "Quelles sont les affirmations correctes concernant la lutte contre les nuisibles dans un refuge ?",
    "c": {
      "a": "Les actions de lutte contre les nuisibles sont détaillées dans le registre du suivi sanitaire.",
      "b": "La maîtrise de la température permet de limiter la prolifération des nuisibles.",
      "c": "Tant que l'on évite les boxes des animaux, les produits chimiques anti-rongeurs peuvent être utilisés dans le reste des locaux.",
      "d": "Le nettoyage et la désinfection sont suffisants pour prévenir la prolifération des nuisibles.",
      "e": "Pour lutter contre les rongeurs, il est préférable d'utiliser des pièges plutôt que des produits chimiques."
    }
  },
  {
    "id": "chat_222",
    "theme": "chats",
    "n": 222,
    "q": "Quelles sont les affirmations correctes concernant la boisson ?",
    "c": {
      "a": "Les besoins en eau sont plus importants chez les chats qui se nourrissent de croquettes.",
      "b": "Certains chats doivent être encouragés à boire de l'eau dans une gamelle.",
      "c": "Dans la nature, les chats retrouvent principalement leurs besoins en eau dans les flaques d'eau stagnantes.",
      "d": "Le chat doit consommer 50 à 75 ml d'eau / kilo / jour.",
      "e": "Le chat doit consommer 100 ml d'eau / kilo / jour."
    }
  },
  {
    "id": "chat_223",
    "theme": "chats",
    "n": 223,
    "q": "Qu'est-ce que la socialisation intra-spécifique chez le chat ?",
    "c": {
      "a": "Le chat apprend qu'il fait partie de l'espèce chat.",
      "b": "Le chat commence à se socialiser avec ses maîtres.",
      "c": "Le chat apprend les rituels de communication propres à son espèce.",
      "d": "Elle commence pendant la période d'imprégnation.",
      "e": "Le chat commence à se socialiser avec d'autres espèces."
    }
  },
  {
    "id": "chat_224",
    "theme": "chats",
    "n": 224,
    "q": "Quelle est la méthode de stérilisation chimique pour les mâles ?",
    "c": {
      "a": "L'implant sous-cutané.",
      "b": "L'injection d'hormones.",
      "c": "La ligature du spermiducte.",
      "d": "L'ablation des testicules.",
      "e": "La pilule contraceptive."
    }
  },
  {
    "id": "chat_225",
    "theme": "chats",
    "n": 225,
    "q": "Quelle est l'affirmation correcte concernant le Devon Rex ?",
    "c": {
      "a": "C'est un chat nu.",
      "b": "C'est un chat de type cobby.",
      "c": "C'est un chat au pelage long.",
      "d": "C'est un chat au pelage frisé."
    }
  }
];
