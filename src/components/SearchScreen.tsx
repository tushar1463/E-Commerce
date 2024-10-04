import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const products = [
  { id: '1', name: 'Redmi Note 4', image: require('../assets/watch_1.png'), price: 45000, discountPrice: 55000, category: '1' },
  { id: '2', name: 'Apple Watch - series 6', image: require('../assets/watch_4.png'), price: 45000, discountPrice: 55000, category: '1' },
  { id: '3', name: 'Redmi Note 4', image: require('../assets/watch_2.png'), price: 45000, discountPrice: 55000, category: '1' },
  { id: '4', name: 'Redmi Note 4', image: require('../assets/watch_3.png'), price: 45000, discountPrice: 55000, category: '1' },
  { id: '5', name: 'Adidas Tshirt', image: require('../assets/shirt.png'), price: 1500, discountPrice: 2500, category: '2' },
  { id: '6', name: 'Nike Tshirt', image: require('../assets/shirt.png'), price: 2800, discountPrice: 4000, category: '2' },
  { id: '7', name: 'Louis Philippe Shirt', image: require('../assets/shirt.png'), price: 6000, discountPrice: 8000, category: '2' },
  { id: '8', name: 'Peter England Shirt', image: require('../assets/shirt.png'), price: 7000, discountPrice: 7500, category: '2' },
];

type RootStackParamList = {
  PRODUCT_DETAILS: { product: Product };
  WishList: { product: Product };
};

interface Product {
  id: string;
  name: string;
  image: any;
  price: number;
  discountPrice: number;
}

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleSearch = (text: string) => {
    setQuery(text);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const [wishlist, setWishlist] = useState<Product[]>([]);

  const toggleWishlist = (product: Product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const isInWishlist = (product: Product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
      <Image
        style={{ height: '100%', width: '100%', position: 'absolute' }}
        source={{ uri: 'https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg' }}
      />
      <View style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity style={styles.backArrow} onPress={() => { navigation.goBack() }}>
            <FontAwesome6 name='arrow-left-long' size={20} color='black' />
          </TouchableOpacity>
          <View style={styles.headerHeading}>
            <Text style={styles.headingText}>Search Screen</Text>
          </View>
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a product..."
          value={query}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FlatList
              data={filteredProducts}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => { navigation.navigate("PRODUCT_DETAILS", { product: item }) }} style={styles.watchesContainer}>
                  <View style={styles.discountContainer}>
                    <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.75)' }}>50% OFF</Text>
                    <TouchableOpacity onPress={() => toggleWishlist(item)}>
                      <Ionicons name='heart-circle-outline' size={35} color={isInWishlist(item) ? 'red' : '#CFCFCF'} />
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
                    <Text><MaterialCommunityIcons name='currency-ngn' size={16} color='black' /> <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.price}</Text></Text>
                    <Text><MaterialCommunityIcons name='currency-ngn' size={13} /><Text style={{ color: '#AFAFAF', fontSize: 13, fontWeight: 'bold' }}>{item.discountPrice}</Text></Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.productList}
              columnWrapperStyle={styles.columnWrapper}
            />
          )}
        />
      </View>
    </>
  );
};

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
    left: 90,
  },
  backArrow: {
    left: 10,
    top: 20,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomColor: 'black',
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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

export default SearchScreen;
