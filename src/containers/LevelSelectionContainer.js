import React, {Component} from 'react'

import {BackButton} from '../components/common/BackButton'
import {HEADER_STYLES} from '../styles/common/styles';

import LevelSelection from '../components/game/LevelSelection'


export default class LevelSelectionContainer extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'ARCADE',
        headerLeft: <BackButton goBack={navigation.goBack}/>,
        headerStyle: HEADER_STYLES.header,
        headerTitleStyle: HEADER_STYLES.title,
    });

    render() {
        return <LevelSelection {...this.props} />
    }
}
