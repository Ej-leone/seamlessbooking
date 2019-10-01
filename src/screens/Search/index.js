import React, { Component } from "react";
import { Text, View, FlatList, Modal, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Aroom from "./component/room";
import styles from "./component/search.style";
import BookModal from "./component/bookModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../../redux/actions";
import { Query } from "react-apollo";
import { searchRooms } from "../../services/getrooms";

class Search extends Component {
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

        MeetingAgenda: "Mike test 1 2",
        CheckIn: "2019-08-30T09:30:00.000Z",
        CheckOut: "2019-08-30T11:30:00.000Z",
        Attendees: ["ejgithinji@gmail.com", "elijah@finesoftafrika.com"]
      },
      booking: {}
    };
  }

  componentDidMount() {
    const BookingDetails = this.props.navigation.getParam("booking", {});
    const user = this.props.user


    this.setState({
      bookingdetails: BookingDetails
    })

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
              user={this.props.user}
              success={() => this.props.navigation.navigate('Tab')}
              booking={this.state.booking}
              bookingdetails={this.state.bookingdetails}
              closemodal={() => this.cancelbooking()}
            />
          </Modal>
          <Query query={searchRooms} variables={{
            bookinginfo: {
              CheckIn: "2019-08-30T09:30:00.000Z",
              CheckOut: "2019-08-30T09:30:00.000Z",
              numGuests: 2
            }
          }}>
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
const mapStateToProps = state => ({
  user: state.default.user,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)