import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "../../theme";
import { useUserStore } from "../../store/userStore";
import { PlantlyButton } from "../../components/PlantlyButton";
import React from "react";

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore((store) => store.toggleHasOnboarded);
  return (
    <View style={styles.container}>
      <PlantlyButton title="back to onboarding" onPress={toggleHasOnboarded} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});
