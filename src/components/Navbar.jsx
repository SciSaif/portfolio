import React, {useRef, useEffect} from "react";
import logo from "../assets/logo-42.png";

function useOutsideAlerter(ref, toggleDrawer) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			// handle if clicked on menuBtn
			if (event.target.classList.contains("ham-box") || event.target.classList.contains("menuBtn")) {
				return;
			}
			if (ref.current.classList.contains("drawer-hidden")) {
				return;
			}
			if (ref.current && !ref.current.contains(event.target)) {
				toggleDrawer();
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

function Navbar({toggle}) {
	const drawerRef = useRef(false);

	const toggleDrawer = () => {
		drawerRef.current.classList.toggle("drawer-visible");
		drawerRef.current.classList.toggle("drawer-hidden");
		toggle();
	};
	useOutsideAlerter(drawerRef, toggleDrawer);

	return (
		<header className="navbar h-[100px] px-[25px] md:px-[40px] lg:px-[50px] flex justify-between items-center text-theme-lightest-slate font-sfMonoRegular ">
			<nav className="w-full  flex flex-row justify-between items-center">
				<div className="my-auto">
					<img src={logo} alt="logo" />
				</div>
				<div className="hidden sm:flex flex-row text-[13px] ">
					<div className="p-[10px]  font-poppins mx-1 cursor-pointer hover:text-theme-green">
						<span className="text-theme-green">01. </span> About
					</div>
					<div className="p-[10px]  font-poppins mx-1 cursor-pointer hover:text-theme-green">
						<span className="text-theme-green">02. </span> Experience
					</div>
					<div className="p-[10px]  font-poppins mx-1 cursor-pointer hover:text-theme-green">
						<span className="text-theme-green">03. </span> Work
					</div>
					<div className="p-[10px]  font-poppins mx-1 cursor-pointer hover:text-theme-green">
						<span className="text-theme-green">04. </span> Contact
					</div>
					<div className="ml-4 px-[16px] py-[12px]n border border-theme-green rounded flex items-center text-theme-green">
						<a target="_blank" href="/" className="">
							Resume
						</a>
					</div>
				</div>

				{/* mobile nav menu button */}
				<button className="menuBtn sm:hidden" onClick={toggleDrawer}>
					<div className="ham-box">
						<div className="ham-box-inner"></div>
					</div>
				</button>

				<aside className="drawer drawer-hidden" ref={drawerRef}>
					<div className="flex-row text-[16px] ">
						<div className="p-[10px] flex flex-col justify-center  items-center font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<div className="text-theme-green ">01. </div> <div className="mb-2 mt-1">About</div>
						</div>
						<div className="p-[10px] flex flex-col justify-center  items-center  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<div className="text-theme-green ">02. </div> <div className="mb-2 mt-1">Experience</div>
						</div>
						<div className="p-[10px] flex flex-col justify-center  items-center  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<div className="text-theme-green ">03. </div> <div className="mb-2 mt-1">Work</div>
						</div>
						<div className="p-[10px] flex flex-col justify-center  items-center  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<div className="text-theme-green ">04. </div> <div className="mb-2 mt-1">Contact</div>
						</div>
						<div className=" px-[50px] py-[18px] mt-9 border border-theme-green rounded flex  items-center text-theme-green">
							<a target="_blank" href="/" className="">
								Resume
							</a>
						</div>
					</div>
				</aside>
			</nav>
		</header>
	);
}

export default Navbar;
