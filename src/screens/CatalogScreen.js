import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const CatalogScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CATALOG SCREEN</Text>
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

export default CatalogScreen;
