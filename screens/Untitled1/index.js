import { Text } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Slider } from "react-native-elements";
import React from "react";
import { View } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Pressable onPress={() => navigation.navigate("Untitled2")} style={{
      position: "initial",
      width: "195px",
      height: "350px",
      marginLeft: "-10px",
      marginTop: "-10px"
    }}><Slider style={{
        left: 9,
        top: 117,
        position: "absolute",
        width: 161,
        height: 33,
        transform: "rotate(90deg)"
      }} value={3.3} thumbStyle={{
        height: 20,
        width: 20,
        backgroundColor: "blue"
      }} maximumValue={4} minimumValue={3} step={4}></Slider></Pressable><TextInput style={{
      left: 22,
      top: 202,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }}></TextInput><TextInput style={{
      left: 29,
      top: 19,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }}></TextInput><TextInput style={{
      left: 25,
      top: 147,
      position: "absolute",
      backgroundColor: "#150a0a",
      borderColor: "#cccccc",
      width: 150,
      height: 49,
      color: "#24c95a"
    }}></TextInput><TextInput style={{
      left: 21,
      top: 71,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }}></TextInput><TextInput style={{
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30,
      left: 21,
      top: 286
    }}></TextInput><Text style={{
      left: 45,
      top: 145,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      color: "#e92828"
    }}>fkjdsfhkdsjfhkjdsfhkjds</Text></View>;
};

export default Untitled1;