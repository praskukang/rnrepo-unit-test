import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Cart } from '../assets';
import { connect } from 'react-redux';

ShopCart = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textwrapper}>
        <Text style={styles.text}>Hi Customer</Text>
      </View>
      <TouchableOpacity onPress={() => alert('HEI')}>
        <View style={styles.cartwrapper}>
          <Image source={Cart} style={styles.icon} />
          <Text style={styles.notif}>{props.order}</Text>
        </View>        
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
      order: state.totalOrder
  }
}

export default connect(mapStateToProps)(ShopCart); 

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight : 30,
    marginTop : 30
  },
  cartWrapper: {
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  textwrapper: {
    padding: 30,
    paddingRight: 120,
    paddingTop: 25,
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 18,
    right: 16,
  },
});
