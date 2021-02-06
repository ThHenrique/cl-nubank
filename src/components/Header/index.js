import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.textName}>Olá</Text>
        <Text style={styles.textName}>Henrique</Text>
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <MaterialIcons name="visibility" color="#FFF" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <MaterialIcons name="settings" color="#FFF" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,

    padding: 10,
  },

  textView: {
    flexDirection: "row",

    alignItems: "center",
  },

  textName: {
    fontSize: 22,
    color: "#FFF",
    marginLeft: 10,
    fontWeight: "bold",
  },

  buttonsView: {
    flexDirection: "row",
    alignItems: "center",
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 50,

    backgroundColor: "#9823c5",

    justifyContent: "center",
    alignItems: "center",

    margin: 2,
  },
});
