import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Topics from "./Topics";

export class Nestedroute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jsondata: []
    };
  }

  async componentDidMount() {
    const url = "http://localhost:3005/data";
    const resp = await fetch(url);
    const data = await resp.json();
    this.setState({
      jsondata: data
    });
    // console.log(data);
  }
  render() {
    return (
      <div>
        <Router>
          <ul>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <Route
            path="/home"
            render={props => <Home {...props} homedata={this.state.jsondata} />}
          ></Route>
          <Route exact path="/topics" component={Topics}></Route>
        </Router>
      </div>
    );
  }
}

export default Nestedroute;
