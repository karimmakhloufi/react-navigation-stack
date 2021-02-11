import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "lightgrey" }}>
        <TextInput></TextInput>
        <Button title="Push me"></Button>
      </View>
    </ScrollView>
  );
}
