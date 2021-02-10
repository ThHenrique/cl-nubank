import React from "react";
import { View, StyleSheet } from "react-native";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";

export default function ShimmerMain() {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <ShimmerPlaceholder style={styles.textView} />
        <View style={styles.buttonsView}>
          <ShimmerPlaceholder style={styles.button} />
          <ShimmerPlaceholder style={styles.button} />
        </View>
      </View>

      {Array(2)
        .fill()
        .map((card) => (
          <View key={card} style={styles.card}>
            <ShimmerPlaceholder style={styles.row} />
            <ShimmerPlaceholder style={styles.secondRow} />
          </View>
        ))}

      <View style={styles.tabs}>
        {Array(5)
          .fill()
          .map((tab) => (
            <View key={tab} style={styles.tabItem}>
              <ShimmerPlaceholder style={styles.header} />
              <ShimmerPlaceholder style={styles.body} />
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },

  headerView: {
    flexDirection: "row",

    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },

  textView: {
    flex: 1,
    height: 38,

    opacity: 0.6,
  },

  buttonsView: {
    flexDirection: "row",

    marginLeft: 10,
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 50,

    opacity: 0.4,

    margin: 2,
  },

  card: {
    height: 150,

    padding: 20,
    marginBottom: 10,

    backgroundColor: "#5F0582",
    opacity: 0.7,
  },

  row: {
    height: 28,
    opacity: 0.9,
  },

  secondRow: {
    height: 24,
    width: "100%",
    marginTop: 25,

    opacity: 0.7,
  },

  tabs: {
    height: 100,
    marginTop: 20,
    marginBottom: 20,

    flexDirection: "row",
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

  header: {
    height: 30,
    width: 30,

    opacity: 0.5,
  },

  body: {
    height: 20,
    width: "100%",

    opacity: 0.4,
  },
});
