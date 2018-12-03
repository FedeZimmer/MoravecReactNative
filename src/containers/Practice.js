import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PRACTICING} from "../reducers/practice_reducer";
import {
    eraseInput,
    loadPracticeData,
    startPracticeMode,
    submitTrialAndContinue,
    typeInput
} from "../actions/practice_actions";
import {Game} from "../components/game/Game";
import {LOADING} from "../reducers/game_reducer";
import {Spinner} from "native-base";
import {spinnerColor} from "../styles/main/styles";

const mapStateToProps = (state) => {
    return {
        state: state.practice.state,
        currentTrial: state.practice.currentTrial,
        lastAnswerData: state.practice.lastAnswerData,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            loadPracticeData: () => {
                dispatch(loadPracticeData())
            },
            startPracticeMode: (category, difficulty) => {
                dispatch(startPracticeMode(category, difficulty))
            },
            typeInput: (input) => {
                dispatch(typeInput(input))
            },
            eraseInput: () => {
                dispatch(eraseInput())
            },
            submitTrial: () => {
                dispatch(submitTrialAndContinue())
            },
        }
    }
};

class Practice extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadPracticeData();
        const navigationsParams = this.props.navigation.state.params;
        this.props.actions.startPracticeMode(navigationsParams.category,
            navigationsParams.difficulty);
    }

    handleSubmit() {
        if (this.userEnteredResult()) {
            this.props.actions.submitTrial();
        }
    };

    userEnteredResult() {
        return this.props.currentTrial.currentUserInput != null;
    }

    render() {
        if (this.props.state === LOADING) {
            return <Spinner color={spinnerColor}/>
        }

        if (this.props.state === PRACTICING) {
            return <Game state={PRACTICING}
                         currentTrial={this.props.currentTrial}
                         lastAnswerData={this.props.lastAnswerData}
                         onEraseInput={this.props.actions.eraseInput}
                         onTypeInput={this.props.actions.typeInput}
                         onSubmit={this.handleSubmit}/>
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Practice);