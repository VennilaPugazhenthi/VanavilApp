import * as React from "react";
import { Text, View, Keyboard, Image, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CatalogScreen from "./src/screens/CatalogScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";

import {
  Feather,
  Ionicons,
  SimpleLineIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const tabOptions = {
  tabBarOptions: {
    activeTintColor: "#3D5A80",
    inactiveTintColor: "#989DA4",
    showIcon: true,
    upperCaseLabel: false,
    style: {
      backgroundColor: "white",
    },
    labelStyle: {
      fontSize: 9,
    },
    indicatorStyle: {
      backgroundColor: "black",
    },
    pressColor: "#3D5A80",
  },
  lazy: true,
};

export default TabScreen = (props) => {
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        justifyContent: "center",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#505050",
      }}
      barStyle="dark-content"
    >
      <Tab.Navigator>
        <Tab.Screen
          name="Catalog"
          component={CatalogScreen}
          options={{
            tabBarLabel: "Catalog",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Feather name="home" size={24} color="blue" />
              ) : (
                <Feather name="home" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};
