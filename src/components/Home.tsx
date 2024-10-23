import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';

import Header from './Header';
import WatchProducts from './WatchProducts';
import Tshirts from './Tshirts';

interface Category {
  id: string;
  image: any;
}

interface Product {
  id: string;
  name: string;
  image: any;
  price: number;
  discountPrice: number;
  category: string;
}

const categories: Category[] = [
  { id: '1', image: require('../assets/watch2.png') },
  { id: '2', image: require('../assets/tshirt.png') },
  { id: '3', image: require('../assets/purse.png') },
  { id: '4', image: require('../assets/shoes.png') },
  { id: '5', image: require('../assets/sunglases.png') },
];

const products: Product[] = [
  { id: '1', name: 'Redmi Note 4', image: require('../assets/watch_1.png'), price: 45000, discountPrice: 55000, category: '1' },
  { id: '2', name: 'Apple Watch - series 6', image: require('../assets/watch_4.png'), price: 45000, discountPrice: 55000, category: '1' },
  { id: '3', name: 'Redmi Note 4', image: require('../assets/watch_2.png'), price: 45000, discountPrice: 55000, category: '1' },
  { id: '4', name: 'Redmi Note 4', image: require('../assets/watch_3.png'), price: 45000, discountPrice: 55000, category: '1' },
  { id: '5', name: 'Adidas Tshirt', image: require('../assets/shirt.png'), price: 1500, discountPrice: 2500, category: '2' },
  { id: '6', name: 'Nike Tshirt', image: require('../assets/shirt.png'), price: 2800, discountPrice: 4000, category: '2' },
  { id: '7', name: 'Louis Philippe Shirt', image: require('../assets/shirt.png'), price: 6000, discountPrice: 8000, category: '2' },
  { id: '8', name: 'Peter England Shirt', image: require('../assets/shirt.png'), price: 7000, discountPrice: 7500, category: '2' },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handlePress = (id: string) => {
    setSelectedCategory(id);
  };

  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View
        style={[
          styles.allCategories,
          { backgroundColor: item.id === selectedCategory ? '#F17547' : 'rgba(216, 211, 211, 0.25)' },
        ]}
      >
        <Image style={styles.watchImage} source={item.image} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );

  const filteredProducts = products.filter(product => product.category === selectedCategory);
  //const filteredShirts = shirts.filter(product => product.category === selectedCategory);

  return (
    <>
    <Image
        style={{ height: '100%', width: '100%', position: 'absolute' }}
        source={{ uri: 'https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg' }}
      />
    <View style={styles.container}>
      {/* Header Component */}
      <Header />
      {/* <MenuNav /> */}
      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Hello Fola </Text>
        <Image
          style={styles.helloImage}
          source={require('../assets/hello.png')}
        />
      </View>
      {/* Shopping */}
      <View style={styles.shoppingHeading}>
        <Text style={styles.shoppingText}>Let's start shopping!</Text>
      </View>
      {/* Cards */}
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.cardsOne}>
          <Text style={styles.cardText}>20% OFF DURING THE WEEKEND</Text>
          <TouchableOpacity style={styles.cardOneBtn}>
            <Text style={styles.btnOneText}>Get Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsTwo}>
          <Text style={styles.cardText}>20% OFF DURING THE WEEKEND</Text>
          <TouchableOpacity style={styles.cardTwoBtn}>
            <Text style={styles.btnTwoText}>Get Now</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        <View>
          <Image
            style={styles.bagImage}
            source={require('../assets/Bag.png')}
          />
          </View>
      </View>
      {/* Top Categories */}
      <View style={styles.categoriesHeading}>
        <Text style={styles.categoriesText}>Top Categories</Text>
        <TouchableOpacity style={styles.seeAllBtn}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <FlatList
        data={categories}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.categoriesList}
        showsHorizontalScrollIndicator={false}
      />
      {/* Products */}
      <View style={styles.productsContainer}>
      {selectedCategory === '1' && <WatchProducts products={filteredProducts} />}
      {selectedCategory === '2' && <Tshirts products={filteredProducts} />}
      </View>
      </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  headingContainer: {
    marginHorizontal: 20,
    marginBottom: 6,
    flexDirection: 'row'
  },
  headingText: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  helloImage: {
    height: 20,
    width: 20,
    top: 5,
    padding: 12,
  },
  shoppingHeading: {
    marginHorizontal: 20,
    marginBottom: 20
  },
  shoppingText: {
    fontSize: 18,
  },
  cardsOne: {
    marginHorizontal: 10,
    height: 130,
    width: 285,
    backgroundColor: '#F17547',
    padding: 15,
    borderRadius: 20,
  },
  cardsTwo: {
    marginHorizontal: 10,
    height: 130,
    width: 285,
    backgroundColor: '#1383F1',
    padding: 15,
    borderRadius: 20,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  cardOneBtn: {
    marginTop: 15,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    height: 35,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTwoBtn: {
    marginTop: 15,
    backgroundColor: '#50D63B',
    borderRadius: 20,
    height: 35,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnOneText: {
    color: '#F16A26',
    fontSize: 14,
    fontWeight: '600',
  },
  btnTwoText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  bagImage: {
    position: 'absolute',
    height: 120,
    width: 161,
    right: 55,
    top: 55,
  },
  categoriesHeading: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  categoriesText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',

  },
  seeAllBtn: {
    width: 55,
    height: 20,
  },
  seeAllText: {
    color: '#F16A26',
    fontSize: 16,
    fontWeight: '500',
  },
  categoriesList: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
  },
  allCategories: {
    borderWidth: 2,
    backgroundColor: '#F17547',
    height: 66,
    width: 67,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    borderColor: 'rgba(216, 211, 211, 0.5)',
  },
  watchImage: {
    height: 25,
    width: 29,
  },
  scrollViewContainer: {
    paddingBottom: 20,
  },
  productsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  }
});
