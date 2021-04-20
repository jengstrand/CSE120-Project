import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
//mport { RadioButton } from 'react-native-paper';
//import RadioButtonRN from "radio-buttons-react-native";
// import React from "react";
//import { AppRegistry, Image } from "react-native";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import volunteerSU from "./routes/volunteerSU";
import { openDatabase } from "expo-sqlite";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function home({ navigation }) {
  const [usernameReg, setEmail] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");

  return (
    <ImageBackground
      blurRadius={2}
      source={require("../assets/volunteerbg.png")}
      style={styles.ImageBackground}
    >
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../assets/United_Way_Worldwide_logo.png")}
            style={{
              height: 200,
              width: 250,
              resizeMode: "stretch",
              marginBottom: 20,
            }}
          />

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="First Name..."
              placeholderTextColor="white"
              onChangeText={(e) => {
                setFirstName(e);
              }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Last Name..."
              placeholderTextColor="white"
              onChangeText={(e) => {
                setLastName(e);
              }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="white"
              onChangeText={(e) => {
                setEmail(e);
              }}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles2.inputText}
              placeholder="Password..."
              placeholderTextColor="white"
              onChangeText={(e) => {
                setPasswordReg(e);
              }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles2.inputText}
              placeholder="Phone Number..."
              placeholderTextColor="white"
              onChangeText={(e) => {
                setPhoneNumber(e);
              }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles2.inputText}
              placeholder="Age..."
              placeholderTextColor="white"
              onChangeText={(e) => {
                setAge(e);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles1 = StyleSheet.create({
  loginBtn: {
    width: "80%",
    backgroundColor: "orange",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },

  loginText: {
    color: "white",
  },
});

const styles2 = StyleSheet.create({
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },

  loginText: {
    color: "white",
  },

  inputView: {
    width: "80%",
    backgroundColor: "orange",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
  },

  inputText: {
    height: 50,
    color: "white",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#465881",
    //backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logo: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5, //added
  },
  ImageBackground: {
    flex: 1,
    width: null,
    height: null,
  },

  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
    marginBottom: 50,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "royalblue",
    //backgroundColor: "darkslateblue",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "white",
  },
  signUpBtn: {
    color: "blue",
  },
});
