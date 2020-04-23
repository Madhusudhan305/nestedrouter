import React, { Component } from "react";

export class Child extends Component {
  render(props) {
    var data2 = this.props.data1.map((e, index) => {
      return (
        <div key="index">
          <div>
            <h3>{e.name}</h3>
          </div>
          <ul>
            <li>{e.albums[0].albumId}</li>
            <li>{e.albums[0].title}</li>
            <li>{e.albums[0].year}</li>
            <li>{e.albums[0].cover}</li>
            <li>{e.albums[0].price}</li>
          </ul>
        </div>
      );
    });
    return (
      <div>
        this is child class
        {data2}
      </div>
    );
  }
}

export default Child;
