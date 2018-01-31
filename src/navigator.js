import {Home} from "./components/home/Home";
import {StackNavigator} from "react-navigation";
import LevelSelectionContainer from "./containers/LevelSelectionContainer";
import GameEngine from "./containers/GameEngine";

export const Navigator = StackNavigator(
    {
        Home: {screen: Home},
        LevelSelection: {screen: LevelSelectionContainer},
        PlayLevel: {screen: GameEngine},
    },
    {
        headerMode: 'screen'
    }
);