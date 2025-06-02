import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home';
import Note from './src/Note';
import Todo from './src/Todo';
import { NavigationContainer } from '@react-navigation/native';
import Foundation from '@expo/vector-icons/Foundation'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <NavigationContainer>
          <Tab.Navigator 
          style={{ paddingTop: 50, backgroundColor: '#E4E9E9'}}
          tabBarPosition='top'
          screenOptions={({route}) => ({
            tabBarShowLabel: false,
            tabBarStyle: {backgroundColor: '#E4E9E9'},
            tabBarIcon: ({focus, color, size}) => {
              let rn = route.name;

              if (rn === 'Home'){
                return <Ionicons name='home-outline' size={20} />
              }

              if (rn === 'Note'){
                return <Foundation name='clipboard-notes' size={20} />
              }

              if (rn === 'Todo'){
                return <FontAwesome5 name="sticky-note" size={20} color="black" />
              }
            }})}
          >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Note' component={Note} />
            <Tab.Screen name='Todo'  component={Todo}/>
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
