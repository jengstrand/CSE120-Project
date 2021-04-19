import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function nonprofitsignup({ navigation }) {
  const [orgName, setOrgNameReg] = useState("");
  const [password, setPasswordReg] = useState("");
  const [email, setEmailReg] = useState("");
  const [phoneNum, setPhoneNumberReg] = useState("");
  const [Location, setLocationReg] = useState("");
  const [address, setAddressReg] = useState("");
  //const [city, setCityReg] = useState("");
  const [zipCode, setZipCodeReg] = useState("");

  const nonprofitButtonHandler = () =>{
    navigation.navigate('nonprofitsignup');
}


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
            placeholder="Location/City..."
            placeholderTextColor="white"
            onChangeText={(e) => {
              setLocationReg(e);
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Zip Code..."
            placeholderTextColor="white"
            onChangeText={(e) => {
              setZipCodeReg(e);
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Phone Number..."
            placeholderTextColor="white"
            onChangeText={(e) => {
              setPhoneNumberReg(e);
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles2.inputText}
            placeholder="Email..."
            placeholderTextColor="white"
            onChangeText={(e) => {
              setEmailReg(e);
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="white"
            onChangeText={(e) => {
              setPasswordReg(e);
            }}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
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