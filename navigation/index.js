import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { homeScreen } from "../screens/homeScreen";
import { singleTransactionScreen } from "../screens/singleTransactionScreen";

const { Navigator, Screen } = createStackNavigator();

export const Nav = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="home" component={homeScreen} />
        <Screen name="singleTransaction" component={singleTransactionScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
