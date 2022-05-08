import {useRef} from "react";
import Left from "./components/Left";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";

function App() {
	const mainRef = useRef(false);

	const toggleBlur = () => {
		mainRef.current.classList.toggle("blurBody");
	};

	return (
		<div>
			<main className="h-screen px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]" ref={mainRef}>
				<Hero />
				<About />
			</main>
			<Navbar toggle={() => toggleBlur()} />
		</div>
	);
}

export default App;
