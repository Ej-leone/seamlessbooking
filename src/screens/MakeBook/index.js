import React, { Component } from 'react'
import { View, SafeAreaView, Text, TextInput, Switch, TouchableOpacity } from 'react-native'
import NavBarButton from '../../component/buttons/NavBarButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import transparentHeaderStyle from '../../styles/navigation';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './makebook.style'

const Pickerr = (props) => {
    return (
        <View style={{ flex: 1, alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between" }}>
            <Text>
                {props.name}
            </Text>

            <Switch style={{ alignSelf: "stretch" }} />
        </View>
    )
}


class MakeBook extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: <NavBarButton
            handleButtonPress={() => navigation.navigate('ForgotPassword')}
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
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Book a Room </Text>

                <Text style={styles.subtitle}>Choose </Text>

                <Text style={styles.title}>Meeting Agenda  </Text>
                <TextInput />

                <Text style={styles.subtitle}> Requirements</Text>
                <View style={styles.mincontainer}>
                    <Pickerr name={"Air conndition"} />
                    <Pickerr name={"Wifi"} />
                </View>

                <View style={styles.mincontainer}>
                    <Pickerr name={"Projector"} />
                    <Pickerr name={"Whiteboard"} />
                </View>

                <View style={styles.mincontainer}>
                    <Pickerr name={"Catering"} />
                    <Pickerr name={"Parking"} />
                </View>

                <View style={styles.mincontainer}>
                    <Pickerr name={"Charging Ports"} />
                    <Pickerr name={"Video Conferencing"} />
                </View>

                <TouchableOpacity>
                    <View>
                        <Text>Book Room</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MakeBook)
