import React from "react";
import {makeItTestable} from "../../../utils/testable_hoc";
import {CorrectAnswerMessage} from "./CorrectAnswerMessage";
import {WrongAnswerMessage} from "./WrongAnswerMessage";
import {YouCanDoBetterMessage} from "./YouCanDoBetterMessage";
import {Animated} from "react-native";

export let UserAnswerFeedback = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityValue: new Animated.Value(0),
        };
    }

    componentDidUpdate(prevProps) {
        const newAnswerSubmitted = prevProps.lastAnswerData !== this.props.lastAnswerData;
        if (newAnswerSubmitted) {
            this.fadeoutBar();
        }
    }

    fadeoutBar() {
        this.setState({
            opacityValue: new Animated.Value(1),
        }, () => {
            const fadeoutAnimation = Animated.timing(
                this.state.opacityValue,
                {
                    delay: 1500,
                    toValue: 0,
                    duration: 500,
                }
            );
            fadeoutAnimation.start();
        });
    }

    render() {
        if (this.props.lastAnswerData !== undefined) {
            if (this.props.lastAnswerData.isCorrect) {
                if (this.props.lastAnswerData.timeExceeded) {
                    return <YouCanDoBetterMessage opacityValue={this.state.opacityValue}/>
                } else {
                    return <CorrectAnswerMessage opacityValue={this.state.opacityValue}/>
                }
            } else {
                return <WrongAnswerMessage correctAnswer={this.props.lastAnswerData.correctResult}
                                           wrongAnswer={this.props.lastAnswerData.userInput}
                                           opacityValue={this.state.opacityValue}
                />
            }
        } else {
            return null;
        }
    }
};

UserAnswerFeedback = makeItTestable('UserAnswerFeedback')(UserAnswerFeedback);