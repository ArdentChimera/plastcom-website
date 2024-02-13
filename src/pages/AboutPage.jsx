import { Carousel } from "@material-tailwind/react";
import AnimatedPage from "./AnimatedPage";

const AboutPage = () => {
	return (
		<>
			<AnimatedPage>
				<div className="grid grid-cols-9 grid-rows-4 gap-5 mt-5">
					<div className="col-start-3 col-span-5 flex justify-center">
						<h1 className="text-4xl font-bold text-green-700 mb-16">
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
							itaque enim ducimus, quod vel aspernatur distinctio odit error
							ratione harum nihil possimus molestias aut, modi et eum?
							Repudiandae, accusantium adipisci?
						</p>
					</div>
				</div>
			</AnimatedPage>
		</>
	);
};

export default AboutPage;
