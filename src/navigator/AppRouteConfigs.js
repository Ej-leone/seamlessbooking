import {
    createStackNavigator,
} from 'react-navigation';
import Bookings from '../screens/Bookings'
import Login from '../screens/Login'
import Main from '../screens/Main'
import MakeBook from '../screens/MakeBook'
import Report from '../screens/Room'
import Setting from '../screens/Setting'
import Csignup from '../screens/Signup/Csignup'
import Usignup from '../screens/Signup/Usignup'
import screen from '../screens/Onboarding/screen'



const AppRouteConfigs = createStackNavigator({
    screen: { screen: screen }
})
export default AppRouteConfigs;
