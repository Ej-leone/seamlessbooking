import React, { Component } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import ActionCreators from '../../redux/actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './screen.style'

class Screen1 extends Component {

    componentDidMount() {
        const { navigation } = this.props;
        const { navigate } = navigation;
        setTimeout(
            () => {
                navigate('LoggedOut');
            }, 1000
        )
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}> Scheduling space </Text>
                    <Text style={styles.subtitle}>within your workplace</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Screen1)
