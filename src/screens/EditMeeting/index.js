import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Query } from "react-apollo";


export default class Editmeeting extends Component {
  constructor() {
    super()

    this.state = {}
  }


  _renderitem = ({ item }) => {

  }

  render() {
    return (
      <View>
        <Query>
          {
            ({ loading, error, data }) => {
              if (loading) { return <Text>Loadinng</Text> }

              if (error) { return <Text>`error loading ${error}`</Text> }

              if (data) {
                return <FlatList
                  data={data}
                  renderItem={item => this._renderItem(item)}
                  ListEmptyComponent={() => <Text>No meetings</Text>}
                />
              }
            }
          }
        </Query>
      </View>
    );
  }
}
