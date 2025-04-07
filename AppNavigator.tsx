import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

import MyProfile from "../Screens/Myprofile";
import PeopleList from "../Screens/PeopleList";

import { useTheme } from "../Context/ThemeContext";

// Custom profile image
import Profile from "../assets/Image/Profile.png";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor:"white",
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: "transparent",
          },
      
          tabBarIcon: ({ focused, color, size }) => {
            const iconColor = focused ?colors.iconColor : colors.inactiveIcon;
             
            if (route.name === "PROFILE") {
              return (
                <Image
                  source={Profile}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    borderWidth: 2,
                    top: 5.33,
                    left: 5.33,
                    marginBottom:5,
                    borderColor: iconColor,
                  }}
                />
              );
            }

            // Use icons for other tabs
            const icons: any = {
              MAP: "map",
              PEOPLE: "users",
              LIST: "list",
              HITLIST: "target",
            };

            const iconName = icons[route.name] || "circle";

            return (
              <Feather name={iconName} size={24} color={iconColor} />
            );
          },
        })}
      >
        <Tab.Screen name="MAP" component={MyProfile} />
        <Tab.Screen name="PEOPLE" component={PeopleList} />
        <Tab.Screen name="LIST" component={MyProfile} />
        <Tab.Screen name="HITLIST" component={PeopleList} />
        <Tab.Screen name="PROFILE" component={MyProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

