import { NavigationScreen } from 'src/common/enums'

type RootStackParamList = {
  [NavigationScreen.SIGN_IN]: undefined
  [NavigationScreen.HOME]: undefined
  [NavigationScreen.MY_PROFILE]: undefined
  [NavigationScreen.TO_TABS_NAVIGATOR]: undefined
  [NavigationScreen.EPISODE]: {
    id: number
  }
  [NavigationScreen.PODCAST]: {
    id: number
  }
}

export type { RootStackParamList }
