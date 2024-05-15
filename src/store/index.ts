import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/user";
import { userReducer } from "./services/userSlice";

export const store = () =>
    configureStore({
        reducer: {
            [userApi.reducerPath]: userApi.reducer,
            users: userReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                userApi.middleware
            ])
    });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
