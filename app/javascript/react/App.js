import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SplashContainer from './containers/SplashContainer';

class App extends React.Component {

  render(){
    return(
      <Router>
        <Route path='/' component={SplashContainer}/>
      </Router>
    )
  }
}

export default App;
