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
  "https://smartcdn.gprod.postmedia.digital/nexus/wp-content/uploads/2020/07/su.0730-su-silvercity-4.jpg",
  "https://i.cbc.ca/1.5625277.1593014289!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cineplex.jpg ",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQan8CdK8h6TOJwpEkIHjvG6gDlRP8RTXWs-Q&s",
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

export default function SilverCity() {
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
            355 Barrydowne Road, Sudbury, ON, P3B 4K4
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
            Silver City Sudbury is a premier entertainment destination that
            promises an exceptional cinematic experience. Located in the heart
            of Sudbury, this state-of-the-art movie theater features multiple
            screens showcasing the latest blockbusters, independent films, and
            special screenings. Each theater is equipped with comfortable
            seating, cutting-edge sound systems, and high-definition projectors,
            ensuring an immersive viewing experience. The venue also offers a
            variety of concessions, including popcorn, snacks, and beverages,
            making it a perfect spot for movie lovers to relax and enjoy their
            favorite films. .
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
