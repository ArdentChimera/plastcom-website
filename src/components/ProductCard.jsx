import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";

const ProductCard = () => {
	return (
		<Card className="w-76 bg-gradient-to-t from-green-900 to-green-300">
			<CardHeader shadow={false} floated={false} className="h-80">
				<img
					src="https://cdn.pixabay.com/photo/2017/07/23/23/43/pattern-2533144_1280.jpg"
					alt="card-image"
					className="h-full w-full object-cover"
				/>
			</CardHeader>
			<CardBody>
				<div className="mb-2 flex items-center justify-center">
					<Typography color="white" className="font-bold text-2xl">
						Medical product
					</Typography>
				</div>
				<Typography variant="small" color="white" className="font-normal">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
					nobis explicabo ab molestias, ex quibusdam?
				</Typography>
			</CardBody>
			<CardFooter className="pt-0">
				<Button
					ripple={false}
					fullWidth={true}
					className="bg-green-300 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
				>
					More products
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
