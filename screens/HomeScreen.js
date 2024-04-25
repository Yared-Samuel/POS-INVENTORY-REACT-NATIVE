import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { logoutUser } from "../redux/features/auth/authService";
import { SET_LOGIN } from '../redux/features/auth/authSlice';

import { useDispatch } from "react-redux";
import Header from "../components/Header";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 0 : 0,
        flex: 1,
        backgroundColor: "#f4f4f4",
      }}
    >
      <ScrollView>
  

      <Header title="ጥቅል መረጃ"/>
  
      <View style={styles.container}>
        <View style={styles.rectangle}>
            <Pressable onPress={() => navigation.navigate("Sale")}>
            <MaterialCommunityIcons name="recycle-variant" size={30} color="#f2ab15" style={{ alignSelf: "center" }} />
            <Text style={styles.text}>Daily Sale - እለታዊ ሽያጭ</Text>
          </Pressable>
        </View>
        <View style={styles.rectangle}>
            <Pressable onPress={() => navigation.navigate("StoreSale")}>            
            <MaterialCommunityIcons name="target-variant" size={30} color="#f2ab15" style={{ alignSelf: "center" }}/>
            <Text style={styles.text}>Daily Store Sale - እለታዊ የስቶር ሽያጭ</Text>
          </Pressable>
        </View>
        <View style={styles.rectangle}>
            <Pressable onPress={() => navigation.navigate("Balance")}>
            <MaterialIcons name="published-with-changes" size={30} color="#f2ab15" style={{ alignSelf: "center" }}/>
            <Text style={styles.text}>Store Balance - ቀሪ ምርት</Text>
          </Pressable>
        </View>
        <View style={styles.rectangle}>
            <Pressable onPress={() => navigation.navigate("MainStoreBalance")}>
            <MaterialIcons name="published-with-changes" size={30} color="#f2ab15" style={{ alignSelf: "center" }}/>
            <Text style={styles.text}>Main Store Balance -ዋና ቀሪ ምርት</Text>
          </Pressable>
        </View>
        <View style={styles.rectangle}>
            <Pressable onPress={() => navigation.navigate("Purchase")}>
            <MaterialIcons name="announcement" size={30} color="#f2ab15" style={{ alignSelf: "center" }}/>
            <Text style={styles.text}>Daily Purchase - እለታዊ ግዢ</Text>
          </Pressable>
        </View>
        {/* <View style={styles.rectangle}>
            <Pressable onPress={() => navigation.navigate("CashBalance")}>
            <MaterialIcons name="announcement" size={30} color="#f2ab15" style={{ alignSelf: "center" }}/>
            <Text style={styles.text}>Purchase & sale / ግዢ እና ሽያጭ</Text>
          </Pressable>
        </View> */}

        </View>
        
       

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row', // Align children horizontally
      justifyContent: 'space-around', // Add space between children
      flexWrap: 'wrap',
      alignItems: "center",

    },
    rectangle: {
      width: 180,
      height: 85,
      backgroundColor: 'white', // Change color as needed
      marginTop: 1, // Add margin for spacing between rectangles
      marginBottom: 10, // Add margin for spacing between rectangles
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      borderWidth: 0.4,
      borderColor: 'silver', // Change this color as needed
      ...Platform.select({
          android: {
            elevation: 8,
          },
        }),
    },
    text: {
      fontSize: 12, fontWeight: '700', color: "black"
    },
})
