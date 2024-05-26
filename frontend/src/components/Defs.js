import { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import "./css/faqs.css";

function DefItem({ question, answer }) {
	const [isActive, setIsActive] = useState(false);
	const contentRef = useRef(null);

	useEffect(() => {
		if (contentRef.current) {
			contentRef.current.style.maxHeight = isActive
				? `${contentRef.current.scrollHeight}px`
				: "0px";
		}
	}, [isActive]);

	const toggleAccordion = () => {
		setIsActive(!isActive);
	};

	return (
		<div className="faq">
			<button
				className={`question-section ${isActive ? "active" : ""}`}
				onClick={toggleAccordion}
			>
				<div className="question-align">
					<h4 className="question-style">{question}</h4>
					<FiPlus
						className={`question-icon ${isActive ? "rotate" : ""}`}
					/>
				</div>
			</button>
			<div
				ref={contentRef}
				className={`answer ${isActive ? "answer-divider" : ""}`}
			>
				<p>{answer}</p>
			</div>
		</div>
	);
}

export default function Defs() {
	return (
		<>
			<h2 className="faq-title">Important Definitions</h2>
			<DefItem
				question="Tail Recursion"
				answer="Tail recursion is a special form of recursion where the recursive call is the last operation performed by the function."
			/>
			<DefItem
				question="Accumulator"
				answer="An accumulator is a variable used to accumulate values during iteration or recursion, often used in tail-recursive functions."
			/>
			<DefItem
				question="Recursion"
				answer="Recursion is a programming technique where a function calls itself in its own definition."
			/>
			<DefItem
				question="State"
				answer="The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders."
			/>
		</>
	);
}
