import React from 'react';
import BannerContent from '../BodyComponents/BannerContent.jsx';
import TakeLook from '../BodyComponents/TakeLook.jsx';
import MoreScores from '../BodyComponents/MoreScores.jsx';
import Insights from '../BodyComponents/Insights.jsx';
import BetterDecisions from '../BodyComponents/BetterDecisions.jsx';
import FollowMoney from '../BodyComponents/FollowMoney.jsx';
import SecurityPrivacy from '../BodyComponents/SecurityPrivacy.jsx';
import Footer from '../FooterComponents/Footer.jsx';
import FooterBanner from '../FooterComponents/FooterBanner.jsx';


class Body extends React.Component {
    render()
    
    {
    return (
    
    <div className="container bodyContainer">
       <BannerContent/>

        <section className="scoresInfo">
            <div className="container freeCreditContainer">
                
                <TakeLook/>
                <MoreScores/>
                <Insights/>
                <BetterDecisions/>
                <FollowMoney/>
				<SecurityPrivacy/>
            </div>
        </section>
      <FooterBanner/>
       <Footer/>
    </div>
    );
 
}

}
export default Body;