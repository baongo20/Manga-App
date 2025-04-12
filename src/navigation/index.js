import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HomeScreen } from "../screens/tabs/Home.screen";
import { ProfileScreen } from "../screens/tabs/Profile.screen";
import { SaveScreen } from "../screens/tabs/Save.screen";
import { SearchScreen } from "../screens/tabs/Search.screen";
import { HomeIcon, SaveIcon, SearchIcon, UserIcon } from "../components/Icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen } from "../screens/DetailsScreen";
import { LoginScreen } from "../screens/Login.screen";
import { RegisterScreen } from "../screens/Register.screen";


const Stack = createNativeStackNavigator();
export const StackNavigator = () => {
  return(
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={MyTabs} options={{headerShown: false}}/>
      <Stack.Screen name="Detail" component={DetailsScreen} options={{headerShown: true}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Save" component={SaveScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === 'HomeTab') {
            return <HomeIcon />
          } else if (route.name === 'Save') {
            return <SaveIcon />
          } else if (route.name === 'Search') {
            return <SearchIcon />
          } else if (route.name === 'Profile') {
            return <UserIcon />
          }
          return null;
        }, 
        tabBarShowLabel: false,
        tabBarIconStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          borderTopWidth: 1,
        },
      })}>
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Save" component={SaveScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};