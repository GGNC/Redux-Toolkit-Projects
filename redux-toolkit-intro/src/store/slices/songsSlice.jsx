import { createSlice } from "@reduxjs/toolkit";
import { resetAll } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetSongs(state, action) {
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(resetAll, (state, action) => {
      return [];
    });
  },
});

export const songsReducer = songsSlice.reducer;
export const { addSong, removeSong, resetSongs } = songsSlice.actions;
