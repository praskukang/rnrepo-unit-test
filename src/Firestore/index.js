import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Firestore = () => {
  const [ food, setFood ] = useState('');
  const [ price, setPrice ] = useState('');
  // const [ loading, setLoading ] = useState(true);
  // const [ foods, setFoods ] = useState([]);
  // const [ prices, setPrices ] = useState([]);


  const ref = firestore().collection('Foods');

  async function addFood() {
    await ref.add({
      name: food,
      price: price,
      
    }).then(() => {
      console.log('Food added!');
    });
    setFood('');
  }

  return (
    <View>
     <View style={styles.container}>
      <TextInput style={styles.textinput} value={food} onChangeText={setFood} />
      <TextInput style={styles.textinput} value={price} onChangeText={setPrice} />
       
     </View>
      <Button title="Tambah" onPress={() => addFood()}></Button>
    
    </View>
  )
}

export default Firestore

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
},
  textinput: {
    marginTop: 40,
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: '#337091',
    borderRadius: 25,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 15,
},
})
