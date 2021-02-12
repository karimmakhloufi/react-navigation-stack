import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Image,
} from "react-native";

import axios from "axios";

export default function App() {
  const [inputValue, setInputValue] = useState("defaultValue");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios("https://randomuser.me/api/?results=50");
      setUsers(result.data.results);
    })();
  }, []);
  return (
    <ScrollView style={{ paddingTop: 50 }}>
      {users.length > 0
        ? users.map((el, index) => (
            <View key={index}>
              <Text>{el.email}</Text>
              <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: el.picture.large }}
              />
            </View>
          ))
        : null}
    </ScrollView>
  );
}
