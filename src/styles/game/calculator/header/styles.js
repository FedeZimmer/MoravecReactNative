import {darkGrayColor, greenColor, lightGrayColor, pinkColor} from "../../../global";


export const HEADER_STYLES = {
    headerGame: {
        flex: 2,
        flexDirection: 'column'
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
        marginLeft: 20,
    },
    time: {
        color: pinkColor,
        fontSize: 23,
        fontFamily: "GothamMedium"
    },
    hintsNumber: {
        color: darkGrayColor,
        fontSize: 25,
        fontFamily: "GothamMedium"
    },
    hintsText: {
        color: darkGrayColor,
        fontSize: 20,
        fontFamily: "GothamMedium"
    },
    hintsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    remainingTrialsContainer: {
        marginRight: 20
    },
    remainingTrials: {
        fontFamily: "GothamMedium",
        color: greenColor,
        fontSize: 25,
    },
};