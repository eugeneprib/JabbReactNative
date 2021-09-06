import { ComponentType } from 'react'
import { SvgProps } from 'react-native-svg'
import { Home, Podcast, Profile } from 'src/screens'
import { NavigationScreen } from 'src/common/enums'
import HomeIcon from 'src/assets/images/home.svg'
import SearchIcon from 'src/assets/images/searchIcon.svg'
import PlayIcon from 'src/assets/images/playNavigation.svg'
import UserIcon from 'src/assets/images/user.svg'

type Props = {
  name: NavigationScreen
  component: ComponentType<any>
  Icon: React.FC<SvgProps>
}

export const tabPages: Props[] = [
  {
    name: NavigationScreen.HOME,
    component: Home,
    Icon: HomeIcon
  },
  {
    name: 'Search',
    component: Profile,
    Icon: SearchIcon
  },
  {
    name: NavigationScreen.LISTENING,
    component: Podcast,
    Icon: PlayIcon
  },
  {
    name: NavigationScreen.MY_PROFILE,
    component: Profile,
    Icon: UserIcon
  }
]
