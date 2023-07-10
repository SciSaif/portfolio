import React from "react";
import ProfilePic from "../assets/saifSquare.jpg";
import {animate, motion} from "framer-motion";
import {animateSection} from "../utils/animateSection";

function About() {
	return (
		<section id="about" className="py-[80px] sm:py-[100px] max-w-[900px]  text-white/25 flex flex-col justify-center   mx-auto font-sfMonoRegular overflow-x-hidden">
			<div className="about-heading w-fit flex flex-row  mt-[10px] mb-[40px] ">
				<div className="text-theme-green flex items-center text-[15px] sm:text-[20px]">01. </div>
				<h1 className="text-theme-gray-light min-w-fit ml-[10px] text-[26px] sm:text-[32px]  flex justify-center items-center font-calibreSemiBold fontFix">About Me </h1>
			</div>
			<div className="flex flex-col md:flex-row align-middle min-h-full text-[20px] font-calibreRegular text-theme-gray-deep font-medium ">
				<div className="">
					<p className="mb-4">
						Hello! My name is Saifullah Rahman and I love to solve real world problems through my codes. My interest in Web Development started back in 2019 when I bought an Alexa device
						(echo). I was fascinated by all the different skills available in alexa but I wanted to create my own skills.So after a little bit of researching I was led to the huge world of
						Coding.
					</p>
					<p className="mb-4">
						Fast forward today, and I have become a Full Stack Web Developer experienced in creating many web applications. Right now I am learning new technologies, and I am looking for a
						place to apply my skills and knowledge to real world problems.
					</p>
					<p className="mb-4">
						I am currently working on a chat and video calling website {""}
						<a target="_blank" rel="noreferrer" href="https://github.com/SciSaif/JobbedIn" className="line">
							SciMeet
						</a>{" "}
						made using MERN stack, socket.io and webrtc. 
					</p>
					<p className="mb-4">Here are a few technologies I’ve been working with recently:</p>
					<div className="recent-skills">
						<div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">Typescript </div>
						<div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">Next.js</div>
						<div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">Socket.io</div>
						<div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">WebRTC</div>
					</div>
				</div>
				<div className="mx-auto mt-16 md:mt-0 ">
					<div className="md:ml-[55px] wrap-image w-[200px] md:w-[250px] lg:w-[300px]">
						<img src={ProfilePic} alt="profile pic" className="" />
					</div>
				</div>
			</div>
		</section>
	);
}

function animatedSection() {
	return animateSection(About);
}

export default animatedSection;
