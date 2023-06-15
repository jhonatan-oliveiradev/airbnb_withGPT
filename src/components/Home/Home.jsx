import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import SubClasses from "../SubClasses/SubClasses";
import { data } from "../../utils/data";

const Home = () => {
	const displayCards = data ? (
		data?.map((d, key) => <Card key={key} item={d} />)
	) : (
		<div>processando...</div>
	);

	return (
		<>
			<header>
				<Navbar />
				<SubClasses />
			</header>
			<body>
				<div className="container-fluid">
					<div className="row">{displayCards}</div>
				</div>
			</body>
		</>
	);
};

export default Home;
