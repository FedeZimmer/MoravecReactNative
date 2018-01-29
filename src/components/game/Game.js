import KeepAwake from "react-native-keep-awake";
import Calculator from "./calculator/Calculator";
import React, {Component} from 'react'
import {GAME_STYLES} from "../../styles/game/calculator/styles";
import UserAnswerFeedback from "./UserAnswerFeedback";
import Header from "./header/Header";
import CountdownBar from "./CountdownBar";
import {LevelFinished} from "./LevelFinished";
import {View} from "react-native";

export class Game extends Component {
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
        this.submit = this.submit.bind(this);
        this.userEnteredResult = this.userEnteredResult.bind(this);
        this.levelFinished = this.levelFinished.bind(this);
    }

    componentWillMount() {
        const params = this.props.navigation.state.params;
        const levelNumber = params.levelNumber;
        this.props.startLevel(levelNumber);
    }

    componentDidMount() {
        KeepAwake.activate();
        this.createTrial();
    }

    componentWillUnmount() {
        KeepAwake.deactivate();
        this.stopTimer();
    }

    createTrial() {
        this.props.createTrial(this.props.level);
        this.startTimer();
    };

    startTimer() {
        let timer = setInterval(this.updateTimer, 50);
        this.setState({timer: timer, time: 0, startTime: Date.now()});
    };

    updateTimer() {
        const startTime = this.state.startTime;
        this.setState({time: Date.now() - startTime});
    }

    stopTimer() {
        clearInterval(this.state.timer);
    }

    userEnteredResult(trial) {
        return trial.input != null;
    }

    levelFinished() {
        return this.props.trials.length + 1 == this.props.totalTrials;
    }

    submit(trial) {
        if (this.userEnteredResult(trial)) {
            this.stopTimer();

            this.props.showFeedback(trial);
            setTimeout(this.props.hideFeedback, this.props.feedback.duration);

            this.props.submitTrial(trial);
            if (this.levelFinished()) {
                setTimeout(this.props.finishLevel, this.props.feedback.duration);
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
                <View style={GAME_STYLES.game}>
                    <UserAnswerFeedback {...this.props}/>
                    <Header {...this.props} time={this.state.time}/>
                    <CountdownBar {...this.props} time={this.state.time}/>
                    <Calculator {...this.props} submit={this.submit}/>
                </View>
            );
        }
    }
}