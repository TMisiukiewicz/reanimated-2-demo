import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import SingleCard from "./SingleCard";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import useTransition from "../hooks/useTransition";
import { mix } from "react-native-redash";
import { TouchableOpacity } from "react-native-gesture-handler";

const Messi = require("../assets/messi.png");
const Kimmich = require("../assets/kimmich.png");
const Sane = require("../assets/sane.png");

type Cards = Record<string, any>;

const cards: Cards = {
  sane: Sane,
  kimmich: Kimmich,
  messi: Messi,
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  toggleButton: {
    backgroundColor: "#3498db",
    paddingVertical: 20,
    display: "flex",
    alignItems: "center",
  },
  toggleButtonText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
const origin = { x: -(width / 2 - 2), y: 0 };

const TransitionsExample = () => {
  const { isToggled, setToggle, transition } = useTransition();

  return (
    <View style={styles.container}>
      {Object.keys(cards).map((card, index) => {
        const style = useAnimatedStyle(() => {
          const rotate = (index - 1) * mix(transition.value, 0, Math.PI / 4);
          return {
            transform: [
              { translateX: origin.x },
              { rotate: `${rotate}rad` },
              { translateX: -origin.x },
            ],
          };
        });
        return (
          <Animated.View key={card} style={[styles.overlay, style]}>
            <SingleCard source={cards[card]} />
          </Animated.View>
        );
      })}
      <TouchableOpacity
        onPress={() => setToggle(!isToggled)}
        style={styles.toggleButton}
      >
        <Text style={styles.toggleButtonText}>Toggle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransitionsExample;
