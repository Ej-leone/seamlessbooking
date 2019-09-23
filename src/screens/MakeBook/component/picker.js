import React, { Component } from "react";
import {
    View,

    Text,

    Switch,

} from "react-native";
import colors from "../../../styles/colors";

class Pickerr extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            value: false
        }
    }

    toggle(er) {
        if (er) {
            this.props.Amenities.push(this.props.name)
            this.setState({ value: er })
            console.log(this.props.Amenities)
        }
        else {
            console.log(this.props.Amenities)
            this.setState({ value: er })
            let index = this.props.Amenities.indexOf(this.props.name)

            if (index > -1) {
                this.props.Amenities.splice(index, 1);
            }
        }
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
                <Text>{this.props.name}</Text>

                <Switch
                    value={this.state.value}
                    style={{ alignSelf: "stretch" }}
                    onValueChange={er => this.toggle(er)}
                    trackColor={colors.maincolor}
                    ios_backgroundColor={colors.maincolor}
                />
            </View>
        );
    };
}

export default Pickerr