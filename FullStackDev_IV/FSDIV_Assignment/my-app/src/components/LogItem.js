import React from 'react';

import './LogItem.css';

const LogItem = props => {
  return (
    <>
      <h3>Durations</h3>
      <hr />
      {props.loggedtime.length ? (
        <ul>
          {props.loggedtime.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      ) : (
        <span>No time logged</span>
      )}
    </>
  );
};

export default LogItem;
