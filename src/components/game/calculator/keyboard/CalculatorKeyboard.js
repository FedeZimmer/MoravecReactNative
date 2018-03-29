import React from 'react'
import {View} from "react-native";

import {INPUT_STYLES} from "../../../../styles/game/calculator/keyboard/styles";
import {NumberKey} from "./NumberKey";
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
                        <NumberKey value={7} onTypeInput={this.props.onTypeInput}/>
                        <NumberKey value={8} onTypeInput={this.props.onTypeInput}/>
                        <NumberKey value={9} onTypeInput={this.props.onTypeInput}/>
                    </View>
                    <View style={INPUT_STYLES.row2}>
                        <NumberKey value={4} onTypeInput={this.props.onTypeInput}/>
                        <NumberKey value={5} onTypeInput={this.props.onTypeInput}/>
                        <NumberKey value={6} onTypeInput={this.props.onTypeInput}/>
                    </View>
                    <View style={INPUT_STYLES.row3}>
                        <NumberKey value={1} onTypeInput={this.props.onTypeInput}/>
                        <NumberKey value={2} onTypeInput={this.props.onTypeInput}/>
                        <NumberKey value={3} onTypeInput={this.props.onTypeInput}/>
                    </View>
                    <View style={INPUT_STYLES.row4}>
                        <EraseKey onEraseInput={this.props.onEraseInput}/>
                        <NumberKey value={0} onTypeInput={this.props.onTypeInput}/>
                        <EnterKey onSubmit={this.props.onSubmit}/>
                    </View>
                </View>
            </View>
        )
    }
}