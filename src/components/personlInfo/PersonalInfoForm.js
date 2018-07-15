import React from "react";
import {Image, Text, View, TextInput, ScrollView} from "react-native";
import {DatePicker, Radio, Button} from "native-base";
import {PERSONAL_INFO_FORM_STYLES, RADIO_SET_STYLES} from "../../styles/personalInfo/styles";
import {pinkColor} from "../../styles/global";

import I18n from 'react-native-i18n';
import moment from "moment";

// FIXME: Import only the locale that is needed
import 'moment/locale/es';
import 'moment/locale/fr';

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
        this.showSelectedDate = this.showSelectedDate.bind(this);
    }

    setResponse(formField, response) {
        this.setState({[formField]: response});
    }

    optionIsSelected(formField, option) {
        return this.state[formField] == option;
    }

    selectOption(formField, option) {
        this.setState({[formField]: option});
    }

    handleSubmit() {
        let personalInfo = this.state;
        this.props.onSubmit(personalInfo);
    }

    showSelectedDate() {
        if (this.state.birthDate  !== '') {
            return moment(this.state.birthDate).locale(I18n.locale).format('LL');
        } else {
            return this.state.birthDate;
        }
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
                        textStyle={PERSONAL_INFO_FORM_STYLES.textInput}
                        placeHolderTextStyle={PERSONAL_INFO_FORM_STYLES.placeholder}
                        onDateChange={(date) => this.setResponse('birthDate', date)}
                        formatChosenDate={this.showSelectedDate}/>
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
                    <TextInput style={[PERSONAL_INFO_FORM_STYLES.textInput, {height: 40}]}
                               onSubmitEditing={(event) => this.setResponse('languageQuantity', event.nativeEvent.text)}
                               defaultValue={this.state.languageQuantity}/>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <RadioSet name="studiesAchieved" label="Estudios alcanzados" orientation="vertical"
                              options={['Primaria terminada', 'Secundaria en curso', 'Secundaria terminada',
                              'Universitario en curso', 'Universitario terminado']}
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption} />
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <RadioSet name="skillfulHand" label="Mano hábil" orientation="vertical"
                              options={['Diestro', 'Zurdo', 'Ambas']}
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption} />
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <Text style={PERSONAL_INFO_FORM_STYLES.inputLabel}>¿Cuál es tu habilidad musical?</Text>
                    <RadioSet name="musicListenerAbility" label="Como oyente"
                              labelStyle={PERSONAL_INFO_FORM_STYLES.inputSubLabel}
                              options={['Nula', 'Moderada', 'Avanzada']}
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption} />
                    <RadioSet name="musicInstrumentalistAbility" label="Como instrumentista"
                              labelStyle={PERSONAL_INFO_FORM_STYLES.inputSubLabel}
                              options={['Nula', 'Moderada', 'Avanzada']}
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption} />
                    <RadioSet name="musicProfessionalAbility" label="Como profesional"
                              labelStyle={PERSONAL_INFO_FORM_STYLES.inputSubLabel}
                              options={['Nula', 'Moderada', 'Avanzada']}
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption} />
                </View>
                <View>
                    <Button style={PERSONAL_INFO_FORM_STYLES.submitButton} onPress={this.handleSubmit}>
                        <Text style={PERSONAL_INFO_FORM_STYLES.submitButtonText}>
                            {'Listo! Empezar a jugar'.toUpperCase()}
                        </Text>
                    </Button>
                </View>
            </ScrollView>
        );
    }
}

class RadioSet extends React.Component {
    static defaultProps = {
        orientation: 'horizontal',
        labelStyle: PERSONAL_INFO_FORM_STYLES.inputLabel
    };

    constructor(props) {
        super(props);

        this.state = {
            optionsQuantity: this.props.options.length
        };
    }

    render() {
        return (
            <View>
                <Text style={this.props.labelStyle}>{this.props.label}</Text>
                <View style={[RADIO_SET_STYLES[this.props.orientation], {flex: this.state.optionsQuantity}]}>
                    {this.props.options.map((option) =>
                        (
                            <View key={option} style={RADIO_SET_STYLES.radioContainer}>
                                <Radio selected={this.props.optionIsSelected(this.props.name, option)}
                                       onPress={() => this.props.selectOption(this.props.name, option)}
                                       style={RADIO_SET_STYLES.radioButton} selectedColor={pinkColor}/>
                                <Text style={RADIO_SET_STYLES.radioOptionLabel}>{option}</Text>
                            </View>
                        )
                    )}
                </View>
            </View>
        )
    }
}