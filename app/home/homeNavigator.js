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

                        if (route.name === 'Introduction') {
                            iconName = 'home'
                        } else if (route.name === 'Hire Me') {
                            iconName = 'work'
                        } else if (route.name === 'Artwork Exhibition') {
                            iconName = 'brush'
                        }

                        return <Icon name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Introduction" component={Home} />
                <Tab.Screen name="Hire Me" component={HireMe} />
                <Tab.Screen name="Artwork Exhibition" component={ArtworkExhibition} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
