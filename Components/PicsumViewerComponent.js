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

const PicsumImageViewerComponent = () => {
  const [inputValue, setInputValue] = useState("defaultValue");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios("https://picsum.photos/v2/list");
      setUsers(result.data);
    })();
  }, []);
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <Image
          style={{ width: 400, height: 400 }}
          source={{ uri: item.download_url }}
        />
      )}
      style={{ paddingTop: 50 }}
    />
  );
};

export default PicsumImageViewerComponent;
