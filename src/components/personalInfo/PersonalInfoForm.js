import React from "react";
import {Platform, ScrollView, Text, TextInput, View} from "react-native";
import {DatePicker} from "native-base";
import {PERSONAL_INFO_FORM_STYLES} from "../../styles/personalInfo/styles";
import {RadioSet} from "./RadioSet";

import I18n from 'react-native-i18n';
import moment from "moment";
// FIXME: Import only the locale that is needed
import 'moment/locale/es';
import 'moment/locale/fr';
import {SubmitPersonalInfoButton} from "./SubmitPersonalInfoButton";

export class PersonalInfoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            birthDate: '',
            gender: '',
            language: '',
            languageQuantity: '',
            studiesAchieved: '',
            skillfulHand: '',
            musicListenerAbility: '',
            musicInstrumentalistAbility: '',
            musicProfessionalAbility: '',
        };

        this.setResponse = this.setResponse.bind(this);
        this.optionIsSelected = this.optionIsSelected.bind(this);
        this.selectOption = this.selectOption.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setResponse(formField, response) {
        this.setState({[formField]: response});
    }

    optionIsSelected(formField, option) {
        return this.state[formField] === option;
    }

    selectOption(formField, option) {
        this.setState({[formField]: option});
    }

    handleSubmit() {
        let personalInfo = this.state;
        this.props.onSubmit(personalInfo);
    }

    render() {
        return (
            <ScrollView style={PERSONAL_INFO_FORM_STYLES.personalInfoForm}>
                <View style={PERSONAL_INFO_FORM_STYLES.mainTextContainer}>
                    <Text style={PERSONAL_INFO_FORM_STYLES.mainText}>
                        Por favor completá el cuestionario. Toda la información que nos das es para uso científico,
                        sin fines comerciales ni publicitarios.
                        Nos alegra mucho que participes. Gracias.
                    </Text>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <Text style={PERSONAL_INFO_FORM_STYLES.inputLabel}>Fecha de nacimiento</Text>
                    <DatePicker
                        defaultDate={new Date(2000, 0, 1)}
                        maximumDate={new Date()}
                        locale={I18n.locale}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Seleccioná una fecha"
                        textStyle={PERSONAL_INFO_FORM_STYLES.textInput[Platform.OS]}
                        placeHolderTextStyle={PERSONAL_INFO_FORM_STYLES.placeholder}
                        onDateChange={(date) => this.setResponse('birthDate', date)}/>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <RadioSet name="gender" label="Género" orientation="vertical"
                              options={['Mujer', 'Varón', 'Otro']}
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption}/>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <RadioSet name="language" label="Lengua Materna / Primer idioma" orientation="vertical"
                              options={['Inglés', 'Español', 'Francés', 'Portugués', 'Otro']}
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption}/>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <Text style={PERSONAL_INFO_FORM_STYLES.inputLabel}> Cuántos idiomas hablas ?</Text>
                    <TextInput style={[PERSONAL_INFO_FORM_STYLES.textInput[Platform.OS]]}
                               onChangeText={(text) => this.setResponse('languageQuantity', text)}
                               defaultValue={this.state.languageQuantity} keyboardType='numeric'/>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <RadioSet name="studiesAchieved" label="Estudios alcanzados" orientation="vertical"
                              options={['Primaria terminada', 'Secundaria en curso', 'Secundaria terminada',
                                  'Universitario en curso', 'Universitario terminado']}
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption}/>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <RadioSet name="skillfulHand" label="Mano hábil" orientation="vertical"
                              options={['Diestro', 'Zurdo', 'Ambas']}
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption}/>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <Text style={PERSONAL_INFO_FORM_STYLES.inputLabel}>¿Cuál es tu habilidad musical?</Text>
                    <RadioSet name="musicListenerAbility" label="Como oyente"
                              labelStyle={PERSONAL_INFO_FORM_STYLES.inputSubLabel}
                              options={['Nula', 'Moderada', 'Avanzada']}
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption}/>
                    <RadioSet name="musicInstrumentalistAbility" label="Como instrumentista"
                              labelStyle={PERSONAL_INFO_FORM_STYLES.inputSubLabel}
                              options={['Nula', 'Moderada', 'Avanzada']}
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption}/>
                    <RadioSet name="musicProfessionalAbility" label="Como profesional"
                              labelStyle={PERSONAL_INFO_FORM_STYLES.inputSubLabel}
                              options={['Nula', 'Moderada', 'Avanzada']}
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption}/>
                </View>
                <View>
                    <SubmitPersonalInfoButton onPress={this.handleSubmit}/>
                </View>
            </ScrollView>
        );
    }
}