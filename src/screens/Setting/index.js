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
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.Title}>Settings</Text>
                <View style={styles.cardview}>
                    <Card name={"Edit Rooms"} iconname={"ios-list"} />
                    <Card name={"Edit Users"} iconname={"ios-people"} />
                    <Card name={"Checklist"} iconname={"ios-checkbox-outline"} />

                </View>
                <View style={styles.cardview}>
                    <Card name={"Edit Locations"} iconname={"ios-pin"} />
                    <Card name={"Reports"} iconname={"ios-podium"} />
                    <Card name={"Support"} iconname={"ios-podium"} />
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
