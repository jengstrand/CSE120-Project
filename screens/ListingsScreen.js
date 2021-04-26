import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Event1",
    description: "In Merced",
    image: require("../assets/united.png"),
  },
  {
    id: 2,
    title: "Event2",
    description: "In Atwater",
    image: require("../assets/united.png"),
  },
  {
    id: 3,
    title: "Event2",
    description: "In Atwater",
    image: require("../assets/united.png"),
  },
  {
    id: 4,
    title: "Event1",
    description: "In Merced",
    image: require("../assets/united.png"),
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
            subTitle={item.description}
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
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;