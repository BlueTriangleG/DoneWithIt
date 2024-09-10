import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, ImageBackground } from 'react-native'

function Home () {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/bg.jpg")}>
            <ScrollView contentContainerStyle={styles.container}>

                <SafeAreaView style={styles.container}>
                    <View style={styles.content}>
                        <Image source={require('../assets/me.jpg')} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                                Hi, my name is <Text style={styles.boldText}>Gavin Hall</Text>. I'm currently studying <Text style={styles.boldText}>Software Engineering</Text> at the University of Melbourne. I love computer technology, and creating a software system from scratch and automating some of
                            </Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                                the boring and dull things that people would otherwise have to do is very interesting to me. At the same time, I am very interested in <Text style={styles.boldText}>XR, AR technology</Text>. I can't get enough of seamlessly integrating information technology into the real world and manipulating these virtual creations with the most natural operating logic. It's like magic coming to life. In regular software development, <Text style={styles.boldText}>my career goal is to become a full-stack software engineer</Text>. Proficient in a variety of software development skills, covering front-end to back-end, programming to project management and more. If you'd like to learn more about my skills in software development, the <Text style={styles.boldText}>Hire me</Text> page has a comprehensive overview!

                            </Text>
                            <Text style={styles.text}>
                                I like to fantasise. I fear the passage of time because I have no control over them
                                and it will never go back. That's the reason why I love photography, because it allows me
                                to record every second of my life and to save them for the future. I can remember what I done,
                                what I was thinking, what I was feeling at that time. To me, that is another realisation of time
                                travel.
                            </Text>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,  // Ensure ScrollView takes the entire space
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1,
    },

    image: {
        width: 200,
        height: 250,
        marginRight: 20,
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#fff',
        marginBottom: 10,
    },
    boldText: {
        fontWeight: 'bold',
    }
})

export default Home
