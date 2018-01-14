import React from 'react'
import {View} from "react-native";

import {INPUT_STYLES} from "./styles";
import NumberKey from "./NumberKey";
import EraseKey from "./EraseKey";
import EnterKey from "./EnterKey";


export default class CalculatorKeyboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={INPUT_STYLES.inputContainer}>
                <View style={INPUT_STYLES.input}>
                    <View style={INPUT_STYLES.row1}>
                        <NumberKey value={7} typeInput={this.props.typeInput}/>
                        <NumberKey value={8} typeInput={this.props.typeInput}/>
                        <NumberKey value={9} typeInput={this.props.typeInput}/>
                    </View>
                    <View style={INPUT_STYLES.row2}>
                        <NumberKey value={4} typeInput={this.props.typeInput}/>
                        <NumberKey value={5} typeInput={this.props.typeInput}/>
                        <NumberKey value={6} typeInput={this.props.typeInput}/>
                    </View>
                    <View style={INPUT_STYLES.row3}>
                        <NumberKey value={1} typeInput={this.props.typeInput}/>
                        <NumberKey value={2} typeInput={this.props.typeInput}/>
                        <NumberKey value={3} typeInput={this.props.typeInput}/>
                    </View>
                    <View style={INPUT_STYLES.row4}>
                        <EraseKey eraseInput={this.props.eraseInput}/>
                        <NumberKey value={0} typeInput={this.props.typeInput}/>
                        <EnterKey {...this.props}/>
                    </View>
                </View>
            </View>
        )
    }
}