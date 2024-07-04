import {React,useState} from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet, Modal, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';
import { resizeImage } from '../utils/imageResizer';

export const PreviewModal = ({currentImage,modalVisible,setModalVisible}) => {
    const imageHeight = currentImage.imageHeight;
    const imageWidth = currentImage.imageWidth;
    console.log(imageHeight,imageWidth);
    const imageSize = resizeImage(imageWidth,imageHeight,370)
    return(
      
    <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {setModalVisible(false);}}
        style={styles.modalContainer}>
            <View style={styles.mainContainer}>

                    <BlurView style={styles.blurView} intensity={100} experimentalBlurMethod={true} tint="dark" >
                        <View style={styles.content}>
                            <Text>{currentImage.tags}</Text>
                            <Image style={[styles.imageContainer,{width:370,height:imageSize.height}]} source={{uri:currentImage.largeImageURL}} />
                        </View>
                    </BlurView>
               
            </View>
    </Modal>
   
    )
}

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
    },
    mainContainer:{
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.1)',
    },
    imageBackground: {
        flex: 1,
    },
    blurView: {
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer:{
        borderRadius:18
    },
})