import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../../redux/actions";

class EditUsers extends Component {
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