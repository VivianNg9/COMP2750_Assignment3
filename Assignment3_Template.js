import React, {useState} from "react";
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker'; 

export default function App() {

const [label, setLabel] = useState('Press the above button to calculate')
const [picker1Value, setPicker1Value] = useState('COMP1000-2')
const [picker2Value, setPicker2Value] = useState('345')

  return (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style = {styles.heading}> Credit Points Calculator </Text>
    </View>

    <View style = {styles.row}>
      <Picker style = {styles.picker}
        selectedValue = {picker1Value} onValueChange = {(itemValue, itemIndex) => setPicker1Value(itemValue)}
      >
      <Picker.Item label = 'COMP1000-2' value= 'COMP1000-2' />
      <Picker.Item label = 'COMP2750-3' value= 'COMP2750-3' />
      <Picker.Item label = 'COMP2750-8' value= 'COMP2750-8' />
      </Picker>

      <Picker style = {styles.picker}
        selectedValue = {picker2Value} onValueChange = {(itemValue, itemIndex) => setPicker2Value(itemValue)}
      >
      <Picker.Item label = '345' value= '345' />
      <Picker.Item label = '786' value= '786' />
      <Picker.Item label = '247' value= '247' />
      </Picker>
    </View>

    <View>
      <Button title = 'CALCULATE' 
        onPress = {
          () => {
            //Find the credit points from the first label
            const lastChar = picker1Value[picker1Value.length-1]

            //convert the character value to integer
            const creditPoint = parseInt(lastChar)
            const numOfStudents = parseInt(picker2Value)

            // set the label value to credit points * no. of students
            setLabel(creditPoint * numOfStudents)
          }
        }
      />
    </View>

    <View>
      <Text style = {styles.heading}> {label} </Text>
    </View>
  </SafeAreaView>
  );}

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
    }
  });