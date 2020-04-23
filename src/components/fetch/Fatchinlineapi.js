import React, { Component } from "react";
import Child from "./Child";
import JSON from "./db.json";
export class Fatchinlineapi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: JSON
    };
  }

  render() {
    return (
      <div>
        <h1>this is a faching api </h1>
        {/* {this.state.data.map(e => {
          return e.id;
        })} */}
        <div>
          <Child data1={JSON} />
        </div>
      </div>
    );
  }
}

export default Fatchinlineapi;
