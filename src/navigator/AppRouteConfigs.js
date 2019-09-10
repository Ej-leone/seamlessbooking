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
import RoomDetail from '../screens/RoomDetail'
import MeetingDetail from '../screens/MeetingDetail'
import TabNavigator from './TabNavigator'
import Room from '../screens/Room'

import EditMeeting from '../screens/EditMeeting'
import EditUsers from '../screens/EditUsers'
import Support from "../screens/Support";

import Search from '../screens/Search'

const RefinedBooking = createStackNavigator({
    BookQ: MakeBook,
    ARooms: {
        screen: Search, navigationOptions: {

            gestureResponseDistance: { vertical: 1000 }, \
        },
    }
}, {

    mode: "modal",

    cardStyle: {
        backgroundColor: "transparent",
        opacity: 0.99
    }

}
)


const Internal = createStackNavigator({
    Tab: { screen: TabNavigator },
    Book: RefinedBooking,
    Report: Report,
    EditRooms: ARooms,
    EditMeeting: EditMeeting,
    EditUsers: EditUsers,
    Support: Support,
    RoomDetail: RoomDetail,
    MeetingDetail: MeetingDetail
}, {
    headerMode: "none"
})

const AppRoute = createStackNavigator({
    Screen1: { screen: Screen1 },
    LoggedOut: { screen: LoggedOut },
    Usignup: { screen: Usignup },
    Login: { screen: Login }

})
const AppRouteConfigs = createSwitchNavigator({
    //Screen1: MakeBook,
    Screen1: AppRoute,
    Tab: Internal,
})
export default AppRouteConfigs;
