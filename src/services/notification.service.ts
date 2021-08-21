import Toast from 'react-native-toast-message'
import { NotificationType } from 'src/common/enums'

class Notification {
  #instance: typeof Toast

  constructor() {
    this.#instance = Toast
  }

  success(title: string, message: string): void {
    this.#instance.show({
      text1: title,
      text2: message,
      type: NotificationType.SUCCESS
    })
  }

  error(title: string, message: string): void {
    this.#instance.show({
      text1: title,
      text2: message,
      type: NotificationType.ERROR
    })
  }

  info(title: string, message: string): void {
    this.#instance.show({
      text1: title,
      text2: message,
      type: NotificationType.INFO
    })
  }
}

export default Notification
