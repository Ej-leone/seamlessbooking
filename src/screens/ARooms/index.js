import React, { Component } from 'react'
import { Query } from 'react-apollo';
import { Text, View, FlatList } from 'react-native'

export default class ARooms extends Component {
    constructor() {
        super()

        this.state = {
            alldata: [],
            filtered: []
        }
    }

    _renderRooms({ meeting }) {
        return (
            <Text>
                some meeting
            </Text>
        )
    }

    render() {
        return (
            <View>
                <Text> All meetings </Text>

            </View>
        )
    }
}

/*
   <Query query={roomQuery}>
                    {({ loading, error, data }) => {
                        if (loading) {
                            return <Text>Loading</Text>
                        }
                        if (error) {
                            return <Text>Error</Text>
                        }
                        if (data) {
                            return (
                                <View>
                                    <View>
                                        <View>
                                            <Text>Filters go here </Text>
                                        </View>
                                        <FlatList
                                            data={d}
                                            renderItem={(item) => this._renderRooms(item)}
                                            ListEmptyComponent={() => <Text>Empty </Text>}

                                        />
                                    </View>
                                </View>

                            )

                        }
                    }}
                </Query> */