import { useEffect, useState } from "react"

const lessons = [
	{
		id: 1,
		name: "React là gì?",
	},
	{
		id: 2,
		name: "SPA/MPA",
	},
	{
		id: 3,
		name: "Function là gì",
	},
]

function Content() {
	const [lessonId, setLessonId] = useState(1)

	useEffect(() => {
		const handleEvent = ({ detail }) => {
			console.log({ detail })
		}
		window.addEventListener(`lesson-${lessonId}`, handleEvent)
		return () => {
			window.removeEventListener(`lesson-${lessonId}`, handleEvent)
		}
	}, [lessonId])

	return (
		<div>
			<ul>
				{lessons.map((lesson) => (
					<li
						key={lesson.id}
						style={{ color: lessonId === lesson.id ? "red" : "#333" }}
						onClick={() => setLessonId(lesson.id)}
					>
						{lesson.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Content
