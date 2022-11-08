import React from "react"
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
  componentWillUnmount() {
    console.log("Cleaning up...")
  }
  render() {
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }
      
      const { completed, id, title } = this.props.todo;
      const viewMode = {}
      const editMode = {}
      return (
        <li className={styles.item}>

          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
          <div onDoubleClick={this.handleEditing} style={viewMode}>
          ...
        </div>
        <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={e => {
          this.props.setUpdate(e.target.value, id)
        }}
        onKeyDown={this.handleUpdatedDone}
      />
        </li>
      )
  }
}

export default TodoItem;
