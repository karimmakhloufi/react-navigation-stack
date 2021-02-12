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
  FlatList,
} from "react-native";

import axios from "axios";

export default function App() {
  const [inputValue, setInputValue] = useState("defaultValue");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios("https://picsum.photos/v2/list");
      setUsers(result.data);
    })();
  }, []);
  return (
    <ScrollView style={{ paddingTop: 50 }}>
      {users
        ? users.map((el, index) => (
            <View key={index}>
              <Text>{el.email}</Text>
              <Image
                style={{ width: 400, height: 400 }}
                source={{ uri: el.download_url }}
              />
            </View>
          ))
        : null}
    </ScrollView>
  );
}
