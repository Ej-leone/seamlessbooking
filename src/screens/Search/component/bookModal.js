import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Mutation } from "react-apollo";
import { createBooking, makeBook } from "../../../services/createbookings";
import styles from "./search.style";

const BookModal = props => {

  return (
    <View style={styles.modalcontainer}>
      <View style={styles.bookview}>
        <Text style={styles.title}>Confirm Booking</Text>
        <ScrollView>
          <Text> {`Room Booked: ${props.booking.item.Name}`}</Text>
          <Text> {`Meeting Agenda: ${props.bookingdetails.MeetingAgenda}`}</Text>
          <Text> {`Date: ${new Date(props.bookingdetails.CheckIn).getDate}`}</Text>
          <Text> {`Time: ${new Date(props.bookingdetails.CheckIn).getTime}`}</Text>
          <Text> Attendees</Text>
          {props.bookingdetails.Attendees.map(name => <Text>{name}</Text>)}
        </ScrollView>
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <Mutation
            mutation={makeBook}
            onCompleted={(data) => console.warn(`success`)}
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
                        "numGuests": 2,
                        "OrganiserId": "1234321",
                        "RoomId": "LJqUQPuIQ4cYXw8me8Zo",
                        "MeetingAgenda": "Mike test 1 2",
                        "CheckIn": "2019-08-30T09:30:00.000Z",
                        "CheckOut": "2019-08-30T11:30:00.000Z",
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
