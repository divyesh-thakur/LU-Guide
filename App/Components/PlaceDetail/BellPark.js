import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";
import GoogeMapView from "../Home/GoogeMapView";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");
const images = [
  "https://www.alltrails.com/_next/image?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDEyNTM3NzMvZDRmNzBiNTJhODY4M2U4OTA0OGVhMzU1MWUyMjA1MzEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDIyLCJoZWlnaHQiOjMxMiwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0%3D&w=3840&q=90 ",
  "https://as1.ftcdn.net/v2/jpg/01/61/85/92/1000_F_161859274_WcHgG8ZAJzblmAXqpOuBVOEInBjP8vJU.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-s/08/d6/bb/99/boardwalk.jpg",
];

const ImageSlider = () => {
  return (
    <View style={styles.container}>
      <Swiper autoplay autoplayTimeout={3} showsPagination={false} loop>
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default function BellPark() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#ffff", height: "100%" }}>
        <View style={{ padding: 10 }}>
          {/* <Image
            style={{ height: 250, width: "100%", borderRadius: 10 }}
            source={require("../../../assets/lu-beach.jpg")}
          /> */}
          <ImageSlider />
          <Text
            style={{ fontSize: 22, padding: 2, color: "gray", marginTop: 10 }}
          >
            Bell Park Paris St. Greater Sudbury, ON P3E 3B6
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" size={20} color={Colors.YELLOW} />
            <Text style={{ marginTop: 2, fontSize: 20, marginLeft: 5 }}>
              4.5 Rated
            </Text>
          </View>
          <Text style={{ fontSize: 20, marginTop: 5, paddingLeft: 5 }}>
            Bell Park is the City’s largest urban waterfront park located in the
            heart of Greater Sudbury on the western shores of Ramsey Lake, an
            ideal natural landscape and favourite local spot drawing both
            visitors and residents for scenic walks along the waterfront, and
            warm sunny days at the beach.Bell Park is named for William J. Bell,
            whose former residence now houses the Art Gallery of Sudbury. The
            park is also home to many cultural events, annual festivals and a
            destination for all ages year-round.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    marginTop: 300,
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  image: {
    width: width,
    height: 250,
    resizeMode: "cover",
  },
});
