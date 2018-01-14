export const START_LEVEL = 'START_LEVEL';
export const FINISH_LEVEL = 'FINISH_LEVEL';


export function startLevel(level) {
    return {
        type: START_LEVEL,
        level: level
    }
}

export function finishLevel() {
    return {
        type: FINISH_LEVEL
    }
}
