import React, { Component } from 'react'
import { Text, View, Modal, TouchableOpacity, TextInput } from 'react-native'

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

export default class Guest extends Component {
    render() {
        return (
            <Modal>
                <View>
                    <View>
                        <Text>Guest</Text>
                        <Text>clear</Text>
                    </View>

                    <Text>
                        How many guest ?
                    </Text>

                    <Cview />
                    <Text>Main guest email</Text>
                    <TextInput />
                </View>
            </Modal>
        )
    }
}