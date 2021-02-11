import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("defaultValue");
  return (
    <ScrollView style={{ paddingTop: 50 }}>
      <View style={{ backgroundColor: "lightgrey" }}>
        <TextInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></TextInput>
        <Button title="Push me" onPress={() => alert(inputValue)}></Button>
      </View>
    </ScrollView>
  );
}
