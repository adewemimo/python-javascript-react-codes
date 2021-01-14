//import React from 'react';

const Course = props => {
  let courseList = [];
  for (let counter = 0; counter < props.enrolled; counter++) {
    courseList.push(`Course ${counter}`);
  }
  return <>{courseList.map(course => <p><b>{course}</b></p>)}</>;
};

export default Course;
