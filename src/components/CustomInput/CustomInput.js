import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomInput = ({ value, setValue, placeholder, type }) => {
  return (
    <View style={styles.container}>
      {type == "number" ? (
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          style={styles.input}
          keyboardType="number-pad"
          returnKeyType="done"
          textContentType="telephoneNumber"
          dataDetectorTypes="phoneNumber"
          maxLength={10}
        />
      ) : (
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          style={styles.input}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    borderColor: "#565656",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    height: 50,
  },
});

export default CustomInput;
