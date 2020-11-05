import * as React from 'react'
import {Button, View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const Sub = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Sub Screen</Text>
      <Button
        title="go to sub2 screen"
        onPress={() => navigation.navigate('Sub2')}
      />
    </View>
  )
}

export default Sub