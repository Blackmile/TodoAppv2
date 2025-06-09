import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { emptyList } from '../../slices/recoverSlice'

const Deleted = () => {
    const navigation = useNavigation()

    const data = [{id: 1, text: 'first'}]

    const dispatch = useDispatch()

    const delItem = useSelector(state => state.recoverTodo.recoverTodo)

    console.log(delItem)

  return (
    <View style={styles.container} >
      <Text> display deleted items with options to recover </Text>
      <Text> Recover all task </Text>
      <Pressable onPress={() => dispatch(emptyList()) } style={{padding: 20, backgroundColor: 'red'}} >
        <Text> empty trash </Text>
      </Pressable>
      <Pressable onPress={() => navigation.goBack()} >
        <Text>go back</Text>
      </Pressable>

        <FlatList data={delItem} renderItem={({item}) => (<Text> {item.text} </Text>) } />

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