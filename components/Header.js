import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';


const Header = ({title}) => {
  const [userName, setUserName] = useState("");
  const navigation = useNavigation();
  const logout = async () => {
    
    await logoutUser();
    dispatch(SET_LOGIN(false));
    navigation.navigate('Login'); // Assuming 'Login' is the name of your login screen
  };

  useEffect(() => {
    // Function to retrieve the name from AsyncStorage
    const retrieveName = async () => {
      try {
        const storedName = await AsyncStorage.getItem("name");
    

        if (storedName !== null) {
          setUserName(storedName);
        }
      } catch (error) {
        console.error("Error retrieving name from AsyncStorage:", error);
      }
    };

    // Call the function to retrieve the name when the component mounts
    retrieveName();
  }, []);
  return (
    <>
      <View style={{           
            
            backgroundColor: "#f2ab15",
            
          }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",            
            paddingTop: 30,
            padding: 10,
            backgroundColor: "#f2ab15",
            height: 80,
          }}
        >
          
            <Pressable style={{ flexDirection: "row" }}>
              <Ionicons name="person-circle" size={24} color="white" />
              <Text style={{ fontSize: 15, fontWeight: "500", color: "white"}}>{userName}</Text>
              
            </Pressable>
          
          <Pressable style={{ marginRight: 20 }}>
          <Ionicons name="notifications-circle-outline" size={30} color="white" />

          </Pressable>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <AntDesign name="logout" size={24} color="white" />
          </Pressable>
        </View>

     
      </View>
      <View style={styles.subHeaderTwo}>
          <Text style={{ alignSelf: "center", fontSize: 20, color: "black" }}>
            {title}
          </Text>
          <View style={styles.line}/>
        </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  subHeader: {
    height: 60,
    width: 300,
    alignSelf: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#f4f4f4",
    ...Platform.select({
        android: {
          elevation: 4,
        },
      }),
    
  },
  subHeaderTwo: {
    height: 80,
    width: 350,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    borderRadius: 10, // Adjust as needed
    backgroundColor: "#f4f4f4",
    ...Platform.select({
      android: {
        elevation: 8,
      },
    }),
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#f2ab15', // You can set the color of the line
    marginVertical: 3, // Adjust the margin as needed
  }
});
