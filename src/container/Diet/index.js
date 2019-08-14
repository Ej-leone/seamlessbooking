import React, { Component } from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native'


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



export default class DietModal extends Component {
    render() {
        return (
            <Modal>
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
            </Modal>
        )
    }
}