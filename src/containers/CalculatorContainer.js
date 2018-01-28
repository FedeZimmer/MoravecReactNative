import React, {Component} from 'react'
import { connect } from 'react-redux'

import Calculator from '../components/game/calculator/Calculator'
import * as actions from '../actions/calculator_actions'

import KeepAwake from 'react-native-keep-awake';

class CalculatorContainer extends Component {
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

    componentDidMount() {
        KeepAwake.activate();
        this.createTrial();
    }

    componentWillUnmount(){
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
        return <Calculator
            submit={this.submit}
            time={this.state.time}
            {...this.props}/>
    }
}

export default CalculatorContainer = connect(state => state.calculator, actions)(CalculatorContainer);