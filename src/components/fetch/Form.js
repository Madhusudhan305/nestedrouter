import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      sname: "",
      lname: ""
    };
  }
  onsubmite = e => {
    this.setState({
      [this.target.name]: this.torget.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onsubmite}>
          <input type="text" name="name"></input>
          <input type="text" name="sname"></input>
          <input type="text" name="lname"></input>
          <button type="submit">click me</button>
        </form>
        {this.state.name}
        {this.state.sname}
        {this.state.lname}
      </div>
    );
  }
}

export default Form;
