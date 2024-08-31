import { View, Text, Dimensions, Touchable } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";
import { LinearGradient } from "expo-linear-gradient";
export default function SearchBar() {
  return (
    <View style={{}}>
      {/* <LinearGradient
        colors={[Colors.GRAY, "transparent"]}
        style={{
          padding: 20,
          width: Dimensions.get("screen").width * 0.88,
          height: Dimensions.get("screen").height * 0.14,
        }}
      >
        <Text style={{ fontSize: 35, fontWeight: 600, marginTop: 35 }}>
          {" "}
          Discover
        </Text>
      </LinearGradient> */}

      <Text
        style={{
          fontSize: 35,
          fontWeight: 600,
          marginTop: 60,
          marginLeft: 100,
          color: "#012B57",
          textAlign: "center",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Discover
      </Text>
    </View>
  );
}
