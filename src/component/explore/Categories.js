
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import iPhoneSize from '../../helpers/utils';

const size = iPhoneSize();
let cardSize = 100;
let cardMargin = 8;

if (size === 'small') {
  cardSize = 90;
  cardMargin = 4;
} else if (size === 'large') {
  cardSize = 115;
}

export default class Categories extends Component {
  get Categories() {
    const { categories } = this.props;
    return categories.map((category, index) => (
      <TouchableHighlight

        key={`category-item-${index}`}
      >
        <View style={styles.card}>
          <Icon
            name={category.photo}
            size={32}
            color={colors.maincolor}
          />
          <Text style={styles.text}>{category.name}</Text>
        </View>
      </TouchableHighlight>
    ));
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.wrapper}
        horizontal
        showHorizontalScrollIndicator={false}
      >
        {this.Categories}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    backgroundColor: colors.white,
    alignItems: "center",
    borderRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 3,
    elevation: 3,
    zIndex: 999,
    width: cardSize,
    height: cardSize,
    marginTop: cardMargin,
    marginBottom: cardMargin,
    marginRight: cardMargin,
    marginLeft: cardMargin,
  },
  text: {
    color: colors.maincolor
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
