import React from "react";
import {motion, Variants} from "framer-motion";
import data from "../data/data.json";

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

function Skills() {
	return (
		<section className="py-[80px] sm:py-[100px] max-w-[900px]   text-white/25 flex flex-col justify-center   mx-auto font-sfMonoRegular overflow-x-hidden">
			<div className="about-heading w-fit flex flex-row  mt-[10px] mb-[40px] ">
				<div className="text-theme-green flex items-center text-[20px]">02. </div>
				<h1 className="text-theme-gray-light min-w-[140px] ml-[10px] text-[32px]  flex justify-center items-center font-calibreSemiBold fontFix">My Skills</h1>
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start align-middle min-h-full text-[20px] font-calibreRegular text-theme-gray-deep font-medium ">
				<div className="w-fit">
					<h1 className="text-theme-gray-light font-sfMonoRegular mb-10 w-fit">Core Technical Skills</h1>
					<div className="font-calibreRegular text-2xl text-theme-green w-[300px] sm:w-[250px] md:w-[250px] lg:w-[300px] xl:w-[400px]">
						{coreSkills.map((skill) => (
							<div key={skill.name}>
								<div className="flex justify-between">
									<div className="skillName">{skill.name}</div>
									<div className="text-theme-green/75">{skill.percent}%</div>
								</div>
								<motion.div className="card-container" initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.8}}>
									<div className="bar w-[300px] sm:w-[250px] md:[250px] lg:w-[300px] xl:w-[400px] h-4 bg-theme-lightest-navy  mb-8">
										<motion.div className="bar-fill h-full bg-theme-green" variants={cardVariants(skill.percent)}></motion.div>
									</div>
								</motion.div>
							</div>
						))}
					</div>
				</div>
				<div>
					<h1 className="text-theme-gray-light font-sfMonoRegular mb-10 mt-10 sm:mt-0 ">Other skills</h1>
					<div className="font-calibreRegular text-2xl text-theme-green w-[300px] sm:w-[250px] md:w-[250px] lg:w-[300px]  xl:w-[400px]">
						{otherSkills.map((skill) => (
							<div key={skill.name}>
								<div className="flex justify-between">
									<div className="skillName">{skill.name}</div>
									<div className="text-theme-green/75">{skill.percent}%</div>
								</div>
								<motion.div className="card-container" initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.8}}>
									<div className="bar w-[300px] sm:w-[300px] md-w-[250px] lg-w-[300px]  xl:w-[400px] h-4 bg-theme-lightest-navy  mb-8">
										<motion.div className="bar-fill h-full bg-theme-green" variants={cardVariants(skill.percent)}></motion.div>
									</div>
								</motion.div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="h-[500px]"></div>
		</section>
	);
}

export default Skills;