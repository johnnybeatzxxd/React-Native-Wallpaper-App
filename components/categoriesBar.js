import {React, useState }from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {categoriesData} from '../constants/categories';


export const CategoriesBar = ({setCategory,setImageData})=>{
    const categories = categoriesData();
    const [selectedCategory, selectCategory] = useState();

    const handlePress = (idx)=>{
        selectedCategory === idx ? selectCategory(null) : selectCategory(idx);
        console.log(selectedCategory);

        selectedCategory === null ? setCategory(''): setCategory(categories[idx]);
        setImageData([]);
        
    }


    return(
    <View style={styles.categoriesBarContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, idx) => (
            <TouchableOpacity 
                style={[styles.categoryContainer, {backgroundColor: selectedCategory === idx ? 'lightgrey' : 'white'}]} 
                key={idx} 
                onPress={()=>{handlePress(idx)}}
            >
                <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
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