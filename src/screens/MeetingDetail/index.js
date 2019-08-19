import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


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
                    <View>
                        <Text>Cancel Room</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}