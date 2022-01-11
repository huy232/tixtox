import { useState, useRef, useEffect } from "react"
import Content from "./Content"
function App() {
	const [count, setCount] = useState(60)

	const timerId = useRef()
	const prevCount = useRef()
	const h1Ref = useRef()

	useEffect(() => {
		prevCount.current = count
	}, [count])

	useEffect(() => {
		console.log(h1Ref.current)
	})

	const handleStart = () => {
		timerId.current = setInterval(() => {
			setCount((prevCount) => prevCount - 1)
		}, 1000)
	}

	const handleStop = () => {
		clearInterval(timerId.current)
	}
	return (
		<div style={{ padding: 32 }}>
			<Content />
			<h1 ref={h1Ref}>{count}</h1>
			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
		</div>
	)
}

export default App
