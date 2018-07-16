import React from "react";
import {Text, View} from "react-native";
import {Radio} from "native-base";
import {PERSONAL_INFO_FORM_STYLES, RADIO_SET_STYLES} from "../../styles/personalInfo/styles";
import {pinkColor} from "../../styles/global";

export class RadioSet extends React.Component {
    static defaultProps = {
        orientation: 'horizontal',
        labelStyle: PERSONAL_INFO_FORM_STYLES.inputLabel
    };

    constructor(props) {
        super(props);

        this.state = {
            optionsQuantity: this.props.options.length
        };
    }

    render() {
        return (
            <View>
                <Text style={this.props.labelStyle}>{this.props.label}</Text>
                <View style={[RADIO_SET_STYLES[this.props.orientation], {flex: this.state.optionsQuantity}]}>
                    {this.props.options.map((option) =>
                        (
                            <View key={option} style={RADIO_SET_STYLES.radioContainer}>
                                <Radio selected={this.props.optionIsSelected(this.props.name, option)}
                                       onPress={() => this.props.selectOption(this.props.name, option)}
                                       style={RADIO_SET_STYLES.radioButton} selectedColor={pinkColor}/>
                                <Text style={RADIO_SET_STYLES.radioOptionLabel}>{option}</Text>
                            </View>
                        )
                    )}
                </View>
            </View>
        )
    }
}