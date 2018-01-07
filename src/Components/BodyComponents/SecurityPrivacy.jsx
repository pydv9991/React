import React from 'react';

class FollowMoney extends React.Component {
    render()
    {
    return (
       <div className="row securityAndPrivacy">
                    <h1 className="subHeadingText marginBtm100">We treat your data as if it was our own</h1>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4 secutirySection">
                        <img src="src/images/Security.png" align="center" className="img-fluid" />
                        <h2 className="subHeading">Security</h2>
                        <p className="subPara">We use 128-bit encryption to protect the transmission of your data to our site.</p>
                        <a href="" className="learnMore">Learn more.</a>
                    </div>
                    <div className="col-lg-4 privacySection" style={{textAlign:'center'}}>
                        <img src="src/images/Privacy.png" align="center" className="img-fluid" />
                        <h2 className="subHeading">Privacy</h2>
                        <p className="subPara">We won't sell or rent your personal information to third parties for marketing purposes.</p>
                        <a href="" className="learnMore">Learn more.</a>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
    );
 
}

}
export default FollowMoney;