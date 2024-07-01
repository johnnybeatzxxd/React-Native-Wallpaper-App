import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {categoriesData} from '../constants/categories';


export const CategoriesBar = ()=>{
    const categories = categoriesData();
    
    return(
    <View style={styles.categoriesBarContainer}>
        <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
        {categories.map((catagory)=>(
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>{catagory}</Text>
            </View>
        ))}
        </ScrollView>
    </View>)
}
const styles = StyleSheet.create({
    categoriesBarContainer:{
        flexDirection:'row'
    },
    categoryContainer:{
        borderWidth:1,
        height:'auto',
        width:'auto',
        borderRadius:20,
        margin:6,
        backgroundColor:"white",
        borderColor:"grey"
    },
    categoryText:{
        marginHorizontal:11,
        marginVertical:4,
    },
})