import React, { Component } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './screen.style'

class Screen1 extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}> Scheduling space </Text>
                    <Text style={styles.subtitle}>within your workplace</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1)
