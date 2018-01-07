import React from 'react';

class FooterBanner extends React.Component {
    render()
    {
    return (
        <div>
          <section className="foothead">
                <div className="footer-content">
                    <div className="footer-content-inner">
                        <h1 id="footerHeading">It never hurts to check.</h1>
                        <p>Check your credit reports as often as you <br/> want, it won’t affect your scores.</p>
                        <div className="footBtnWrap"><a className="btn btn-primary btn-xl js-scroll-trigger customBtn" href="#about">Show me my scores</a></div>
                    </div>
                </div>

            </section>
          <div className="smallDeviceFooter">
                <ul className="footer-links">
                    <li><a href="">About Credit Karma</a></li>
                    <li><a href="">Security</a></li>
                    <li><a href="">Practices</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="" className="noBorder">Terms of Use</a></li>
                </ul>
            </div>
        </div>
    );
 
}

}
export default FooterBanner;