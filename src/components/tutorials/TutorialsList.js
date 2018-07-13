import React from "react";
import {Text, View} from "react-native";
import {Button} from "native-base";

export class TutorialsList extends React.Component {
    static navigationOptions = {
        title: 'Tutoriales'
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <View>
                    <Button onPress={() => navigate('ViewAdditionTutorial')}
                            title="Suma">
                        <Text>Suma</Text>
                    </Button>
                </View>
                <View>
                    <Button onPress={() => navigate('ViewMultiplicationTutorial')}
                        title="Producto">
                        <Text>Producto</Text>
                    </Button>
                </View>
                <View>
                    <Button onPress={() => navigate('ViewToSquare2Tutorial')}
                            title="Potencia (2 digitos)">
                        <Text>Potencia (2 digitos)</Text>
                    </Button>
                </View>
                <View>
                    <Button onPress={() => navigate('ViewToSquare3Tutorial')}
                            title="Potencia (3 digitos)">
                        <Text>Potencia (3 digitos)</Text>
                    </Button>
                </View>
                <View>
                    <Button onPress={() => navigate('ViewMajorSystemTutorial')}
                            title="Sistema Mayor">
                        <Text>Sistema Mayor</Text>
                    </Button>
                </View>
                <View>
                    <Button onPress={() => navigate('ViewToSquare4Tutorial')}
                            title="Potencia (4 digitos)">
                        <Text>Potencia (4 digitos)</Text>
                    </Button>
                </View>
            </View>
        );
    }
}