import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {PRACTICE_MODE_SELECTION, PRACTICING} from "../reducers/practice_reducer";
import {startPractice, startPracticeMode, typeInput, eraseInput, submitTrial} from "../actions/practice_actions";
import {PracticeModeSelection} from "../components/practice/PracticeModeSelection";
import {Game} from "../components/game/Game";

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
            startPractice: () => {
                dispatch(startPractice())
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
                dispatch(submitTrial())
            },
        }
    }
};

class Practice extends Component {
    static navigationOptions = {
        title: 'Practice',
        header: null
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.userEnteredResult = this.userEnteredResult.bind(this);
    }

    componentWillMount() {
        this.props.actions.startPractice();
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
        if (this.props.state === PRACTICE_MODE_SELECTION) {
            return <PracticeModeSelection onSelectPracticeMode={this.props.actions.startPracticeMode}/>
        } else if (this.props.state === PRACTICING) {
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