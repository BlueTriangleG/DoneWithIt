import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, ImageBackground } from 'react-native'

function HireMe () {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/bg.jpg")}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.text}>Summary
                    Seeking a backend development internship position.
                    I am a self-driven and disciplined individual passionate about backend development. Have a wide range of software development internship and project experiences, including 2 full-stack web application development , cloud architectures, FaaS microservices, databases, using concurrent and asynchronous system to enhance 10 times performance, loT protocols, API interface, AI agent, and machine learning. Have 4+ years of programming experience.

                    Technical Skills
                    Programming Languages: object-oriented design using Java, C++, web development using JavaScript, PHP, React, , data pre-process and machine learning using Python, Matlab, Database using SQL;
                    Cloud technologies: Node.js, Kubernetes, Docker, Fission, Kafka;
                    Database systems: relational database (MySQL, Oracle ) and NoSQL database(MongoDB, ElasticSearch, Influxdb);
                    Communication protocols: WebSocket, MQTT, Modbus;
                    Software Development Practices: data structures and algorithms; object oriented programming; Concurrent Programming design(Java.util.concurrent, MPI, FSP);
                    Team corporation: Agile SDLC(Scrum), project management tool(Jira, Confluence), version control(Github);
                    Work experience
                    Software engineer Internshipe
                    Bin Hui Communication Technology Co .

                    Worked in a team of 5 responsible for developing an innovative building equipment monitoring system;
                    I implemented JavaScript scripts to use MQTT and Websocket to request responses from temperature and humidity sensors regularly, then store them to InfluxDB with timestamps. Using asynchronous function design saves 40 percent of computing resources;
                    I implement scripts to read data from air-conditioning and electric and water meters using Modbus protocol;</Text>
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

export default HireMe
