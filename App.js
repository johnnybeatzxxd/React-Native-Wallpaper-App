import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native' 
import Home from './Screens/HomePage';
import Favorites from './Screens/FavoritesPage';
import  Settings from './Screens/SettingsPage';

export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Home' component={Home}/> 
        <Tabs.Screen name='Favorites' component={Favorites}/> 
        <Tabs.Screen name='Settings' component={Settings}/> 
      </Tabs.Navigator>
    </NavigationContainer>

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
