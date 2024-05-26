import { useState } from "react";
import { NavLink } from "react-router-dom";
import Defs from "./Defs";
import Faqs from "./Faqs";
import "./css/course.css";
import Navbar from "./Navbar";

function FacCourse1() {
	const [isEditing, setIsEditing] = useState(false);
	const [editedContent, setEditedContent] = useState(`
    Programming is the process of creating a set of instructions
    that tell a computer how to perform a task. It begins with
    understanding data types, which are the classifications
    computers use to differentiate between various forms of
    information. These data types include numeric, string, and
    boolean types. For instance, if a number data type is used,
    the program recognizes that arithmetic operations can be
    performed on it, but it cannot be capitalized. Strings,
    which are sequences of characters surrounded by single or
    double quotes, are used to represent text, speech, symbols,
    and other non-numerical characters. Booleans, on the other
    hand, represent the logical concepts of true and false.
    In programming, the logical AND operator (&&) is used to
    compare two values. It returns true only when both values
    evaluate to true, and false otherwise. Variables play a
    crucial role in programming by allowing programmers to
    assign a name to a piece of data and reference that data
    elsewhere in the program. Variables are declared by
    assigning them a name and a value using an equals sign
    (‘=’), and they can be reassigned to other values as needed.
    Cheat sheets are incredibly useful in the context of
    learning and using technology because they distill essential
    topics and concepts into concise, easy-to-understand
    formats. They simplify the learning process by providing
    clear and brief instructions, examples, and tips. Cheat
    sheets serve various purposes: they aid in learning new
    technologies, reviewing existing ones, and applying
    technology to solve specific problems.
  `);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = () => {
		setIsEditing(false);
		// Handle saving the edited content, if needed
	};

	const handleContentChange = (event) => {
		setEditedContent(event.target.value);
	};

	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>
				<NavLink to="/faculty-dashboard" className="back-lnk">
					<button className="back-btn">Back</button>
				</NavLink>
				{isEditing ? (
					<button onClick={handleSaveClick} className="back-btn">
						Save
					</button>
				) : (
					<button onClick={handleEditClick} className="back-btn">
						Edit
					</button>
				)}
			</div>
			<div className="container">
				<h1 className="text">Introduction to Advanced Programming</h1>
			</div>
			<div>
				{isEditing ? (
					<textarea
						className="para edit-text"
						value={editedContent}
						onChange={handleContentChange}
					/>
				) : (
					<p className="para">{editedContent}</p>
				)}
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

export default FacCourse1;
