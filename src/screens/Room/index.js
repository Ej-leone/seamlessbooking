import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import SearchBar from "../../component/SearchBar";

import OpenRooms from "../../component/explore/openrooms";
import ClosedRooms from "../../component/explore/closedrooms";
import Listings from "../../component/explore/Listings";
import categoriesList from "../../config/categories";
import Icon from "react-native-vector-icons/Ionicons";
import listings from "../../config/listings";

import styles from "./Room.style";

class RoomScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteListings: [],
      showDatetime: false,
      mode: "time",
      setDate: "",
      setTime: "",
      setBuilding: ""
    };
    this.handleAddToFav = this.handleAddToFav.bind(this);
    this.renderListings = this.renderListings.bind(this);
    this.onCreateListClose = this.onCreateListClose.bind(this);
  }

  async ShowTimeModal() {
    this.setState({
      mode: "time",
      showDatetime: true
    });
  }

  async ShowDateModal() {
    this.setState({
      mode: "date",
      showDatetime: true
    });
  }

  handleAddToFav(listing) {
    const { navigate } = this.props.navigation;
    let { favouriteListings } = this.state;

    const index = favouriteListings.indexOf(listing.id);
    if (index > -1) {
      favouriteListings = favouriteListings.filter(item => item !== listing.id);
      this.setState({ favouriteListings });
    } else {
      navigate("CreateList", {
        listing,
        onCreateListClose: this.onCreateListClose
      });
    }
  }

  onCreateListClose(listingId, listCreated) {
    let { favouriteListings } = this.state;
    if (listCreated) {
      favouriteListings.push(listingId);
    } else {
      favouriteListings = favouriteListings.filter(item => item !== listingId);
    }
    this.setState({ favouriteListings });
  }

  renderListings() {
    return listings.map((listing, index) => {
      console.log(listing)(
        <View key={`listing-${index}`}>
          <Listings
            key={`listing-item-${index}`}
            navigation={this.props.navigation}
            title={listing.title}
            boldTitle={listing.boldTitle}
            listings={listing.listings}
            query={listing.query}
            showAddToFav={listing.showAddToFav}
            handleAddToFav={this.handleAddToFav}
            favouriteListings={this.state.favouriteListings}
          />
        </View>
      );
    });
  }

  hideDateTimePicker = () => {
    this.setState({ showDatetime: false });
  };

  handleDatePicked = date => {
    if (this.state.mode == "date") {
      this.setState({ setDate: date.toString() });
      this.hideDateTimePicker();
    }

    if (this.state.mode == "time") {
      this.setState({ setTime: date.toString() });
      this.hideDateTimePicker();
    }
  };

  tobooking() {
    this.props.navigation.navigate("Book");
  }

  render() {
    const { showDatetime, mode } = this.state;
    return (
      <SafeAreaView style={styles.wrapper}>
        <SearchBar />

        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginHorizontal: 10
            }}
          >
            <Text style={styles.heading}>Book a Room</Text>
            <TouchableOpacity onPress={() => this.tobooking("Book")}>
              <Icon name={"ios-add"} size={22} color={"#DE4A5B"} />
            </TouchableOpacity>
          </View>
          {/*<View style={styles.categories}>
                        <Categories categories={categoriesList}
                            firstclick={() => this.ShowDateModal()}
                            secondclick={() => this.ShowTimeModal()}

                        />
        </View>*/}
          <OpenRooms
            key={0}
            navigation={this.props.navigation}
            title={"Open Rooms"}
            boldTitle={true}
            handleAddToFav={this.handleAddToFav}
          />

          <ClosedRooms
            key={1}
            navigation={this.props.navigation}
            title={"Booked Rooms"}
            handleAddToFav={this.handleAddToFav}
            boldTitle={true}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
//  {this.renderListings()}

const ListingsQuery = gql`
  query {
    getrooms {
      Name
    }
  }
`;

const Room = graphql(ListingsQuery)(RoomScreen);
export default Room;
