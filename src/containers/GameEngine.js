import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    eraseInput, getSavedGameInfoFromDevice, startGame, startLevel, submitTrial,
    typeInput
} from "../actions/game_actions";
import {LevelFinished} from "../components/game/LevelFinished";
import {Game} from "../components/game/Game";
import {LevelSelection} from "../components/game/LevelSelection";
import {LEVEL_FINISHED, LEVEL_SELECTION, PLAYING} from "../reducers/game_reducer";

const mapStateToProps = (state) => {
    return {
        state: state.game.state,
        numLevels: state.game.numLevels,
        playedLevelsStats: state.game.playedLevelsStats,
        currentLevel: state.game.currentLevel,
        currentTrial: state.game.currentTrial,
        lastAnswerData: state.game.lastAnswerData,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            startGame: () => {
                dispatch(startGame())
            },
            getSavedGameInfoFromDevice: () => {
                dispatch(getSavedGameInfoFromDevice())
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
        this.playNextLevel = this.playNextLevel.bind(this);
        this.replayCurrentLevel = this.replayCurrentLevel.bind(this);
        this.goToHome = this.goToHome.bind(this);
    }

    componentWillMount() {
        this.props.actions.startGame();
    }

    handleSubmit() {
        if (this.userEnteredResult()) {
            this.props.actions.submitTrial();
        }
    };

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
        if (this.props.state === LEVEL_SELECTION) {
            return <LevelSelection onSelectLevel={this.props.actions.startLevel}
                                   onLoading={this.props.actions.getSavedGameInfoFromDevice}
                                   playedLevelsStats={this.props.playedLevelsStats}
                                   numLevels={this.props.numLevels}
            />
        } else if (this.props.state === PLAYING) {
            return <Game state={this.props.state}
                         currentLevel={this.props.currentLevel}
                         currentTrial={this.props.currentTrial}
                         lastAnswerData={this.props.lastAnswerData}
                         onEraseInput={this.props.actions.eraseInput}
                         onTypeInput={this.props.actions.typeInput}
                         onSubmit={this.handleSubmit}/>
        } else if (this.props.state === LEVEL_FINISHED) {
            return <LevelFinished finishedLevel={this.props.currentLevel}
                                  onReplayLevel={this.replayCurrentLevel}
                                  onPlayNextLevel={this.playNextLevel}
                                  onHomeButtonPressed={this.goToHome}/>
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameEngine);