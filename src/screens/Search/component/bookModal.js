import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Mutation } from "react-apollo";
import { createBooking } from "../../../services/createbookings";
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
            mutation={createBooking}
            onCompleted={(data) => console.warn(`success`)}
            onError={(error) => console.warn(`error${error}`)}
            variables={{
              Inp: {
                RoomId: "this.state.RoomId",
                OrganiserId: props.bookingdetails.OrganiserId,
                MeetingAgenda: props.bookingdetails.MeetingAgenda,
                CheckIn: props.bookingdetails.CheckIn,
                CheckOut: props.bookingdetails.CheckOut,
                numGuests: props.bookingdetails.numGuests,
                food: ["String"],
                FoodTime: "String"
              }
            }}
          >
            {(createBooking, { loading, error, data }) => (
              <TouchableOpacity
                disabled={loading}
                onPress={createBooking}

              >
                <View style={styles.bookbtn}>
                  <Text style={styles.booktxt}>{loading ? `Loading` : `Make Book`}</Text>
                </View>
              </TouchableOpacity>
            )}
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
