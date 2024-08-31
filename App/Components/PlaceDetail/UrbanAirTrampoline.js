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
  "https://www.vmcdn.ca/f/files/sudbury/uploadedImages/news/lifestyle/2017/11/141117_urban_air_park-zipline.jpg ",
  "https://i.ytimg.com/vi/jjusnkBe4JE/maxresdefault.jpg",
  "https://www.vmcdn.ca/f/files/sudbury/uploadedImages/news/localNews/2019/03/100319_kf_urban_air_2.JPG;w=960;h=640;bgcolor=000000",
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
            Urban Air Trampoline and Adventure Park in Sudbury is the ultimate
            destination for thrill-seekers and families looking for a day of
            excitement and fun. This indoor park is packed with a variety of
            attractions that cater to all ages, making it a perfect spot for
            birthday parties, group events, or simply a day out. The trampoline
            area features wall-to-wall trampolines where visitors can jump,
            flip, and soar to their heart's content. For those looking to test
            their skills, the park also offers a range of challenging obstacle
            courses, including a warrior course that mimics popular TV shows and
            a ropes course that tests balance and agility.
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
