import {
    createStackNavigator,
} from 'react-navigation';
import Bookings from '../screens/Bookings'
import Login from '../screens/Login'
import Main from '../screens/Main'
import LoggedOut from '../screens/Main';
import MakeBook from '../screens/MakeBook'
import Report from '../screens/Room'
import Setting from '../screens/Setting'
import Csignup from '../screens/Signup/Csignup'
import Usignup from '../screens/Signup/Usignup'
import Screen1 from '../screens/Onboarding/screen'



const AppRouteConfigs = createStackNavigator({

    Screen1: { screen: Screen1 },
    LoggedOut: { screen: LoggedOut },
    Usignup: { screen: Usignup },
    Login: { screen: Login }

})
export default AppRouteConfigs;
