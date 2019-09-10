import React, { Component } from "react";
import { Text, View, Modal, TouchableOpacity, TextInput } from "react-native";
import styles from "./guest.style";
import colors from "../../styles/colors";

const Roundbutton = props => {
  return (
    <TouchableOpacity onPress={() => props.click()}>
      <View style={styles.rbtn}>
        <Text style={{ color: colors.black }}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Cview = props => {
  return (
    <View style={styles.cview}>
      <Roundbutton name={"+"} click={props.inc} />
      <Text style={styles.num}>{props.guestnum}</Text>
      <Roundbutton name={"-"} click={props.dec} />
    </View>
  );
};

export default class Guest extends Component {
  constructor() {
    super();
    this.state = {
      guestnumber: 0,
      guestmail: ""
    };
  }

  increment() {
    let guestnumber = this.state.guestnumber;

    if (this.state.guestnumber >= 0) {
      guestnumber = guestnumber + 1;
    }

    this.setState({
      guestnumber
    });
  }

  decrement() {
    let guestnumber = this.state.guestnumber;
    if (this.state.guestnumber > 0) {
      guestnumber = guestnumber - 1;
    }
    this.setState({
      guestnumber
    });
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.7)"
        }}
      >
        <View style={styles.cont}>
          <View>
            <TouchableOpacity onPress={() => this.props.close(false)}>
              <Text style={styles.subtitle}>clear</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.text}>How many guest ?</Text>

          <Cview
            guestnum={this.state.guestnumber}
            inc={() => this.increment()}
            dec={() => this.decrement()}
          />
          <Text style={styles.text}>Main guest email</Text>
          <TextInput
            onChange={guestmail => this.setState({ guestmail })}
            placeholder="Enter email address of main Guest"
          />

          <TouchableOpacity
            onPress={() =>
              this.props.save(this.state.guestnumber, this.state.guestmail)
            }
          >
            <Text>Okay</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
