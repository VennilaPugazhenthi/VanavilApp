import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

const CustomerLoginScreen = ({ navigation }) => {
  const [phoneNo, setPhoneNo] = useState("");

  const onSignInPressed = () => {
    navigation.navigate("tab");
  };

  const onCreateNewAccount = () => {
    navigation.navigate("register");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/vanavil_logo.jpg")}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.name}>VANAVIL CAR CARE</Text>
      </View>
      <CustomInput
        placeholder="Enter your Phone Number"
        value={phoneNo}
        setValue={setPhoneNo}
        type="number"
      />

      <CustomButton onPress={onSignInPressed} text={"Sign In"} />
      <CustomButton
        onPress={onCreateNewAccount}
        text={"Don't have an account? Create one"}
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
  logo: {
    height: "40%",
    width: "40%",
    maxHeight: 300,
    maxWidth: 300,
    margin: 0,
  },
  name: {
    fontWeight: "bold",
    marginTop: 0,
    fontSize: 25,
    color: "#092357",
    textAlign: "center",
  },
});

export default CustomerLoginScreen;
