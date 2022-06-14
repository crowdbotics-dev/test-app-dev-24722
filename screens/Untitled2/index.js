import { TextInput } from "react-native";
import { Switch } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled2 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Switch style={{
      left: 64,
      top: 77,
      position: "absolute",
      width: 50,
      height: 34,
      transform: "rotate(45deg)"
    }}></Switch><TextInput style={{
      left: 47,
      top: 192,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }}></TextInput></View>;
};

export default Untitled2;