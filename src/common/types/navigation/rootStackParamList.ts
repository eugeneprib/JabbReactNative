import { NavigationScreen } from 'src/common/enums'

type RootStackParamList = {
  [NavigationScreen.SIGN_IN]: undefined
  [NavigationScreen.HOME]: undefined
  [NavigationScreen.MY_PROFILE]: undefined
  [NavigationScreen.PODCAST]: { id: number }
  [NavigationScreen.EPISODE]: {
    id: number
    author: string
    position?: number
    podcast?: string
    playback?: boolean
  }
  [NavigationScreen.TO_TABS_NAVIGATOR]: undefined
  [NavigationScreen.SEARCH]: undefined
}

export type { RootStackParamList }
