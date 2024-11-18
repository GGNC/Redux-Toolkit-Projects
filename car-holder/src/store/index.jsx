import { configureStore } from "@reduxjs/toolkit";
import {
  carCreationReducer,
  changeName,
  changeCost,
} from "./slices/carCreationSlice";
import {
  carListReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carListSlice";

const store = configureStore({
  reducer: {
    carCreation: carCreationReducer,
    carList: carListReducer,
  },
});

export { store }; //store
export { changeName, changeCost }; //carCreation
export { changeSearchTerm, addCar, removeCar }; //carList
