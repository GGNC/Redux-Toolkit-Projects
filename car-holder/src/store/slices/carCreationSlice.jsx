import { createSlice } from "@reduxjs/toolkit";

const carCreationSlice = createSlice({
  name: "carCreation",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase("carList/addCar", (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const carCreationReducer = carCreationSlice.reducer;
export const { changeName, changeCost } = carCreationSlice.actions;
