import React, { Component } from "react";
import Childprops from "./Childprops";
export class Propparent extends Component {
  constructor() {
    super();
    this.state = {
      name: "madhu1",
      age: "21"
    };
  }
  render() {
    var data = {
      details: { name: "madhu12", age: "23" },
      details12: ["madhu12", "23"]
    };

    return (
      <div>
        <hh1>this is aprops</hh1>
        <Childprops name={this.state.name} age={this.state.age} />
        <Childprops name={data.details.name} age={data.details.age} />
        <Childprops name="madhu" age={21} />
        {/* <Childprops name1={this.state} /> */}
        <Childprops name1={data} />
      </div>
    );
  }
}

export default Propparent;
