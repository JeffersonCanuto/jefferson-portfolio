import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:{preferred:string} = {
    preferred: "pt-br"
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