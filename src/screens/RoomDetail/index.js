import React, { Component } from "react";
import { Query } from "react-apollo";
import colors from "../../styles/colors";
import NavBarButton from "../../component/buttons/NavBarButton";
import Icon from "react-native-vector-icons/FontAwesome";
import transparentHeaderStyle from "../../styles/navigation";
import color from "../../styles/colors";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
  Modal
} from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { roomDescriptionQuery } from "@services/getrooms";

const dummyimage = require("../../img/listing11.png");
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

IMAGES_PER_ROW = 2.5;


const CalendarView = () => {
  return (
    <View>
      <Calendar
        // Initially visible month. Default = Date()
        current={'2012-03-01'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2012-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2012-05-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => { console.log('selected day', day) }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => { console.log('selected day', day) }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => { console.log('month changed', month) }}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => (<Arrow />)}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={true}
        // Show week numbers to the left. Default = false
        showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon left. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
      />
    </View>
  )
}



export default class RoomDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    /* headerRight: (
       <NavBarButton
         handleButtonPress={() =>
           navigation.navigate("Book", {
             RoomId: navigation.getParam("RoomId", "NO-ID")
           })
         }
         location="right"
         color={colors.maincolor}
         text="Book Room"
       />
     ),*/
    headerLeft: (
      <NavBarButton
        handleButtonPress={() => navigation.goBack()}
        location="left"
        icon={<Icon name="angle-left" color={colors.maincolor} size={30} />}
      />
    ),
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white
  });

  constructor() {
    super();
    this.state = {
      RoomId: ""
    };
  }
  componentDidMount() {
    const RoomId = this.props.navigation.getParam("RoomId", "NO-ID");

    this.setState({
      RoomId
    });
  }
  calculatedSize() {
    var size = width / IMAGES_PER_ROW
    return { width: size, height: size }
  }

  renderRow(image) {
    // return images.map((uri, i) => {style={[styles.item, this.calculatedSize()]}
    return (
      <Image source={image} />
    );
    //})
  }



  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Modal>
              <View>
                <CalendarView />
              </View>
            </Modal>

            <Query
              query={roomDescriptionQuery}
              variables={{ RoomId: this.state.RoomId }}
            >
              {({ error, loading, data }) => {
                if (error) {
                  return (
                    <Text>` Error loading this room ${error.message}`</Text>
                  );
                }
                if (loading) {
                  return <Text>... loading this room</Text>;
                }

                if (data) {
                  return (
                    <View style={styles.container}>
                      <Text style={styles.title}>
                        {" "}
                        {data.getRoomDetail.Name}
                      </Text>
                      <FlatList
                        data={[dummyimage, dummyimage, dummyimage, dummyimage]}
                        renderItem={item => this.renderRow(item)}
                        numColumns={2} />
                      <Text style={styles.title}> Amenities </Text>
                      <View>
                        <Text> {data.Capacity} Seats</Text>
                        <Text> White Board</Text>
                        <Text> Wifi</Text>
                        <Text> Projector</Text>
                      </View>

                      <Text style={styles.title}> Direction </Text>
                      <Text>{data.getRoomDetail.Description}</Text>

                      <TouchableOpacity>
                        <Text style={styles.title}> Booked Dates </Text>
                      </TouchableOpacity>

                    </View>
                  );
                }
              }}
            </Query>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
    padding: 0,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  imgview: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: "space-evenly"
  },
  img: {
    resizeMode: "stretch",
    borderRadius: 10,
    width: width / 2.5,
    height: width / 2.5
  },
  title: {
    color: color.maincolor,
    fontSize: 30,
    fontWeight: "700"
  }
});
