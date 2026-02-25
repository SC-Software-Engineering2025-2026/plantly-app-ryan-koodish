import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "../../theme";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false, animation: "fade" }}
        />
        <Stack.Screen
            name="onboarding"
            options={{ headerShown: false, animation: "fade" }}
        />
        <Stack.Screen
            name="new"
            options={{ presentation: "modal", title: "New Plant" }}
        />
    </Stack>
  );
}
