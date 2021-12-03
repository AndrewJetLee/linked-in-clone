import { createSlice } from "@reduxjs/toolkit";
import db, { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";

// Collection references
const articlesRef = collection(db, "articles");

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
            let payload = {
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
            }
            addDoc(articlesRef, payload)
              .then((data) => {
                console.log("Added article: ", payload);
                dispatch(updateArticles(payload));
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
      let payload = {
        actor: {
          description: article.user.email,
          title: article.user.displayName,
          image: article.user.photoURL,
        },
        date: article.date,
        video: article.video,
        sharedImg: "",
        comments: 0,
        description: article.description,
      };

      addDoc(articlesRef, payload)
        .then((data) => {
          console.log("Added article: ", payload);
          dispatch(updateArticles(payload));
          dispatch(setLoadingStatus(false));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};


// order the docs by date
export const getArticlesAPI = () => {
  return (dispatch) => {
    let payload;  
    const q = query(articlesRef, orderBy("date", "desc"));
    // onSnapshot(q, (snapshot) => {    
    //   payload = snapshot.docs.map((doc) => doc.data());
    //   dispatch(getArticles(payload))
    // })
    getDocs(q)
    .then((snapshot) => {
      payload = snapshot.docs.map((doc) => doc.data());
      dispatch(getArticles(payload))
    })
  };
};

// Helper functions
// const upload


// Slice
export const articleSlice = createSlice({
  name: "article",
  initialState: {
    loading: false,
    articles: [],
  },
  reducers: {
    getArticles(state, action) {
      state.articles = [...action.payload]
    },
    updateArticles(state, action) {
      state.articles.unshift(action.payload);
    },
    setLoadingStatus(state, action) {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateArticles, setLoadingStatus, getArticles } = articleSlice.actions;

export default articleSlice.reducer;
