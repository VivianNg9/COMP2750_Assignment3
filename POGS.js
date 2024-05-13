import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function POGSApp() {
  // Data
  const vegetables = ['Potato-$5', 'Carrot-$8', 'Cabbage-$5', 'Broccoli-$7', 'Spinach-$6'];
  const fruits = ['Orange-$11', 'Blueberry-$12', 'Apple-$11', 'Grapes-$15', 'Pineapple-$14'];

  // States
  const [selectedVeg, setSelectedVeg] = useState(vegetables[0]);
  const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
  const [quantity, setQuantity] = useState('1');
  const [totalCost, setTotalCost] = useState('Select items and quantity to see total cost');

  // Calculate the total cost
  const calculateTotal = () => {
    const vegPrice = parseInt(selectedVeg.split('-$')[1]);
    const fruitPrice = parseInt(selectedFruit.split('-$')[1]);
    const total = (vegPrice + fruitPrice) * parseInt(quantity);
    setTotalCost(`Total Cost of Order: $${total}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Welcome to POGS Online Shopping App</Text>
      </View>

      <View style={styles.row}>
        <Picker style={styles.picker}
          selectedValue={selectedVeg}
          onValueChange={(itemValue) => setSelectedVeg(itemValue)}
        >
          {vegetables.map((veg) => (
            <Picker.Item key={veg} label={veg} value={veg} />
          ))}
        </Picker>

        <Picker style={styles.picker}
          selectedValue={selectedFruit}
          onValueChange={(itemValue) => setSelectedFruit(itemValue)}
        >
          {fruits.map((fruit) => (
            <Picker.Item key={fruit} label={fruit} value={fruit} />
          ))}
        </Picker>

        <Picker style={styles.picker}
          selectedValue={quantity}
          onValueChange={(itemValue) => setQuantity(itemValue)}
        >
          {[...Array(5).keys()].map(i => (
            <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
          ))}
        </Picker>
      </View>

      <View>
        <Button title="Calculate" onPress={calculateTotal} />
      </View>

      <View>
        <Text style={styles.heading}>{totalCost}</Text>
      </View>

      <View>
        <Text style={styles.footer}>App developed by Group 8 </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3D3E3'
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10
  },
  picker: {
    flex: 1
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
    color: 'gray'
  }
});
