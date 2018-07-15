import {StackNavigator} from "react-navigation";
import Main from "./containers/Main";
import PersonalInfo from "./containers/PersonalInfo";
import {Home} from "./components/home/Home";
import GameEngine from "./containers/GameEngine";
import Practice from "./containers/Practice";

export const Navigator = StackNavigator(
    {
        Main: {screen: Main},
        PersonalInfo: {screen: PersonalInfo},
        Home: {screen: Home},
        Play: {screen: GameEngine},
        Practice: {screen: Practice},
    },
    {
        headerMode: 'screen'
    }
);