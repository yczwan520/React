import React from "react";
import { message, Select } from "antd";
import moment from "moment";
// eslint-disable-next-line
import "antd/dist/antd.css"; //

const { Option } = Select;
class ExchangeCurrency extends React.Component {
  constructor(props) {
    //
    super(props); //
    this.state = {
      currency: "USD",
      rate: "",
      date: moment().format("YYYY-MM-DD"), //
    };
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (this.props.date !== nextProps.date) {
      this.setState({
        date: nextProps.date,
      });
      this.fetchRate();
    }
  };

  handleChange = (value) => {
    console.log(`selected ${value}`);
    this.setState({ currency: value });
  };

  fetchRate = () => {
    const res = fetch(
      `https://www.bankofcanada.ca/valet/observations/FXCAD${
        this.state.currency
      }?start_date=${
        this.props.date ? this.props.date : this.state.date
      }&end_date=${this.props.date ? this.props.date : this.state.date}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.observations.length) {
          this.setState({
            rate: data.observations[0][`FXCAD${this.state.currency}`].v,
          });
        } else {
          message.info("There is no exchange rate on this date!");
          this.setState({ rate: "" });
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <div>
          <Select
            defaultValue="USD"
            style={{
              width: 120,
            }}
            onChange={this.handleChange}
          >
            <Option value="USD">USD</Option>
            <Option value="EUR">EUR</Option>
          </Select>
        </div>
        <div>
          <p>Today's exchange rate is ${this.state.rate}</p>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchRate();
  };

  componentDidUpdate = (a, prevState) => {
    if (this.state.currency !== prevState.currency) {
      this.fetchRate();
    }
  };
}
export default ExchangeCurrency;
