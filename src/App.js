import React from 'react'
import {View, Text} from 'react-native'
import { ApolloProvider } from '@apollo/react-hooks'
import { RecoilRoot } from 'recoil'

import client from './services'
import styles from './App.scss'

const App = () => {
	return (
		<ApolloProvider client={client}>
			<RecoilRoot>
				<View style={styles.container}>
					<Text className={styles.blue}>abc</Text>
				</View>
			</RecoilRoot>
		</ApolloProvider>
	)
}

export default App
