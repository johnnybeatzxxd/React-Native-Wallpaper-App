import { TextInput, View,StyleSheet } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react'
import Animated, { useSharedValue, withSpring, useAnimatedStyle, Easing } from 'react-native-reanimated';
export const Searchbar = ()=> {
    const [searchText, setSearchText] = useState('');
    
    return(
        <View style={styles.searchContainer}>
            <Ionicons name='search' size={20} style={{padding:10}}/>
            <TextInput 
                style={styles.textInput}
                value={searchText}
                onChangeText = {(value)=>setSearchText(value)}
                />
            {searchText &&
            <View style={[styles.cancelButtonConatiner]}>
                <MaterialIcons name="clear" size={25} color="black" onPress={()=>{setSearchText('')}}/>
            </View >}
        </View>
        )
}
const styles = StyleSheet.create({
    searchContainer:{
        height:40,
        marginHorizontal:8,
        marginTop:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:"grey",
        backgroundColor:"white",
        flexDirection:'row',
        alignItems:'center'
    },
    textInput:{
        flex:1,
        borderWidth:1,
        borderColor:"white",
        height:"100%"
    },
    cancelButtonConatiner:{
        height:"80%",
        borderWidth:0,
        backgroundColor:"lightgrey",
        width:35,
        marginHorizontal:10,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center"
    }
})