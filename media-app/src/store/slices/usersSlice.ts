import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../../api";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

export interface UsersSliceInterface {
  data: UserInterface[];
  isLoading: boolean;
  error: null | {
    statusCode?: number;
    message?: string;
    details?: string;
  };
}
const initialState: UsersSliceInterface = {
  data: [],
  isLoading: false,
  error: null,
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //Fetch User
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //Add User
    builder.addCase(addUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //Remove User
    builder.addCase(removeUser.pending, (state)=>{
      state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.data = state.data.filter(user=>{
        return user.id !== action.payload.id;
      })
    });
    builder.addCase(removeUser.rejected, (state,action)=>{
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;
