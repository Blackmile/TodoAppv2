import { FlatList, StyleSheet, Text, View } from 'react-native'
import Modal from 'react-native-modal';

const DoneTask = (props) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '1',
            title: 'First Item',
        },
        {
            id: '2',
            title: 'Second Item',
        },
        {
            id: '3',
            title: 'Third Item',
        },
        {
            id: '4',
            title: 'Third Item',
        },
        {
            id: '5',
            title: 'Third Item',
        },
        {
            id: '6',
            title: 'Third Item',
        },
    ];
    

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
          <Text style={styles.textStyle} > completed task {props.numTask} </Text>
          <FlatList 
            data={DATA} 
            renderItem={({item}) => <Text>{item.title}</Text>}
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