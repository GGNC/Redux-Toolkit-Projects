import { configureStore } from "@reduxjs/toolkit";
import { resetAll } from "./actions";
import {
  songsReducer,
  addSong,
  removeSong,
  resetSongs,
} from "./slices/songsSlice";
import {
  moviesReducer,
  addMovie,
  removeMovie,
  resetMovies,
} from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store }; //store
export { resetAll }; //actions
export { addSong, removeSong, resetSongs }; //songsSlice
export { addMovie, removeMovie, resetMovies }; //moviesSlice
