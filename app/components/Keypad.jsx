import { View, Text, StyleSheet, Linking } from "react-native";
import { TouchableRipple } from "react-native-paper";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Key = ({
  type,
  value,
  style,
  color,
  backgroundColor,
  iconFamily,
  openURL,
  iconName,
  updateData,
}) => {
  return (
    <TouchableRipple
      activeOpacity={0.6}
      onPress={() => {
        if (openURL) {
          Linking.openURL(openURL); // I prefer doing this step here, to keep the calc functions simple
        } else {
          updateData(value);
        }
      }}
      style={[styles.buttons, { backgroundColor: backgroundColor }]} // For custom bg color to equal
      borderless
      rippleColor="#DDD"
      delayPressIn={10}
    >
      {type === "digit" ? (
        <Text style={[styles.buttonValues, style, { color: color }]}>
          {value}
        </Text>
      ) : iconFamily ? (
        iconFamily // If type == digit then use text element, else, check if iconFamily is present, use it if it does else use fontAwesome5
      ) : (
        <FontAwesome5
          name={iconName}
          size={20}
          color={color ? color : "#3a86ff"}
        />
      )}
    </TouchableRipple>
  );
};

const Keypad = ({ updateData }) => {
  // Pass the updatedData function down to Keys
  return (
    <View style={styles.container}>
      <Key type="digit" value="AC" color="#fb5607" updateData={updateData} />
      <Key
        type="icon"
        iconName="backspace"
        value="backspace"
        updateData={updateData}
      />
      <Key
        type="icon"
        iconName="percentage"
        value="%"
        updateData={updateData}
      />
      <Key type="icon" iconName="divide" value="/" updateData={updateData} />

      <Key type="digit" value={7} updateData={updateData} />
      {/* Each Key will pass down its own data into the Keypad state such that all of them has same states */}
      <Key type="digit" value={8} updateData={updateData} />
      <Key type="digit" value={9} updateData={updateData} />
      <Key
        type="icon"
        value="*"
        iconFamily={<Entypo name="cross" size={30} color="#3a86ff" />}
        updateData={updateData}
      />

      <Key type="digit" value={4} updateData={updateData} />
      <Key type="digit" value={5} updateData={updateData} />
      <Key type="digit" value={6} updateData={updateData} />
      <Key type="icon" iconName="minus" value="-" updateData={updateData} />

      <Key type="digit" value={1} updateData={updateData} />
      <Key type="digit" value={2} updateData={updateData} />
      <Key type="digit" value={3} updateData={updateData} />
      <Key type="icon" iconName="plus" value="+" updateData={updateData} />

      <Key
        type="icon"
        iconFamily={<Ionicons name="logo-octocat" size={30} color="#171515" />} // This specifies icon
        value="github"
        openURL="https://psychosherlock.github.io"
        updateData={updateData}
      />
      <Key type="digit" value={0} updateData={updateData} />
      <Key type="digit" value="." updateData={updateData} />
      <Key
        type="icon"
        iconName="equals"
        value="="
        color="white"
        backgroundColor="#fb5607"
        updateData={updateData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-around",

    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,

    borderTopWidth: 0.1,
    borderTopColor: "#171515",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
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
    fontSize: 33,
  },
});
export default Keypad;
