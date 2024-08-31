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
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHdL_89gQLfyccq8r3iOCD51l8Dtn9IhnTQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW0FAG-q04ZcTGJvFYlEU05yG_AvijLss8w&s ",
  "https://i.cbc.ca/1.7175687.1713322152!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/sudbury-arena.jpg  ",
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
            Sudbury Community Arena is a central hub of activity and
            entertainment in the heart of Sudbury, offering a versatile space
            for sports, concerts, and community events. This iconic venue, with
            a seating capacity of over 4,600, is primarily known as the home of
            the Sudbury Wolves, the city’s beloved junior hockey team. The arena
            boasts modern facilities, including a state-of-the-art ice rink,
            spacious seating, and excellent sightlines, ensuring an exciting and
            comfortable experience for all spectators. Whether you're a die-hard
            hockey fan or simply looking for a thrilling outing, the energetic
            atmosphere during a Wolves game is truly infectious and captures the
            spirit of the Sudbury community.
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
