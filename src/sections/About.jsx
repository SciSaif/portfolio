import React from "react";
import ProfilePic from "../assets/saifSquare.jpg";

function About() {
	return (
		<section className="py-[80px] sm:py-[100px] max-w-[900px]  text-white/25 mt-[200px] flex flex-col justify-center   mx-auto font-sfMonoRegular">
			<div className="about-heading w-fit flex flex-row align-middle mt-[10px] mb-[40px]">
				<div className="text-theme-green flex items-center text-[20px]">01. </div>
				<h1 className="text-theme-gray-light  ml-[10px] text-[32px] flex justify-center items-center font-calibreRegular font-bold">About Me </h1>
			</div>
			<div className="flex flex-row align-middle min-h-full text-[20px] font-calibreRegular text-theme-gray-deep font-medium ">
				<div className="">
					<p className="mb-4">
						Hello! My name is Saifullah Rahman and I love to solve real world problems through my codes. My interest in Web Development started back in 2019 when I bought an Alexa device
						(echo). I was fascinated by all the different skills available in alexa but I wanted to create my own skills.So after a little bit of researching I was led to the huge world of
						Coding.
					</p>
					<p className="mb-4">
						Fast forward today, and I have become a Full Stack Web Developer experienced in creating many web applications. Right now I am learning new technologies, especially on the
						frontend side.
					</p>
					<p className="mb-4">
						I am currently working on a Job Portal website called{" "}
						<a target="_blank" rel="noreferrer" href="https://github.com/SciSaif/JobbedIn">
							JobbedIn
						</a>{" "}
						made using MERN stack.
					</p>
					<p className="mb-4">Here are a few technologies I’ve been working with recently:</p>
					<div className="recent-skills">
						<div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">Javascript (ES6+)</div>
						<div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">React.js</div>
						<div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">Express.js</div>
						<div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">MongoDB</div>
					</div>
				</div>
				<div>
					<div class="ml-[55px] h-[300px] w-[300px] max-w-[300px] wrap-image">
						<img src={ProfilePic} alt="profile pic" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
