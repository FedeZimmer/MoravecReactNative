import {greenColor, whiteColor, lightGrayColor, grayColor, darkGrayColor} from "../global";
import {getWindowHeight, getWindowWidth} from "../../utils/get_window_info";

export const TYC_STYLES = {
    tyc: {
        flex: 3,
        flexDirection: "column",
        backgroundColor: lightGrayColor
    },
    logoContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: -(getWindowHeight() * 0.07)
    },
    logo: {
        width: getWindowWidth() * 0.35,
        height: getWindowHeight() * 0.35,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        flexGrow: 6,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: getWindowHeight() * 0.12,
    },
    text: {
        fontFamily: 'GothamMedium',
        color: grayColor,
        fontSize: 16,
        lineHeight: 30,
        textAlign: 'justify',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 20,
    },
    agreeButtonContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    agreeButton: {
        width: getWindowWidth() * 0.9,
        backgroundColor: greenColor,
        justifyContent: "center",
        borderRadius: 0,
    },
    agreeButtonText: {
        fontFamily: 'GothamBold',
        color: whiteColor,
        fontSize: 15,
        textAlign: 'center',
    },
};


export const PERSONAL_INFO_FORM_STYLES = {
    personalInfoForm: {
        flex: 9,
        flexDirection: "column",
        backgroundColor: lightGrayColor,
        paddingTop: getWindowHeight() * 0.02,
        paddingLeft: 20,
        paddingRight: 20
    },
    mainTextContainer: {
        marginBottom: 30,
    },
    mainText: {
        fontFamily: 'GothamBold',
        color: darkGrayColor,
        fontSize: 14,
        lineHeight: 30,
        textAlign: 'justify',
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontFamily: 'GothamBold',
        color: darkGrayColor,
        fontSize: 17,
        marginBottom: 10,
    },
    textInput: {
        ios: {
            fontFamily: 'GothamMedium',
            fontSize: 16,
            color: grayColor,
            borderBottomWidth: 2,
            borderBottomColor: darkGrayColor,
            height: 30,
        },
        android: {
            fontFamily: 'GothamMedium',
            fontSize: 16,
            color: grayColor,
            height: 40,
        }
    },
    inputSubLabel: {
        fontFamily: 'GothamBold',
        color: darkGrayColor,
        fontSize: 16,
        marginBottom: 5,
    },
    placeholder: {
        fontFamily: 'GothamBold',
        color: grayColor,
        fontSize: 14,
    },
    submitButton: {
        width: getWindowWidth() * 0.9,
        backgroundColor: greenColor,
        justifyContent: "center",
        borderRadius: 0,
        marginBottom: getWindowHeight() * 0.1,
        marginTop: 10,
    },
    submitButtonText: {
        fontFamily: 'GothamBold',
        color: whiteColor,
        fontSize: 15,
        textAlign: 'center',
    },
};

export const RADIO_SET_STYLES = {
    horizontal: {
        flexDirection: "row",
    },
    vertical: {
        flexDirection: "column",
    },
    radioContainer: {
        flexGrow: 1,
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    radioOptionLabel: {
        fontFamily: 'GothamBold',
        color: grayColor,
        fontSize: 14,
    }
};

export const RADIO_STYLES= {
    radio: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: grayColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    selected: {
        height: 12,
        width: 12,
        borderRadius: 10
    }
};