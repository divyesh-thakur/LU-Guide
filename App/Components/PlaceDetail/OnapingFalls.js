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
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/07/43/84/onaping-falls.jpg?w=1200&h=1200&s=1 ",
  "https://ontariohiking.com/wp-content/uploads/2021/09/Onaping-Falls-Title.jpg",
  "https://ivebeenbit.ca/wp-content/uploads/2018/10/195-Onaping-Falls-Ontario-Autumn-767x479.jpg ",
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

export default function OnapingFalls() {
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
            Onaping Falls in Sudbury is a breathtaking natural wonder that
            captivates visitors with its stunning beauty and serene ambiance.
            Located in the heart of Northern Ontario, the falls cascade down a
            rugged landscape, creating a mesmerizing display of rushing water
            and mist. The scenic surroundings, with their lush forests and rocky
            terrain, provide a perfect backdrop for nature lovers and
            photographers alike. The area is particularly enchanting during the
            autumn months when the foliage transforms into a vibrant tapestry of
            reds, oranges, and yellows, making it an ideal destination for a
            picturesque escape.
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
