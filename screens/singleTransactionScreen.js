import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { dummyData } from "../dummyData";
import { SectionHeader } from "./homeScreen";

export const singleTransactionScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const transaction = getItembyID(id, dummyData);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 15,
          textAlign: "center",
          marginBottom: 40,
          fontWeight: "600",
        }}
      >
        {transaction.name} {transaction.surname}
      </Text>
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          fontWeight: "600",
          marginBottom: 50,
        }}
      >
        ${transaction.transaction_amount}
      </Text>
      <SectionHeader headerText="Transaction Detail" />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <Text>Payment Detail</Text>
        <Text>
          {" "}
          {transaction.transaction_date.getDate()}{" "}
          {monthNames[transaction.transaction_date.getMonth()]}{" "}
          {transaction.transaction_date.getFullYear()}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <Text>Type</Text>
        <Text>{transaction.transaction_type}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "white",
  },
});

const getItembyID = (id, data) => {
  for (let key in data) {
    if (data[key].id == id) {
      return data[key];
    }
  }
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
