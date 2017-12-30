import React, {Component} from "react";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import reducer from "./src/reducers";
import {Platform, AppRegistry, AsyncStorage, StyleSheet, Text, TextInput, View, Alert, Button} from "react-native";
import {StackNavigator} from "react-navigation";
import CalculatorContainer from "./src/calculator";

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(thunkMiddleware, loggerMiddleware),
    );

    return createStore(reducer, initialState, enhancer)
}

const store = configureStore({});

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Moravec!</Text>
                <Button onPress={() => navigate('Arcade')} title="Jugar"/>
            </View>
        );
    }
}

export const App = StackNavigator({
    Home: { screen: Home },
    Arcade: { screen: CalculatorContainer },
});

const Moravec = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent('moravec', () => Moravec);
