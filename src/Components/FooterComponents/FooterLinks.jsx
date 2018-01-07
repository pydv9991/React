import React from 'react';
import FooterCircle from '../FooterComponents/FooterCircle.jsx';
class FooterLinks extends React.Component {
    render()
    {
    return (
         <div className="centered clearfix">
                <div className="footer-navigation">
                    <div className="footer-links-holder">
                        <h3><a href="">COMPANY INFO</a></h3>
                        <ul className="footer-links">
                            <li><a href="">About Credit Karma</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Help Center</a></li>
                            <li><a href="">In The News</a></li>
                            <li><a href="">Security Practices</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terma of Use</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-holder">
                        <h3><a href="">POPULAR OFFERS</a></h3>
                        <ul className="footer-links">
                            <li><a href="">Best Credit Cards From Our Partners</a></li>
                            <li><a href="">Credit Cards for Limited Credit</a></li>
                            <li><a href="">Credit Cards for Poor Credit</a></li>
                            <li><a href="">Credit Cards for Good Credit</a></li>
                            <li><a href="">Personal Loans</a></li>
                            <li><a href="">Auto Insurance</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-holder">
                        <h3><a href="">CREDIT RESOURCES</a></h3>
                        <ul className="footer-links">
                            <li><a href="">Credit and Finance Articles</a></li>
                            <li><a href="">Credit Karma Community</a></li>
                            <li><a href="">Credit Card Reviews</a></li>
                            <li><a href="">Financial Calculators</a></li>
                            <li><a href="">Credit Karma Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-holder">
                        <h3><a href="">NOTABLE LINKS</a></h3>
                        <ul className="footer-links">
                            <li><a href="">What is a Good Credit Score?</a></li>
                            <li><a href="">Quick Tips for Your Credit Health</a></li>
                            <li><a href="">Free Credit Report</a></li>
                            <li><a href="">Free Credit Monitoring</a></li>
                            <li><a href="">Free Credit Score</a></li>
                            <li><a href="">Credit Scores</a></li>
                        </ul>
                    </div>
                    <FooterCircle/>
                    <div className="digicertImg"><img src="src/images/digicert.png" />
                    </div>

                    <p className="footText">2007-2016 Credit Karma, Inc. Credit Karma is a registered trademark of Credit Karma Inc. All Rights Reserved. Product name, logo, brands, and other trademarks featured or referred to within Credit Karma are the property of their respective trademark holders. This site may be compensated through third party advertisers.
                    </p>
                    <p className="footText hidden-xs">iPhone is a trademark of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.</p>
                    <p className="footText hidden-xs">Android is a trademark of Google Inc.</p>
                    <p className="footText">The Equifax logo is a registered trademark owned by Equifax in the United States and other countries.</p>
                </div>
            </div>

    );
 
}

}
export default FooterLinks;