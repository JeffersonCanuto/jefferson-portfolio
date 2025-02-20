import React, { ReactNode } from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import Copyright from "@/components/Copyright";

interface MetaDataItems {
	title: string;
	description: string;
};

export const metadata:MetaDataItems = {
	title: "Porfolio - Jefferson Canuto",
	description: "Porfolio - Jefferson Canuto",
};

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsMono"
});

const RootLayout:React.FC<{children:ReactNode}> = ({ children }) => {
	return (
		<html lang="en">
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
    				<body className={jetbrainsMono.variable}>
						<Header />
						<StairTransition />
						<PageTransition>{children}</PageTransition>
						<Copyright />
      				</body>
				</PersistGate>
			</Provider>
    	</html>
  );
}

export default RootLayout;