import React, { Component } from 'react'
import { View, SafeAreaView, Text, TextInput, Switch, TouchableOpacity, KeyboardAvoidingView, ScrollView, Modal } from 'react-native'
import { Mutation } from 'react-apollo'
import NavBarButton from '../../component/buttons/NavBarButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import transparentHeaderStyle from '../../styles/navigation';
import { createBooking } from '../../services/createbookings'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './makebook.style'
import RadioInput from '../../component/form/RadioInput'
import Guest from '../../container/Guests'
import Diet from '../../container/Diet'



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

const Card = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <Icon
                    name={props.iconnname}
                    size={22}
                    color={colors.maincolor} />
                <Text>{props.name}</Text>
                <Text>{props.value}</Text>
            </View>
        </TouchableOpacity>)
}


class MakeBook extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: <NavBarButton
            handleButtonPress={() => navigation.goBack()}
            location="left"
            icon={<Icon name="angle-left" color={colors.maincolor} size={30} />}
        />,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
    });

    constructor() {
        super();
        this.state = {
            RoomId: "",
            Date: "",
            StartTime: "",
            EndTime: "",
            Guest: "",
            Guestemails: [],
            Food: [],
            modalOpen: false,
            mode: " "

        }
    }


    componentDidMount() {
        const RoomId = this.props.navigation.getParam('RoomId', 'NO-ID');

        this.setState({
            RoomId
        })
    }

    _setGuest(num) { this.setState({ Guest: num }) }
    _setStartTime(time) { this.setState({ StartTime: time }) }
    _setEndTime(time) { this.setState({ EndTime: time }) }
    _setGuestEmail(arr) { this.setState({ Guestemails: arr }) }
    _setFood(foo) { this.setState({ Food: foo }) }

    _toggleModal(tr) {
        this.setState({
            modalOpen: tr
        })
    }

    async _startdatemodal() {
        await this.setState({
            mode: "date"
        })
    }
    async  _starttimemodal() {
        await this.setState({
            mode: "time"
        })
    }
    async _startguestmodal() {
        await this.setState({
            mode: "guest"
        })
        this._toggleModal(true)
    }
    async _startfoodemodal() {
        await this.setState({
            mode: "food"

        })
        this._toggleModal(true)
    }

    render() {
        const { mode, modalOpen } = this.state
        return (
            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior="padding"
            >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.container}>
                            <Modal
                                visible={modalOpen}
                                transparent={true}
                                animationType="fade"
                                onRequestClose={() => this._toggleModal(false)}
                            >
                                {}
                            </Modal>

                            <Text style={styles.title}>Book a Room </Text>


                            <Text style={styles.subtitle}>Choose </Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <Card name={'Date'} value={'8/8/19'} iconnname={"calendar-o"} click={() => this._startdatemodal()} />
                                <Card name={'Time'} value={'12:00'} iconnname={"clock-o"} click={() => this._starttimemodal()} />
                                <Card name={'Guest'} value={'10'} iconnname={"users"} click={() => this._startguestmodal()} />
                            </View>



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

                            <Mutation mutation={createBooking} variables={this.state}>
                                {createBooking =>
                                    <TouchableOpacity
                                        onPress={createBooking}>
                                        <View style={styles.btn}>
                                            <Text style={styles.btntxt}>Book Room</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                            </Mutation>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView >
        )
    }
}


export default MakeBook
