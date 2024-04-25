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

import { useDispatch, useSelector } from "react-redux";
import {
  getDailySale,
  getDailyServe,
} from "../redux/features/reports/reportSlice";
import { Table, Row, Rows } from "react-native-table-component";
import Header from "../components/Header";

const SaleScreen = () => {
  const dispatch = useDispatch();
  
  const isLoggedIn = true;
  // State variables for pagination
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const { dailySales, isLoading, isError, message } = useSelector(
    (state) => state.report
  );
  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getDailySale());
      dispatch(getDailyServe());
    }
    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);
  console.log(dailySales)

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
   
        
      <Header title="Daily Sales - የቀን ሽያጭ"/>



      <ScrollView style={{ marginHorizontal: 20 }}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={["Date / ቀን", "Daily Sales / የእለት ሽያጭ"]}
            style={styles.head}
            textStyle={{ ...styles.text }} // Pass the object here
          />
          <Rows
            data={dailySales
              .slice(startIndex, endIndex) // Slice the data for the current page
              .map((item) => [
                moment(item.date).format("DD-MMM-YYYY"),
                item.totalSales.toString(),
              ])}
            textStyle={styles.text} // Pass the object here
          />
        </Table>

        {endIndex < dailySales.length && ( // Show "Load More" button if there's more data
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
  );
};

export default SaleScreen;

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
