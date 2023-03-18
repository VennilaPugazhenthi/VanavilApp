import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomerLoginScreen from "./src/screens/CustomerLoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="customerLogin"
        component={CustomerLoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
