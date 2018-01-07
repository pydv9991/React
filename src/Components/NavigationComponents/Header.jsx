import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Header extends React.Component {
    render()
    {
    return (
     <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
            <Link to={'/'} className="navbar-brand"><img src="src/images/CK-Logo.png"/></Link>
        </div>    
    );
 
}

}
export default Header;