import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Query } from 'react-apollo';
import NoResults from '../../component/saved/NoResults';
import styles from './Bookings.style'
import { FlatList } from 'react-native-gesture-handler';
import { roomQuery } from '@services/getrooms'
export default class Bookings extends Component {

    _renderItem({ item }) {
        return (
            <Text>item</Text>
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
