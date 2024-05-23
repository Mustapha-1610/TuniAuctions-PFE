import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function App() {
  const Title = "Your Title Here";

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/DisplayImages%2Fapple-event-5_1712637095378.jpeg?alt=media&token=c003f2ee-09b7-410e-8a54-acd223bdc46c",
        }}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>{Title}</Text>
        <TouchableOpacity style={styles.button}>
          <Link href={"/bidders"} style={styles.buttonText}>
            Browse
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: 800,
  },
  title: {
    marginTop: 52,
    fontSize: 64,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  button: {
    marginTop: 12,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "slategray",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});
