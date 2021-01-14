import React from "react";
import Timer from "./​Timer";
import LikeButton from "./LikeButton"

class Comment extends React.Component {
  
    render() { 
        return ( 
            <div >
            <Timer />
            <div className="componentDiv"><b>{this.props.comment}</b></div>
            <LikeButton/>
            </div >
         );
    }
}
 
export default Comment;