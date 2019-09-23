import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Mutation from 'react-apollo'
import createBooking from '../../../services/createbookings'
import styles from "./search.style";
const BookModal = props => {

  return (
    <View style={styles.modalcontainer}>
      <View styles={styles.bookview}>
        <Text>Confirm Booking</Text>

        <Text> {props.booking.item.Name}</Text>

        <View style={{ flexDirection: "row" }}>
          <Mutation mutation={createBooking} onCompleted={} onError={}>
            {(createBooking, { data }) => (
              <TouchableOpacity onPress={() => createBooking()}>
                <Text style={{ color: "#ffff" }}>Okay</Text>
              </TouchableOpacity>
            )}
          </Mutation>


          <TouchableOpacity onPress={() => props.closemodal()}>
            <Text style={{ color: "#ffff" }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default BookModal;
