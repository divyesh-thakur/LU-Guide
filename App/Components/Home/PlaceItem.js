import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function PlaceItem({ heading, info, imageUri }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginTop: 20,
      }}
    >
      <Image
        source={imageUri}
        style={{ width: 100, height: 100, borderRadius: 15 }}
      />
      <View style={{ flex: 1 }}>
        <Text numberOfLines={2} style={{ fontSize: 18, marginBottom: 5 }}>
          {heading}
        </Text>
        <Text numberOfLines={2} style={{ fontSize: 18, marginBottom: 10 }}>
          {info}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text> 4</Text>
        </View>
      </View>
    </View>
  );
}
