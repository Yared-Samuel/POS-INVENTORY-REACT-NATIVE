import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  StyleSheet,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getStorelists } from "../redux/features/store/storelistSlice";
import { getGrandId } from "../redux/features/grandReport/grandSlice";
import Header from "../components/Header";
import { Picker } from "@react-native-picker/picker";
import { Table, Row, Rows } from "react-native-table-component";

const GrandReport = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoggedIn = true;

  const [selectedStore, setSelectedStore] = useState("");

  const { storelists, isLoading, isError, message } = useSelector(
    (state) => state.store
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getStorelists());
    }
    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, dispatch, isError, message]);

  const { grands, grandIsError, grandIsSuccess, grandIsLoading } = useSelector(
    (state) => state.grand
  );

  useEffect(() => {
    if (selectedStore) {
      dispatch(getGrandId({ _id: selectedStore }));
    }
  }, [dispatch, selectedStore]);

  const handleStoreChange = (value) => {
    setSelectedStore(value);
  };

  const renderGrandItems = () => {
    return (
      <View>
        {grands &&
          Object.entries(grands).map(([date, data]) => (
            <View style={styles.transaction} key={date}>
              <Text style={styles.dateHeader}>{date}</Text>
              <View style={{ flexDirection: 'row' }}>
              {data &&
                Object.entries(data).map(([type, items]) => (
                  <View style={styles.grandType} key={type}>
                    <View style={styles.types}>
                      <Text>
                        {type === "pd"
                          ? "ገቢ"
                          : type === "pu"
                          ? "ጥቅም ላይ የዋሉ"
                          : type === "pps" || type === "ps"
                          ? "ሽያጭ"
                          : "ያልተገለጸ"}
                      </Text>

                      
                    </View>
                  <View style={{ flexDirection: "row", }}>
                    <Table style={{ width: 125 }}>
                      <Row
                        data={[
                          "እቃ",
                          "ብዛት",
                          "በብር",
                        ]}
                        style={styles.head}
                        textStyle={styles.text}
                      />
                      <Rows
                        textStyle={styles.text}
                        style={styles.data}
                        data={items.map((item) => [
                          item.product && item.product.name
                            ? item.product.name
                            : item.serve && item.serve.serveName,
                          item.quatity.toString(),
                          item.total_price.toString(),

                          
                        ])}
                      />
                    </Table>
                    </View>
                    <Text style={{ alignSelf: "flex-end", fontSize: 10, color: "darkred", paddingRight: 10}}>
                        
                        {items.reduce(
                          (total, item) => total + item.total_price,
                          0
                        )} {" "} birr
                      </Text>
                  </View>
                ))}
            </View>
            </View>
          ))}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 0 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <Header title="የስቶር ጠቅላላ ሪፖርት" />
        <ScrollView style={{ marginHorizontal: 5 }}>
          <Picker
            selectedValue={selectedStore}
            onValueChange={handleStoreChange}
            style={{ height: 50, width: "100%" }}
          >
            <Picker.Item label="Select Store / ስቶር ምረጥ" value="" />
            {storelists &&
              Array.isArray(storelists) &&
              storelists.map((storelist) => (
                <Picker.Item
                  key={storelist._id}
                  label={storelist.name}
                  value={storelist._id}
                />
              ))}
          </Picker>
          {renderGrandItems()}
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

const styles = StyleSheet.create({
  transaction: {
    backgroundColor: "#eee",
    marginBottom: 7,
    elevation: 3,
    borderRadius: 5,
  },
  grandType: {
    // flexDirection: "row",
    // flexWrap: "wrap"
  },
  dateHeader: {
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#f2ab15",
    padding: 10,
    borderRadius: 5,
  },
  types: {
    fontSize: 12,
    fontWeight: "bold",
    // flexDirection: "row",
    // justifyContent: "space-between",
  },


  head: {
    marginTop: 4,
    backgroundColor: "gray",
    borderTopStyle: "solid",
    borderTopColor: "black",
    borderTopWidth: 0.5,
    
  },
  data: {
    fontSize: 20,
    borderStyle: "solid",
    borderWidth: 0.5,
    
  },
  text:{
    fontSize: 8,
    // borderStyle: "solid",
    // borderWidth: 0.2
  }

});

export default GrandReport;
