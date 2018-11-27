import React from "react";
import {TouchableOpacity, Image} from "react-native";
import Images from "../../../../../assets/images/images";
import {INPUT_STYLES} from "../../../../styles/game/calculator/keyboard/styles";
import {makeItTestable} from "../../../../utils/testable_hoc";


export let EnterKey = class extends React.Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        this.props.onPress();
    }

    render() {
        return (
            <TouchableOpacity style={INPUT_STYLES.submitButton} onPress={this.handlePress}>
                <Image source={Images.calculatorEnter} style={INPUT_STYLES.submitButtonImage} resizeMode={"contain"}/>
            </TouchableOpacity>
        )
    }
};

EnterKey = makeItTestable('EnterKey')(EnterKey);