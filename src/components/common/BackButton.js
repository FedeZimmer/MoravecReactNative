import React, {Component} from 'react'
import {Icon} from "native-base"
import {BACK_BUTTON_STYLES} from "../../styles/common/styles"
import {TouchableWithoutFeedback} from "react-native";

export class BackButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    handleGoBack(){
        this.props.goBack();
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.handleGoBack}>
                <Icon name="md-arrow-round-back" style={BACK_BUTTON_STYLES.icon}/>
            </TouchableWithoutFeedback>
        )
    }
}