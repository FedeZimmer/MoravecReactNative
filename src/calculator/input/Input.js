import React from 'react'
import {View, Text, TouchableOpacity} from "react-native";
import {INPUT_STYLES} from "./styles";

class SubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.submit(this.props.trial);
    }

    render() {
        return (
            <TouchableOpacity style={INPUT_STYLES.submitButton} onPress={this.handleSubmit}>
                <Text style={INPUT_STYLES.submitButtonText}>{String.fromCharCode('8629')}</Text>
            </TouchableOpacity>
        )
    }
}


class EraseButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleErase = this.handleErase.bind(this);
    }

    handleErase(event) {
        event.preventDefault();

        this.props.eraseInput();
    }

    render() {
        return (
            <TouchableOpacity style={INPUT_STYLES.eraseButton} onPress={this.handleErase}>
                <Text style={INPUT_STYLES.eraseButtonText}>{String.fromCharCode('8592')}</Text>
            </TouchableOpacity>
        )
    }
}


class InputButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        event.preventDefault();

        this.props.typeInput(this.props.value);
    }

    render() {
        return (
            <TouchableOpacity style={INPUT_STYLES.inputButton} onPress={this.handleInput}>
                <Text style={INPUT_STYLES.inputButtonText}>{this.props.value}</Text>
            </TouchableOpacity>
        )
    }
}


class Row1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={INPUT_STYLES.row1}>
                <InputButton value={7} typeInput={this.props.typeInput}/>
                <InputButton value={8} typeInput={this.props.typeInput}/>
                <InputButton value={9} typeInput={this.props.typeInput}/>
            </View>
        )
    }
}


class Row2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={INPUT_STYLES.row2}>
                <InputButton value={4} typeInput={this.props.typeInput}/>
                <InputButton value={5} typeInput={this.props.typeInput}/>
                <InputButton value={6} typeInput={this.props.typeInput}/>
            </View>
        )
    }
}

class Row3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={INPUT_STYLES.row3}>
                <InputButton value={1} typeInput={this.props.typeInput}/>
                <InputButton value={2} typeInput={this.props.typeInput}/>
                <InputButton value={3} typeInput={this.props.typeInput}/>
            </View>
        )
    }
}

class Row4 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={INPUT_STYLES.row4}>
                <EraseButton eraseInput={this.props.eraseInput}/>
                <InputButton value={0} typeInput={this.props.typeInput}/>
                <SubmitButton {...this.props}/>
            </View>
        )
    }
}

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={INPUT_STYLES.inputContainer}>
                <View style={INPUT_STYLES.input}>
                    <Row1 typeInput={this.props.typeInput}/>
                    <Row2 typeInput={this.props.typeInput}/>
                    <Row3 typeInput={this.props.typeInput}/>
                    <Row4 {...this.props}/>
                </View>
            </View>
        )
    }
}