import React, {useState, useEffect} from 'react'
import {Button, Text, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import manager, {requestBluetoothPermission} from 'src/services/ble'

const Bluetooth = () => {
	const navigation = useNavigation()
	const [scannedDevices, setScannedDevices] = useState([])

	useEffect(() => {
		requestBluetoothPermission()
	}, [])

	useEffect(() => {
		// manager.onStateChange((state) => {
		// console.log({state})
		// })

		manager.startDeviceScan(null, null, (err, device) => {
			if (
				device.isConnectable &&
				device.name &&
				!scannedDevices.some(({id}) => id !== device.id)
			) {
				setScannedDevices((prev) => [...prev, device])
			}
		})
	}, [])

	console.log({scannedDevices})

	return (
		<ScrollView>
			<Text>Bluetooth Screen</Text>
			<Text>{scannedDevices.map((i) => `${i.id}\n`)}</Text>
			<Text>{scannedDevices.map((i) => `${i.name}\n`)}</Text>
			<Button
				title="go to sub screen"
				onPress={() => navigation.navigate('Sub')}
			/>
		</ScrollView>
	)
}

export default Bluetooth
