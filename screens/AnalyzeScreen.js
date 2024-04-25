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
import { getAnalyze } from "../redux/features/analyze/analyzeSlice";
import { getStorelists } from "../redux/features/store/storelistSlice";
import { selectIsLoggedIn } from "../redux/features/auth/authSlice";
import { Table, Row, Rows } from "react-native-table-component";
import { Picker } from "@react-native-picker/picker";

const AnalyzeScreen = () => {
  const dispatch = useDispatch();
  const { storelists, isLoading, isError, message } = useSelector(
    (state) => state.store
  );
  
  const isLoggedIn = true;

  const [selectedValue, setSelectedValue] = useState(storelists[0]?._id);
  
  // State variables for pagination
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(5);
    // console.log(selectedValue)
  const { analyzes } = useSelector((state) => state.analyze);
  useEffect(() => {
    // if (isLoggedIn === true) {
      dispatch(getAnalyze(selectedValue));
      dispatch(getStorelists());
    // }
    if (isError) {
      console.log(message);
    }
  }, [ isError, message, dispatch]);

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
        <View style={{ backgroundColor: "#00CED1", padding: 10 }}>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 38,
              flex: 1,
            }}
          >
            <AntDesign
              style={{ paddingLeft: 10 }}
              name="search1"
              size={22}
              color="black"
            />
            <TextInput placeholder="Search" />
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            padding: 10,
            backgroundColor: "#208681",
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              padding: 10,
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Daily Sales - የቀን ሽያጭ
          </Text>
        </View>
        <View>
          <Picker
            style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Select an option" value={null} />
            {storelists.map((item) => (
              <Picker.Item key={item._id} label={item.name} value={item._id} />
            ))}
          </Picker>
        </View>

        <ScrollView style={{ marginHorizontal: 20 }}>
  <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
    <Row
      data={["Date", "Product", "Quantity", "Price"]}
      style={styles.head}
      textStyle={styles.text}
    />
    {analyzes.length > 0 ? (
      Object.keys(analyzes).map((date) => (
        <React.Fragment key={date}>
          {analyzes[date].ps && analyzes[date].ps.map((product, index) => (
            <Rows
              key={`${date}-ps-${index}`}
              data={[
                moment(date).format("DD-MMM-YYYY"),
                product.product,
                product.quantity.toString(),
                product.price.toString(),
              ]}
              textStyle={styles.text}
            />
          ))}
          {analyzes[date].pd && analyzes[date].pd.map((product, index) => (
            <Rows
              key={`${date}-pd-${index}`}
              data={[
                moment(date).format("DD-MMM-YYYY"),
                product.product,
                product.quantity.toString(),
                product.price.toString(),
              ]}
              textStyle={styles.text}
            />
          ))}
          {analyzes[date].pps && analyzes[date].pps.map((product, index) => (
            <Rows
              key={`${date}-pps-${index}`}
              data={[
                moment(date).format("DD-MMM-YYYY"),
                product.product,
                product.quantity.toString(),
                product.price.toString(),
              ]}
              textStyle={styles.text}
            />
          ))}
          {analyzes[date].pu && analyzes[date].pu.map((product, index) => (
            <Rows
              key={`${date}-pu-${index}`}
              data={[
                moment(date).format("DD-MMM-YYYY"),
                product.product,
                product.quantity.toString(),
                product.price.toString(),
              ]}
              textStyle={styles.text}
            />
          ))}
        </React.Fragment>
      ))
    ) : (
      <Row
        data={["No data available"]}
        style={styles.head}
        textStyle={styles.text}
      />
    )}
  </Table>
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

export default AnalyzeScreen;

const styles = StyleSheet.create({
  storeName: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
    backgroundColor: "#164B60",
    borderColor: "gray",
    borderWidth: 4,
    color: "white",
    padding: 2,
    paddingTop: 6,
  },
  head: {
    backgroundColor: "#DBDFEA",
  },
  text: {
    fontWeight: "bold",
  },
  textHead: {
    fontWeight: 900,
    padding: 2,
  },
  textData: {
    fontWeight: "bold",
    padding: 4,
  },
  picker: {
    width: 400, // Adjust the width as needed
    height: 40, // Adjust the height as needed
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white", // Background color of the dropdown
    // You can add more custom styles here
  },
});
