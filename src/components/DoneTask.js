import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { resetDone } from '../../slices/doneSlice'

const DoneTask = (props) => {

    const DATA = useSelector(state => state.doneTodos.doneTodos)
    const dispatch = useDispatch()
    

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
            <Text> down </Text>
          </Pressable>
          <FlatList 
            data={DATA} 
            renderItem={({item}) => <Text style={styles.itemStyle} >{item.text}</Text>}
            initialNumToRender={5}
          />
          <Pressable onPress={() => dispatch(resetDone())}>
            <Text> clear list </Text>
          </Pressable>
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
        backgroundColor: 'green',
        marginBottom: 10,
        padding: 20,
        borderRadius: 10,
    },
})