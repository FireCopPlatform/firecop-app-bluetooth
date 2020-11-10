import React from 'react'
import RNPickerSelect from 'react-native-picker-select'

const DropDown = ({items, onValueChange}) => {
  const newItems = items.map(item => ({label: item.name, value: item.id}))
  return (
    <RNPickerSelect 
      onValueChange={onValueChange}
      items={newItems}
    />
  )
}

export default DropDown