"use client";

import React, { ReactNode } from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";

import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import Copyright from "@/components/Copyright";

const Main:React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Header />
                    <StairTransition />
                    <PageTransition>{children}</PageTransition>
                    <Copyright />
                </PersistGate>
			</Provider>
        </>
    );
}

export default Main;