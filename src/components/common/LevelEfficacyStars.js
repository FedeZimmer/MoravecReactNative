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
        stars: 0,
        emptyStarColor: LEVEL_EFFICACY_STARS_STYLES.emptyStarDefaultColor,
        smallStarSize: LEVEL_EFFICACY_STARS_STYLES.smallStar.fontSize,
        bigStarSize: LEVEL_EFFICACY_STARS_STYLES.bigStar.fontSize
    };

    render() {
        if (this.props.stars === 0) {
            return (
                <View style={LEVEL_EFFICACY_STARS_STYLES.levelEfficacy}>
                    <StarEmpty fontSize={this.props.smallStarSize} color={this.props.emptyStarColor}/>
                    <StarEmpty fontSize={this.props.bigStarSize} color={this.props.emptyStarColor}/>
                    <StarEmpty fontSize={this.props.smallStarSize} color={this.props.emptyStarColor}/>
                </View>
            )
        }
        if (this.props.stars === 1) {
            return (
                <View style={LEVEL_EFFICACY_STARS_STYLES.levelEfficacy}>
                    <StarFull fontSize={this.props.smallStarSize}/>
                    <StarEmpty fontSize={this.props.bigStarSize} color={this.props.emptyStarColor}/>
                    <StarEmpty fontSize={this.props.smallStarSize} color={this.props.emptyStarColor}/>
                </View>
            )
        }
        if (this.props.stars === 2) {
            return (
                <View style={LEVEL_EFFICACY_STARS_STYLES.levelEfficacy}>
                    <StarFull fontSize={this.props.smallStarSize}/>
                    <StarFull fontSize={this.props.bigStarSize}/>
                    <StarEmpty fontSize={this.props.smallStarSize} color={this.props.emptyStarColor}/>
                </View>
            )
        }

        if (this.props.stars === 3) {
            return (
                <View style={LEVEL_EFFICACY_STARS_STYLES.levelEfficacy}>
                    <StarFull fontSize={this.props.smallStarSize}/>
                    <StarFull fontSize={this.props.bigStarSize}/>
                    <StarFull fontSize={this.props.smallStarSize}/>
                </View>
            )
        }
    }
}
