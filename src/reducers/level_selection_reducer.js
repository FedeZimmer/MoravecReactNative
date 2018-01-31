import {RECEIVE_PLAYED_LEVELS_INFO} from '../actions/level_selection_actions'


const initialState = {
    levels: {},
    loading: true
};

export function levelSelectionReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_PLAYED_LEVELS_INFO:
            return {
                ...state,
                levels: action.levels,
                loading: false
            };
        default:
            return state
    }
}