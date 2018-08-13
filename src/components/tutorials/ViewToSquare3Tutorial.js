import React from "react";
import {ScrollView, Text, View, Image} from "react-native";
import {Content} from "native-base";
import {Tutorial} from "./Tutorial";
import {MoravecHeader} from "../common/Header";
import Images from "../../../assets/images/images";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";
import exponent from "superscript-number";

export class ViewToSquare3Tutorial extends React.Component {
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
                <Image source={Images.square3dExample1} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    Cuando elevamos un número de tres dígitos también usamos <Text style={TUTORIAL_STYLES.boldText}>{"x" + exponent(2) + "=(x+a)(x-a) + a" + exponent(2)}</Text>,
                     pero en este caso <Text style={TUTORIAL_STYLES.boldText}>a</Text> es un número de dos dígitos. En
                    este ejemplo <Text style={TUTORIAL_STYLES.boldText}>x es 512 y a es 12</Text>. Pero para
                    elevar 12 al cuadrado consideramos <Text style={TUTORIAL_STYLES.boldText}>x = 12 y a = 2</Text>.
                </Text>
                <Image source={Images.square3dExample2} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    Otro ejemplo con <Text style={TUTORIAL_STYLES.boldText}>x = 684 y a = 16</Text>. Después, para
                    elevar 16 al cuadrado usamos
                    <Text style={TUTORIAL_STYLES.boldText}>x = 16 y a = 4</Text>.
                </Text>
            </View>
        )
    }

    render() {
        return (
            <Content>
                <MoravecHeader title='POTENCIA'/>
                <Tutorial title={"x" + exponent(2) + " potencia (3d)"}
                          videoUrl="http://techslides.com/demos/sample-videos/small.mp4"
                          showExamples={this.showExamples} />
            </Content>
        );
    }
}