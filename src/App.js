import React from 'react'
// import {Platform} from 'react-native'
import {ApolloProvider} from '@apollo/react-hooks'
import {RecoilRoot} from 'recoil'
import {SafeAreaProvider} from 'react-native-safe-area-context'
// import RNPermissions, {
// 	NotificationsResponse,
// 	Permission,
// 	PERMISSIONS,
// 	PermissionStatus,
// 	RESULTS,
// } from 'react-native-permissions'

import AppContainer from 'src/navigators'
import client from 'src/services'

const App = () => {
	// const {PERMISSIONS_IOS} = PERMISSIONS.IOS
	// const {PERMISSIONS_ANDROID} = PERMISSIONS.ANDROID

	// const PLATFORM_PERMISSIONS = Platform.select({
	// 	ios: PERMISSIONS_IOS,
	// 	android: PERMISSIONS_ANDROID,
	// })
	// console.log({PERMISSIONS_ANDROID, PERMISSIONS_IOS})
	// const PERMISSIONS_VALUES = Object.values(PLATFORM_PERMISSIONS)

	// useEffect(() => {
	// 	const check = RNPermissions.checkMultiple(PERMISSIONS_VALUE)
	// }, [])

	return (
		<SafeAreaProvider>
			<ApolloProvider client={client}>
				<RecoilRoot>
					<AppContainer />
				</RecoilRoot>
			</ApolloProvider>
		</SafeAreaProvider>
	)
}

export default App
