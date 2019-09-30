import React, { Component } from "react";
import { View, Text, SafeAreaView, ImageBackground, Modal, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Query, Mutation } from "react-apollo";

import styles, { cancelmodal } from "./Bookings.style";

import { getmybookingsQuery } from "@services/getmybookings";
import * as AddCalendarEvent from "react-native-add-calendar-event";
import LottieView from 'lottie-react-native';

import transparentHeaderStyle from "../../styles/navigation";
import NoResults from "../../component/saved/NoResults";
import ActionCreators from "../../redux/actions";
import colors from "../../styles/colors";


const imageR = require("../../img/listing11.png");
const sload = require("../../asset/seamless.json")

const CancelModal = (props) => {
  return (
    <View style={cancelmodal.modalview}>
      <Text style={cancelmodal.title}>Cancel Booking</Text>
      <Text style={cancelmodal.time}>22 August 2019 11:00 am = 12:00 am</Text>
      <View style={cancelmodal.buttonview}>

        <TouchableOpacity>
          <View style={cancelmodal.button}>
            <Text style={cancelmodal.text}>   YES, Cancel</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.close(false, {})}>
          <View style={cancelmodal.button}>
            <Text style={cancelmodal.text}> NO</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}


const ImageView = () => {
  return (
    <ImageBackground style={styles.imback} source={{ uri: "https://images.pexels.com/photos/1661004/pexels-photo-1661004.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" }}>
      <Text style={styles.time}> Monday 22 August 11:00 Am -12:00</Text>
      <Text> 00:00</Text>
    </ImageBackground>
  );
};
class Bookings extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (<Text>My Bookings</Text>),
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white
  });

  constructor() {
    super()

    this.state = {
      modalvisibility: false,
      selectedmeeting: {}
    }
  }
  _togglevisibility(t, b) {

    this.setState({
      selectedmeeting: b,
      modalvisibility: t
    })



  }

  _renderItem({ item }) {

    return (
      <View style={styles.itemview}>
        <ImageView />
        <Text style={styles.roomtext}>Riverside Meeting Room</Text>

        <View style={styles.iview}>

          <View>
            <Text> {`${item.numGuests} guests`}</Text>
            <Text> {`${item.MeetingAgenda}`}</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() =>
                this._AddToCalendar({
                  title: "",
                  startDate: "",
                  endDate: "",
                  location: ""
                })
              }
            >
              <View>
                <Text>Add to calendar </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._togglevisibility(true, { meeting: "meeting" })}>
              <View style={styles.redbtn}>
                <Text style={{ color: "#fff", textAlign: "center" }}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>


        </View>
      </View>
    );
  }

  _AddToCalendar(eventConfig) {
    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then(
        (eventInfo: {
          calendarItemIdentifier: string,
          eventIdentifier: string
        }) => {
          // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
          // These are two different identifiers on iOS.
          // On Android, where they are both equal and represent the event id, also strings.
          // when { action: 'CANCELED' } is returned, the dialog was dismissed
          console.warn(JSON.stringify(eventInfo));
        }
      )
      .catch(error => {
        // handle error such as when user rejected permissions
        console.warn(error);
      });
  }
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <Modal
          visible={this.state.modalvisibility}
          transparent={true}>
          <View style={cancelmodal.modaloverview}>
            <CancelModal close={(e, f) => this._togglevisibility(e, f)} />
          </View>
        </Modal>

        <Query query={getmybookingsQuery} variables={{
          "email": this.props.user.user.email,
          "id": this.props.user.user.uid
        }}>
          {({ loading, error, data }) => {
            if (error) {
              return (
                <View style={styles.errorview}>
                  <Text style={styles.errortext}>
                    {" "}
                    Oops! Something went wrong.{" "}
                  </Text>
                </View>
              );
            }
            if (loading) {
              return (
                <View style={styles.errorview}>
                  <Text style={styles.errortext}> Seamless is loading your meetings</Text>
                  <LottieView
                    style={styles.ld}
                    source={sload}
                    autoPlay={true}
                    loop={true}
                  />
                </View>
              );
            }

            if (data) {
              return (
                <FlatList
                  data={data.getmymeetings}
                  renderItem={item => this._renderItem(item)}
                  ListEmptyComponent={() => <NoResults />}
                />
              );
            }
          }}
        </Query>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.default.user,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings)