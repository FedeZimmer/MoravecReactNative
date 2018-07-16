import React from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {PERSONAL_INFO_FORM_STYLES, RADIO_SET_STYLES} from "../../styles/personalInfo/styles";
import {RadioButton} from "./RadioButton";

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
                            <TouchableOpacity key={option} style={RADIO_SET_STYLES.radioContainer}
                                              onPress={() => this.props.selectOption(this.props.name, option)}>
                                <RadioButton selected={this.props.optionIsSelected(this.props.name, option)}/>
                                <Text style={RADIO_SET_STYLES.radioOptionLabel}>{option}</Text>
                            </TouchableOpacity>
                        )
                    )}
                </View>
            </View>
        )
    }
}