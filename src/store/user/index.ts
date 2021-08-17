import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
    data: unknown
}

const initialState: InitialState = {
    data: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state) => {
      return {
        ...state,
        someData: {
          a: 1
        }
      }
    }
  }
})

const reducer = userSlice.reducer

export {
  reducer
}
