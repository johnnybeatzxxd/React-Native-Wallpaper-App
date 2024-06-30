import { TextInput, View,StyleSheet } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
export const Searchbar = ()=> {
    return(
        <View style={styles.searchContainer}>
            <Ionicons name='search' size={25} style={{padding:10}}/>
            <TextInput style={styles.textInput}/>
            <View style={styles.cancelButtonConatiner}>
                <MaterialIcons name="clear" size={28} color="black" />
            </View>
        </View>
        )
}
const styles = StyleSheet.create({
    searchContainer:{
        height:50,
        marginHorizontal:8,
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
        width:45,
        marginHorizontal:10,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center"
    }
})