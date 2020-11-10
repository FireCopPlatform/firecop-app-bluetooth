import React, {useState} from 'react'
import {Button, Text, Alert, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {DropDown} from 'src/presenters'
import manager from 'src/services/ble'

const Bluetooth2 = ({route}) => {
	const navigation = useNavigation()

	const [devices] = useState(route.params.devices)
	const [selectedDeviceId, setSelectedDeviceId] = useState(null)
	const [connectedDevice, setConnectedDevice] = useState(null)

	const handleValueChange = (v) => {
		setSelectedDeviceId(v.trim())
	}
	const handleConnectToDevice = async () => {
		try {
			const result = await manager.connectToDevice(selectedDeviceId)

			if (result) {
				setConnectedDevice(result)
				Alert.alert(`connected successfully\n${selectedDeviceId}`, [
					{text: 'OK'},
				])
			}

			if (!result) {
				Alert.alert(`connected failed\n${selectedDeviceId}`, [{text: 'OK'}])
			}
		} catch (e) {
			console.log(e)
			Alert.alert(`error occurred\n${selectedDeviceId}`, e.message, [
				{text: 'OK'},
			])
		}
	}

	return (
		<SafeAreaView>
			<ScrollView>
				<Text>Connecting Devices</Text>
				<Text>{connectedDevice && connectedDevice.id}</Text>
				<Text>{connectedDevice && connectedDevice.name}</Text>
				<DropDown items={devices} onValueChange={handleValueChange} />
				<Button title="connect to device" onPress={handleConnectToDevice} />
				<Button
					title="go to sub screen"
					onPress={() => navigation.navigate('Sub')}
				/>
				<Button
					title="go to bluetooth3 screen"
					onPress={() =>
						navigation.navigate('Bluetooth3', {
							deviceId: selectedDeviceId,
							connectedDevice,
						})
					}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Bluetooth2
