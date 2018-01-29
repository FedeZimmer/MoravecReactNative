import {Home} from "./components/home/Home";
import {StackNavigator} from "react-navigation";
import GameContainer from "./containers/GameContainer";
import LevelSelection from "./components/game/LevelSelection";

export const Navigator = StackNavigator(
    {
        Home: {screen: Home},
        LevelSelection: {screen: LevelSelection},
        PlayLevel: {screen: GameContainer},
    },
    {
        headerMode: 'screen'
    }
);