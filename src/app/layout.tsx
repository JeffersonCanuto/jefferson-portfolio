import React, { ReactNode } from "react";

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Main from "./main";

interface MetaData {
	title: string;
	description: string;
};

export const metadata:MetaData = {
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
			<body className={jetbrainsMono.variable}>
				<Main>{children}</Main>
			</body>
    	</html>
  );
}

export default RootLayout;