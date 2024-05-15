import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost, IPosts } from "@/types/post";

const initialState: IPosts = {
    posts: []
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (
            state,
            { payload }: PayloadAction<IPost[] | []>
        ) => {
            state.posts = payload
        }
    }
});

export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;
