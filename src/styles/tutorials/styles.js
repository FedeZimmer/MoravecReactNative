import {whiteColor, greenColor, lightGrayColor, grayColor, superLightGrayColor, pinkColor} from "../global";
import {getWindowHeight, getWindowWidth} from "../../utils/get_window_info";
export const spinnerColor = '#fc327a';

const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export const TUTORIAL_STYLES = {
    tutorial: {
        flex: 4,
        flexDirection: "column",
        paddingLeft: windowHeight * 0.03,
        paddingRight: windowHeight * 0.03,
        paddingBottom: windowHeight * 0.03,
        backgroundColor: lightGrayColor
    },
    titleContainer: {
        backgroundColor: whiteColor,
        height: windowHeight * 0.12,
        justifyContent: "center"
    },
    title: {
        fontSize: 40,
        fontFamily: "GothamBold",
        color: greenColor,
        marginLeft: 30
    },
    division: {
        backgroundColor: greenColor,
        height: windowHeight * 0.008
    },
    exampleContainer: {
        flex: 3,
        flexDirection: "column",
        backgroundColor: whiteColor,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 30
    },
    exampleTitle: {
        fontFamily: 'GothamMedium',
        fontSize: 20,
        color: greenColor
    },
    image: {
        resizeMode: 'contain',
        width: windowWidth,
        marginTop: 20,
        marginBottom: 20
    },
    explanation: {
        fontFamily: "GothamMedium",
        fontSize: 15,
        color: grayColor,
        lineHeight: 25,
        textAlign: 'justify'
    },
    boldText: {
        fontSize: 15,
        fontFamily: "GothamBold",
        color: grayColor,
        lineHeight: 25,
    }
};

export const LIST_STYLES = {
    list: {
        flex: 1,
        backgroundColor: lightGrayColor,
    },
    item: {
        backgroundColor: whiteColor,
        height: windowHeight * 0.1,
        borderBottomWidth: 4,
        borderBottomColor: superLightGrayColor,
        flex: 2,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    tutorialName: {
        fontSize: 25,
        fontFamily: "GothamMedium",
        color: grayColor
    },
    icon: {
        color: pinkColor,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    }
};