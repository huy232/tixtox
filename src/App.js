import { useState } from "react"

function App() {
	const [job, setJob] = useState("")
	const [jobs, setJobs] = useState(() => {
		const storageJobs = JSON.parse(localStorage.getItem("jobs"))
		return storageJobs
	})

	const handleSubmit = () => {
		setJobs((prev) => {
			const newJobs = [...prev, job]

			const jsonJobs = JSON.stringify(newJobs)
			localStorage.setItem("jobs", jsonJobs)

			return newJobs
		})
		setJob("")
	}

	return (
		<div style={{ padding: 32 }}>
			<input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
			<button onClick={handleSubmit}>Add</button>
			<ul>
				{jobs.map((job, i) => (
					<li key={i}>{job}</li>
				))}
			</ul>
		</div>
	)
}

export default App
