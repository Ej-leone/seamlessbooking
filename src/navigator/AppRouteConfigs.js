import React, { Component } from "react";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import Login from "../screens/Login";
import LoggedOut from "../screens/Main";
import Usignup from "../screens/Signup/Usignup";
import Screen1 from "../screens/Onboarding/screen";
import MakeBook from "../screens/MakeBook";
import Report from "../screens/Report";
import ARooms from "../screens/ARooms";
import RoomDetail from "../screens/RoomDetail";
import MeetingDetail from "../screens/MeetingDetail";
import TabNavigator from "./TabNavigator";
import Room from "../screens/Room";

import EditMeeting from "../screens/EditMeeting";
import EditUsers from "../screens/EditUsers";
import Support from "../screens/Support";

import Search from "../screens/Search";


import NavBarButton from "../component/buttons/NavBarButton";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../styles/colors";
import transparentHeaderStyle from "../styles/navigation";





const RefinedBooking = createStackNavigator(
  {
    BookQ: MakeBook,
    ARooms: {
      screen: Search,
      navigationOptions: {
        header: null,
        gestureResponseDistance: { vertical: 1000 }
      }
    }
  },
  {
    headerMode: "none",
    mode: "modal",
    cardStyle: {
      backgroundColor: "transparent",
      opacity: 0.99
    }
  }
);

const Internal = createStackNavigator(
  {
    Tab: { screen: TabNavigator },
    Book: {
      screen: RefinedBooking,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <NavBarButton
            handleButtonPress={() => navigation.goBack()}
            location="left"
            icon={<Icon name="angle-left" color={colors.maincolor} size={30} />}
          />
        ),
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white
      })
    },
    Report: Report,
    EditRooms: ARooms,
    EditMeeting: EditMeeting,
    EditUsers: EditUsers,
    Support: Support,
    RoomDetail: RoomDetail,
    MeetingDetail: MeetingDetail
  }
);

const AppRoute = createStackNavigator({
  Screen1: { screen: Screen1 },
  LoggedOut: { screen: LoggedOut },
  Usignup: { screen: Usignup },
  Login: { screen: Login }
});
const AppRouteConfigs = createSwitchNavigator({
  //Screen1: MakeBook,
  Screen1: AppRoute,
  Tab: Internal
});
export default AppRouteConfigs;
