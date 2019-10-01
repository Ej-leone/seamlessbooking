import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Mutation } from "react-apollo";
import { createBooking, makeBook } from "../../../services/createbookings";
import styles from "./search.style";
import moment from "moment";



const BookModal = props => {

  return (
    <View style={styles.modalcontainer}>
      <View style={styles.bookview}>
        {/*<Text style={styles.title}>Confirm Booking</Text>*/}
        <ScrollView>
          <Text style={styles.roomname}> {` ${props.booking.item.Name}`}</Text>
          {/*<Text> {`Meeting Agenda: ${props.bookingdetails.MeetingAgenda}`}</Text>*/}
          <Text>Checkin</Text>
          <Text style={styles.time}> {moment(props.bookingdetails.CheckIn).format('MMMM Do YYYY, h:mm:ss a')}</Text>
          <Text>CheckOut</Text>
          <Text style={styles.time}> {moment(props.bookingdetails.CheckOut).format('MMMM Do YYYY, h:mm:ss a')}</Text>
          {/*<Text>  Attendees</Text>*/}
          {/*<Text>{props.bookingdetails.Attendees}</Text>*/}
          {/*props.bookingdetails.Attendees ? props.bookingdetails.Attendees.map(name => <Text>{name}</Text>) : null*/}
        </ScrollView>
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <Mutation
            mutation={makeBook}
            onCompleted={(data) => props.success()}
            onError={(error) => {

              return (console.warn(`${error.message}`))
            }}

          >
            {(book, { loading, error, data }) => {

              return (
                <TouchableOpacity
                  disabled={loading}
                  onPress={() => book({
                    "variables": {
                      "input": {
                        "numGuests": props.bookingdetails.numGuests,
                        "OrganiserId": props.user.user.uid,
                        "RoomId": props.booking.item.id,
                        "MeetingAgenda": props.bookingdetails.MeetingAgenda,
                        "CheckIn": props.bookingdetails.CheckIn,
                        "CheckOut": props.bookingdetails.CheckOut,
                        "Attendees": ["ejgithinji@gmail.com", "elijah@finesoftafrika.com"]
                      }
                    }
                  })}

                >
                  <View style={styles.bookbtn}>
                    <Text style={styles.booktxt}>{loading ? `Loading` : `Make Book`}</Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          </Mutation>

          <TouchableOpacity onPress={() => props.closemodal()}>
            <View style={styles.cancelbtn}>
              <Text style={{ color: "#ffff" }}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default BookModal;
