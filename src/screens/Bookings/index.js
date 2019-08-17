import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import gql from 'graphql-tag';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import NoResults from '../../component/saved/NoResults';
import styles from './Bookings.style'


const Bookings = graphql(dogQuery)(props => {
    const { error, bookings } = props.data;
    if (error) {
        return (
            <SafeAreaView style={styles.wrapper}>
                <Text>{error}</Text>
            </SafeAreaView>
        )
    }

    if (bookings.length == 0) {
        return (
            <SafeAreaView style={styles.wrapper}>
                <NoResults />
            </SafeAreaView>
        )
    }
})
/*
{
    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <NoResults />
            </SafeAreaView>
        )
    }
}*/



export default Bookings
