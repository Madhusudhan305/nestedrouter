import React from "react";
import { Link } from "react-router-dom";
import Subroute from "./Subroute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function Home(props) {
  const sub = props.homedata;
  return (
    <div>
      <hr></hr>
      <h1>TOPICS</h1>
      <div>
        {props.homedata.map((e, index) => {
          return (
            <div>
              <div key={index}>
                <ul>
                  <Link to={`/home/${e.name}`}>
                    {" "}
                    <li>{e.name}</li>
                  </Link>
                  {/* <li></li> */}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <Route
        path="/home/:topicid"
        render={props => <Subroute {...props} subdata={sub} />}
      ></Route>
    </div>
  );
}
