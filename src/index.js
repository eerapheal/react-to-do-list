import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./component/TodoContainer"
//stylesheet
import "./component/App.css"

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)