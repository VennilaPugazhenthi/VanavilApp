import * as React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import COLORS from "../consts/colors";
import category from "../consts/category";
const width = Dimensions.get("window").width / 2 - 30;

const CatalogScreen = ({ navigation }) => {
  const [categoryIndex, setCategoryIndex] = React.useState(-1);

  const keyExtractor = (item) => {
    return item.id.toString();
  };

  const renderRow = ({ item, index }) => {
    return <Card item={item} index={index} />;
  };

  const Card = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.8}
        delayPressIn={0}
        delayPressOut={0}
        onPress={() => {
          console.log("Pressed" + item.name);
          setCategoryIndex(index);
        }}
      >
        <View
          style={[
            styles.card,
            categoryIndex === index && styles.categorySelected,
          ]}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View style={{ height: 100, alignItems: "center" }}>
              <Image
                style={{ flex: 1, resizeMode: "contain" }}
                source={item.img}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                fontWeight: "300",
                fontSize: 17,
                marginTop: 10,
                textAlign: "center",
              }}
            >
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginVertical: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 7 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
          <Text
            style={{ fontSize: 38, color: COLORS.blue, fontWeight: "bold" }}
          >
            Vanavil Car Care
          </Text>
        </View>
      </View>
      <Text style={{ fontWeight: "400", fontSize: 20 }}>
        Choose a category of your vehicle
      </Text>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={category}
        renderItem={renderRow}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  categorySelected: {
    borderColor: COLORS.blue,
    borderWidth: 2,
  },
});

export default CatalogScreen;
