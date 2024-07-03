import { StatusBar } from 'expo-status-bar';
import { React, useState, useEffect } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { MasonryFlashList } from "@shopify/flash-list";
import { ImageComponent } from '../components/imageContainer';
import { queryImage } from '../utils/fetchImage';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { Searchbar } from '../components/searchBar';
import { CategoriesBar } from '../components/categoriesBar';
import {data} from '../constants/categories'
import Animated, { useSharedValue, withSpring, useAnimatedStyle, Easing, withTiming } from 'react-native-reanimated';


export default function HomePage(){
    const [imageData, setImageData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [query,setQuery] = useState('');
    const [category,setCategory] = useState();
    const errorBoxWidth = useSharedValue(0);
    const errorBoxHeight = useSharedValue(0);
    const errorText = useSharedValue(0)
    const setImages = (query,pageNumber)=>{
        console.log(query);
        queryImage(query, pageNumber,category) 
        .then(images => { 
            setImageData([...imageData,...images]);
            console.log(data);
        })
        .catch(error => {
            if (error == 'AxiosError: Network Error'){
               errorBoxWidth.value = withSpring(250)
               errorBoxHeight.value = withSpring(150)
              
               errorText.value = withTiming(1)
            }
        });
    }
    useEffect(() => {
       setImages(query,pageNumber,category)
    }, [pageNumber]);
    useEffect(()=>{
       setImages(query,1,category)
    },[query])
    useEffect(()=>{
       setImages(query,1,category)
    },[category])

    
    const imageComponent = ({item})=>(<ImageComponent ImageObject={item}/>);
    
    return(
        <View style={styles.MainContainer}>
            
           
                <MasonryFlashList
                    data={imageData}
                    estimatedItemSize={184}
                    removeClippedSubviews={true}
                    initialNumToRender={20}
                    windowSize={11}
                    maxToRenderPerBatch={8}
                    renderItem={imageComponent} 
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={<><Searchbar setQuery={setQuery} setImageData={setImageData}/><CategoriesBar setCategory={setCategory}/></>}
                    onEndReachedThreshold={0.5}
                    onEndReached={()=>{setPageNumber(pageNumber+1)}}
                    
                />
                
                < Animated.View style={[styles.processLogs,{width:errorBoxWidth,height:errorBoxHeight}]}>
                    <Animated.Text style={{opacity:errorText}}>Your Connection Is POOR!</Animated.Text>
                </Animated.View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",

    },
    
    tagsContainer:{
        height:40,
        
    },
    ImageContainer:{
        
        height:100,
        borderWidth:1,
        borderColor:"black"
    },
    processLogs:{
        
        justifyContent:"center",
        alignItems:'center',
        borderWidth:1,
        width:250,
        height:150,
        borderRadius:20,
        backgroundColor:"lightgrey"
        
    },
})