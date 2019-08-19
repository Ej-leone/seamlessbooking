import {
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';
import Login from '../screens/Login'
import LoggedOut from '../screens/Main';
import Usignup from '../screens/Signup/Usignup'
import Screen1 from '../screens/Onboarding/screen'
import MakeBook from '../screens/MakeBook'
import Report from '../screens/Report'
import ARooms from '../screens/ARooms'
import TabNavigator from './TabNavigator'



const AppRoute = createStackNavigator({
    Screen1: { screen: Screen1 },
    LoggedOut: { screen: LoggedOut },
    Usignup: { screen: Usignup },
    Login: { screen: Login }

})
const AppRouteConfigs = createSwitchNavigator({
    Screen1: AppRoute,
    Book: MakeBook,
    Report: Report,
    EditRooms: ARooms,
    Tab: { screen: TabNavigator },
})
export default AppRouteConfigs;
