import * as moment from 'moment'
const momentDurationFormatSetup = require("moment-duration-format");

const Dimensions = require('Dimensions');

export const getWindowWidth = function () {
    return Dimensions.get('window').width
};

export const getWindowHeight = function () {
    return Dimensions.get('window').height
};

momentDurationFormatSetup(moment);
export const formatTime = function (milliseconds) {
    let duration = moment.duration(milliseconds);
    return duration.format("*mm:ss:SSS");
};