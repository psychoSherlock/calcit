import { View, Text, StyleSheet, Linking } from "react-native";
import { TouchableRipple } from "react-native-paper";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const Key = ({
  type,
  value,
  onPress,
  style,
  color,
  backgroundColor,
  iconFamily,
}) => {
  return (
    <TouchableRipple
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.buttons, { backgroundColor: backgroundColor }]} // For custom bg color to equal
      borderless
      rippleColor="#DDD"
    >
      {type === "digit" ? (
        <Text style={[styles.buttonValues, style, { color: color }]}>
          {value}
        </Text>
      ) : iconFamily ? (
        iconFamily // If type == digit then use text element, else, check if iconFamily is present, use it if it does else use fontAwesome5
      ) : (
        <FontAwesome5
          name={value}
          size={20}
          color={color ? color : "#3a86ff"}
        />
      )}
    </TouchableRipple>
  );
};

const Keypad = () => {
  return (
    <View style={styles.container}>
      <Key type="digit" value="AC" color="#fb5607" />
      <Key type="icon" value="backspace" />
      <Key type="icon" value="percent" />
      <Key type="icon" value="divide" />

      <Key type="digit" value={7} />
      <Key type="digit" value={8} />
      <Key type="digit" value={9} />
      <Key
        type="digit"
        value="X"
        style={{ fontWeight: "bold" }}
        color="#3a86ff"
      />

      <Key type="digit" value={4} />
      <Key type="digit" value={5} />
      <Key type="digit" value={6} />
      <Key type="icon" value="minus" />

      <Key type="digit" value={1} />
      <Key type="digit" value={2} />
      <Key type="digit" value={3} />
      <Key type="icon" value="plus" />

      <Key
        type="icon"
        iconFamily={<Ionicons name="logo-octocat" size={30} color="#171515" />} // This specifies icon
        onPress={() => {
          Linking.openURL("https://psychosherlock.github.io");
        }}
      />
      <Key type="digit" value={0} />
      <Key type="digit" value="." />
      <Key
        type="icon"
        value="equals"
        color="white"
        backgroundColor="#fb5607"
        onPress={() => {
          console.log("Equal");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-around",
  },
  buttons: {
    width: 75,
    height: 75,
    marginHorizontal: 2,
    marginVertical: 1,
    // backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  buttonValues: {
    fontSize: 30,
  },
});
export default Keypad;
