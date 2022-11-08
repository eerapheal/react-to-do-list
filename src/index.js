import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./functionBase/components/TodoContainer"

//stylesheet
import "./functionBase/components/App.css"

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)