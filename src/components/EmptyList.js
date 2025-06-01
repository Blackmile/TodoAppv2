import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} >All tasks are completed</Text>
    </View>
  )
}

export default EmptyList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -150,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 600,
    color: '#524F4F',
  }
})