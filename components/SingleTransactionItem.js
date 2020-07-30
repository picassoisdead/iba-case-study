import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export const SingleTransactionItem = ({
  name,
  surname,
  amount,
  imgSrc,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={imgSrc} />

      <Text style={styles.name}>
        {name} {surname}
      </Text>
      <Text>${amount}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginRight: 30,
  },
  name: {
    fontWeight: "600",
    marginRight: 80,
  },
});
