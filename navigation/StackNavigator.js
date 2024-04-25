import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SaleScreen from "../screens/SaleScreen";
import BalanceScreen from "../screens/BalanceScreen";
import StoreSaleScreen from "../screens/StoreSaleScreen";
import MainStoreBalance from "../screens/MainStoreBalance";
import AnalyzeScreen from "../screens/AnalyzeScreen";
import PruchaseScreen from "../screens/PruchaseScreen";
import StoreReportScreen from "../screens/StoreReportScreen";
import CashBalance from "../screens/CashBalance";
import Detail from "../components/Detail";
import DetailPurchaseScreen from "../screens/DetailPurchaseScreen";
import DetailTransferScreen from "../screens/DetailTransferScreen";
import DetailSaleScreen from "../screens/DetailSaleScreen";
import DetailUsedScreen from "../screens/DetailUsedScreen";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import GrandReport from "../screens/GrandReport";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs(){
    return (
      <Tab.Navigator>
        <Tab.Screen 
          name='Home'
          component={HomeScreen}
          options={{ 
            tabBarLabel: "Main Report",
            tabBarLabelStyle: ({focused})=> focused ? ({color:"black"}) : ({color:"gray"}),
            headerShown:false,
            tabBarStyle: {
              backgroundColor: "#f4f4f4"
            },
            tabBarIcon: ({focused}) =>
            focused ? (
              <FontAwesome name="th-large" size={30} color="#f2ab15" />
            ) : (
              <FontAwesome name="th-large" size={20} color="gray" />

            )
           }}
        />

      <Tab.Screen 
          name='Compare'
          component={Detail}
          options={{ 
            tabBarLabel: "Detail Report",
            tabBarLabelStyle: ({focused})=> focused ? ({color:"black"}) : ({color:"gray"}),
            headerShown:false,
            tabBarStyle: {
              backgroundColor: "#f4f4f4"
            },
            tabBarIcon: ({focused}) =>
            focused ? (
              <MaterialCommunityIcons name="table-large-plus" size={30} color="#f2ab15" />
            ) : (
              <MaterialCommunityIcons name="table-large-plus" size={20} color="gray" />
            )
           }}
        />

      <Tab.Screen 
          name='Store'
          component={StoreReportScreen}
          options={{ 
            tabBarLabel: "Grand Report",
            tabBarLabelStyle: ({focused})=> focused ? ({color:"black"}) : ({color:"gray"}),
            headerShown:false,
            tabBarIcon: ({focused}) =>
            focused ? (
              <FontAwesome5 name="store" size={30} color="#f2ab15" />
            ) : (
              <FontAwesome5 name="store" size={20} color="gray" />
            )
           }}
        />
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sale"
          component={SaleScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Balance"
          component={BalanceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StoreSale"
          component={StoreSaleScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainStoreBalance"
          component={MainStoreBalance}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Analyze"
          component={AnalyzeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Purchase"
          component={PruchaseScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CashBalance"
          component={CashBalance}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailPurchase"
          component={DetailPurchaseScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailTransfer"
          component={DetailTransferScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailSale"
          component={DetailSaleScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailUse"
          component={DetailUsedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GrandReport"
          component={GrandReport}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
