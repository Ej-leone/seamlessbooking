import React, { Component } from 'react'
import { View, SafeAreaView, Text, TextInput, Switch, TouchableOpacity, KeyboardAvoidingView, ScrollView, Modal } from 'react-native'
import DateTimePicker from "react-native-modal-datetime-picker";
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
import Error from '../../container/Error'



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
        <TouchableOpacity
            onPress={() => props.click()}>
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
            CheckIn: "testdate",
            CheckOut: "testdate2",
            numGuests: 8,
            food: ["String"],
            FoodTime: "String",
            modalOpen: false,
            showDatetime: false,
            mode: " ",
            errormessage: ""
        }
    }


    componentDidMount() {
        const RoomId = this.props.navigation.getParam('RoomId', 'NO-ID');
        this.setState({
            RoomId
        })
    }

    _setGuest(num, mail) { this.setState({ Guest: num, Guestemails: mail, modalOpen: false }) }
    _setStartTime(time) { this.setState({ StartTime: time }) }
    _setEndTime(time) { this.setState({ EndTime: time }) }

    _setFood(foo) { this.setState({ Food: foo }) }

    _toggleModal(tr) {
        this.setState({
            modalOpen: tr
        })
    }

    async _startdatemodal() {
        console.log('date')
        await this.setState({
            mode: 'date',
            showDatetime: true

        })
    }
    async  _starttimemodal() {
        console.log('time')
        await this.setState({
            mode: 'time',
            showDatetime: true

        })
    }
    async _startguestmodal() {

        await this.setState({
            mode: "guest",
            modalOpen: true
        })
        this._toggleModal(true)
    }
    async _startfoodemodal() {

        await this.setState({
            mode: "food",
            modalOpen: true

        })
        this._toggleModal(true)
    }

    choosemodal(text) {
        if (text == "food") {
            return (
                <View style={{ flex: 1, justifyContent: "center", backgroundColor: 'rgba(0,0,0,0.7)' }}>

                    <Diet close={(tr) => this._toggleModal(tr)} />
                </View>)
        }

        if (text == "guest") {
            return (
                <View style={{ flex: 1, justifyContent: "center", backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <Guest close={(tr) => this._toggleModal(tr)} save={(x, y) => this._setGuest(x, y)} />
                </View>)
        }

        if (text == "error") {
            return <Error close={(tr) => this._toggleModal(tr)} />

        }
    }

    hideDateTimePicker = () => {
        this.setState({ showDatetime: false });
    };

    handleDatePicked = date => {
        if (this.state.mode == 'date') {
            this.setState({ setDate: date.toString() });
            this.hideDateTimePicker();
        }

        if (this.state.mode == 'time') {
            this.setState({ setTime: date.toString() });
            this.hideDateTimePicker();
        }

    };

    renderResponeModel(success) {


        if (success == "false") {
            this.setState({
                mode: "error",
                modalOpen: true,


            })
        }
        if (success == "true") {

            this.setState({
                mode: "error",
                modalOpen: true,

            })
        }

    }

    render() {
        const { mode, modalOpen } = this.state
        return (
            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior="padding"
            >
                <Modal
                    visible={modalOpen}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => this._toggleModal(false)}
                >
                    {
                        this.choosemodal(this.state.mode)
                    }
                </Modal>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.container}>


                            <DateTimePicker
                                isVisible={this.state.showDatetime}
                                mode={mode}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDateTimePicker}
                            />
                            <Text style={styles.title}>Book a Room </Text>


                            <Text style={styles.subtitle}>Choose </Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <Card name={'Date'} value={'8/8/19'} iconnname={"calendar-o"} click={() => this._startdatemodal()} close={() => this._toggleModal()} />
                                <Card name={'Time'} value={'12:00'} iconnname={"clock-o"} click={() => this._starttimemodal()} close={() => this._toggleModal()} />
                                <Card name={'Guest'} value={'10'} iconnname={"users"} click={() => this._startguestmodal()} close={() => this._toggleModal()} />
                            </View>



                            <Text style={styles.title}>Meeting Agenda  </Text>
                            <TextInput
                                placeholder={"Enter the meeting Agenda"} />

                            <TouchableOpacity
                                onPress={() => this._startfoodemodal()}>
                                <Text>Dietary Requirements</Text>
                            </TouchableOpacity>

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

                            <Mutation mutation={createBooking}
                                onCompleted={(data => this.renderResponeModel(data.book.success))}
                                onError={(error) => this.setState({
                                    mode: "error",
                                    modalOpen: true
                                })}
                                variables={{
                                    input: {
                                        RoomId: "test1",
                                        CheckIn: "testdate",
                                        CheckOut: "testdate2",
                                        numGuests: 8,
                                        food: ["String"],
                                        FoodTime: "String"
                                    }
                                }}>
                                {(createBooking, { loading, error, data }) => {

                                    return (
                                        <TouchableOpacity
                                            onPress={createBooking}>

                                            <View style={styles.btn}>

                                                {loading ? <Text style={styles.btntxt}> Booking ...</Text> : <Text style={styles.btntxt}> Book Room</Text>}

                                            </View>
                                        </TouchableOpacity>)
                                }
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
