import exponent from "superscript-number";

export default {
    termsAndConditions: {
        text: "J’accepte de participer à la recherche en ligne intitulée «Moravec» sur le calcul mental. Au cours de " +
        "cette expérience des données chronométriques sur mes réponses seront recueillies. Toutes les informations " +
        "seront anonymes et ne permettent donc pas de remonter vers moi. Elles seront destinées uniquement aux " +
        "chercheurs responsables de l’étude.\n\nMa participation est volontaire, je peux à tout moment " +
        "l’interrompre. J’ai compris que les données recueillies seront conservées dans une base de données qui " +
        "servira à un traitement informatisé non nominatif.",
        agreeButton: "Accord",
    },
    personalInfo: {
        instructions: "S'il vous plaît remplissez le questionnaire. Toutes les données que vous nous " +
        "fournissez seront uniquement utilisées à des fins scientifiques et en aucun cas dans un but commercial ou " +
        "publicitaire.\nNous vous remercions de votre participation.",
        birthDate: {
            label: "Date de naissance",
            select: "Définir la date"
        },
        gender: {
            label: "Sexe",
            options: {
                male: "Masculin",
                female: "Féminin",
                other: "Autre",
            },
        },
        achievedStudies: {
            label: "Niveau d'études",
            options: {
                schoolCompleted: "École primaire achevée",
                highSchoolInProgress: "École secondaire en cours",
                highSchoolCompleted: "École secondaire achevée",
                collegeInProgress: "Études universitaires en cours",
                collegeCompleted: "Études universitaires achevées",
            },
        },
        deftHand: {
            label: "Préférence manuelle",
            options: {
                rightHanded: "Droitier",
                leftHanded: "Gaucher",
                ambidextrous: "Ambidextre",
            },
        },
        nativeLanguage: {
            label: "Langue natale - Première langue",
            options: {
                english: "Anglais",
                spanish: "Espagnol",
                french: "Français",
                portuguese: "Portugais",
                other: "Autre",
            },
        },
        numberOfLanguages: "Combien de langues parlez-vous?",
        musicCompetences: "Quelle est votre compétence musicale?",
        musicListener: {
            label: "Auditeur:",
            options: {
                any: "Aucune",
                moderate: "Modérée",
                advanced: "Élevée",
            },
        },
        musicInstrumentalist: {
            label: "Instrumentiste:",
            options: {
                any: "Aucune",
                moderate: "Modérée",
                advanced: "Élevée",
            },
        },
        musicTheory: {
            label: "En théorie musicale:",
            options: {
                any: "Aucune",
                moderate: "Modérée",
                advanced: "Élevée",
            },
        },
        submitButton: "Jouer"
    },
    home: {
        playButton: "Jouer",
        practiceButton: "S'entraîner",
        tutorialButton: "Tutoriel",
        statsButton: "Statistiques",
    },
    game: {
        headerTitle: "Arcade",
        levelSelection: {
            playButton: "Jouer"
        },
        header: {
            availableHints: "Indices",
            correctAnswerMessage: "Bien!",
            wrongAnswerMessage: "C'était {{correctAnswer}} ce n'était pas {{wrongAnswer}}",
            youCanDoBetterMessage: "Vous pouvez aller plus vite",
        },
        levelFinished: {
            levelNumber: "Niveau",
            levelCompletedMessage: "Félicitations. Niveau terminé.",
            retryMessage: "Essayez à nouveau",
            correctAnswers: "Vous avez réussi {{correctAnswers}}/{{totalTrials}} calculs",
            mainMenuButton: "Menu principal",
        }
    },
    practice: {
        headerTitle: "S'entraîner",
        practiceModeSelection: {
            difficulties: {
                initial: "Débutant",
                intermediate: "Moyen",
                advanced: "Avancé"
            }
        }
    },
    tutorial: {
        headerTitle: "Tutorial",
        common: {
            examples: "Exemples"
        },
        tutorialSelection: {
            addition: "Somme",
            multiplication: "Multiplication",
            toSquare2: "Au carré (2 chiffres)",
            toSquare3: "Au carré (3 chiffres)",
            majorSystem: "Grand Système",
            toSquare4: "Au carré (4 chiffres)"
        },
        addition: {
            headerTitle: "Somme",
            sectionTitle: "+ somme",
            firstSentence: "Ici, vous commencez à vous familiariser avec la méthode de gauche à droite. Commencez " +
            "toujours par additionner les dizaines du deuxième nombre au premier nombre. Ensuite, ajoutez les " +
            "unités du deuxième nombre au résultat obtenu.",
            secondSentence: "Cet exemple est plus difficile parce que les unités, une fois additionnées, donnent " +
            "un nombre supérieur à 10."
        },
        multiplication: {
            headerTitle: "Multiplication",
            sectionTitle: "x multiplication",
            firstSentence: "Pour résoudre des multiplications mentalement, vous devez aussi vous familiariser avec " +
            "la méthode de gauche à droite. Commencez par multiplier les dizaines du plus grand nombre, puis " +
            "les unités.",
            secondSentence: "Autre exemple pour exercer la multiplication de gauche à droite.",
            thirdSentence: "Le même procédé est utilisé lorsque le nombre le plus élevé comprend 3 ou 4 chiffres." +
            "\nMultipliez toujours de gauche à droite, en additionnant progressivement les résultats partiels.",
        },
        toSquare2: {
            headerTitle: "Au carré",
            sectionTitle: `x${exponent(2)} carré (2d)`,
            firstSentence: "Nous utilisons la formule " + `x${exponent(2)} = (x+a)(x-a) + a${exponent(2)}` + ", où " +
            "x est le nombre de deux chiffres que nous voulons élever au carré, et a est la différence entre x et " +
            "le multiple de 10 le plus proche de x.\nPar exemple, si x est égal à 12, a est égal à 2.",
            secondSentence: "Nous pouvons voir que si x = 46, alors a = 4.\nNous faisons " +
            `46${exponent(2)} = (46+4)(46-4) + 4${exponent(2)}`
        },
        toSquare3: {
            headerTitle: "Au carré",
            sectionTitle: `x${exponent(2)} carré (3d)`,
            firstSentence: "Lorsque nous élevons au carré un nombre de 3 chiffres, nous utilisons la même méthode " +
            `x${exponent(2)} = (x+a)(x-a) + a${exponent(2)}` + ", sauf que cette fois-ci a est un nombre de deux " +
            "chiffres. Dans ce cas, nous prenons x = 512 et a = 12. Ensuite, pour élever 12 au carré, on prendra " +
            "x = 12 et a = 2.",
            secondSentence: "Voici un autre exemple avec x = 684, a = 16. Ensuite, pour élever 16 au carré nous " +
            "utilisons x = 16, a = 4."
        },
        toSquare4: {
            headerTitle: "Au carré",
            sectionTitle: `x${exponent(2)} carré (4d)`,
            firstSentence: "Pour les nombres à 4 chiffres, nous utilisons la formule déjà connue " +
            `x${exponent(2)} = (x+a)(x-a) + a${exponent(2)}` + ", mais avant de calculer " + `a${exponent(2)}` +
            ", nous utilisons le Grand Système pour mémoriser la première partie du résultat.\nSi x est 6382, a " +
            "est 382. 6764 x 6000 est 40 millions 584 mille alors nous mémorisons 584 en utilisant le Grand Système.",
            secondSentence: "Pour ne pas oublier 584, nous formons un mot avec ses chiffres. Si 5 correspond à L, " +
            "8 à G et 4 à C alors 584 peut être codifié comme \"LoGiQue\". Tout en gardant ce mot en tête, nous " +
            "suivons le même procédé et nous obtenons 145.924.\nNous additionons 584 (\"LoGiQue\") et 145 pour " +
            "obtenir 729. Ce qui nous donne au total: 40 millions 729 mille 924.",
        },
        majorSystem: {
            headerTitle: "Grand Système",
            sectionTitle: "Grand Système",
            table: "Table",
            sentence: "Dans le Grand Système de Mémoire, nous associons chaque chiffre du nombre à une consonne, " +
            "comme on peut voir dans la table. En utilisant les lettres en ordre, nous formons des mots en ajoutant " +
            "des voyelles si nécessaire.\nPar exemple, \"loupe\" correspond à 59 parce que \"L\" vaut 5, \"P\" vaut " +
            "9 et les voyelles ne comptent pas."
        }
    },
    stats: {
        headerTitle: "Statistiques",
        statsSelection: {
            header: {
                category: "Opération",
                averageTime: "Temps moyen",
                effectiveness: "Efficacité"
            },
            unavailableStats: "Aucune donnée",
        },
        chart: {
            horizontalAxisLabel: "Essais",
            verticalAxisLabel: "Temps de réponse (sec)",
        }
    }
};
