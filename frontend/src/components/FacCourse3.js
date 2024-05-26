import { NavLink } from "react-router-dom";
import Defs from "./Defs";
import Faqs from "./Faqs";
import Navbar from "./Navbar";

function FacCourse3() {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>
				<button>
					<NavLink to="/faculty-dashboard">Back</NavLink>
				</button>
				<button>
					<NavLink to="/faculty-dashboard">Edit</NavLink>
				</button>
			</div>
			<div>
				<h1>Course Name: DataBase management system</h1>
			</div>
			<div>
				<p>
					A Database Management System (DBMS) is a structured
					collection of interconnected data that facilitates efficient
					data access, insertion, and deletion within the system. It
					organizes data into tables, schemas, records, and other
					related structures, offering benefits over traditional file
					systems such as reduced data redundancy, improved data
					consistency, secure and streamlined data access, and robust
					backup and recovery capabilities.
					<br />
					The Entity-Relationship (ER) Model provides a logical
					representation of databases using entities (real-world
					objects), attributes (properties of entities), and
					relationships (associations between entities). Entities are
					depicted as rectangular boxes, attributes as ovals, and
					relationships as diamonds, offering a clear visual depiction
					of the database structure and relationships between various
					components.
					<br />
					The Cardinality of a relationship describes the number of
					times an entity from an entity set participates in a
					relationship set. For instance, in a binary relationship R
					between two entity sets A and B, the mapping cardinality can
					be defined based on how many instances of entities from A
					are related to entities from B, and vice versa.
					<br />
					SQL (Structured Query Language) is a powerful query language
					utilized for managing and manipulating relational databases.
					It enables users to interact with databases efficiently,
					offering a wide range of functionalities. With SQL, users
					can query data, update records, insert new data, delete
					records, create and modify database schemas, manage
					permissions, and perform various administrative tasks. SQL
					commands include a diverse set of operations such as CREATE
					DATABASE, USE, ALTER DATABASE, DROP DATABASE, CREATE, INSERT
					INTO, ALTER TABLE, and DROP TABLE, among others.
				</p>
			</div>
			<div>
				<Faqs />
			</div>
			<div>
				<Defs />
			</div>
		</div>
	);
}

export default FacCourse3;
