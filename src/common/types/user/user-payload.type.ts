import { UserPayloadKey } from '../../enums/enums';

type UserPayload = {
  [UserPayloadKey.EMAIL]: string;
};

export type { UserPayload };
