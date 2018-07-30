import React from "react";
import {View} from "react-native";
import {Content} from "native-base";
import {PracticeModeOption} from "./PracticeModeOption";
import {PRACTICE_MODE_SELECTION_STYLES} from "../../styles/practice/styles"
import {makeItTestable} from "../../utils/testable_hoc";
import {MoravecHeader} from "../common/Header";
import {BASIC, DIFFICULT, MEDIUM} from "../../models/practice/PracticeMode";
import {OperationCategory} from "../../models/operations/Category";

export let PracticeModeSelection = class extends React.Component {
    constructor(props) {
        super(props);
        this.handlePracticeModeSelected = this.handlePracticeModeSelected.bind(this);
    }

    handlePracticeModeSelected(category, difficulty) {
        this.props.onSelectPracticeMode(category, difficulty);
    }

    render() {
        return (
            <Content>
                <MoravecHeader title='PRÁCTICA'/>
                <View style={PRACTICE_MODE_SELECTION_STYLES.container}>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("1d+1d")} difficulty={BASIC}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("1dx1d")} difficulty={MEDIUM}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("2d+2d")} difficulty={DIFFICULT}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("2dx1d")} difficulty={BASIC}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("2dx1d")} difficulty={MEDIUM}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("2dx1d")} difficulty={DIFFICULT}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("3dx1d")} difficulty={BASIC}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("3dx1d")} difficulty={MEDIUM}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("3dx1d")} difficulty={DIFFICULT}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("(2d)^2")} difficulty={BASIC}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("(2d)^2")} difficulty={MEDIUM}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("(2d)^2")} difficulty={DIFFICULT}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("4dx1d")} difficulty={BASIC}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("4dx1d")} difficulty={MEDIUM}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("4dx1d")} difficulty={DIFFICULT}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("(3d)^2")} difficulty={BASIC}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("(3d)^2")} difficulty={MEDIUM}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("(3d)^2")} difficulty={DIFFICULT}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("(4d)^2")} difficulty={BASIC}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("(4d)^2")} difficulty={MEDIUM}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("(4d)^2")} difficulty={DIFFICULT}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                </View>
            </Content>
        )
    }
};

PracticeModeSelection = makeItTestable('PracticeModeSelection')(PracticeModeSelection);