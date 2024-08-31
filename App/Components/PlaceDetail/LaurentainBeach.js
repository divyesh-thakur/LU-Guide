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
  "https://imgservice.petfriendly.io/500x245/quiet-oasis-close-to-ca-deep-river-ha-1279946974-0.jpg",
  "https://blog.laurentians.com/wp-content/uploads/2021/07/Plage_parc_Oka_750x500.jpg",
  "https://destinationpontiac.ca/app/uploads/2023/06/destination-pontiac-norway-bay-2-632x368.jpg",
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

export default function LaurentainBeach() {
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
            211 Countryside Dr, Sudbury, ON P3E 4G6
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
            Laurentian Beach is located on the northeast shoreline of Nepahwin
            Lake. It is a private beach for students at Laurentian University.
            This beach is ideal for students looking to relax in a secluded,
            relatively quiet outdoor space. Laurentian Beach can be accessed on
            foot from the university via trails from Thornloe College. This
            student sanctuary is not supervised by lifeguards so those who
            decided to go swimming should very careful as the water gets deep
            quickly. Nepahwin Lake is a freshwater lake, naturally formed by
            glaciers over 10 000 years ago and is one of the deepest lakes
            within Sudbury. The name Nepahwin is derived from an old native term
            meaning “sleeping lake” which was voted in by the community on
            August 4th 1949.
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
