import {darkGrayColor, greenColor, pinkColor, superLightGrayColor, whiteColor} from "../../global";
import {getWindowHeight} from '../../../utils/get_window_info';

export const GAME_STYLES = {
    game: {
        flex: 2,
        flexDirection: 'column'
    },
    calculatorContainer: {
        flexGrow: 6
    }
};

export const COUNTDOWN_STYLES = {
    countdown: {
        backgroundColor: pinkColor,
        height: 6,
    },
};

export const OPERATION_STYLES = {
    operationContainer: {
        backgroundColor: whiteColor,
        flexGrow: 2,
        borderBottomWidth: 1,
        borderBottomColor: superLightGrayColor,
    },
    operation: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
    },
    operationText: {
        fontFamily: 'GothamLight',
        color: darkGrayColor,
    },
};

export const FEEDBACK_STYLES = {
    feedbackContainer: {
        position: 'absolute',
        height: getWindowHeight() * 0.15,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    feedbackIncorrectBox: {
        backgroundColor: pinkColor,
    },
    feedbackIncorrectText: {
        color: whiteColor,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'GothamMedium',
    },
    feedbackCorrectBox: {
        backgroundColor: greenColor,
    },
    feedbackCorrectText: {
        color: whiteColor,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'GothamMedium',
    },
};
