import React from "react";

function Credits() {
	return (
		<section id="credits" className="mb-7 mt-12 max-w-[600px]  text-white/25 flex flex-col justify-center items-center   mx-auto font-sfMonoRegular ">
			<div className="w-fit flex flex-col  mt-[50px] mb-4">
				<a
					href="https://github.com/SciSaif"
					target="_blank"
					rel="noreferrer"
					className=" flex flex-col text-theme-light-slate items-center text-[12px] font-sfMonoRegular mb-2 hover:text-theme-green">
					Created by
					<div className="mt-1">Saifullah Rahman</div>
				</a>
				<a href="https://github.com/bchiang7" target="_blank" rel="noreferrer" className="text-theme-light-slate flex items-center text-[12px] font-sfMonoRegular hover:text-theme-green ">
					Designed by Brittany Chiange
				</a>
			</div>
		</section>
	);
}

export default Credits;
