import { globalStyles } from "@/styles/globals";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Macrozone",
        headerShadowVisible: true,
        headerStyle: {
          backgroundColor: globalStyles.container.backgroundColor,
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
      }}
    />
  );
}
