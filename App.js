import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack'

import Welcome from './app/Welcome/Welcome'
import Home from './app/home/home'
import HomeNavigator from './app/home/homeNavigator'
const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false, // hide the header
          gestureEnabled: true,
          transitionSpec: {
            open: TransitionSpecs.FadeInFromBottomAndroidSpec, // animation when opening
            close: TransitionSpecs.FadeOutToBottomAndroidSpec,  // animation when closing
          },
          cardStyleInterpolator: ({ current }) => ({
            cardStyle: {
              opacity: current.progress,
            },
          }),
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}