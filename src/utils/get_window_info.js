const Dimensions = require('Dimensions');

export const getWindowWidth = function () {
    return Dimensions.get('window').width
};

export const getWindowHeight = function () {
    return Dimensions.get('window').height
};