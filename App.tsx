import React from "react";
import {StatusBar} from "react-native";
import { ThemeProvider } from "./Context/ThemeContext";
import AppNavigator from "./Navigations/AppNavigator";

export default function App() {
  return (
    <ThemeProvider>
    <StatusBar barStyle="light-content" backgroundColor="Black"/>
      <AppNavigator />
    </ThemeProvider>
  );
}