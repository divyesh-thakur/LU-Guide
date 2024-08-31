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
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Sudbury_sunset.JPG/220px-Sudbury_sunset.JPG",
  "https://as1.ftcdn.net/v2/jpg/01/61/85/92/1000_F_161859274_WcHgG8ZAJzblmAXqpOuBVOEInBjP8vJU.jpg",
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/ramsey-lake-sudbury-aqnus-febriyant.jpg",
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

export default function RamseyLake() {
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
            Ramsey Lake was also the site of one of the city's first major
            environmental reclamation projects. Due to air pollution problems in
            the area, the lake — which has few water flow outlets — was
            considered a dead lake for many years. However, following the 1972
            construction of the Inco Superstack, which dispersed smelter
            emissions from the city's mining industry over a wider area, a major
            environmental project was launched to clean up the lake's water and
            reintroduce aquatic life.
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
