import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from './authSlice'
import articleSliceReducer from './articleSlice'
import thunk from 'redux-thunk'


export default configureStore({
  reducer: {
      auth: authSliceReducer,
      article: articleSliceReducer
  },
  middleware: [thunk],
}) 