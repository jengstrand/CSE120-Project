import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

//temporary until connected to backend
const listings = [
  {
    id: 1,
    title: "Main St Clean up",
    price: "333 Main St",
    image: require("../assets/1014466.jpg"),
  },
  {
    id: 2,
    title: "Feed the Homeless",
    price: "123 16th St",
    image: require("../assets/1007550.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price} //$
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.white,
  },
});

export default ListingsScreen;
