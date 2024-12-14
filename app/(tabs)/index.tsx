import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://avatars.githubusercontent.com/u/161778225?v=4' }} 
        style={styles.productImage} 
      />
      <Text style={styles.productName}>Réplica de Cera do Fubox</Text>
      <Text style={styles.productPrice}>R$ 10.099,99</Text>
      <Button title="Comprar" onPress={() => alert('Produto adicionado ao carrinho')} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#141414',
    borderRadius: 10,
    border: '5px solid #38fcff',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginBottom: 15,
    border: '5px solid #38fcff',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#38fcff',
  },
  productPrice: {
    fontSize: 16,
    color: '#90ddde',
    marginBottom: 10,
    textAlign: 'center',
  },
});