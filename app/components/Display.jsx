import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Display = () => {
  return (
    <View style={styles.container}>
      <Text>Screen</Text>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
