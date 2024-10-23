import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from './components/Home';
import MyCart from './components/MyCart';
import Account from './components/Account';
import WishList from './components/WishList';
import ProductDetails from './components/ProductDetails';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import SearchScreen from './components/SearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'PRODUCT_DETAILS' || routeName === 'MY_CART') {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HOME' component={Home} />
      <Stack.Screen name='PRODUCT_DETAILS' component={ProductDetails} />
      <Stack.Screen name='MY_CART' component={MyCart} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='WishList' component={WishList} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#F16A26',
            tabBarInactiveTintColor: '#AFAFAF',
            headerShown: false,
          }}
        >
          <Tab.Screen
            name='Home'
            component={HomeStack}
            options={{
              tabBarIcon: ({ color }) => (
                // <AntDesign name='home' size={30} color={color} />
                <Image source={require('./assets/home_icon.png')}
                style={[styles.iconSize, {tintColor: color}]}
                />
              ),
            }}
          />
          <Tab.Screen name='WishList' component={WishList} 
          options={{
            tabBarIcon: ({ color }) => (
              // <EvilIcons name='heart' size={40} color={color} />
              <Image source={require('./assets/Wishlist.png')}
              style={[styles.iconSize, {tintColor: color}]}
              />
            ),
          }}
          />
          <Tab.Screen name='MyCart' component={MyCart} 
          options={{
            tabBarIcon: ({ color }) => (
              //<AntDesign name='shoppingcart' size={30} color={color} />
              <Image source={require('./assets/Cart.png')}
              style={[styles.iconSize, {tintColor: color}]}
              />
            ),
          }}
          />
          <Tab.Screen name='Account' component={Account} 
          options={{
            tabBarIcon: ({ color }) => (
              //<MaterialCommunityIcons name='account-circle-outline' size={30} color={color} />
              <Image source={require('./assets/profile_icon.png')}
              style={[styles.iconSize, {tintColor: color}]}
              />
            ),
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  iconSize: {
    height: 25,
    width: 25,
  }
});
