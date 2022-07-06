import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Display = ({ activate, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.values}>{activate && data}</Text>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "tomato",
    flex: 0.48,
  },
  values: {
    position: "absolute",
    right: 15,
    bottom: 0,
    fontSize: 50,
    color: "#171515",
  },
});
