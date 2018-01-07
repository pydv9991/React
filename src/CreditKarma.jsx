import React from 'react';
import PageTitle from '../src/Components/MetaComponents/PageTitle.jsx';
import FixedNavbar from '../src/Components/NavigationComponents/FixedNavbar.jsx';
import Body from '../src/Components/BodyComponents/Body.jsx';
import { BrowserRouter as Router, Switch, Route, Link,withRouter,pathname } from 'react-router-dom';
require('../src/css/bootstrap.css');
require('../src/css/custom.css');


class CreditKarma extends React.Component {
    
    render()
    
    {
  
    return (
    <div className="CreditKarma"> 
     <PageTitle/>
     <FixedNavbar/>
     <Body/>
    </div>
    );
 
}

}
export default CreditKarma;
