import React, { Component } from 'react'
import { View, SafeAreaView, Text, TextInput, Switch, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './makebook.style'

const Pickerr = (props) => {
    return (
        <View style={{ flex: 1, alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between" }}>
            <Text>
                {props.name}
            </Text>

            <Switch style={{ alignSelf: "stretch" }} />
        </View>
    )
}


class MakeBook extends Component {


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Book a Room </Text>

                <Text style={styles.subtitle}>Choose </Text>

                <Text style={styles.title}>Meeting Agenda  </Text>
                <TextInput />

                <Text style={styles.subtitle}> Requirements</Text>
                <View style={styles.mincontainer}>
                    <Pickerr name={"Air conndition"} />
                    <Pickerr name={"Wifi"} />
                </View>

                <View style={styles.mincontainer}>
                    <Pickerr name={"Projector"} />
                    <Pickerr name={"Whiteboard"} />
                </View>

                <View style={styles.mincontainer}>
                    <Pickerr name={"Catering"} />
                    <Pickerr name={"Parking"} />
                </View>

                <View style={styles.mincontainer}>
                    <Pickerr name={"Charging Ports"} />
                    <Pickerr name={"Video Conferencing"} />
                </View>

                <TouchableOpacity>
                    <View>
                        <Text>Book Room</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MakeBook)
