import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";
import { Query } from "react-apollo";
import HeartButton from "../buttons/HeartButton";
import Stars from "../Stars";
import colors from "../../styles/colors";
import { getClosedRooms } from "../../services/getrooms";
const dummyimage = require("../../img/listing11.png");

const _movetoBook = props => {
  props.navigation.navigate("Book", { RoomId: "LJqUQPuIQ4cYXw8me8Zo" });
};
const _movetoRoomDetail = props => {
  props.navigation.navigate("RoomDetail", { RoomId: "LJqUQPuIQ4cYXw8me8Zo" });
};

const renderListings = props => {
  const { listings, showAddToFav, handleAddToFav, favouriteListings } = props;
  return listings.map((listing, index) => {
    return (
      <TouchableHighlight style={styles.card} key={`listing-${index}`}>
        <View>
          {showAddToFav ? (
            <View style={styles.addToFavoriteBtn}>
              <HeartButton
                color={colors.white}
                selectedColor={colors.pink}
                selected={favouriteListings.indexOf(listing.id) > -1}
                onPress={() => handleAddToFav(listing)}
              />
            </View>
          ) : null}
          <TouchableOpacity onPress={() => _movetoRoomDetail(props)}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={dummyimage}
            />
          </TouchableOpacity>
          <Text style={[{ color: listing.color }, styles.listingType]}>
            {listing.type}
          </Text>
          <Text style={styles.listingTitle} numberOfLines={2}>
            {listing.Name}
          </Text>
          <Text style={styles.listingPrice}>
            {listing.price} {listing.priceType}
          </Text>
          <Text style={styles.greenText}> Open Till 6:00 am</Text>
          {/* <TouchableOpacity
                        onPress={() => _movetoBook(props)}>
                        <View style={styles.redbtn}>
                            <Text style={styles.redbtntxt}>Book room</Text>
                        </View>
                   </TouchableOpacity>*/}
        </View>
      </TouchableHighlight>
    );
  });
};

const ClosedRooms = props => {
  const { title, boldTitle, query } = props;
  const titleStyle = boldTitle
    ? { fontSize: 22, fontWeight: "600" }
    : { fontSize: 18 };

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <Text style={[titleStyle, styles.title]}>{title}</Text>
        <TouchableOpacity style={styles.seeAllBtn}>
          <Text style={styles.seeAllBtnText}>See all</Text>
          <Icon name="angle-right" size={18} color={colors.gray04} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingRight: 30 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Query query={getClosedRooms}>
          {({ loading, data, error }) => {
            if (loading) {
              return <Text>loading</Text>;
            }
            if (error) {
              return <Text>error</Text>;
            }
            if (data) {
              return renderListings({ ...props, listings: data.getrooms });
            }
          }}
        </Query>
      </ScrollView>
    </View>
  );
  // }
};

export default ClosedRooms;
ClosedRooms.propTypes = {
  title: PropTypes.string.isRequired,
  boldTitle: PropTypes.bool
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 21,
    paddingRight: 21
  },
  redbtntxt: {
    color: colors.white,
    justifyContent: "center",
    alignContent: "center"
  },
  redbtn: {
    backgroundColor: colors.maincolor
  },
  title: {
    color: colors.gray04
  },
  seeAllBtn: {
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  seeAllBtnText: {
    color: colors.gray04,
    marginRight: 5
  },
  scrollView: {
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 40
  },
  card: {
    marginRight: 6,
    marginLeft: 6,
    width: 157,
    flexDirection: "column",
    minHeight: 100
  },
  image: {
    width: undefined,
    flex: 1,
    height: 100,
    borderRadius: 8,
    marginBottom: 7
  },
  listingTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.gray04,
    marginTop: 2
  },
  listingType: {
    fontWeight: "700",
    fontSize: 10
  },
  addToFavoriteBtn: {
    position: "absolute",
    right: 12,
    top: 7,
    zIndex: 2
  },
  listingPrice: {
    color: colors.gray04,
    marginTop: 4,
    marginBottom: 2,
    fontSize: 12,
    fontWeight: "300"
  },
  greenText: {
    color: "green"
  }
});
