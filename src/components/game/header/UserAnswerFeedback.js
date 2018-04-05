import React from "react";
import {makeItTestable} from "../../../utils/testable_hoc";
import {CorrectAnswerMessage} from "./CorrectAnswerMessage";
import {WrongAnswerMessage} from "./WrongAnswerMessage";

export let UserAnswerFeedback = class extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setTimeout(this.props.onTimeout, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        if (this.props.lastAnswerData.isCorrect) {
            return (
                <CorrectAnswerMessage/>
            )
        } else {
            return (
                <WrongAnswerMessage correctAnswer={this.props.lastAnswerData.correctResult}
                                    wrongAnswer={this.props.lastAnswerData.userInput}/>
            )
        }
    }
};

UserAnswerFeedback = makeItTestable('UserAnswerFeedback')(UserAnswerFeedback);