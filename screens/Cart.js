import { StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView>
        <Text>Cart</Text>
      </SafeAreaView>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({});
