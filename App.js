import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  // const [flag,setflag] = useState(true)
  // const [state, setstate] = useState(initialState)
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  
    
  
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
    
    <View style={styles.container2}>
        <Text>ALBERTO AUTO DEALERSHIP</Text>
    </View>

      
    <View style={styles.container3}>
      <Text>This is my shopping app</Text>
      <Text>hellow</Text>
        
    </View>

    </View>
  );
}
  const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#7CA1B4",

},
  container2:{
    paddingTop: 30,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: "center",
},

  container3: {
    padding: 10,
    alignItems: "center",

    
  },
  
});
