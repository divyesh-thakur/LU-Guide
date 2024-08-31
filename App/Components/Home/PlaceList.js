import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import { useNavigation } from "@react-navigation/native";

export default function PlaceList({ placeList }) {
  const navigator = useNavigation();
  const onPlaceClick = () => {
    navigator.navigate("Laurentain Beach");
  };
  const onClickMoonLight = () => {
    navigator.navigate("MoonLight Beach");
  };

  const onClickRamseyLake = () => {
    navigator.navigate("Ramsey Lake");
  };
  const onClickBellPark = () => {
    navigator.navigate("Bell Park");
  };
  const onClickSilverCity = () => {
    navigator.navigate("Silver City");
  };
  const onClickSudburyMall = () => {
    navigator.navigate("New Sudbury Mall");
  };
  const onClickDynamicEarth = () => {
    navigator.navigate("Dynamic Earth");
  };
  const onClickOnapingFalls = () => {
    navigator.navigate("Onaping Falls");
  };
  const onClickSudburyArena = () => {
    navigator.navigate("Sudbury Community Arena");
  };
  const onClickUrbanAirTrampoline = () => {
    navigator.navigate("Urban AirTrampoline and Adventure Park");
  };
  return (
    <View>
      <Text style={{ fontSize: 20, marginTop: 10 }}>
        Found 10 Mostly visited places
      </Text>
      <TouchableOpacity onPress={() => onPlaceClick()}>
        <PlaceItem
          imageUri={require("../../../assets/lu-beach.jpg")}
          heading={"Laurentian Beach"}
          info={
            "It is a private beach for students at Laurentian University. This beach is ideal for students looking to relax in a secluded, relatively quiet outdoor space."
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onClickMoonLight()}>
        <PlaceItem
          imageUri={require("../../../assets/moonlight-beach.jpeg")}
          heading={"Moon Light Beach/Trails"}
          info={
            "Moonlight Beach in Sudbury, Ontario, is a popular destination known for its beautiful sandy shores and clear waters."
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onClickRamseyLake()}>
        <PlaceItem
          imageUri={require("../../../assets/ramsey-lake.jpg")}
          heading={"Ramsey Lake"}
          info={
            "Ramsey Lake is located in the Ramsey Watershed. The lake receives drainage from Minnow Lake and several other creeks on the north shore and Laurentian Lake on the south shore. "
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onClickBellPark()}>
        <PlaceItem
          imageUri={require("../../../assets/bell-park.jpg")}
          heading={"Bell Park"}
          info={
            "Bell Park is the City’s largest urban waterfront park located in the heart of Greater Sudbury on the western shores of Ramsey Lake, an ideal natural landscape and favourite local spot drawing both visitors and residents for scenic walks along the waterfront, and warm sunny days at the beach."
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onClickSilverCity()}>
        <PlaceItem
          imageUri={require("../../../assets/silver-city.jpg")}
          heading={"Silver City"}
          info={
            "Modern multiplex cinema chain screening the latest Hollywood films, plus new independent releases.."
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onClickSudburyMall()}>
        <PlaceItem
          imageUri={require("../../../assets/new-sudbury-mall.jpg")}
          heading={"New Sudbury Mall"}
          info={
            "Northern Ontario’s largest shopping centre, featuring over 100 stores and services.The centre’s anchor stores include Wal-Mart, Shoppers Drug Mart and SportChek, along with retailers such as H&M, Sephora, Lululemon, Roots, American Eagle and Linen Chest and a food court offering something for everyone’s taste."
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onClickDynamicEarth()}>
        <PlaceItem
          imageUri={require("../../../assets/dynamic-earth.jpg")}
          heading={"Dynamic Earth"}
          info={
            "Dynamic Earth, home of the Big Nickel, is an immersive, hands-on science centre that features earth science and mining experiences."
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onClickOnapingFalls()}>
        <PlaceItem
          imageUri={require("../../../assets/onaping-falls.jpg")}
          heading={"Onaping falls"}
          info={
            "Onaping Falls was a town in the Canadian province of Ontario, which existed from 1973 to 2000. It was created as part of the Regional Municipality of Sudbury, and took its name from the waterfalls on the Onaping River."
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onClickSudburyArena()}>
        <PlaceItem
          imageUri={require("../../../assets/sudbury-arena.jpg")}
          heading={"Sudbury Communtiy Arena"}
          info={
            "The Sudbury Community Arena is a multi-purpose arena in the downtown core of Greater Sudbury, Ontario, Canada."
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onClickUrbanAirTrampoline()}>
        <PlaceItem
          imageUri={require("../../../assets/urban-air-trampoline.jpg")}
          heading={"Urban Air Trampoline and Adventure Park"}
          info={
            "Large-scale indoor trampoline center hosting open jump, fitness classes, dodgeball & parties. "
          }
        />
      </TouchableOpacity>
    </View>
  );
}
