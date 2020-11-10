import React, {useState, useEffect} from 'react'
import {Button, Text, Alert, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {DropDown} from 'src/presenters'
import manager from 'src/services/ble'

const Bluetooth2 = ({route}) => {
	const navigation = useNavigation()
	
	const [devices] = useState(route.params.devices)
	const [selectedDeviceId, setSelectedDeviceId] = useState(null)

	const handleValueChange = (v) => {
		setSelectedDeviceId(v.trim())
	}
	const handleConnectToDevice = async () => {
		const result = await manager.connectToDevice(selectedDeviceId)
		if (result) {
			Alert.alert(`connected successfully\n${selectedDeviceId}`, [{text: 'OK'}])
		}
	}

	return (
		<ScrollView>
			<Text>Bluetooth2 Screen</Text>
			<DropDown items={devices} onValueChange={handleValueChange} />
			<Button title="connect to device" onPress={handleConnectToDevice} />
			<Button title="go to sub screen" onPress={() => navigation.navigate('Sub')} />
			<Button title="go to bluetooth3 screen" onPress={() => navigation.navigate('Bluetooth3', {deviceId: selectedDeviceId})} />
		</ScrollView>
	)
}

export default Bluetooth2
