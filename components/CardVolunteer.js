import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import {openDatabase} from "expo-sqlite";


function CardVolunteer({ title, subTitle, image, address, date, time,nav, email, org }) {
 var db = openDatabase("UWMCDatabase");
  const addEvent = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "select *  from EventsVolunteer2 where Email=? and Organization = ? and Eventname = ?",
            [email, org, title], (tx, results) => {
              if(results.rows.length > 0){
                alert("You have already added this event!");
              }
              else{
                tx.executeSql(
                  "insert into EventsVolunteer2 (Email, Eventname, Description, Address, Organization, Date, Time) values (?,?,?,?,?,?,?)",
                      [email, title, subTitle,address, org, date, time], (tx, results) => {
                        alert("Event added!");
                      }
                );
                
              }
            }
      );
      
      
    });
  }
  return (
    <View style={styles.cardVolunteer}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
        <AppText style={styles.address}>{address}</AppText>
        <AppText style={styles.date}>{date}</AppText>
        <AppText style={styles.time}>{time}</AppText>
        <AppText style={styles.date}>{org}</AppText>
      </View>
      <View>
      <TouchableOpacity onPress = {addEvent} style={styles.buttonContainer}>
                <Text>Add Event</Text>  
              </TouchableOpacity> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardVolunteer: {
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
    backgroundColor: "limegreen",
  },
});

export default CardVolunteer;
