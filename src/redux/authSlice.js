import { createSlice } from "@reduxjs/toolkit";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "@firebase/auth";



export const getGoogleInfo = () => {
  return (dispatch, getState) => {
    // make async call to google api
    signInWithPopup(auth, provider)
    .then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user; 
      dispatch(googleSignIn(user));
    })
    .catch((err) => {
      console.log(err);
    })
  }
} 

export const signOutAPI = () => {
  return (dispatch, getState) => {
    signOut()
    .then(() => {
      console.log('Successfully logged Out')
      dispatch(userSignOut())
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    credential: null,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    emailSignIn: (state, action) => {

    },
    googleSignIn: (state, action) => {
      return {
        ...state,
        user: action.payload
      }
    },
    userSignOut: (state) => {
      return {
        ...state,
        user: null
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { googleSignIn, userSignOut } = authSlice.actions;

export default authSlice.reducer;
