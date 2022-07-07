import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState, useEffect } from "react";
import Keypad from "../components/Keypad";
import Display from "../components/Display";
import SwipeUpDown from "react-native-swipe-up-down";
import { SimpleLineIcons } from "@expo/vector-icons";
import { evaluate } from "mathjs";

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
  const [displayvalues, setdisplayvalues] = useState(""); // Update state from children to parent...

  const updateValues = (clicked) => {
    // Function will be passed down to children, Display and then Keypad to Keys...
    if (clicked === "AC") {
      setdisplayvalues("");
    } else if (clicked === "backspace") {
      setdisplayvalues(displayvalues.slice(0, -1));
    } else if (clicked === "=") {
      var converted = String(evaluate(displayvalues));
      setdisplayvalues(converted);
    } else {
      setdisplayvalues(displayvalues + clicked);
    }
  };

  useEffect(() => {
    console.log(displayvalues);
  });

  return (
    <View style={styles.container}>
      <Display data={displayvalues} activate={opened} />
      <SwipeUpDown
        itemMini={<ItemMini />} // Pass props component when collapsed
        itemFull={<Keypad updateData={updateValues} />} // Pass props component when show full
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
