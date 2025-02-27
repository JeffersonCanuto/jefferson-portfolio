"use client";

import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist/es/types";

import languageReducer from "./slices/languageSlice";

// Combine all existing reducers
const rootReducer = combineReducers({
    language: languageReducer
});

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
export const persistor = persistStore(store);

// Set RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;