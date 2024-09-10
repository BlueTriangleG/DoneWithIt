import React, { useRef, useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native'
import { Icon } from '@rneui/themed'
import colors from '../config/colors'

function Welcome ({ navigation }) {
    // create a new Animated.Value, which is a special type of object that can be used to animate values
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start()
    }, [fadeAnim])

    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/bg.jpg")}
        >
            {/* Text part */}
            <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
                <Text style={styles.welcomeText}>Hi, I am </Text>
                <Text style={styles.welcomeText}>Gavin Hall</Text>

            </Animated.View>

            {/* Button part */}
            <Animated.View style={[styles.buttonContainer, { opacity: fadeAnim }]}>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Home')}  // navigate to Home page
                >
                    <Icon
                        name="login"
                        size={30}
                        color="white"
                    />
                </TouchableOpacity>
            </Animated.View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        flexWrap: 'wrap',
    },
    welcomeText: {
        fontSize: 40,
        fontWeight: '700',
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        paddingHorizontal: 40,
    },
    welcomeTextLittle: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
        top: 20,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        paddingHorizontal: 30,
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        bottom: 45,
        width: '100%',
    },
    loginButton: {
        width: 100,
        height: 50,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    }
})

export default Welcome
