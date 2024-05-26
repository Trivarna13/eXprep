const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "exam_prep_db",
});

db.connect((err) => {
	if (err) {
		console.error("Error connecting to the database:", err);
	} else {
		console.log("Connected to the database.");
	}
});

app.post("/signup", (req, res) => {
	if (req.body.email.endsWith("@gitam.edu")) {
		const sql = "INSERT INTO faculty (`email`, `password`) VALUES (?, ?)";
		const values = [req.body.email, req.body.password];
		db.query(sql, values, (err, data) => {
			if (err) {
				return res
					.status(500)
					.json({ error: "Error registering faculty" });
			}
			return res.json("Faculty registered successfully");
		});
	} else if (req.body.email.endsWith("@gitam.in")) {
		const sql = "INSERT INTO students (`email`, `password`) VALUES (?, ?)";
		const values = [req.body.email, req.body.password];
		db.query(sql, values, (err, data) => {
			if (err) {
				return res
					.status(500)
					.json({ error: "Error registering student" });
			}
			return res.json("Student registered successfully");
		});
	} else {
		return res.status(400).json({ error: "Invalid email domain" });
	}
});

app.post("/signup", (req, res) => {
	if (req.body.email.endsWith("@gitam.edu")) {
		const sql = "INSERT INTO faculty (`email`, `password`) VALUES (?, ?)";
		const values = [req.body.email, req.body.password];
		db.query(sql, values, (err, data) => {
			if (err) {
				return res
					.status(500)
					.json({ error: "Error registering faculty" });
			}
			return res.json("Faculty registered successfully");
		});
	} else if (req.body.email.endsWith("@gitam.in")) {
		const sql = "INSERT INTO students (`email`, `password`) VALUES (?, ?)";
		const values = [req.body.email, req.body.password];
		db.query(sql, values, (err, data) => {
			if (err) {
				return res
					.status(500)
					.json({ error: "Error registering student" });
			}
			return res.json("Student registered successfully");
		});
	} else {
		return res.status(400).json({ error: "Invalid email domain" });
		``;
	}
});

app.post("/login", (req, res) => {
	const { email, password } = req.body;
	const facultySql =
		"SELECT * FROM faculty WHERE `email` = ? AND `password` = ?";
	const studentSql =
		"SELECT * FROM students WHERE `email` = ? AND `password` = ?";

	db.query(facultySql, [email, password], (err, facultyData) => {
		if (err) {
			console.error("Error querying faculty table:", err);
			return res.status(500).json({ error: "Internal server error" });
		}

		if (facultyData.length > 0) {
			return res.json({
				success: true,
				message: "Login successful",
				userType: "faculty",
			});
		} else {
			db.query(studentSql, [email, password], (err, studentData) => {
				if (err) {
					console.error("Error querying students table:", err);
					return res
						.status(500)
						.json({ error: "Internal server error" });
				}

				if (studentData.length > 0) {
					return res.json({
						success: true,
						message: "Login successful",
						userType: "student",
					});
				} else {
					return res.status(401).json({
						success: false,
						message: "Invalid email or password",
					});
				}
			});
		}
	});
});

app.listen(8081, () => {
	console.log("listening");
});
