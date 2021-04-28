import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {openDatabase} from 'expo-sqlite';




export default function volunteerProfile({navigation}) {
  const db = openDatabase("UWMCDatabase");
  const signout_button_handler = () => {
    navigation.navigate("Home");
    navigation.popToTop();
  }


  const view_events_buttonHandler = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from Events3",
         [],
         (tx, results) => {
            if(results.rows.length > 0){
              var listings = [];
              for(var i = 0; i < results.rows.length; i++){
                var entry = 
                {
                  id: i+1,
                  title: results.rows._array[i]["Eventname"],
                  description: results.rows._array[i]["Description"],
                  image: require("../assets/united.png"),
                  address: "Address: " + results.rows._array[i]["Address"], 
                  date: "Date: " + results.rows._array[i]["Date"],
                  time: "Time: " + results.rows._array[i]["Time"],
                }
                listings.push(entry);
              }
              navigation.navigate("ListingsScreenVolunteer", {listings});
            }
         } 
         
         
         );//end of executeSql
    });
}

  const view_registered_events_button_handler = () => {


  }

    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require("../assets/volunteerIcon.png")}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <TouchableOpacity onPress={view_events_buttonHandler} style={styles.buttonContainer}>
                <Text>Look for events</Text>  
              </TouchableOpacity>              
              <TouchableOpacity onPress={view_registered_events_button_handler}style={styles.buttonContainer}>
                <Text>View registered events</Text> 
              </TouchableOpacity>
              <TouchableOpacity onPress={signout_button_handler} style={styles.buttonContainer}>
                <Text>Sign out</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  header:{
    backgroundColor: "midnightblue",
    height:200,
  },
  avatar: {
    width: 110,
    height: 110,
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