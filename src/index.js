import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./component/TodoContainer"
//stylesheet
import "./component/App.css"

import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./functionBased/components/App.css"

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)