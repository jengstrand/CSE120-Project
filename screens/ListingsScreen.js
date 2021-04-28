import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

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

function ListingsScreen({navigation}) {
  const organization = navigation.getParam('organization');
  var db = openDatabase("UWMCDatabase");
  
  listings = navigation.getParam('listings');
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card 
            title={item.title}
            subTitle={item.description}
            image={item.image}
            address={item.address}
            date = {item.date}
            time = {item.time}
          />
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
});

export default ListingsScreen;
