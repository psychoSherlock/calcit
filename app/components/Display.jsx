import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const Display = ({ activate, data }) => {
  const [blink, setblink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setblink((blink) => !blink);
    }, 700);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.values, { display: blink ? "none" : "flex" }]}>
        {activate && "|"}
      </Text>
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
    paddingLeft: 20,
  },
});
