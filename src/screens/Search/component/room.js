import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
const dummyimage = require('../../../img/listing11.png')
import styles from './search.style'

const Aroom = (props) => {
    return (<View style={styles.itemview}>
        <Image
            style={{ alignSelf: "center", borderRadius: 10, }}

            source={dummyimage} />
        <Text style={{ margin: 10 }}> Room name</Text>
        <View style={{ flexDirection: "row", margin: 10 }}>
            <Text> ∙ Wifi </Text>
            <Text> ∙ Video Confrencing </Text>
            <Text> ∙ Sockets </Text>

        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
            <Text style={{ color: "green" }}>Open till 6.00am</Text>
            <TouchableOpacity
                onPress={() => props.initbooking()}>
                <View style={{ backgroundColor: "red", }}>
                    <Text style={{ color: "white" }}>Book</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>)
}


export default Aroom