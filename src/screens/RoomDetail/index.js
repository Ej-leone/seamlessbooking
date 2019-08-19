import React, { Component } from 'react'
import colors from '../../styles/colors';
import NavBarButton from '../../component/buttons/NavBarButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import transparentHeaderStyle from '../../styles/navigation';
import { Text, View, SafeAreaView } from 'react-native'

export default class RoomDetail extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: <NavBarButton
            handleButtonPress={() => navigation.navigate('Book')}
            location="right"
            color={colors.maincolor}
            text="Book Room"
        />,
        headerLeft: <NavBarButton
            handleButtonPress={() => navigation.goBack()}
            location="left"
            icon={<Icon name="angle-left" color={colors.maincolor} size={30} />}
        />,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
    });
    render() {
        return (
            <SafeAreaView>
                <Text> RiversideMeeting Room </Text>
                <View>
                    <Image />
                    <Image />
                </View>
                <View>
                    <Image />
                    <Image />
                </View>
                <Text> Amenities </Text>
                <View>
                    <Text> 10 Seats</Text>
                    <Text> White Board</Text>
                    <Text> Wifi</Text>
                    <Text> Projector</Text>
                </View>

                <Text> Direction </Text>
            </SafeAreaView>
        )
    }
}