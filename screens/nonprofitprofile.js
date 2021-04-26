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


export default function nonprofitprofile({ navigation }) {

    var db = openDatabase("UWMCDatabase");

    const email = navigation.getParam('email');
    console.log(email);

    const create_event_buttonHandler = () => {
        navigation.navigate("createevent", {email});
    }

    const view_events_buttonHandler = () => {
        db.transaction((tx) => {
            tx.executeSql(
              "select * from Nonprofit where Email = ?",
              [email],
              (tx, results) => {
                var len = results.rows.length;
                if (len > 0) {
                    //console.log(results.rows._array[0]["OrganizationName"]);
                    const organization = results.rows._array[0]["OrganizationName"];
                    navigation.navigate("ListingsScreen",{organization});
                }else{
                  alert("You do not have any events created");
                }

              }
            );
         });


       
    }

    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require("../assets/nonprofitIcon.png")}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              <TouchableOpacity onPress={create_event_buttonHandler} style={styles.buttonContainer}>
                <Text>Create Event</Text>  
              </TouchableOpacity>              
              <TouchableOpacity onPress={view_events_buttonHandler} style={styles.buttonContainer}>
                <Text>Manage Events</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  header:{
    height:200,
    backgroundColor: "midnightblue",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
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