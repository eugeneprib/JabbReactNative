import React from 'react'
import { Button } from 'react-native'
import { ButtonColor } from '../../common/enums/enums'

type Props = {
  title: string
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void
  color?: ButtonColor
}

const CustomButton: React.FC<Props> = ({ title, onClick, color }) => {
  return <Button title={title} onPress={onClick} color={color} />
}

export default CustomButton
