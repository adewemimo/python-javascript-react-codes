import React from "react";
import Course from "./course";

const Student = props => {
return (
        <>
        <p> 
            Student <b>{props.name}</b> with student number <b>{props.number}</b>
        </p>
        <p> Student is enrolled in </p>
        <Course enrolled={props.enrolled} />
        </>
)
        
        
};

export default Student;