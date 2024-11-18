import { createSlice, nanoid } from "@reduxjs/toolkit";

const carListSlice = createSlice({
  name: "carList",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //Assumption:
      //action.payload = {
      //    name : string,
      //    cost : number
      //}
      state.cars.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      //Assumption:
      //action.payload = {id : number} => the id of the car we want to remove
      state.cars = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
    },
  },
});

export const carListReducer = carListSlice.reducer;
export const { changeSearchTerm, addCar, removeCar } = carListSlice.actions;
