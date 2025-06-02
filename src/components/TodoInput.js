import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../../slices/todoSlice';

const TodoInput = (props) => {
  const [task, setTask] = useState  ('')
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    props.onDone()
    dispatch(addTodo(task))
    setTask(null)
  }
  
  const handleCancel = () => {
    props.onCancel()
    setTask(null)
  }

  return (
    <Modal animationType="slide" transparent={true} visible={props.onVisible} onRequestClose={() => props.onRequest} >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            placeholder='What are you doing today'
            style={styles.textInput}
            value={task}
            onChangeText={setTask}
          />
          <View style={styles.modalBtn} >
            <Pressable style={styles.Btn} onPress={handleCancel} >
              <Ionicons name="close-circle" size={16} color="red" />
              <Text style={styles.textStyle}>cancel</Text>
            </Pressable>
            <Pressable style={styles.Btn} onPress={handleAddTask} >
              <Ionicons name="checkmark-circle" size={16} color="green" />
              <Text style={styles.textStyle}>done</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default TodoInput

const styles = StyleSheet.create({
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
  Btn: {
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