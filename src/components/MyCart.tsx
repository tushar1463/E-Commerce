import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation, } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { RootState } from '../redux/rootReducer';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/action';


export default function MyCart() {
  const navigation = useNavigation();
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = (productId: string) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecrease = (productId: string) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <>
      <Image
        style={{ height: '100%', width: '100%', position: 'absolute' }}
        source={{ uri: 'https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg' }}
      />
      <SafeAreaView>
        <ScrollView style={styles.myCartContainer} showsVerticalScrollIndicator={false}>

          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backArrow} onPress={() => { navigation.goBack() }} >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.arrowsize} source={require('../assets/back.png')} />
                <Image style={styles.linesize} source={require('../assets/line.png')} />
              </View>
            </TouchableOpacity>
            <View style={styles.headerHeading}>
              <Text style={styles.headingText}>My Cart</Text>
            </View>
          </View>
          {/* Products */}
          {cartItems.map((item) => (
            <View key={item.id} style={styles.productContainer}>
              <View style={styles.productImage}>
                <Image style={styles.pISize} source={item.image} />
              </View>
              <View style={styles.pDetailsCon}>
                <View style={styles.pName}>
                  <Text style={styles.pNameText}>{item.name}</Text>
                  <View style={styles.pPrice}>
                    <Image style={styles.curSb} source={require('../assets/cur_syB.png')} />

                    <Text style={styles.pPriceAmount}>{item.price}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.sizeCon}>
                <Text style={styles.sizeText}>Size: {item.selectedSize}</Text>
                <View style={styles.quantityCon}>
                  <TouchableOpacity style={styles.decrementBtn} onPress={() => handleDecrease(item.id)}>
                    <Image style={styles.decrementBtnText} source={require('../assets/minus.png')} />
                  </TouchableOpacity>
                  <View style={styles.quantityCount}>
                    <Text style={styles.quantityCountText}>{item.quantity}</Text>
                  </View>
                  <TouchableOpacity style={styles.IncrementBtn} onPress={() => handleIncrease(item.id)}>
                    <Image style={styles.IncrementBtnText} source={require('../assets/plus.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
          {/* Total */}
          <View style={styles.total}>
            <Text style={styles.totalText}>Total</Text>
            <View style={styles.totalAmount}>
              <Image style={styles.cartCur} source={require('../assets/cart_cur.png')} />
              <Text style={styles.totalAmountText}>{totalAmount}</Text>
            </View>
          </View>
          {/* Buy Now */}
          <View style={{ height: 100, }}>
            <TouchableOpacity style={styles.buyNowBtn}>
              <Text style={styles.buyNowText}>BUY NOW</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  myCartContainer: {},
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
  productContainer: {
    margin: 20,
    height: 115,
    width: 366,
    //borderWidth: 1,
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
  },
  productImage: {
    margin: 12,
    width: 110,
    height: 87,
    backgroundColor: 'rgba(176, 171, 123, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  pISize: {
    width: 85.35,
    height: 89.15
  },
  pDetailsCon: {
    //borderWidth: 1,
  },
  pName: {
    margin: 20,

  },
  pNameText: {
    fontSize: 14,
    fontWeight: 'medium',
    color: 'rbga(0, 0, 0, 0.75)',
    marginBottom: 20,
  },
  pPrice: {
    flexDirection: 'row',
    columnGap: 3
  },
  curSb: {
    width: 15,
    height: 21,
    bottom: 3
  },
  pPriceAmount: {
    fontSize: 12.23,
    fontWeight: '800',
    color: 'black',
  },
  sizeCon: {
    margin: 20,
  },
  sizeText: {
    fontSize: 12,
    fontWeight: 'medium',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  quantityCon: {
    flexDirection: 'row',
    marginTop: 20,
    height: 35.77,
    width: 67,
    borderWidth: 1.5,
    borderColor: 'rgba(241, 106, 38, 0.5)',
    borderRadius: 10,
    top: 10,
    right: 30,
  },
  decrementBtn: {
    marginLeft: 7,
    marginRight: 5,
    justifyContent: 'center',
  },
  decrementBtnText: {
    tintColor: '#F17547',
    height: 5,
    width: 12
  },
  quantityCount: {
    margin: 5,
    justifyContent: 'center',
  },
  quantityCountText: {
    fontSize: 15,
    fontWeight: 'medium',
    color: 'black',
  },
  IncrementBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3
  },
  IncrementBtnText: {
    tintColor: '#F17547',
    width: 12,
    height: 10,
  },
  total: {
    margin: 35,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalText: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.75)',
    fontWeight: 'semibold',
  },
  totalAmount: {
    flexDirection: 'row',
    margin: 5,
    columnGap: 3
  },
  cartCur: {
    height: 26,
    width: 20.1,
    bottom: 2,
  },
  totalAmountText: {
    color: '#F16A26',
    fontSize: 18,
    fontWeight: '800',
  },
  buyNowBtn: {
    width: 347,
    height: 51,
    backgroundColor: '#F16A26',
    marginHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },
  buyNowText: {
    color: '#ffffff'
  },
})