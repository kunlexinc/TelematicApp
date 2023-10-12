import {StyleSheet, Text, View, Platform} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react';


import React from 'react'


  
  // Start the data generation loop
 // generateSimulatedData();

  

  
  

export default function FlatCards() {
    const [speed, setSpeed] = useState(0);
    const [rpm, setRpm] = useState(0);
    const [fuelLevel, setFuelLevel] = useState(0);
    const [engineTemperature, setEngineTemperature] = useState(0);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    useEffect(() => {
        return ()=>{
        setInterval(() => generateSimulatedData(), 5000);
        }
         
          
        
      }, []);


      function generateSimulatedData() {
        // Simulated data for each metric
        const speed = Math.floor(Math.random() * 100); // Random speed between 0 and 100 km/h
        const rpm = Math.floor(Math.random() * 8000); // Random RPM between 0 and 8000
        const fuelLevel = Math.random() * 100; // Random fuel level between 0 and 100%
        const engineTemperature = Math.floor(Math.random() * 100); // Random temperature between 0 and 100°C
        const latitude = (Math.random() * 180) - 90; // Random latitude between -90 and 90
        const longitude = (Math.random() * 360) - 180; // Random longitude between -180 and 180
      
        // Create a data object
        const data = {
          speed,
          rpm,
          fuelLevel,
          engineTemperature,
          location: {
            latitude,
            longitude,
          },
        };
      
        // Update the UI or send the data to the server here
        console.log(data);
      
        // Schedule the next data generation after 5 seconds
        //setTimeout(generateSimulatedData, 5000); // 5000 milliseconds = 5 seconds
        
        
        setSpeed(data.speed);
        setRpm(data.rpm);
        setFuelLevel(data.fuelLevel);
        setEngineTemperature(data.engineTemperature);
        //return data
      
    }
    

  return (
    <View>
    <Text style={styles.headingText}>Drive Safe</Text>
      <View style={styles.container}>
          
          <View style={[styles.card, styles.cardOne]}>
              <Text>{speed}</Text>
              <Text>Speed</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
              <Text>{rpm}</Text>
              <Text>RPM</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
              <Text>{fuelLevel}</Text>
              <Text>FuelLevel</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
              <Text>{engineTemperature}</Text>
              <Text>Engine Temp.</Text>
          </View>
          
          
      </View>
  </View>
  );
}

const styles = StyleSheet.create({

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
},
container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    flexDirection: 'row',
    padding: 8,
},
card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "50%",
    height: 100,
    borderRadius: 4,
    margin: 8
},
cardOne: {
    backgroundColor: '#EF5354'
},
cardTwo: {
    backgroundColor: '#50DBB4'
},
cardThree: {
    backgroundColor: '#5DA3FA'
} 
});
