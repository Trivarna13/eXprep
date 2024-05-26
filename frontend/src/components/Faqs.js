import { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import "./css/faqs.css";

function FaqItem({ question, answer }) {
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

export default function Faqs() {
	return (
		<>
			<h2 className="faq-title">Frequently Asked Questions</h2>
			<FaqItem
				question="Which function gets from Python dictionary both key and value pairs as a list of tuples? Explain."
				answer="items(): returns a list of all the key-value pairs in the Dictionary as tuple"
			/>
			<FaqItem
				question="Write a code snippet demonstrating the use of a case expression to handle various scenarios for a given datatype. Explain your code and provide insights into the decision-making process behind each case."
				answer={`We define a datatype MIType with three constructors: TwoInts, Str, and Pizza.
- We define a function handleMIType that takes a value of type MIType and returns an integer based on the type of the input value.
- In the case expression:
  - Case 1: If the input is a Pizza, we return 3.
  - Case 2: If the input is a Str containing a string s, we return the length of s.
  - Case 3: If the input is TwoInts with values i1 and i2, we return the sum of i1 and i2.
- We demonstrate the usage of the handleMIType function with different inputs (Pizza, 'Str("hi")', and 'TwoInts(7, 9)') and observe the corresponding results.`}
			/>
			<FaqItem
				question="Evaluate the benefits and drawbacks of using accumulators in tail recursion."
				answer={`Using accumulators in tail recursion can offer several benefits:

1. Improved Efficiency: By accumulating results as you go along, you avoid unnecessary work in recursive calls. This can lead to better performance, especially when dealing with large data sets or deeply nested recursive structures.

2. Reduced Stack Space: Tail-recursive functions with accumulators typically do not grow the call stack with each recursive call, as the recursive call is the last operation performed. This avoids stack overflow errors and makes the function more memory efficient.

3. Simplicity and Elegance: Tail-recursive functions with accumulators often have simpler and more elegant code compared to non-tail-recursive versions. The accumulator parameter serves as a clear mechanism for carrying intermediate results through the recursion.`}
			/>
		</>
	);
}
