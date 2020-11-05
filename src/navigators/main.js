import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Main from 'src/scenes/Main'
import Main2 from 'src/scenes/Main2'

const Stack = createStackNavigator

const MainNavigator = () => {
	return (
		<>
			<Stack.Screen name="Main" component={Main} />
			<Stack.Screen name="Main2" component={Main2} />
		</>
	)
}

export default MainNavigator