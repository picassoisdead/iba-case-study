import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

import { SearchBar } from "../components/SearchBar";
import {} from "react-native-gesture-handler";
import { SingleTransactionItem } from "../components/SingleTransactionItem";
import { dummyData } from "../dummyData";

export const homeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Transactions</Text>

      <SearchBar />

      <SectionHeader headerText={"Performance"} />

      <SectionHeader headerText={"Transactions"} />
      <View style={{ paddingHorizontal: 7 }}>
        <FlatList
          scrollEnabled={true}
          data={dummyData}
          renderItem={({ item }) => (
            <SingleTransactionItem
              name={item.name}
              surname={item.surname}
              amount={item.transaction_amount}
              imgSrc={item.image}
              onPress={() =>
                navigation.navigate("singleTransaction", { id: item.id })
              }
            />
          )}
        />
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
  headerText: {
    fontWeight: "600",
    color: "#36424a",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export const SectionHeader = ({ headerText }) => {
  return (
    <View style={{ paddingHorizontal: 3 }}>
      <Text style={{ fontWeight: "600", color: "#36424a", fontSize: 15 }}>
        {headerText}
      </Text>
      <View
        style={{ backgroundColor: "#eff1f2", height: 3, marginVertical: 15 }}
      ></View>
    </View>
  );
};
