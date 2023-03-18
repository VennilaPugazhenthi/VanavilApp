import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./RootNavigation";
import allReducer from "./src/reducers";
import thunk from "redux-thunk";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

export default function App() {
  const store = configureStore({
    reducer: allReducer,
    middleware: [thunk],
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
