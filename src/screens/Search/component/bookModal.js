import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./search.style";
const BookModal = props => {
  return (
    <View style={styles.modalcontainer}>
      <View styles={styles.bookview}>
        <Text>Confirm Booking</Text>

        <Text> {props.booking.item}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => props.closemodal()}>
            <Text style={{ color: "#ffff" }}>Okay</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.closemodal()}>
            <Text style={{ color: "#ffff" }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default BookModal;
