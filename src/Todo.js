import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react'
import EmptyList from './components/EmptyList';
import TodoCard from './components/TodoCard';
import TodoInput from './components/TodoInput';

const Todo = () => {

  const [taskItems, setTaskItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleAddTask = (task) => {
      setTaskItems((currTask) => [...currTask, {text: task, id: Math.random().toString()}])
      setModalVisible(!modalVisible)
      console.log(task, taskItems)
  }

  const deleteTask = (id) => {
    setTaskItems(currTask => (currTask.filter((task) => task.id !== id)))
    alert('you deleted task')
  }
  

  return (
    <View style={styles.container}>
      <FlatList ListEmptyComponent={<EmptyList/>} data={taskItems} renderItem={({item}) => (<TodoCard id={item.id} text={item.text} onDelete={deleteTask} onCheck />)} />
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