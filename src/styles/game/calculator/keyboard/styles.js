import {grayColor, greenColor, superLightGrayColor, whiteColor} from "../../../global";
import {getWindowHeight} from "../../../../utils";

export const INPUT_STYLES = {
    submitButton: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: greenColor,
        borderTopWidth: 1,
        borderTopColor: superLightGrayColor,
        borderBottomWidth: 1,
        borderBottomColor: superLightGrayColor,
        borderLeftWidth: 1,
        borderLeftColor: superLightGrayColor,
        borderRightWidth: 1,
        borderRightColor: superLightGrayColor,
    },
    submitButtonText: {
        fontSize: 40,
        textAlign: 'center',
        color: whiteColor,
    },
    eraseButton: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: whiteColor,
        borderTopWidth: 1,
        borderTopColor: superLightGrayColor,
        borderBottomWidth: 1,
        borderBottomColor: superLightGrayColor,
        borderLeftWidth: 1,
        borderLeftColor: superLightGrayColor,
        borderRightWidth: 1,
        borderRightColor: superLightGrayColor,
    },
    eraseButtonText: {
        fontSize: 40,
        textAlign: 'center',
        color: grayColor,
    },
    inputButton: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: whiteColor,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: superLightGrayColor,
        borderBottomWidth: 1,
        borderBottomColor: superLightGrayColor,
        borderLeftWidth: 1,
        borderLeftColor: superLightGrayColor,
        borderRightWidth: 1,
        borderRightColor: superLightGrayColor,
    },
    inputButtonText: {
        fontSize: 30,
        textAlign: 'center',
        color: grayColor,
    },
    row1: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row2: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row3: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row4: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    inputContainer: {
        height: getWindowHeight() * 0.6,
    },
};
