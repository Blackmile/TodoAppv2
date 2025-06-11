import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { resetDone } from '../../slices/doneSlice';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const DoneTask = (props) => {
    const navigation = useNavigation();

    const DATA = useSelector(state => state.doneTodos.doneTodos)
    const dispatch = useDispatch()

    const Card = (props) => {
      return(
        <View style={styles.itemStyle} >
          <Text> {props.text} </Text>
          <Text style={styles.itemDate} > completed task on {props.date} </Text>
        </View>
      )
    }
    

  return (
    <View style={styles.container}>

      <Modal
        isVisible={props.onOpen}
        // onBackdropPress={props.onClose}
        style={styles.modal}
        // swipeDirection="down"
        // onSwipeComplete={props.onClose}
        backdropTransitionOutTiming={0}
      >
        <View style={styles.content}>
          <Text style={styles.textStyle} > completed task {DATA.length} </Text>
          <Pressable onPress={props.onClose} >
            <Ionicons style={styles.downbtn} name="chevron-down-circle" size={24} color="black" />
          </Pressable>
          <FlatList 
            data={DATA} 
            renderItem={({item}) => <Card text={item.text} date={item.date} /> }
            initialNumToRender={5}
          />
          <View style={styles.footer}>
            <Pressable onPress={() => dispatch(resetDone())}>
                <Text> clear list </Text>
            </Pressable>
            <Pressable 
                style={{alignContent: 'center', flexDirection: 'row'}} 
                onPress={() => {
                    props.onClose()
                    navigation.navigate('Deleted')
                }} 
            >
                <Ionicons name="trash-bin" size={14} color="black" />
                <Text> Deleted tasks </Text>
            </Pressable>
          </View>
        </View>
      </Modal> 

    </View>
  )
}

export default DoneTask

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    modal: {
        flex:1,
        justifyContent: 'flex-end',
        margin: 0,
    },
    content: {
        // flex: 1,
        height: '50%',
        backgroundColor: 'white',
        padding: 30,
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
    },
    textStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    itemStyle: {
        backgroundColor: '#A7E28C',
        marginBottom: 10,
        padding: 5,
        borderRadius: 10,
        // color: 'white',
    },
    itemDate: {
      fontSize: 10,
      fontWeight: 200,
    },
    downbtn: {
        left: "90%",
        marginBottom: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})