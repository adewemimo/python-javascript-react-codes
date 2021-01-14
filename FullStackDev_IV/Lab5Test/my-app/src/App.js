import React from "react";
import TweetContainer from "./TweetContainer";

class App extends React.Component {
  state = { 
    labels: ["Stop Covid 19, Take out Only!", 
              "At home, binge watching Breaking Bad for the second time!",
              "When is the beach opening up? I cannot wait..."]
    
   }   

  render() { 
    return (  
      <div className="mainContainer">
      {
        this.state.labels.map(label => <TweetContainer key={label} label={label}/>)
      }
      </div >
      
    );
  }
}
 
export default App;

