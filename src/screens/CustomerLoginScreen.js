import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

const CustomerLoginScreen = () => {
  const [phoneNo, setPhoneNo] = useState("");

  const onSignInPressed = () => {
    console.warn("Sign In");
  };

  const onCreateNewAccount = () => {
    console.warn("Create Account");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/vanavil_logo.jpg")}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Enter your Phone Number"
        value={phoneNo}
        setValue={setPhoneNo}
      />

      <CustomButton onPress={onSignInPressed} text={"Sign In"} />
      <CustomButton
        onPress={onCreateNewAccount}
        text={"Create new account"}
        type="TERITARY"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    height: "40%",
    width: "40%",
    maxHeight: 300,
    maxWidth: 300,
  },
});

export default CustomerLoginScreen;
