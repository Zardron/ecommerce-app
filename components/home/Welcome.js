import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { Feather } from "@expo/vector-icons";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeText(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.seachInput}
            value=""
            onPressIn={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
