import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class RightNavigation extends React.Component {
    render()
    {
    return (
    <ul className="nav navbar-nav navbar-right hidden-md-down">
                    <li><a href="#">How it works <span className="divider"></span></a></li>
                    <li><a href="#">Help center <span className="divider"></span></a></li>
            <li><Link to ={'/Login'}>Log in <span className="divider"></span></Link></li>
            <li><Link to ={'/SignUp'}>Sign up for free</Link></li>
                </ul>
    );
 
}

}
export default RightNavigation;