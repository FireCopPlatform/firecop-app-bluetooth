import * as React from 'react'
import {Button, View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const Main2 = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Main2 Screen</Text>
      <Button
        title="go to main screen"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  )
}

export default Main2