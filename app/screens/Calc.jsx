import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Keypad from "../components/Keypad";

export default function Calc() {
  return (
    <View style={styles.container}>
      <Keypad />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    flex: 1,
    flexDirection: "column-reverse",
  },
});
