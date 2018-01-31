import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    createTrial,
    eraseInput,
    finishLevel,
    hideFeedback,
    sendStoredTrials,
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
        sendStoredTrials: () => {
            dispatch(sendStoredTrials())
        },
    }
};

class GameEngine extends Component {
    static navigationOptions = {
        title: 'Game',
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            timer: null,
            startTime: 0,
        };

        this.updateTimer = this.updateTimer.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.userEnteredResult = this.userEnteredResult.bind(this);
    }

    componentWillMount() {
        const params = this.props.navigation.state.params;
        const levelNumber = params.levelNumber;
        this.props.startLevel(levelNumber);
        this.createTrial();
    }

    createTrial() {
        this.props.createTrial(this.props.level);
        this.startTimer();
    };

    startTimer() {
        this.setState({time: 0, startTime: Date.now()});
        const timer = setInterval(this.updateTimer, 50);
        this.setState({timer: timer});
    };

    updateTimer() {
        this.setState({time: Date.now() - this.state.startTime});
    }

    stopTimer() {
        clearInterval(this.state.timer);
    }

    userEnteredResult() {
        return this.props.trial.input != null;
    }

    levelFinished() {
        return this.props.trials.length > this.props.totalTrials;
    }

    onSubmit() {
        if (this.userEnteredResult()) {
            this.stopTimer();

            this.props.showFeedback();
            setTimeout(this.props.hideFeedback, this.props.feedback.duration);

            this.props.submitTrial();
            if (this.levelFinished()) {
                if (this.props.feedback.visible) {
                    this.props.hideFeedback();
                }
                this.props.finishLevel();
                this.props.sendStoredTrials();
            } else {
                this.createTrial();
            }
        }
    };

    render() {
        if (this.props.levelFinished) {
            return <LevelFinished {...this.props}/>;
        } else {
            return (
                <Game {...this.props} time={this.state.time} onSubmit={this.onSubmit}/>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameEngine);