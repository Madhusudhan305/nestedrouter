import React, { Component } from "react";
import Child from "./Child";
export class Fechjsonser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jsondata: []
    };
  }

  async componentDidMount() {
    const url = "http://localhost:3004/data";
    const resp = await fetch(url);
    const data = await resp.json();
    this.setState({
      jsondata: data,
      name1: "madhu"
    });
    console.log(data);
  }
  render() {
    const data1 = this.state.jsondata.map((e, index) => {
      return (
        <div key="index">
          <li>{e.name}</li>
        </div>
      );
    });

    return (
      <div>
        {/* {fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then(response => response.json())
          .then(json => console.log(json))} */}
        this is
        <div>
          {data1}
          <h1>{this.state.name1}</h1>
          <Child data1={this.state.jsondata} />
        </div>
      </div>
    );
  }
}

export default Fechjsonser;
