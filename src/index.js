import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./functionBase/components/TodoContainer"

//stylesheet
import "./functionBase/components/App.css"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)