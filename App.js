import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PicsumImageViewerComponent from "./Components/PicsumViewerComponent";
import AboutComponent from "./Components/AboutComponent";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PicsumImageViewerComponent} />
        <Stack.Screen name="About" component={AboutComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
