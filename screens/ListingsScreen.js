import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import { openDatabase } from "expo-sqlite";

//var organization = navigation.getParam('organization');



// const listings = [
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

const listings = [];

export default function ListingsScreen({navigation}) {
  var organization = navigation.getParam('organization');

  
  var db = openDatabase("UWMCDatabase");

  let [transID, setID] = useState("");
  let [transTitle, setTitle] = useState("");
  let [transDes, setDes] = useState("");

  let updateList = (identifier, t, d) => {
    setID(identifier);
    setTitle(t);
    setDes(d);

    entry = 
    {
      id: transID, 
      title:transTitle, 
      description:transDes,
      image: require("../assets/united.png"), 
    }

    listings.push(entry);
  }
  
      db.transaction((tx) => {
        tx.executeSql(
          "select * from Events2 where Organization = ?",
          [organization], (tx,results) => {
            var len = results.rows.length;
            //console.log(results.rows._array); 
            for (var i =0; i < len; i++) {
             
              //console.log(len);
               updateList(i+1, results.rows._array[i]["Eventname"], "In Merced");

              
              //console.log(listings);
            }
          }
        );
        //tx.executeSql("insert into Nonprofit (Email) values (?)", ["Eman"]);
        //(Eventname text, Description text, Type text, Address text, Organization text, Date text, Time text, id integer primary key not null
      });
    
  
  
   // console.log(listings.length);
    
  
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
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});


