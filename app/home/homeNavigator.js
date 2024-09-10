import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './home'
import HireMe from './HireMe'
import ArtworkExhibition from './ArtworkExhibition'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

export default function HomeNavigator () {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName
                        // Set icon name based on route name
                        if (route.name === 'Introduction') {
                            iconName = 'home'
                        } else if (route.name === 'Hire Me') {
                            iconName = 'work'
                        } else if (route.name === 'Artwork Exhibition') {
                            iconName = 'brush'
                        }

                        return <Icon name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: 'white',   // Active icon color (white)
                    tabBarInactiveTintColor: 'gray',  // Inactive icon color (gray)
                    tabBarStyle: {
                        backgroundColor: 'black',      // Background color (black)
                    },
                    headerStyle: {
                        backgroundColor: 'black',      // Header background color (black)
                    },
                    headerTintColor: 'white',         // Header text color (white)
                    headerTitleStyle: {
                        fontWeight: 'bold',            // Header title style (optional)
                    }
                })}
            >
                <Tab.Screen
                    name="Introduction"
                    component={Home}
                    options={{
                        title: 'Introduction',
                        headerStyle: { backgroundColor: 'black' },
                        headerTintColor: 'white',
                    }}
                />
                <Tab.Screen
                    name="Hire Me"
                    component={HireMe}
                    options={{
                        title: 'Hire Me',
                        headerStyle: { backgroundColor: 'black' },
                        headerTintColor: 'white',
                    }}
                />
                <Tab.Screen
                    name="Artwork Exhibition"
                    component={ArtworkExhibition}
                    options={{
                        title: 'Artwork Exhibition',
                        headerStyle: { backgroundColor: 'black' },
                        headerTintColor: 'white',
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
