import * as moment from 'moment'

const momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);

export const formatTime = function (milliseconds) {
    let duration = moment.duration(milliseconds);
    return duration.format("*mm:ss:SSS");
};