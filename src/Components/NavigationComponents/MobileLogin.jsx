import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class MobileLogin extends React.Component {
    render()
    {
    return (
    <div className="container topNavContainer">
                <ul className="mobileTopNav">
                    <li className="first"><Link to={'/SignUp'}>Sign up</Link></li>
                    <li><Link to={'/Login'}>Log in</Link></li>
                </ul>
    </div>
    );
 
}

}
export default MobileLogin;