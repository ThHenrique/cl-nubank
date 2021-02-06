import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function Tabs() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentStyle={styles.tabsContentContainer}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
      >
        <View style={styles.tabItem}>
          <MaterialIcons name="person-add" size={24} color="#FFF" />
          <Text style={styles.tabText}>Indicar amigos</Text>
        </View>

        <View style={styles.tabItem}>
          <MaterialIcons name="chat-bubble-outline" size={24} color="#FFF" />
          <Text style={styles.tabText}>Cobrar</Text>
        </View>

        <View style={styles.tabItem}>
          <MaterialIcons name="arrow-downward" size={24} color="#FFF" />
          <Text style={styles.tabText}>Depositar</Text>
        </View>

        <View style={styles.tabItem}>
          <MaterialIcons name="arrow-upward" size={24} color="#FFF" />
          <Text style={styles.tabText}>Transferir</Text>
        </View>

        <View style={styles.tabItem}>
          <MaterialIcons name="lock" size={24} color="#FFF" />
          <Text style={styles.tabText}>Bloquear cartão</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 20,
    marginBottom: 20,
  },

  tabsContentContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  tabItem: {
    backgroundColor: "#9823c5",

    width: 100,
    height: 100,
    justifyContent: "space-between",
    borderRadius: 3,

    marginLeft: 10,
    padding: 10,
  },

  tabText: {
    fontSize: 13,
    color: "#FFF",
    marginTop: 30,
  },
});
