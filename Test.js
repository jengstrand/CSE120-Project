import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Navigator from "./routes/homestack";
import { openDatabase } from "expo-sqlite";
import ListingsScreen from "./screens/ListingsScreen";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

var db = openDatabase("UWMCDatabase");

export default function App() {
//STRESS TEST
  db.transaction((tx) => {
    
    const eventname = "Test Event";
    const description = "Stress Test";
    const type = "Test";
    const address = "1234 Test ave";
    const org = "TestOrg";
    const date = "5/05";
    const time = "5pm";
    
//Testing i values: 10, 100, 1000, 10000, 1000000
    for (var i = 0; i < 1000000; i++){
      tx.executeSql(
        "insert into Events3 (Eventname, Description, Type, Address, Organization, Date, Time) values (?,?,?,?,?,?,?)",
            [eventname, description, type,address, org, date, time], (tx, results) => {
              console.log("Event added!");
            }
      ); 
    }
   



  });

   
 

 

}
