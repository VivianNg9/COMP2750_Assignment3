import React, { useState } from "react"; // Import React and useState hook
import { Image, Text, View, Button, SafeAreaView, ScrollView, StyleSheet } from 'react-native'; // Import components from React Native
import { Picker } from '@react-native-picker/picker'; // Import Picker for dropdown menus
import pic from "./assets/delivery_box.png"; // Import an image for the app logo

export default function App() {
  const [veggieSelected, setVeggieSelected] = useState(""); // State to store selected vegetable
  const [veggieQuantity, setVeggieQuantity] = useState("1"); // State to store selected vegetable quantity
  const [fruitSelected, setFruitSelected] = useState(""); // State to store selected fruit
  const [fruitQuantity, setFruitQuantity] = useState("1"); // State to store selected fruit quantity
  const [totalPrice, setTotalPrice] = useState("0"); // State to store the total price

  const calculateTotal = () => {
    const vegCost = veggieSelected ? parseInt(veggieSelected) : 0; // Get the cost of the selected vegetable or 0 if not selected
    const vegQuant = parseInt(veggieQuantity); // Convert vegetable quantity to integer
    const fruitCost = fruitSelected ? parseInt(fruitSelected) : 0; // Get the cost of the selected fruit or 0 if not selected
    const fruitQuant = parseInt(fruitQuantity); // Convert fruit quantity to integer
    setTotalPrice("Total cost of the order: $" + String((vegCost * vegQuant) + (fruitCost * fruitQuant))); // Calculate and set the total price
  };

  return (
    <SafeAreaView style={styles.container}> {/* Container for safe area */}
      <ScrollView contentContainerStyle={styles.scrollView}> {/* Scrollable container */}
        <View style={styles.heading}> {/* Heading section */}
          <Text style={styles.title}>POGS ONLINE SHOPPING APP</Text> {/* App title */}
          <Image source={pic} style={styles.logo} /> {/* App logo */}
        </View>
        <View style={styles.dropdownContainer}> {/* Container for dropdowns */}
          <Text style={styles.sectionTitle}>Vegetable Choice</Text> {/* Section title for vegetables */}
          <View style={styles.pickerRow}> {/* Row for vegetable pickers */}
            <Picker
              style={styles.picker1}
              selectedValue={veggieSelected}
              onValueChange={(itemValue) => setVeggieSelected(itemValue)} // Update selected vegetable
            >
              <Picker.Item label="Select Vegetable" value="" />
              <Picker.Item label="Tomato - $6" value="6" />
              <Picker.Item label="Broccoli - $5" value="5" />
              <Picker.Item label="Carrot - $8" value="8" />
              <Picker.Item label="Spinach - $4" value="4" />
            </Picker>
            <Picker
              style={styles.picker2}
              selectedValue={veggieQuantity}
              onValueChange={(itemValue) => setVeggieQuantity(itemValue)} // Update vegetable quantity
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
          <Text style={styles.sectionTitle}>Fruit Choice</Text> {/* Section title for fruits */}
          <View style={styles.pickerRow}> {/* Row for fruit pickers */}
            <Picker
              style={styles.picker1}
              selectedValue={fruitSelected}
              onValueChange={(itemValue) => setFruitSelected(itemValue)} // Update selected fruit
            >
              <Picker.Item label="Select Fruit" value="" />
              <Picker.Item label="Apple - $7" value="7" />
              <Picker.Item label="Orange - $8" value="8" />
              <Picker.Item label="Kiwi - $8" value="8" />
              <Picker.Item label="Mango - $12" value="12" />
            </Picker>
            <Picker
              style={styles.picker2}
              selectedValue={fruitQuantity}
              onValueChange={(itemValue) => setFruitQuantity(itemValue)} // Update fruit quantity
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
        </View>
        <View style={styles.buttonContainer}> {/* Container for the button */}
          <Button title="Calculate Total" onPress={calculateTotal} color="#008037" /> {/* Button to calculate total */}
        </View>
        <Text style={styles.totalPrice}>{totalPrice}</Text> {/* Display total price */}
      </ScrollView>
      <View style={styles.footer}> {/* Footer section */}
        <Text style={styles.footerText}>App developed by Group 8</Text> {/* Footer text */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7ffec', // Background color for the app
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 20, // Padding for the scrollable container
  },
  heading: {
    fontSize: 23, 
    alignItems: 'center',
    marginTop: 10, 
    marginBottom: 30, // Styling for the heading section
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008037',
    marginBottom: 20, // Styling for the app title
  },
  logo: {
    width: 200,
    height: 200, // Styling for the app logo
  },
  dropdownContainer: {
    marginBottom: 20, // Container for dropdown menus
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#008037',
    marginBottom: 10, // Styling for section titles
  },
  pickerRow: {
    flexDirection: 'row',
    marginBottom: 20, // Row styling for pickers
  },
  picker1: {
    flex: 2,
    color: '#008037',
    backgroundColor: '#e0f7da',
    borderRadius: 5,
    marginHorizontal: 1,
    justifyContent: 'center',
    textAlign: 'center', // Styling for the first picker
  },
  picker2: {
    flex: 1,
    color: '#008037',
    backgroundColor: '#e0f7da',
    borderRadius: 5,
    marginHorizontal: 1,
    justifyContent: 'center',
    textAlign: 'center', // Styling for the second picker
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 30, // Container styling for the button
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008037',
    textAlign: 'center', // Styling for the total price text
  },
  footer: {
    padding: 20,
    backgroundColor: '#FDDDC7',
    alignItems: 'center', // Footer section styling
  },
  footerText: {
    color: '#008037',
    fontSize: 16, // Styling for the footer text
  },
});
