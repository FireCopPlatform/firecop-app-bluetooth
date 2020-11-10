import React, {useState} from 'react'
import {Button, Alert, Text, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context'

import manager from 'src/services/ble'

const Bluetooth3 = ({route}) => {
	const navigation = useNavigation()

	const [deviceId] = useState(route.params.deviceId)
	const [isConnected, setIsConnected] = useState(false)
	// const [connectedDevices, setConnectedDevices] = useState([])

	// const handleConnectedDevices = async () => {
	// 	try {
	// 		const result = await manager.connectedDevices(String(deviceId))
	// 		console.log({result})
	// 	} catch (e) {
	// 		console.log({e})
	// 	}
	// }

	const handleConnectionStatus = async () => {
		try {
			if (deviceId !== null) {
				const result = await manager.isDeviceConnected(deviceId)
				if (result) {
					setIsConnected(result)
					Alert.alert(`Device is connected\n${deviceId}`, [{text: 'OK'}])
				}

				if (!result) {
					setIsConnected(false)
					Alert.alert(`Device is not connected\n${deviceId}`, [{text: 'OK'}])
				}
			}

			Alert.alert('No device id', [{text: 'OK'}])
		} catch (e) {
			console.log({e})
			Alert.alert(`error occurred\n${deviceId}`, e.message, [{text: 'OK'}])
		}
	}

	console.log({isConnected, deviceId})

	return (
		<SafeAreaView>
			<ScrollView>
				<Text>Connection Status</Text>
				{/* <Button
					title="get connected devices"
					onPress={handleConnectedDevices}
				/> */}
				<Button
					title="device connection status"
					onPress={handleConnectionStatus}
				/>
				<Button
					title="go to sub screen"
					onPress={() => navigation.navigate('Sub')}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Bluetooth3
