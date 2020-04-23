import React from "react";
// import { Link } from "react-router-dom";
export default function Subroute(props, { match }) {
  const matchf = props.subdata.find(
    ({ name }) => name === props.match.params.topicid
  );
  const matchdata = matchf.map((e, index) => {
    return <div key={index}>{e.name}</div>;
  });
  return (
    <div>
      {matchdata}
      {console.log(matchf)}
    </div>
  );
}
