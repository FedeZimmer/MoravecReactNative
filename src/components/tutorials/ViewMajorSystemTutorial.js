import React from "react";
import {ScrollView, Text, View, Image} from "react-native";
import {Content} from "native-base";
import {Tutorial} from "./Tutorial";
import {MoravecHeader} from "../common/Header";
import Images from "../../../assets/images/images";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";

export class ViewMajorSystemTutorial extends React.Component {
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
                <Text style={TUTORIAL_STYLES.exampleTitle}>{'Tabla'.toUpperCase()}</Text>
                <Image source={Images.majorSystemExample} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    En el Sistema Mayor de Memoria, asociamos cada dígito del número a recordar con una consonante
                    como se ve en la tabla. Usando estas letras en orden formamos palabras, agregando las vocales
                    necesarias.
                    {'\n'}
                    Por ejemplo, "lupa" es 59 porque <Text style={TUTORIAL_STYLES.boldText}>L es 5, P es 9</Text> y
                    las vocales no son nada.
                </Text>
            </View>
        )
    }

    render() {
        return (
            <Content>
                <MoravecHeader title='SIST. MAYOR'/>
                <Tutorial title="Sistema mayor" videoUrl="http://techslides.com/demos/sample-videos/small.mp4"
                          showExamples={this.showExamples} />
            </Content>
        );
    }
}