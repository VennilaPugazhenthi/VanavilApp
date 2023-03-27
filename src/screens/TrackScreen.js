import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const TrackScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CAR WASH SCREEN</Text>
      <Image
        style={{ height: 100 }}
        source={require("../assets/hatchback.png")}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
  },
});

export default TrackScreen;
