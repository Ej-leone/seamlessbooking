import React, { Component } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';

import Card from './card'
import colors from '../../styles/colors';
import styles from './Setting.style'


class Settings extends Component {



    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.Title}>Settings</Text>
                <View style={styles.cardview}>
                    <Card name={"Edit Rooms"} iconname={"ios-list"} navigate={navigation} to={"EditRooms"} />
                    <Card name={"Edit Users"} iconname={"ios-people"} navigate={navigation} to={"EditUsers"} />
                    <Card name={"Edit Meetings"} iconname={"ios-checkbox-outline"} navigate={navigation} to={"EditMeeting"} />

                </View>
                <View style={styles.cardview}>
                    <Card name={"Edit Locations"} iconname={"ios-pin"} navigate={navigation} to={"EditLocation"} />
                    <Card name={"Reports"} iconname={"ios-podium"} navigate={navigation} to={"Report"} />
                    <Card name={"Support"} iconname={"ios-podium"} navigate={navigation} to={"Support"} />
                </View>


                <View style={styles.bottomView}>
                    <TouchableOpacity>
                        <View style={styles.btnnview} >
                            <Icon
                                name={'ios-power'}
                                size={22}
                                color={colors.maincolor}
                            />
                            <Text>Sign Out </Text>
                        </View>
                    </TouchableOpacity>
                    <Text>Seasmless Booking All Rights Reserved version 1</Text>
                </View>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
