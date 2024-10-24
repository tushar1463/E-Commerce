import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation, NavigationProp, RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
    Search: undefined;
  };
  

export default function Header() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.headerLeft} 
        // onPress={() => navigation.toggleDrawer()}
      >
        {/* <Feather name='align-left' size={24} color='black' /> */}
        <Image source={require('../assets/Menu.png')} 
        style={{height: 24, width: 24}}
        />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.headerRight}
        onPress={() => navigation.navigate('Search')}
      >
        {/* <Fontisto name='search' size={24} color='black' /> */}
        <Image source={require('../assets/search.png')} 
        style={{height: 24, width: 24}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },
  headerLeft: {
    backgroundColor: 'rgba(217, 217, 217, 0.25)',
    borderRadius: 17,
    height: 41,
    width: 41,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 10,
    marginBottom: 10,
    padding: 10,
  },
  headerRight: {
    backgroundColor: 'rgba(217, 217, 217, 0.25)',
    borderRadius: 17,
    height: 41,
    width: 41,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 30,
    marginBottom: 10,
    padding: 10,
  }
});
