import React, { Component } from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native'
import ActionCreators from '../../redux/actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './main.style'

class LoggedOut extends Component {
    static navigationOptions = {
        header: null
    }


    Tologin() {
        this.props.navigation.navigate("Login")
    }
    ToSignup() {
        this.props.navigation.navigate("Usignup")
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}> Seamless Booking</Text>
                <Text style={styles.stitle}></Text>

                <Image
                    style={{ alignSelf: "center", justifyContent: "center" }}
                    source={require("../../img/as.png")}
                />
                <View style={styles.btncontainer}>
                    <TouchableOpacity
                        onPress={() => this.ToSignup()}>
                        <View>
                            <Text style={styles.txt}>SIGN UP</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.txt}>OR</Text>
                    <TouchableOpacity
                        onPress={() => this.Tologin()}>
                        <View>
                            <Text style={styles.txt}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(LoggedOut)
