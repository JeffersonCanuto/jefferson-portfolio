import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore, Persistor } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import { PersistConfig } from "redux-persist/es/types";

import languageReducer from "./slices/languageSlice";

// Combine all existing reducers
const rootReducer = combineReducers({
    language: languageReducer
});

// Create Noop storage (Fix persistence error in Next.js SSR)
const createNoopStorage = () => ({
    getItem() { return Promise.resolve(null) },
    setItem() { return Promise.resolve() },
    removeItem() { return Promise.resolve() }
});

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

// Configure info persistence
const persistConfig:PersistConfig<ReturnType<typeof rootReducer>> = {
    key: "root",
    storage,
    whitelist: ["language"]
};

// Wrap config and reducers to create persistedReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create redux store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: false
        })
});

// Create the persistor element
export const persistor = typeof window !== "undefined" ? persistStore(store) : ({} as Persistor);

// Set RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;