import Nav from "./components/Nav";
import Home from "./components/Home";
import WhyAutomate from "./components/WhyAutomate";
import Example from "./components/Example";
import Considerations from "./components/Considerations";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div>
			<Nav />
			<Home />
			<WhyAutomate />
			<Example />
			<Considerations />
			<Footer />
		</div>
	);
};

export default App;
