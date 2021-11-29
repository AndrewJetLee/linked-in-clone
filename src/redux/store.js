import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from './authSlice'
import thunk from 'redux-thunk'


export default configureStore({
  reducer: {
      auth: authSliceReducer 
  },
  middleware: [thunk],
}) 