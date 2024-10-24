import { useNavigation, NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { addToWishlist, removeFromWishlist } from '../redux/action';

type RootStackParamList = {
  PRODUCT_DETAILS: { product: Product };
  WishList: undefined;
};

interface Product {
  id: string;
  name: string;
  image: any;
  price: number;
  discountPrice: number;
}

const Tshirts = ({ products }: { products: Product[] }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const wishlist = useSelector((state: RootState) => state.wishlist);

  const toggleWishlist = (product: Product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const isInWishlist = (product: Product) => {
    return wishlist.some((item) => item.id === product.id);
  };
  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => { navigation.navigate("PRODUCT_DETAILS", { product: item }) }} style={styles.watchesContainer}>
          <View style={styles.discountContainer}>
            <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.75)' }}>50% OFF</Text>
            <TouchableOpacity onPress={() => toggleWishlist(item)}>
              {/* <Ionicons name='heart-circle-outline' size={35} color={isInWishlist(item) ? '#FF3E4D' : '#CFCFCF'} /> */}
              <Image source={require('../assets/wishlist_sb.png')}
                style={{ height: 22, width: 22, tintColor: isInWishlist(item) ? '#FF3E4D' : '#CFCFCF' }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.watch}>
            <Image
              style={styles.watchImage}
              source={item.image}
            />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.watchName}>{item.name}</Text>
          </View>
          <View style={styles.watchPrice}>
            <View style={styles.priceContainer}>
              <Image
                source={require('../assets/cur_syB.png')}
                style={{ height: 20, width: 15.13, tintColor: 'black' }}
              />
              <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }}>
                {item.price}
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Image
                source={require('../assets/cur_sb.png')}
                style={{ height: 12, width: 11.56, }}
              />
              <Text style={{ color: '#AFAFAF', fontSize: 10, fontWeight: 'bold' }}>
                {item.discountPrice}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.productList}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

const styles = StyleSheet.create({
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
    //marginTop: 10,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.75)',
    fontWeight: 'medium',
  },
  watchPrice: {
    marginTop: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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

export default Tshirts;
