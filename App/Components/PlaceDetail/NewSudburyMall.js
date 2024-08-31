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
  "https://mitchelljensen.ca/wp-content/uploads/2017/06/3.jpg",
  "https://mitchelljensen.ca/wp-content/uploads/2017/06/1-Fullscreen.jpg",
  "https://i0.wp.com/hitrefreshsudbury.ca/wp-content/uploads/2021/08/nsc.jpg",
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

export default function NewSudburyMall() {
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
            1349 Lasalle Blvd, Greater Sudbury, ON P3A 1Z2
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
            Welcome to New Sudbury Centre, Northern Ontario’s largest shopping
            centre, featuring over 100 stores and services. The centre’s anchor
            stores include Wal-Mart, Shoppers Drug Mart and SportChek, along
            with retailers such as H&M, Sephora, Lululemon, Roots, American
            Eagle and Linen Chest and a food court offering something for
            everyone’s taste.This large Z-shaped mall, anchored by Sears and
            Shoppers Drug Mart on the east and Walmart on the west contains all
            the shops from bargain to high end that the travelling shopper could
            wish for. A sizeable food court houses all the usual fast food
            outlets such as Canadian icon, Tim Hortons, and Dairy Queen.
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
