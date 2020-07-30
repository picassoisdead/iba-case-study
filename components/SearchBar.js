import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        textAlign="center"
        placeholder="Search"
        style={styles.inputText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d9d9e0",
    height: 50,
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginVertical: 20,
  },
  inputText: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 30,
    textAlign: "center",
    fontWeight: "600",
  },
});
