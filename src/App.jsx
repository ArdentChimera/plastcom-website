import { Carousel } from "@material-tailwind/react";
import ProductCard from "./components/ProductCard.jsx";

import "./App.css";

function App() {
	return (
		<>
			<div className="grid grid-cols-4 gap-4 sticky top-0 z-50">
				<div className=" col-span-4 rounded-lg bg-green-700 opacity-95 shadow-2xl h-20 p-6">
					<div className="flex justify-between ">
						<h1 className="text-green-100 text-2xl font-bold">Logo</h1>
						<ul className="flex gap-6 text-green-100 font-bold">
							<li>About</li>
							<li>Contacts</li>
							<li>More</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-4 grid-rows-6 gap4 bg-gradient-to-r from-green-900 to-green-300 rounded-lg mt-20 z-10 relative">
				<div className="col-span-4 row-span-6 rounded-lg bg-industrial-hall bg-no-repeat bg-cover bg-center opacity-15 h-96 z-20  "></div>
				<div className="z-40 absolute left-10 top-8 w-2/4">
					<h2 className="text-white text-left text-5xl font-bold">
						Lorem ipsum
					</h2>
					<p className="text-white font-bold text-left mt-6 tracking-wider mb-14">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque
						enim ducimus, quod vel aspernatur distinctio odit error ratione
						harum nihil possimus molestias aut, modi et eum? Repudiandae,
						accusantium adipisci?
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
			<div className="grid grid-cols-9 grid-rows-4 gap-5 mt-32">
				<div className="col-start-3 col-span-5 flex justify-center">
					<h1 className="text-4xl font-bold text-green-700 mb-20">
						Premium services from plastic recycling to inovation and research
					</h1>
				</div>
				<div className="col-span-3 row-span-3 h-26 bg-gradient-to-t from-green-900 to-green-300 rounded-lg relative">
					<div className="col-span-3 row-span-3 bg-industrial-hall bg-cover rounded-lg bg-center bg-no-repeat h-full opacity-20"></div>
					<div className="z-40 absolute top-64 left-16 font-bold">
						<h2 className="text-white text-4xl mb-10">Lorem ipsum</h2>
						<ul className="text-white list-disc text-left">
							<li>Lorem ipsum, dolor sit amet</li>
							<li>consectetur adipisicing elit</li>
							<li>Natus eum, nihil doloremque</li>
							<li>perferendis dolorum expedita </li>
						</ul>
					</div>
				</div>
				<div className="col-span-3 row-span-3 h-26 bg-gradient-to-t from-green-900 to-green-300 rounded-lg relative">
					<div className="col-span-3 row-span-3 bg-industrial-hall bg-cover rounded-lg bg-center bg-no-repeat h-full opacity-20"></div>
					<div className="z-40 absolute top-64 left-16 font-bold">
						<h2 className="text-white text-4xl mb-10">Lorem ipsum</h2>
						<ul className="text-white list-disc text-left">
							<li>Lorem ipsum, dolor sit amet</li>
							<li>consectetur adipisicing elit</li>
							<li>Natus eum, nihil doloremque</li>
							<li>perferendis dolorum expedita </li>
						</ul>
					</div>
				</div>
				<div className="col-span-3 row-span-3 h-26 bg-gradient-to-t from-green-900 to-green-300 rounded-lg relative">
					<div className="col-span-3 row-span-3 bg-industrial-hall bg-cover rounded-lg bg-center bg-no-repeat h-full opacity-20"></div>
					<div className="z-40 absolute top-64 left-16 font-bold">
						<h2 className="text-white text-4xl mb-10">Lorem ipsum</h2>
						<ul className="text-white list-disc text-left">
							<li>Lorem ipsum, dolor sit amet</li>
							<li>consectetur adipisicing elit</li>
							<li>Natus eum, nihil doloremque</li>
							<li>perferendis dolorum expedita </li>
						</ul>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-4 grid-rows-10 gap4 bg-gradient-to-r from-green-900 to-green-300 mt-32 rounded-lg z-10 relative">
				<div className="col-span-4 row-span-10 rounded-lg bg-industrial-hall bg-no-repeat bg-cover bg-center opacity-15 h-96 z-20"></div>
				<Carousel
					transition={{ duration: 1 }}
					className="rounded-xl z-40 w-2/5 h-80 top-9 right-8 absolute"
				>
					<img
						src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
						alt="image 1"
						className="h-full w-full object-cover"
					/>
					<img
						src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
						alt="image 2"
						className="h-full w-full object-cover"
					/>
					<img
						src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
						alt="image 3"
						className="h-full w-full object-cover"
					/>
				</Carousel>
				<div className="z-40 absolute left-10 top-24 w-2/4">
					<h2 className="text-white text-left text-5xl font-bold">
						Certificates
					</h2>
					<p className="text-white font-bold text-left mt-6 tracking-wider mb-14">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque
						enim ducimus, quod vel aspernatur distinctio odit error ratione
						harum nihil possimus molestias aut, modi et eum? Repudiandae,
						accusantium adipisci?
					</p>
				</div>
			</div>
			<div className="grid grid-cols-12 grid-rows-5 gap-3 h-dvh mb-20">
				<h2 className="col-span-12 row-span-2 text-4xl font-bold text-green-700 mt-36 mb-0">
					Wide range of products
				</h2>
				<div className="col-span-3">
					<ProductCard />
				</div>
				<div className="col-span-3">
					<ProductCard />
				</div>
				<div className="col-span-3">
					<ProductCard />
				</div>
				<div className="col-span-3">
					<ProductCard />
				</div>
			</div>
		</>
	);
}

export default App;
