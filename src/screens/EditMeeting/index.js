import React, { Component } from "react";
import { Text, View, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { Query } from "react-apollo";
import { getallmeetings } from '@services/adminservices'
import transparentHeaderStyle from "../../styles/navigation";
import NavBarButton from "../../component/buttons/NavBarButton";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../styles/colors";
import styles from './emeeting.styles'

const ImageView = () => {
  return (
    <ImageBackground style={styles.imback} source={{ uri: "https://images.pexels.com/photos/1661004/pexels-photo-1661004.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" }}>
      <Text style={styles.time}> Monday 22 August 11:00 Am -12:00</Text>
      <Text> 00:00</Text>
    </ImageBackground>
  );
};



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


  _renderItem({ item }) {
    return (
      <View style={styles.itemview}>
        <ImageView />
        <Text style={styles.roomtext}>Riverside Meeting Room</Text>

        <View style={styles.iview}>

          <View>
            <Text>10 guest</Text>
            <Text>General Board meeting</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() =>
                this._AddToCalendar({
                  title: "",
                  startDate: "",
                  endDate: "",
                  location: ""
                })
              }
            >
              <View>
                <Text>Add to calendar </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._cancelmeeting()}>
              <View style={styles.redbtn}>
                <Text style={{ color: "#fff", textAlign: "center" }}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>


        </View>
      </View>
    );
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
