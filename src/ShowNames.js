import React from "react";

const ShowNames = props => {
  return (
    <div>
      <ul>
        {props.input.names.map((name, i) => {
          if (props.input.luckyWinnerIndex === i) {
            return <li id="winner">{name}</li>;
          } else {
            return <li>{name}</li>;
          }
        })}
      </ul>
    </div>
  );
};

export default ShowNames;
