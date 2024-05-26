import React from "react";
import "./css/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="app-name">
				<h1 className="app-title">eXprep</h1>
			</div>
			<ul>
				<li>
					<NavLink to="/" className="log-out-lnk">
						<button className="log-out-btn">Log Out</button>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
