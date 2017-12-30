import { combineReducers } from 'redux';
import { reducer as calculatorReducer } from './calculator';

export default combineReducers({
    calculator: calculatorReducer,
})