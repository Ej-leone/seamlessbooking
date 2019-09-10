import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ErrorModal = props => {
  if (!props.success) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.7)",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <View style={{ backgroundColor: "#ffffff" }}>
          <TouchableOpacity onPress={() => props.close(false)}>
            <Text>Clear</Text>
          </TouchableOpacity>
          <Text>Booking has failed Try again</Text>
          <Text>{props.message}</Text>
        </View>
      </View>
    );
  }

  if (props.success) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.7)",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <TouchableOpacity onPress={() => props.close(false)}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: "#ffffff" }}>
          <Text>
            Booking confirmed ! meeting set your guest will receive an email{" "}
          </Text>
        </View>
      </View>
    );
  }
};

export default ErrorModal;
