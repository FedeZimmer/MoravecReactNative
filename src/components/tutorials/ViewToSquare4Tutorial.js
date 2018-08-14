import React from "react";
import {ScrollView, Text, View, Image} from "react-native";
import {Content} from "native-base";
import {Tutorial} from "./Tutorial";
import {MoravecHeader} from "../common/Header";
import Images from "../../../assets/images/images";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";
import exponent from "superscript-number";

export class ViewToSquare4Tutorial extends React.Component {
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
                <Image source={Images.square4dExample1} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    Para números de cuatro dígitos usamos la ya conocida formula
                    <Text style={TUTORIAL_STYLES.boldText}>{"x" + exponent(2) + "=(x+a)(x-a) + a" + exponent(2)}</Text>,
                     pero para calcular {"a" + exponent(2)} utilizamos el Sistema Mayor para memorizar la primera parte
                    del resultado.
                    {'\n'}
                    Si <Text style={TUTORIAL_STYLES.boldText}>x es 6.382, a es 382</Text>. 6.764 x 6.000 es 40 millones,
                    584 mil, entonces memorizamos 584 usando el Sistema Mayor.
                </Text>
                <Image source={Images.square4dExample2} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    Para no olvidar 584, formamos una palabra con sus dígitos. 5 puede ser L, 8 G y 4 C, entonces
                    584 puede ser codificado como <Text style={TUTORIAL_STYLES.boldText}>"LaGo oCa"</Text>. Con esto
                    en mente seguimos los pasos de siempre y obtenemos 145.924.
                    {'\n'}
                    Sumamos 584 (LaGo oCa) y 145 = 729. Juntando todo: 40 millones 729 mil 924.
                </Text>
            </View>
        )
    }

    render() {
        return (
            <Content>
                <MoravecHeader title='POTENCIA'/>
                <Tutorial title={"x" + exponent(2) + " potencia (4d)"}
                          videoUrl="http://techslides.com/demos/sample-videos/small.mp4"
                          showExamples={this.showExamples} />
            </Content>
        );
    }
}