import React, { useState } from 'react';
import { View, Text, Picker, Button, Image, StyleSheet } from 'react-native';

const POGSApp = () => {
  // Data
  const vegetables = { 'Potato': 5, 'Carrot': 8, 'Cabbage': 5, 'Broccoli': 7, 'Spinach': 6 };
  const fruits = { 'Orange': 11, 'Blueberry': 12, 'Apple': 11, 'Grapes': 15, 'Pineapple': 14 };
  
  // States
  const [selectedVeg, setSelectedVeg] = useState('');
  const [selectedFruit, setSelectedFruit] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  // Calculate the total cost
  const calculateTotal = () => {
    const vegPrice = selectedVeg ? vegetables[selectedVeg] : 0;
    const fruitPrice = selectedFruit ? fruits[selectedFruit] : 0;
    const total = (vegPrice + fruitPrice) * quantity;
    setTotalCost(total);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to POGS Online Shopping App</Text>
      <Image source={{ uri: 'https://example.com/welcome-image.png' }} style={styles.image} />

      <Text>Select Vegetable:</Text>
      <Picker selectedValue={selectedVeg} onValueChange={(itemValue) => setSelectedVeg(itemValue)}>
        <Picker.Item label="Select a vegetable" value="" />
        {Object.entries(vegetables).map(([key, value]) => (
          <Picker.Item key={key} label={`${key} - $${value}`} value={key} />
        ))}
      </Picker>

      <Text>Select Fruit:</Text>
      <Picker selectedValue={selectedFruit} onValueChange={(itemValue) => setSelectedFruit(itemValue)}>
        <Picker.Item label="Select a fruit" value="" />
        {Object.entries(fruits).map(([key, value]) => (
          <Picker.Item key={key} label={`${key} - $${value}`} value={key} />
        ))}
      </Picker>

      <Text>Select Quantity:</Text>
      <Picker selectedValue={quantity} onValueChange={(itemValue) => setQuantity(itemValue)}>
        {[...Array(5).keys()].map(i => (
          <Picker.Item key={i} label={`${i + 1}`} value={i + 1} />
        ))}
      </Picker>

      <Button title="Calculate" onPress={calculateTotal} />
      <Text>Total Cost of Order: ${totalCost}</Text>

      <Text style={styles.footer}>App developed by [Vivian Nguyen]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  image: { width: 200, height: 100, marginBottom: 20 },
  footer: { marginTop: 20, fontSize: 12, color: 'gray' },
});

export default POGSApp;
