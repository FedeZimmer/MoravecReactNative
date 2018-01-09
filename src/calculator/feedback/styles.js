import {pinkColor, whiteColor, greenColor} from "../../static/styles";

export const FEEDBACK_STYLES = {
    arcadeFeedbackIncorrect: {
        backgroundColor: pinkColor,
        color: whiteColor,
        fontSize: 10,
        textAlign: 'center',
        paddingLeft: 4,
    },
    arcadeFeedbackIncorrectNumber: {
        fontWeight: 'bold',
        marginLeft: 4,
    },
    arcadeFeedbackCorrect: {
        backgroundColor: greenColor,
        color: whiteColor,
    },
};
