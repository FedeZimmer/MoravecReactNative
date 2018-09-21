import React from 'react'
import {Text, View, Animated} from "react-native";
import {OPERATION_STYLES} from "../../../styles/game/calculator/styles";
import {makeItTestable} from "../../../utils/testable_hoc";

export let OperationDisplay = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opacityValue: new Animated.Value(1)
        };

        this.operationFontSize = this.operationFontSize.bind(this);
        this.fadeout = this.fadeout.bind(this);
    }

    componentDidMount() {
        if (this.props.operation.shouldBeHidden) {
            this.fadeout();
        }
    }

    componentDidUpdate(prevProps) {
         const newOperationShown = prevProps.operation.operation !== this.props.operation.operation;
         if (newOperationShown) {
             this.setState({opacityValue: new Animated.Value(1)}, () => {
                 if (this.props.operation.shouldBeHidden) {
                     this.fadeout();
                 }
             });
         }
    }

    operationResult() {
        if (this.props.input) {
            return this.props.input
        } else {
            return '?';
        }
    }

    operationFontSize() {
        const userResponse = this.props.input;
        const userResponseNumberOfDigits = Number(userResponse).toString().length;

        let operationFontSize = 40;
        if (userResponse && userResponseNumberOfDigits >= 6) {
            operationFontSize = 35;
        }

        return operationFontSize;
    }

    fadeout() {
        const fadeoutAnimation = Animated.timing(
            this.state.opacityValue,
            {
                delay: 4000,
                toValue: 0,
                duration: 1000,
            }
        );
        fadeoutAnimation.start();
    }

    render() {
        const textStyle = [OPERATION_STYLES.operationText, {fontSize: this.operationFontSize()}];
        return (
            <View style={OPERATION_STYLES.operationContainer}>
                <View style={OPERATION_STYLES.operation}>
                    <Animated.View style={{opacity: this.state.opacityValue}}>
                        <Text style={textStyle}>
                            {this.props.operation.operation}
                        </Text>
                    </Animated.View>
                    <Text>
                        <Text style={textStyle}>
                            {' = '}{this.operationResult()}
                        </Text>
                    </Text>
                </View>
            </View>
        )
    }
};

OperationDisplay = makeItTestable('OperationDisplay')(OperationDisplay);