import * as React from "react";
import { Text, View, Keyboard, Image, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CatalogScreen from "./src/screens/CatalogScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";

import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileScreen from "./src/screens/ProfileScreen";
import TrackScreen from "./src/screens/TrackScreen";

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
      }}
    >
      <Tab.Navigator>
        <Tab.Screen
          name="Track"
          component={TrackScreen}
          options={{
            tabBarLabel: "Track",
            tabBarLabelStyle: ({ focused }) => {
              focused
                ? {
                    color: "blue",
                  }
                : {
                    color: "black",
                  };
            },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="car-wash"
                  size={24}
                  color="blue"
                />
              ) : (
                <MaterialCommunityIcons
                  name="car-wash"
                  size={24}
                  color="black"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Catalog"
          component={CatalogScreen}
          options={{
            tabBarLabel: "Catalog",
            tabBarLabelStyle: ({ focused }) => {
              focused
                ? {
                    color: "blue",
                  }
                : {
                    color: "black",
                  };
            },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Fontisto name="shopping-store" size={24} color="blue" />
              ) : (
                <Fontisto name="shopping-store" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: ({ focused }) => {
              focused
                ? {
                    color: "blue",
                  }
                : {
                    color: "black",
                  };
            },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Fontisto name="person" size={24} color="blue" />
              ) : (
                <Fontisto name="person" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};
