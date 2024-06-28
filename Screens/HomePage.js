import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MasonryFlashList } from "@shopify/flash-list";
import axios from 'axios';


export default function HomePage(){
    const [imageData, setImageData] = useState([])

    const API_KEY = process.env.PIXEL_API_KEY
    let query = 'blue moon'
    query = query.split(" ").join("+")
    
    axios.get('https://pixabay.com/api/?key='+ API_KEY +'&q='+query+'&image_type=photo&pretty=true').then(response=>{
      var images = response.data.hits;
      setImageData(images)
      
    })
  
    return(
        <View style={styles.MainContainer}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
    },
    
})