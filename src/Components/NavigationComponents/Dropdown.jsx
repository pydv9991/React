import React from 'react';
import RightNavigation from '../NavigationComponents/RightNavigation.jsx';
import LeftNavigation from '../NavigationComponents/LeftNavigation.jsx';
class Dropdown extends React.Component {
    render()
    {
    return (
         <div id="navbar" className="navbar-collapse collapse">
          <LeftNavigation/>
          <RightNavigation/>
        </div>
    );
 
}

}
export default Dropdown;