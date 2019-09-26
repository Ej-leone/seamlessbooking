import React, { Component } from "react";
import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../../redux/actions";
import { Query } from "react-apollo";
import NoResults from "../../component/saved/NoResults";
import styles from "./Bookings.style";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { getmybookingsQuery } from "@services/getmybookings";
import * as AddCalendarEvent from "react-native-add-calendar-event";
import LottieView from 'lottie-react-native';

const imageR = require("../../img/listing11.png");
const sload = require("../../asset/seamless.json")

const ImageView = () => {
  return (
    <ImageBackground style={styles.imback} source={{ uri: "https://images.pexels.com/photos/1661004/pexels-photo-1661004.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" }}>
      <Text style={styles.time}> Monday 22 August 11:00 Am -12:00</Text>
      <Text> 00:00</Text>
    </ImageBackground>
  );
};
class Bookings extends Component {
  _cancelmeeting() { }

  _renderItem({ item }) {
    return (
      <View style={styles.itemview}>
        <ImageView />
        <Text style={styles.roomtext}>Riverside Meeting Room</Text>

        <View style={styles.iview}>

          <View>
            <Text>10 guest</Text>
            <Text>General Board meeting</Text>
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
            <TouchableOpacity onPress={() => this._cancelmeeting()}>
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
                  <Text style={styles.errortext}> ... Loading </Text>
                  <LottieView
                    style={{ flex: 1 }}
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