import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser, IUsers } from "@/types/users";

const initialState: IUsers = {
   users: []
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsers: (
            state,
            { payload }: PayloadAction<IUser[] | []>
        ) => {
            state.users = payload
        }
    }
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
