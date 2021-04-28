import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import { openDatabase } from "expo-sqlite";
var listings = [];
//   {
//     id: 1,
//     title: "Event1",
//     description: "In Merced",
//     image: require("../assets/united.png"),
//   },
//   {
//     id: 2,
//     title: "Event2",
//     description: "In Atwater",
//     image: require("../assets/united.png"),
//   },
//   {
//     id: 3,
//     title: "Event2",
//     description: "In Atwater",
//     image: require("../assets/united.png"),
//   },
//   {
//     id: 4,
//     title: "Event1",
//     description: "In Merced",
//     image: require("../assets/united.png"),
//   },
// ];

function deleteCard (item) {
  console.log(item);
  // db.transaction((tx) => {
  //   tx.executeSql(
  //     "delete from Events3 where Organziation = ? and Eventname = ?",
  //     [organization, title],
  //     (tx, results) => {
  //       console.log(results.rows._array);
  //     }
  //   );
  // });s
}

function ListingsScreen({navigation}) {
  const organization = navigation.getParam('organization');
  var db = openDatabase("UWMCDatabase");
 // const [t, setT] = useState("");

  
  listings = navigation.getParam('listings');



  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <View> 
            <Card 
              title={item.title}
              subTitle={item.description}
              image={item.image}
              address={item.address}
              date = {item.date}
              time = {item.time}
            />
           <TouchableOpacity onPress ={deleteCard(item)} style={styles.buttonContainer}>
                <Text>Delete Event</Text>  
            </TouchableOpacity>
            <Text style={styles.borderline}>_________________________________________________</Text> 
          </View>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "midnightblue",
  },
  buttonContainer:{
    marginTop:10,
    marginLeft: 250,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
    backgroundColor: "orangered",
  },
  borderline: {
    color:"white",
    marginBottom:30,
  },
});

export default ListingsScreen;
