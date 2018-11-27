import {darkGrayColor, greenColor, lightGrayColor, pinkColor} from "../../../global";


export const HEADER_STYLES = {
    headerGame: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: lightGrayColor,
    },
    gameInfo: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: lightGrayColor,
    },
    headerPractice: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: lightGrayColor,
        flexGrow: 0.7
    },
    timeContainer: {
        flex: 1,
        paddingLeft: 10
    },
    time: {
        color: pinkColor,
        fontSize: 23,
        fontFamily: "GothamBook"
    },
    hintsNumber: {
        color: darkGrayColor,
        fontSize: 23,
        fontFamily: "GothamBook"
    },
    hintsText: {
        color: darkGrayColor,
        fontSize: 23,
        fontFamily: "GothamBook"
    },
    hintsContainer: {
        flex: 1,
    },
    remainingTrialsContainer: {
        flex: 1,
        alignItems: "flex-end",
        paddingRight: 10
    },
    remainingTrials: {
        fontFamily: "GothamBook",
        color: greenColor,
        fontSize: 23,
    },
};