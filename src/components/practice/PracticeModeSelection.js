import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Content} from "native-base";
import {PracticeModeOption} from "./PracticeModeOption";
import {PRACTICE_MODE_SELECTION_STYLES} from "../../styles/practice/styles"
import {makeItTestable} from "../../utils/testable_hoc";
import {MoravecHeader} from "../common/Header";
import {BASIC, MEDIUM, DIFFICULT} from "../../actions/practice/PracticeMode";

export let PracticeModeSelection = class extends React.Component {
    constructor(props) {
        super(props);
        this.handlePracticeModeSelected = this.handlePracticeModeSelected.bind(this);
    }

    handlePracticeModeSelected(categoryName, difficulty) {
        this.props.onSelectPracticeMode(categoryName, difficulty);
    }

    render() {
        return (
            <Content>
                <MoravecHeader title='PRÁCTICA'/>
                <View style={PRACTICE_MODE_SELECTION_STYLES.container}>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption categoryName="1+1" difficulty={BASIC} handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="1x1" difficulty={MEDIUM} handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="2+2" difficulty={DIFFICULT} handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption categoryName="2x1" difficulty={BASIC}  handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="2x1" difficulty={MEDIUM} handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="2x1" difficulty={DIFFICULT} handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption categoryName="3x1" difficulty={BASIC}  handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="3x1" difficulty={MEDIUM} handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="3x1" difficulty={DIFFICULT} handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption categoryName="2^2" difficulty={BASIC} handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="2^2" difficulty={MEDIUM} handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="2^2" difficulty={DIFFICULT} handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption categoryName="4x1" difficulty={BASIC} handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="4x1" difficulty={MEDIUM} handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="4x1" difficulty={DIFFICULT} handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption categoryName="3^2" difficulty={BASIC} handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="3^2" difficulty={MEDIUM} handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="3^2" difficulty={DIFFICULT} handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption categoryName="4^2" difficulty={BASIC} handlePracticeModeSelected={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="4^2" difficulty={MEDIUM} handlePracticeModeSelected={this.handlePracticeModeSelected}/>
                        <PracticeModeOption categoryName="4^2" difficulty={DIFFICULT} handlePracticeModeSelected={this.handlePracticeModeSelected}/>
                    </View>
                </View>
            </Content>
        )
    }
};

PracticeModeSelection = makeItTestable('PracticeModeSelection')(PracticeModeSelection);