import React from "react";
import {View} from "react-native";
import {Content} from "native-base";
import {PracticeModeOption} from "./PracticeModeOption";
import I18n from "../../../i18n/i18n";
import {PRACTICE_MODE_SELECTION_STYLES} from "../../styles/practice/styles";
import {makeItTestable} from "../../utils/testable_hoc";
import {MoravecHeader} from "../common/Header";
import {INITIAL, ADVANCED, INTERMEDIATE} from "../../models/practice/PracticeMode";
import {OperationCategory} from "../../models/operations/Category";

export let PracticeModeSelection = class extends React.Component {
    static navigationOptions = {
        title: 'Practice',
        header: null
    };

    constructor(props) {
        super(props);
        this.handlePracticeModeSelected = this.handlePracticeModeSelected.bind(this);
    }

    handlePracticeModeSelected(category, difficulty) {
        this.props.navigation.navigate('Practice', {category: category, difficulty: difficulty});
    }

    render() {
        return (
            <Content>
                <MoravecHeader title={I18n.t('practice.headerTitle').toUpperCase()}/>
                <View style={PRACTICE_MODE_SELECTION_STYLES.container}>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("1d+1d")} difficulty={INITIAL}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("1dx1d")} difficulty={INTERMEDIATE}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("2d+2d")} difficulty={ADVANCED}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("2dx1d")} difficulty={INITIAL}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("2dx1d")} difficulty={INTERMEDIATE}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("2dx1d")} difficulty={ADVANCED}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("3dx1d")} difficulty={INITIAL}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("3dx1d")} difficulty={INTERMEDIATE}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("3dx1d")} difficulty={ADVANCED}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("(2d)^2")} difficulty={INITIAL}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("(2d)^2")} difficulty={INTERMEDIATE}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("(2d)^2")} difficulty={ADVANCED}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("4dx1d")} difficulty={INITIAL}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("4dx1d")} difficulty={INTERMEDIATE}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("4dx1d")} difficulty={ADVANCED}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("(3d)^2")} difficulty={INITIAL}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("(3d)^2")} difficulty={INTERMEDIATE}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("(3d)^2")} difficulty={ADVANCED}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                    <View style={PRACTICE_MODE_SELECTION_STYLES.row}>
                        <PracticeModeOption category={new OperationCategory("(4d)^2")} difficulty={INITIAL}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("(4d)^2")} difficulty={INTERMEDIATE}
                                            handleSelect={this.handlePracticeModeSelected}/>
                        <PracticeModeOption category={new OperationCategory("(4d)^2")} difficulty={ADVANCED}
                                            handleSelect={this.handlePracticeModeSelected}/>
                    </View>
                </View>
            </Content>
        )
    }
};

PracticeModeSelection = makeItTestable('PracticeModeSelection')(PracticeModeSelection);