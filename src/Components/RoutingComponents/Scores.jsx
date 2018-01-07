import React from 'react';
import PageTitle from '../MetaComponents/PageTitle.jsx';
import FixedNavbar from '../NavigationComponents/FixedNavbar.jsx';
import Footer from '../FooterComponents/Footer.jsx';
class Scores extends React.Component {
    render()
    {
    return (
         <div  className="Scores">
            <PageTitle/>
             <FixedNavbar/>
            <h1>This is your score</h1>
            <Footer/>
        </div>
    );
 
}

}
export default Scores;