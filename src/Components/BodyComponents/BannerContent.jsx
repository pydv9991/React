import React from 'react';
import Scores from '../RoutingComponents/Scores.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class BannerContent extends React.Component {
    render()
    {
    return (
      
    <header className="masthead">
            <div className="header-content">
                <div className="header-content-inner">
                    <h1 id="homeHeading">Your credit scores should be free. And now they are.</h1>
                    <p>Check your scores anytime, anywhere, and never pay for it.</p>
                    <Link to={'/Scores'} className="btn btn-primary btn-xl flt-none customBtn">See my scores</Link>
                </div>
                
            </div>
        </header>
     
    );
 
}

}
export default BannerContent;