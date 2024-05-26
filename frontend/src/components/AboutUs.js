import React from "react";
import { NavLink } from "react-router-dom";
import "./css/AboutUs.css";

function AboutUs() {
	return (
		<div className="App">
			<header className="header">
				<h1>About ExPrep GITAM</h1>
			</header>
			<div className="content">
				<h2>Our Mission</h2>
				<p>
					ExPrep is an exam preparation assistance website dedicated
					to providing efficient and effective learning solutions for
					GITAM students and teachers. Our mission is to provide
					summarized content for efficient exam revision, offer FAQs
					to address common questions, and include important
					definitions to aid in understanding key concepts.
				</p>

				<div className="quote">
					"Education is the passport to the future, for tomorrow
					belongs to those who prepare for it today." - Malcolm X
				</div>

				<div className="section">
					<div className="image-section">
						<img
							src="https://www.qub.ac.uk/home/media/Media,597443,en.jpg"
							alt="Students studying"
						/>
					</div>
					<div className="text-section">
						<h2>Student Assistance</h2>
						<ul>
							<li>
								Provide summarized content for efficient exam
								revision.
							</li>
							<li>Offer FAQs to address common questions.</li>
							<li>
								Include important definitions to aid in
								understanding key concepts.
							</li>
						</ul>
					</div>
				</div>

				<div className="section">
					<div className="text-section">
						<h2>Faculty Interaction</h2>
						<p>
							We also act as an interactive platform for faculty
							members, enabling them to upload course-related
							content easily. This interaction between students
							and faculty makes learning more engaging and
							effective.
						</p>
					</div>
					<div className="image-section">
						<img
							src="https://teaching.resources.osu.edu/sites/default/files/styles/max_960x960/public/2021-02/GroupCollaboration1_0.jpg?itok=qwBZP6P0"
							alt="Faculty interaction"
						/>
					</div>
				</div>

				<div className="join-section">
					<h2>Join Us</h2>
					<p>
						Join us today and take the first step towards your
						success in GITAM exams. We're excited to be a part of
						your learning journey!
					</p>
					<NavLink to="/" className="button">
						Get Started
					</NavLink>
				</div>
			</div>
			<footer>
				<p>&copy; 2024 ExPrep GITAM. All rights reserved.</p>
			</footer>
		</div>
	);
}

export default AboutUs;
