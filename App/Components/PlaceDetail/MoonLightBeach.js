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
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/a4/67/16/view-from-the-small-parking.jpg?w=1200&h=-1&s=1 ",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/3a/d1/ff/20150917-121023-largejpg.jpg?w=1100&h=-1&s=1",
  "https://northernontario.ctvnews.ca/content/dam/ctvnews/en/images/2020/6/18/moonlight-beach-in-sudbury-1-4989535-1661273696362.jpg ",
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

export default function MoonLightBeach() {
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
            Moonlight Beach Avenue, Sudbury, Ontario P3B 3V7 Canada
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
            Moonlight Beach in Sudbury is a hidden gem that promises an
            unforgettable experience for every visitor. Nestled along the shores
            of Ramsey Lake, this picturesque spot offers a perfect blend of
            natural beauty and recreational activities. Surrounded by lush
            greenery and sparkling waters, Moonlight Beach provides breathtaking
            views and serene landscapes, particularly during sunsets that paint
            the sky in hues of orange and pink. This family-friendly beach
            features clean, sandy shores and shallow waters, making it ideal for
            children to play safely. The well-maintained picnic areas and
            playground add to its charm, creating a perfect setting for a
            fun-filled day with loved ones.
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
