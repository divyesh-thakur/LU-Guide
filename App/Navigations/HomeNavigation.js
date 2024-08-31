import { View, Text } from "react-native";
import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import PlaceDetail from "../Components/PlaceDetail/LaurentainBeach";
import Home from "../Screens/Home";
import MoonLightBeach from "../Components/PlaceDetail/MoonLightBeach";
import RamseyLake from "../Components/PlaceDetail/RamseyLake";
import BellPark from "../Components/PlaceDetail/BellPark";
import SilverCity from "../Components/PlaceDetail/SilverCity";
import NewSudburyMall from "../Components/PlaceDetail/NewSudburyMall";
import DynamicEarth from "../Components/PlaceDetail/DynamicEarth";
import OnapingFalls from "../Components/PlaceDetail/OnapingFalls";
import SudburyArena from "../Components/PlaceDetail/SudburyArena";
import UrbanAirTrampoline from "../Components/PlaceDetail/UrbanAirTrampoline";

export default function HomeNavigation() {
  const isAndriod = true;
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      //   screenOptions={{
      //     gestureEnabled: true,
      //     // headerShown: false,
      //     ...(isAndriod && TransitionPresets.ModalPresentationIOS),
      //   }}
      screenOptions={{
        headerTitleAlign: "center", // This will align the header title to center
        headerTitleStyle: {
          fontSize: 25, // Increase the font size of the title
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home", // This is the title that will be centered
        }}
      />
      <Stack.Screen
        name="Laurentain Beach"
        component={PlaceDetail}
        screenOptions={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="MoonLight Beach"
        component={MoonLightBeach}
        screenOptions={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Ramsey Lake"
        component={RamseyLake}
        screenOptions={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Bell Park"
        component={BellPark}
        screenOptions={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Silver City"
        component={SilverCity}
        screenOptions={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="New Sudbury Mall"
        component={NewSudburyMall}
        screenOptions={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Dynamic Earth"
        component={DynamicEarth}
        screenOptions={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Onaping Falls"
        component={OnapingFalls}
        screenOptions={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Sudbury Community Arena"
        component={SudburyArena}
        screenOptions={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Urban AirTrampoline and Adventure Park"
        component={UrbanAirTrampoline}
        screenOptions={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}
