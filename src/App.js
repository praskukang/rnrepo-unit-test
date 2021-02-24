import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import Firestore from './Firestore'
import Read from './Read';
import Select  from './Select'
import ClassFirestore from './ClassFirestore';
import Orders from './Order';
import ShopCart from './ShopCart';

import { Provider } from 'react-redux'
import storeRN from './redux/store'


const App = () => {
  return (

 
    <Provider store={storeRN}>
      <SafeAreaView>
        {/* <Firestore/> */}
        {/* <Read/> */}
        {/* <Select/> */}
        <ShopCart/>
        {/* <Orders/> */}
        <ClassFirestore/>

      </SafeAreaView>
     
    </Provider>


  );
};

export default App;
