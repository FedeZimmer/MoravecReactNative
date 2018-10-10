import React, {Component} from 'react'
import {connect} from 'react-redux'
import {askForHint, eraseInput, loadGameData, startLevel, submitTrial, typeInput} from "../actions/game_actions";
import {LevelFinished} from "../components/game/LevelFinished";
import {Game} from "../components/game/Game";
import {LEVEL_FINISHED, LOADING, PLAYING} from "../reducers/game_reducer";
import {spinnerColor} from "../styles/main/styles";
import {Spinner} from "native-base";

const mapStateToProps = (state) => {
    return {
        state: state.game.state,
        playedLevelsStats: state.game.playedLevelsStats,
        currentLevel: state.game.currentLevel,
        currentTrial: state.game.currentTrial,
        lastAnswerData: state.game.lastAnswerData,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            loadGameData: () => {
                dispatch(loadGameData())
            },
            startLevel: (level) => {
                dispatch(startLevel(level))
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
            askForHint: () => {
                dispatch(askForHint())
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
        this.handleAskForHint = this.handleAskForHint.bind(this);
        this.playNextLevel = this.playNextLevel.bind(this);
        this.replayCurrentLevel = this.replayCurrentLevel.bind(this);
        this.goToHome = this.goToHome.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadGameData();
        const navigationsParams = this.props.navigation.state.params;
        this.props.actions.startLevel(navigationsParams.levelNumber);
    }

    handleSubmit() {
        if (this.userEnteredResult()) {
            this.props.actions.submitTrial();
        }
    };

    handleAskForHint() {
        this.props.actions.askForHint();
    }

    userEnteredResult() {
        return this.props.currentTrial.currentUserInput != null;
    }

    playNextLevel() {
        const nextLevel = this.props.currentLevel.number + 1;
        this.props.actions.startLevel(nextLevel);
    }

    replayCurrentLevel() {
        this.props.actions.startLevel(this.props.currentLevel.number);
    }

    goToHome() {
        this.props.navigation.navigate('Home');
    }

    render() {
        if (this.props.state === LOADING) {
            return <Spinner color={spinnerColor}/>
        }

        if (this.props.state === PLAYING) {
            return <Game state={this.props.state}
                         currentLevel={this.props.currentLevel}
                         currentTrial={this.props.currentTrial}
                         lastAnswerData={this.props.lastAnswerData}
                         onEraseInput={this.props.actions.eraseInput}
                         onTypeInput={this.props.actions.typeInput}
                         onSubmit={this.handleSubmit}
                         onAskForHint={this.handleAskForHint}
            />
        } else if (this.props.state === LEVEL_FINISHED) {
            return <LevelFinished finishedLevel={this.props.currentLevel}
                                  onReplayLevel={this.replayCurrentLevel}
                                  onPlayNextLevel={this.playNextLevel}
                                  onHomeButtonPressed={this.goToHome}/>
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameEngine);