import React from "react";
import { useState } from "react";
import Axios from "axios";
import { openDatabase } from "expo-sqlite";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";



export default function nonprofitviewevents({ navigation }) {


    var db = openDatabase("UWMCDatabase");

    const organization = navigation.getParam('organization');

    var events;

    const getEvents = () => {
        db.transaction((tx) => {
    
          tx.executeSql(
            "select * from Events where Organization = ?",
            [organization],
            (tx, results) => {
              var len = results.rows.length;
              if (len > 0) {
                events = results.rows._array[0]["Eventname"];
                console.log(events);
                //console.log(results.rows._array[0]["Organization"]);
                console.log("Getting events.....");
              }
            }
          );
        });
      };

    return (
      <View>
          <ScrollView>
            <View>
              <TouchableOpacity onPress={getEvents} style={styles.buttonContainer}>
                <Text>Button</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text>{events}</Text>
            </View>
          </ScrollView>
      </View>
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
    loginBtn: {
      width: "80%",
      backgroundColor: "royalblue",
      //backgroundColor: "darkslateblue",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
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
    loginText: {
      color: "white",
    },
    signUpBtn: {
      color: "blue",
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
  });
  