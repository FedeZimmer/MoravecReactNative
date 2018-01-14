import {combineReducers} from 'redux';

import {calculatorReducer} from './calculatorReducer';
import {levelReducer} from './levelReducer'

export default appReducers = combineReducers({
    level: levelReducer,
    calculator: calculatorReducer,
})