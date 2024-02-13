import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="grid grid-cols-4 gap-4 sticky top-0 z-50">
				<div className=" col-span-4 rounded-lg bg-green-700 opacity-95 shadow-2xl h-20 p-6">
					<div className="flex justify-between ">
						<h1 className="text-green-100 text-2xl font-bold">Logo</h1>
						<ul className="flex gap-6 text-green-100 font-bold">
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/about">About</NavLink>
							</li>
							<li>
								<NavLink to="/products">Products</NavLink>
							</li>
							<li>More</li>
						</ul>
					</div>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navbar;
