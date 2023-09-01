import { StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView>
        <Text>Search</Text>
      </SafeAreaView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({});
