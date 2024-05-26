import { useState } from "react";
import "./css/dashboard.css";
import Navbar from "./Navbar";

const courses = [
	{
		id: 1,
		title: "Introduction to Programming Languages",
		image: "https://dotnettrickscloud.blob.core.windows.net/article/3720230518234845.webp",
		link: "student-dashboard/course1",
	},
	{
		id: 2,
		title: "Data Structures",
		image: "https://user-images.githubusercontent.com/109382325/215787207-0f6771fe-7a53-4a85-8781-ae5230532aa6.png",
		link: "student-dashboard/course2",
	},
	{
		id: 3,
		title: "Database Management System",
		image: "https://media.licdn.com/dms/image/D5612AQE4aOimenblxw/article-cover_image-shrink_600_2000/0/1710407600740?e=2147483647&v=beta&t=Lzq7UY5zMdYilS3yLliGvQ7Vavv7e_7dwRt_Z_8rXzQ",
		link: "student-dashboard/course3",
	},
	{
		id: 4,
		title: "Operating Systems",
		image: "https://previews.123rf.com/images/macro1/macro11905/macro1190506034/123895537-operating-system-icon-vector-from-computer-collection-thin-line-operating-system-outline-icon-vector.jpg",
		link: "student-dashboard/course4",
	},
];

const Student = () => {
	const [viewMore, setViewMore] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const toggleView = () => {
		setViewMore(!viewMore);
	};

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const fc = courses.filter((course) =>
		course.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div className="dashboard-container">
				<h1 className="heading">Our Courses</h1>

				<div className="search-bar">
					<input
						id="search-input"
						type="text"
						placeholder="Search courses..."
						value={searchQuery}
						onChange={handleSearchChange}
					/>
					<i className="fas fa-search search-icon"></i>
				</div>

				<div className="box-container">
					{fc.slice(0, viewMore ? fc.length : 2).map((course) => (
						<div className="box" key={course.id}>
							<a href={course.link}>
								<div className="image">
									<img
										src={course.image}
										alt={course.title}
									/>
								</div>
								<div className="content">
									<h3>{course.title}</h3>
								</div>
							</a>
						</div>
					))}
				</div>

				<div className="buttons">
					<div id="view-more" className="btn" onClick={toggleView}>
						{viewMore ? "View Less" : "View More"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Student;
