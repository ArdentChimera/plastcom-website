import AnimatedPage from "./AnimatedPage";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
	return (
		<>
			<AnimatedPage>
				<div className="grid grid-cols-12 gap-3  mb-0">
					<h2 className="col-span-12 row-span-1 text-4xl font-bold text-green-700 mt-10 mb-5">
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
			</AnimatedPage>
		</>
	);
};

export default ProductsPage;
