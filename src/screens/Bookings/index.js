import React, { Component } from 'react'
import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import { Query } from 'react-apollo';
import NoResults from '../../component/saved/NoResults';
import styles from './Bookings.style'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { roomQuery } from '@services/getrooms'


const imageR = require('../../img/listing11.png')

const ImageView = () => {
    return (
        <ImageBackground
            style={styles.imback}
            source={imageR}>
            <Text> 00:00</Text>
        </ImageBackground>)
}
export default class Bookings extends Component {


    _cancelmeeting() {

    }

    _renderItem({ item }) {
        return (
            <View style={styles.itemview}>
                <ImageView />
                <Text style={styles.date}> Monday 22 August</Text>
                <Text style={styles.time}>11:00 Am -12:00</Text>
                <View style={styles.iview}>
                    <View>
                        <Text>Organiser</Text>
                        <Text>David Mpho</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => this._cancelmeeting()}>
                        <View style={styles.redbtn}>
                            <Text style={styles.txt}>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }


    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <Query query={roomQuery}>
                    {
                        ({ error, data }) => {
                            if (error) {
                                return (<View style={styles.errorview}><Text style={styles.errortext}> Oops! Something went wrong. </Text></View>)
                            }
                            if (data) {
                                return (<FlatList
                                    data={data.getrooms}
                                    renderItem={(item) => this._renderItem(item)}
                                    ListEmptyComponent={() => <NoResults />}
                                />)
                            }
                        }
                    }
                </Query>
            </SafeAreaView>
        )
    }
}
