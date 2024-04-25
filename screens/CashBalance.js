import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { Table, Row, Rows } from "react-native-table-component";
import { getCashBalances } from "../redux/features/reports/reportSlice";
import Header from "../components/Header";
const CashBalance = () => {

    
    const dispatch = useDispatch();
  const { cashBalances, isLoading, isError, message } = useSelector(
    (state) => state.report
  );
  const isLoggedIn = true;

  // State variables for pagination
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);



  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getCashBalances());
    }
    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  // Function to load more data when the "Load More" button is pressed
  const loadMoreData = () => {
    setPage(page + 1);
  };

  // Calculate the start and end indexes for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 0 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
    <ScrollView>
      
      <Header title="Daily Sales and Purchase - የቀን ሽያጭ እና ግዢ"/>
      <ScrollView style={{ marginHorizontal: 20 }}>
      {cashBalances && Array.isArray(cashBalances) && cashBalances.length > 0 ? (
        <Table borderStyle={{ borderWidth: 1, borderColor: "#c8e1ff" }}>
          <Row
            data={["Date / ቀን", "Purchase / ግዢ","Sales / ሽያጭ", "Difference / ልዩነት"]}
            style={styles.head}
            textStyle={styles.texthead} // Pass the object here
          />
          <Rows
            data={cashBalances
              .slice(startIndex, endIndex) // Slice the data for the current page
              .map((item) => [
                moment(item.date).format("DD-MM-YYYY"),
                item.totalPurchase.toString(),
                item.totalSales.toString(),                
                (item.totalSales - item.totalPurchase).toString(),
              ])}
            textStyle={styles.text} // Pass the object here
          />
        </Table>
        ) : (
  <Text>Loading or no data available</Text>
)}
        {endIndex < cashBalances.length && ( // Show "Load More" button if there's more data
          <View style={styles.loadMoreContainer}>
            <Pressable style={styles.loadMoreButton} onPress={loadMoreData}>
              <Text textStyle={styles.loadMoreText}>Load More</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
      <View
        style={{
          height: 1,
          borderColor: "#D0D0D0",
          borderWidth: 2,
          marginTop: 15,
        }}
      />
      </ScrollView>
    </SafeAreaView>
  )
}

export default CashBalance

const styles = StyleSheet.create({
    head: { 
       
        backgroundColor: "gray" },
    text: {  
        fontWeight: "300", 
        textAlign: "center" },
    texthead: {
        flex: 1,
        textAlign: "center",
        fontWeight: "00",
        fontSize: 10,
        
        color: "white",
        padding: 2,
         },
    loadMoreContainer: {
      alignItems: "center",
      marginTop: 10,
    },
    loadMoreButton: {
      backgroundColor: "#00CED1",
      padding: 10,
      borderRadius: 5,
    },
    loadMoreText: {
      color: "white",
      fontWeight: "bold",
    },
  });
  