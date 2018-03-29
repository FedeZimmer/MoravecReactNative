import React from "react";
import {AppRegistry} from "react-native";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from 'redux-thunk'
import {gameReducer} from "./src/reducers/game_reducer";
import {Navigator} from "./src/navigator";

import {Tester, TestHookStore} from "cavy";
import {gameSpec} from "./specs/game_spec";


const rootReducer = combineReducers({
    game: gameReducer,
});

const store = createStore(rootReducer, undefined, applyMiddleware(thunkMiddleware));

export const Moravec = () => (
    <Provider store={store}>
        <Navigator/>
    </Provider>
);

const cavyTestHooksStore = new TestHookStore();

const CavyMoravecWrapper = () => (
    <Provider store={store}>
        <Tester specs={[gameSpec]} store={cavyTestHooksStore} waitTime={2000}>
            <Navigator/>
        </Tester>
    </Provider>
);

AppRegistry.registerComponent('moravec', () => CavyMoravecWrapper);
