import { NavigationScreen } from 'src/common/enums'

type RootStackParamList = {
  [NavigationScreen.SIGN_IN]: undefined
  [NavigationScreen.HOME]: undefined
  [NavigationScreen.PODCAST]: { id: number }
  [NavigationScreen.EPISODE]: undefined
  [NavigationScreen.TO_TABS_NAVIGATOR]: undefined
  [NavigationScreen.MY_PROFILE]: undefined
}

export type { RootStackParamList }
