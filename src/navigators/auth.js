import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Sub from 'src/scenes/Sub'
import Sub2 from 'src/scenes/Sub2'

const Stack = createStackNavigator()

const AuthNavigator = () => {
	return (
		<>
			<Stack.Screen name="Sub" component={Sub} />
			<Stack.Screen name="Sub2" component={Sub2} />
		</>
	)
}

export default AuthNavigator