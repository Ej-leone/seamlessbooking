import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import colors from '../../styles/colors'


class SnackBar extends Component {
    constructor() {
        super();

        this.animatedValue = new Animated.Value(50);
        this.ShowSnackBar = false;
        this.HideSnackBar = true;
        this.state = {
            SnackBarInsideMsgHolder: ''
        };
    }

    ShowSnackBarFunction(duration = 3000) {
        let SnackBarInsideMsgHolder = this.props.errormessage ? this.props.errormessage : "Default SnackBar Message..."
        if (this.ShowSnackBar === false) {
            this.setState({ SnackBarInsideMsgHolder: SnackBarInsideMsgHolder });

            this.ShowSnackBar = true;

            Animated.timing
                (
                    this.animatedValue,
                    {
                        toValue: 0,
                        duration: 400
                    }
                ).start(this.hide(duration));
        }
    }

    hide = (duration) => {
        this.timerID = setTimeout(() => {
            if (this.HideSnackBar === true) {
                this.HideSnackBar = false;

                Animated.timing
                    (
                        this.animatedValue,
                        {
                            toValue: 50,
                            duration: 400
                        }
                    ).start(() => {
                        this.HideSnackBar = true;
                        this.ShowSnackBar = false;
                        clearTimeout(this.timerID);
                    })
            }
        }, 10000);
    }

    SnackBarCloseFunction = () => {
        if (this.HideSnackBar === true) {
            this.HideSnackBar = false;
            clearTimeout(this.timerID);

            Animated.timing
                (
                    this.animatedValue,
                    {
                        toValue: 50,
                        duration: 400
                    }
                ).start(() => {
                    this.ShowSnackBar = false;
                    this.HideSnackBar = true;
                });
        }
    }

    render() {
        return (

            <Animated.View style={[{ transform: [{ translateY: this.animatedValue }] }, styles.SnackBarContainter]}>

                <Text numberOfLines={1} style={styles.SnackBarMessage}>{this.state.SnackBarInsideMsgHolder}</Text>

                <Text style={styles.SnackBarUndoText} onPress={this.SnackBarCloseFunction} > X </Text>

            </Animated.View>

        );
    }
}

export default SnackBar;


const styles = StyleSheet.create({

    SnackBarContainter:
    {
        position: 'absolute',
        backgroundColor: colors.maincolor,
        flexDirection: 'row',
        alignItems: 'center',
        left: 0,
        bottom: 0,
        right: 0,
        height: 50,
        paddingLeft: 10,
        paddingRight: 55
    },

    SnackBarMessage:
    {
        color: '#fff',
        fontSize: 10
    },

    SnackBarUndoText: {
        color: '#FFEB3B',
        fontSize: 18,
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        padding: 5

    }
});
