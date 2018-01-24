import React, {Component} from 'react'
import {Button, Icon} from "native-base"
import {HEADER_STYLES} from "../../styles/common/styles"

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
            <Button transparent onPress={this.handleGoBack}>
                <Icon name="md-arrow-round-back" style={HEADER_STYLES.backButton}/>
            </Button>
        )
    }
}