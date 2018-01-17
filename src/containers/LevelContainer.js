import React, {Component} from 'react'
import {connect} from 'react-redux'

import Level from '../components/game/Level'
import * as actions from '../actions/level_actions'


class LevelContainer extends Component {
    static navigationOptions = {
        title: 'Arcade',
        header: null
    };

    render() {
        return <Level {...this.props} />
    }
}

export default LevelContainer = connect(state => state.level, actions)(LevelContainer)
