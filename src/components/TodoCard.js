import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const TodoCard = (props) => {
  return (
    <View style={styles.todo} >
        <Text> {props.text} </Text>
        <View style={styles.actionBtn} >
            <Ionicons name="trash-bin" size={18} color="black" />
            <Ionicons name="checkmark-circle" size={18} color="black" />
        </View>
    </View>
  )
}

export default TodoCard

const styles = StyleSheet.create({
    todo: {
        backgroundColor: 'red',
        width: 'auto',
        height: 50,
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    actionBtn: {
        flexDirection: 'row',
        position: 'absolute',
        left: 290,
        bottom: 5,
        width: 70,
        justifyContent: 'space-between',
    },
})