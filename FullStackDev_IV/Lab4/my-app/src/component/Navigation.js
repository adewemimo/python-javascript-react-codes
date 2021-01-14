import React from 'react';
import {Link} from "react-router-dom";


class Navigation extends React.Component {
   render(){
        return (
            <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/student/:studentname/:studentno?" >Student </Link>
              </li>
              <li>
                <Link to="/student/Jane Smith/5001?" >Student Jane Smith, Student No: 5001</Link>
              </li>
              <li>
                <Link to="/redirect" > Redirect </Link>
              </li>
            </ul>


            </div>
            
          );
    }
};

export default Navigation;
