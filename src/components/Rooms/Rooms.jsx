import { StarFill } from "react-bootstrap-icons";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import "./Rooms.css";
import parse from "html-react-parser";

const { Configuration, OpenAIApi } = require("openai");

const Rooms = () => {
	const location = useLocation();
	const placeInfo = location.state.info;

	const configuration = new Configuration({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(configuration);

	const imageGallery = placeInfo?.images
		.slice(1, placeInfo?.images.length)
		.map((i, key) => (
			<div className="col-12 col-md-6 px-1 my-1" key={key}>
				<img src={i} className="rounded smallImg" alt={placeInfo.city} />
			</div>
		));

	return (
		<div>
			<header>
				<Navbar />
			</header>
			<body>
				<div className="container mt-4">
					<div>
						<h2>Casa PÉ NA AREIA em frente à Ilhabela</h2>
						<span className="reviews">
							<StarFill />
							<b className="mx-2">4.55</b> ·{" "}
							<a className="mx-1" href="#">
								13 comentários
							</a>{" "}
							·{" "}
							<a className="mx-1" href="#">
								{placeInfo?.city + ", " + placeInfo?.country}
							</a>
						</span>
					</div>
					<div className="row mt-5">
						<div className="col-12 col-md-12 col-lg-7 col-xl-7">
							<img
								src={placeInfo.images[0]}
								className="rounded-start mainImg"
								alt={placeInfo.city}
							/>
						</div>
						<div className="col-12 col-md-12 col-lg-5 col-xl-5">
							<div className="row">{imageGallery}</div>
						</div>
					</div>
				</div>
			</body>
		</div>
	);
};

export default Rooms;
