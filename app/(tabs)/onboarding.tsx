import { theme } from "../../theme";
import { View, Text, StyleSheet } from "react-native";

export default function OnboardingScreen() {
    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.text}>Onboarding</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colorWhite,
    },
    text: {
        fontSize: 24,
    },
});