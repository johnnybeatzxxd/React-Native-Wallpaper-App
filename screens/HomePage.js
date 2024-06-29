import { StatusBar } from 'expo-status-bar';
import { React, useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MasonryFlashList } from "@shopify/flash-list";
import { ImageComponent } from '../components/imageContainer';
import axios from 'axios';
import { PIXEL_API_KEY } from '@env';


export default function HomePage(){
    const [imageData, setImageData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    let query = 'monster'
    query = query.split(" ").join("+")
    axios.get('https://pixabay.com/api/?key='+ PIXEL_API_KEY +'&q='+query+'&image_type=photo&pretty=true&page='+pageNumber).then(response=>{
      var images = response.data.hits;
      setImageData([...imageData,images])
      
    })

    useEffect(()=>{
        console.log(pageNumber);
    },[pageNumber])

    
    const imageComponent = ({item})=>(<ImageComponent ImageObject={item}/>);
    return(
        <View style={styles.MainContainer}>
          
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
    },
    ImageContainer:{
        
        height:100,
        borderWidth:1,
        borderColor:"black"
    }
})