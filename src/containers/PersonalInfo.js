import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PERSONAL_INFO_FORM, TERMS_AND_CONDITIONS} from "../reducers/personal_info_reducer";
import {agreeTerms, savePersonalInfo} from "../actions/personal_info_actions";
import {TermsAndConditions} from "../components/personalInfo/TermsAndConditions";
import {PersonalInfoForm} from "../components/personalInfo/PersonalInfoForm";

const mapStateToProps = (state) => {
    return {
        state: state.personalInfo.state,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            agreeTerms: () => {
                dispatch(agreeTerms())
            },
            savePersonalInfo: (personalInfo, afterSaveCallback) => {
                dispatch(savePersonalInfo(personalInfo, afterSaveCallback))
            },
        }
    }
};

class PersonalInfo extends Component {
    static navigationOptions = {
        title: 'PersonalInfo',
        header: null,
        gesturesEnabled: false,
    };

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.goToHome = this.goToHome.bind(this);
    }

    onSubmit(personalInfo) {
        this.props.actions.savePersonalInfo(personalInfo, this.goToHome);
    };

    goToHome() {
        this.props.navigation.navigate('Home');
    };

    render() {
        if (this.props.state === TERMS_AND_CONDITIONS) {
            return <TermsAndConditions handleAgreeTerms={this.props.actions.agreeTerms}/>
        } else if (this.props.state === PERSONAL_INFO_FORM) {
            return <PersonalInfoForm onSubmit={this.onSubmit}/>;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);