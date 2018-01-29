import React from "react";
import {AppRegistry} from "react-native";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {combineReducers} from 'redux';
import {gameReducer} from "./src/reducers/game_reducer";
import {Navigator} from "./src/navigator";


const reducer = combineReducers({
    game: gameReducer,
});

const store = createStore(reducer);

const Moravec = () => (
    <Provider store={store}>
        <Navigator/>
    </Provider>
);

AppRegistry.registerComponent('moravec', () => Moravec);
