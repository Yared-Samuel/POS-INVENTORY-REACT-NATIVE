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
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getStoreBalance
} from "../redux/features/reports/reportSlice";
import { selectIsLoggedIn } from "../redux/features/auth/authSlice";
import { Table, Row, Rows } from "react-native-table-component";
import Header from "../components/Header";

const BalanceScreen = () => {

    const dispatch = useDispatch();
  const { storeBalances, isLoading, isError, message } = useSelector(
    (state) => state.report
  );
  const isLoggedIn = true;

    // State variables for pagination
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getStoreBalance());
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
      
      <Header title="Store Balance - የስቶር ቀሪ ምርት"/>
      <ScrollView style={{ marginHorizontal: 20 }}>
  {storeBalances.map((store) => (
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

  {endIndex < storeBalances.length && ( // Show "Load More" button if there's more data
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

export default BalanceScreen

const styles = StyleSheet.create({
  storeName:{
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
    backgroundColor: '#164B60',
    borderColor: "gray",
    borderWidth: 4,
    color: "white",
    padding: 2,
    paddingTop: 6   
  },
  head: {
    backgroundColor: "#DBDFEA"
  },
  text: {
    fontWeight: "bold"
  },
  textHead: {
    fontWeight: 900,
    padding: 2
  },
  textData: {
    fontWeight: "bold",
    padding: 4
  }

})