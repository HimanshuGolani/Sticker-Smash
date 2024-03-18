import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image } from 'react-native';
import PreviewImg from "./assets/background-image.png"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PreviewImg} style={styles.image}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    flex:1,
    paddingTop:58,
  },
  image:{
    width:320,
    height:440,
    borderRadius:25,
  }
});
