import { createSlice } from "@reduxjs/toolkit";
import { resetAll } from "../actions";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetMovies(state, action) {
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(resetAll, (state, action) => {
      return [];
    });
  },
});

export const moviesReducer = moviesSlice.reducer;
export const { addMovie, removeMovie, resetMovies } = moviesSlice.actions;
