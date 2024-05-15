import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/user";
import { userReducer } from "./services/userSlice";
import { postApi } from "./api/post";
import { postReducer } from "./services/postSlice";

export const store = () =>
    configureStore({
        reducer: {
            [userApi.reducerPath]: userApi.reducer,
            [postApi.reducerPath]: postApi.reducer,
            users: userReducer,
            posts: postReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                userApi.middleware,
                postApi.middleware
            ])
    });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
