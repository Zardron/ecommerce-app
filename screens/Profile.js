import { StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView>
        <Text>Profile</Text>
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
