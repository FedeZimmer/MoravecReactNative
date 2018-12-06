import exponent from "superscript-number";

export default {
    termsAndConditions: {
        text: "Estoy de acuerdo en participar en la investigación online de la cognición aritmética titulada " +
        "'Moravec'. Durante esta experiencia se recogerán datos cronométricos de mis respuestas. Toda la información " +
        "será anónima y será utilizada solamente por los investigadores responsables del estudio.\n\nMi " +
        "participación es voluntaria y puede ser interrumpida en cualquier momento. Entiendo que los " +
        "datos recogidos se guardan en una base de datos que servirá para su tratamiento informático no nominativo.",
        agreeButton: "Acepto los términos",
    },
    personalInfo: {
        instructions: "Por favor completá el cuestionario. Toda la información que nos das es para uso " +
        "científico, sin fines comerciales ni publicitarios.\nNos alegra mucho que participes. Gracias.",
        birthDate: {
            label: "Fecha de Nacimiento",
            select: "Seleccioná una fecha"
        },
        gender: {
            label: "Género",
            options: {
                male: "Masculino",
                female: "Femenino",
                other: "Otro",
            },
        },
        achievedStudies: {
            label: "Estudios alcanzados",
            options: {
                schoolCompleted: "Primaria terminada",
                highSchoolInProgress: "Secundaria en curso",
                highSchoolCompleted: "Secundaria terminada",
                collegeInProgress: "Universitario en curso",
                collegeCompleted: "Universitario finalizado",
            },
        },
        deftHand: {
            label: "Mano hábil",
            options: {
                rightHanded: "Diestro",
                leftHanded: "Zurdo",
                ambidextrous: "Ambas",
            },
        },
        nativeLanguage: {
            label: "Lengua materna - Primer idioma",
            options: {
                english: "Inglés",
                spanish: "Español",
                french: "Francés",
                portuguese: "Portugués",
                other: "Otro",
            },
        },
        numberOfLanguages: "¿Cuántos idiomas hablas?",
        musicCompetences: "¿Cuál es su habilidad musical?",
        musicListener: {
            label: "Oyente:",
            options: {
                any: "Nula",
                moderate: "Moderada",
                advanced: "Avanzada",
            },
        },
        musicInstrumentalist: {
            label: "Instrumentista:",
            options: {
                any: "Nula",
                moderate: "Moderada",
                advanced: "Avanzada",
            },
        },
        musicTheory: {
            label: "Profesional:",
            options: {
                any: "Nula",
                moderate: "Moderada",
                advanced: "Avanzada",
            },
        },
        submitButton: "Listo! Empezar a jugar"
    },
    home: {
        playButton: "Jugar",
        practiceButton: "Práctica",
        tutorialButton: "Tutorial",
        statsButton: "Estadísticas",
    },
    game: {
        headerTitle: "Arcade",
        levelSelection: {
            playButton: "Jugar"
        },
        header: {
            availableHints: "Pistas",
            correctAnswerMessage: "Bien!",
            wrongAnswerMessage: "Era {{correctAnswer}} y no {{wrongAnswer}}",
            youCanDoBetterMessage: "Podés hacerlo más rápido",
        },
        levelFinished: {
            levelNumber: "Nivel",
            levelCompletedMessage: {
                first: "Felicitaciones.",
                second: "Nivel {{levelNumber}} completado."
            },
            retryMessage: "Vuelva a intentarlo",
            correctAnswers: "Respondiste bien {{correctAnswers}} de {{totalTrials}} operaciones.",
            mainMenuButton: "Menú principal",
        }
    },
    practice: {
        headerTitle: "Práctica",
        practiceModeSelection: {
            difficulties: {
                initial: "Inicial",
                intermediate: "Medio",
                advanced: "Avanzado"
            }
        }
    },
    tutorial: {
        headerTitle: "Tutorial",
        common: {
            examples: "Ejemplos"
        },
        tutorialSelection: {
            addition: "Suma",
            multiplication: "Producto",
            toSquare2: "Potencia (2 dígitos)",
            toSquare3: "Potencia (3 dígitos)",
            majorSystem: "Sistema Mayor",
            toSquare4: "Potencia (4 dígitos)"
        },
        addition: {
            headerTitle: "Suma",
            sectionTitle: "+ suma",
            firstSentence: "Acá empezas a familiarizarte con el método de izquierda a derecha. Primero sumás las " +
            "decenas del segundo número al primero y, por último, las unidades del segundo número al resultado " +
            "anterior.",
            secondSentence: "Este ejemplo es más dificil porque las unidades suman un número mayor que 10."
        },
        multiplication: {
            headerTitle: "Producto",
            sectionTitle: "x producto",
            firstSentence: "Para resolver multiplicaciones mentalmente también tenes que familiarizarte con hacerlo " +
            "de izquierda a derecha. Multiplicando primero las decenas del número mayor y luego las unidades.",
            secondSentence: "Otro ejemplo para ejercitar la multiplicación de izquierda a derecha.",
            thirdSentence: "Se utiliza el mismo método cuando el número mayor es de 3 o 4 dígitos.\nSiempre se " +
            "multiplica de izquierda a derecha y se suman progresivamente los resultados parciales."
        },
        toSquare2: {
            headerTitle: "Potencia",
            sectionTitle: `x${exponent(2)} potencia (2d)`,
            firstSentence: "Usamos la fórmula " + `x${exponent(2)} = (x+a)(x-a) + a${exponent(2)}` + ", donde x es " +
            "el número de dos dígitos que quiero elevar al cuadrado y a es la diferencia entre x y el multiplo de " +
            "10 más cercano a x.\nSi x es 12, a es 2",
            secondSentence: "Podemos ver que si x = 46, entonces a = 4.\nHacemos " +
            `46${exponent(2)} = (46+4)(46-4) + 4${exponent(2)}`
        },
        toSquare3: {
            headerTitle: "Potencia",
            sectionTitle: `x${exponent(2)} potencia (3d)`,
            firstSentence: "Cuando elevamos un número de tres dígitos también usamos " +
            `x${exponent(2)} = (x+a)(x-a) + a${exponent(2)}` + ", pero en este caso a es un número de dos dígitos. " +
            "En este ejemplo x es 512 y a es 12. Pero para elevar 12 al cuadrado consideramos x = 12 y a = 2.",
            secondSentence: "Otro ejemplo con x = 684 y a = 16. Después, para elevar 16 al cuadrado usamos x = 16 y " +
            "a = 4.",
        },
        toSquare4: {
            headerTitle: "Potencia",
            sectionTitle: `x${exponent(2)} potencia (4d)`,
            firstSentence: "Para números de cuatro dígitos usamos la ya conocida formula " +
            `x${exponent(2)} = (x+a)(x-a) + a${exponent(2)}` + " pero para calcular " + `a${exponent(2)}` +
            " utilizamos el Sistema Mayor para memorizar la primera parte del resultado.\nSi x es 6.382, a es 382. " +
            "6.764 x 6.000 es 40 millones, 584 mil, entonces memorizamos 584 usando el Sistema Mayor.",
            secondSentence: "Para no olvidar 584, formamos una palabra con sus dígitos. 5 puede ser L, 8 G y 4 C, " +
            "entonces 584 puede ser codificado como LaGo oCa. Con esto en mente seguimos los pasos de siempre y " +
            "obtenemos 145.924.\nSumamos 584 (LaGo oCa) y 145 = 729. Juntando todo 40 millones 729 mil 924.",
        },
        majorSystem: {
            headerTitle: "Sistema mayor",
            sectionTitle: "Sistema mayor",
            table: "Tabla",
            sentence: "En el Sistema Mayor de Memoria, asociamos cada dígito del número a recordar con una " +
            "consonante como se ve en la tabla. Usando estas letras en orden formamos palabras, agregando las " +
            "vocales necesarias.\nPor ejemplo, \"lupa\" es 59 porque \"L\" es 5, \"P\" es 9 y las vocales no son nada."
        }
    },
    stats: {
        headerTitle: "Estadísticas",
        statsSelection: {
            header: {
                category: "Operación",
                averageTime: "Tiempo promedio",
                effectiveness: "Correctas"
            },
            unavailableStats: "Aún no hay datos",
        },
        chart: {
            horizontalAxisLabel: "Cuentas",
            verticalAxisLabel: "Tiempo de respuesta (seg)",
        }
    }
};
