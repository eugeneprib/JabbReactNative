import { StackNavigationProp } from '@react-navigation/stack'
import { NavigationScreen } from 'src/common/enums'
import { RootStackParamList } from 'src/common/types'

type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  NavigationScreen.SEARCH
>

export type { SearchScreenNavigationProp }
