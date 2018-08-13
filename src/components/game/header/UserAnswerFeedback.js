import React from "react";
import {makeItTestable} from "../../../utils/testable_hoc";
import {CorrectAnswerMessage} from "./CorrectAnswerMessage";
import {WrongAnswerMessage} from "./WrongAnswerMessage";
import {YouCanDoBetterMessage} from "./YouCanDoBetterMessage";
import {Animated} from "react-native";
import {FeedbackMessage} from "./FeedbackMessage";
import {FEEDBACK_STYLES} from "../../../styles/game/calculator/styles";

export let UserAnswerFeedback = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityValue: new Animated.Value(0),
            isShown: false,
        };
    }

    componentDidUpdate(prevProps) {
        const newAnswerSubmitted = prevProps.lastAnswerData !== this.props.lastAnswerData;
        if (newAnswerSubmitted) {
            this.setState({isShown: true});
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
            fadeoutAnimation.start(() => {
                this.setState({isShown: false});
            });
        });
    }

    render() {
        if (this.state.isShown) {
            if (this.props.lastAnswerData.isCorrect) {
                if (this.props.lastAnswerData.timeExceeded) {
                    return (
                        <FeedbackMessage opacityValue={this.state.opacityValue}
                                         style={FEEDBACK_STYLES.feedbackCorrectBox}>
                            <YouCanDoBetterMessage/>
                        </FeedbackMessage>
                    )
                } else {
                    return (
                        <FeedbackMessage opacityValue={this.state.opacityValue}
                                         style={FEEDBACK_STYLES.feedbackCorrectBox}>
                            <CorrectAnswerMessage/>
                        </FeedbackMessage>
                    )
                }
            } else {
                return (
                    <FeedbackMessage opacityValue={this.state.opacityValue}
                                     style={FEEDBACK_STYLES.feedbackIncorrectBox}>
                        <WrongAnswerMessage correctAnswer={this.props.lastAnswerData.correctResult}
                                            wrongAnswer={this.props.lastAnswerData.userInput}
                                            opacityValue={this.state.opacityValue}/>
                    </FeedbackMessage>
                )
            }
        } else {
            return null;
        }
    }
};

UserAnswerFeedback = makeItTestable('UserAnswerFeedback')(UserAnswerFeedback);