import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Switch } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  //Below is the current viewable screens

  //return <AccountScreen />; //w
  //return <LoginScreen />; //w
  return <ListingDetailsScreen />;
  //return <MessagesScreen />;
  //return <ViewImageScreen />;
  //return <ListingsScreen />;
  //return <WelcomeScreen />;
  ////////////////////////////////////////

  //Below is the current non-working screens

  //return <ListingEditScreen />;
  ////////////////////////////////////////

  // const [isNew, setIsNew] = useState(false);
  // return (
  //   <Screen>
  //     <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
  //   </Screen>
  // );

  // return (
  //   <Screen>
  //     <AppPicker
  //       selectedItem={category}
  //       onSelectItem={(item) => setCategory(item)}
  //       items={categories}
  //       icon="apps"
  //       placeholder="Category"
  //     />
  //     <AppTextInput icon="email" placeholder="Email" />
  //   </Screen>
  // );

  // return (
  //   <Screen>
  //     <AppTextInput placeholder="Username" icon="email" />
  //   </Screen>
  // );

  // const [firstName, setFirstName] = useState("");
  // return (
  //   <Screen>
  //     <Text>{firstName}</Text>
  //     <TextInput
  //       //keyboardType="numeric" for numbers only
  //       onChangeText={(text) => setFirstName(text)}
  //       placeholder="First Name"
  //       style={{
  //         borderBottomColor: "$ccc",
  //         borderBottomWidth: 1,
  //       }}
  //     />
  //   </Screen>
  // );

  //return <ListingsScreen />;

  // return (
  //   <Screen>
  //     {/* <Icon name="email" size={50} backgroundColor="red" iconColor="white" /> */}
  //     <ListItem
  //       title="My title"
  //       //subTitle="My subtitle"
  //       ImageComponent={<Icon name="email" />}
  //     />
  //   </Screen>
  // );

  //return <MessagesScreen />;

  //return <ViewImageScreen />;

  //return <ListingDetailsScreen />;

  // return (
  //   <View
  //     style={{
  //       backgroundColor: "#f8f4f4",
  //       padding: 20,
  //       paddingTop: 100,
  //     }}
  //   >
  //     <Card
  //       title="Demon Slayer Print"
  //       subTitle="$100"
  //       image={require("./app/assets/1014466.jpg")}
  //     />
  //   </View>
  // );

  //return <WelcomeScreen />;
  // (
  //   <View
  //     style={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <AppButton title="Login" onPress={() => console.log("Tapped")} />
  //     <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
  //   </View>
  // );
}
