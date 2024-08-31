import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function PlaceItem({ place }) {
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
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo" +
            "?maxwidth=400" +
            "&photo_reference=" +
            place?.photos[0]?.photo_reference +
            "&key=AIzaSyD8sachYvmPciPxRtVgh8c-y9z1v9CnoHw",
        }}
        style={{ width: 100, height: 100, borderRadius: 15 }}
      />
      <View style={{ flex: 1 }}>
        <Text numberOfLines={2} style={{ fontSize: 18, marginBottom: 5 }}>
          {place.name}
        </Text>
        <Text numberOfLines={2} style={{ fontSize: 18, marginBottom: 10 }}>
          {place.vicinity}
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
          <Text>{place.rating}</Text>
        </View>
      </View>
    </View>
  );
}
