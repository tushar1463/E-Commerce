import { useNavigation, NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type RootStackParamList = {
  PRODUCT_DETAILS: { product: Product };
  WishList: { products: Product[] };
};

interface Product {
  id: string;
  name: string;
  image: any;
  price: number;
  discountPrice: number;
}

export default function Wishlist() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const wishlist = useSelector((state: RootState) => state.wishlist);

  return (
    <>
      <Image
        style={{ height: '100%', width: '100%', position: 'absolute' }}
        source={{ uri: 'https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg' }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backArrow} onPress={() => { navigation.goBack() }}>
            <FontAwesome6 name='arrow-left-long' size={20} color='black' />
          </TouchableOpacity>
          <View style={styles.headerHeading}>
            <Text style={styles.headingText}>My WishList</Text>
          </View>
        </View>
        <FlatList
          data={wishlist}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => { navigation.navigate("PRODUCT_DETAILS", { product: item }) }} style={styles.watchesContainer}>
              <View style={styles.discountContainer}>
                <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.75)' }}>50% OFF</Text>
              </View>
              <View style={styles.watch}>
                <Image style={styles.watchImage} source={item.image} />
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={styles.watchName}>{item.name}</Text>
              </View>
              <View style={styles.watchPrice}>
                <Text>
                  <MaterialCommunityIcons name="currency-ngn" size={16} color="black" />{' '}
                  <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.price}</Text>
                </Text>
                <Text>
                  <MaterialCommunityIcons name="currency-ngn" size={13} />
                  <Text style={{ color: '#AFAFAF', fontSize: 13, fontWeight: 'bold' }}>{item.discountPrice}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.productList}
          columnWrapperStyle={styles.columnWrapper}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  headerHeading: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'semibold',
    left: 120,
  },
  backArrow: {
    left: 20,
    top: 20,
  },
  watchesContainer: {
    marginHorizontal: 20,
    backgroundColor: '#F8F8F8',
    height: 204,
    width: 174,
    borderRadius: 10,
    marginBottom: 20,
    marginRight: -10,
  },
  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  watch: {
    height: 118,
    width: 175.99,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  watchImage: {
    height: 121.3,
    width: 121.3,
  },
  watchName: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.75)',
    fontWeight: '500',
  },
  watchPrice: {
    marginTop: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productList: {
    marginTop: 20,
    paddingBottom: 20,
  },
  columnWrapper: {
    marginLeft: -5,
    justifyContent: 'space-evenly',
    marginRight: 20,
    marginBottom: 10,
  },
});
