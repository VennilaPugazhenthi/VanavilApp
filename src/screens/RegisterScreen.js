import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const onRegister = () => {
    console.log("Register Pressed");
  };

  const onSignInPressed = () => {
    navigation.navigate("customerLogin");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/vanavil_logo.jpg")}
        resizeMode="contain"
      />
      <Text style={styles.heading}>Create an account</Text>
      <CustomInput
        placeholder="Enter your Name"
        value={name}
        setValue={setName}
        type="text"
      />
      <CustomInput
        placeholder="Enter your Phone No"
        value={phoneNo}
        setValue={setPhoneNo}
        type="number"
      />
      <CustomButton onPress={onRegister} text={"Register"} />
      <CustomButton
        onPress={onSignInPressed}
        text={"Already have an account? Sign In"}
        type="TERTIARY"
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
  heading: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#092357",
  },
  logo: {
    height: "25%",
    width: "25%",
    maxHeight: 150,
    maxWidth: 150,
    margin: 0,
  },
});

export default RegisterScreen;
