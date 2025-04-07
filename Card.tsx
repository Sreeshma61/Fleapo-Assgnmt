import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card({ title, subtitle }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "black",
width: 361,
height: 64,
justifyContent: "space-between",
borderBottomWidth: 0.50,
paddingBottom: 16,
borderBottom: "#FFFFFF1A",
paddingLeft:16
 },
  title: { fontSize: 18, fontWeight: "bold",color:"white" },
  subtitle: { fontSize: 14, color: "white" },
});