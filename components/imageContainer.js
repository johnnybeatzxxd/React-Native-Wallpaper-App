import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { resizeImage } from "../utils/imageResizer";

export function ImageComponent({ImageObject,setModalVisible,setCurrentImage}) {
    const imageSize = resizeImage(ImageObject.imageWidth, ImageObject.imageHeight, 200, 300);
    const imageURL = ImageObject.largeImageURL; 
    
    return (
        <View style={[styles.ImageContainer, {width: '95%', height: imageSize.height}]}>
            <TouchableOpacity onPress={()=>{setCurrentImage(ImageObject);setModalVisible(true)}}>
                <Image 
                    style={[styles.image, {width: imageSize.width, height: imageSize.height}]} 
                    source={{uri: imageURL}} 
                    defaultSource={require('../assets/icon.png')} 
                    onError={(error) => console.log("Image Load Error:", error)}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    ImageContainer: {
        margin: 5,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        resizeMode: 'cover'
    }
});
