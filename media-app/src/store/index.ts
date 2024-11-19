import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export { store }; //Store
export type AppDispatch = typeof store.dispatch; //Dispatch
export type RootState = ReturnType<typeof store.getState>; //rootState
export * from "./thunks/fetchUsers";//Fetch User Thunk
export * from "./thunks/addUser";//Add User Thunk
export * from "./thunks/removeUser";//Remove User Thunk
