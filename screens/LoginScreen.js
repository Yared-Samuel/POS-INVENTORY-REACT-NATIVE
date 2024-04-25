import React, { useState, useEffect } from "react";
import Toast from "react-native-toast-message";
import { ActivityIndicator } from "react-native";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { loginUser } from "../redux/features/auth/authService";

import { SET_LOGIN, SET_NAME, SET_TOKEN} from "../redux/features/auth/authSlice";
import { useNavigation } from "@react-navigation/native";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [auth, setAuth] = useState(initialState);
  const { email, password } = auth;
  // const { auths, isError, message } = useSelector((state) => state.auth);

  const handleEmailChange = (text) => {
    setAuth({ ...auth, email: text });
  };

  const handlePasswordChange = (text) => {
    setAuth({ ...auth, password: text });
  };
  const login = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      return Toast.show({
        type: "error",
        text1: "All fields are required",
      });
    }
    const userData = {email, password}
    setIsLoading(true);
    try {
      console.log("one")
      const data = await loginUser(userData);
      console.log(data)
       dispatch(SET_LOGIN(true));
       dispatch(SET_NAME(data.name));
       dispatch(SET_NAME(data.name));
       dispatch(SET_TOKEN(data.token))
      setIsLoading(false);
      navigation.navigate('Main')
    } catch (error) {
      setIsLoading(false);
      console.error("Login error:", error);
      Toast.show({
        type: "error",
        text1: "Login failed. Please try again.",
      });
    }
  };
  
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
    {isLoading ? (
      <ActivityIndicator color="white" />
    ) : (
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", marginTop: 150 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Login In to your Account (ግባ)
          </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />

            <TextInput
              value={email}
              onChangeText={handleEmailChange}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="enter your email (ኢሜል ጻፍ)"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              style={{ marginLeft: 8 }}
              name="lock1"
              size={24}
              color="gray"
            />

            <TextInput
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="enter your password (የሚስጥር ቁጥር ጻፍ)"
            />
          </View>
        </View>

        <View style={{ marginTop: 80 }} />
        <Pressable
          onPress={login}
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Login (ግባ)
          </Text>
        </Pressable>

        <Pressable style={{ marginTop: 15 }}>
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
          Authorized Person Only!
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    )}
     
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
