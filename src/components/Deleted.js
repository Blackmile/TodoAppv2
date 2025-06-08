import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Deleted = () => {
    const navigation = useNavigation()

  return (
    <View style={styles.container} >
      <Text> display deleted items with options to recover </Text>
      <Pressable onPress={() => navigation.goBack()} >
        <Text>go back</Text>
      </Pressable>
    </View>
  )
}

export default Deleted

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',  
    },
})