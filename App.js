import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32, 0, 126)')

  const changeBG = () => {
    let color = 'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    setRandomColor(color)
  }

  const reset = () => {
    let color = 'rgb(0, 0, 0)'
    setRandomColor(color)
  }
  
  return(
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset}>
          <Text style={styles.reset}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
    backgroundColor: '#22A2AF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#ffffff',
    borderRadius: 15,
    textTransform: 'uppercase'
  },
  reset:{
    fontSize: 30,
    backgroundColor: '#22A2AF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#ffffff',
    borderRadius: 15,
    textTransform: 'uppercase',
    marginTop: 8
  },
})