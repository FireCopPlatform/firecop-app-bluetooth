import React from 'react'
import {ApolloProvider} from '@apollo/react-hooks'
import {RecoilRoot} from 'recoil'

import AppContainer from 'src/navigators'
import client from 'src/services'

const App = () => {
	return (
		<ApolloProvider client={client}>
			<RecoilRoot>
				<AppContainer/>
			</RecoilRoot>
		</ApolloProvider>
	)
}

export default App
