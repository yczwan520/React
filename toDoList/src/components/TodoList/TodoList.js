import React from "react";
import "./TodoList.css";

class TodoList extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  handleOnClick = (deleteItem) => {
    const newList = this.props.toDoList.reduce((newList, item) => {
      if (item !== deleteItem) newList.push(item);
      return newList;
    }, []);
    this.props.changeState(newList, deleteItem);
  };

  render() {
    return (
      <div>
        <div className="title">To Do List</div>
        <ul>
          {this.props.toDoList.map((el) => (
            <div className="list">
              <li>{el}</li>{" "}
              <button onClick={() => this.handleOnClick(el)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
