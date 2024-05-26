-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2024 at 10:01 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exam_prep_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `faculty_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `course_name`, `faculty_id`) VALUES
(1, 'Introduction to Programming', 1),
(2, 'Data Structures', 2),
(3, 'Database Management Systems', 3),
(4, 'Operating Systems', 4);

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `faculty_id` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`faculty_id`, `password`, `email`) VALUES
(1, 'securepass1', 'rmehta@gitam.edu'),
(2, 'securepass2', 'sreddy@gitam.edu'),
(3, 'securepass3', 'vpatel@gitam.edu'),
(4, 'securepass4', 'ngupta@gitam.edu'),
(8, 'Haha@1234', 'anandiga@gitam.edu');

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `faq_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`faq_id`, `course_id`, `question`, `answer`) VALUES
(1, 1, 'What is a variable?', 'A variable is a storage location paired with an associated symbolic name.'),
(2, 1, 'What is a function?', 'A function is a block of code that performs a specific task.'),
(3, 1, 'What is a loop?', 'A loop is a programming construct that repeats a block of code.'),
(4, 1, 'What is an if statement?', 'An if statement is a conditional statement that executes a block of code based on a condition.'),
(5, 1, 'What is an array?', 'An array is a data structure that contains a group of elements.'),
(6, 2, 'What is a data structure?', 'A data structure is a way of organizing and storing data.'),
(7, 2, 'What is a linked list?', 'A linked list is a linear data structure where elements are stored in nodes and each node points to the next node.'),
(8, 2, 'What is a stack?', 'A stack is a data structure that follows the Last In First Out (LIFO) principle.'),
(9, 2, 'What is a queue?', 'A queue is a data structure that follows the First In First Out (FIFO) principle.'),
(10, 2, 'What is a binary tree?', 'A binary tree is a tree data structure where each node has at most two children.'),
(11, 3, 'What is a database?', 'A database is an organized collection of data.'),
(12, 3, 'What is SQL?', 'SQL is a language used to communicate with and manipulate databases.'),
(13, 3, 'What is a primary key?', 'A primary key is a unique identifier for a record in a table.'),
(14, 3, 'What is a foreign key?', 'A foreign key is a field in one table that uniquely identifies a row of another table.'),
(15, 3, 'What is normalization?', 'Normalization is the process of organizing data to minimize redundancy.'),
(16, 4, 'What is an operating system?', 'An operating system is system software that manages computer hardware and software resources.'),
(17, 4, 'What is a process?', 'A process is an instance of a program that is being executed.'),
(18, 4, 'What is a thread?', 'A thread is the smallest unit of a process that can be scheduled for execution.'),
(19, 4, 'What is multitasking?', 'Multitasking is the ability of an operating system to execute multiple tasks simultaneously.'),
(20, 4, 'What is a file system?', 'A file system is a method of storing and organizing files on a storage device.');

-- --------------------------------------------------------

--
-- Table structure for table `imp_text`
--

CREATE TABLE `imp_text` (
  `text_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `password`, `email`) VALUES
(1, 'password123', 'akumar@gitam.in'),
(2, 'password456', 'sverma@gitam.in'),
(3, 'password789', 'rsharma@gitam.in'),
(4, 'password101', 'psingh@gitam.in'),
(12, 'Test@1234', 'tkoduru@gitam.in');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`faculty_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`faq_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `imp_text`
--
ALTER TABLE `imp_text`
  ADD PRIMARY KEY (`text_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `faculty_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `faq_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `imp_text`
--
ALTER TABLE `imp_text`
  MODIFY `text_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`faculty_id`);

--
-- Constraints for table `faqs`
--
ALTER TABLE `faqs`
  ADD CONSTRAINT `faqs_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`);

--
-- Constraints for table `imp_text`
--
ALTER TABLE `imp_text`
  ADD CONSTRAINT `imp_text_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
