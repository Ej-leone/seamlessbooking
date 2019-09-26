import React, { Component } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../../redux/actions";
import Icon from "react-native-vector-icons/Ionicons";
import { getclaims } from "@services/authentication";
import Card from "./card";
import colors from "../../styles/colors";
import styles from "./Setting.style";

const AdminView = props => {
  return (
    <View>
      <View style={styles.cardview}>
        <Card
          name={"Edit Rooms"}
          iconname={"ios-list"}
          navigate={props.navigation}
          to={"EditRooms"}
        />
        <Card
          name={"Edit Users"}
          iconname={"ios-people"}
          navigate={props.navigation}
          to={"EditUsers"}
        />
        <Card
          name={"Edit Meetings"}
          iconname={"ios-checkbox-outline"}
          navigate={props.navigation}
          to={"EditMeeting"}
        />
      </View>
      <View style={styles.cardview}>
        <Card
          name={"Edit Locations"}
          iconname={"ios-pin"}
          navigate={props.navigation}
          to={"EditLocation"}
        />
        <Card
          name={"Reports"}
          iconname={"ios-podium"}
          navigate={props.navigation}
          to={"Report"}
        />
        <Card
          name={"Support"}
          iconname={"ios-podium"}
          navigate={props.navigation}
          to={"Support"}
        />
      </View>
    </View>
  );
};

class Settings extends Component {
  constructor(props) {
    super();
    this.state = {
      admin: false
    };
  }

  SignOut() {
    const { navigation, signOutUser } = this.props;
    const { navigate } = navigation;
    signOutUser();
    navigate("Screen1");
  }

  async componentDidMount() {
    const customclaims = await getclaims();
    console.log(customclaims);
    if (customclaims.claims.admin) {
      this.setState({
        admin: true
      });
    }
  }

  render() {
    const { navigation } = this.props;
    const { admin } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.Title}>Settings</Text>
        {admin ? <AdminView navigation={navigation} /> : null}

        <View style={styles.bottomView}>
          <TouchableOpacity onPress={() => this.SignOut()}>
            <View style={styles.btnnview}>
              <Icon name={"ios-power"} size={22} color={colors.maincolor} />
              <Text>Sign Out </Text>
            </View>
          </TouchableOpacity>
          <Text>Seasmless Booking All Rights Reserved version 1</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
