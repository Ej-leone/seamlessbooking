import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../styles/colors'



const Sview = (props) => {
    <View>
        <Text>{props.title}</Text>
        <Text>{props.value}</Text>
    </View>
}

export default class MeetingDetail extends Component {
    render() {
        return (
            <View>
                <Text> Riverside Meeting Room </Text>
                <Text>22 August 2019 11:00 AM - 13:00 PM</Text>

                <View>
                    <Sview title={"Agenda"} value={"Training"} />
                    <Sview title={"Organiser"} value={"David Mpho"} />
                    <Sview title={"Department"} value={"BFI Department"} />
                </View>

                <Text>Catering</Text>
                <Text>10 Guest</Text>

                <TouchableOpacity>
                    <View style={styles.redbtn}>
                        <Text style={styles.txt}>Cancel Room</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}


export default styles = StyleSheet.create({
    redbtn: {
        backgroundColor: colors.maincolor
    },
    txt: {
        color: colors.white
    }

})