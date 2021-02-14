import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PicsumImageViewerComponent from "./Components/PicsumViewerComponent";

const Stack = createStackNavigator();

export default function App() {
  return <PicsumImageViewerComponent />;
}
