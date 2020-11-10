import React, {useState, useEffect} from 'react'
import {Button, Text, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context'

import manager, {requestBluetoothPermission} from 'src/services/ble'

const Bluetooth = () => {
	const navigation = useNavigation()
	const [scannedDevices, setScannedDevices] = useState([])

	useEffect(() => {
		requestBluetoothPermission()
	}, [])

	useEffect(() => {
		manager.startDeviceScan(null, null, (err, device) => {
			if (device.isConnectable && device.name) {
				const idx = scannedDevices.findIndex(({id}) => id === device.id)

				if (idx === -1) {
					setScannedDevices((prev) => [...prev, device])
				}

				if (idx !== -1) {
					const newScannedDevices = scannedDevices
					newScannedDevices[idx] = device
					setScannedDevices(newScannedDevices)
				}
			}
		})
	}, [])

	console.log({scannedDevices})

	return (
		<SafeAreaView>
			<ScrollView>
				<Text>Device Polling List</Text>
				<Text>{scannedDevices.map((i) => `${i.id}\n`)}</Text>
				<Text>{scannedDevices.map((i) => `${i.name}\n`)}</Text>
				<Button
					title="go to sub screen"
					onPress={() => navigation.navigate('Sub')}
				/>
				<Button
					title="go to bluetooth2 screen"
					onPress={() =>
						navigation.navigate('Bluetooth2', {
							devices: scannedDevices,
						})
					}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Bluetooth
