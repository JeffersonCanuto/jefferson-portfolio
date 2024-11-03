import { FiDownload } from "react-icons/fi";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

function Home() {
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					{/* Text */}
					<div className="text-center xl:text-left order-2 xl:order-none">
						<span className="text-xl">Software Engineer</span>
						<h1 className="h1 mb-6 animate-typing">
							Hello, I'm <br /> <span className="text-accent">Jefferson Canuto</span>
						</h1>
						<p className="max-w-[570px] mb-9 text-white/80">
							I am experienced in building Web Applications for many purposes and using many 
							different technologies. Please, refer to the <Link href="/skills"><b className="hover:text-accent hover:bg-transparent">Skills </b></Link>
							section, so you can properly see all <br /> of my competences.
						</p>
						{/* Button and Socials */}
						<div className="flex flex-col xl:flex-row items-center gap-8">
							<Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
								<span>Download CV</span>
								<FiDownload className="text-xl" />
							</Button>
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
