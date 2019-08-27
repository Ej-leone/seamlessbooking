import React, { Component } from 'react'
import { Text, View, Modal, TouchableOpacity, TextInput } from 'react-native'
import styles from './guest.style'

const Roundbutton = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.rbtn}>
                <Text>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}



const Cview = (props) => {
    return (
        <View style={styles.cview}>
            <Roundbutton name={"+"} />
            <Text style={styles.num}>0</Text>
            <Roundbutton name={"-"} />

        </View>
    )
}

export default class Guest extends Component {
    render() {
        return (

            <View>
                <View>

                    <TouchableOpacity
                        onPress={() => this.props.close(false)}>
                        <Text style={styles.subtitle}>clear</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.text}>
                    How many guest ?
                    </Text>

                <Cview />
                <Text style={styles.text}>Main guest email</Text>
                <TextInput />
            </View>

        )
    }
}