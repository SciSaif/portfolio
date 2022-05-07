import {useRef} from "react";
import Navbar from "./components/Navbar";

function App() {
	const mainRef = useRef(false);

	const toggleBlur = () => {
		mainRef.current.classList.toggle("blurBody");
	};

	return (
		<>
			<div className="h-[5000px] text-white/25 mt-[200px] " ref={mainRef}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium voluptatum atque consectetur adipisci iusto neque temporibus, delectus molestias incidunt quasi aliquam,
				quia debitis. Consectetur magnam dolore harum quibusdam nam obcaecati repellendus laudantium, praesentium adipisci libero, soluta commodi ut excepturi pariatur? Est saepe nemo culpa
				dolorem rem nostrum aliquid unde quidem, earum sint impedit ipsum eius accusamus eligendi, provident laboriosam obcaecati laudantium beatae a. Fugiat, recusandae cumque odio assumenda
				beatae rerum asperiores dolor minima vel! Veniam minima, laborum quisquam doloremque ipsa fugiat consequuntur recusandae suscipit atque odit fuga? Non esse veritatis totam tempore
				cumque voluptatibus exercitationem sit soluta voluptates fuga!
			</div>
			<Navbar toggle={() => toggleBlur()} />
		</>
	);
}

export default App;
