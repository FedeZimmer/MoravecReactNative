import {pinkColor, whiteColor, greenColor} from "../../static/styles";

export const FEEDBACK_STYLES = {
    feedbackIncorrectContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: pinkColor,
    },
    feedbackIncorrectText: {
        color: whiteColor,
        fontSize: 20,
        textAlign: 'center',
    },
    feedbackCorrectContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: greenColor,
    },
    feedbackCorrectText: {
        color: whiteColor,
        fontSize: 20,
        textAlign: 'center',
    },
};
