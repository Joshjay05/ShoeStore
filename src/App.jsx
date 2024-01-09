// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import {
	CustomerReviews,
	Footer,
	Hero,
	PopularProducts,
	SpecialOffer,
	SuperQuality,
	Services,
	Subscribe,
} from "./Sections";
import Nav from "./Sections/Nav";
const App = () => {
	// const [count, setCount] = useState(0)

	return (
		<>
			<main className="relative">
				<Nav />
				<section className="x1:padding-1 wide:padding-r padding-b">
					<Hero />
				</section>
				<section className="padding">
					<PopularProducts />
				</section>
				<section className="padding">
					<SuperQuality />
				</section>
				<section className="padding">
					<Services />
				</section>
				<section className="padding-x py-10">
					<SpecialOffer />
				</section>
				<section className="bg-pale-blue padding">
					<CustomerReviews />
				</section>
				<section className="padding-x sm:py-32 py-16 w-full">
					<Subscribe />
				</section>
				<section className="padding bg-blackpadding-x padding-t pb-8">
					<Footer />
				</section>
			</main>
		</>
	);
};

export default App;
