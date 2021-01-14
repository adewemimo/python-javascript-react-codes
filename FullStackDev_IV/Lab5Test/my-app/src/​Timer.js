import React from "react";
import Moment from 'react-moment';

class Timer extends React.Component {
    state = { 
        date: new Date()
     }
  
    render() { 
        return (  
            <>
            <Moment format="hh:mm:ss">
                {this.state.date}
            </Moment>
            </>

        );
    }
}
 
export default Timer;