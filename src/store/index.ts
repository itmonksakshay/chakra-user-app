import { configureStore } from "@reduxjs/toolkit";
import { coreApi } from "./api/coreApi";
import { userModalReducer } from "./services/userModalSlice";
import { postReducer } from "./services/postSlice";

export const store = () =>
    configureStore({
        reducer: {
            [coreApi.reducerPath]: coreApi.reducer,
            users: userModalReducer,
            posts: postReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                coreApi.middleware
            ])
    });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
