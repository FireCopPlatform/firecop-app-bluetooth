import React, {useState, useCallback} from 'react'
import {Alert, Button, View, Text, TextInput} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useSetRecoilState} from 'recoil'
import {SafeAreaView} from 'react-native-safe-area-context'

import {userTokenState} from 'src/states'

const Sub = () => {
	const navigation = useNavigation()
	const setUserToken = useSetRecoilState(userTokenState)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleEmailChange = (value) => {
		setEmail(value.trim())
	}
	const handlePasswordChange = (value) => {
		setPassword(value.trim())
	}
	const handleLoginPress = useCallback(() => {
		try {
			const getToken = (email, password) => ({token: 'token.token.token'})
			const data = getToken(email, password)

			if (data) {
        setUserToken(data.token)
      }
		} catch (e) {
			console.log(e)
			Alert.alert('로그인 실패', e.message, [{text: '확인'}])
		}
	}, [email, password])

	return (
		<SafeAreaView>
			<View>
				<TextInput
					placeholder="email"
					textContentType="username"
					keyboardType="email-address"
					value={email}
					onChangeText={handleEmailChange}
					autoCapitalize="none"
					returnKeyType="next"
				/>
				<TextInput
					placeholder="password"
					secureTextEntry
					value={password}
					onChangeText={handlePasswordChange}
					autoCapitalize="none"
					returnKeyType="send"
				/>
				<Button title="login btn" onPress={handleLoginPress} />
        <Text>Sub Screen</Text>
        <Button
          title="go to sub2 screen"
          onPress={() => navigation.navigate('Sub2')}
        />
			</View>
		</SafeAreaView>
	)
}

export default Sub