import { StarFill } from "react-bootstrap-icons";
import Carousel from "react-bootstrap/Carousel";
import { PropTypes } from "prop-types";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
	const item = props.item;
	const mappingImg = props.item ? (
		item.images.map((i, key) => (
			<Carousel.Item key={key}>
				<img
					className="d-block w-100 rounded slideImg"
					src={i}
					alt={item.city}
				/>
			</Carousel.Item>
		))
	) : (
		<Carousel.Item>
			<img
				className="d-block w-100 rounded"
				src="https://images.pexels.com/photos/2801312/pexels-photo-2801312.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
				alt={item.city}
			/>
		</Carousel.Item>
	);

	return (
		<div className="col-md-4 col-lg-3 col-xl-3 col-12">
			<div className="card border-0 p-2" style={{ width: "18rem" }}>
				<Link
					className="carousel-link"
					to={`/rooms/${item.id}`}
					state={{ info: item }}
				>
					<Carousel>{mappingImg}</Carousel>
					<div className="card-body text-start">
						<div className="flex justify-content-between">
							<p className="fw-bold m-0">
								{item.city}, {item.country}
							</p>
							<span className="italic">
								<StarFill size={16} />
								<em className="ms-1">4.55</em>
							</span>
						</div>
						<p className="m-0 text-secondary">163 km de distância</p>
						<p className="m-0 text-secondary">
							{item.startDate} - {item.endDate}.
						</p>
						<p className="m-0">
							<span className="fw-semibold">
								R$ {Math.round(Math.random() * (100 - 75) + 75)}
							</span>{" "}
							noite
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	item: PropTypes.object,
};
