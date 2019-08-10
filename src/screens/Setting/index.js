import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Settings extends Component {



    render() {
        return (
            <View>


                <Text>Settings</Text>

                <TouchableOpacity>
                    <View>
                        <Text>Sign Out </Text>
                    </View>
                </TouchableOpacity>
                <Text>Seasmless Booking All Rights Reserved version 1</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
