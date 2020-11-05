import React, {useEffect} from 'react'
import {Button, View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useQuery} from '@apollo/react-hooks'

import {GET_USER, GET_USERS} from 'src/services/users'

const Main2 = () => {
  const navigation = useNavigation()
  const {loading, data, error} = useQuery(GET_USER, { variables: { where: { id: 1 }}})
  console.log({loading, data, error})

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error...</Text>
  
  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
      <Text>Main2 Screen</Text>
      <Button
        title="go to main screen"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  )
}

export default Main2