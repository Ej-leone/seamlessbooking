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
import DateTimePicker from "react-native-modal-datetime-picker";
import categoriesList from '../../config/categories';
import listings from '../../config/listings';

import styles from './Room.style'


class RoomScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            favouriteListings: [],
            showDatetime: false,
            mode: 'time',
            setDate: '',
            setTime: '',
            setBuilding: ""
        };
        this.handleAddToFav = this.handleAddToFav.bind(this);
        this.renderListings = this.renderListings.bind(this);
        this.onCreateListClose = this.onCreateListClose.bind(this);
    }

    async ShowTimeModal() {
        this.setState({
            mode: 'time',
            showDatetime: true
        })
    }

    async ShowDateModal() {
        this.setState({
            mode: 'date',
            showDatetime: true
        })
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
                    navigation={this.props.navigation}
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

    hideDateTimePicker = () => {
        this.setState({ showDatetime: false });
    };

    handleDatePicked = date => {
        if (this.state.mode == 'date') {
            this.setState({ setDate: date.toString() });
            this.hideDateTimePicker();
        }

        if (this.state.mode == 'time') {
            this.setState({ setTime: date.toString() });
            this.hideDateTimePicker();
        }

    };


    render() {
        const { showDatetime, mode } = this.state;
        console.log(categoriesList)
        return (
            <SafeAreaView style={styles.wrapper}>
                <SearchBar />
                <DateTimePicker
                    isVisible={showDatetime}
                    mode={mode}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
                <ScrollView
                    style={styles.scrollview}
                    contentContainerStyle={styles.scrollViewContent}
                >
                    <Text style={styles.heading}>
                        Book a Room
              </Text>
                    <View style={styles.categories}>
                        <Categories categories={categoriesList}
                            firstclick={() => this.ShowDateModal()}
                            secondclick={() => this.ShowTimeModal()}

                        />
                    </View>
                    {this.renderListings()}
                </ScrollView>
            </SafeAreaView>
        );
    }
}


const ListingsQuery = gql`
  query {
    getrooms{
      Name
      
    }
  }
`



const Room = graphql(ListingsQuery)(RoomScreen);
export default Room