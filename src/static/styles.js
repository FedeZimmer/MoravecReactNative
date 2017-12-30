import EStyleSheet from 'react-native-extended-stylesheet';

const pinkColor = '#fc4491';
const greenColor = '#1cae85';
const yellowColor = '#B1AF22';
const darkGrayColor = '#111';
const lightGrayColor = '#aaa';
const superLightGrayColor = '#ddd';
const whiteColor = '#fff';


export const JS_STYLES = {
    // Calculator
    screen: {
        marginRight: 0,
        width: 400,
    },
    calculator: {
        flex: 1,
        flexDirection: 'column',
    },

    // Calculator/Feedback
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
};

export const EXTENDED_STYLES = EStyleSheet.create(JS_STYLES);