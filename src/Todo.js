import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useRef, useState } from 'react'
import EmptyList from './components/EmptyList';
import TodoCard from './components/TodoCard';
import TodoInput from './components/TodoInput';
import DoneTask from './components/DoneTask';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';
import { addCompleted } from '../slices/doneSlice';
import { recover } from '../slices/recoverSlice';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

const Todo = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  
  const todos = useSelector(state => state.todos.todos);
  
  const dispatch = useDispatch();

  const handleAddTask = () => {
      setModalVisible(!modalVisible)
  }

  const deleteTask = (id, text, date) => {
    dispatch( deleteTodo(id))
    dispatch(recover({id, text, date}))
    alert('you deleted task')
  }
  
  const completeTask = (id, text) => {
    dispatch(deleteTodo(id))
    dispatch(addCompleted({id, text}))
  }

  const currentNotifId = useRef(null);

  useEffect(() => {
    const updateFirstIncompleteNotification = async () => {
      // Cancel old notification if any
      if (currentNotifId.current) {
        await Notifications.cancelScheduledNotificationAsync(currentNotifId.current);
        currentNotifId.current = null;
      }

      const OldTodo = todos[todos.length - 1]
      console.log(OldTodo)
      if (OldTodo) {
        const triggerTime = new Date(Date.now() + 10 * 1000); // ⏰ 10s delay for testing

        const notifId = await Notifications.scheduleNotificationAsync({
          content: {
            title: '📝 Task Reminder',
            body: `Don't forget to: ${OldTodo.text}`,
            data: { taskId: OldTodo.id },
          },
          trigger: triggerTime,
        });

        currentNotifId.current = notifId;
        console.log(`Notification scheduled for "${OldTodo.text}"`);
      }
    };

    updateFirstIncompleteNotification();
  }, [todos]);

  return (
    <View style={styles.container}>
      <FlatList ListEmptyComponent={<EmptyList/>} data={[...todos]} renderItem={({item}) => (<TodoCard id={item.id} text={item.text} date={item.date} onDelete={deleteTask} onCheck={completeTask} />)}
      style={{ marginBottom: 110, }}
      contentContainerStyle={todos.length === 0 && {flex: 1, justifyContent: 'center'}} />
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









