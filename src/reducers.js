import {combineReducers} from 'redux';

import {calculatorReducer} from './calculator/reducers';
import {levelReducer} from './level/reducers'

export default appReducers = combineReducers({
    level: levelReducer,
    calculator: calculatorReducer,
})