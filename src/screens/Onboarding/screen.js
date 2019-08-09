import React, { Component } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Screen1 extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <SafeAreaView>
                <Text> Screen 1 </Text>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1)
