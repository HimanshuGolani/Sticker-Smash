import { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Platform,
  Pressable,
} from "react-native";

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require("../assets/images/emoji1.jpeg"),
    require("../assets/images/emoji2.jpg"),
  ]);

  return (
    <View style={styles.listContainer}>
      {emoji.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} style={styles.image} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
