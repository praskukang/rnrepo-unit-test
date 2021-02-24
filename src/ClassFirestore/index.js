import React, { Component } from 'react'
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { connect } from 'react-redux';
 
export class ClassFirestore extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            data : []
        };
    }

    componentDidMount(){
        // this.getDataMakanan();
        this.getIdMakanan();
      }
    
    getDataOrder = async () => {
        const order = await firestore().collection('Orders').get();
        const allData = order.docs.map((doc) => doc.data());
        this.setState({data: allData});
        console.log(allData);
    }

    getIdMakanan = async () => {
        const makanan = await firestore().collection('Foods').get();
        const allData = makanan.docs.map((doc) => 
        Object.assign({id: doc.id}, doc.data()) );
        this.setState({data: allData});
        console.log(allData);
    }

    TotalDrink = () => {
        firestore()
        .collection('Drinks')
        .get()
        .then(querySnapshot => {
          console.log('Total Drinks: ', querySnapshot.size);
        
          querySnapshot.forEach(documentSnapshot => {
            console.log('Drinks ID: ', documentSnapshot.id, documentSnapshot.data());
          });
        });
    };

    pesanMakanan = async (id) => {
        const food = await firestore()
        .collection('Orders')
        .doc(id)
        .add({
            name: 'Cilok Jumbo',
        })
        .then(() => {
            console.log('Food Order!');
        });
    };

    // sendData = async (id) => {
    //     const food = await firestore().collection('Foods').doc(id).get();
    //     console.log(documentSnapshot.id)
    // }

    sendData = (name) => {
        firestore()
        .collection('Orders')
        .add({
            name: name,
        })
        .then(() => {
            console.log(name);
        });
    }

    render() {
        return (
            <View>
                <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    // <TouchableOpacity style={styles.container} onPress={() => alert('HEI')}>
                    <View style={styles.container}>
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                        <TouchableOpacity style={styles.text}  onPress={this.props.handleTambah} >
                            <Text>Pesan</Text>
                        </TouchableOpacity>
                    </View>
                    // </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleTambah : () => dispatch({type: 'SET_TAMBAH'})
    }
    
}

export default connect (mapStateToProps, mapDispatchToProps)(ClassFirestore)

const styles = StyleSheet.create({
    text: {
      marginBottom : 10,
    },
    container: {
        backgroundColor : 'orange',
        marginBottom : 10
    }
  
  });
  
