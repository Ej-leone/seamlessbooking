import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './search.style'
const BookModal = (props) => {

    return (<View style={styles.modalcontainer}>
        <View styles={styles.bookview}>
            <Text>Confirm Booking</Text>

            <Text> {props.booking.item}</Text>
            <TouchableOpacity
                onPress={() => props.closemodal()}
            >
                <Text>Okay</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.closemodal()}
            >
                <Text>Cancel</Text>
            </TouchableOpacity>
        </View>
    </View>)

}
export default BookModal