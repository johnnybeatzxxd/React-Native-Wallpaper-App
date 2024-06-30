import { StatusBar } from 'expo-status-bar';
import { React, useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MasonryFlashList } from "@shopify/flash-list";
import { ImageComponent } from '../components/imageContainer';
import { queryImage } from '../utils/fetchImage';
import axios from 'axios';
import { PIXEL_API_KEY } from '@env';


export default function HomePage(){
    const [imageData, setImageData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [query,setQuery] = useState('movie wallpaper')
    
    
    useEffect(() => {
        console.log(query);
        queryImage(query, pageNumber) 
        .then(images => { 
            setImageData([...imageData,...images]);
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
    }, [pageNumber]); 

    
    const imageComponent = ({item})=>(<ImageComponent ImageObject={item}/>);
    
    return(
        <View style={styles.MainContainer}>
            {imageData.length > 0 ?( <MasonryFlashList
                data={imageData}
                estimatedItemSize={184}
                removeClippedSubviews={true}
                initialNumToRender={20}
                windowSize={11}
                maxToRenderPerBatch={8}
                renderItem={imageComponent} 
                numColumns={2}
                keyExtractor={(item) => item.id}
                onEndReachedThreshold={0.5}
                onEndReached={()=>{setPageNumber(pageNumber+1)}}
            />):(<Text>Loading...</Text>)}
           
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