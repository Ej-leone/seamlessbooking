import React, { Component } from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native'
import styles from './diet.style'



const Roundbutton = (props) => {
    return (
        <TouchableOpacity
            onPress={() => console.log('aa')}>
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
            <Text>{props.food}</Text>
            <View style={{ flexDirection: "row" }}>
                <Roundbutton name={"+"} />
                <Text style={styles.num}> 0</Text>
                <Roundbutton name={"-"} />
            </View>

        </View>
    )
}



export default class Diet extends Component {
    render() {
        return (
            <View>
                <View>
                    <TouchableOpacity onPress={() => this.props.close(false)}>
                        <Text style={styles.subtitle}>clear</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>Dietary Requirements</Text>

                <Cview food={'Halaal'} />
                <Cview food={'Kosher'} />
                <Cview food={'Vegan'} />
                <Cview food={'Non Diary'} />

                <Text style={styles.text}>Catering Time Slot</Text>

                <TouchableOpacity>
                    <Text>Choose Time</Text>
                </TouchableOpacity>
            </View>

        )
    }
}