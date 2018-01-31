import React from "react";
import {AppRegistry} from "react-native";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {gameReducer} from "./src/reducers/game_reducer";
import {Navigator} from "./src/navigator";


const rootReducer = combineReducers({
    game: gameReducer,
});

const store = createStore(rootReducer, undefined, applyMiddleware(thunkMiddleware));

const Moravec = () => (
    <Provider store={store}>
        <Navigator/>
    </Provider>
);

AppRegistry.registerComponent('moravec', () => Moravec);
