import { User, Podcast, Image } from 'src/common/types'
import { UserRole } from 'src/common/enums'

const MockedUser: User = {
  id: 1,
  firstName: 'Yevhenii',
  lastName: 'Cheremisin',
  imageId: 2,
  email: 'eucheremisin@gmail.com',
  nickname: 'Eugenius',
  password: 'awdaw1',
  birthdate: '27/11/2001',
  bio: 'Hello all',
  createdAt: '27/11/2001',
  updatedAt: '27/11/2001',
  image: {
    id: 2,
    url: 'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629474124/2/ttp0xygzbdyrn0yyxfnk.jpg',
    publicId: '1312',
    createdAt: '27/11/2001',
    updatedAt: '27/11/2001'
  },
  role: UserRole.USER
}

const MockedPodcasts: Podcast[] = []

export { MockedUser, MockedPodcasts }
