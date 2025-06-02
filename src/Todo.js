import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react'
import EmptyList from './components/EmptyList';
import TodoCard from './components/TodoCard';
import TodoInput from './components/TodoInput';
import DoneTask from './components/DoneTask';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, addCompleted } from '../slices/todoSlice';

const Todo = () => {

  // const [taskItems, setTaskItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  
  const todos = useSelector(state => state.todos.todos);
  
  const dispatch = useDispatch();

  const handleAddTask = (task) => {
      // setTaskItems((currTask) => [...currTask, {text: task, id: Math.random().toString(), date: Date().toString()  }])
      setModalVisible(!modalVisible)
  }

  const deleteTask = (id) => {
    // setTaskItems(currTask => (currTask.filter((task) => task.id !== id)))
    dispatch(deleteTodo(id))
    alert('you deleted task')
  }
  
  const completeTask = (id, text) => {
    dispatch(deleteTodo(id))
    dispatch(addCompleted({id, text}))
    // setCount((currTask) => [...currTask, {text, id}] )
  }



  return (
    <View style={styles.container}>
      <FlatList ListEmptyComponent={<EmptyList/>} data={[...todos].reverse()} renderItem={({item}) => (<TodoCard id={item.id} text={item.text} date={item.date} onDelete={deleteTask} onCheck={completeTask} />)}
      contentContainerStyle={todos.length === 0 && {flex: 1}} />
      <View style={styles.footer} >
        <View style={styles.doneTask} >
          <Pressable onPress={() => {setIsVisible(true)}}>
            <Text>view completed tasks</Text>
          </Pressable>
        </View>
        <View style={styles.addBtn}>
          <Pressable onPress={()=>{setModalVisible(true)} }>
            <Ionicons name="add-circle-sharp" size={52} color="black" />
          </Pressable> 
        </View>
      </View>
      <DoneTask onOpen={isVisible} onClose ={() => setIsVisible(false)} />
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
    right: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    padding: 30,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },
  doneTask: {},
  
})