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
    <ScrollView>
      <View style={{ backgroundColor: "lightgrey" }}>
        <TextInput value={inputValue}></TextInput>
        <Button title="Push me"></Button>
      </View>
    </ScrollView>
  );
}
