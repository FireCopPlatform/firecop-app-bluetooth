import React, {useEffect} from 'react'
import {Button, View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {openSettings, check, request, PERMISSIONS, RESULTS} from 'react-native-permissions'

import manager from 'src/services/ble'

const Sub3 = () => {
	const navigation = useNavigation()
	const requestBluetoothPermission = () => {
		check(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL).then(result => {
			switch (result) {
				case RESULTS.UNAVAILABLE:
					console.log('This feature is not available (on this device / in this context)')
					break
				case RESULTS.DENIED:
					console.log('The permission has not been requested / is denied but requestable')
					break
				case RESULTS.GRANTED:
					console.log('The permission is granted')
					break
				case RESULTS.BLOCKED:
					console.log('The permission is denied and not requestable anymore')
					break
				}
		}).catch(e => console.log({e}))

		request(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL)
		.then(result => console.log({result}))
		.catch(e => console.log({e}))
	}
	
	useEffect(() => {		
		requestBluetoothPermission()

		// manager.onStateChange((state) => {
		// 	console.log({state})
		// })

		// manager.startDeviceScan(null, null, (err, device) => {
		// 	console.log({err, device})
		// })
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
