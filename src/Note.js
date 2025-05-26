import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Note = () => {

  const Data = [{
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'Third Item',
    },
    {
      id: '5',
      title: 'Third Item',
    },
    {
      id: '6',
      title: 'Third Item',
    },
  ]

  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <Text> {item.title} </Text>
        )}
      />
    </View>
  )
}

export default Note

const styles = StyleSheet.create({})