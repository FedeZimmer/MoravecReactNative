import React from "react";
import {View} from "react-native";
import {RADIO_STYLES} from "../../styles/personalInfo/styles";
import {pinkColor} from "../../styles/global";

export class RadioButton extends React.Component {
    static defaultProps = {
        selectedColor: pinkColor
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={RADIO_STYLES.radio}>
                {
                    this.props.selected ?
                        <View style={[RADIO_STYLES.selected, {backgroundColor: this.props.selectedColor}]}/>: null
                }
            </View>
        )
    }
}