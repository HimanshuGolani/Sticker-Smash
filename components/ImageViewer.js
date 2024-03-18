import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ PreviewImageSource, selectedImage }) {
  const imageSrc = selectedImage ? { uri: selectedImage } : PreviewImageSource;
  return <Image source={imageSrc} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 25,
  },
});
