import { View, Text, StyleSheet } from "react-native";
import React from "react";
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
  return (
    <View style={styles.container}>
      <Display />
      <SwipeUpDown
        itemMini={<ItemMini />} // Pass props component when collapsed
        itemFull={<Keypad />} // Pass props component when show full
        disablePressToShow={false} // Press item mini to show full
        animation="spring"
      />
      {/* <Keypad /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
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
