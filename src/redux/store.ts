import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist/es/types";

// Combine all existing reducers
const rootReducer = combineReducers({
    languagePreference: setLanguagePreference
});

// Configure info persistence
const persistConfig:PersistConfig<ReturnType<typeof rootReducer>> = {
    key: "root",
    storage,
    whitelist: ["languagePreference"]
};

// Wrap config and reducers to create persistedReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create redux store
const store = configureStore({
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