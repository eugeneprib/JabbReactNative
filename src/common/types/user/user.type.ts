import { Image } from '../image/image';
import { UserRole } from '../../enums/enums';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  imageId: number | null;
  email: string;
  nickname: string;
  password: string;
  birthdate: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
  image: Image | null;
  role: UserRole;
};

export type { User };
