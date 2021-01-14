import React from 'react';

class Student extends React.Component {
    //state = {  }

    render() { 
        return ( 
        <div>
        <p>Student</p>
        <div>
        <div style={{display: !this.props.match.params.studentname && "none"}}>{`The Student name is "${this.props.match.params.studentname}"!`}</div>
        <div style={{display: !this.props.match.params.studentno && "none"}}>{`The Student number is "${this.props.match.params.studentno}"!`}</div>
        </div>
      </div>
    )
  }
};
 
 
export default Student;

