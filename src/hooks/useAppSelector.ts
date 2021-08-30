import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from 'src/common/types'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppSelector }
