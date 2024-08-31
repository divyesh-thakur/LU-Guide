import { View, Text } from "react-native";
import React from "react";
import GoogleMapFullView from "../Components/Search/GoogleMapFullView";
import SearchBar from "../Components/Search/SearchBar";

export default function Search() {
  return (
    <View>
      <View style={{ position: "absolute", zIndex: 20 }}>
        <SearchBar />
      </View>
      <GoogleMapFullView />
    </View>
  );
}
