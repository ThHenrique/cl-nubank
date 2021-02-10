import React, { useEffect } from "react";

import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { MaterialIcons } from "@expo/vector-icons";

import * as IsLoadingComponent from "../store/actions/shimmerMain";

import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Menu from "../components/Menu";
import ShimmerMain from "../shimmer/ShimmerMain";

import RewardsImage from "../images/rewards.png";

export default function Main() {
  const dispatch = useDispatch();

  const visibilityValues = useSelector(
    (state) => state.visibilityValues.visibility,
    [visibilityValues]
  );

  const showMenu = useSelector((state) => state.iconsHeader.showSettings, [
    showMenu,
  ]);

  const loadingComponent = useSelector((state) => state.shimmerMain.loading, [
    loadingComponent,
  ]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(IsLoadingComponent.isLoadingComponent(false));
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        {loadingComponent ? (
          <ShimmerMain />
        ) : (
          <>
            <Header />

            {showMenu ? (
              <Menu />
            ) : (
              <>
                <ScrollView
                  style={styles.content}
                  overScrollMode="never"
                  showsVerticalScrollIndicator={false}
                >
                  <View style={styles.card}>
                    <View style={styles.cardHeader}>
                      <MaterialIcons
                        name="credit-card"
                        size={28}
                        color="#BBB"
                      />
                      <Text style={styles.title}>Cartão de crédito</Text>
                    </View>

                    <Text style={styles.subtitle}>Fatura atual</Text>

                    {visibilityValues ? (
                      <>
                        <View style={styles.cardBody}>
                          <Text style={styles.monetaryValue}>R$ 24.887.59</Text>
                        </View>
                        <View style={styles.cardFooter}>
                          <Text style={styles.textFooter}>
                            Limite disponível
                          </Text>
                          <Text style={styles.monetaryValueFooter}>
                            R$ 38.444,00
                          </Text>
                        </View>
                      </>
                    ) : (
                      <View style={styles.visibilityOff} />
                    )}
                  </View>

                  <View style={styles.card}>
                    <View style={styles.cardHeader}>
                      <MaterialIcons
                        name="monetization-on"
                        size={28}
                        color="#BBB"
                      />
                      <Text style={styles.title}>Conta</Text>
                    </View>

                    <Text style={styles.subtitle}>Saldo disponível</Text>

                    {visibilityValues ? (
                      <>
                        <View style={styles.cardBody}>
                          <Text
                            style={
                              visibilityValues
                                ? styles.monetaryValue
                                : styles.visibilityOff
                            }
                          >
                            R$ 32.470,00
                          </Text>
                        </View>
                        <View style={styles.cardFooter}>
                          <Text style={styles.textFooter}>
                            Sua conta rendeu no total
                          </Text>
                          <Text style={styles.monetaryValueFooter}>
                            R$ 10,49
                          </Text>
                        </View>
                      </>
                    ) : (
                      <View style={styles.visibilityOff} />
                    )}
                  </View>

                  <View style={styles.card}>
                    <View style={styles.cardHeader}>
                      <View style={styles.rewardsImage}>
                        <Image
                          style={styles.rewardsImageView}
                          source={RewardsImage}
                          resizeMode="center"
                        />
                      </View>
                      <Text style={styles.rewards}>Rewards</Text>
                    </View>
                    <View style={styles.cardBody}>
                      <Text style={styles.textRewards}>
                        Apague compras com pontos que nunca expiram.
                      </Text>
                    </View>
                    <View style={styles.cardFooter}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {}}
                      >
                        <Text style={styles.textButton}>CONHECER</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
                <Tabs />
              </>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#8A06BD",
  },
  container: {
    flex: 1,
    backgroundColor: "#8A06BD",
    justifyContent: "center",
  },

  content: {
    flex: 1,

    padding: 15,
  },

  card: {
    backgroundColor: "#FFF",

    padding: 20,
    marginBottom: 20,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    color: "#9b9b9b",
    marginLeft: 20,
  },

  subtitle: {
    fontSize: 14,
    color: "#999999",
    marginTop: 15,
    marginBottom: 15,
  },

  monetaryValue: {
    fontSize: 28,
    color: "#2ba0dc",
    fontWeight: "bold",
  },

  visibilityOff: {
    backgroundColor: "#A1A1A1",
    opacity: 0.2,

    height: 38,
  },

  cardBody: {},

  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
  },

  textFooter: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#AAA",
  },

  monetaryValueFooter: {
    fontSize: 15,
    color: "#71ac76",
    fontWeight: "bold",

    marginLeft: 10,
  },

  rewards: {
    color: "#9823c5",
    fontSize: 26,
    fontWeight: "600",

    marginLeft: 20,
  },

  rewardsImageView: {
    width: 50,
    height: 50,
  },

  rewardsImage: {
    backgroundColor: "#ecd9f9",
    borderRadius: 50,
  },

  textRewards: {
    color: "#686868",
    maxWidth: 280,

    fontSize: 16,
    fontWeight: "600",

    marginTop: 10,
    marginBottom: 10,
  },

  button: {
    borderColor: "#9823c5",
    borderWidth: 1,
    borderRadius: 4,

    height: 40,
    width: 120,

    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  textButton: {
    color: "#9823c5",
    fontSize: 16,
    fontWeight: "bold",
  },
});
