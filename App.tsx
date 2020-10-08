import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DragAndSnap from "./components/DragAndSnapExample";
import ChatHeads from "./components/ChatHeadsExample";
import { TouchableOpacity } from "react-native-gesture-handler";
import ScrollExample from "./components/ScrollEventExample";
import TransitionsExample from "./components/TransitionsExample";

const Stack = createStackNavigator();

const NavButton = ({ screen }: { screen: string }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{screen} Example</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <NavButton screen="DragAndSnap" />
      <NavButton screen="ChatHeads" />
      <NavButton screen="ScrollEvent" />
      <NavButton screen="Transitions" />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DragAndSnap" component={DragAndSnap} />
        <Stack.Screen name="ChatHeads" component={ChatHeads} />
        <Stack.Screen name="ScrollEvent" component={ScrollExample} />
        <Stack.Screen name="Transitions" component={TransitionsExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#e74c3c",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 8,
  },
  buttonText: {
    color: "white",
  },
});
