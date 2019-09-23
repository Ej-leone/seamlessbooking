import React, { Component } from "react";
import {
    View,

    Text,

    Switch,

} from "react-native";


class Pickerr extends Component {
    constructor(props) {
        name: ""
        value: false
    }



    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignSelf: "stretch",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <Text>{props.name}</Text>

                <Switch
                    value
                    style={{ alignSelf: "stretch" }}
                    onChange={(e) => props.change(e)}
                    trackColor={colors.maincolor}
                    ios_backgroundColor={colors.maincolor}
                />
            </View>
        );
    };
}

export default Pickerr