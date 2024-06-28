import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native' 
import Home from './Screens/HomePage';
import Favorites from './Screens/FavoritesPage';
import  Settings from './Screens/SettingsPage';

export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Home' component={Home} options={{tabBarIcon:({focused,color,size})=>(<MaterialCommunityIcons name="home" color={color} size={size}/>)}}/> 
        <Tabs.Screen name='Favorites' component={Favorites} options={{tabBarIcon:({focused,color,size})=>(<MaterialCommunityIcons name="heart" color={color} size={size}/>)}}/> 
        <Tabs.Screen name='Settings' component={Settings} options={{tabBarIcon:({focused,color,size})=>(<MaterialCommunityIcons name="cog" color={color} size={size}/>)}}/> 
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
