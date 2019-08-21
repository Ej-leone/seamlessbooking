import React, { Component } from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native'
import styles from './diet.style'


const Roundbutton = (props) => {
    return (
        <TouchableOpacity>
            <View>
                <Text>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}


const Cview = (props) => {
    return (
        <View>
            <Roundbutton name={"+"} />
            <Roundbutton name={"-"} />

        </View>
    )
}



export default class Diet extends Component {
    render() {
        return (
            <View>
                <Text>Dietary Requirements</Text>

                <Cview />
                <Cview />
                <Cview />
                <Cview />

                <Text>Catering Time Slot</Text>

                <TouchableOpacity>
                    <Text>Choose Time</Text>
                </TouchableOpacity>
            </View>

        )
    }
}