import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {useRecoilValue} from 'recoil'

import {userTokenState} from 'src/states'

import Bluetooth from 'src/scenes/Bluetooth'
import Main from 'src/scenes/Main'
import Main2 from 'src/scenes/Main2'

const Stack = createStackNavigator()

const AppContainer = () => {
	const userToken = useRecoilValue(userTokenState)

	// TODO: `headerMode`, `initialRouteName` 추가
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator>
					{userToken ? (
						<>
							<Stack.Screen name="Main" component={Main} />
							<Stack.Screen name="Main2" component={Main2} />
						</>
					) : (
						<>
							<Stack.Screen name="Bluetooth" component={Bluetooth} />
						</>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default AppContainer
