import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { MaterialIcons } from "@expo/vector-icons";
import * as VisibilityValues from "../../store/actions/visibilityValues";
import * as OnTapIconsHeader from "../../store/actions/iconsHeader";

export default function Header() {
  const [visibility, setVisibility] = React.useState(true);
  const dispatch = useDispatch();

  const showIconHeader = useSelector(
    (state) => state.iconsHeader.showSettings,
    [showIconHeader]
  );

  const handleVisibility = () => {
    dispatch(VisibilityValues.handleVisibilityValues(!visibility));

    setVisibility(!visibility);
  };

  const handleSettings = (showSettings) => {
    dispatch(OnTapIconsHeader.onTapSettings(showSettings));
  };

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.textName} numberOfLines={1} ellipsizeMode="tail">
          Olá, Henrique Ferreiraaaaaaaaaaaaaaaaaaa
        </Text>
      </View>

      {!showIconHeader ? (
        <View style={styles.buttonsView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleVisibility()}
          >
            {visibility ? (
              <MaterialIcons name="visibility-off" color="#FFF" size={24} />
            ) : (
              <MaterialIcons name="visibility" color="#FFF" size={24} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSettings(true)}
          >
            <MaterialIcons name="settings" color="#FFF" size={24} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonsView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSettings(false)}
          >
            <MaterialIcons name="close" color="#FFF" size={24} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,

    paddingHorizontal: 20,
  },

  textView: {
    flex: 1,
    flexDirection: "row",

    alignItems: "center",
  },

  textName: {
    fontSize: 32,
    color: "#FFF",
    fontWeight: "bold",
  },

  buttonsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginLeft: 10,
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
