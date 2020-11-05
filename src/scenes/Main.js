import * as React from 'react'
import {Button, View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const Main = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Main Screen</Text>
      <Button
        title="go to main2 screen"
        onPress={() => navigation.navigate('Main2')}
      />
    </View>
  )
}

export default Main