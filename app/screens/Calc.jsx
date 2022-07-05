import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Keypad from "../components/Keypad";
import Display from "../components/Display";
import SwipeUpDown from "react-native-swipe-up-down";
import { SimpleLineIcons } from "@expo/vector-icons";

const ItemMini = () => (
  <View style={styles.itemMini}>
    <SimpleLineIcons
      name="calculator"
      size={20}
      color="white"
      style={{
        backgroundColor: "#3a86ff",
        padding: 10,
        borderRadius: 20,
      }}
    />
  </View>
);

export default function Calc() {
  const [opened, setOpened] = useState(false);
  return (
    <View style={styles.container}>
      <Display activate={opened} />
      <SwipeUpDown
        itemMini={<ItemMini />} // Pass props component when collapsed
        itemFull={<Keypad />} // Pass props component when show full
        disablePressToShow={false} // Press item mini to show full
        animation="spring"
        iconSize={15}
        iconColor="#fb5607"
        onShowFull={() => {
          setOpened(true);
        }}
        onShowMini={() => {
          setOpened(false);
        }}
      />
      {/* <Keypad /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
  },

  itemMini: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderTopWidth: 0.5,
    borderTopColor: "#171515",
  },
});
