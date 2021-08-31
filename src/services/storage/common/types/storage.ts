import AsyncStorage from '@react-native-async-storage/async-storage'
import EncryptedStorage from 'react-native-encrypted-storage'

type Storage = typeof AsyncStorage | typeof EncryptedStorage

export type { Storage }
