import { createSlice } from "@reduxjs/toolkit";
import db, { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";

// Action creators
export const postArticleAPI = (article) => {
  return (dispatch, getState) => {
    // if image exists, store the image or video into cloud
    dispatch(setLoadingStatus(true));
    if (article.image) {
      const storageRef = ref(storage, `/images/${article.image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, article.image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(prog);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            article.image = url;
            const articlesRef = collection(db, "articles");
            addDoc(articlesRef, {
              actor: {
                description: article.user.email,
                title: article.user.displayName,
                image: article.user.photoURL,
              },
              date: article.date, 
              video: article.video,
              sharedImg: url,
              comments: 0,
              description: article.description,
            })
              .then((payload) => {
                console.log("Added article: ", payload);
                dispatch(updateArticles(article));
                dispatch(setLoadingStatus(false));
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }
      );
    } else {
      dispatch(setLoadingStatus(true));
      const articlesRef = collection(db, "articles");
      addDoc(articlesRef, {
        actor: {
          description: article.user.email,
          title: article.user.displayName,
          image: article.user.photoURL,
        },
        date: article.date, 
        video: article.video,
        sharedImg: article.image,
        comments: 0,
        description: article.description,
      })
        .then((payload) => {
          console.log("Added article: ", payload);
          dispatch(updateArticles(article));
          dispatch(setLoadingStatus(false));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};



export const getArticleAPI = () => {
  return (dispatch) => {

  }
}


// Helper functions
// const upload

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    loading: false,
    articles: [],
  },
  reducers: {
    updateArticles(state, action) {
      state.articles.push(action.payload)
    },
    setLoadingStatus(state, action) {
      state.loading = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { updateArticles, setLoadingStatus } = articleSlice.actions;

export default articleSlice.reducer;
