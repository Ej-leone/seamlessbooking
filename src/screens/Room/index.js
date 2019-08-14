import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SearchBar from '../../component/SearchBar';
import Categories from '../../component/explore/Categories';
import Listings from '../../component/explore/Listings';

import categoriesList from '../../config/categories';
import listings from '../../config/listings';

import styles from './Room.style'


class RoomScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            favouriteListings: [],
        };
        this.handleAddToFav = this.handleAddToFav.bind(this);
        this.renderListings = this.renderListings.bind(this);
        this.onCreateListClose = this.onCreateListClose.bind(this);
    }

    handleAddToFav(listing) {
        const { navigate } = this.props.navigation;
        let { favouriteListings } = this.state;

        const index = favouriteListings.indexOf(listing.id);
        if (index > -1) {
            favouriteListings = favouriteListings.filter(item => item !== listing.id);
            this.setState({ favouriteListings });
        } else {
            navigate('CreateList', { listing, onCreateListClose: this.onCreateListClose });
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
        return listings.map((listing, index) => (
            <View
                key={`listing-${index}`}
            >
                <Listings
                    key={`listing-item-${index}`}
                    title={listing.title}
                    boldTitle={listing.boldTitle}
                    listings={listing.listings}
                    showAddToFav={listing.showAddToFav}
                    handleAddToFav={this.handleAddToFav}
                    favouriteListings={this.state.favouriteListings}
                />
            </View>
        ));
    }

    render() {
        //const { data } = this.props;
        console.log(categoriesList)
        return (
            <SafeAreaView style={styles.wrapper}>
                <SearchBar />
                <ScrollView
                    style={styles.scrollview}
                    contentContainerStyle={styles.scrollViewContent}
                >
                    <Text style={styles.heading}>
                        Book a Room
              </Text>
                    <View style={styles.categories}>
                        <Categories categories={categoriesList} />
                    </View>
                    {this.renderListings()}
                </ScrollView>
            </SafeAreaView>
        );
    }
}
/*
 
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}*/

const ListingsQuery = gql`
  query {
    multipleListings{
      title,
      description
    }
  }
`

//export default connect(mapStateToProps, mapDispatchToProps)(Room)

const Room = graphql(ListingsQuery)(RoomScreen);
export default Room