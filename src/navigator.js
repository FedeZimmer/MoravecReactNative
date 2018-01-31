import {Home} from "./components/home/Home";
import {StackNavigator} from "react-navigation";
import LevelSelection from "./components/game/LevelSelection";
import GameEngine from "./containers/GameEngine";

export const Navigator = StackNavigator(
    {
        Home: {screen: Home},
        LevelSelection: {screen: LevelSelection},
        PlayLevel: {screen: GameEngine},
    },
    {
        headerMode: 'screen'
    }
);