import 'react-native-gesture-handler'
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import MainNavigator from './main'
import AuthNavigator from './auth'

import Sub from 'src/scenes/Sub'
import Sub2 from 'src/scenes/Sub2'
import Main from 'src/scenes/Main'
import Main2 from 'src/scenes/Main2'

const Stack = createStackNavigator()

const AppContainer = () => {
	const isSignedIn = true
	
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator>
					{isSignedIn ? (
						<>
							<Stack.Screen name="Main" component={Main} />
							<Stack.Screen name="Main2" component={Main2} />
						</>
						// <MainNavigator/>
					) : (
						<>
							<Stack.Screen name="Sub" component={Sub} />
							<Stack.Screen name="Sub2" component={Sub2} />
						</>
						// <AuthNavigator/>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default AppContainer
