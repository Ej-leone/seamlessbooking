import React, { Component } from 'react'
import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import { Query } from 'react-apollo';
import NoResults from '../../component/saved/NoResults';
import styles from './Bookings.style'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { roomQuery } from '@services/getrooms'
import * as AddCalendarEvent from 'react-native-add-calendar-event';

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

    _AddToCalendar(eventConfig) {
        AddCalendarEvent.presentEventCreatingDialog(eventConfig)
            .then((eventInfo: { calendarItemIdentifier: string, eventIdentifier: string }) => {
                // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
                // These are two different identifiers on iOS.
                // On Android, where they are both equal and represent the event id, also strings.
                // when { action: 'CANCELED' } is returned, the dialog was dismissed
                console.warn(JSON.stringify(eventInfo));
            })
            .catch((error) => {
                // handle error such as when user rejected permissions
                console.warn(error);
            });
    }
    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <Query query={roomQuery}>
                    {
                        ({ loading, error, data }) => {
                            if (error) {
                                return (<View style={styles.errorview}><Text style={styles.errortext}> Oops! Something went wrong. </Text></View>)
                            }
                            if (loading) {
                                return (<View style={styles.errorview}><Text style={styles.errortext}> ... Loading </Text></View>)
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
