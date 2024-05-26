import { NavLink } from "react-router-dom";
import Defs from "./Defs";
import Faqs from "./Faqs";
import Navbar from "./Navbar";

function FacCourse4() {
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
				<h1>Course Name: Operating systems</h1>
			</div>
			<div>
				<p>
					An Operating System (OS) serves as the interface between the
					user and the computer hardware. There are various types of
					operating systems, each designed to manage different tasks
					and resources. Batch OS stores a set of similar jobs in the
					main memory for execution, assigning a job to the CPU only
					after the previous job completes. Multiprogramming OS
					maintains jobs in the main memory waiting for CPU time, with
					the OS selecting and assigning one of the processes to the
					CPU. Multitasking OS combines the advantages of
					multiprogramming and CPU scheduling, allowing quick switches
					between jobs to enhance performance. Time Sharing OS
					requires user interaction to instruct the OS on performing
					various tasks. Real-Time OS is typically designed for
					dedicated systems to accomplish specific tasks within strict
					deadlines.
					<br />
					A thread is a lightweight process and the fundamental unit
					of CPU utilization. Each thread has its own program counter,
					register set, and stack but shares resources like the code
					section, data section, files, and signals with other threads
					of the same process. Introducing a new thread or a child
					process can be done using the fork() system call. When a
					process executes fork() 𝑛 n times, it generates 2 𝑛 − 1 2 n
					−1 child processes. Threads are categorized into user
					threads and kernel threads based on how they are managed and
					utilized by the system.
					<br />A process is essentially a program in execution. The
					program counter (PC) holds the address of the next
					instruction to be executed for the process. Each process is
					represented by a Process Control Block (PCB), which contains
					critical information about the process's state, including
					its scheduling information. Process Scheduling deals with
					various time-related aspects of a process, such as Arrival
					Time, which is the time at which the process enters the
					ready queue.
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

export default FacCourse4;
