import React from 'react';
import PropTypes from 'prop-types';
import {
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import MakeBook from '../screens/MakeBook'
import Bookings from '../screens/Bookings'
import Report from '../screens/Report'
import Settings from '../screens/Setting'
import Room from '../screens/Room'



import colors from '../styles/colors';

const CustomTabBarIcon = (name, size) => {
    const icon = ({ tintColor }) => (
        <Icon
            name={name}
            size={size}
            color={tintColor}
        />
    );

    icon.propTypes = {
        tintColor: PropTypes.string.isRequired,
    };

    return icon;
};



const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Room,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: CustomTabBarIcon('ios-search', 22),
        }
    },
    Bookings: {
        screen: Bookings,
        navigationOptions: {
            tabBarLabel: 'Bookings',
            tabBarIcon: CustomTabBarIcon('ios-heart-outline', 22),
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: CustomTabBarIcon('ios-heart-outline', 22),
        }
    },
}, {
        tabBarOptions: {
            labelStyle: {
                fontWeight: '600',
                marginBottom: 5,
            },
            activeTintColor: colors.pink,
        },
        tabBarPosition: 'bottom',
    });

export default TabNavigator;
/*
Explore: {
        screen: ExploreTab,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: CustomTabBarIcon('ios-search', 22),
        },
    },
    Saved: {
        screen: SavedContainer,
        navigationOptions: {
            tabBarLabel: 'Book Room',
            tabBarIcon: CustomTabBarIcon('ios-heart-outline', 22),
        },
    },
    Trips: {
        screen: TripsContainer,
        navigationOptions: {
            tabBarLabel: 'Bookings',
            tabBarIcon: CustomTabBarIcon('ios-ionic', 21),
        },
    },
    Inbox: {
        screen: InboxContainer,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: CustomTabBarIcon('ios-archive-outline', 25),
        },
    },
    Profile: {
        screen: ProfileContainer,
        navigationOptions: {
            tabBarLabel: 'PROFILE',
            tabBarIcon: CustomTabBarIcon('ios-contact-outline', 22),
        },
    },*/