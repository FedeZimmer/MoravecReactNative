import exponent from "superscript-number";

export default {
    termsAndConditions: {
        text: "Eu concordo em participar da pesquisa on-line intitulada Moravec sobre aritmética mental. Durante " +
        "esta experiência dados cronométricos sobre minhas respostas serão recolhidos. Todas as informações serão " +
        "anônimas e portanto, não poderão identificar-me. Eles são destinadas apenas aos pesquisadores responsáveis " +
        "pelo estudo.\n\nA minha participação é voluntária e eu posso a qualquer momento interromper-la. Eu " +
        "entendi que os dados recolhidos serão mantidas em um banco de dados para processamentos anônimos.",
        agreeButton: "Aceito",
    },
    personalInfo: {
        instructions: "Por favor, preencha o questionário. Toda a informação que você nos presenteia é " +
        "para uso científico, sem fins comerciais nem publicitários.\nEstamos muito contentes pela sua participação. " +
        "Obrigado.",
        birthDate: {
            label: "Data de nascimento",
            select: "Definir data"
        },
        gender: {
            label: "Género",
            options: {
                male: "Masculino",
                female: "Feminino",
                other: "Outro",
            },
        },
        achievedStudies: {
            label: "Estudos alcançados",
            options: {
                schoolCompleted: "Primário completo",
                highSchoolInProgress: "Secundário em curso",
                highSchoolCompleted: "Secundário completo",
                collegeInProgress: "Terciário em curso",
                collegeCompleted: "Terciário completo",
            },
        },
        deftHand: {
            label: "Mao hábil",
            options: {
                rightHanded: "Destro",
                leftHanded: "Canhoto",
                ambidextrous: "Ambas",
            },
        },
        nativeLanguage: {
            label: "Língua native - Primeira língua",
            options: {
                english: "Inglês",
                spanish: "Espanhol",
                french: "Francês",
                portuguese: "Português",
                other: "Outro",
            },
        },
        numberOfLanguages: "Quantas línguas você fala?",
        musicCompetences: "Qual é a sua habilidade musical?",
        musicListener: {
            label: "Ouvinte:",
            options: {
                any: "Nenhum",
                moderate: "Moderada",
                advanced: "Avançado",
            },
        },
        musicInstrumentalist: {
            label: "Instrumentista:",
            options: {
                any: "Nenhum",
                moderate: "Moderada",
                advanced: "Avançado",
            },
        },
        musicTheory: {
            label: "Estudante:",
            options: {
                any: "Nenhum",
                moderate: "Moderada",
                advanced: "Avançado",
            },
        },
        submitButton: "Jogar"
    },
    home: {
        playButton: "Jogar",
        practiceButton: "Prática",
        tutorialButton: "Tutorial",
        statsButton: "Estatísticas",
    },
    game: {
        headerTitle: "Arcade",
        levelSelection: {
            playButton: "Jogar"
        },
        header: {
            availableHints: "Pistas",
            correctAnswerMessage: "Bem!",
            wrongAnswerMessage: "Era {{correctAnswer}} não era {{wrongAnswer}}",
            youCanDoBetterMessage: "Você pode faze-lo mais rápido",
        },
        levelFinished: {
            levelNumber: "Nível",
            levelCompletedMessage: {
                first: "Parabéns.",
                second: "Nível completado."
            },
            retryMessage: {
                first: "Nível {{levelNumber}} não concluído.",
                second: "Volte a tenta-lo"
            },
            correctAnswers: "Você respondeu {{correctAnswers}}/{{totalTrials}} corretamente",
            mainMenuButton: "Menu principal",
        }
    },
    practice: {
        headerTitle: "Prática",
        practiceModeSelection: {
            difficulties: {
                initial: "Inicial",
                intermediate: "Médio",
                advanced: "Avançado"
            }
        }
    },
    tutorial: {
        headerTitle: "Tutorial",
        common: {
            examples: "Exemplos"
        },
        tutorialSelection: {
            addition: "Suma",
            multiplication: "Multiplicação",
            toSquare2: "Ao quadrado (2 dígitos)",
            toSquare3: "Ao quadrado (3 dígitos)",
            majorSystem: "Sistema Maior",
            toSquare4: "Ao quadrado (4 dígitos)"
        },
        addition: {
            headerTitle: "Suma",
            sectionTitle: "+ suma",
            firstSentence: "Aqui você começa a se familiarizar com o método de esquerda a direita. Primeiro você " +
            "soma as dezenas do segundo número ao primeiro e por último as unidades do segundo numero ao " +
            "resultado anterior.",
            secondSentence: "Este exemplo é mais difícil porque as unidades somam um numero maior a 10."
        },
        multiplication: {
            headerTitle: "Multiplicação",
            sectionTitle: "x multiplicação",
            firstSentence: "Para resolver multiplicações mentalmente, você tem também que familiarizar-se com o " +
            "método de esquerda a direita, multiplicando primeiro as dezenas e logo as unidades.",
            secondSentence: "Outro exemplo para exercitar a multiplicação de esquerda a direita.",
            thirdSentence: "Utiliza-se o mesmo método quando o número maior é de 3 ou 4 algarismos.\nSempre " +
            "multiplica-se de esquerda a direita e somam-se progressivamente os resultados parciais."
        },
        toSquare2: {
            headerTitle: "Ao quadrado",
            sectionTitle: `x${exponent(2)} quadrado (2d)`,
            firstSentence: "Usamos la fórmula " + `x${exponent(2)} = (x+a)(x-a) + a${exponent(2)}` + ", onde x é o" +
            " número de dos algarismos que queremos elevar ao quadrado. E a é a diferença entre x e o múltiplo a " +
            "10 mais perto a x.\nSe x é 12 ou 18, a é 2.",
            secondSentence: "Podemos ver que se x = 46 então a = 4.\nFazemos " +
            `46${exponent(2)} = (46+4)(46-4) + 4${exponent(2)}`
        },
        toSquare3: {
            headerTitle: "Ao quadrado",
            sectionTitle: `x${exponent(2)} quadrado (3d)`,
            firstSentence: "Quando elevamos um número de três algarismo usamos o mesmo método, " +
            `x${exponent(2)} = (x+a)(x-a) + a${exponent(2)}` + ", mas neste caso a é um número de dois algarismos. " +
            "Neste caso temos que se x = 512 então a = 12. Mas, para elevar 12 ao quadrado, consideramos x = 12 e " +
            "a = 2.",
            secondSentence: "Vai outro exemplo com x = 684, a = 16.\nPara elevar 15 ao quadrado usamos x = 16, a = 4.",
        },
        toSquare4: {
            headerTitle: "Ao quadrado",
            sectionTitle: `x${exponent(2)} quadrado (4d)`,
            firstSentence: "Para números de quatro algarismos usamos a fórmula já conhecida " +
            `x${exponent(2)} = (x+a)(x-a) + a${exponent(2)},` +  "mas antes de calcular " + `a${exponent(2)}` +
            " usamos o Sistema Maior parar memorizar parte do resultado.\nSe x é 6382, a é 382. E 6764 x 6000 é 40 " +
            "milhões 584 mil. Então memorizamos 584 usando o Sistema Maior.",
            secondSentence: "Para não esquecer 584, formamos uma palavra com seus algarismos. 5 pode ser L, 8 G e " +
            "4 Q. 584 pode ser \"LóGiCa\". Com isto em  mente, continuamos os passos de sempre e obtemos 145.924." +
            "\nSomado 584 (\"LóGiCa\") e 145 e obtemos 729. Juntamos tudo: 40 milhões, 729 mil 924."
        },
        majorSystem: {
            headerTitle: "Sistema Maior",
            sectionTitle: "Sistema Maior",
            table: "Tabela",
            sentence: "No Sistema Maior, associamos cada algarismo do número a lembrar com uma consonante, " +
            "como se vê na tabela. Usando estas letras em ordem formamos palavras, adicionando as vogais " +
            "necessárias.\nPor exemplo, \"lupa\" é 59 porque \"L\" é 5, \"P\" é 9 e as vogais não são nada."
        }
    },
    stats: {
        headerTitle: "Estatísticas",
        statsSelection: {
            header: {
                category: "Operação",
                averageTime: "Tempo médio",
                effectiveness: "Eficácia"
            },
            unavailableStats: "Ainda não há dados",
        },
        chart: {
            horizontalAxisLabel: "Ensaios",
            verticalAxisLabel: "Tempos de resposta (seg)",
        }
    }
};