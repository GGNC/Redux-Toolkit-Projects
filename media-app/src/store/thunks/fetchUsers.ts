import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(
    "http://localhost:5000/users"
  );
  //Dev ONLY
  await pause(1000);
  //
  return response.data;
});

//Dev ONLY!!
const pause = (duration : number)=>{
  return new Promise((resolve)=>{
    setTimeout(resolve,duration)
  });
}
export {fetchUsers}
