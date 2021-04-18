import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Navigator from './routes/homestack'


import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {

  return(
    <Navigator />
  );


}
