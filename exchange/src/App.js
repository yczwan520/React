import React from "react";
import { Calendar } from "antd";
// import "./App.css";
import moment from "moment";
import ExchangeCurrency from "./ExchangeCurrency";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
    };
  }

  render() {
    return (
      <div>
        <Calendar
          fullscreen={false}
          onChange={(date) => {
            this.setState({ date: moment(date).format("YYYY-MM-DD") });
          }}
          onPanelChange={(date, mode) => {
            console.log(date, mode);
          }}
        />
        <ExchangeCurrency date={this.state.date} />
      </div>
    );
  }
}
export default App;
