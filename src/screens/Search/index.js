import React, { Component } from "react";
import { Text, View, FlatList, Modal, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Aroom from "./component/room";
import styles from "./component/search.style";
import BookModal from "./component/bookModal";
import NavBarButton from "../../component/buttons/NavBarButton";
import colors from "../../styles/colors";
import transparentHeaderStyle from "../../styles/navigation";
import { Query } from "react-apollo";
import { searchRooms } from "../../services/getrooms";

export default class Search extends Component {
  /* static navigationOptions = ({ navigation }) => ({
     headerLeft: (
       <NavBarButton
         handleButtonPress={() => navigation.goBack()}
         location="left"
         icon={<Icon name="ios-close" color={colors.maincolor} size={30} />}
       />
     ),
     headerStyle: transparentHeaderStyle,
     headerTransparent: true,
     headerTintColor: colors.white
   });*/

  constructor(props) {
    super();

    this.state = {
      rooms: [1, 2, 3, 4, 5],
      visibility: false,
      bookingdetails: {
        numGuests: 2,
        OrganiserId: "1234321",
        RoomId: "LJqUQPuIQ4cYXw8me8Zo",
        MeetingAgenda: "Mike test 1 2",
        CheckIn: "2019-08-30T09:30:00.000Z",
        CheckOut: "2019-08-30T11:30:00.000Z",
        Attendees: ["ejgithinji@gmail.com", "elijah@finesoftafrika.com"]
      },
      booking: {}
    };
  }

  renderItem(item) {
    return (
      <Aroom
        initbooking={book => this.toggleBookingModal(book)}
        details={item}

      />
    );
  }

  toggleBookingModal(booking) {
    const sta = this.state.visibility;
    this.setState({ visibility: true });
    this.setState({
      booking: booking
    });
  }

  async cancelbooking() {
    await this.setState({ visibility: false, booking: {} });
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.heading}> Available rooms </Text>
          <Modal
            transparent={true}
            animationType="fade"
            visible={this.state.visibility}
          >
            <BookModal
              booking={this.state.booking}
              bookingdetails={this.state.bookingdetails}
              closemodal={() => this.cancelbooking()}
            />
          </Modal>
          <Query query={searchRooms}>
            {({ loading, data, error }) => {
              if (loading) {
                return <Text>loading</Text>;
              }
              if (error) {
                return <Text> `Sorry we have an issue ${error.message} `</Text>;
              }
              if (data) {
                return (
                  <FlatList
                    ListEmptyComponent={() => (
                      <Text>Sorry no Available rooms</Text>
                    )}
                    data={data.findrooms}
                    renderItem={item => this.renderItem(item)}
                  />
                );
              }
            }}
          </Query>
        </View>
      </SafeAreaView>
    );
  }
}
