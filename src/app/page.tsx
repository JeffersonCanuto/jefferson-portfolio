import React from "react";

import { FiDownload } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home:React.FC = () => {
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					{/* Text */}
					<div className="text-center xl:text-left order-2 xl:order-none">
						<span className="text-2xl">Software Engineer</span>
						<h1 className="h1 mt-4 animate-typing">
							Hello, I'm <br /> <span className="text-accent">Jefferson Canuto</span>
						</h1>
						<p className="max-w-[615px] mt-8 mb-10 text-white/80 text-justify">
							I am a Frontend/Fullstack Engineer, experienced in building Web Apps for many 
							purposes and using different technologies. You can navigate through all of the
							other sections to learn more about my skills, competences, experiences and myself
							as well. Also, feel free to contact me through one of my social media below &#128578;
						</p>
						{/* Button and Socials */}
						<div className="flex flex-col xl:flex-row items-center gap-4">
							<a href="/resumes/resume.pdf" target="_blank">
								<Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
									<span className="text-[12px]">Open Resume</span>
									<IoOpenOutline className="text-xl mb-1" />
								</Button>
							</a>
							<a href="/resumes/resume.pdf" download="Resume - Jefferson Canuto.pdf">
								<Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
									<span className="text-[12px]">Download Resume</span>
									<FiDownload className="text-xl mb-1" />
								</Button>
							</a>
							<div className="mb-8 xl:mb-0">
								<Social
									containerStyles="flex gap-6"
									iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
								/>
							</div>
						</div>
					</div>
					{/* Photo */}
					<div className="order-1 xl:order-none mb-8 xl:mb-0">	
						<Photo />
					</div>
				</div>
			</div>
			{/* Stats */}
			<Stats />
		</section>
	);
}

export default Home;
