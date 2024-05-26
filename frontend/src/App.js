// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Student from "./components/Student";
import Faculty from "./components/Faculty";
import Course1 from "./components/Course1";
import Course2 from "./components/Course2";
import Course3 from "./components/Course3";
import Course4 from "./components/Course4";
import FacCourse1 from "./components/FacCourse1";
import FacCourse2 from "./components/FacCourse2";
import FacCourse3 from "./components/FacCourse3";
import FacCourse4 from "./components/FacCourse4";
import AboutUs from "./components/AboutUs";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/faculty-dashboard" element={<Faculty />} />
				<Route path="/student-dashboard" element={<Student />} />
				<Route
					path="/student-dashboard/course1"
					element={<Course1 />}
				/>
				<Route
					path="/student-dashboard/course2"
					element={<Course2 />}
				/>
				<Route
					path="/student-dashboard/course3"
					element={<Course3 />}
				/>
				<Route
					path="/student-dashboard/course4"
					element={<Course4 />}
				/>
				<Route
					path="/faculty-dashboard/course1"
					element={<FacCourse1 />}
				/>
				<Route
					path="/faculty-dashboard/course2"
					element={<FacCourse2 />}
				/>
				<Route
					path="/faculty-dashboard/course3"
					element={<FacCourse3 />}
				/>
				<Route
					path="/faculty-dashboard/course4"
					element={<FacCourse4 />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
