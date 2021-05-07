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



export default function createevent({ navigation }) {

    // const create_event_buttonHandler = () => {
    //     navigation.navigate("createevent");
    // }

    const [orgName, setOrgNameReg] = useState("");
    const [eventname,setEventNameReg] = useState("");
    const [eventtype, setEventTypeReg] = useState("");
    const [description,setEventDescriptionReg ] = useState("");
    const [address,setAddressReg] = useState("");
    const [date, setDateReg] = useState("");
    const [time, setTimeReg] = useState("");

    var db = openDatabase("UWMCDatabase");

    const register = () => {
        db.transaction((tx) => {
          tx.executeSql(
            "insert into Events3 (Eventname, Description, Type, Address, Organization, Date, Time) values (?,?,?,?,?,?,?)",
            [eventname, description, eventtype,address, orgName, date, time]
          );
    
          tx.executeSql(
            "select * from Events3 where Organization = ?",
            [orgName],
            (tx, results) => {
              var len = results.rows.length;
              if (len > 0) {
                //console.log(results.rows._array[0]["Organization"]);
                alert("Event Created!");
                navigation.navigate("nonprofitprofile");
              }
            }
          );
        });
      };

    return (
      <ImageBackground
      blurRadius={2}
      source={require("../assets/volunteerbg.png")}
      style={styles.ImageBackground}
      >
        <View>
            <ScrollView>
              <View style={styles.container}>
              <Image
                  source={require("../assets/eventlogo2.png")}
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
                  placeholder="Organization Name..."
                  placeholderTextColor="white"
                  onChangeText={(e) => {
                      setOrgNameReg(e);
                  }}
                  />
              </View>
              <View style={styles.inputView}>
                  <TextInput
                  style={styles.inputText}
                  placeholder="Event Name..."
                  placeholderTextColor="white"
                  onChangeText={(e) => {
                      setEventNameReg(e);
                  }}
                  />
              </View>
              <View style={styles.inputView}>
                  <TextInput
                  style={styles.inputText}
                  placeholder="Event type..."
                  placeholderTextColor="white"
                  onChangeText={(e) => {
                      setEventTypeReg(e);
                  }}
                  />
              </View>
              <View style={styles.inputView}>
                  <TextInput
                  style={styles.inputText}
                  placeholder="Event description..."
                  placeholderTextColor="white"
                  onChangeText={(e) => {
                      setEventDescriptionReg(e);
                  }}
                  />
              </View>
              <View style={styles.inputView}>
                  <TextInput
                  style={styles.inputText}
                  placeholder="Address..."
                  placeholderTextColor="white"
                  onChangeText={(e) => {
                      setAddressReg(e);
                  }}
                  />
              </View>
              <View style={styles.inputView}>
                  <TextInput
                  style={styles.inputText}
                  placeholder="Event date"
                  placeholderTextColor="white"
                  onChangeText={(e) => {
                      setDateReg(e);
                  }}
                  />
              </View>
              <View style={styles.inputView}>
                  <TextInput
                  style={styles.inputText}
                  placeholder="Event time"
                  placeholderTextColor="white"
                  onChangeText={(e) => {
                      setTimeReg(e);
                  }}
                  />
              </View>
            
              <TouchableOpacity onPress={register} style={styles1.loginBtn}>
                  <Text style={styles.loginText}>Create event</Text>
              </TouchableOpacity>
              </View>
            </ScrollView>
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
  });
  