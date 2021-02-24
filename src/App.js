import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Text, View, ScrollView } from 'react-native';
import Firestore from './Firestore'
import Read from './Read';
import Select  from './Select'
import ClassFirestore from './ClassFirestore';
import Orders from './Order';
// import Router from './router';

import { Provider } from 'react-redux'
import store from './redux/store'


const App = () => {
  return (

 
    // <Provider store={store}>
      <View>
        {/* <Firestore/> */}
        {/* <Read/> */}
        {/* <Select/> */}
        <Orders/>
        <ClassFirestore/>
      </View>
    // </Provider>


  );
};

export default App;
