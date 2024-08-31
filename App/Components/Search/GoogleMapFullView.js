import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Dimensions } from "react-native";
import { UserLocationContext } from "../../Context/UserLocationContext";

export default function GoogleMapFullView() {
  const [mapRegion, setMapRegion] = useState([]);

  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  }, [location]);
  return (
    <View style={{ display: "flex", flex: 1, marginTop: 50 }}>
      <MapView
        style={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height * 0.9,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      ></MapView>
    </View>
  );
}
