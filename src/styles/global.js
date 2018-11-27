export const pinkColor = '#DE1C61';
export const greenColor = '#19AD97';
export const darkGrayColor = '#454E57';
export const grayColor = '#7F8992';
export const lightGrayColor = '#EEEEF0';
export const superLightGrayColor = '#EDEDED';
export const whiteColor = '#FFFFFF';
export const intermediateLevelColor = '#F3C74E';
export const advancedLevelColor = '#F05C4E';

export const applyLetterSpacing = function (string, count = 1) {
    return string.split('').join('\u200A'.repeat(count));
};