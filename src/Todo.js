import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react'
import EmptyList from './components/EmptyList';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

const Todo = () => {

  const [taskItems, setTaskItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleAddTask = (task) => {
      setTaskItems((currTask) => [...currTask, {"text": task, "key": Math.random().toString()}])
      setModalVisible(!modalVisible)
      console.log(task, taskItems)
  }
  

  return (
    <View style={styles.container}>
      <FlatList ListEmptyComponent={<EmptyList/>} data={taskItems} renderItem={({item}) => (<TodoItem text={item.text} />)} />
      <View style={styles.addBtn}>
        <Pressable onPress={()=>{console.log('pressed'), setModalVisible(true)} }>
          <Ionicons name="add-circle-sharp" size={52} color="white" />
        </Pressable> 
      </View>
      <TodoInput onCancel={() => setModalVisible(false)} onDone={handleAddTask} onVisible={modalVisible} onRequest={() => setModalVisible(false)}  />
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    display: 'flex',
    flex: 1,
  },
  addBtn:{
    position: 'absolute',
    bottom: 100,
    right: 30,
  },
  
})