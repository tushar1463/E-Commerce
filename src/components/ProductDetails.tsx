import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, NavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';

type RootStackParamList = {
  HOME: undefined;
  PRODUCT_DETAILS: { product: Product };
  MY_CART : undefined;
};

interface Product {
  id: string;
  name: string;
  image: any;
  price: number;
  discountPrice: number;
}

export default function ProductDetails() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'PRODUCT_DETAILS'>>();
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState(null);
  const dispatch = useDispatch();

  const handlePress = (size: any) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize !== null) {
      dispatch(addToCart({ ...product, selectedSize }));
      navigation.navigate('MY_CART');
    }
  };
  return (
    <View>
      <Image
        style={{ height: '100%', width: '100%', position: 'absolute' }}
        source={{ uri: 'https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg' }}
      />
      <View style={styles.backImage}>
        <Image
          style={styles.imageSize}
          source={require('../assets/back_image.png')}
        />
        <TouchableOpacity style={styles.backArrow} onPress={() => { navigation.goBack() }} >
          <MaterialCommunityIcons name='keyboard-backspace' size={35} />
        </TouchableOpacity>
        <View style={styles.itemImage}>
          <Image
            style={styles.itemSize}
            source={product.image}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome name='circle' size={14} color='white' style={{ left: 150 }} />
            <FontAwesome name='circle' size={14} color='rgba(241, 106, 38, 0.5)' style={{ left: 170 }} />
            <FontAwesome name='circle' size={14} color='white' style={{ left: 190 }} />
          </View>
          <View>
            <Image
              style={styles.checksSize}
              source={require('../assets/color_checks.png')}
            />
            <AntDesign name='checkcircle' size={28.79} color='#2C3247' style={{ position: 'absolute', right: 40, top: 20 }} />
            <FontAwesome name='circle' size={28.79} color='black' style={{ position: 'absolute', right: 40, bottom: 80 }} />
            <Entypo name='circle' size={26.79} color='rgba(0, 0, 0, 0.25)' style={{ position: 'absolute', right: 38, bottom: 50 }} />
          </View>
        </View>
      </View>
      <View style={{ bottom: 60, }}>
        <Text style={styles.nameText}>{product.name}</Text>
      </View>
      <View style={{ marginHorizontal: 20, bottom: 20, flexDirection: 'row' }}>
        <Entypo name='star' size={20} color='#FCBF0C' />
        <Entypo name='star' size={20} color='#FCBF0C' />
        <Entypo name='star' size={20} color='#FCBF0C' />
        <Entypo name='star' size={20} color='#FCBF0C' />
        <Entypo name='star' size={20} color='#FCBF0C' />
      </View>
      <View style={styles.price}>
        <MaterialCommunityIcons name='currency-ngn' size={22} color='black' />
        <Text style={styles.priceText}>{product.price}</Text>
        <View style={{ flexDirection: 'row', marginLeft: 5 }}>
          <MaterialCommunityIcons name='currency-ngn' size={18} />
          <Text>{product.discountPrice}</Text>
        </View>
        <Text style={styles.availableStock}>Available in stock</Text>
      </View>
      <View style={styles.aboutCon}>
        <Text style={styles.aboutHeading}>About</Text>
        <Text style={styles.aboutText}>The upgraded S6 SiP runs up to 20 percent faster, allowing apps to also launch 20 percent faster, while maintaining the same all-day 18-hour battery life.</Text>
      </View>
      <View style={styles.sizeBtn}>
        <TouchableOpacity
          style={[styles.singleBtn, selectedSize === 35 && { backgroundColor: '#FFE1D7' }]}
          onPress={() => handlePress(35)}
        >
          <Text style={[styles.sizeBtnText, selectedSize === 35 && { color: '#BD6345' }]}>35</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.singleBtn, selectedSize === 36 && { backgroundColor: '#FFE1D7' }]}
          onPress={() => handlePress(36)}
        >
          <Text style={[styles.sizeBtnText, selectedSize === 36 && { color: '#BD6345' }]}>36</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.singleBtn, selectedSize === 37 && { backgroundColor: '#FFE1D7' }]}
          onPress={() => handlePress(37)}
        >
          <Text style={[styles.sizeBtnText, selectedSize === 37 && { color: '#BD6345' }]}>37</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.singleBtn, selectedSize === 38 && { backgroundColor: '#FFE1D7' }]}
          onPress={() => handlePress(38)}
        >
          <Text style={[styles.sizeBtnText, selectedSize === 38 && { color: '#BD6345' }]}>38</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.singleBtn, selectedSize === 39 && { backgroundColor: '#FFE1D7' }]}
          onPress={() => handlePress(39)}
        >
          <Text style={[styles.sizeBtnText, selectedSize === 39 && { color: '#BD6345' }]}>39</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.singleBtn, selectedSize === 40 && { backgroundColor: '#FFE1D7' }]}
          onPress={() => handlePress(40)}
        >
          <Text style={[styles.sizeBtnText, selectedSize === 40 && { color: '#BD6345' }]}>40</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 120 }}>
        <TouchableOpacity
          style={styles.addToCartBtn}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backImage: {
    alignItems: 'center',
  },
  imageSize: {
    height: 506.85,
    width: 476,
  },
  itemImage: {
    position: 'absolute',
  },
  itemSize: {
    // marginHorizontal: 50,
    // marginTop: -20,
    height: 369,
    width: 369,
  },
  backArrow: {
    position: 'absolute',
    top: 45,
    left: 15
  },
  checksSize: {
    bottom: 40,
    left: 290,
    height: 163,
    width: 57.9,
    borderRadius: 10,
  },
  nameText: {
    marginHorizontal: 20,
    position: 'absolute',
    fontSize: 22,
    color: 'rgba(0, 0, 0, 0.75)',
    fontWeight: 'semibold',
  },
  price: {
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  priceText: {
    marginTop: -5,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  availableStock: {
    fontSize: 16,
    position: 'relative',
    left: 100,
    color: 'black',
    fontWeight: '600'
  },
  aboutCon: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  aboutHeading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'semibold',
    marginBottom: 10,
  },
  aboutText: {
    color: 'rgba(0, 0, 0, 0.75)',
    fontSize: 18,
    fontWeight: 'regular',
    textAlign: 'justify',
    marginBottom: 10,
  },
  sizeBtn: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeBtnText: {
    fontSize: 15,
    color: 'rgba(0,0,0, 0.75)',
    fontWeight: 'medium',
  },
  singleBtn: {
    height: 43,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'rgba(216, 211, 211, 0.5)',
    borderWidth: 2,
  },
  addToCartBtn: {
    marginTop: 30,
    marginHorizontal: 35,
    width: 343,
    height: 51,
    backgroundColor: '#F16A26',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'semibold',
  },
});
