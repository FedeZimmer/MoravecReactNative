import React, {Component} from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Alert, Button } from 'react-native';
const moment = require('moment');

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            result: undefined,
            initialTime: undefined
        };

        this._handleSubmitResult = this._handleSubmitResult.bind(this);
    }

    componentWillMount() {
        const initialTime = moment();
        this.setState({initialTime: initialTime});
    }

    _handleSubmitResult(event) {
        const userEnteredResult = this.state.result != undefined;
        if (!userEnteredResult) {
            Alert.alert("Debe ingresar un resultado");
        } else {
            const actualTime = moment();
            const responseTime = actualTime.diff(this.state.initialTime);
            Alert.alert("Tiempo de respuesta: " + responseTime + " milisegundos");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Moravec! </Text>
                <Text> Cuanto es 10 x 5 ? </Text>
                <TextInput keyboardType='numeric'
                    onChange={(number) => this.setState({result: number})}
                    onSubmitEditing={(event) => this._handleSubmitResult(event)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});
