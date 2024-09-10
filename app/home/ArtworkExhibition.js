import React from 'react'
import { View, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native'

// Placeholder images array
const images = [
    require('../assets/1.jpg'),
    require('../assets/2.jpg'),
    require('../assets/3.jpg'),
    require('../assets/4.jpg'),
    require('../assets/5.jpg'),
    require('../assets/6.jpg'),
    require('../assets/7.jpg'),
    require('../assets/8.jpg'),
    require('../assets/9.jpg'),
    require('../assets/10.jpg'),
    require('../assets/11.jpg'),
    require('../assets/13.jpg'),
]

function ArtworkExhibition () {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/bg.jpg")}>
            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.gridContainer}>
                    {images.map((image, index) => (
                        <Image key={index} source={image} style={styles.image} />
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',  // Allows wrapping to the next line
        justifyContent: 'space-between',  // Distribute images evenly
    },
    image: {
        width: "45%",  // Fixed width for each image
        height: 300,  // Fixed height for each image
        marginBottom: 20,
        borderRadius: 10,  // Add rounded corners to the images
    },
})

export default ArtworkExhibition
