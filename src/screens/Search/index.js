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
            visibility: false,
            booking: {},
        }
    }

    renderItem(item) {
        return <Aroom initbooking={(book) => this.toggleBookingModal(book)} details={item} closemodal={() => this.cancelbooking} />
    }

    toggleBookingModal(booking) {

        const sta = this.state.visibility
        this.setState({ visibility: true })
        this.setState({
            booking: booking
        })
    }

    cancelbooking() {
        this.setState({ visibility: false })
        this.setState({
            booking: {}
        })
    }

    render() {
        return (
            <View>
                <Text style={styles.heading}> Available rooms  </Text>
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={this.state.visibility}
                >
                    <BookModal booking={this.state.booking} />
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