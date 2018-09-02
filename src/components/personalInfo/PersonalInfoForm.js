import React from "react";
import {Platform, ScrollView, Text, TextInput, View} from "react-native";
import {DatePicker} from "native-base";
import {PERSONAL_INFO_FORM_STYLES} from "../../styles/personalInfo/styles";
import {RadioSet} from "./RadioSet";

import I18n from 'react-native-i18n';
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
                        {I18n.t('personalInfo.instructions')}
                    </Text>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <Text style={PERSONAL_INFO_FORM_STYLES.inputLabel}>{I18n.t('personalInfo.birthDate.label')}</Text>
                    <DatePicker
                        defaultDate={new Date(2000, 0, 1)}
                        maximumDate={new Date()}
                        locale={I18n.locale}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText={I18n.t('personalInfo.birthDate.select')}
                        textStyle={PERSONAL_INFO_FORM_STYLES.textInput[Platform.OS]}
                        placeHolderTextStyle={PERSONAL_INFO_FORM_STYLES.placeholder}
                        onDateChange={(date) => this.setResponse('birthDate', date)}/>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <RadioSet name="gender" label={I18n.t('personalInfo.gender.label')} orientation="vertical"
                              options={
                                  [I18n.t('personalInfo.gender.options.male'),
                                  I18n.t('personalInfo.gender.options.female'),
                                  I18n.t('personalInfo.gender.options.other')]
                              }
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption}/>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <RadioSet name="language" label={I18n.t('personalInfo.nativeLanguage.label')} orientation="vertical"
                              options={
                                  [I18n.t('personalInfo.nativeLanguage.options.english'),
                                  I18n.t('personalInfo.nativeLanguage.options.spanish'),
                                  I18n.t('personalInfo.nativeLanguage.options.french'),
                                  I18n.t('personalInfo.nativeLanguage.options.portuguese'),
                                  I18n.t('personalInfo.nativeLanguage.options.other')]
                              }
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption}/>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <Text style={PERSONAL_INFO_FORM_STYLES.inputLabel}>
                        {I18n.t('personalInfo.numberOfLanguages')}
                    </Text>
                    <TextInput style={[PERSONAL_INFO_FORM_STYLES.textInput[Platform.OS]]}
                               onChangeText={(text) => this.setResponse('languageQuantity', text)}
                               defaultValue={this.state.languageQuantity} keyboardType='numeric'/>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <RadioSet name="studiesAchieved" label={I18n.t('personalInfo.achievedStudies.label')}
                              orientation="vertical"
                              options={
                                  [I18n.t('personalInfo.achievedStudies.options.schoolCompleted'),
                                   I18n.t('personalInfo.achievedStudies.options.highSchoolInProgress'),
                                   I18n.t('personalInfo.achievedStudies.options.highSchoolCompleted'),
                                   I18n.t('personalInfo.achievedStudies.options.collegeInProgress'),
                                   I18n.t('personalInfo.achievedStudies.options.collegeCompleted')]
                              }
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption}/>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <RadioSet name="skillfulHand" label={I18n.t('personalInfo.deftHand.label')} orientation="vertical"
                              options={
                                  [I18n.t('personalInfo.deftHand.options.rightHanded'),
                                  I18n.t('personalInfo.deftHand.options.leftHanded'),
                                  I18n.t('personalInfo.deftHand.options.ambidextrous')]
                              }
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption}/>
                </View>
                <View style={PERSONAL_INFO_FORM_STYLES.inputContainer}>
                    <Text style={PERSONAL_INFO_FORM_STYLES.inputLabel}>
                        {I18n.t('personalInfo.musicCompetences')}
                    </Text>
                    <RadioSet name="musicListenerAbility"
                              label={I18n.t('personalInfo.musicListener.label')}
                              labelStyle={PERSONAL_INFO_FORM_STYLES.inputSubLabel}
                              options={
                                  [I18n.t('personalInfo.musicListener.options.any'),
                                  I18n.t('personalInfo.musicListener.options.moderate'),
                                  I18n.t('personalInfo.musicListener.options.advanced')]
                              }
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption}/>
                    <RadioSet name="musicInstrumentalistAbility"
                              label={I18n.t('personalInfo.musicInstrumentalist.label')}
                              labelStyle={PERSONAL_INFO_FORM_STYLES.inputSubLabel}
                              options={
                                  [I18n.t('personalInfo.musicInstrumentalist.options.any'),
                                  I18n.t('personalInfo.musicInstrumentalist.options.moderate'),
                                  I18n.t('personalInfo.musicInstrumentalist.options.advanced')]
                              }
                              optionIsSelected={this.optionIsSelected}
                              selectOption={this.selectOption}/>
                    <RadioSet name="musicProfessionalAbility"
                              label={I18n.t('personalInfo.musicTheory.label')}
                              labelStyle={PERSONAL_INFO_FORM_STYLES.inputSubLabel}
                              options={
                                  [I18n.t('personalInfo.musicTheory.options.any'),
                                  I18n.t('personalInfo.musicTheory.options.moderate'),
                                  I18n.t('personalInfo.musicTheory.options.advanced')]
                              }
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