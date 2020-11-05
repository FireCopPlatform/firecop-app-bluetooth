import React, {useState, useCallback} from 'react'
import {Button, View, Text, TextInput} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useMutation} from '@apollo/react-hooks'

import {CREATE_USER} from 'src/services/users'

const Sub2 = () => {
  const navigation = useNavigation()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')

  const [signup] = useMutation(CREATE_USER)

  const handleEmailChange = (value) => {
		setEmail(value.trim())
	}
	const handlePasswordChange = (value) => {
		setPassword(value.trim())
	}
	const handleNameChange = (value) => {
		setName(value.trim())
	}
	const handleSignupPress = useCallback(async () => {
		try {
			const data = await signup({ variables: {email, password, name}})
			if (data) {
				navigation.navigate('Sub')
			}
		} catch (e) {
			console.log(e)
			Alert.alert('로그인 실패', e.message, [{text: '확인'}])
		}
	}, [email, password, name])

  return (
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
      <TextInput
        placeholder="name"
        textContentType="username"
        value={name}
        onChangeText={handleNameChange}
        autoCapitalize="none"
        returnKeyType="next"
      />
      <Button title="signup btn" onPress={handleSignupPress} />
      <Text>Sub2 Screen</Text>
      <Button
        title="go to sub screen"
        onPress={() => navigation.navigate('Sub')}
      />
    </View>
  )
}

export default Sub2