import {TermsAndConditions} from "./components/personlInfo/TermsAndConditions";
import {Home} from "./components/home/Home";
import {StackNavigator} from "react-navigation";
import GameEngine from "./containers/GameEngine";
import Practice from "./containers/Practice";

export const Navigator = StackNavigator(
    {
        TermsAndConditions: {screen: TermsAndConditions},
        Home: {screen: Home},
        Play: {screen: GameEngine},
        Practice: {screen: Practice},
    },
    {
        headerMode: 'screen'
    }
);