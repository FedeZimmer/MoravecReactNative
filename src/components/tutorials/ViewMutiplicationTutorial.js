import React from "react";
import {ScrollView, Text, View, Image} from "react-native";
import {Content} from "native-base";
import {Tutorial} from "./Tutorial";
import {MoravecHeader} from "../common/Header";
import Images from "../../../assets/images/images";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";

export class ViewMultiplicationTutorial extends React.Component {
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
                <Image source={Images.multiplicationExample1} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    Para resolver multiplicaciones mentalmente también tenes que familiarizarte con hacerlo de izquierda
                    a derecha. Multiplicando primero las decenas del número mayor y luego las unidades.
                </Text>
                <Image source={Images.multiplicationExample2} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    Otro ejemplo para ejercitar la multiplicación de izquierda a derecha.
                </Text>
                <Image source={Images.multiplicationExample3} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    Se utiliza el mismo método cuando el número mayor es de 3 o 4 dígitos.
                    {'\n'}
                    Siempre se multiplica de izquierda a derecha y se suman progresivamente los resultados parciales.
                </Text>
            </View>
        )
    }

    render() {
        return (
            <Content>
                <MoravecHeader title='PRODUCTO'/>
                <Tutorial title="x producto" videoUrl="http://techslides.com/demos/sample-videos/small.mp4"
                          showExamples={this.showExamples} />
            </Content>
        );
    }
}