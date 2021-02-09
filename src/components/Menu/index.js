import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";

import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

import * as OnTapIconsHeader from "../../store/actions/iconsHeader";

export default function Menu() {
  return (
    <ScrollView
      style={styles.container}
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.code}>
        <MaterialIcons name="qr-code-2" color="#FFF" size={100} />
      </View>

      <Text style={styles.acountText}>
        Agência 1234 Conta 123456789-0 Banco 260 - Nu Pagamentos S.A.
      </Text>

      <View style={styles.menuItem}>
        <MaterialIcons name="help-outline" color="#FFF" size={30} />
        <Text style={styles.menuText}>Me Ajuda</Text>
        <MaterialIcons name="keyboard-arrow-right" color="#FFF" size={30} />
      </View>

      <View style={styles.menuItem}>
        <MaterialIcons name="person-outline" color="#FFF" size={30} />
        <Text style={styles.menuText}>Perfil</Text>
        <MaterialIcons name="keyboard-arrow-right" color="#FFF" size={30} />
      </View>

      <View style={styles.menuItem}>
        <MaterialIcons name="monetization-on" color="#FFF" size={30} />
        <Text style={styles.menuText}>Configurar conta</Text>
        <MaterialIcons name="keyboard-arrow-right" color="#FFF" size={30} />
      </View>

      <View style={styles.menuItem}>
        <MaterialIcons name="api" color="#FFF" size={30} />
        <Text style={styles.menuText}>Minhas chaves Pix</Text>
        <MaterialIcons name="keyboard-arrow-right" color="#FFF" size={30} />
      </View>

      <View style={styles.menuItem}>
        <MaterialIcons name="credit-card" color="#FFF" size={30} />
        <Text style={styles.menuText}>Configurar cartão</Text>
        <MaterialIcons name="keyboard-arrow-right" color="#FFF" size={30} />
      </View>

      <View style={styles.menuItem}>
        <MaterialIcons name="house" color="#FFF" size={30} />
        <Text style={styles.menuText}>Pedir conta PJ</Text>
        <MaterialIcons name="keyboard-arrow-right" color="#FFF" size={30} />
      </View>

      <View style={styles.menuItem}>
        <MaterialIcons name="mail-outline" color="#FFF" size={30} />
        <Text style={styles.menuText}>Configurar notificações</Text>
        <MaterialIcons name="keyboard-arrow-right" color="#FFF" size={30} />
      </View>

      <View style={styles.menuItem}>
        <MaterialIcons name="app-settings-alt" color="#FFF" size={30} />
        <Text style={styles.menuText}>Configurações do app</Text>
        <MaterialIcons name="keyboard-arrow-right" color="#FFF" size={30} />
      </View>

      <View style={styles.menuItem}>
        <MaterialIcons name="help-outline" color="#FFF" size={30} />
        <Text style={styles.menuText}>Sobre</Text>
        <MaterialIcons name="keyboard-arrow-right" color="#FFF" size={30} />
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>ACESSAR OUTRA CONTA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>SAIR DO APP</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },

  code: {
    alignItems: "center",
    marginTop: 30,
  },

  acountText: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "600",
    textAlign: "center",

    marginTop: 20,
    marginBottom: 30,
  },

  menuItem: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#BBB",

    height: 80,
    paddingHorizontal: 30,

    flexDirection: "row",
    alignItems: "center",
  },

  menuText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",

    width: "80%",
    marginLeft: 20,
  },

  viewButton: {
    marginTop: 20,
    marginBottom: 20,

    justifyContent: "space-around",
    alignItems: "center",
  },

  button: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 4,

    height: 50,
    width: "100%",
    marginBottom: 20,

    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
