import React from "react";
import {AppRegistry} from "react-native";
import {StackNavigator} from "react-navigation";
import {createStore} from "redux";
import {Provider} from "react-redux";

import appReducers from "./src/reducers/appReducers";
import LevelContainer from "./src/containers/LevelContainer";
import {Home} from "./src/components/home/Home"


const store = createStore(appReducers);

export const Navigator = StackNavigator(
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
        <Navigator/>
    </Provider>
);

AppRegistry.registerComponent('moravec', () => Moravec);
