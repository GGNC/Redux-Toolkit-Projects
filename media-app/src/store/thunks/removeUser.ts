import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserInterface } from "../../api";
import axios from "axios";


const removeUser = createAsyncThunk('users/remove',async (user : UserInterface)=>{
    const response = await axios.delete(`http://localhost:5000/users/${user.id}`);

    //FIXX
    return response.data;
});


export {removeUser}