import React from 'react'
import {ApolloProvider} from '@apollo/react-hooks'
import {RecoilRoot} from 'recoil'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import AppContainer from 'src/navigators'
import client from 'src/services'

const App = () => {
	return (
		<SafeAreaProvider>
			<ApolloProvider client={client}>
				<RecoilRoot>
					<AppContainer/>
				</RecoilRoot>
			</ApolloProvider>
		</SafeAreaProvider>
	)
}

export default App
