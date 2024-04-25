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
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from "./Header";


const Detail = ({ navigation }) => {
 

 return(
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 0 : 0,
        flex: 1,
        backgroundColor: "#f4f4f4",
      }}
    >
      <ScrollView>
       
        <Header title="ዝርዝር መረጃ"/>
        {/* <Text style={{ padding: 10, fontSize:18, fontWeight: "bold" }}>Report List Updated</Text> */}
        <View style={styles.container}>
        <View style={styles.rectangle}>
            <Pressable onPress={() => navigation.navigate("DetailPurchase")}>
            <AntDesign name="downcircle" size={30} color="#f2ab15" style={{ alignSelf: "center" }} />
            <Text style={styles.text}>Purchase / ግዢ</Text>
          </Pressable>
        </View>
        <View style={styles.rectangle}>
            <Pressable onPress={() => navigation.navigate("DetailTransfer")}>
            <AntDesign name="piechart" size={30} color="#f2ab15" style={{ alignSelf: "center" }}/>
            <Text style={styles.text}>Transfer / ዝውውር</Text>
          </Pressable>
        </View>
        <View style={styles.rectangle}>
            <Pressable onPress={()=> navigation.navigate("DetailSale")}>
            <MaterialCommunityIcons name="sale" size={30} color="#f2ab15" style={{ alignSelf: "center" }}/>
            <Text style={styles.text}>Sale / ሽያጭ</Text>
          </Pressable>
        </View>
        <View style={styles.rectangle}>
          <Pressable onPress={()=> navigation.navigate("DetailUse")}>
            <MaterialIcons name="announcement" size={30} color="#f2ab15" style={{ alignSelf: "center" }}/>
            <Text style={styles.text}>Used / ያለቁ</Text>
          </Pressable>
        </View>

        </View>
        
      </ScrollView>
    </SafeAreaView>
 )
}

export default Detail

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