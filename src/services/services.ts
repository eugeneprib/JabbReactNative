import * as Keychain from 'react-native-keychain';
import { Http } from './http/http.service';
import { AuthApi } from './auth-api/auth-api.service';
import { Storage } from './storage/storage.service';
import { UserApi } from './user-api/user-api.service';

const storage = new Storage({
  storage: Keychain,
});

const http = new Http({
  storage,
});

const authApi = new AuthApi({
  http,
  apiPrefix: '/api/v1',
});

const userApi = new UserApi({
  http,
  apiPrefix: '/api/v1',
});

export {
  authApi,
  storage,
  userApi,
};
