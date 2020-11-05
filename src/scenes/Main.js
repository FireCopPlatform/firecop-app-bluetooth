import React from 'react'
import {Button, View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useResetRecoilState} from 'recoil'

import {userTokenState} from 'src/states'

const Main = () => {
	const navigation = useNavigation()
	const handleLogoutPress = useResetRecoilState(userTokenState)

	return (
		<View>
			<Button title="logout" onPress={handleLogoutPress} />
			<Text>Main Screen</Text>
			<Button
				title="go to main2 screen"
				onPress={() => navigation.navigate('Main2')}
			/>
		</View>
	)
}

export default Main
