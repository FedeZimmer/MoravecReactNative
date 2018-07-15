import {AGREE_TERMS} from '../actions/personal_info_actions'

export const TERMS_AND_CONDITIONS = 'TERMS_AND_CONDITIONS';
export const PERSONAL_INFO_FORM = 'PERSONAL_INFO_FORM';

const initialState = {
    state: TERMS_AND_CONDITIONS,
    agreedTerms: false,
    personalInfo: undefined
};


export function personalInfoReducer(state = initialState, action) {
    switch (action.type) {
        case AGREE_TERMS:
            return {
                ...initialState,
                agreedTerms: true,
                state: PERSONAL_INFO_FORM
            };


        default:
            return state
    }
}