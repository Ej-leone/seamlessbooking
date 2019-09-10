import React, { Component } from "react";
import { Text, View, FlatList, Modal, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Aroom from "./component/room";
import styles from "./component/search.style";
import BookModal from "./component/bookModal";
import NavBarButton from "../../component/buttons/NavBarButton";
import colors from "../../styles/colors";
import transparentHeaderStyle from "../../styles/navigation";

export default class Search extends Component {
  static navigationOptions = ({ navigation }) => ({
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
  });

  constructor(props) {
    super();

    this.state = {
      rooms: [1, 2, 3, 4, 5],
      visibility: false,
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
              closemodal={() => this.cancelbooking()}
            />
          </Modal>
          <FlatList
            ListEmptyComponent={() => <Text>Sorry no Available rooms</Text>}
            data={this.state.rooms}
            renderItem={item => this.renderItem(item)}
          />
        </View>
      </SafeAreaView>
    );
  }
}
