import {StackNavigator} from "react-navigation";
import Main from "./containers/Main";
import PersonalInfo from "./containers/PersonalInfo";
import {Home} from "./components/home/Home";
import GameEngine from "./containers/GameEngine";
import Practice from "./containers/Practice";
import StatsContainer from "./containers/StatsContainer";
import {TutorialsList} from "./components/tutorials/TutorialsList";
import {ViewAdditionTutorial} from "./components/tutorials/ViewAdditionTutorial";
import {ViewMajorSystemTutorial} from "./components/tutorials/ViewMajorSystemTutorial";
import {ViewMultiplicationTutorial} from "./components/tutorials/ViewMutiplicationTutorial";
import {ViewToSquare2Tutorial} from "./components/tutorials/ViewToSquare2Tutorial";
import {ViewToSquare3Tutorial} from "./components/tutorials/ViewToSquare3Tutorial";
import {ViewToSquare4Tutorial} from "./components/tutorials/ViewToSquare4Tutorial";
import {OperationStatsScreen} from "./components/statistics/OperationStatsScreen";


export const Navigator = StackNavigator(
    {
        Main: {screen: Main},
        PersonalInfo: {screen: PersonalInfo},
        Home: {screen: Home},
        Play: {screen: GameEngine},
        Practice: {screen: Practice},
        TutorialsList: {screen: TutorialsList},
        ViewAdditionTutorial: {screen: ViewAdditionTutorial},
        ViewMajorSystemTutorial: {screen: ViewMajorSystemTutorial},
        ViewMultiplicationTutorial: {screen: ViewMultiplicationTutorial},
        ViewToSquare2Tutorial: {screen: ViewToSquare2Tutorial},
        ViewToSquare3Tutorial: {screen: ViewToSquare3Tutorial},
        ViewToSquare4Tutorial: {screen: ViewToSquare4Tutorial},
        StatsContainer: {screen: StatsContainer},
        OperationStatsScreen: {screen: OperationStatsScreen},
    },
    {
        headerMode: 'screen'
    }
);