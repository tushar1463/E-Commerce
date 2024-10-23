import { useNavigation, NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addToWishlist, removeFromWishlist } from '../redux/action';

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

  const dispatch = useDispatch();

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
    <>
      <Image
        style={{ height: '100%', width: '100%', position: 'absolute' }}
        source={{ uri: 'https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg' }}
      />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backArrow} onPress={() => { navigation.goBack() }} >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.arrowsize} source={require('../assets/back.png')} />
                <Image style={styles.linesize} source={require('../assets/line.png')} />
              </View>
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
                  <TouchableOpacity onPress={() => toggleWishlist(item)}>
                    {/* <Ionicons name='heart-circle-outline' size={35} color={isInWishlist(item) ? '#FF3E4D' : '#CFCFCF'} /> */}
                    <Image source={require('../assets/wishlist_sb.png')}
                      style={{ height: 22, width: 22, tintColor: isInWishlist(item) ? '#FF3E4D' : '#CFCFCF' }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.watch}>
                  <Image style={styles.watchImage} source={item.image} />
                </View>
                <View style={{ marginHorizontal: 10 }}>
                  <Text style={styles.watchName}>{item.name}</Text>
                </View>
                <View style={styles.watchPrice}>
                  <View style={{ flexDirection: 'row', columnGap: 4, }}>
                    <Image style={styles.curSb} source={require('../assets/cur_syB.png')} />
                    <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold', top: 2 }}>{item.price}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', columnGap: 2, top: 5 }}>
                    <Image style={styles.curSbOP} source={require('../assets/cur_sb.png')} />
                    <Text style={{ color: '#AFAFAF', fontSize: 12, bottom: 3 }}>{item.discountPrice}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.productList}
            columnWrapperStyle={styles.columnWrapper}
          />
        </ScrollView>
      </SafeAreaView>
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
    left: 100,
  },
  backArrow: {
    left: 20,
    top: 20,
  },
  linesize: {
    width: 19.25,
    height: 3,
    tintColor: 'black',
    left: -5,
  },
  arrowsize: {
    width: 9.63,
    height: 13.81,
    top: 1
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
  curSb: {
    width: 15,
    height: 22,
  },
  curSbOP: {
    width: 12.09,
    height: 18,
    bottom: 5,
    tintColor: '#AFAFAF'
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
