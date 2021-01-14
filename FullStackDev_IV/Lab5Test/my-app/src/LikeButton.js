import React from "react";

class LikeButton extends React.Component {
    state = { 
        likeClicks: 0
     }

    clickedButton = () => {
        this.setState({likeClicks: this.state.likeClicks + 1})
    }


    render() { 
        return ( 
            <div className="componentDiv" >
            <button type="button" onClick={this.clickedButton}> Like </button>
            <div>{this.state.likeClicks} likes</div>
            </div>
            

         );
    }
}
 
export default LikeButton;