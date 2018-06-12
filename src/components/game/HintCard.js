import * as React from "react";
import {Text, View} from "react-native";
import {makeItTestable} from "../../utils/testable_hoc";

export let HintCard = class extends React.Component {
    _renderHint() {
        return this.props.operationHint.getHint().map((hintStep, index) => {
            return <Text key={index}>{hintStep}</Text>;
        });
    }

    render() {
        return (
            <View>
                {this._renderHint()}
            </View>
        )
    }
};

HintCard = makeItTestable('HintCard')(HintCard);