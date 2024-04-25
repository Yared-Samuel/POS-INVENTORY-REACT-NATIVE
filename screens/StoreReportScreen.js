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
import React from 'react'
import { AntDesign } from "@expo/vector-icons";

import Header from "../components/Header";

const StoreReportScreen = ({ navigation }) => {
  return (
    <SafeAreaView
    style={{
      paddingTop: Platform.OS === "android" ? 0 : 0,
      flex: 1,
      backgroundColor: "#f4f4f4",
    }}
  >
    <ScrollView>
     
      <Header title="የስቶር መረጃ"/>
      {/* <Text style={{ padding: 10, fontSize:18, fontWeight: "bold" }}>Report List Updated</Text> */}
      <View style={styles.container}>
        <View style={styles.rectangle}>
            <Pressable onPress={() => navigation.navigate("GrandReport")} style={styles.pressable}>
            <AntDesign name="downcircle" size={25} color="#f2ab15" style={{ alignSelf: "center" }} />
            <Text style={styles.text}>የስቶር ጠቅላይ ሪፖርት / Grand report</Text>
          </Pressable>
        </View>
        <View style={styles.rectangle}>
            <Pressable onPress={() => navigation.navigate("CashBalance")} style={styles.pressable}>
            <AntDesign name="downcircle" size={25} color="#f2ab15" style={{ alignSelf: "center" }} />
            <Text style={styles.text}>የግዢ እና ሽያጭ መጠን / Balance</Text>
          </Pressable>
        </View>
      
 

      </View>
      
    </ScrollView>
  </SafeAreaView>
  )
}

export default StoreReportScreen


const styles = StyleSheet.create({
    container: {
       
        justifyContent: 'space-around', // Add space between children
        
        alignItems: "center",

      },
      rectangle: {
        width: 370,
        height: 60,
        backgroundColor: 'gray', // Change color as needed
        marginTop: 1, // Add margin for spacing between rectangles
        marginBottom: 10, // Add margin for spacing between rectangles
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 0.4,
        borderColor: 'silver', // Change this color as needed
        ...Platform.select({
            android: {
              elevation: 8,
            },
          }),
      },
      pressable:{
        flexDirection: "row",
        justifyContent: "space-around"
      },
      text: {
        fontSize: 17, fontWeight: '700', color: "white", marginLeft: 10
      },
})