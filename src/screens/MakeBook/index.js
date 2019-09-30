import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Modal
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

import NavBarButton from "../../component/buttons/NavBarButton";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../styles/colors";
import transparentHeaderStyle from "../../styles/navigation";


import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./makebook.style";

import Guest from "../../container/Guests";
import Diet from "../../container/Diet";
import Error from "../../container/Error";
import Pickerr from './component/picker'
import SnackBar from '../../component/snackbar'
import moment from 'moment'
import { validate } from "@babel/types";

const Card = props => {
  return (
    <TouchableOpacity onPress={() => props.click()}>
      <View style={styles.card}>
        <Icon name={props.iconnname} size={22} color={colors.maincolor} />
        <Text>{props.name}</Text>
        <Text>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

class MakeBook extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <NavBarButton
        handleButtonPress={() => navigation.goBack()}
        location="left"
        icon={<Icon name="angle-left" color={colors.maincolor} size={30} />}
      />
    ),
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white
  });

  constructor() {
    super();
    this.state = {
      RoomId: "",
      MeetingAgenda: "",
      CheckIn: "testdate",
      CheckOut: "testdate2",
      Date: "",
      Time: "",
      numGuests: 0,
      food: ["String"],
      FoodTime: "String",
      modalOpen: false,
      showDatetime: false,
      mode: " ",
      Amenities: [],
      errormessage: ""
    };
  }

  componentDidMount() {
    // const RoomId = this.props.navigation.getParam('RoomId', 'NO-ID');
    //  this.setState({
    //     RoomId
    //  })
  }

  DisplaySnackBar = () => {
    this.refs.ReactNativeSnackBar.ShowSnackBarFunction("Snackbar example");
  };

  ValidateState() {
    return false
  }

  movetoSearch() {
    if (this.ValidateState()) {
      this.props.navigation.navigate("ARooms", { booking: this.state })
    }
    else {
      this.DisplaySnackBar()
    }
  }


  _setGuest(num, mail) {
    this.setState({ numGuests: num, Guestemails: mail, modalOpen: false });
  }
  _setStartTime(time) {
    this.setState({ CheckIn: time });
  }
  _setEndTime(time) {
    this.setState({ CheckOut: time });
  }

  _setFood(foo) {
    this.setState({ Food: foo });
  }

  _toggleModal(tr) {
    this.setState({
      modalOpen: tr
    });
  }

  async _startdatemodal() {
    console.log("date");
    await this.setState({
      cmode: "in",
      mode: "datetime",
      showDatetime: true
    });
  }
  async _starttimemodal() {
    await this.setState({
      cmode: "out",
      mode: "datetime",
      showDatetime: true
    });
  }
  async _startguestmodal() {
    await this.setState({
      mode: "guest",
      modalOpen: true
    });
    this._toggleModal(true);
  }
  async _startfoodemodal() {
    await this.setState({
      mode: "food",
      modalOpen: true
    });
    this._toggleModal(true);
  }

  choosemodal(text) {
    if (text == "food") {
      return <Diet close={tr => this._toggleModal(tr)} />;
    }

    if (text == "guest") {
      return (
        <Guest
          close={tr => this._toggleModal(tr)}
          save={(x, y) => this._setGuest(x, y)}
        />
      );
    }

    if (text == "error") {
      return (
        <Error
          message={this.state.errormessage}
          close={tr => this._toggleModal(tr)}
        />
      );
    }
  }

  hideDateTimePicker = () => {
    this.setState({ showDatetime: false });
  };

  handleDatePicked = date => {
    console.log(`date ${this.state.cmode}`);
    if (this.state.cmode == "in") {
      this.setState({ CheckIn: date.toString() });
      this.hideDateTimePicker();
    }

    if (this.state.cmode == "out") {
      this.setState({ CheckOut: date.toString() });
      this.hideDateTimePicker();
    }
  };

  renderResponeModel(success) {
    if (success == "false") {
      this.setState({
        mode: "error",
        modalOpen: true
      });
    }
    if (success == "true") {
      this.setState({
        mode: "error",
        modalOpen: true
      });
    }
  }



  render() {
    const { mode, modalOpen } = this.state;
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <Modal
          visible={modalOpen}
          transparent={true}
          animationType="fade"
          onRequestClose={() => this._toggleModal(false)}
        >
          {this.choosemodal(this.state.mode)}
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
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <Card
                  name={"Check In"}
                  value={moment(this.state.CheckIn).format("dddd, MMMM Do YYYY, h:mm:ss a")}

                  iconnname={"calendar-o"}
                  click={() => this._startdatemodal()}
                  close={() => this._toggleModal()}
                />
                <Card
                  name={"Check Out"}

                  value={moment(this.state.CheckOut).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                  iconnname={"clock-o"}
                  click={() => this._starttimemodal()}
                  close={() => this._toggleModal()}
                />
                <Card
                  name={"Guest"}
                  value={this.state.numGuests}
                  iconnname={"users"}
                  click={() => this._startguestmodal()}
                  close={() => this._toggleModal()}
                />
              </View>

              <Text style={styles.title}>Meeting Agenda </Text>
              <TextInput
                style={{ borderBottomColor: "#f3f3f3", borderBottomWidth: 1 }}
                onChangeText={text => this.setState({ MeetingAgenda: text })}
                placeholder={"Eg. Training"}
              />

              <TouchableOpacity

                onPress={() => this._startfoodemodal()}
              >
                <View>
                  <Text>Dietary Requirements</Text>
                </View>
              </TouchableOpacity>

              <Text style={styles.subtitle}> Requirements</Text>
              <View style={styles.mincontainer}>
                <Pickerr name={"Air condition"} Amenities={this.state.Amenities} />
                <Pickerr name={"Wifi"} Amenities={this.state.Amenities} />
              </View>

              <View style={styles.mincontainer}>
                <Pickerr name={"Projector"} Amenities={this.state.Amenities} />
                <Pickerr name={"Whiteboard"} Amenities={this.state.Amenities} />
              </View>

              <View style={styles.mincontainer}>
                <Pickerr name={"Catering"} Amenities={this.state.Amenities} />
                <Pickerr name={"Parking"} Amenities={this.state.Amenities} />
              </View>

              <View style={styles.mincontainer}>
                <Pickerr name={"Charging Ports"} Amenities={this.state.Amenities} />
                <Pickerr name={"Conferencing"} Amenities={this.state.Amenities} />
              </View>

              <TouchableOpacity
                onPress={() => this.movetoSearch()}
              >
                <View style={styles.btn}>
                  <Text style={styles.btntxt}>Search Rooms</Text>
                </View>
              </TouchableOpacity>

              {/*<Mutation mutation={createBooking}
                                onCompleted={(data => this.renderResponeModel(data.book.success))}
                                onError={(error) => this.setState({
                                    mode: "error",
                                    errormessage: error.message,
                                    modalOpen: true
                                })}
                                variables={{
                                    input: {
                                        RoomId: this.state.RoomId,
                                        MeetingAgenda: this.state.MeetingAgenda,
                                        CheckIn: this.state.CheckIn,
                                        CheckOut: this.state.CheckOut,
                                        numGuests: this.state.numGuests,
                                        food: ["String"],
                                        FoodTime: "String"
                                    }
                                }}>
                                {(createBooking, { loading, error, data }) => {

                                    return (
                                        <TouchableOpacity
                                            disabled={loading}
                                            onPress={createBooking}>

                                            <View style={styles.btn}>

                                                {loading ? <Text style={styles.btntxt}> Booking ...</Text> : <Text style={styles.btntxt}> Book Room</Text>}

                                            </View>
                                        </TouchableOpacity>)
                                }
                                }
                            </Mutation>*/}
            </View>
          </ScrollView>
        </View>
        <SnackBar ref="ReactNativeSnackBar" />

      </KeyboardAvoidingView>
    );
  }
}

export default MakeBook;
