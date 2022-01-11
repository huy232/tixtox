import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

function emitComment(id) {
	setInterval(() => {
		window.dispatchEvent(
			new CustomEvent(`lesson-${id}`, {
				detail: `Nội dung comment của lession ${id}`,
			})
		)
	}, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
