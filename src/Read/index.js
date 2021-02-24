import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Read = () => {

    const ref = firestore().collection('Foods');

    const [ loading, setLoading ] = useState(true);
    const [ foods, setFoods ] = useState([]);
    const [ prices, setPrices ] = useState([]);

    useEffect(() => {
        return ref.onSnapshot(querySnapshot => {
          const list = [];
          querySnapshot.forEach(doc => {
            const { name, price } = doc.data();
            list.push({
              id: doc.id,
              name,
              price,
            });
          });
    
          setFoods(list);
    
          if (loading) {
            setLoading(false);
          }
        });
      }, []);

    return (
        <View>
          {setFoods}
            {/* <FlatList 
                style={{flex: 1}}
                data={foods}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Read {...item} />}
            /> */}
        </View>
    )
}

export default Read

const styles = StyleSheet.create({})
