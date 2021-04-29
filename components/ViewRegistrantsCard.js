import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import {openDatabase} from "expo-sqlite";
//import Navigator from "../routes/homestack";
//import tester1 from "../screens/ListingsScreen";


function ViewRegistrantsCard({email, image, fullname}) {

  return (
    <View style={styles.ViewRegistrantsCard}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{fullname}</AppText>  
        <AppText style={styles.subTitle}>{email}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewRegistrantsCard: {
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

export default ViewRegistrantsCard;

