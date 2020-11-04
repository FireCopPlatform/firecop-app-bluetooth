import React from 'react'
import {View, Text} from 'react-native'
import { ApolloProvider } from '@apollo/react-hooks'
import client from './services'
import styles from './App.scss'

const App = () => {
	return (
		<ApolloProvider client={client}>
			<View style={styles.container}>
				<Text className={styles.blue}>abc</Text>
			</View>
		</ApolloProvider>
	)
}

export default App
