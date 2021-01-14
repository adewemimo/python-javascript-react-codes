import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Error from "./component/Error";
import About from "./component/About";
import Navigation from "./component/Navigation";
import Student from "./component/Student";
import history from "./history";
import Redirect from "./component/Redirect";


class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <BrowserRouter history={history}>
        <div>
          <Navigation />
          <Route>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/student/:studentname/:studentno?" component={Student} />
              <Route path="/" component={Redirect} />
              <Route component={Error}/>

            </Switch>
          </Route>
        </div>
      </BrowserRouter>
      
    );
  }
}
 
export default App;