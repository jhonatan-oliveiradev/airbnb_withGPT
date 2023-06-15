import "./Navbar.css";
import { PersonCircle, Search, List, Globe2 } from "react-bootstrap-icons";

const Navbar = () => {
	return (
		<nav className="navbar sticky-top navbar-expand-lg bg-white border border-1">
			<div className="container-fluid mt-2 mb-1">
				<a className="navbar-brand" href="#">
					<img
						src="https://companieslogo.com/img/orig/ABNB-4aaade0f.png?t=1633511992"
						alt="Logo"
						width="32"
						height="30"
						className="d-inline-block align-text-top"
					/>
					<span className="mx-2">
						<strong className="logo-lettering">airbnb</strong>
					</span>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
						<div className="rounded-pill px-2 shadow-sm border border-2">
							<form className="d-flex w-100 me-2 m-1" role="search">
								<input
									className="form-control me-1 rounded-pill input-lg border-0"
									type="search"
									placeholder="Start your search"
									aria-label="Search"
								/>
								<button
									className="btn rounded-circle px-2 border-0 search-btn"
									type="submit"
								>
									<Search fill="#fff" size={16} />
								</button>
							</form>
						</div>
					</ul>

					<span className="nav-item me-2">
						<div className="btn-group me-2" role="group">
							<button
								type="button"
								className="btn btn-outline-secondary rounded-pill border-0"
							>
								<span className="fw-semibold">List your space on Airbnb</span>
							</button>
							<button
								type="button"
								className="btn btn-outline-secondary rounded-pill border-0"
							>
								<Globe2 />
							</button>
						</div>
					</span>
					<span className="nav-item me-2 dropdown">
						<div className="dropdown">
							<button
								className="btn dropdown-toggle rounded-pill p-1 border border-1"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<List fill="gray" size={26} className="mx-2" />
								<PersonCircle fill="gray" size={26} />
							</button>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										Sign-up
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Sign-in
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href="#">
										List your space
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Support
									</a>
								</li>
							</ul>
						</div>
					</span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
