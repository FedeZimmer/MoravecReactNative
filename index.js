/*
* This is a polyfill needed for Android, as it's JS runtime does not include Symbol.iterator,
* which brokes using the ES6 for..of syntax.
* Please check
* https://github.com/facebook/react-native/issues/15902
* https://github.com/facebook/immutable-js/issues/1305
*/
import 'core-js/es6/symbol';
import 'core-js/fn/symbol/iterator';

import React from "react";
import {AppRegistry} from "react-native";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from 'redux-thunk'
import Config from "react-native-config"

import {personalInfoReducer} from "./src/reducers/personal_info_reducer";
import {gameReducer} from "./src/reducers/game_reducer";
import {practiceReducer} from "./src/reducers/practice_reducer";
import {Navigator} from "./src/navigator";

import {Tester, TestHookStore} from "cavy";
import {gameSpec} from "./specs/game/game_spec";
import {practiceSpec} from "./specs/practice_spec";
import {operationHintsSpec} from "./specs/game/hints_spec";
import {statsReducer} from "./src/reducers/stats_reducer";

const rootReducer = combineReducers({
    personalInfo: personalInfoReducer,
    game: gameReducer,
    practice: practiceReducer,
    stats: statsReducer
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
        <Tester specs={[gameSpec, practiceSpec, operationHintsSpec]}
                store={cavyTestHooksStore} clearAsyncStorage={true}>
            <Navigator/>
        </Tester>
    </Provider>
);

const isTest = Config.ENV === 'testing';

const App = isTest ? CavyMoravecWrapper : Moravec;

export const CDNBaseURL = "https://1841111903.rsc.cdn77.org";

AppRegistry.registerComponent('Moravec', () => App);
