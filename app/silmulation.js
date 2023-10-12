export default function  generateSimulatedData() {
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
    setTimeout(generateSimulatedData, 5000); // 5000 milliseconds = 5 seconds
    //return data
  }
  
  // Start the data generation loop
  generateSimulatedData();
  