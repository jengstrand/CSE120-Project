import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";


function Card({title, subTitle, image, address, date, time, name}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
        <AppText style={styles.address}>{address}</AppText>
        <AppText style={styles.date}>{date}</AppText>
        <AppText style={styles.time}>{time}</AppText>
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
});

export default Card;
