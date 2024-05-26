import { NavLink } from "react-router-dom";
import Faqs from "./Faqs";
import Defs from "./Defs";
import { useState } from "react";
import Navbar from "./Navbar";

function FacCourse2() {
	const [isEditing, setIsEditing] = useState(false);
	const [editedContent, setEditedContent] =
		useState(`Data Structures are a method of organizing and storing data in such a way that they can be accessed and manipulated efficiently. They define the relationship between the data    and the operations that can be performed on the data. There    are various kinds of data structures, each suited todifferent applications, with some being highly specializedfor specific tasks.Arrays are the simplest data structures, storing data
    elements based on a sequential, most commonly 0-based,
    index. Linked Lists store data with nodes that point to
    other nodes, creating a chain of elements. HashTables store
    data with key-value pairs, allowing for efficient data
    retrieval based on a unique key. Stacks, Queues, and Deques
    are abstract data types representing collections of elements
    with two major operations: adding an element to the end and
    removing an element from the beginning. Heaps are used in
    many famous algorithms, such as Dijkstra’s algorithm for
    finding the shortest path in a graph, the heap sort sorting
    algorithm, and implementing priority queues.

    Graphs are mathematical structures that represent pairwise
    relationships between objects, serving as a flow structure
    that illustrates the relationships between various objects.
    Trees are a type of graph used to represent hierarchical
    structures, consisting of nodes and edges connecting the
    nodes. A special kind of tree, called a binary tree, is
    employed in certain high-speed search algorithms.

    Big O Notation is used in Computer Science to describe the
    performance or complexity of an algorithm. Big O
    specifically characterizes the worst-case scenario and can
    be used to describe the execution time required or the space
    used (e.g., in memory or on disk) by an algorithm.`);

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
						className="para"
						value={editedContent}
						onChange={handleContentChange}
						rows={10}
						cols={50}
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

export default FacCourse2;
