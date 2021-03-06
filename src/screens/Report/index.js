import React, { Component } from "react";
import { View, Text, TouchableOpacity, Picker } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import transparentHeaderStyle from "../../styles/navigation";
import NavBarButton from "../../component/buttons/NavBarButton";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../styles/colors";

class Report extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <NavBarButton
        handleButtonPress={() => navigation.goBack()}
        location="left"
        icon={<Icon name="angle-left" color={colors.maincolor} size={30} />}
      />
    ),
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white
  });



  constructor() {
    super();

    this.state = {
      language: ""
    };
  }

  onMailreport(data) {
    //Todo:contact request funnction
  }

  render() {
    return (
      <View>
        <Text> Reports </Text>
        <View>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>

          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>

          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

        <TouchableOpacity onPress={() => this.onMailreport({})}>
          <Text>Mail Report</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report);
