import React from 'react'
import {View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {LEVEL_EFFICACY_STARS_STYLES} from "../../styles/common/styles";


class StarFull extends React.Component {
    static defaultProps = {
        fontSize: LEVEL_EFFICACY_STARS_STYLES.smallStar.fontSize,
        color: LEVEL_EFFICACY_STARS_STYLES.fullStarColor,
    };

    render() {
        return <Icon name="star" style={{fontSize: this.props.fontSize, color: this.props.color}}/>
    }
}

class StarEmpty extends React.Component {
    static defaultProps = {
        fontSize: LEVEL_EFFICACY_STARS_STYLES.smallStar.fontSize,
        color: LEVEL_EFFICACY_STARS_STYLES.emptyStarDefaultColor,
    };

    render() {
        return <Icon name="star-o" style={{fontSize: this.props.fontSize, color: this.props.color}}/>
    }
}

export class LevelEfficacyStars extends React.Component {
    static defaultProps = {
        correctAnswers: 0,
        emptyStarColor: LEVEL_EFFICACY_STARS_STYLES.emptyStarDefaultColor,
    };

    render() {
        if (this.props.correctAnswers < 15) {
            return (
                <View style={LEVEL_EFFICACY_STARS_STYLES.levelEfficacy}>
                    <StarEmpty color={this.props.emptyStarColor}/>
                    <StarEmpty fontSize={LEVEL_EFFICACY_STARS_STYLES.bigStar.fontSize}
                               color={this.props.emptyStarColor}/>
                    <StarEmpty color={this.props.emptyStarColor}/>
                </View>
            )
        }
        if (this.props.correctAnswers < 17) {
            return (
                <View style={LEVEL_EFFICACY_STARS_STYLES.levelEfficacy}>
                    <StarFull/>
                    <StarEmpty fontSize={LEVEL_EFFICACY_STARS_STYLES.bigStar.fontSize}
                               color={this.props.emptyStarColor}/>
                    <StarEmpty color={this.props.emptyStarColor}/>
                </View>
            )
        }
        if (this.props.correctAnswers < 20) {
            return (
                <View style={LEVEL_EFFICACY_STARS_STYLES.levelEfficacy}>
                    <StarFull/>
                    <StarFull fontSize={LEVEL_EFFICACY_STARS_STYLES.bigStar.fontSize}/>
                    <StarEmpty color={this.props.emptyStarColor}/>
                </View>
            )
        }

        if (this.props.correctAnswers === 20) {
            return (
                <View style={LEVEL_EFFICACY_STARS_STYLES.levelEfficacy}>
                    <StarFull/>
                    <StarFull fontSize={LEVEL_EFFICACY_STARS_STYLES.bigStar.fontSize}/>
                    <StarFull/>
                </View>
            )
        }
    }
}
