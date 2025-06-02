import { FlatList, StyleSheet, Text, View } from 'react-native'
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';

const DoneTask = (props) => {

    const DATA = useSelector(state => state.doneTodos.doneTodos)
    

  return (
    <View style={styles.container}>

      <Modal
        isVisible={props.onOpen}
        onBackdropPress={props.onClose}
        style={styles.modal}
        swipeDirection="down"
        onSwipeComplete={props.onClose}
        backdropTransitionOutTiming={0}
      >
        <View style={styles.content}>
          <Text style={styles.textStyle} > completed task {DATA.length} </Text>
          <FlatList 
            data={DATA} 
            renderItem={({item}) => <Text>{item.text}</Text>}
            initialNumToRender={5}
          />
        </View>
      </Modal> 

    </View>
  )
}

export default DoneTask

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    content: {
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
})