import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/styles.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});
	const [error, setError] = useState("");

	const nav = useNavigate();

	const validateEmail = (email) => {
		const regex = /^[^\s@]+@gitam\.(?:in|edu)$/i;
		return regex.test(email);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			email: email,
			password: password,
		};

		setErrors({});
		setError("");

		if (!validateEmail(email)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				email: "Invalid email. Please use a valid Gitam email address.",
			}));
			return;
		}

		try {
			const response = await axios.post(
				"http://localhost:8081/login",
				data
			);
			if (response.data.success) {
				if (response.data.userType === "faculty") {
					nav("/faculty-dashboard");
					console.log("Success:", response.data);
				} else if (response.data.userType === "student") {
					nav("/student-dashboard");
					console.log("Success:", response.data);
				}
			} else {
				setError(response.data.message || "Login failed");
			}
			setEmail("");
			setPassword("");
		} catch (error) {
			console.error("Error:", error);
			setError("Incorrect Email or Password. ");
		}
	};

	return (
		<div className="Main">
			<div className="left">
				<h1>eXprep</h1>
			</div>
			<div className="right">
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<div className="text_field">
						<input
							type="text"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<span></span>
						<label>Email</label>
						{errors.email && (
							<p className="error">{errors.email}</p>
						)}
					</div>
					<div className="text_field">
						<input
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<span></span>
						<label>Password</label>
						{errors.password && (
							<p className="error">{errors.password}</p>
						)}
					</div>
					<div className="pass">Forgot Password?</div>
					<input type="submit" value="Login" />
					{error && <div className="error">{error}</div>}
					<div className="signup_link">
						Not a member?{" "}
						<NavLink to="/register">
							<div>Sign Up</div>
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
