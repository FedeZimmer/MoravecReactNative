import React, {Component} from 'react'
import {connect} from 'react-redux'

import Level from '../components/game/Level'
import * as actions from '../actions/level_actions'


class LevelContainer extends Component {
    static navigationOptions = {
        title: 'Level',
        header: null
    };

    componentWillMount() {
        const params = this.props.navigation.state.params;
        const levelNumber = params.levelNumber;
        this.props.startLevel(levelNumber);
    }

    render() {
        return <Level {...this.props} />
    }
}

export default LevelContainer = connect(state => state.level, actions)(LevelContainer)
