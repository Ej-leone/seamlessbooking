import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
const dummyimage = require("../../../img/listing11.png");
import styles from "./search.style";

const Aroom = props => {
  return (
    <View style={styles.itemview}>

      <Image
        resizeMode={"stretch"}
        style={styles.imgview}
        source={{ uri: "https://images.pexels.com/photos/1661004/pexels-photo-1661004.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" }}
      />

      <Text style={styles.tit}> {props.details.item.Name}</Text>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <Text> ∙ Wifi </Text>
        <Text> ∙ Video Confrencing </Text>
        <Text> ∙ Sockets </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10
        }}
      >
        <Text style={{ color: "green" }}>Open till 6.00am</Text>
        <TouchableOpacity onPress={() => props.initbooking(props.details)}>
          <View style={styles.searchbkbtn}>
            <Text style={{ color: "white", textAlign: "center" }}>Book</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Aroom;
