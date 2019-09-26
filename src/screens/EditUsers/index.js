import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../../redux/actions";
import transparentHeaderStyle from "../../styles/navigation";
import NavBarButton from "../../component/buttons/NavBarButton";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../styles/colors";

class EditUsers extends Component {
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
    super()
    this.state = {}
  }

  _renderItem = () => { }


  render() {
    return (
      <View>

        <FlatList
          data={[]}
          renderItem={item => this._renderItem(item)}
          ListEmptyComponent={() => <Text> Empty</Text>}
        />
      </View>
    );
  }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUsers)