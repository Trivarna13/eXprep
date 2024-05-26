import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/styles.css";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});

	const nav = useNavigate();

	const validateEmail = (email) => {
		const regex = /^[^\s@]+@gitam\.(?:in|edu)$/i;
		return regex.test(email);
	};

	const validatePassword = (password) => {
		const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
		return regex.test(password);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			email: email,
			password: password,
		};

		setErrors({});

		if (!validateEmail(email)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				email: "Invalid email. Please use a valid Gitam email address.",
			}));
			return;
		}

		if (!validatePassword(password)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				password:
					"Password must be at least 6 characters long, containing at least one capital letter, one special character, and one number.",
			}));
			return;
		}

		if (password !== confirmPassword) {
			setErrors((prevErrors) => ({
				...prevErrors,
				confirmPassword: "Passwords do not match.",
			}));
			return;
		}

		try {
			const response = await axios.post(
				"http://localhost:8081/signup",
				data
			);
			nav("/");
			console.log("Success:", response.data);
			setEmail("");
			setPassword("");
			setConfirmPassword("");
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="Main">
			<div className="left">
				<NavLink to="/about-us" className="abt-lnk">
					<h1 className="AppName">eXprep</h1>
				</NavLink>
			</div>
			<div className="right">
				<h1>Register</h1>
				<form onSubmit={handleSubmit}>
					<div className="text_field">
						<input
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
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
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<span></span>
						<label>Password</label>
						{errors.password && (
							<p className="error">{errors.password}</p>
						)}
					</div>
					<div className="text_field">
						<input
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
						<span></span>
						<label>Confirm Password</label>
						{errors.confirmPassword && (
							<p className="error">{errors.confirmPassword}</p>
						)}
					</div>
					<input type="submit" value="Register" />
					<div className="signup_link">
						Already a member?{" "}
						<NavLink to="/">
							<div>Log In</div>
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
