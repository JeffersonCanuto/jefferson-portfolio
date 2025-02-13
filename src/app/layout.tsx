import React, { ReactNode } from "react";

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

interface MetaDataItems {
	title: string;
	description: string;
};

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsMono"
});

export const metadata:MetaDataItems = {
	title: "Porfolio - Jefferson Canuto",
	description: "Porfolio - Jefferson Canuto",
};

const RootLayout:React.FC<{children:ReactNode}> = ({ children }) => {
	return (
		<html lang="en">
    		<body className={jetbrainsMono.variable}>
				<Header />
				<StairTransition />
				<PageTransition>{children}</PageTransition>
      		</body>
    	</html>
  );
}

export default RootLayout;