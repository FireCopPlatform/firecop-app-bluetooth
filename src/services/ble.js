import {BleManager} from 'react-native-ble-plx'
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions'

const manager = new BleManager()

export const requestBluetoothPermission = () => {
	check(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL)
		.then((result) => {
			switch (result) {
				case RESULTS.UNAVAILABLE:
					console.log(
						'This feature is not available (on this device / in this context)',
					)
					break
				case RESULTS.DENIED:
					console.log(
						'The permission has not been requested / is denied but requestable',
					)
					break
				case RESULTS.GRANTED:
					console.log('The permission is granted')
					break
				case RESULTS.BLOCKED:
					console.log('The permission is denied and not requestable anymore')
					break
				default:
			}
		})
		.catch((e) => console.log({e}))

	request(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL)
		.then((result) => console.log({result}))
		.catch((e) => console.log({e}))
}

export default manager
