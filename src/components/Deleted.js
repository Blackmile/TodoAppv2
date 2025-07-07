import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, emptyList } from '../../slices/recoverSlice'
import { addTodo, recoverAllTodo } from '../../slices/todoSlice'
import Ionicons from '@expo/vector-icons/Ionicons';

const Deleted = () => {
    const navigation = useNavigation()

    const dispatch = useDispatch()

    const data = useSelector(state => state.recoverTodo.recoverTodo)

    const returnTodo = (id, text) => {
      dispatch(addTodo(text))
      dispatch(deleteItem(id))
    }

    const recoverAll = () => {
      dispatch(recoverAllTodo(data))
      dispatch(emptyList())
    }

    const Card = (props) => {
      return(
        <View style={styles.card}>
          <Text> {props.text} </Text>
          <Pressable 
            onPress={()=> {
              props.onRecover(props.id, props.text)
            }} style={styles.recoverBtn} >
            <Ionicons name="arrow-undo" size={16} color="black" />
            <Text> Recover </Text>
          </Pressable>
        </View>
      )
    }

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Pressable onPress={() => navigation.goBack()} style={styles.back} >
          <Ionicons name="arrow-back-circle-sharp" size={22} color="black" />
          <Text>back</Text>
        </Pressable>
        <Text style={styles.title} > Recently Deleted </Text>

      </View>

      <FlatList style={styles.listStyle} data={data} renderItem={({item}) => (<Card id={item.id} text={item.text} onRecover={returnTodo} />) } />

      
      <View style={styles.footer} >
        <Pressable style={styles.back} onPress={ recoverAll } >
          <Ionicons name="arrow-undo" size={24} color="black" />
          <Text> Recover all task </Text>
        </Pressable>
        <Pressable onPress={() => dispatch(emptyList()) } style={styles.back} >
          <Ionicons name="trash-sharp" size={24} color="black" />
          <Text> empty trash </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Deleted

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: '#E4E9E9',  
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      paddingLeft: 50,
      fontSize: 28,
      fontWeight: 600,
    },
    back: {
      flexDirection: 'row',
      alignItems: 'center',
      left: 6,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 50, 
    },
    listStyle: {
      marginTop: 20,
    },
    card: {
      padding: 8,
      backgroundColor: '#fff',
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    recoverBtn: {
      flexDirection: 'row',
      alignItems: 'center',
    }
})