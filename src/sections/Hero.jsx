import {motion} from "framer-motion";
import React from "react";

const startVariants = {
	initial: {
		opacity: 0,
	},
	end: {
		opacity: 1,
		transition: {
			type: "tween",
			bounce: 0.4,
			duration: 0.4,
			delay: 1,
		},
	},
};

function Hero() {
	return (
		<motion.section id="hero" className="h-screen max-w-[1000px]  text-white/25 flex flex-col justify-center   mx-auto font-sfMonoRegular" initial="initial" animate="end" variants={startVariants}>
			<div className="">
				<h1 className="text-theme-green mb-[15px] ml-[4px] ">Hi, my name is </h1>
			</div>
			<h2 className="name-heading font-calibreRegular text-[40px] font-bold text-theme-gray-light pt-0">Saifullah Rahman.</h2>
			<h3 className="sub-heading font-calibreRegular text-[40px] font-bold text-theme-gray-deep pt-0 ">I build cool stuff for the web.</h3>
			<p className="bio max-w-[540px] mt-[20px] text-[20px] text-theme-gray-deep font-calibreRegular">
				I'm a full stack web developer with a passion for building beautiful, responsive websites. I am currently focusing on the MERN stack and I am looking to expand my knowledge and
				skillset.
			</p>
			<div className="w-fit mt-9 border border-theme-green hover:bg-theme-green/10 cursor-pointer rounded flex  items-center text-theme-green">
				<a target="_blank" rel="noreferrer" href="https://github.com/SciSaif" className=" px-[50px] py-[18px]">
					Check out my github!
				</a>
			</div>
		</motion.section>
	);
}

export default Hero;
