import {greenColor, whiteColor, lightGrayColor, grayColor} from "../global";
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
        fontFamily: 'GothamBook',
        color: grayColor,
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'justify',
        marginLeft: 20,
        marginRight: 20
    },
    agreeButtonContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "center",
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
