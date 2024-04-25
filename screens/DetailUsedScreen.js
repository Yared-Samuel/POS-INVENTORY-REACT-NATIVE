import {   StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    Pressable,
    TextInput,
    ScrollView, } from 'react-native'
  import React, { useEffect, useState } from 'react'
  import { useDispatch, useSelector } from "react-redux";
  import { Table, Row, Rows } from "react-native-table-component";
  import { AntDesign } from "@expo/vector-icons";
  import moment from "moment";
import { getUse } from '../redux/features/use/useSlice';
import Header from '../components/Header';

const DetailUsedScreen = () => {
    const dispatch = useDispatch();
    const isLoggedIn= true;

    const [page, setPage] = useState(1);
    const [itemsPerPage] = useState(10)

    const {uses, isLoading, isError, message}= useSelector((state)=>
    state.use);

    useEffect(()=> {
        if(isLoggedIn === true){
            dispatch(getUse())
        }
        if(isError){
            console.log(message)
        }
    }, [isLoggedIn, isError, message, dispatch])
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
    <Header title="Used - ጥቅም ላይ የዋሉ"/>
    
    <ScrollView style={{ marginHorizontal: 20 }}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={["Date / ቀን",,"Store /  ስቶር" , " Product / ምርት", "Quantity / ብዛት", "Cash / በገንዘብ"]}
          style={styles.head}
          textStyle={styles.text} // Pass the object here
        />
        <Rows
          data={uses
            .slice(startIndex, endIndex) // Slice the data for the current page
            .map((item) => [
              moment(item.date).format("DD-MMM-YYYY"), 
              item.to_store.name,
              item.product.name,
              item.quatity.toString(),
              item.total_price.toString(),
            ])}
          textStyle={styles.text} // Pass the object here
        />
      </Table>

      {endIndex < uses.length && ( // Show "Load More" button if there's more data
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

export default DetailUsedScreen

const styles = StyleSheet.create({
    head: { height: 40, backgroundColor: "#f1f8ff" },
    text: { margin: 6, fontWeight: "bold", fontSize: 10},
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