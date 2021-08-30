import { Home, PodcastPage, SignIn } from 'src/screens'
import { NavigationScreen } from 'src/common/enums'
import { SvgProps } from 'react-native-svg'
import HomeIcon from 'src/assets/images/home.svg'
import Play from 'src/assets/images/playNavigation.svg'
import User from 'src/assets/images/meIcon.svg'

type Prop = {
  name: NavigationScreen
  component: React.FC<any>
  Icon: React.FC<SvgProps>
}

export const Pages: Prop[] = [
  {
    name: NavigationScreen.HOME,
    component: Home,
    Icon: HomeIcon
  },
  {
    name: NavigationScreen.LISTENING,
    component: PodcastPage,
    Icon: Play
  },
  {
    name: NavigationScreen.MY_PROFILE,
    component: SignIn,
    Icon: User
  }
]
