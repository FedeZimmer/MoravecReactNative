import React from "react";
import {ScrollView, Text, View, Image} from "react-native";
import {Tutorial} from "./Tutorial";
import Images from "../../../assets/images/images";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";
import exponent from "superscript-number";

export class ViewToSquare2Tutorial extends React.Component {
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
                <Image source={Images.squareExample2} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    Usamos la fórmula <Text style={TUTORIAL_STYLES.boldText}>{"x" + exponent(2) + "=(x+a)(x-a) + a" + exponent(2)}</Text>
                    {'\n'}
                    Donde <Text style={TUTORIAL_STYLES.boldText}>x</Text> es el número de dos dígitos que quiero elevar
                    al cuadrado y <Text style={TUTORIAL_STYLES.boldText}>a</Text> es la diferencia entre x y el
                    multiplo de 10 más cercano a x.
                    {'\n'}
                    Si <Text style={TUTORIAL_STYLES.boldText}>x es 12, a es 2</Text>.
                </Text>
                <Image source={Images.squareExample2} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    Podemos ver que si x = 46, entonces a = 4.
                    {'\n'}
                    Hacemos <Text style={TUTORIAL_STYLES.boldText}>{"46" + exponent(2) + "=(46+4)(46-4) + 4" + exponent(2)}</Text>
                </Text>
            </View>
        )
    }

    render() {
        return (
            <Tutorial title={"x" + exponent(2) + " potencia (2d)"}
                      headerTitle="POTENCIA"
                      videoUrl="http://techslides.com/demos/sample-videos/small.mp4"
                      showExamples={this.showExamples} />
        );
    }
}