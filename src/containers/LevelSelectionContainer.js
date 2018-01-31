import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPlayedLevelsInfo} from "../actions/level_selection_actions";
import {LevelSelection} from "../components/game/LevelSelection";

const mapStateToProps = (state) => {
    return state.levelSelection
};

const mapDispatchToProps = dispatch => {
    return {
        getPlayedLevelsInfo: () => {
            dispatch(getPlayedLevelsInfo())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LevelSelection);