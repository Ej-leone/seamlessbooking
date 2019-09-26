import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Query } from "react-apollo";
import { getallmeetings } from '@services/adminservices'
import transparentHeaderStyle from "../../styles/navigation";
import NavBarButton from "../../component/buttons/NavBarButton";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../styles/colors";

export default class Editmeeting extends Component {
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


  _renderitem = ({ item }) => {

  }

  render() {
    return (
      <View>
        <Query query={getallmeetings}>
          {
            ({ loading, error, data }) => {
              if (loading) { return <Text>Loadinng</Text> }

              if (error) { return <Text>`error loading ${error}`</Text> }

              if (data) {
                return <FlatList
                  data={data.getallmeetings}
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
