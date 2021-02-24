import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';

const Select = () => {

  return (
    <View>
      <TotalFood/>
      <Coba/>
    </View>
  )
}

const Coba = () => {
  firestore()
  .collection('Foods')
  .doc('5FplnJuiKH3i3E99urGy')
  .get()
  .then(documentSnapshot => {
    console.log('Food exists: ', documentSnapshot.exists);

    if (documentSnapshot.exists) {
      console.log('Food data: ', documentSnapshot.id, documentSnapshot.data());
    }
  });
  console.log('hai')
  return (
    <View></View>
  )
}

const TotalFood = () => {
  firestore()
  .collection('Drinks')
  .get()
  .then(querySnapshot => {
    console.log('Total Drinks: ', querySnapshot.size);
  
    querySnapshot.forEach(documentSnapshot => {
      console.log('Drinks ID: ', documentSnapshot.id, documentSnapshot.data());
    });
  });
  return (
    <View></View>
  )
  
}

// function Foodd({ foodId }) {

//   const [ foodId, setfoodId ] = useState([]);

//   useEffect(() => {
//     const subscriber = firestore()
//       .collection('Foods')
//       .doc(foodId)
//       .onSnapshot(documentSnapshot => {
//         console.log('Foods data: ', documentSnapshot.data());
//       });

//     // Stop listening for updates when no longer required
//     return () => subscriber();
//   }, [foodId]);

// }

export default Select

const styles = StyleSheet.create({})
