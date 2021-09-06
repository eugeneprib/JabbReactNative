import React from 'react'
import { View } from 'react-native'
import { Input } from 'src/components'
import SearchIcon from 'src/assets/images/search.svg'
import styles from './styles'

type Props = {
  value: string
  onChange: (value: string) => void
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <SearchIcon width={18} fill="#E0E0E0" />
      <Input
        style={styles.input}
        placeholder="Search for Podcast"
        value={value}
        onChangeText={onChange}
      />
    </View>
  )
}

export default SearchInput
