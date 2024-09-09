import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native'

function Home () {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={{ flex: 1 }}>
                    <Text>Hi, my name is GaoyuanHao. I'm currently studying Software Engineering at the University of Melbourne. I love computer technology, and creating a software system from scratch and automating some of the boring and dull things that people would otherwise have to do is very interesting to me. At the same time I am very interested in XR, AR technology. I can't get enough of seamlessly integrating information technology into the real world and manipulating these virtual creations with the most natural operating logic. It's like magic coming to life. In regular software development, my career goal is to become a full-stack software engineer. Proficient in a variety of software development skills, covering front-end to back-end, programming to project management and more. If you'd like to learn more about my skills in software development, the Hire me page has a comprehensive overview!
                    </Text>

                </Text>


            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,  // Ensure ScrollView takes the entire space
        padding: 20,
        justifyContent: 'center', // Center content vertically
    },
    content: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1,
    },
})

export default Home
