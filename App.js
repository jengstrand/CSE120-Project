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

  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists Events2 (Eventname text, Description text, Type text, Address text, Organization text, Date text, Time text)",
      []
    );
    console.log("Events table created!");
    tx.executeSql(
      "create table if not exists Volunteer (Email text, Password text, Firstname text, Lastname text, PhoneNumber text)",
      []
    );
    console.log("Volunteer table created!");
    tx.executeSql(
      "create table if not exists Nonprofit (OrganizationName text, Address text, PhoneNumber text, Email text, Password text)",
      []
    );
    console.log("Nonprofit table created");
  });

  return <Navigator />;

}
