import { FlatList, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react'

const Todo = () => {

  const [task, setTask] = useState('')
  const [taskItems, setTaskItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleAddTask = () => {
      setTaskItems((currTask) => [...currTask, {"text": task, "key": Math.random().toString()}])
      setModalVisible(!modalVisible)
      setTask(null)
      console.log(task, taskItems)

  }
  

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.textStyle}
        data={taskItems}
        renderItem={({item}) => (
          <View style={styles.todo} >
            <Text> {item.text} </Text>
            <View style={styles.actionBtn} >
              <Ionicons name="trash-bin" size={18} color="black" />
              <Ionicons name="checkmark-circle" size={18} color="black" />
            </View>
          </View>
        )}
        
      />
      <View style={styles.addBtn}>
        <Pressable onPress={()=> setModalVisible(true)}>
          <Ionicons name="add-circle-sharp" size={52} color="white" />
        </Pressable> 
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder='What are you doing today'
              style={styles.textInput}
              value={task}
              onChangeText={setTask}
            />
            <View style={styles.modalBtn} >
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Ionicons name="close-circle" size={16} color="red" />
                <Text style={styles.textStyle}>cancel</Text>
              </Pressable>
              <Pressable
                style={styles.closeButton}
                onPress={() => {
                  handleAddTask(task)
                }}
              >
                <Ionicons name="checkmark-circle" size={16} color="green" />
                <Text style={styles.textStyle}>done</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    display: 'flex',
    flex: 1,
  },
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
  addBtn:{
    position: 'absolute',
    bottom: 100,
    right: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
  },
  modalView: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
    width: 300,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  closeButton: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  textStyle: {
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
  },
  modalBtn: {
    flexDirection: 'row',
    width: 250,
    justifyContent: 'space-between',
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: 250,
    fontSize: 16,
    marginBottom: 20,
  },
})