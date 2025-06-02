import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react'
import EmptyList from './components/EmptyList';
import TodoCard from './components/TodoCard';
import TodoInput from './components/TodoInput';
import DoneTask from './components/DoneTask';

const Todo = () => {

  const [taskItems, setTaskItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState([])
  const handleAddTask = (task) => {
      setTaskItems((currTask) => [...currTask, {text: task, id: Math.random().toString()}])
      setModalVisible(!modalVisible)
  }

  const deleteTask = (id) => {
    setTaskItems(currTask => (currTask.filter((task) => task.id !== id)))
    alert('you deleted task')
  }
  
  const completeTask = (id, text) => {
    setCount((currTask) => [...currTask, {text, id}] )
    setTaskItems(currTask => (currTask.filter((task) => task.id !== id)))
  }

  

  return (
    <View style={styles.container}>
      <FlatList ListEmptyComponent={<EmptyList/>} data={[...taskItems].reverse()} renderItem={({item}) => (<TodoCard id={item.id} text={item.text} onDelete={deleteTask} onCheck={completeTask} />)}
      contentContainerStyle={taskItems.length === 0 && {flex: 1}} />
      <View style={styles.footer} >
        <View style={styles.doneTask} >
          <Pressable onPress={() => {setIsVisible(true)}}>
            <Text>view completed tasks</Text>
          </Pressable>
        </View>
        <View style={styles.addBtn}>
          <Pressable onPress={()=>{setModalVisible(true)} }>
            <Ionicons name="add-circle-sharp" size={52} color="white" />
          </Pressable> 
        </View>
      </View>
      <DoneTask onOpen={isVisible} onClose ={() => setIsVisible(false)} numTask={count.length}/>
      <TodoInput onCancel={() => setModalVisible(false)} onDone={handleAddTask} onVisible={modalVisible} onRequest={() => setModalVisible(false)}  />
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E4E9E9',
    flex: 1,
  },
  addBtn:{
    right: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    width: 400,
    position: 'absolute',
    bottom: 100,
    margin: 10,
  },
  doneTask: {},
  
})