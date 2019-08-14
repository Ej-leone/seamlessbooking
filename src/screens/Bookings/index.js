import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import NoResults from '../../component/saved/NoResults';
import styles from './Bookings.style'


class Bookings extends Component {


    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <NoResults />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Bookings)
