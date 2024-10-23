import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, NavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';

type RootStackParamList = {
  HOME: undefined;
  PRODUCT_DETAILS: { product: Product };
  MY_CART: undefined;
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
    <>
      <Image
        style={{ height: '100%', width: '100%', position: 'absolute' }}
        source={{ uri: 'https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg' }}
      />
      <View>
        <View style={styles.backImage}>
          <Image
            style={styles.imageSize}
            source={require('../assets/back_image.png')}
          />
          <TouchableOpacity style={styles.backArrow} onPress={() => { navigation.goBack() }} >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.arrowsize} source={require('../assets/back.png')} />
              <Image style={styles.linesize} source={require('../assets/line.png')} />
            </View>
          </TouchableOpacity>
          <View style={styles.itemImage}>
            <Image
              style={styles.itemSize}
              source={product.image}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.p1Size} source={require('../assets/p1.png')} />
              <Image style={styles.p2Size} source={require('../assets/p2.png')} />
              <Image style={styles.p3Size} source={require('../assets/p1.png')} />
            </View>
            <View>
              <Image
                style={styles.checksSize}
                source={require('../assets/color_checks.png')}
              />
              <Image style={[styles.circle, { left: 302, bottom: 160 }]} source={require('../assets/circle_one.png')} />
              <Image style={[{ left: 310, bottom: 186, height: 20, width: 14, }]} source={require('../assets/Tick.png')} />
              <Image style={[styles.circle, { left: 304, bottom: 175 }]} source={require('../assets/circle_two.png')} />
              <Image style={[styles.circle, { left: 304, bottom: 170 }]} source={require('../assets/circle_three.png')} />
            </View>
          </View>
        </View>
        <View style={{ bottom: 60, }}>
          <Text style={styles.nameText}>{product.name}</Text>
        </View>
        <View style={{ marginHorizontal: 20, bottom: 25, flexDirection: 'row', columnGap: 5}}>
          <Image  style = {styles.rating} source={require('../assets/star.png')} />
          <Image  style = {styles.rating} source={require('../assets/star.png')} />
          <Image  style = {styles.rating} source={require('../assets/star.png')} />
          <Image  style = {styles.rating} source={require('../assets/star.png')} />
          <Image  style = {styles.rating} source={require('../assets/star.png')} />
        </View>
        <View style={styles.price}>
          <Image style={styles.curSb} source={require('../assets/cur_syB.png')} />
          <Text style={styles.priceText}>{product.price}</Text>
          <View style={{ flexDirection: 'row', marginLeft: 5, columnGap: 2 }}>
          <Image style={styles.curSbOP} source={require('../assets/cur_sb.png')} />
            <Text style={{color: '#AFAFAF', fontSize: 12, bottom: 3}}>{product.discountPrice}</Text>
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
    </>
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
    marginTop: 20,
    height: 369,
    width: 369,
  },
  backArrow: {
    zIndex: 1000,
    bottom: 450,
    right: 170,
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
  checksSize: {
    bottom: 60,
    left: 290,
    height: 163,
    width: 57.9,
    borderRadius: 10,
  },
  circle: {
    height: 28.79,
    width: 28.79,
  },
  p1Size: {
    height: 12,
    width: 12,
    left: 150,
    bottom: 10,
  },
  p2Size: {
    height: 12,
    width: 12,
    left: 160,
    bottom: 10,
  },
  p3Size: {
    height: 12,
    width: 12,
    left: 170,
    bottom: 10,
  },
  nameText: {
    marginHorizontal: 20,
    position: 'absolute',
    fontSize: 22,
    color: 'rgba(0, 0, 0, 0.75)',
    fontWeight: 'semibold',
  },
  rating: {
    height: 20, 
    width: 20
  },
  price: {
    marginHorizontal: 20,
    flexDirection: 'row',
    columnGap: 3
  },
  curSb: {
    width: 19.79,
    height: 26,
    bottom: 10
  },
  priceText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '800',
    bottom: 6,
  },
  curSbOP: {
    width: 12.09,
    height: 18,
    bottom: 5,
    tintColor: '#AFAFAF'
  },
  availableStock: {
    fontSize: 14,
    position: 'relative',
    left: 110,
    color: 'black',
    fontWeight: 'semibold'
  },
  aboutCon: {
    marginTop: 20,
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
    fontSize: 15,
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
