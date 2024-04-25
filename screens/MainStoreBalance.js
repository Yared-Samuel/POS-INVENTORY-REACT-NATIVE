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

import { useDispatch, useSelector } from "react-redux";
import {
  getDailySale,
  getDailyServe,
  getInvBalance,
} from "../redux/features/reports/reportSlice";
import { Table, Row, Rows } from "react-native-table-component";
import Header from "../components/Header";


const MainStoreBalance = () => {

    const dispatch = useDispatch();
    const { invBalances, isLoading, isError, message } = useSelector(
      (state) => state.report
    );
    const isLoggedIn = true;
  
    // State variables for pagination
    const [page, setPage] = useState(1);
    const [itemsPerPage] = useState(10);
  
  
  
    useEffect(() => {
      if (isLoggedIn === true) {
        
        dispatch(getInvBalance());
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
        paddingTop: Platform.OS === "android" ? 30 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
    <ScrollView>
      
        <Header title="Main Store Balance - የዋና ስቶር ቀሪ ምርቶች"/>

      <ScrollView style={{ marginHorizontal: 20 }}>
      {invBalances.map((store) => (
    <View key={store.storeName}>
      <Text style={styles.storeName}>{store.storeName}</Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={["Product Name/ምርት", "Quantity/ብዛት"]}
          style={styles.head}
          textStyle={styles.textHead} // Pass the object here
        />
        {store.data.map((item) => (
          <Row
            key={item.productName}
            data={[item.productName, item.quantity.toString()]}
            textStyle={styles.textData} // Pass the object here
          />
        ))}
      </Table>
    </View>
  ))}

        {endIndex < invBalances.length && ( // Show "Load More" button if there's more data
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

export default MainStoreBalance

const styles = StyleSheet.create({
    head: { height: 40, backgroundColor: "#f1f8ff" },
    text: { margin: 6, fontWeight: "bold" },
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
  