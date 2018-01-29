import React from 'react'
import {connect} from 'react-redux'
import {Game} from "../components/game/Game";
import {
    createTrial, eraseInput, finishLevel, hideFeedback, showFeedback, startLevel, submitTrial,
    typeInput
} from "../actions/game_actions";

const mapStateToProps = (state) => {
    return state.game
};

const mapDispatchToProps = dispatch => {
    return {
        createTrial: (level) => {
            dispatch(createTrial(level))
        },
        typeInput: (input) => {
            dispatch(typeInput(input))
        },
        eraseInput: () => {
            dispatch(eraseInput())
        },
        submitTrial: (trial) => {
            dispatch(submitTrial(trial))
        },
        showFeedback: (trial) => {
            dispatch(showFeedback(trial))
        },
        hideFeedback: () => {
            dispatch(hideFeedback())
        },
        startLevel: (level) => {
            dispatch(startLevel(level))
        },
        finishLevel: () => {
            dispatch(finishLevel())
        },
    }
};

export default GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);