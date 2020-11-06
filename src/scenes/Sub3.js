import React, {useEffect} from 'react'
import {Button, View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import manager from 'src/services/ble'

const Sub3 = () => {
	const navigation = useNavigation()

	useEffect(() => {
		manager.onStateChange((state) => {
			console.log({state})
		})

		manager.startDeviceScan(null, null, (err, device) => {
			console.log({err, device})
		})
	}, [])

	return (
		<View>
			<Text>Sub3 Screen</Text>
			<Button
				title="go to sub screen"
				onPress={() => navigation.navigate('Sub')}
			/>
		</View>
	)
}

export default Sub3
