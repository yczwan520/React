import React from "react";
import "./FinishedList.css";

class FinishedList extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Finished List</div>
        <ul>
          {this.props.finishList.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FinishedList;
