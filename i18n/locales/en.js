import exponent from "superscript-number";

export default {
    termsAndConditions: {
        text: "I agree to participate in the online research entitled 'Moravec' on Mental Mathematics. During this " +
        "experiment, chronometric data on my responses will be collected. All the information will be anonymous and " +
        "therefore do not allow me to go up to me. It will be intended only for researchers responsible for the " +
        "study.\n\nMy participation is voluntary and I can interrupt it at any time. I understand that the data " +
        "collected will be kept in a database that will be used for non-nominal computerized processing.",
        agreeButton: "I agree with the terms",
    },
    personalInfo: {
        instructions: "Please, fill the questionnaire. All information will be used for scientific purpose only. " +
        "It will not be use for any commercial or advertising purpose.\nWe are delighted for your " +
        "participation. Thank you.",
        birthDate: {
            label: "Birthdate",
            select: "Set date"
        },
        gender: {
            label: "Gender",
            options: {
                male: "Male",
                female: "Female",
                other: "Other",
            },
        },
        achievedStudies: {
            label: "Achieved studies",
            options: {
                schoolCompleted: "School completed",
                highSchoolInProgress: "Highschool in progress",
                highSchoolCompleted: "Highschool completed",
                collegeInProgress: "College in progress",
                collegeCompleted: "College completed",
            },
        },
        deftHand: {
            label: "Deft hand",
            options: {
                rightHanded: "Right handed",
                leftHanded: "Left handed",
                ambidextrous: "Ambidextrous",
            },
        },
        nativeLanguage: {
            label: "Native language - First language",
            options: {
                english: "English",
                spanish: "Spanish",
                french: "French",
                portuguese: "Portuguese",
                other: "Other",
            },
        },
        numberOfLanguages: "How many languages do you speak?",
        musicCompetences: "What are your musical skills?",
        musicListener: {
            label: "Listener:",
            options: {
                any: "Any",
                moderate: "Moderate",
                advanced: "Advanced",
            },
        },
        musicInstrumentalist: {
            label: "Player:",
            options: {
                any: "Any",
                moderate: "Moderate",
                advanced: "Advanced",
            },
        },
        musicTheory: {
            label: "Student:",
            options: {
                any: "Any",
                moderate: "Moderate",
                advanced: "Advanced",
            },
        },
        submitButton: "Ready! Let's play"
    },
    home: {
        playButton: "Play",
        practiceButton: "Practice",
        tutorialButton: "Tutorial",
        statsButton: "Stats",
    },
    game: {
        headerTitle: "Arcade",
        levelSelection: {
            playButton: "Play"
        },
        header: {
            availableHints: "Hints",
            correctAnswerMessage: "Correct!",
            wrongAnswerMessage: "It was {{correctAnswer}} not {{wrongAnswer}}",
            youCanDoBetterMessage: "You can do it faster",
        },
        levelFinished: {
            levelNumber: "Level",
            levelCompletedMessage: {
                first: "Congratulations.",
                second: "Stage clear."
            },
            retryMessage: {
                first: "Level {{levelNumber}} not completed.",
                second: "Try again"
            },
            correctAnswers: "You answered {{correctAnswers}}/{{totalTrials}} problems correctly",
            mainMenuButton: "Main menu",
        }
    },
    practice: {
        headerTitle: "Practice",
        practiceModeSelection: {
            difficulties: {
                initial: "Initial",
                intermediate: "Intermediate",
                advanced: "Advanced"
            }
        }
    },
    tutorial: {
        headerTitle: "Tutorial",
        common: {
            examples: "Examples"
        },
        tutorialSelection: {
            addition: "Sum",
            multiplication: "Multiplication",
            toSquare2: "Square (2 digits)",
            toSquare3: "Square (3 digits)",
            majorSystem: "Major System",
            toSquare4: "Square (4 digits)"
        },
        addition: {
            headerTitle: "Addition",
            sectionTitle: "+ addition",
            firstSentence: "In this section you\'ll find a way to acknowledge the left to right method. First sum " +
            "the tens of the second number to the first one and then the second number units to the previous result.",
            secondSentence: "This example is more difficult because the units sum up more than 10."
        },
        multiplication: {
            headerTitle: "Multiplication",
            sectionTitle: "x multiplication",
            firstSentence: "In order to multiply mentally, you have to get familiar with the left to right method. " +
            "Multiplying the tens of the greater number first and then the units.",
            secondSentence: "Another example to exercise the left to right multiplication.",
            thirdSentence: "The same technique is used when the highest number is 3 or 4 digits.\nAlways multiply " +
            "from left to right and sum the partial results."
        },
        toSquare2: {
            headerTitle: "Square",
            sectionTitle: `x${exponent(2)} square (2d)`,
            firstSentence: "We use the formula " + `x${exponent(2)} = (x+a)(x-a) + a${exponent(2)}` + ", where x is " +
            "the two digits number  we need to square. And a is the difference between x and its closest multiple " +
            "of 10.\nIf x is 12, a is 2.",
            secondSentence: "We can see that if x = 46 then a = 4.\nWe should do " +
            `46${exponent(2)} = (46+4)(46-4) + 4${exponent(2)}`
        },
        toSquare3: {
            headerTitle: "Square",
            sectionTitle: `x${exponent(2)} square (3d)`,
            firstSentence: "When we square a three-digit number, we use the same technique " +
            `x${exponent(2)} = (x+a)(x-a) + a${exponent(2)}` + ", but in this case a is a two-digit number. In this " +
            "case we have x = 512 and a = 12. To square 12, consider x = 12 and a = 2.",
            secondSentence: "Another example: x = 684, a = 16. Then, in order to square 16, x = 16, a = 4."
        },
        toSquare4: {
            headerTitle: "Square",
            sectionTitle: `x${exponent(2)} square (4d)`,
            firstSentence: "For squaring 4-digit numbers we use the formula already known " +
            `x${exponent(2)} = (x+a)(x-a) + a${exponent(2)}` + ", but before calculating " +
            `a${exponent(2)}` + ", we use the Mnemonic Major System  to memorize the first part of the result.\nIf x " +
            "is 6382, a is 382. 6764 x 6000 is 40 millions 584 thousands. We memorize 584 using the mnemonic " +
            "major system.",
            secondSentence: "In order to remember 584, we form a word with its digits. 5 may be L, 8 G and 4 C so " +
            "584 can then be encoded as \"LoGiC\". With this in mind, we follow the known steps and get 145,924. " +
            "\nWe add 584 (\"LoGiC\") to 145 = 729. Putting it all together: 40 million 729 thousand 924."
        },
        majorSystem: {
            headerTitle: "Major System",
            sectionTitle: "Major System",
            table: "Table",
            sentence: "In the Mnemonic Major System we associate each number\'s digit with a consonant as " +
            "shown in the table. We use these letters to form words by adding the necessary vowels.\nFor " +
            "example, \"lip\" is 59 because \"L\" is 5, \"P\" is 9 and the vowels are no numbers.",
        }
    },
    stats: {
        headerTitle: "Stats",
        statsSelection: {
            header: {
                category: "Operation",
                averageTime: "Average time",
                effectiveness: "Effectiveness"
            },
            unavailableStats: "No data yet",
        },
        chart: {
            horizontalAxisLabel: "Trials",
            verticalAxisLabel: "Response times (sec)",
        }
    }
};
