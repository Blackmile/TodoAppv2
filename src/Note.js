import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Note = () => {

  return (
    <View style={ styles.container } >
      <Text style={ styles.text } > Coming Soon... </Text>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: '400',
  },
})