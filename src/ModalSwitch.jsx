import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import CreditKarma from './CreditKarma.jsx';
import Scores from './Components/RoutingComponents/Scores.jsx';
import Login from './Components/FormComponents/Login.jsx';





class ModalSwitch extends React.Component {
   
  
  render() {
	  
return(
	  
	<Router>
	<div>
          
        <Switch>
          <Route exact path='/' component={CreditKarma}/>
          <Route path='/Scores' component={Scores}/>
          <Route path='/Login' component={Login}/>
          <Route path='/SignUp' component={Scores}/>
       
        </Switch>
            
      </div>
    </Router>
	  
	  );	  
  }  
}


export default ModalSwitch;