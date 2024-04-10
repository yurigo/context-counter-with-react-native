import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../views/HomeScreen";
import IncrementScreen from "../views/IncrementScreen";
import DecrementScreen from "../views/DecrementScreen";

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Increment" component={IncrementScreen} />
        <Stack.Screen name="Decrement" component={DecrementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
