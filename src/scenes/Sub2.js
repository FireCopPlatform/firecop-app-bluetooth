import * as React from 'react'
import {Button, View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const Sub2 = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Sub Screen</Text>
      <Button
        title="go to sub screen"
        onPress={() => navigation.navigate('sub')}
      />
    </View>
  )
}

export default Sub2