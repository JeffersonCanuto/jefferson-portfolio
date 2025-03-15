"use client";

import React from "react";

import { useSelector } from "react-redux";

import { FaSitemap } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { RootState } from "@/redux/store";

import homeStrings from "@/strings/pages/Home";

const Home:React.FC = () => {
	const language = useSelector((state:RootState) => state.language.preferred);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2, duration: 0.4, ease: "easeIn" }
			}} 
			className="relative -top-6 h-full"
		>
			<main className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					{/* Text */}
					<div className="text-center xl:text-left order-2 xl:order-none">
						<span className="text-2xl">
							{homeStrings[language.includes("en-us") ? "en" : "br"].title}
						</span>
						<h1 className="h1 mt-4 animate-typing">
							{ language.includes("en-us") ? "Hello, I'm" :  "Olá, Me chamo" } <br /> <span className="text-accent">Jefferson Canuto</span>
						</h1>
						<p className="max-w-[615px] mt-8 mb-10 text-white/80 text-justify">
							{homeStrings[language.includes("en-us") ? "en" : "br"].introduction} &#128578;
						</p>
						{/* Button and Socials */}
						<div 
							className={`flex flex-col xl:flex-row items-center ${language.includes("en-us") ? "gap-8" : "gap-3"}`}
						>
							<a 
								href={language.includes("en-us") ? "/resumes/resume.pdf" : "/resumes/cv.pdf"} 
								target="_blank"
							>
								<Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
									<span className="text-[12px]">
										{homeStrings[language.includes("en-us") ? "en" : "br"].openButton}
									</span>
									<IoOpenOutline className="text-xl mb-1" />
								</Button>
							</a>
							<a 
								href={`${language.includes("en-us") ? "/resumes/resume.pdf" : "/resumes/cv.pdf"}`}
								download={`${language.includes("en-us") ? "Resume - Jefferson Canuto.pdf" : "CV - Jefferson Canuto.pdf"}`}
							>
								<Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
									<span className="text-[12px]">
										{homeStrings[language.includes("en-us") ? "en" : "br"].downloadButton}
									</span>
									<FiDownload className="text-xl mb-1" />
								</Button>
							</a>
							<div className="grid grid-cols-1 mb-8 xl:mb-0 gap-3">
								<p className="flex justify-center items-center gap-1">
									<FaSitemap className="text-accent text-[12px]"/>
									<span className="text-accent text-[13px]">|</span>
									<span className="text-accent text-[13px]">
										{homeStrings[language.includes("en-us") ? "en" : "br"].socialMedia}
									</span>
								</p>
								<Social
									containerStyles="flex gap-6"
									iconStyles="w-7 h-7 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
								/>
							</div>
						</div>
					</div>
					{/* Photo */}
					<div className="order-1 xl:order-none mb-8 xl:mb-0">	
						<Photo />
					</div>
				</div>
			</main>
			<Stats language={language} />
		</motion.div>
	);
}

export default Home;