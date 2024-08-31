import {
  View,
  Text,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList() {
  const categoryList = [
    {
      id: 1,
      name: "Private Beach",
      value: "private_beach",
      icon: require("../../../assets/lu-beach.jpg"),
    },
    {
      id: 2,
      name: "Library",
      value: "Library",
      icon: require("../../../assets/lu-beach.jpg"),
    },
    {
      id: 3,
      name: "Library",
      value: "Library",
      icon: require("../../../assets/lu-beach.jpg"),
    },
  ];

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 20 }}>Top places to Visit</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={categoryList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item.name)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
