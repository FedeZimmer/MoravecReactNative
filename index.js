import React from "react";
import {AppRegistry, Button, Text, View} from "react-native";
import {StackNavigator} from "react-navigation";
import {createStore} from "redux";
import {Provider} from "react-redux";

import appReducers from "./src/reducers";
import LevelContainer from "./src/level/LevelContainer";
import {Home} from "./src/home/Home"


const store = createStore(appReducers);

export const App = StackNavigator(
    {
        Home: {screen: Home},
        Arcade: {screen: LevelContainer},
    },
    {
        headerMode: 'screen'
    }
);

const Moravec = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent('moravec', () => Moravec);
