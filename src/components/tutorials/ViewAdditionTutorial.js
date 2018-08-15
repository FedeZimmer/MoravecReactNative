import React from "react";
import {ScrollView, Text, View, Image} from "react-native";
import {Tutorial} from "./Tutorial";
import Images from "../../../assets/images/images";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";

export class ViewAdditionTutorial extends React.Component {
    static navigationOptions = {
        title: 'Tutorial',
        header: null
    };

    constructor(props) {
        super(props);

        this.showExamples = this.showExamples.bind(this);
    }

    showExamples() {
        return (
            <View style={TUTORIAL_STYLES.exampleContainer}>
                <Text style={TUTORIAL_STYLES.exampleTitle}>{'Ejemplos'.toUpperCase()}</Text>
                <Image source={Images.additionExample1} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    Acá empezas a familiarizarte con el método de izquierda a derecha. Primero sumás las
                    decenas del segundo número al primero y, por último, las unidades del segundo número al
                    resultado anterior.
                </Text>
                <Image source={Images.additionExample2} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    Este ejemplo es más dificil porque las unidades suman un número mayor que 10.
                </Text>
            </View>
        )
    }

    render() {
        return (
            <Tutorial title="+ suma" headerTitle="SUMA" videoUrl="https://vjs.zencdn.net/v/oceans.mp4"
                      showExamples={this.showExamples} />
        );
    }
}