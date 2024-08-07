import { StatusBar } from 'expo-status-bar';
import { React, useState, useEffect, useRef } from 'react';
import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { MasonryFlashList } from "@shopify/flash-list";
import { ImageComponent } from '../components/imageContainer';
import { queryImage } from '../utils/fetchImage';
import { PreviewModal } from '../components/imagePreviewModal'
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { Searchbar } from '../components/searchBar';
import { CategoriesBar } from '../components/categoriesBar';
import {data} from '../constants/categories'
import Animated, { useSharedValue, withSpring, useAnimatedStyle, Easing, withTiming } from 'react-native-reanimated';


export default function HomePage(){
    const [imageData, setImageData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState({});
    const setImages = (query, pageNumber) => {
        queryImage(query, pageNumber, category)
        .then(images => { 
            setImageData(prevData => [...prevData, ...images]);
            console.log(imageData);
        })
        .catch(error => {
            if (error == 'AxiosError: Network Error'){
              console.log("poor network");
            }
        });
    }
    useEffect(() => {
       setImages(query, pageNumber, category)
    }, [pageNumber]);
    useEffect(()=>{
        setImageData([]);
        setImages(query,1,category)  
    },[query])
    useEffect(()=>{
        setImageData([]);
        setImages(query,1,category)

    },[category])

    
    const imageComponent = ({item})=>(<ImageComponent ImageObject={item} setModalVisible={setModalVisible} setCurrentImage={setCurrentImage} />);
    
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
                keyExtractor={(item, index) => `${item.id}-${index}`}
                ListHeaderComponent={<><Searchbar setQuery={setQuery}/><CategoriesBar setCategory={setCategory}/></>}
                onEndReachedThreshold={0.5}
                onEndReached={()=>{setPageNumber(pageNumber+1)}}
                
            />
            
            <PreviewModal currentImage={currentImage} modalVisible={modalVisible} setModalVisible={setModalVisible}/> 
            
           
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
    
})