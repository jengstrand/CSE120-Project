import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
// import React from "react";
//import { AppRegistry, Image } from "react-native";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import volunteerSU from "./routes/volunteerSU";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function home({ navigation }) {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const volunteerButtonHandler = () => {
    navigation.navigate("volunteersignup");
  };

  const nonprofitButtonHandler = () => {
    navigation.navigate("nonprofitsignup");
  };

  return (
    <ImageBackground
      blurRadius={2}
      source={require("../assets/download.png")}
      style={styles.ImageBackground}
    >
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
            placeholder="Email..."
            placeholderTextColor="white"
            onChangeText={(e) => {
              setUsernameReg(e);
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
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={volunteerButtonHandler}
          style={styles1.loginBtn}
        >
          <Text style={styles.loginText}>VOLUNTEER SIGNUP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={nonprofitButtonHandler}
          style={styles2.loginBtn}
        >
          <Text style={styles.loginText}>NONPROFIT SIGNUP</Text>
        </TouchableOpacity>
      </View>
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
