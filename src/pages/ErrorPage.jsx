import { Link } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";

const ErrorPage = () => {
	return (
		<AnimatedPage>
			<div className="flex flex-col gap-6 justify-center items-center">
				<h1>Page is not found</h1>
				<Link
					to="/"
					className=" bg-green-500 text-white font-bold rounded-lg p-2 
                transition ease-in-out hover:-translate-y-1 hover:scale-110 
                hover:bg-green-600 hover:delay-300"
				>
					Go back to Home page
				</Link>
			</div>
		</AnimatedPage>
	);
};

export default ErrorPage;
