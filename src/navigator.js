import {Home} from "./components/home/Home";
import {StackNavigator} from "react-navigation";
import GameEngine from "./containers/GameEngine";

export const Navigator = StackNavigator(
    {
        Home: {screen: Home},
        Play: {screen: GameEngine},
    },
    {
        headerMode: 'screen'
    }
);