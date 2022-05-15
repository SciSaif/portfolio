import React from "react";
import {motion, Variants} from "framer-motion";
import data from "../data/data.json";
import jobbedInHome from "../assets/jobbedInHome.png";

const coreSkills = data.coreTechnicalSkills;
const otherSkills = data.additionalSkills;

const cardVariants = (percent) => {
	return {
		offscreen: {
			width: 0,
		},
		onscreen: {
			width: `${percent}%`,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};
};

function Projects() {
	return (
		<section className="py-[80px] sm:py-[100px] max-w-[1000px]   text-white/25 flex flex-col justify-center   mx-auto font-sfMonoRegular overflow-x-hidden">
			<div className="about-heading w-fit flex flex-row  mt-[10px] mb-[40px] ">
				<div className="text-theme-green flex items-center text-[15px] sm:text-[20px]">03. </div>
				<h1 className="text-theme-gray-light  min-w-fit ml-[10px] text-[26px] sm:text-[32px]  flex justify-center items-center font-calibreSemiBold fontFix">Some things I've built</h1>
			</div>
			<div className="flex flex-col  justify-center items-center min-h-full text-[20px] font-calibreRegular text-theme-gray-deep font-medium ">
				<div className="mb-[100px] flex flex-row w-full h-full min-h-full">
					<div className="max-w-[60%] image-top ">
						<div className="image-cover ">
							<img src={jobbedInHome} alt="JobbedIn home page" className="" />
						</div>
					</div>
					<div className="max-w-[40%] w-[40%] flex flex-col items-end h-full ">
						<div className="text-theme-green my-2 mt-[40px] font-sfMonoRegular text-[13px]">Featured Project</div>
						<h1 className="font-calibreSemiBold text-[28px] text-theme-gray-light mb-5">JobbedIn</h1>
						<div className="relative w-full">
							<div className="p-6 absolute top-0 right-0 w-[120%] bg-theme-light-navy rounded text-theme-light-slate z-10">
								<p>A Full Stack Job Portal website for Employers and candidates. Separate accounts for both employers and candidates. </p>
							</div>
						</div>
						<div className=" relative w-full z-10 my-10">
							<div className="flex flex-row flex-wrap w-[120%]  absolute bottom-0 right-0   rounded text-theme-light-slate z-11">
								<div className="ml-[20px] mb-[5px]">React</div>
								<div className="ml-[20px] mb-[5px]">Express</div>
								<div className="ml-[20px] mb-[5px]">MongoDB</div>
								<div className="ml-[20px] mb-[5px]">Redux</div>
								<div className="ml-[20px] mb-[5px]">Tailwind CSS</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-[500px]"></div>
		</section>
	);
}

export default Projects;
