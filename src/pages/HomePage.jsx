import "./App.css";
import AnimatedPage from "./AnimatedPage.jsx";

function HomePage() {
	return (
		<>
			<AnimatedPage>
				<div className="grid grid-cols-4 grid-rows-6 gap4 bg-gradient-to-r from-green-900 to-green-300 rounded-lg mt-20 z-10 relative">
					<div className="col-span-4 row-span-6 rounded-lg bg-industrial-hall bg-no-repeat bg-cover bg-center opacity-15 h-96 z-20  "></div>
					<div className="z-40 absolute left-10 top-8 w-2/4">
						<h2 className="text-white text-left text-5xl font-bold">
							Lorem ipsum
						</h2>
						<p className="text-white font-bold text-left mt-6 tracking-wider mb-14">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
							itaque enim ducimus, quod vel aspernatur distinctio odit error
							ratione harum nihil possimus molestias aut, modi et eum?
							Repudiandae, accusantium adipisci?
						</p>
						<div className="absolute z-40 flex justify-between gap-8 left-11">
							<button className=" bg-green-500 text-white font-bold rounded-lg p-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-600 hover:delay-300">
								Contact us
							</button>
							<button className=" border-2 border-solid border-green-100 rounded-lg p-2 text-green-100 font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-green-500 hover:delay-300">
								Brows our products
							</button>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-4 grid-rows-5 gap-6 mt-20">
					<div className=" col-span-1 row-span-5 bg-sveta-sofia bg-contain bg-center bg-no-repeat"></div>
					<div className=" col-span-1 row-span-5 bg-provet bg-contain bg-center bg-no-repeat"></div>
					<div className=" col-span-1 row-span-5 bg-pulmed bg-contain bg-center bg-no-repeat"></div>
					<div className=" col-span-1 row-span-5 bg-genika bg-contain bg-center bg-no-repeat"></div>
				</div>
			</AnimatedPage>
		</>
	);
}

export default HomePage;
