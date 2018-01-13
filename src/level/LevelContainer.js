import React, {Component} from 'react'
import {connect} from 'react-redux'

import Level from './Level'
import * as actions from './actions'


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
