import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/logo-lu.png")}
      />
      <View>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  searchBar: {
    marginTop: "auto",
    borderWidth: 1,
    borderColor: Colors.black,
    padding: 4,
    borderRadius: 200,
    paddingLeft: 10,
    width: Dimensions.get("screen").width * 0.7,
  },
});
