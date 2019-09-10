import React, { Component } from 'react'
import { Text, View, FlatList, Modal } from 'react-native'
import Aroom from './component/room'
import styles from './component/search.style'
import BookModal from './component/bookModal'

export default class Search extends Component {
    constructor(props) {
        super()

        this.state = {
            rooms: [1, 2, 3, 4, 5],
            visibility: false
        }
    }

    renderItem(item) {
        return <Aroom initbooking={() => this.toggleBookingModal()} />
    }

    toggleBookingModal() {
        const sta = this.state.visibility
        this.setState({ visibility: !sta })
    }

    render() {
        return (
            <View>
                <Text style={styles.heading}> Available rooms  </Text>
                <Modal
                    transparent={true}
                    animationType="fade"
                    visibility={this.state.visibility}
                >
                    <BookModal />
                </Modal>
                <FlatList
                    ListEmptyComponent={() => <Text>Sorry no Available rooms</Text>}
                    data={this.state.rooms}
                    renderItem={(item) => this.renderItem(item)}
                />
            </View>
        )
    }
}