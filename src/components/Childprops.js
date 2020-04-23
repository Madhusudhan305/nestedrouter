import React, { Component } from "react";

export class Childprops extends Component {
  render(props) {
    return (
      <div>
        <h1>child class</h1>
        <h3>
          this is {this.props.name} and my age {this.props.age}
        </h3>
        {/* <h1>
          {this.props.name1.details12.map(data2 => (
            <div>{data2}</div>
          ))}
        </h1> */}
        {/* <h1>{this.props.name1.details.name}</h1> */}
        {/* <h1>{this.props.name1.name}</h1> */}
      </div>
    );
  }
}

export default Childprops;
