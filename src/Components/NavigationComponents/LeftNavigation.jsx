import React from 'react';
class LeftNavigation extends React.Component {
    render()
    {
    return (
        <ul className="nav navbar-nav">
                    <li className="dropdown active">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Credit Cards <span className="glyphicon glyphicon-menu-down"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                        </ul>
                    </li>
                    <li><a href="#about">Loans</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Loans<span className="glyphicon glyphicon-menu-down"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Auto</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources <span className="glyphicon glyphicon-menu-down"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                            <li role="separator" className="divider"></li>
                            <li className="dropdown-header">Menu Item</li>
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Tax</a>
                    </li>
                </ul>
    );
 
}

}
export default LeftNavigation;