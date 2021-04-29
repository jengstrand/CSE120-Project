import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import {openDatabase} from "expo-sqlite";
//import Navigator from "../routes/homestack";
//import tester1 from "../screens/ListingsScreen";





function Card({title, subTitle, image, address, date, time, org, nav}) {
  var db = openDatabase("UWMCDatabase");
  const toProfile = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "delete from Events3 where Organization = ? and Eventname = ?",
        [org, title], (tx, results) => {
          nav.navigate("nonprofitprofile"); 
        }
      );
    });
  }

  const toRegistrants = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from EventsVolunteer2 where Organization = ? and Eventname = ?",
        [org, title], (tx, results) => {
          if(results.rows.length > 0){
            const listings = [];
            var length = results.rows.length;
            for(var i = 0; i < length; i++){
              entry = {
                id: i+1, 
                email: "Email: " + results.rows._array[i]["Email"],
                image: require("../assets/volunteerIcon.png"),
              }
              listings.push(entry);
            }
            nav.navigate("ViewRegistrantsScreen", {listings}); 
          }
          else{
            alert("No volunteers have registered for this event");
          }
          
        }
      );
    });
  }

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
        <AppText style={styles.address}>{address}</AppText>
        <AppText style={styles.date}>{date}</AppText>
        <AppText style={styles.time}>{time}</AppText>
        <AppText style={styles.time}>{org}</AppText>
        
          <TouchableOpacity onPress={toRegistrants} style={styles.buttonContainer2}>
                  <Text>See Registrants</Text>  
          </TouchableOpacity>

          <TouchableOpacity onPress ={toProfile} style={styles.buttonContainer}>
                  <Text>Delete Event</Text>  
          </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  title:{
    fontWeight: "bold",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.black,
    marginTop:10,
    fontStyle:"italic"
  },
  date: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  time: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  address:{
    marginTop:10,
    fontWeight: "bold",
  },
 
  buttonContainer:{
    marginTop:10,
    marginLeft: 250,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
    backgroundColor: "orangered",
  },
  buttonContainer2:{
    marginTop:10,
    marginLeft: 250,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
    backgroundColor: "limegreen",
  },
});

export default Card;

