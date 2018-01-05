import React, {Component} from "react";
import {AppRegistry, Button, Text, View} from "react-native";
import {StackNavigator} from "react-navigation";
import {createStore} from "redux";
import {Provider} from "react-redux";

import appReducers from "./src/reducers";
import LevelContainer from "./src/level/LevelContainer";


// const loggerMiddleware = createLogger({predicate: (getState, action) => true});

const store = createStore(appReducers);

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Moravec!</Text>
                <Button onPress={() => navigate('Arcade')} title="Jugar"/>
            </View>
        );
    }
}

export const App = StackNavigator({
    Home: {screen: Home},
    Arcade: {screen: LevelContainer},
});

const Moravec = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent('moravec', () => Moravec);
