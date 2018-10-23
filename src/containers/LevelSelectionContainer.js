import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSavedLevelStatsFromDevice, loadLevels} from "../actions/level_selection_actions";
import {LevelSelection} from "../components/level_selection/LevelSelection";

const mapStateToProps = (state) => {
    return {
        numLevels: state.levels.numLevels,
        playedLevelsStats: state.levels.playedLevelsStats,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            loadLevels: () => {
                dispatch(loadLevels())
            },
            getSavedGameInfoFromDevice: () => {
                dispatch(getSavedLevelStatsFromDevice())
            },
        }
    }
};

class LevelSelectionContainer extends Component {
    static navigationOptions = {
        title: 'Levels',
        header: null
    };

    constructor(props) {
        super(props);

        this.handleLevelSelect = this.handleLevelSelect.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadLevels();
    }

    handleLevelSelect(levelNumber) {
        this.props.navigation.navigate('Play', {levelNumber: levelNumber});
    }

    render() {
        return <LevelSelection onSelectLevel={this.handleLevelSelect}
                               onLoading={this.props.actions.getSavedGameInfoFromDevice}
                               playedLevelsStats={this.props.playedLevelsStats}
                               numLevels={this.props.numLevels}
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelSelectionContainer);