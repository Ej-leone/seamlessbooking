import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

const BookModal = (props) => {
    return (<View>
        <Text>Confirm Booking</Text>



        <TouchableOpacity>
            <Text>Okay</Text>
        </TouchableOpacity>

        <TouchableOpacity
        >
            <Text>Cancel</Text>
        </TouchableOpacity>
    </View>)

}