import { configureStore } from "@reduxjs/toolkit";

export const store = () =>
    configureStore({
        reducer: {
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
            ])
    });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
