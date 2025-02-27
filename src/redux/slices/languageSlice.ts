"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:{preferred:string} = {
    preferred: "en-us"
};

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setPreferredLanguage: (state, action:PayloadAction<string>) => {
            state.preferred = action.payload;
        }
    }
});

export const { setPreferredLanguage } = languageSlice.actions;
export default languageSlice.reducer;