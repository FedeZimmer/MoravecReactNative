import * as React from "react";
import {Text, View, Animated} from "react-native";
import {makeItTestable} from "../../utils/testable_hoc";
import {HINT_CARD_STYLES} from "../../styles/common/styles";

export let HintCard = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opacityValue: new Animated.Value(0)
        }
    }

    _renderHint() {
        return this.props.operationHint.getHint().map((hintStep, index) => {
            return <Text key={index} style={HINT_CARD_STYLES.hintText}>{hintStep}</Text>;
        });
    }

    componentDidMount() {
        Animated.timing(
            this.state.opacityValue,
            {
                toValue: 1,
                duration: 500,
            }
        ).start();
    }

    render() {
        return (
            <Animated.View style={[HINT_CARD_STYLES.hint, {opacity: this.state.opacityValue}]}>
                {this._renderHint()}
            </Animated.View>
        )
    }
};

HintCard = makeItTestable('HintCard')(HintCard);