import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';
import styles from './Setting.style'

const Card = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.navigate.navigate(props.to)}>
            <View style={styles.card}>
                <Icon
                    name={props.iconname}
                    size={42}
                    color={colors.maincolor}
                />
                <Text>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card