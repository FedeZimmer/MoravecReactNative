import {createOperation} from './operations/index'

export const ARCADE_TYPE_INPUT = 'ARCADE_TYPE_INPUT';
export const ARCADE_ERASE_INPUT = 'ARCADE_ERASE_INPUT';
export const CREATE_TRIAL = 'CREATE_TRIAL';
export const SUBMIT_TRIAL = 'SUBMIT_TRIAL';
export const SHOW_FEEDBACK = 'SHOW_FEEDBACK';
export const HIDE_FEEDBACK = 'HIDE_FEEDBACK';
export const SHOW_HEADER = 'SHOW_HEADER';
export const HIDE_HEADER = 'HIDE_HEADER';


export function createTrial(level) {
    return {
        type: CREATE_TRIAL,
        trial: {
            input: null,
            operation: createOperation(level),
            time: 0,
        }
    }
}

export function typeInput(input) {
    return {
        type: ARCADE_TYPE_INPUT,
        input: input
    }
}

export function eraseInput() {
    return {
        type: ARCADE_ERASE_INPUT,
    }
}


export function submitTrial(trial) {
    return {
        type: SUBMIT_TRIAL,
        trial: trial
    }
}


export function showFeedback(trial) {
    return {
        type: SHOW_FEEDBACK,
        trial: trial
    }
}


export function hideFeedback() {
    return {
        type: HIDE_FEEDBACK
    }
}

export function showHeader(trial) {
    return {
        type: SHOW_HEADER,
        trial: trial,
    }
}


export function hideHeader() {
    return {
        type: HIDE_HEADER
    }
}