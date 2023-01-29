import "./App.css";


import Background from "./components/Background";
import Content from "./components/Content";

function App() {
	

	return (
		<main className="w-screen h-screen absolute top-0 left-0 text-white z-0">
			<Background />
			<Content />
		</main>
	);
}

export default App;
