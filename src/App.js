import {useRef} from "react";
import Left from "./components/Left";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
	const mainRef = useRef(false);

	const toggleBlur = () => {
		mainRef.current.classList.toggle("blurBody");
	};

	return (
		<div>
			<main className="px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]" ref={mainRef}>
				<Hero />
			</main>
			<Navbar toggle={() => toggleBlur()} />
		</div>
	);
}

export default App;
