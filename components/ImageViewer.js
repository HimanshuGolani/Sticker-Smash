import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ PreviewImageSource }) {
  return <Image source={PreviewImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 25,
  },
});
