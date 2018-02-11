import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    createTrial,
    eraseInput,
    finishLevel,
    hideFeedback,
    showFeedback,
    startLevel,
    submitTrial,
    typeInput
} from "../actions/game_actions";
import {LevelFinished} from "../components/game/LevelFinished";
import {Game} from "../components/game/Game";

const mapStateToProps = (state) => {
    return state.game
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            createTrial: (level) => {
                dispatch(createTrial(level))
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
            showFeedback: () => {
                dispatch(showFeedback())
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
    }
};

class GameEngine extends Component {
    static navigationOptions = {
        title: 'Game',
        header: null
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        const navigatorParams = this.props.navigation.state.params;
        this.props.actions.startLevel(navigatorParams.levelNumber);
        this.props.actions.createTrial(this.props.level);
    }

    userEnteredResult() {
        return this.props.trial.input != null;
    }

    levelFinished() {
        return this.props.trials.length === this.props.totalTrials;
    }

    handleSubmit() {
        if (this.userEnteredResult()) {
            this.props.actions.showFeedback();
            setTimeout(this.props.actions.hideFeedback, this.props.feedback.duration);

            this.props.actions.submitTrial();
            if (this.levelFinished()) {
                this.props.actions.finishLevel();
            } else {
                this.props.actions.createTrial(this.props.level);
            }
        }
    };

    render() {
        if (this.props.levelFinished) {
            return <LevelFinished {...this.props}/>;
        } else {
            return (
                <Game {...this.props} onSubmit={this.handleSubmit}/>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameEngine);