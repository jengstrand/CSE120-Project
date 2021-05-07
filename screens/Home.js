import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
// import React from "react";
//import { AppRegistry, Image } from "react-native";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import volunteerSU from "./routes/volunteerSU";
import { openDatabase } from "expo-sqlite";
//import db from "../screens/nonprofitsignup";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

var db = openDatabase("UWMCDatabase");

export default function home({ navigation }) {
  const [email, setEmail] = useState("");
  const [passwordReg, setPassword] = useState("");

  const volunteerButtonHandler = () => {
    navigation.navigate("volunteersignup", {email});
  };

  const nonprofitButtonHandler = () => {
    navigation.navigate("nonprofitsignup", {email});
  };

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists Nonprofit (OrganizationName text, Address text, Location text, Zipcode text, PhoneNumber text, Email text, Password text)",
        []
      );
      //tx.executeSql("insert into Nonprofit (Email) values (?)", ["Eman"]);

      tx.executeSql(
        "create table if not exists Volunteer (Email, Password, Firstname, Lastname, PhoneNumber)",
        []
      );
    });
  });

  const handleLogin = () => {
    db.transaction((tx) => {
      // tx.executeSql(
      //   "insert into Nonprofit (OrganizationName, Address, Location, Zipcode, PhoneNumber, Email, Password) values (?,?,?,?,?,?,?)",
      //   [orgName, address, Location, zipCode, phoneNum, email, password]
      // );

      tx.executeSql(
        "select * from Nonprofit where Email = ? and Password = ?",
        [email, passwordReg],
        (tx, results) => {
          var len = results.rows.length;
          //console.log("len", len);
          if (len > 0) {
            var message = "Welcome Back ";
            navigation.navigate("nonprofitprofile", {email});
            //alert(message);
          } else {
            tx.executeSql(
              "select * from Volunteer where Email = ? and Password = ?",
              [email, passwordReg],
              (tx, results) => {
                var len1 = results.rows.length;
                if (len1 > 0) {
                  //alert("Welcome Back !", email, "!");
                  navigation.navigate("volunteerprofile", {email});
                } else {
                  alert("Invalid credentials");
                }
              }
            );
          }
        }
      );
    });
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
          <KeyboardAvoidingView behavior="padding">
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="white"
              onChangeText={(e) => {
                setEmail(e);
              }}
            />
          </KeyboardAvoidingView>
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles2.inputText}
            placeholder="Password..."
            placeholderTextColor="white"
            onChangeText={(e) => {
              setPassword(e);
            }}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
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