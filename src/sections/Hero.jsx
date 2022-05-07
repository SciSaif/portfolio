import React from "react";

function Hero() {
	return (
		<div className=" max-w-[1000px]  text-white/25 mt-[200px] flex flex-col justify-center   mx-auto font-sfMonoRegular">
			<div className="">
				<h1 className="text-theme-green mb-[15px] ml-[4px] ">Hi, my name is </h1>
			</div>
			<h2 className="name-heading font-calibreRegular text-[40px] font-bold text-theme-gray-light pt-0">Saifullah Rahman.</h2>
			<h3 className="sub-heading font-calibreRegular text-[40px] font-bold text-theme-gray-deep pt-0 ">I build cool stuff for the web.</h3>
			<p className="max:w-[540px]">I'm a full stack web developer specialising in backend development using Node.js and MongoDB. Currently I am learning frontend using react.</p>
		</div>
	);
}

export default Hero;
