import {combineReducers} from 'redux';

import {levelReducer} from './levelReducer'
import {calculatorReducer} from './calculatorReducer';

export default appReducers = combineReducers({
    level: levelReducer,
    calculator: calculatorReducer,
})