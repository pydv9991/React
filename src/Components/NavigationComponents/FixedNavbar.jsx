import React from 'react';
import Header from '../NavigationComponents/Header.jsx';
import Dropdown from '../NavigationComponents/Dropdown.jsx';
import MobileLogin from '../NavigationComponents/MobileLogin.jsx';
class FixedNavbar extends React.Component {
    render()
    {
    return (
<div className="FixedNavbar">
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <Header/>
        <Dropdown/>
        <MobileLogin/>
      </div>
    </nav>
          
    </div>
        
    );
 
}

}
export default FixedNavbar;