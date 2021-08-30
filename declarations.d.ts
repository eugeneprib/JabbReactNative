declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}

declare module 'react-native-dotenv' {
  export const API_ORIGIN_URL: string
  export const API_PREFIX: string
}
