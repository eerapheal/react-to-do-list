import React from "react";
import Header from "./Header"
// eslint-disable-next-line
import TodosList from "./TodosList";
// eslint-disable-next-line
import InputTodo from "./InputTodo"
class TodoContainer extends React.Component {
  state = {
    todos: [],
  };
   handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
  };
  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };
  addTodoItem = title => {
     const newTodo = {
    id: 4,
    title: title,
    completed: false
  };
  this.setState({
    todos: [...this.state.todos, newTodo]
  });
  };
  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }
  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  }
  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp)
    }
  }
  componentDidMount() {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
  }
  render() {
    const viewMode = {}
const editMode = {}

if (this.state.editing) {
  viewMode.display = "none"
} else {
  editMode.display = "none"
}
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
