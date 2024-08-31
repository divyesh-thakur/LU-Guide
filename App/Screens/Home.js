import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Home/Header";
import GoogeMapView from "../Components/Home/GoogeMapView";
import CategoryList from "../Components/Home/CategoryList";
import GlobalApi from "../Services/GlobalApi";
import PlaceList from "../Components/Home/PlaceList";
export default function Home() {
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    GetNearBySearchPlace();
  }, []);

  const GetNearBySearchPlace = () => {
    GlobalApi.nearByPlace().then((resp) => {
      setPlaceList(resp.data.results);
    });
  };
  return (
    <ScrollView style={{ padding: 20, flex: 1 }}>
      {/* <Header /> */}
      <GoogeMapView />
      {/* <CategoryList /> */}
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
}
