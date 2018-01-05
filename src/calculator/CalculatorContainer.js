import React, {Component} from 'react'
import { connect } from 'react-redux'

import Calculator from './Calculator'
import * as actions from './actions'

export class CalculatorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            timer: null,
            startTime: 0,
        }
    }

    componentDidMount() {
        this.createTrial();
    }

    createTrial() {
        this.props.createTrial(this.props.level);
        this.startTimer()
    };

    startTimer() {
        let timer = setInterval(this.updateTimer, 50);
        this.setState({timer, time: 0, startTime: Date.now()})
    };

    updateTimer() {
        this.setState({time: Date.now() - this.state.startTime});
    }

    stopTimer() {
        clearInterval(this.state.timer);
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    submit(trial) {
        this.stopTimer();
        this.props.submitTrial(trial);
        this.props.showFeedback(trial);
        setTimeout(this.props.hideFeedback, 3000);
        if (this.props.trials.length + 1 < this.props.totalTrials) {
            this.createTrial();
        } else {
            setTimeout(this.props.finishLevel, 3000)
        }
    };

    render() {
        return <Calculator
            submit={this.submit}
            time={this.state.time}
            {...this.props}
        />
    }
}

export default CalculatorContainer = connect(state => state.calculator, actions)(CalculatorContainer);