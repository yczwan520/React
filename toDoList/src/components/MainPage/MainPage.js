import React from "react";
import TodoList from "../TodoList/TodoList"; //import sub component js docs
import FinishedList from "../FinishedList/FinishedList";
import "./MainPage.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      finishList: [],
    };
  }

  handleOnClick = (e) => {
    this.setState({
      toDoList: this.state.toDoList.concat([
        document.getElementById("input").value,
      ]),
    });
    document.getElementById("form").reset();
    e.preventDefault();
  };

  changeState = (newList, deleteItem) => {
    this.setState({
      toDoList: newList,
      finishList: this.state.finishList.concat([deleteItem]),
    });
  };

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1>This is my list for todo and finish.</h1>
          <form id="form">
            <label for="input">Please input: </label>
            <input type="text" id="input" />
            <input type="submit" value="Add" onClick={this.handleOnClick} />
          </form>
        </header>
        <div className="list">
          <TodoList
            toDoList={this.state.toDoList}
            changeState={this.changeState}
          />
          <FinishedList finishList={this.state.finishList} />
        </div>
      </div>
    );
  }
}

export default MainPage;
