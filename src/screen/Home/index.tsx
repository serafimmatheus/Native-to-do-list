import React from "react";
import { Text, View, StatusBar } from "react-native";
import { styles } from "./style";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
};
